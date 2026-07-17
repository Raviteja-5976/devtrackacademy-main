import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const isRealSupabaseConfigured = 
  supabaseUrl && 
  supabaseUrl !== 'YOUR_SUPABASE_URL' && 
  supabaseAnonKey && 
  supabaseAnonKey !== 'YOUR_SUPABASE_ANON_KEY';

// In-memory/localStorage fallback client for local development
class MockSupabaseAuth {
  private listeners: Array<(event: string, session: any) => void> = [];
  private currentUser: any = null;

  constructor() {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('dt_mock_user');
      if (storedUser) {
        try {
          this.currentUser = JSON.parse(storedUser);
        } catch (e) {
          this.currentUser = null;
        }
      }
    }
  }

  private triggerChange(event: string) {
    const session = this.currentUser ? { user: this.currentUser } : null;
    this.listeners.forEach((cb) => cb(event, session));
  }

  async signUp({ email, password }: any) {
    if (typeof window !== 'undefined') {
      const users = JSON.parse(localStorage.getItem('dt_mock_users') || '[]');
      if (users.some((u: any) => u.email === email)) {
        return { data: { user: null }, error: { message: 'User already exists' } };
      }
      const newUser = { id: Math.random().toString(36).substring(7), email };
      users.push({ ...newUser, password });
      localStorage.setItem('dt_mock_users', JSON.stringify(users));
      
      this.currentUser = newUser;
      localStorage.setItem('dt_mock_user', JSON.stringify(newUser));
      this.triggerChange('SIGNED_IN');
      return { data: { user: newUser }, error: null };
    }
    return { data: { user: null }, error: { message: 'Window is not defined' } };
  }

  async signInWithPassword({ email, password }: any) {
    if (typeof window !== 'undefined') {
      const users = JSON.parse(localStorage.getItem('dt_mock_users') || '[]');
      const user = users.find((u: any) => u.email === email && u.password === password);
      if (!user) {
        return { data: { user: null }, error: { message: 'Invalid login credentials' } };
      }
      const loggedInUser = { id: user.id, email: user.email };
      this.currentUser = loggedInUser;
      localStorage.setItem('dt_mock_user', JSON.stringify(loggedInUser));
      this.triggerChange('SIGNED_IN');
      return { data: { user: loggedInUser }, error: null };
    }
    return { data: { user: null }, error: { message: 'Window is not defined' } };
  }

  async signOut() {
    this.currentUser = null;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('dt_mock_user');
    }
    this.triggerChange('SIGNED_OUT');
    return { error: null };
  }

  async getUser() {
    return { data: { user: this.currentUser }, error: null };
  }

  async getSession() {
    return { data: { session: this.currentUser ? { user: this.currentUser } : null }, error: null };
  }

  onAuthStateChange(callback: (event: string, session: any) => void) {
    this.listeners.push(callback);
    // Initial call
    const session = this.currentUser ? { user: this.currentUser } : null;
    callback('INITIAL_SESSION', session);
    
    return {
      data: {
        subscription: {
          unsubscribe: () => {
            this.listeners = this.listeners.filter((cb) => cb !== callback);
          },
        },
      },
    };
  }
}

// Export the client
export const supabase = isRealSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : ({
      auth: new MockSupabaseAuth(),
    } as any);

export const isMockClient = !isRealSupabaseConfigured;
