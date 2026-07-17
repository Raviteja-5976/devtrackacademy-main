'use client';

import { motion } from 'framer-motion';
import { Gift, Sparkles, ArrowRight, Calendar } from 'lucide-react';
import Link from 'next/link';
import Magnetic from './Magnetic';

export default function UpcomingEvents() {
  return (
    <section id="upcoming-events" className="py-20 px-6 bg-brand-bg relative border-t-4 border-deep-navy overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-[30%] right-[10%] w-20 h-20 bg-sky/15 rounded-full border-4 border-deep-navy/5 pointer-events-none" />
      <div className="absolute bottom-[20%] left-[8%] w-24 h-24 bg-primary/10 rounded-2xl border-4 border-deep-navy/5 -rotate-12 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-space font-black text-xs uppercase tracking-widest bg-white border-2 border-deep-navy px-3 py-1 rounded-full text-deep-navy shadow-[2px_2px_0px_0px_#1B1F3B] inline-block mb-4">
              Upcoming Workshops
            </span>
            <h2 className="font-space font-black text-4xl sm:text-5xl text-deep-navy mb-4 tracking-tight">
              Special Student <span className="marker-highlight">Events</span>
            </h2>
            <p className="font-sans font-medium text-deep-navy/70 max-w-xl mx-auto text-base sm:text-lg">
              Don&apos;t miss our upcoming interactive live sessions designed to stack your toolkit and build your career.
            </p>
          </motion.div>
        </div>

        {/* Card container */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ 
              scale: 1.02, 
              rotate: 0.5,
              transition: { type: 'spring', stiffness: 300, damping: 12 }
            }}
            className="bg-mint border-4 border-deep-navy rounded-[32px] p-8 md:p-12 shadow-[8px_8px_0px_0px_#1B1F3B] grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative overflow-hidden"
          >
            {/* Dots background overlay */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1B1F3B_1.5px,transparent_1.5px)] bg-[size:16px_16px] pointer-events-none" />

            {/* Left section (Icon and details) - Grid span 8 */}
            <div className="md:col-span-8 relative z-10 flex flex-col items-start text-left">
              <div className="bg-white border-4 border-deep-navy p-3 rounded-2xl w-fit shadow-[2px_2px_0px_0px_#1B1F3B] mb-6 text-deep-navy animate-bounce">
                <Gift className="w-8 h-8" />
              </div>

              <span className="bg-white text-deep-navy border-2 border-deep-navy font-space font-black text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow-[1.5px_1.5px_0px_0px_#1B1F3B] mb-4">
                Free Student Access 🎁
              </span>

              <h3 className="font-space font-black text-3xl sm:text-4xl text-deep-navy leading-none mb-4">
                Get Dev Tools Worth ₹2 Lakhs+ for Free
              </h3>

              <p className="font-sans font-semibold text-base text-deep-navy/80 mb-6 max-w-xl leading-relaxed">
                Stop paying for developer subscriptions. In this upcoming special cohort session, we will guide you step-by-step on how to unlock and set up premium IDE licenses, host environments, database resources, and API credits for free.
              </p>

              <div className="flex items-center gap-2 font-space text-sm font-black text-deep-navy/70 bg-white/40 border-2 border-deep-navy/20 px-3 py-1.5 rounded-xl">
                <Calendar className="w-4 h-4 text-primary" />
                <span>Date & Time Announced in Newsletter</span>
              </div>
            </div>

            {/* Right section (CTA button) - Grid span 4 */}
            <div className="md:col-span-4 relative z-10 w-full flex justify-center md:justify-end">
              <Magnetic>
                <button
                  onClick={() => alert("Interest Registered! We will notify you when registration slots for the Free Dev Tools session open.")}
                  className="neo-btn-primary bg-primary text-white text-lg px-8 py-5 w-full md:w-auto shadow-[4px_4px_0px_0px_#1B1F3B] flex items-center justify-center gap-2 font-space font-black cursor-pointer"
                >
                  Join Waitlist
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Magnetic>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
