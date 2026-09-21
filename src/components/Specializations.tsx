'use client';

import { motion } from 'framer-motion';
import { Layers, Calendar } from 'lucide-react';

export default function Specializations() {
  return (
    <section id="specializations" className="py-24 px-6 bg-brand-bg relative border-t-4 border-deep-navy overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-space font-black text-xs uppercase tracking-widest bg-white border-2 border-deep-navy px-3 py-1 rounded-full text-deep-navy shadow-[2px_2px_0px_0px_#1B1F3B] inline-block mb-4">
            Curriculum Categories
          </span>
          <h2 className="font-space font-black text-4xl sm:text-5xl text-deep-navy mb-4 tracking-tight">
            Featured <span className="marker-highlight">Specializations</span>
          </h2>
          <p className="font-sans font-semibold text-deep-navy/70 max-w-xl mx-auto text-base sm:text-lg">
            Our comprehensive curriculum paths are structured to transform you from a code consumer into a production-ready software architect.
          </p>
        </motion.div>
      </div>

      {/* Coming Soon Card */}
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          whileHover={{ 
            scale: 1.02, 
            rotate: -0.5,
            transition: { type: 'spring', stiffness: 300, damping: 15 }
          }}
          className="border-4 border-deep-navy rounded-[32px] p-8 md:p-12 bg-white shadow-[8px_8px_0px_0px_#1B1F3B] hover:shadow-[12px_12px_0px_0px_#1B1F3B] transition-all relative overflow-hidden flex flex-col items-center text-center"
        >
          {/* Floating Sticker */}
          <div className="absolute -top-4 -right-4 bg-coral text-white border-4 border-deep-navy rounded-full px-4 py-2 font-space font-black text-sm uppercase rotate-[12deg] shadow-[3px_3px_0px_0px_#1B1F3B]">
            Coming Soon 📅
          </div>

          <div className="bg-sky border-4 border-deep-navy p-4 rounded-2xl shadow-[3px_3px_0px_0px_#1B1F3B] mb-8 text-deep-navy">
            <Layers className="w-10 h-10" />
          </div>
          
          <h3 className="font-space font-black text-2xl sm:text-3xl text-deep-navy mb-4">
            Curriculums Coming Soon
          </h3>
          
          <p className="font-sans font-semibold text-sm sm:text-base text-deep-navy/75 max-w-xl mb-8 leading-relaxed">
            We are currently building comprehensive career and specialization paths in Frontend, Backend, AI & ML, System Design, and Competitive Coding. 
            All courses will be completely project-based, designed to skip tutorial hell and focus on practical engineering.
          </p>
          
          <div className="inline-flex items-center gap-2 bg-mint/20 border-2 border-mint rounded-2xl px-6 py-3 font-space font-extrabold text-sm text-deep-navy shadow-[2px_2px_0px_0px_#1B1F3B]">
            <Calendar className="w-4 h-4 text-deep-navy" />
            Launching Soon
          </div>
        </motion.div>
      </div>
    </section>
  );
}
