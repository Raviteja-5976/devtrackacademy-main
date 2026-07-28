'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, Mail, ShieldAlert, Sparkles, Send } from 'lucide-react';
import Magnetic from '@/components/Magnetic';

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="flex-grow pt-32 pb-24 bg-brand-bg px-6 font-space relative overflow-hidden">
        {/* Background shapes */}
        <div className="absolute top-[15%] right-[10%] w-36 h-36 bg-coral/10 rounded-full border-4 border-deep-navy/5 pointer-events-none" />
        <div className="absolute bottom-[20%] left-[5%] w-40 h-40 bg-mint/10 rounded-3xl border-4 border-deep-navy/5 rotate-12 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center">
          {/* Breadcrumb */}
          <div className="flex justify-start mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-bold text-deep-navy hover:text-primary group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back to Homepage
            </Link>
          </div>

          {/* Header */}
          <span className="bg-white text-deep-navy border-2 border-deep-navy font-black text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-[2px_2px_0px_0px_#1B1F3B] inline-block mb-4">
            Direct Contact
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-deep-navy leading-tight tracking-tight mb-6">
            Reach Out Directly
          </h1>
          <p className="font-sans font-semibold text-lg sm:text-xl text-deep-navy/70 leading-relaxed max-w-2xl mx-auto mb-12">
            No contact forms needed. Send us an email directly and our team will get back to you promptly.
          </p>

          {/* Direct Email Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-left">
            {/* Founder Card */}
            <div className="bg-mint border-4 border-deep-navy rounded-[36px] p-8 shadow-[8px_8px_0px_0px_#1B1F3B] hover:shadow-[12px_12px_0px_0px_#1B1F3B] transition-all flex flex-col justify-between">
              <div>
                <div className="bg-white border-2 border-deep-navy p-3 rounded-2xl w-fit shadow-[2px_2px_0px_0px_#1B1F3B] mb-6">
                  <Sparkles className="w-8 h-8 text-deep-navy" />
                </div>
                <span className="bg-white border border-deep-navy text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-[1px_1px_0px_0px_#1B1F3B] inline-block mb-2">
                  Founder & Leadership
                </span>
                <h3 className="font-black text-2xl text-deep-navy tracking-tight mb-2">
                  Founder Inquiry
                </h3>
                <p className="font-sans font-semibold text-xs sm:text-sm text-deep-navy/80 leading-relaxed mb-6">
                  For partnerships, speaker invitations, hiring requests, or direct founder communications.
                </p>
              </div>

              <Magnetic>
                <a
                  href="mailto:founder@devtrackacademy.com"
                  className="neo-btn-primary bg-white text-deep-navy text-sm font-black px-6 py-3.5 flex items-center justify-center gap-2 shadow-[3px_3px_0px_0px_#1B1F3B] w-full"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  founder@devtrackacademy.com
                </a>
              </Magnetic>
            </div>

            {/* Support Card */}
            <div className="bg-sky border-4 border-deep-navy rounded-[36px] p-8 shadow-[8px_8px_0px_0px_#1B1F3B] hover:shadow-[12px_12px_0px_0px_#1B1F3B] transition-all flex flex-col justify-between">
              <div>
                <div className="bg-white border-2 border-deep-navy p-3 rounded-2xl w-fit shadow-[2px_2px_0px_0px_#1B1F3B] mb-6">
                  <Send className="w-8 h-8 text-deep-navy" />
                </div>
                <span className="bg-white border border-deep-navy text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-[1px_1px_0px_0px_#1B1F3B] inline-block mb-2">
                  Student & Platform Support
                </span>
                <h3 className="font-black text-2xl text-deep-navy tracking-tight mb-2">
                  General Support
                </h3>
                <p className="font-sans font-semibold text-xs sm:text-sm text-deep-navy/80 leading-relaxed mb-6">
                  For workshop queries, enrollment help, platform assistance, or billing questions.
                </p>
              </div>

              <Magnetic>
                <a
                  href="mailto:support@devtrackacademy.com"
                  className="neo-btn-primary bg-primary text-white text-sm font-black px-6 py-3.5 flex items-center justify-center gap-2 shadow-[3px_3px_0px_0px_#1B1F3B] w-full"
                >
                  <Mail className="w-4 h-4 text-white" />
                  support@devtrackacademy.com
                </a>
              </Magnetic>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
