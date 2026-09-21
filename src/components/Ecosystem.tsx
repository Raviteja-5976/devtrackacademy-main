'use client';

import { motion } from 'framer-motion';
import { Monitor, Laptop, Users, Bot, Code, Play, ArrowRight, Sparkles, Award, Video, Code2 } from 'lucide-react';
import Magnetic from './Magnetic';

interface EcosystemProps {
  onOpenModal?: (type: 'courses') => void;
}

interface FloatingDecorProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

function FloatingDecor({ children, className = '', delay = 0 }: FloatingDecorProps) {
  return (
    <motion.div
      animate={{
        y: [0, -8, 0],
        rotate: [0, 3, -3, 0],
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

export default function Ecosystem({ onOpenModal }: EcosystemProps) {
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
              The DevTrack Ecosystem
            </span>
            <h2 className="font-space font-black text-4xl sm:text-5xl md:text-6xl text-deep-navy mb-6 tracking-tight">
              One Academy.<br />
              Three Power Tracks.
            </h2>
            <p className="font-sans font-semibold text-lg text-deep-navy/70 leading-relaxed">
              Choose your path to engineering mastery—from live mentor bootcamps to AI-driven interview preparation and self-paced interactive coding.
            </p>
          </motion.div>
        </div>

        {/* Ecosystem 3 Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Workshop Platform (LIVE!) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ type: 'spring', stiffness: 80, damping: 15 }}
            whileHover={{ y: -6 }}
            className="bg-primary border-4 border-deep-navy rounded-[36px] p-8 shadow-[8px_8px_0px_0px_#1B1F3B] hover:shadow-[12px_12px_0px_0px_#1B1F3B] flex flex-col justify-between relative overflow-hidden text-white min-h-[580px]"
          >
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFF8F0_1.5px,transparent_1.5px)] bg-[size:16px_16px] pointer-events-none" />

            <FloatingDecor className="-top-4 -right-4" delay={0.2}>
              <div className="bg-mint border-4 border-deep-navy p-2.5 rounded-2xl shadow-[3px_3px_0px_0px_#1B1F3B] rotate-12">
                <Users className="w-6 h-6 text-deep-navy" />
              </div>
            </FloatingDecor>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <span className="bg-mint text-deep-navy border-2 border-deep-navy font-space font-black text-xs uppercase tracking-wider px-3 py-1 rounded-full shadow-[2px_2px_0px_0px_#1B1F3B]">
                  🟢 LIVE NOW
                </span>
                <span className="font-space font-black text-[10px] uppercase text-white/80 bg-deep-navy/40 border border-white/10 px-2.5 py-1 rounded-lg">
                  Active Cohorts
                </span>
              </div>

              <h3 className="font-space font-black text-3xl text-white tracking-tight mb-3 drop-shadow-[2px_2px_0px_rgba(27,31,59,0.8)]">
                Workshop Platform
              </h3>
              <p className="font-sans font-semibold text-xs sm:text-sm text-white/90 leading-relaxed mb-6">
                Live instructor-led bootcamps focused on practical execution. Build complete projects with real-time feedback, assignments, and mentor guidance.
              </p>
            </div>

            {/* Illustration Card */}
            <div className="relative w-full h-44 bg-deep-navy border-4 border-deep-navy rounded-2xl shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] p-3 flex flex-col justify-between my-2 z-10 overflow-hidden">
              <div className="flex justify-between items-center border-b border-white/10 pb-1.5 mb-1">
                <span className="font-mono text-[9px] text-white/50">live_cohort_stream.mp4</span>
                <span className="bg-coral text-white font-space text-[8px] font-black uppercase px-1 rounded animate-pulse">LIVE</span>
              </div>

              <div className="grid grid-cols-12 gap-2 flex-1 items-center">
                <div className="col-span-5 bg-white/10 border border-white/10 rounded-xl p-2 h-full flex flex-col justify-center items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-mint border-2 border-deep-navy flex items-center justify-center font-space font-black text-deep-navy text-xs">
                    INS
                  </div>
                  <h5 className="font-space font-black text-[9px] text-white mt-1">Instructor</h5>
                </div>
                <div className="col-span-2 flex justify-center text-white/30">
                  <ArrowRight className="w-4 h-4 animate-pulse" />
                </div>
                <div className="col-span-5 grid grid-cols-2 gap-1.5 h-full">
                  <div className="bg-white/10 border border-white/10 rounded-lg p-1 flex flex-col justify-center items-center text-center">
                    <span className="w-5 h-5 rounded-full bg-sky font-bold text-[7px] text-deep-navy flex items-center justify-center">ST1</span>
                    <span className="text-[6.5px] text-white/70 mt-0.5">Alex</span>
                  </div>
                  <div className="bg-white/10 border border-white/10 rounded-lg p-1 flex flex-col justify-center items-center text-center">
                    <span className="w-5 h-5 rounded-full bg-[#FFE066] font-bold text-[7px] text-deep-navy flex items-center justify-center">ST2</span>
                    <span className="text-[6.5px] text-white/70 mt-0.5">Sarah</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 relative z-10">
              <Magnetic>
                <a
                  href="https://workshop.devtrackacademy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-btn-secondary text-deep-navy text-sm font-black px-6 py-3.5 flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_#1B1F3B] w-full"
                >
                  Explore Live Workshops
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Magnetic>
            </div>
          </motion.div>

          {/* Card 2: AI Interview Prep (LIVE!) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ type: 'spring', stiffness: 80, damping: 15, delay: 0.1 }}
            whileHover={{ y: -6 }}
            className="bg-[#FFE066] border-4 border-deep-navy rounded-[36px] p-8 shadow-[8px_8px_0px_0px_#1B1F3B] hover:shadow-[12px_12px_0px_0px_#1B1F3B] flex flex-col justify-between relative overflow-hidden text-deep-navy min-h-[580px]"
          >
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1B1F3B_1.5px,transparent_1.5px)] bg-[size:16px_16px] pointer-events-none" />

            <FloatingDecor className="-top-4 -right-4" delay={0.4}>
              <div className="bg-coral text-white border-4 border-deep-navy p-2.5 rounded-2xl shadow-[3px_3px_0px_0px_#1B1F3B] rotate-12">
                <Bot className="w-6 h-6" />
              </div>
            </FloatingDecor>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <span className="bg-mint text-deep-navy border-2 border-deep-navy font-space font-black text-xs uppercase tracking-wider px-3 py-1 rounded-full shadow-[2px_2px_0px_0px_#1B1F3B]">
                  🟢 LIVE NOW
                </span>
                <span className="font-space font-black text-[10px] uppercase text-deep-navy/80 bg-white border border-deep-navy/20 px-2.5 py-1 rounded-lg">
                  AI Mock Engine
                </span>
              </div>

              <h3 className="font-space font-black text-3xl text-deep-navy tracking-tight mb-3">
                AI Interview Prep
              </h3>
              <p className="font-sans font-semibold text-xs sm:text-sm text-deep-navy/85 leading-relaxed mb-6">
                Simulate high-stakes technical interviews with AI. Practice Data Structures & Algorithms, System Design scenarios, and live voice/text coding evaluations.
              </p>
            </div>

            {/* AI Mock Interview Graphic */}
            <div className="relative w-full h-44 bg-white border-4 border-deep-navy rounded-2xl shadow-[4px_4px_0px_0px_#1B1F3B] p-3 flex flex-col justify-between my-2 z-10 overflow-hidden font-sans">
              <div className="flex justify-between items-center border-b border-deep-navy/10 pb-1 text-[9px] font-space font-bold">
                <span className="flex items-center gap-1 text-primary">
                  <Bot className="w-3.5 h-3.5" /> AI Interviewer Active
                </span>
                <span className="bg-mint text-deep-navy px-1.5 py-0.5 rounded text-[7px] border border-deep-navy font-black">
                  DSA & System Design
                </span>
              </div>
              <div className="bg-brand-bg border border-deep-navy/15 p-2 rounded-xl text-[8px] font-semibold space-y-1">
                <p className="text-primary font-bold">Q: How would you design a rate limiter for 1M RPM?</p>
                <p className="text-deep-navy/70">Candidate: I would use a Token Bucket algorithm backed by Redis...</p>
              </div>
              <div className="bg-mint/30 border border-mint p-1.5 rounded-lg flex items-center justify-between text-[8px] font-bold text-deep-navy">
                <span>Scorecard & Feedback Generation</span>
                <span className="bg-deep-navy text-white px-1.5 py-0.5 rounded text-[7px]">Live</span>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 relative z-10">
              <Magnetic>
                <a
                  href="https://interview.devtrackacademy.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-btn-primary bg-coral text-white text-sm font-black px-6 py-3.5 flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_#1B1F3B] w-full"
                >
                  Start AI Interview Prep
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Magnetic>
            </div>
          </motion.div>

          {/* Card 3: Learning Platform (Courses) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ type: 'spring', stiffness: 80, damping: 15, delay: 0.2 }}
            whileHover={{ y: -6 }}
            onClick={() => onOpenModal && onOpenModal('courses')}
            className="bg-white border-4 border-deep-navy rounded-[36px] p-8 shadow-[8px_8px_0px_0px_#1B1F3B] hover:shadow-[12px_12px_0px_0px_#1B1F3B] flex flex-col justify-between relative overflow-hidden text-deep-navy cursor-pointer min-h-[580px]"
          >
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#1B1F3B_1.5px,transparent_1.5px)] bg-[size:16px_16px] pointer-events-none" />

            <FloatingDecor className="-top-4 -right-4" delay={0.6}>
              <div className="bg-sky border-4 border-deep-navy p-2.5 rounded-2xl shadow-[3px_3px_0px_0px_#1B1F3B] rotate-[-12deg]">
                <Video className="w-6 h-6 text-deep-navy" />
              </div>
            </FloatingDecor>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <span className="bg-coral text-white border-2 border-deep-navy font-space font-black text-xs uppercase tracking-wider px-3 py-1 rounded-full shadow-[2px_2px_0px_0px_#1B1F3B]">
                  Coming Soon
                </span>
                <span className="font-space font-black text-[10px] uppercase text-deep-navy/70 bg-brand-bg border border-deep-navy/15 px-2.5 py-1 rounded-lg">
                  Self-Paced Stack
                </span>
              </div>

              <h3 className="font-space font-black text-3xl text-deep-navy tracking-tight mb-3">
                Learning Platform
              </h3>
              <p className="font-sans font-semibold text-xs sm:text-sm text-deep-navy/75 leading-relaxed mb-6">
                Self-paced video modules with an integrated browser code editor and Gemini AI assistant so you can learn and build concurrently.
              </p>
            </div>

            {/* Code Playground Graphic */}
            <div className="relative w-full h-44 bg-brand-bg border-4 border-deep-navy rounded-2xl shadow-[4px_4px_0px_0px_#1B1F3B] p-3 flex flex-col justify-between my-2 z-10 overflow-hidden font-mono text-[9px]">
              <div className="flex justify-between items-center border-b border-deep-navy/10 pb-1 text-deep-navy/60">
                <div className="flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-coral" />
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="w-2 h-2 rounded-full bg-mint" />
                </div>
                <span>CoursePlayground.tsx</span>
              </div>
              <div className="text-deep-navy/80 space-y-1">
                <p><span className="text-coral">import</span> &#123; GeminiIDE &#125; <span className="text-coral">from</span> <span className="text-mint">&apos;@dta/ai&apos;</span>;</p>
                <p><span className="text-primary font-bold">export default function</span> Course() &#123;</p>
                <p className="pl-2">return <span className="text-emerald-600 font-bold">&lt;InteractiveCodeEditor /&gt;</span>;</p>
                <p>&#125;</p>
              </div>
              <div className="bg-sky/20 border border-deep-navy/15 p-1.5 rounded-lg flex items-center justify-between text-[8px] font-sans font-bold text-deep-navy">
                <span>Integrated Browser Playground</span>
                <span className="bg-deep-navy text-white px-1.5 py-0.5 rounded text-[7px]">Soon</span>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 relative z-10">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenModal && onOpenModal('courses');
                }}
                className="neo-btn-primary bg-sky text-deep-navy text-sm font-black px-6 py-3.5 flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_#1B1F3B] w-full"
              >
                Coming Soon
                <Sparkles className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
