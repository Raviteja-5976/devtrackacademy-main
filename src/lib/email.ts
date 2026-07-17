import nodemailer from 'nodemailer';

const host = process.env.SMTP_HOST || '';
const port = parseInt(process.env.SMTP_PORT || '587', 10);
const user = process.env.SMTP_USER || '';
const pass = process.env.SMTP_PASSWORD || '';
const fromOtp = process.env.SMTP_FROM_OTP || user;
const fromConfirm = process.env.SMTP_FROM_CONFIRM || user;

const isRealSmtpConfigured = 
  host && 
  host !== 'YOUR_SMTP_HOST' && 
  user && 
  user !== 'YOUR_SMTP_USERNAME' && 
  pass && 
  pass !== 'YOUR_SMTP_PASSWORD';

const transporter = isRealSmtpConfigured
  ? nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    })
  : null;

export async function sendOTPEmail(email: string, otp: string) {
  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Verify Your Email - DevTrack Academy</title>
  <style>
    body {
      background-color: #FFF8F0;
      color: #1B1F3B;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      margin: 0;
      padding: 0;
    }
    .wrapper {
      background-color: #FFF8F0;
      width: 100%;
      padding: 40px 0;
    }
    .container {
      max-width: 500px;
      margin: 0 auto;
      background-color: #FFFFFF;
      border: 4px solid #1B1F3B;
      border-radius: 24px;
      padding: 40px;
      box-shadow: 6px 6px 0px 0px #1B1F3B;
    }
    .logo-container {
      text-align: center;
      margin-bottom: 30px;
    }
    .logo-container img {
      max-height: 80px;
      width: auto;
    }
    .title {
      font-size: 28px;
      font-weight: 900;
      color: #1B1F3B;
      text-align: center;
      margin-bottom: 20px;
    }
    .description {
      font-size: 16px;
      line-height: 1.6;
      color: #1b1f3b;
      margin-bottom: 30px;
      text-align: center;
    }
    .otp-box {
      background-color: #6EE7B7;
      border: 3px solid #1B1F3B;
      border-radius: 12px;
      padding: 15px 25px;
      font-size: 32px;
      font-weight: 900;
      letter-spacing: 5px;
      color: #1B1F3B;
      text-align: center;
      margin: 20px auto;
      width: fit-content;
      box-shadow: 4px 4px 0px 0px #1B1F3B;
    }
    .footer {
      margin-top: 40px;
      font-size: 12px;
      color: #1B1F3B;
      opacity: 0.6;
      text-align: center;
      border-top: 2px solid #1B1F3B;
      padding-top: 20px;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="container">
      <div class="logo-container">
        <img src="https://i.ibb.co/1YkVxXBc/Logo-remove-text-2-K-202607062237-removebg-preview.png" alt="Logo remove text 2K 202607062237 removebg preview" border="0">
      </div>
      <h1 class="title">Verify Your Email</h1>
      <p class="description">Thank you for your interest in joining the DevTrack Academy ecosystem. Please use the following One-Time Password (OTP) to verify your email and complete your waitlist subscription:</p>
      <div class="otp-box">${otp}</div>
      <p class="description" style="font-size: 14px; margin-top: 30px;">This OTP is valid for 15 minutes. If you did not request this, you can safely ignore this email.</p>
      <div class="footer">
        &copy; 2026 DevTrack Academy. All rights reserved.
      </div>
    </div>
  </div>
</body>
</html>`;

  if (!transporter) {
    console.log(`\n======================================================`);
    console.log(`[SMTP MOCK] OTP EMAIL SENT TO: ${email}`);
    console.log(`[SMTP MOCK] OTP VALUE: ${otp}`);
    console.log(`======================================================\n`);
    return;
  }

  await transporter.sendMail({
    from: fromOtp,
    to: email,
    subject: `Verify Your Email: ${otp} - DevTrack Academy`,
    html,
  });
}

export async function sendConfirmationEmail(email: string) {
  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Welcome to the Waitlist - DevTrack Academy</title>
  <style>
    body {
      background-color: #FFF8F0;
      color: #1B1F3B;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      margin: 0;
      padding: 0;
    }
    .wrapper {
      background-color: #FFF8F0;
      width: 100%;
      padding: 40px 0;
    }
    .container {
      max-width: 500px;
      margin: 0 auto;
      background-color: #FFFFFF;
      border: 4px solid #1B1F3B;
      border-radius: 24px;
      padding: 40px;
      box-shadow: 6px 6px 0px 0px #1B1F3B;
    }
    .logo-container {
      text-align: center;
      margin-bottom: 30px;
    }
    .logo-container img {
      max-height: 80px;
      width: auto;
    }
    .title {
      font-size: 28px;
      font-weight: 900;
      color: #1B1F3B;
      text-align: center;
      margin-bottom: 20px;
    }
    .description {
      font-size: 16px;
      line-height: 1.6;
      color: #1B1F3B;
      margin-bottom: 25px;
      text-align: left;
    }
    .cta-btn {
      display: block;
      width: fit-content;
      margin: 30px auto;
      background-color: #FF6B35;
      color: #FFFFFF !important;
      text-decoration: none;
      font-weight: 900;
      font-size: 18px;
      padding: 15px 30px;
      border: 3px solid #1B1F3B;
      border-radius: 30px;
      box-shadow: 4px 4px 0px 0px #1B1F3B;
      text-align: center;
    }
    .cta-btn:hover {
      background-color: #FF8552;
    }
    .bullet-points {
      margin: 20px 0;
      padding-left: 20px;
    }
    .bullet-points li {
      margin-bottom: 12px;
      font-size: 15px;
      line-height: 1.5;
    }
    .footer {
      margin-top: 40px;
      font-size: 12px;
      color: #1B1F3B;
      opacity: 0.6;
      text-align: center;
      border-top: 2px solid #1B1F3B;
      padding-top: 20px;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="container">
      <div class="logo-container">
        <img src="https://i.ibb.co/1YkVxXBc/Logo-remove-text-2-K-202607062237-removebg-preview.png" alt="Logo remove text 2K 202607062237 removebg preview" border="0">
      </div>
      <h1 class="title">You're On The List! 🎉</h1>
      <p class="description">Hey there,</p>
      <p class="description">Your email has been verified! You are officially on the early testing list for the DevTrack Academy <strong>Learning Platform</strong>.</p>
      <p class="description">Here is what is waiting for you:</p>
      <ul class="bullet-points">
        <li><strong>Early Sandbox Access</strong>: Be the first to test our integrated coding sandboxes and AI guides.</li>
        <li><strong>Exclusive Workshops</strong>: Our interactive developer cohorts are live now! Get priority booking slots and early bird discounts.</li>
        <li><strong>Direct Mentorship</strong>: Get feedback on assignments directly from industry engineers.</li>
      </ul>
      <a href="https://workshop.devtrackacademy.com" class="cta-btn">Access Workshops Now</a>
      <p class="description" style="font-size: 14px; opacity: 0.8; margin-top: 30px;">If you have any questions, just reply to this email. We're excited to build with you!</p>
      <div class="footer">
        &copy; 2026 DevTrack Academy. All rights reserved.
      </div>
    </div>
  </div>
</body>
</html>`;

  if (!transporter) {
    console.log(`\n======================================================`);
    console.log(`[SMTP MOCK] CONFIRMATION EMAIL SENT TO: ${email}`);
    console.log(`======================================================\n`);
    return;
  }

  await transporter.sendMail({
    from: fromConfirm,
    to: email,
    subject: `You're on the list! - DevTrack Academy`,
    html,
  });
}
