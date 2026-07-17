'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Clock, 
  User, 
  CheckSquare, 
  BookOpen, 
  Layers, 
  Sparkles, 
  Monitor 
} from 'lucide-react';
import Magnetic from './Magnetic';

export default function FeaturedWorkshop() {
  return (
    <section id="workshops" className="py-20 px-6 bg-brand-bg relative overflow-hidden">
      <div id="featured-workshop" className="max-w-7xl mx-auto">
        
        {/* Main Banner Block */}
        <div className="bg-primary border-4 border-deep-navy rounded-[32px] p-8 md:p-12 shadow-[8px_8px_0px_0px_#1B1F3B] grid grid-cols-1 lg:grid-cols-12 gap-12 relative overflow-hidden mb-16">
          {/* Background grid */}
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#1B1F3B_1.5px,transparent_1.5px)] bg-[size:24px_24px] pointer-events-none" />
          
          {/* Floating Sticker */}
          <div className="absolute -top-6 -right-6 bg-mint text-deep-navy border-4 border-deep-navy rounded-full px-4 py-2 font-space font-black text-sm uppercase rotate-[15deg] shadow-[3px_3px_0px_0px_#1B1F3B] hidden md:block">
            Limited Seats 🎟️
          </div>

          {/* Left Details (Grid span 7) */}
          <div className="lg:col-span-7 flex flex-col justify-between relative z-10 text-white">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="bg-white text-deep-navy border-2 border-deep-navy font-space font-extrabold text-xs uppercase tracking-wider px-3 py-1 rounded-full shadow-[2px_2px_0px_0px_#1B1F3B]">
                  Live Workshop
                </span>
                <span className="bg-deep-navy text-brand-bg border-2 border-deep-navy font-space font-extrabold text-xs uppercase tracking-wider px-3 py-1 rounded-full shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                  Beginner Friendly
                </span>
              </div>

              <h2 className="font-space font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight mb-6 drop-shadow-[2.5px_2.5px_0px_#1B1F3B]">
                Building Portfolio Website
              </h2>

              <p className="font-sans font-semibold text-lg text-white/90 mb-10 max-w-2xl leading-relaxed">
                Build your professional portfolio website with efficient vibe coding and deploy it live! 
                This intensive workshop consists of 4 interactive sessions where we go from environment setup, 
                to code construction with AI tools, and finally global deployment.
              </p>

              {/* Grid Metadata */}
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 p-4 rounded-2xl flex items-start gap-3">
                  <Clock className="w-6 h-6 text-mint flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-space font-bold text-xs text-white/60 uppercase">Duration</h4>
                    <p className="font-space font-black text-base">4 Sessions (11-12 July)</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 p-4 rounded-2xl flex items-start gap-3">
                  <User className="w-6 h-6 text-sky flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-space font-bold text-xs text-white/60 uppercase">Instructor</h4>
                    <p className="font-space font-black text-base">DevTrack Engineers</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 p-4 rounded-2xl flex items-start gap-3">
                  <CheckSquare className="w-6 h-6 text-coral flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-space font-bold text-xs text-white/60 uppercase">Project</h4>
                    <p className="font-space font-black text-base">1 Vibe-Coded Portfolio</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 p-4 rounded-2xl flex items-start gap-3">
                  <BookOpen className="w-6 h-6 text-mint/90 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-space font-bold text-xs text-white/60 uppercase">Prerequisites</h4>
                    <p className="font-space font-black text-base">Basic HTML/CSS/JS</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Magnetic>
                <a
                  href="https://workshop.devtrackacademy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-btn-secondary text-deep-navy text-lg px-8 py-4 flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_#1B1F3B] hover:shadow-[6px_6px_0px_0px_#1B1F3B] w-full sm:w-auto font-space font-bold"
                >
                  Explore Workshops
                  <Sparkles className="w-5 h-5 text-primary animate-bounce" />
                </a>
              </Magnetic>
              <span className="font-space font-bold text-xs text-white/70">
                ⭐ Rated 4.9/5 by 300+ students
              </span>
            </div>
          </div>

          {/* Right Preview (Grid span 5) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Multi-layered Mockup */}
            <div className="w-full max-w-[360px] bg-white border-4 border-deep-navy rounded-3xl shadow-[8px_8px_0px_0px_#1B1F3B] overflow-hidden p-6 flex flex-col gap-6">
              
              {/* Fake Website Header */}
              <div className="flex justify-between items-center border-b-2 border-deep-navy/15 pb-4">
                <span className="font-space font-extrabold text-sm text-deep-navy">Jane Doe</span>
                <span className="font-space font-bold text-xs bg-mint px-2 py-0.5 rounded border border-deep-navy">Hire Me</span>
              </div>

              {/* Website Main Profile */}
              <div className="flex flex-col items-center text-center mt-2">
                <div className="w-20 h-20 rounded-full border-4 border-deep-navy bg-coral flex items-center justify-center font-space font-black text-white text-3xl shadow-[3px_3px_0px_0px_#1B1F3B]">
                  JD
                </div>
                <h4 className="font-space font-black text-xl text-deep-navy mt-4">Fullstack Developer</h4>
                <p className="font-sans font-semibold text-xs text-deep-navy/60 max-w-[200px] mt-1">
                  Building next-gen web applications and high-fidelity layouts.
                </p>
              </div>

              {/* Interactive Showcase items */}
              <div className="grid grid-cols-2 gap-3 mt-2">
                <div className="bg-sky/10 border-2 border-deep-navy p-3 rounded-xl shadow-[2px_2px_0px_0px_#1B1F3B] text-center">
                  <h5 className="font-space font-black text-xs text-deep-navy">24+</h5>
                  <p className="font-sans text-[9px] font-bold text-deep-navy/65">Projects Done</p>
                </div>
                <div className="bg-mint/10 border-2 border-deep-navy p-3 rounded-xl shadow-[2px_2px_0px_0px_#1B1F3B] text-center">
                  <h5 className="font-space font-black text-xs text-deep-navy">3.5k</h5>
                  <p className="font-sans text-[9px] font-bold text-deep-navy/65">Git Commits</p>
                </div>
              </div>

              <div className="bg-deep-navy text-white text-xs font-mono p-3 rounded-xl text-center">
                npx jane-doe --live
              </div>
            </div>

            {/* Additional floating card */}
            <motion.div
              animate={{ rotate: [-2, 2, -2] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
              className="absolute -top-6 -left-6 bg-sky border-4 border-deep-navy rounded-2xl px-4 py-2.5 shadow-[4px_4px_0px_0px_#1B1F3B] text-deep-navy flex items-center gap-2"
            >
              <Monitor className="w-5 h-5 text-deep-navy" />
              <span className="font-space font-black text-xs">Responsive</span>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
