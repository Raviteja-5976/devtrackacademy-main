'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Mail, Calendar, Compass, Star } from 'lucide-react';
import Magnetic from './Magnetic';

export default function UpcomingPlatforms() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [debugMsg, setDebugMsg] = useState('');

  // OTP Verification Modal State
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otpCode, setOtpCode] = useState('');
  const [otpLoading, setOtpLoading] = useState(false);
  const [otpError, setOtpError] = useState('');

  const roadmapItems = [
    {
      title: 'Workshop Platform',
      desc: 'Live interactive classes, mentor feedback systems, assignments, and portfolio building cohorts.',
      status: 'Active',
      date: 'Launched',
      color: 'bg-mint',
    },
    {
      title: 'Learning Platform',
      desc: 'Self-paced modules, AI-assisted code environments, custom dashboard tracking, and video guides.',
      status: 'Coming Soon',
      date: 'August 8, 2026',
      color: 'bg-sky',
    },
    {
      title: 'Community Features',
      desc: 'Global coding tournaments, peer-to-peer workspace reviews, and interactive engineering discussions.',
      status: 'Coming Soon',
      date: 'Coming Soon',
      color: 'bg-coral',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    setErrorMsg('');
    setSuccessMsg('');
    setDebugMsg('');

    try {
      const response = await fetch('/api/waitlist/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await response.json();

      if (!response.ok || data.status === 'error') {
        setErrorMsg(data.message || 'Something went wrong. Please try again.');
        setLoading(false);
        return;
      }

      if (data.status === 'already_verified') {
        setSuccessMsg(data.message);
        setSubmitted(true);
      } else if (data.status === 'pending_verification') {
        setOtpError('');
        setOtpCode('');
        setDebugMsg(data.debugOtp ? `[DEV MOCK] Your OTP is: ${data.debugOtp}` : '');
        setShowOtpModal(true);
      }
    } catch (err) {
      console.error(err);
      setErrorMsg('Failed to connect to the server. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otpCode.trim()) return;

    setOtpLoading(true);
    setOtpError('');

    try {
      const response = await fetch('/api/waitlist/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), otp: otpCode.trim() }),
      });

      const data = await response.json();

      if (!response.ok || data.status === 'error') {
        setOtpError(data.message || 'Invalid code. Please check and try again.');
        setOtpLoading(false);
        return;
      }

      // Success
      setSuccessMsg(data.message);
      setSubmitted(true);
      setShowOtpModal(false);
    } catch (err) {
      console.error(err);
      setOtpError('Failed to connect to the server. Please try again.');
    } finally {
      setOtpLoading(false);
    }
  };

  return (
    <section id="roadmap" className="py-24 px-6 bg-brand-bg relative border-t-4 border-deep-navy overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-space font-black text-xs uppercase tracking-widest bg-white border-2 border-deep-navy px-3 py-1 rounded-full text-deep-navy shadow-[2px_2px_0px_0px_#1B1F3B] inline-block mb-4">
              Platform Roadmap
            </span>
            <h2 className="font-space font-black text-4xl sm:text-5xl text-deep-navy mb-4 tracking-tight">
              Ecosystem <span className="marker-highlight">Roadmap</span>
            </h2>
            <p className="font-sans font-semibold text-deep-navy/70 max-w-xl mx-auto text-base sm:text-lg">
              Here is what we are building to reshape online developer education. Follow our timeline below.
            </p>
          </motion.div>
        </div>

        {/* Roadmap Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 relative">
          
          {roadmapItems.map((item, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{ 
                scale: 1.03,
                rotate: idx % 2 === 0 ? 1 : -1,
                transition: { type: 'spring', stiffness: 300, damping: 10 }
              }}
              key={item.title}
              className={`border-4 border-deep-navy rounded-3xl p-6 ${item.color} shadow-[6px_6px_0px_0px_#1B1F3B] flex flex-col justify-between cursor-pointer min-h-[300px] relative`}
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="bg-white text-deep-navy border-2 border-deep-navy font-space font-black text-[9px] uppercase tracking-wider px-2 py-0.5 rounded shadow-[1px_1px_0px_0px_#1B1F3B]">
                    {item.date}
                  </span>
                  <span className="bg-deep-navy text-white text-[9px] font-space font-black uppercase px-2 py-0.5 rounded border border-deep-navy shadow-[1px_1px_0px_0px_rgba(255,255,255,1)]">
                    {item.status}
                  </span>
                </div>

                <h3 className="font-space font-black text-2xl text-deep-navy leading-none mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="font-sans font-semibold text-sm text-deep-navy/75 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Bottom arrow connector indicators (desktop only) */}
              {idx < roadmapItems.length - 1 && (
                <div className="absolute top-1/2 -right-6 -translate-y-1/2 z-20 bg-white border-2 border-deep-navy p-1.5 rounded-full shadow-[2px_2px_0px_0px_#1B1F3B] hidden lg:block">
                  <ArrowRight className="w-4 h-4 text-deep-navy" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Waitlist Callout Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="bg-[#FFE066] border-4 border-deep-navy rounded-[32px] p-8 md:p-12 shadow-[8px_8px_0px_0px_#1B1F3B] relative overflow-hidden"
        >
          {/* Background dots grid */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1B1F3B_1.5px,transparent_1.5px)] bg-[size:18px_18px] pointer-events-none" />

          <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
            <div className="bg-white border-4 border-deep-navy p-3 rounded-full shadow-[2px_2px_0px_0px_#1B1F3B] mb-6 text-deep-navy animate-bounce">
              <Mail className="w-8 h-8" />
            </div>

            <h3 className="font-space font-black text-3xl sm:text-4xl md:text-5xl text-deep-navy tracking-tight mb-4">
              Join the Ecosystem Waitlist
            </h3>

            <p className="font-sans font-semibold text-base sm:text-lg text-deep-navy/80 max-w-2xl mb-8 leading-relaxed">
              We are actively developing and testing the platforms. Submit your email below to get early-bird invitation slots, release notifications, and access to free sandbox utilities.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white border-4 border-deep-navy rounded-2xl p-6 shadow-[4px_4px_0px_0px_#1B1F3B] max-w-md w-full"
              >
                <h4 className="font-space font-black text-xl text-deep-navy mb-1 flex items-center justify-center gap-2">
                  🎉 You are on the list!
                </h4>
                <p className="font-sans font-semibold text-xs text-deep-navy/70 leading-relaxed mt-2">
                  {successMsg || 'Thanks for joining our workspace waitlist. We will notify you the moment platform registrations open.'}
                </p>
              </motion.div>
            ) : (
              <div className="w-full max-w-lg flex flex-col items-center">
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 w-full">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 bg-white border-4 border-deep-navy px-5 py-4 rounded-full font-space font-bold text-deep-navy placeholder:text-deep-navy/50 focus:outline-none focus:ring-0 shadow-[4px_4px_0px_0px_#1B1F3B] transition-transform focus:scale-[1.01]"
                  />
                  <Magnetic>
                    <button
                      type="submit"
                      disabled={loading}
                      className="neo-btn-primary bg-primary text-white text-lg px-8 py-4 w-full sm:w-auto h-full shadow-[4px_4px_0px_0px_#1B1F3B] flex items-center justify-center gap-1.5 disabled:opacity-50"
                    >
                      {loading ? 'Submitting...' : 'Join Waitlist'}
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </Magnetic>
                </form>
                {errorMsg && (
                  <p className="font-space font-bold text-coral text-sm mt-4 bg-white border-2 border-deep-navy px-4 py-1.5 rounded-full shadow-[2px_2px_0px_0px_#1B1F3B]">
                    ⚠️ {errorMsg}
                  </p>
                )}
              </div>
            )}
          </div>
        </motion.div>

      {/* OTP Verification Popup Modal */}
      <AnimatePresence>
        {showOtpModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowOtpModal(false)}
              className="absolute inset-0 bg-deep-navy/60 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              className="bg-brand-bg border-4 border-deep-navy rounded-[32px] p-8 max-w-md w-full relative z-10 shadow-[8px_8px_0px_0px_#1B1F3B] font-space text-left"
            >
              <h3 className="font-black text-2xl text-deep-navy mb-2 tracking-tight">
                Verify Your Email
              </h3>
              <p className="font-sans font-semibold text-sm text-deep-navy/70 mb-6 leading-relaxed">
                We sent a 6-digit verification code to <strong className="text-primary">{email}</strong>. Please enter it below to confirm your subscription.
              </p>

              {debugMsg && (
                <div className="font-mono text-xs text-primary bg-white border-2 border-dashed border-deep-navy/30 p-3 rounded-xl mb-6 text-center shadow-[2px_2px_0px_0px_rgba(27,31,59,0.1)]">
                  💡 {debugMsg}
                </div>
              )}

              <form onSubmit={handleVerifyOtp} className="flex flex-col gap-4">
                <input
                  type="text"
                  required
                  maxLength={6}
                  value={otpCode}
                  onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, ''))}
                  placeholder="123456"
                  className="bg-white border-4 border-deep-navy px-5 py-4 rounded-xl font-bold text-center text-3xl tracking-[10px] text-deep-navy placeholder:text-deep-navy/30 placeholder:tracking-normal focus:outline-none focus:ring-0 shadow-[4px_4px_0px_0px_#1B1F3B]"
                />

                {otpError && (
                  <p className="font-bold text-coral text-xs bg-white border-2 border-deep-navy px-4 py-1.5 rounded-lg shadow-[2px_2px_0px_0px_#1B1F3B] text-center">
                    ⚠️ {otpError}
                  </p>
                )}

                <div className="flex gap-4 mt-2">
                  <button
                    type="button"
                    onClick={() => setShowOtpModal(false)}
                    className="flex-1 neo-btn-secondary px-4 py-3 text-sm shadow-[3px_3px_0px_0px_#1B1F3B]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={otpLoading}
                    className="flex-1 neo-btn-primary bg-mint text-deep-navy hover:bg-[#5cd4a2] px-4 py-3 text-sm shadow-[3px_3px_0px_0px_#1B1F3B] disabled:opacity-50"
                  >
                    {otpLoading ? 'Verifying...' : 'Confirm OTP'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      </div>
    </section>
  );
}
