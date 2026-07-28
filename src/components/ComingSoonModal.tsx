'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Bot, BookOpen, ArrowRight, CheckCircle2, Calendar } from 'lucide-react';
import Magnetic from './Magnetic';
import Link from 'next/link';

interface ComingSoonModalProps {
  isOpen: boolean;
  type: 'courses' | 'interviews' | null;
  onClose: () => void;
}

export default function ComingSoonModal({ isOpen, type, onClose }: ComingSoonModalProps) {
  if (!isOpen || !type) return null;

  const isCourse = type === 'courses';

  const details = isCourse
    ? {
        title: 'Self-Paced Courses',
        badge: 'Interactive Learning Platform',
        icon: <BookOpen className="w-8 h-8 text-deep-navy" />,
        color: 'bg-sky',
        description:
          'Comprehensive self-paced video modules, integrated browser code playground, and real-time AI coding assistance. Build industrial-grade fullstack apps on your schedule.',
        features: [
          'Interactive browser-based code workspace',
          'Gemini AI copilot for instant code debugging',
          'Comprehensive fullstack & backend tracks',
          'Verified portfolio certification upon completion',
        ],
      }
    : {
        title: 'AI Interview Prep',
        badge: 'Mock Interview & DSA Engine',
        icon: <Bot className="w-8 h-8 text-deep-navy" />,
        color: 'bg-mint',
        description:
          'Simulate real-time technical interviews with an AI interviewer. Practice Data Structures & Algorithms, System Design scenarios, and behavioral questions with instant feedback.',
        features: [
          'Live AI voice & text technical mock interviews',
          'System Design architecture board evaluation',
          'DSA problem-solving with complexity analysis',
          'Personalized scorecard & weakness breakdown',
        ],
      };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-deep-navy/80 backdrop-blur-sm cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.9, y: 30, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 30, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="relative w-full max-w-2xl bg-brand-bg border-4 border-deep-navy rounded-[36px] shadow-[10px_10px_0px_0px_#1B1F3B] overflow-hidden z-10 font-space"
        >
          {/* Top Banner Notice */}
          <div className="bg-coral text-white border-b-4 border-deep-navy px-6 py-2.5 flex items-center justify-between font-black text-xs uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 animate-bounce" />
              <span>Coming soon by Aug 30</span>
            </div>
            <span className="bg-white text-deep-navy px-2 py-0.5 rounded border border-deep-navy font-extrabold text-[10px]">
              August 30, 2026
            </span>
          </div>

          {/* Header */}
          <div className="p-6 md:p-8 border-b-4 border-deep-navy bg-white flex justify-between items-start">
            <div className="flex items-center gap-4">
              <div className={`border-4 border-deep-navy p-3 rounded-2xl ${details.color} shadow-[3px_3px_0px_0px_#1B1F3B]`}>
                {details.icon}
              </div>
              <div>
                <span className="bg-brand-bg border-2 border-deep-navy text-deep-navy text-[10px] font-black uppercase px-2.5 py-1 rounded-full inline-block mb-1 shadow-[1px_1px_0px_0px_#1B1F3B]">
                  {details.badge}
                </span>
                <h2 className="font-black text-2xl md:text-3xl text-deep-navy tracking-tight">
                  {details.title}
                </h2>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 border-2 border-deep-navy bg-white hover:bg-coral hover:text-white rounded-xl flex items-center justify-center text-deep-navy shadow-[2px_2px_0px_0px_#1B1F3B] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 md:p-8 space-y-6">
            {/* Description */}
            <p className="font-sans font-semibold text-sm md:text-base text-deep-navy/80 leading-relaxed">
              {details.description}
            </p>

            {/* Features Highlight */}
            <div className="bg-white border-4 border-deep-navy p-5 rounded-2xl shadow-[4px_4px_0px_0px_#1B1F3B]">
              <h4 className="font-black text-xs uppercase tracking-wider text-deep-navy/60 mb-3">
                Key Platform Features:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-sans font-semibold text-xs text-deep-navy">
                {details.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Launch Callout Box with Waitlist Section Link */}
            <div className="bg-[#FFE066] border-4 border-deep-navy p-6 md:p-8 rounded-3xl shadow-[6px_6px_0px_0px_#1B1F3B] text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-deep-navy" />
                <h3 className="font-black text-lg md:text-xl text-deep-navy uppercase">
                  Launching Aug 30, 2026!
                </h3>
              </div>
              <p className="font-sans font-semibold text-xs md:text-sm text-deep-navy/80 max-w-md mx-auto mb-6">
                Join our ecosystem waitlist to claim <strong>50% off launch pricing</strong> and receive immediate early access invites.
              </p>

              <div className="flex justify-center">
                <Magnetic>
                  <Link
                    href="/#roadmap"
                    onClick={onClose}
                    className="neo-btn-primary bg-primary text-white text-base px-8 py-3.5 inline-flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_#1B1F3B] font-black uppercase tracking-wider"
                  >
                    Join Ecosystem Waitlist
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Magnetic>
              </div>
            </div>
          </div>

          {/* Footer controls */}
          <div className="px-6 py-4 border-t-4 border-deep-navy bg-white flex justify-end">
            <button
              onClick={onClose}
              className="neo-btn-secondary px-6 py-2 text-xs font-black uppercase tracking-wider"
            >
              Close Window
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
