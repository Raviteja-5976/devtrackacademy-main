'use client';

import { motion } from 'framer-motion';
import { Monitor, Laptop, Users, Bot, Code, Play, ArrowRight, Sparkles } from 'lucide-react';
import Magnetic from './Magnetic';

interface FloatingDecorProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

function FloatingDecor({ children, className = '', delay = 0 }: FloatingDecorProps) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
        rotate: [0, 4, -4, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
      className={`absolute pointer-events-none z-20 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="relative py-24 px-6 bg-brand-bg border-t-4 border-deep-navy overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#1B1F3B_2px,transparent_2px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-space font-black text-xs uppercase tracking-widest bg-white border-2 border-deep-navy px-3 py-1 rounded-full text-deep-navy shadow-[2px_2px_0px_0px_#1B1F3B] inline-block mb-4">
              The Learning Ecosystem
            </span>
            <h2 className="font-space font-black text-4xl sm:text-5xl md:text-6xl text-deep-navy mb-6 tracking-tight">
              One Academy.<br />
              Two Ways To Learn.
            </h2>
            <p className="font-sans font-semibold text-lg text-deep-navy/70 leading-relaxed">
              Whether you prefer real-time interactive mentoring or structured self-paced training with integrated tools, we have a platform designed for your style.
            </p>
          </motion.div>
        </div>

        {/* Ecosystem Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Card One: Workshops */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ type: 'spring', stiffness: 80, damping: 15 }}
            whileHover={{ 
              y: -8,
              rotate: -1,
              transition: { type: 'spring', stiffness: 300, damping: 15 }
            }}
            className="bg-primary border-4 border-deep-navy rounded-[36px] p-8 md:p-10 shadow-[8px_8px_0px_0px_#1B1F3B] hover:shadow-[12px_12px_0px_0px_#1B1F3B] flex flex-col justify-between relative overflow-hidden text-white cursor-pointer min-h-[620px]"
          >
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFF8F0_1.5px,transparent_1.5px)] bg-[size:16px_16px] pointer-events-none" />

            {/* Floating Decorations */}
            <FloatingDecor className="-top-4 -right-4" delay={0.2}>
              <div className="bg-mint border-4 border-deep-navy p-2.5 rounded-2xl shadow-[3px_3px_0px_0px_#1B1F3B] rotate-12">
                <Users className="w-6 h-6 text-deep-navy" />
              </div>
            </FloatingDecor>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <span className="bg-white text-deep-navy border-2 border-deep-navy font-space font-black text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-[2.5px_2.5px_0px_0px_#1B1F3B]">
                  Live Cohorts
                </span>
                <span className="font-space font-black text-xs text-white/80 bg-deep-navy/35 border border-white/10 px-3 py-1 rounded-lg">
                  Limited Seats
                </span>
              </div>

              <h3 className="font-space font-black text-3xl sm:text-4xl text-white tracking-tight mb-4 drop-shadow-[2px_2px_0px_rgba(27,31,59,0.8)]">
                Workshop Platform
              </h3>
              <p className="font-sans font-semibold text-sm sm:text-base text-white/90 leading-relaxed mb-8 max-w-lg">
                Live instructor-led sessions focused on practical implementation. Students build complete projects together with mentors. Every workshop contains multiple sessions, assignments, live Q&A, and limited seats to ensure personal attention.
              </p>
            </div>

            {/* Custom Illustration: Laptop + Instructor + Students */}
            <div className="relative w-full h-56 bg-deep-navy border-4 border-deep-navy rounded-2xl shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] p-4 flex flex-col justify-between my-4 z-10 overflow-hidden">
              <div className="flex justify-between items-center border-b border-white/10 pb-2 mb-2">
                <span className="font-mono text-[10px] text-white/50">live_stream_active.mp4</span>
                <span className="bg-coral text-white font-space text-[8px] font-black uppercase px-1 rounded animate-pulse">REC</span>
              </div>

              <div className="grid grid-cols-12 gap-3 flex-1 items-center">
                {/* Left: Instructor (Grid span 5) */}
                <div className="col-span-5 bg-white/5 border border-white/10 rounded-xl p-2.5 h-full flex flex-col justify-center items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-mint border-2 border-deep-navy flex items-center justify-center font-space font-black text-deep-navy text-sm shadow-[1.5px_1.5px_0px_0px_#1B1F3B]">
                    INS
                  </div>
                  <h5 className="font-space font-black text-[10px] text-white mt-1.5 leading-none">Mentor</h5>
                  <p className="font-sans text-[8px] text-white/50 leading-none mt-1">Coding Live</p>
                </div>

                {/* Center: Connect Line/Arrow (Grid span 2) */}
                <div className="col-span-2 flex justify-center text-white/30">
                  <ArrowRight className="w-5 h-5 animate-pulse" />
                </div>

                {/* Right: Students feeds (Grid span 5) */}
                <div className="col-span-5 grid grid-cols-2 gap-2 h-full">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-1.5 flex flex-col justify-center items-center text-center">
                    <span className="w-6 h-6 rounded-full bg-sky font-bold text-[8px] text-deep-navy flex items-center justify-center">ST1</span>
                    <span className="text-[7px] text-white/70 mt-1 leading-none">Alex</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-1.5 flex flex-col justify-center items-center text-center">
                    <span className="w-6 h-6 rounded-full bg-[#FFE066] font-bold text-[8px] text-deep-navy flex items-center justify-center">ST2</span>
                    <span className="text-[7px] text-white/70 mt-1 leading-none">Sarah</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center relative z-10">
              <Magnetic>
                <a
                  href="https://workshop.devtrackacademy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-btn-secondary text-deep-navy text-sm px-6 py-3.5 flex items-center justify-center gap-1.5 shadow-[4px_4px_0px_0px_#1B1F3B]"
                >
                  Explore Workshops →
                </a>
              </Magnetic>
              <span className="font-space font-bold text-xs text-white/75">
                Next session launching soon
              </span>
            </div>
          </motion.div>

          {/* Card Two: Learning Platform */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ type: 'spring', stiffness: 80, damping: 15 }}
            whileHover={{ 
              y: -8,
              rotate: 1,
              transition: { type: 'spring', stiffness: 300, damping: 15 }
            }}
            className="bg-white border-4 border-deep-navy rounded-[36px] p-8 md:p-10 shadow-[8px_8px_0px_0px_#1B1F3B] hover:shadow-[12px_12px_0px_0px_#1B1F3B] flex flex-col justify-between relative overflow-hidden text-deep-navy cursor-pointer min-h-[620px]"
          >
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#1B1F3B_1.5px,transparent_1.5px)] bg-[size:16px_16px] pointer-events-none" />

            {/* Floating Decorations */}
            <FloatingDecor className="-top-4 -right-4" delay={0.4}>
              <div className="bg-sky border-4 border-deep-navy p-2.5 rounded-2xl shadow-[3px_3px_0px_0px_#1B1F3B] rotate-[-12deg]">
                <Bot className="w-6 h-6 text-deep-navy" />
              </div>
            </FloatingDecor>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <span className="bg-coral text-white border-2 border-deep-navy font-space font-black text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-[2.5px_2.5px_0px_0px_#1B1F3B]">
                  Coming Soon
                </span>
                <span className="font-space font-black text-xs text-deep-navy/70 bg-brand-bg border border-deep-navy/15 px-3 py-1 rounded-lg">
                  AI-Powered
                </span>
              </div>

              <h3 className="font-space font-black text-3xl sm:text-4xl text-deep-navy tracking-tight mb-4">
                Learning Platform
              </h3>
              <p className="font-sans font-semibold text-sm sm:text-base text-deep-navy/75 leading-relaxed mb-8 max-w-lg">
                Self-paced learning platform designed for developers. Choose between AI Interactive Learning, Video Courses, Hybrid Learning Experience. Every lesson includes an integrated code editor so students can learn and practice simultaneously.
              </p>
            </div>

            {/* Custom Illustration: AI Chat + Code Editor + Video Player */}
            <div className="relative w-full h-56 bg-brand-bg border-4 border-deep-navy rounded-2xl shadow-[4px_4px_0px_0px_#1B1F3B] p-3.5 flex flex-col justify-between my-4 z-10 overflow-hidden">
              <div className="flex gap-1 border-b border-deep-navy/10 pb-1.5 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-coral" />
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="w-2 h-2 rounded-full bg-mint" />
              </div>

              <div className="grid grid-cols-12 gap-3 flex-1 items-center overflow-hidden">
                {/* Left: AI Chat (Grid span 5) */}
                <div className="col-span-5 bg-white border-2 border-deep-navy rounded-xl p-2 h-full flex flex-col justify-between text-[8px] font-sans">
                  <div className="flex items-center gap-1 border-b border-deep-navy/5 pb-1">
                    <Bot className="w-3.5 h-3.5 text-primary" />
                    <span className="font-space font-bold">AI Assistant</span>
                  </div>
                  <div className="bg-brand-bg border border-deep-navy/10 p-1.5 rounded-lg text-[7px] text-deep-navy/80 leading-snug">
                    Can you explain Next.js server components?
                  </div>
                  <div className="bg-primary/5 border border-primary/20 p-1.5 rounded-lg text-[6.5px] text-primary leading-snug">
                    Sure! They render on the server, saving bundle size.
                  </div>
                </div>

                {/* Right: Code Editor (Grid span 7) */}
                <div className="col-span-7 bg-deep-navy text-white border-2 border-deep-navy rounded-xl p-2.5 h-full flex flex-col justify-between font-mono text-[8px] overflow-hidden">
                  <div className="flex justify-between items-center text-white/40 pb-1 border-b border-white/5">
                    <span>Component.tsx</span>
                    <Code className="w-3 h-3 text-white/50" />
                  </div>
                  <div className="flex-grow pt-1 text-white/80 leading-normal">
                    <p><span className="text-coral">import</span> React <span className="text-coral">from</span> <span className="text-mint">&apos;react&apos;</span>;</p>
                    <p><span className="text-coral">export default function</span> App() &#123;</p>
                    <p className="pl-2">return <span className="text-sky">&lt;h1&gt;</span>Hello World<span className="text-sky">&lt;/h1&gt;</span>;</p>
                    <p>&#125;</p>
                  </div>
                  <div className="flex justify-between items-center pt-1 border-t border-white/5 text-white/50 text-[7px]">
                    <span>Line 4, Col 1</span>
                    <span className="bg-mint text-deep-navy px-1 rounded font-sans font-bold">RUN</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center relative z-10">
              <span className="bg-deep-navy text-white border-2 border-deep-navy font-space font-black text-xs uppercase tracking-wider px-4 py-2 rounded-xl shadow-[2.5px_2.5px_0px_0px_#1B1F3B]">
                Coming Soon
              </span>
              <span className="font-space font-bold text-xs text-deep-navy/70">
                Launching August 8, 2026
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
