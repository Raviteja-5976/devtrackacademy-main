import { NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabaseServer';
import { sendOTPEmail } from '@/lib/email';

// Dev fallback in-memory database to allow pair-programming testing before DB keys are added
const globalForMockWaitlist = global as unknown as {
  mockWaitlist: Map<string, { email: string; otp: string; verified: boolean }>;
};

if (!globalForMockWaitlist.mockWaitlist) {
  globalForMockWaitlist.mockWaitlist = new Map();
}

const mockWaitlist = globalForMockWaitlist.mockWaitlist;

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { status: 'error', message: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const cleanEmail = email.toLowerCase().trim();

    // 1. Check if real Supabase client is configured
    if (supabaseServer) {
      // Check if user exists
      const { data: existing, error: fetchError } = await supabaseServer
        .from('waitlist')
        .select('*')
        .eq('email', cleanEmail)
        .maybeSingle();

      if (fetchError) {
        console.error('Supabase fetch error:', fetchError);
        return NextResponse.json(
          { status: 'error', message: 'Failed to access waitlist database.' },
          { status: 500 }
        );
      }

      if (existing) {
        if (existing.verified) {
          return NextResponse.json({
            status: 'already_verified',
            message: 'You are already verified and on the waitlist! 🎉'
          });
        } else {
          // Send existing OTP to verify
          await sendOTPEmail(cleanEmail, existing.otp);
          return NextResponse.json({
            status: 'pending_verification',
            message: 'Your verification is pending. We have re-sent the existing verification code to your email.'
          });
        }
      }

      // Generate a new 6-digit OTP
      const otp = Math.floor(100000 + Math.random() * 900000).toString();

      // Insert new unverified user
      const { error: insertError } = await supabaseServer
        .from('waitlist')
        .insert({
          email: cleanEmail,
          otp,
          verified: false
        });

      if (insertError) {
        console.error('Supabase insert error:', insertError);
        return NextResponse.json(
          { status: 'error', message: 'Failed to save to waitlist database.' },
          { status: 500 }
        );
      }

      // Send the OTP via email
      await sendOTPEmail(cleanEmail, otp);

      return NextResponse.json({
        status: 'pending_verification',
        message: 'An OTP has been sent to your email to verify your subscription.'
      });

    } else {
      // 2. MOCK FALLBACK MODE (When supabase is not configured yet)
      console.log(`[WAITLIST MOCK] Database not configured. Running in-memory mock mode.`);
      const existing = mockWaitlist.get(cleanEmail);

      if (existing) {
        if (existing.verified) {
          return NextResponse.json({
            status: 'already_verified',
            message: 'You are already verified and on the waitlist! 🎉'
          });
        } else {
          // Send existing OTP
          await sendOTPEmail(cleanEmail, existing.otp);
          return NextResponse.json({
            status: 'pending_verification',
            message: '[DEV MOCK] Verification pending. Re-sent code to your email.'
          });
        }
      }

      // Generate a new 6-digit OTP
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      mockWaitlist.set(cleanEmail, { email: cleanEmail, otp, verified: false });

      // Send OTP (will log in dev console)
      await sendOTPEmail(cleanEmail, otp);

      return NextResponse.json({
        status: 'pending_verification',
        message: '[DEV MOCK] An OTP has been sent to your email/console to verify your subscription.',
        debugOtp: process.env.NODE_ENV === 'development' ? otp : undefined
      });
    }

  } catch (error: any) {
    console.error('Waitlist join API error:', error);
    return NextResponse.json(
      { status: 'error', message: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}
