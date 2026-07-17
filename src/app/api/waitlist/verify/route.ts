import { NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabaseServer';
import { sendConfirmationEmail } from '@/lib/email';

// Import the shared global mock database
const globalForMockWaitlist = global as unknown as {
  mockWaitlist: Map<string, { email: string; otp: string; verified: boolean }>;
};

const mockWaitlist = globalForMockWaitlist.mockWaitlist || new Map();

export async function POST(request: Request) {
  try {
    const { email, otp } = await request.json();

    if (!email || !otp) {
      return NextResponse.json(
        { status: 'error', message: 'Email and OTP verification code are required.' },
        { status: 400 }
      );
    }

    const cleanEmail = email.toLowerCase().trim();
    const cleanOtp = otp.trim();

    // 1. Verify using Supabase if configured
    if (supabaseServer) {
      const { data: record, error: fetchError } = await supabaseServer
        .from('waitlist')
        .select('*')
        .eq('email', cleanEmail)
        .maybeSingle();

      if (fetchError) {
        console.error('Supabase fetch error during verification:', fetchError);
        return NextResponse.json(
          { status: 'error', message: 'Failed to access waitlist database.' },
          { status: 500 }
        );
      }

      if (!record) {
        return NextResponse.json(
          { status: 'error', message: 'Waitlist record not found. Please submit your email again.' },
          { status: 404 }
        );
      }

      if (record.verified) {
        return NextResponse.json({
          status: 'success',
          message: 'You are already verified and on the waitlist! 🎉 If you did not receive our email, please check your spam folder.'
        });
      }

      if (record.otp === cleanOtp) {
        // Update verified status
        const { error: updateError } = await supabaseServer
          .from('waitlist')
          .update({ verified: true })
          .eq('email', cleanEmail);

        if (updateError) {
          console.error('Supabase update error during verification:', updateError);
          return NextResponse.json(
            { status: 'error', message: 'Failed to update waitlist verification status.' },
            { status: 500 }
          );
        }

        // Send confirmation email
        await sendConfirmationEmail(cleanEmail);

        return NextResponse.json({
          status: 'success',
          message: 'Thank you for joining the waitlist! If you did not see our email, please check your spam folder.'
        });
      } else {
        return NextResponse.json(
          { status: 'error', message: 'Invalid OTP code. Please check your email and try again.' },
          { status: 400 }
        );
      }

    } else {
      // 2. MOCK FALLBACK MODE
      const record = mockWaitlist.get(cleanEmail);

      if (!record) {
        return NextResponse.json(
          { status: 'error', message: '[DEV MOCK] Waitlist record not found.' },
          { status: 404 }
        );
      }

      if (record.verified) {
        return NextResponse.json({
          status: 'success',
          message: '[DEV MOCK] You are already verified! If you did not receive our email, please check your spam folder.'
        });
      }

      if (record.otp === cleanOtp) {
        // Update mock
        record.verified = true;
        mockWaitlist.set(cleanEmail, record);

        // Send mock confirmation email
        await sendConfirmationEmail(cleanEmail);

        return NextResponse.json({
          status: 'success',
          message: 'Thank you for joining the waitlist! If you did not see our email, please check your spam folder.'
        });
      } else {
        return NextResponse.json(
          { status: 'error', message: 'Invalid OTP code. Please try again.' },
          { status: 400 }
        );
      }
    }

  } catch (error: any) {
    console.error('Waitlist verify API error:', error);
    return NextResponse.json(
      { status: 'error', message: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}
