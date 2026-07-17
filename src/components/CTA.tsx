'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Star, Code, Cpu } from 'lucide-react';
import Magnetic from './Magnetic';

export default function CTA() {
  return (
    <section className="relative py-24 px-6 bg-primary border-t-4 border-deep-navy overflow-hidden">
      {/* Decorative Dotted Grid */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1B1F3B_1.5px,transparent_1.5px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Floating Shapes */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 4, -4, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-12 left-10 md:left-24 bg-mint border-4 border-deep-navy p-3 rounded-2xl shadow-[4px_4px_0px_0px_#1B1F3B] hidden sm:block rotate-12"
      >
        <Code className="w-8 h-8 text-deep-navy" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -5, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute bottom-12 right-12 md:right-32 bg-sky border-4 border-deep-navy p-3 rounded-2xl shadow-[4px_4px_0px_0px_#1B1F3B] hidden sm:block -rotate-12"
      >
        <Cpu className="w-8 h-8 text-deep-navy" />
      </motion.div>

      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        className="absolute top-[20%] right-[10%] text-white/20 hidden md:block"
      >
        <Star className="w-16 h-16 fill-current" />
      </motion.div>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="bg-white border-4 border-deep-navy px-4 py-2 rounded-full font-space font-extrabold text-sm text-deep-navy uppercase tracking-wider shadow-[3px_3px_0px_0px_#1B1F3B] mb-8 rotate-[-2deg]">
            🚀 Build your developer career
          </div>

          <h2 className="font-space font-black text-5xl sm:text-6xl md:text-7xl text-white tracking-tight leading-none mb-8 drop-shadow-[3px_3px_0px_#1B1F3B]">
            Ready To Learn Like A Developer?
          </h2>

          <p className="font-sans font-semibold text-lg sm:text-xl text-white max-w-xl mb-12 leading-relaxed drop-shadow-[0.5px_0.5px_0px_rgba(27,31,59,0.4)]">
            Stop memorizing theory. Choose the platform that fits your pace and start building real-world projects today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto">
            <Magnetic>
              <a
                href="https://workshop.devtrackacademy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-btn-secondary text-lg px-8 py-4 flex items-center justify-center gap-2 shadow-[6px_6px_0px_0px_#1B1F3B] hover:shadow-[8px_8px_0px_0px_#1B1F3B] active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0px_0px_#1B1F3B] w-full sm:w-auto text-deep-navy"
              >
                Explore Workshops
                <ArrowRight className="w-5 h-5 text-primary animate-pulse" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="https://learn.devtrackacademy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-btn-primary border-white border-4 text-lg px-8 py-4 flex items-center justify-center gap-2 shadow-[6px_6px_0px_0px_#1B1F3B] hover:shadow-[8px_8px_0px_0px_#1B1F3B] active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0px_0px_#1B1F3B] w-full sm:w-auto text-white bg-deep-navy"
              >
                Start Learning
              </a>
            </Magnetic>
          </div>

          <span className="font-space font-bold text-xs text-white/80 mt-6 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-mint fill-current stroke-deep-navy stroke-2" /> Live mentoring and AI-assisted environments included
          </span>
        </motion.div>
      </div>
    </section>
  );
}
