'use client';

import { motion } from 'framer-motion';
import { Star, Users, ArrowUpRight, Flame, Code } from 'lucide-react';
import Magnetic from './Magnetic';

export default function Testimonials() {
  const waitlistUsers = [
    { name: 'Aarav Mehta', initials: 'AM', status: 'Verified' },
    { name: 'Priya Patel', initials: 'PP', status: 'Pending Q3' },
    { name: 'Rohan Sharma', initials: 'RS', status: 'Verified' },
    { name: 'Divya Nair', initials: 'DN', status: 'Verified' },
  ];

  return (
    <section id="testimonials" className="py-24 px-6 bg-brand-bg relative border-t-4 border-deep-navy overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#1B1F3B_1.5px,transparent_1.5px)] bg-[size:20px_20px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Main Card Wrapper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', duration: 0.6 }}
          className="bg-white border-4 border-deep-navy rounded-[36px] p-8 md:p-12 shadow-[8px_8px_0px_0px_#1B1F3B] relative overflow-hidden"
        >
          {/* Background grid dots */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1B1F3B_1.2px,transparent_1.2px)] bg-[size:16px_16px] pointer-events-none" />

          {/* Floating Sticker */}
          <motion.div
            animate={{ rotate: [-8, 8, -8] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
            className="absolute -top-4 -right-4 bg-primary text-white border-4 border-deep-navy rounded-full px-4 py-2 font-space font-black text-sm uppercase rotate-[12deg] shadow-[3px_3px_0px_0px_#1B1F3B] hidden md:block"
          >
            LAUNCHING SOON ⚡
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left side text */}
            <div className="lg:col-span-7 text-left">
              <div className="flex items-center gap-2 bg-mint/25 border-2 border-deep-navy px-3.5 py-1.5 rounded-full w-fit mb-6 shadow-[1.5px_1.5px_0px_0px_#1B1F3B]">
                <Users className="w-4 h-4 text-deep-navy" />
                <span className="font-space font-black text-xs text-deep-navy uppercase">Pioneer Cohort</span>
              </div>

              <h2 className="font-space font-black text-4xl sm:text-5xl text-deep-navy leading-none mb-6">
                Become One Of Our First Learners.
              </h2>
              <p className="font-sans font-semibold text-base sm:text-lg text-deep-navy/70 leading-relaxed mb-8">
                We are building online development training the way it should be. Skip the fake social-proof testimonials—our platform is launching soon. Join the waitlist to secure one of the limited initial access passes.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <span className="font-space font-extrabold text-sm text-deep-navy bg-brand-bg border-2 border-deep-navy px-3.5 py-1.5 rounded-xl">
                  🔥 200+ Developers in queue
                </span>
                <span className="font-sans font-bold text-xs text-deep-navy/60">
                  Join them to lock in 50% early bird discount
                </span>
              </div>
            </div>

            {/* Right side interactive queue mockup */}
            <div className="lg:col-span-5 w-full flex flex-col gap-4">
              <div className="bg-brand-bg border-4 border-deep-navy rounded-2xl p-4 shadow-[4px_4px_0px_0px_#1B1F3B]">
                <div className="flex items-center justify-between border-b-2 border-deep-navy/10 pb-3 mb-3">
                  <span className="font-space font-black text-xs text-deep-navy">Waitlist Stream</span>
                  <span className="w-2.5 h-2.5 bg-mint rounded-full animate-ping" />
                </div>

                <div className="flex flex-col gap-3 font-sans text-xs">
                  {waitlistUsers.map((item, idx) => (
                    <div key={idx} className="bg-white border-2 border-deep-navy p-2.5 rounded-xl flex items-center justify-between shadow-[2px_2px_0px_0px_#1B1F3B]">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-sky border border-deep-navy flex items-center justify-center font-bold text-[9px]">
                          {item.initials}
                        </div>
                        <div>
                          <p className="font-bold text-deep-navy leading-none">{item.name}</p>
                        </div>
                      </div>
                      <span className="bg-mint/20 text-deep-navy font-space text-[8px] font-black uppercase px-1.5 py-0.5 rounded border border-deep-navy/10">
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
