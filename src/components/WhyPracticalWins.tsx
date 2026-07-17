'use client';

import { motion, Variants } from 'framer-motion';
import { X, Check, Flame, AlertCircle } from 'lucide-react';

export default function WhyPracticalWins() {
  const traditionalPoints = [
    'Memorize abstract theory',
    'Watch passive video lectures',
    'Forget 90% within a week',
    'No significant projects built',
  ];

  const devtrackPoints = [
    'Build production-ready code',
    'Practice with hands-on labs',
    'AI Assisted learning copilots',
    'Ship real portfolio projects',
  ];

  const listContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const listItemVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <section id="why-practical-wins" className="py-24 px-6 bg-brand-bg relative border-t-4 border-deep-navy overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#1B1F3B_1.5px,transparent_1.5px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-space font-black text-xs uppercase tracking-widest bg-white border-2 border-deep-navy px-3 py-1 rounded-full text-deep-navy shadow-[2px_2px_0px_0px_#1B1F3B] inline-block mb-4">
              The Comparison
            </span>
            <h2 className="font-space font-black text-4xl sm:text-5xl md:text-6xl text-deep-navy mb-4 tracking-tight">
              Why Practical <span className="marker-highlight">Learning</span> Wins
            </h2>
            <p className="font-sans font-semibold text-lg text-deep-navy/70 max-w-2xl mx-auto leading-relaxed">
              Traditional online education is designed for content consumption, not skill acquisition. Here is why the DevTrack model produces real software engineers:
            </p>
          </motion.div>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          
          {/* Card 1: Traditional Learning */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-white border-4 border-deep-navy rounded-[32px] p-8 md:p-10 shadow-[6px_6px_0px_0px_#1B1F3B] flex flex-col justify-between border-t-8 border-t-coral"
          >
            <div>
              <div className="flex items-center gap-3 mb-8 border-b-4 border-deep-navy pb-4">
                <div className="bg-coral/10 border-2 border-deep-navy p-2.5 rounded-2xl">
                  <AlertCircle className="w-6 h-6 text-coral" />
                </div>
                <div>
                  <h4 className="font-space font-black text-2xl text-deep-navy leading-none">Traditional</h4>
                  <span className="font-space text-[10px] uppercase font-bold text-coral tracking-widest">Tutorial Hell</span>
                </div>
              </div>

              <motion.ul
                variants={listContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col gap-6 font-space"
              >
                {traditionalPoints.map((point, index) => (
                  <motion.li
                    variants={listItemVariants}
                    key={index}
                    className="flex items-start gap-3.5 text-deep-navy/70"
                  >
                    <span className="w-7 h-7 rounded-lg border-2 border-deep-navy bg-coral/10 text-coral flex items-center justify-center shrink-0 shadow-[1.5px_1.5px_0px_0px_#1B1F3B]">
                      <X className="w-4 h-4 stroke-[3px]" />
                    </span>
                    <span className="font-bold text-base pt-0.5 leading-snug">{point}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
            
            <div className="mt-12 bg-brand-bg/50 border-2 border-deep-navy/10 p-4 rounded-2xl text-center">
              <p className="font-sans font-semibold text-xs text-deep-navy/50">
                Leads to low retention and frustration.
              </p>
            </div>
          </motion.div>

          {/* Card 2: DevTrackAcademy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-white border-4 border-deep-navy rounded-[32px] p-8 md:p-10 shadow-[6px_6px_0px_0px_#1B1F3B] flex flex-col justify-between border-t-8 border-t-mint"
          >
            <div>
              <div className="flex items-center gap-3 mb-8 border-b-4 border-deep-navy pb-4">
                <div className="bg-mint/20 border-2 border-deep-navy p-2.5 rounded-2xl">
                  <Flame className="w-6 h-6 text-mint fill-mint/10" />
                </div>
                <div>
                  <h4 className="font-space font-black text-2xl text-deep-navy leading-none">DevTrack</h4>
                  <span className="font-space text-[10px] uppercase font-bold text-mint tracking-widest">Practical Learning</span>
                </div>
              </div>

              <motion.ul
                variants={listContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col gap-6 font-space"
              >
                {devtrackPoints.map((point, index) => (
                  <motion.li
                    variants={listItemVariants}
                    key={index}
                    className="flex items-start gap-3.5 text-deep-navy"
                  >
                    <span className="w-7 h-7 rounded-lg border-2 border-deep-navy bg-mint text-deep-navy flex items-center justify-center shrink-0 shadow-[1.5px_1.5px_0px_0px_#1B1F3B]">
                      <Check className="w-4 h-4 stroke-[3px]" />
                    </span>
                    <span className="font-bold text-base pt-0.5 leading-snug">{point}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <div className="mt-12 bg-mint/20 border-2 border-deep-navy p-4 rounded-2xl text-center">
              <p className="font-space font-black text-xs text-deep-navy">
                ✅ You learn by shipping actual production apps.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
