'use client';

import { motion, Variants } from 'framer-motion';
import { Sparkles, Star, Terminal, Code2, Play, Users, ArrowRight, ArrowUpRight, Bot, Award, User2 } from 'lucide-react';
import Image from 'next/image';
import Magnetic from './Magnetic';
import { useEffect, useState } from 'react';

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  yOffset?: number;
}

// Floating elements wrapper
function FloatingElement({
  children,
  className,
  duration = 6,
  delay = 0,
  yOffset = 15,
}: FloatingElementProps) {
  return (
    <motion.div
      animate={{
        y: [0, -yOffset, 0],
        rotate: [0, 2, -2, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 12 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-brand-bg"
    >
      {/* Interactive mouse-move background shapes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          animate={{
            x: mousePosition.x * 40,
            y: mousePosition.y * 40,
          }}
          transition={{ type: 'spring', damping: 25, stiffness: 120 }}
          className="absolute top-[20%] left-[10%] w-32 h-32 bg-mint/30 rounded-full border-4 border-deep-navy/10"
        />
        <motion.div
          animate={{
            x: mousePosition.x * -60,
            y: mousePosition.y * -60,
          }}
          transition={{ type: 'spring', damping: 25, stiffness: 120 }}
          className="absolute bottom-[15%] left-[45%] w-48 h-48 bg-sky/20 rounded-[40px] border-4 border-deep-navy/10 rotate-12"
        />
        <motion.div
          animate={{
            x: mousePosition.x * 50,
            y: mousePosition.y * -30,
          }}
          transition={{ type: 'spring', damping: 25, stiffness: 120 }}
          className="absolute top-[40%] right-[15%] w-24 h-24 bg-coral/30 rounded-2xl border-4 border-deep-navy/10 -rotate-12"
        />
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content (Grid span 7) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Tagline */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-white border-4 border-deep-navy px-4 py-2 rounded-full shadow-[3px_3px_0px_0px_#1B1F3B] mb-6"
          >
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <span className="font-space font-extrabold text-sm text-deep-navy uppercase tracking-wider">
              The Learning Ecosystem
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-space font-black text-5xl sm:text-6xl md:text-7xl text-deep-navy leading-[1.05] tracking-tight mb-6"
          >
            <span className="marker-highlight">Build</span> Real Skills.<br />
            Build Real Projects.<br />
            Build Your Future.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="font-sans font-medium text-lg sm:text-xl text-deep-navy/80 mb-8 max-w-xl leading-relaxed"
          >
            DevTrackAcademy helps students become developers through hands-on learning, practical workshops, AI-powered education, and real-world projects—not endless theory or memorization.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-5 w-full sm:w-auto mb-10"
          >
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <Magnetic>
                <a
                  href="https://workshop.devtrackacademy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-btn-primary text-lg px-8 py-4 flex items-center justify-center gap-2 w-full sm:w-auto shadow-[4px_4px_0px_0px_#1B1F3B]"
                >
                  Explore Workshops
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="https://learn.devtrackacademy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-btn-secondary text-lg px-8 py-4 flex items-center justify-center gap-2 w-full sm:w-auto shadow-[4px_4px_0px_0px_#1B1F3B]"
                >
                  Start Learning
                </a>
              </Magnetic>
            </div>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-6 border-t-4 border-deep-navy/10 pt-6 w-full"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((num) => (
                <div
                  key={num}
                  className="w-12 h-12 rounded-full border-2 border-deep-navy bg-white overflow-hidden relative shadow-[1px_1px_0px_0px_#1B1F3B]"
                >
                  <div
                    className={`w-full h-full flex items-center justify-center font-bold text-xs text-white ${
                      num === 1 ? 'bg-primary' : num === 2 ? 'bg-mint' : num === 3 ? 'bg-sky' : 'bg-coral'
                    }`}
                  >
                    {num === 1 ? 'JD' : num === 2 ? 'AB' : num === 3 ? 'ML' : 'SR'}
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-primary">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-5 h-5 fill-current stroke-deep-navy stroke-2" />
                ))}
              </div>
              <p className="font-space font-bold text-sm text-deep-navy mt-1">
                Empowering future engineers at DevTrack <span className="text-primary">Academy</span>
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content (Grid span 5) - Pipeline Illustration */}
        <div className="lg:col-span-5 relative flex items-center justify-center min-h-[500px]">
          
          {/* Timeline Pipeline SVG Connection Line */}
          <div className="absolute left-[36px] top-8 bottom-8 w-1 border-l-4 border-dashed border-deep-navy/20 hidden sm:block z-0" />

          {/* Staggered pipeline elements */}
          <div className="flex flex-col gap-6 w-full z-10 relative">
            
            {/* Step 1: Student */}
            <FloatingElement duration={5} yOffset={8} className="flex gap-4 items-center">
              <div className="w-16 h-16 rounded-2xl border-4 border-deep-navy bg-white flex items-center justify-center shadow-[3px_3px_0px_0px_#1B1F3B] text-deep-navy shrink-0">
                <User2 className="w-8 h-8" />
              </div>
              <div className="flex-1 bg-white border-4 border-deep-navy p-3.5 rounded-2xl shadow-[4px_4px_0px_0px_#1B1F3B] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#1B1F3B] transition-all">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-space font-black text-xs text-primary uppercase tracking-tight">Phase 1: Student</span>
                  <span className="bg-primary/10 text-primary border border-primary/20 text-[9px] font-space font-extrabold px-1.5 py-0.5 rounded">Ready</span>
                </div>
                <h4 className="font-space font-black text-sm text-deep-navy">Enters Ecosystem</h4>
                <p className="font-sans font-medium text-[11px] text-deep-navy/70">Breaking out of tutorial hell</p>
              </div>
            </FloatingElement>

            {/* Step 2: Building */}
            <FloatingElement duration={5.5} delay={0.4} yOffset={10} className="flex gap-4 items-center">
              <div className="w-16 h-16 rounded-2xl border-4 border-deep-navy bg-mint flex items-center justify-center shadow-[3px_3px_0px_0px_#1B1F3B] text-deep-navy shrink-0">
                <Code2 className="w-8 h-8" />
              </div>
              <div className="flex-1 bg-deep-navy text-white border-4 border-deep-navy p-3.5 rounded-2xl shadow-[4px_4px_0px_0px_#1B1F3B] font-mono text-xs">
                <div className="flex justify-between items-center mb-1 pb-1 border-b border-white/10">
                  <span className="text-mint text-[10px] font-bold">terminal.sh</span>
                  <span className="w-2 h-2 rounded-full bg-mint animate-ping" />
                </div>
                <p className="text-white/60">$ npm run build-portfolio</p>
                <p className="text-mint">✓ Compiled successfully in 1.2s</p>
              </div>
            </FloatingElement>

            {/* Step 3: Learning */}
            <FloatingElement duration={4.5} delay={0.2} yOffset={8} className="flex gap-4 items-center">
              <div className="w-16 h-16 rounded-2xl border-4 border-deep-navy bg-sky flex items-center justify-center shadow-[3px_3px_0px_0px_#1B1F3B] text-deep-navy shrink-0">
                <Bot className="w-8 h-8" />
              </div>
              <div className="flex-1 bg-white border-4 border-deep-navy p-3.5 rounded-2xl shadow-[4px_4px_0px_0px_#1B1F3B]">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="w-2 h-2 rounded-full bg-mint" />
                  <span className="font-space font-black text-xs text-deep-navy">Gemini Code Copilot</span>
                </div>
                <p className="font-sans font-medium text-xs text-deep-navy/80 bg-brand-bg p-2 rounded-xl border border-deep-navy/10 leading-tight">
                  &quot;Try using a Framer Motion Spring to make that button bounce.&quot;
                </p>
              </div>
            </FloatingElement>

            {/* Step 4: Projects */}
            <FloatingElement duration={6} delay={0.6} yOffset={12} className="flex gap-4 items-center">
              <div className="w-16 h-16 rounded-2xl border-4 border-deep-navy bg-[#FFE066] flex items-center justify-center shadow-[3px_3px_0px_0px_#1B1F3B] text-deep-navy shrink-0">
                <Play className="w-8 h-8 text-deep-navy fill-deep-navy" />
              </div>
              <div className="flex-1 bg-white border-4 border-deep-navy p-3.5 rounded-2xl shadow-[4px_4px_0px_0px_#1B1F3B] overflow-hidden">
                <div className="flex gap-1 border-b border-deep-navy/10 pb-1.5 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-coral" />
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="w-2 h-2 rounded-full bg-mint" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-space font-extrabold text-[11px] text-deep-navy">my-project.vercel.app</span>
                  <span className="text-[9px] bg-mint font-bold text-deep-navy border border-deep-navy px-1 rounded">LIVE</span>
                </div>
              </div>
            </FloatingElement>

            {/* Step 5: Career */}
            <FloatingElement duration={5.2} delay={0.8} yOffset={8} className="flex gap-4 items-center">
              <div className="w-16 h-16 rounded-2xl border-4 border-deep-navy bg-coral flex items-center justify-center shadow-[3px_3px_0px_0px_#1B1F3B] text-white shrink-0">
                <Award className="w-8 h-8" />
              </div>
              <div className="flex-1 bg-white border-4 border-deep-navy p-3.5 rounded-2xl shadow-[4px_4px_0px_0px_#1B1F3B] rotate-[2deg] hover:rotate-0 transition-transform">
                <span className="font-space font-black text-xs text-coral uppercase tracking-wide">Ready for Hire</span>
                <h4 className="font-space font-black text-sm text-deep-navy">Software Engineer</h4>
                <p className="font-sans font-medium text-[11px] text-deep-navy/60">Portfolio & Skills fully verified</p>
              </div>
            </FloatingElement>

          </div>

          {/* Floating Sticker Decoration */}
          <FloatingElement duration={4} delay={1} className="absolute -top-10 -right-4 z-20">
            <div className="bg-coral border-4 border-deep-navy rounded-full p-2.5 shadow-[3px_3px_0px_0px_#1B1F3B] rotate-[15deg] text-white font-space font-black text-xs uppercase">
              100% Build
            </div>
          </FloatingElement>
        </div>

      </div>
    </section>
  );
}
