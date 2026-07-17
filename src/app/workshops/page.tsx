'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  Users, 
  CheckSquare, 
  BookOpen, 
  Sparkles, 
  ArrowRight, 
  Cpu, 
  Laptop, 
  Code, 
  Globe, 
  FileText, 
  ArrowLeft,
  Gift
} from 'lucide-react';
import Magnetic from '@/components/Magnetic';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function WorkshopsPage() {
  const [enrolled, setEnrolled] = useState(false);
  const [seatsLeft, setSeatsLeft] = useState(14);
  const [activeSession, setActiveSession] = useState(0);

  const sessions = [
    {
      title: 'Session 1: Setting up environments',
      time: '11 July 2026, 7:00 PM',
      desc: 'Set up local dev environments, install required AI helper packages, configure workspace configurations, and initialize the project shell.',
      outcome: 'A fully operational coding environment and boilerplate code.',
      icon: <Laptop className="w-6 h-6 text-deep-navy" />
    },
    {
      title: 'Session 2: How to do Efficient Vibe Coding',
      time: '12 July 2026, 10:00 AM',
      desc: 'Master the art of "Vibe Coding." Learn how to guide AI context, structure prompts, review iterative output, and achieve definitive outcomes without losing layout control.',
      outcome: 'Clean React components designed using structured AI dialogs.',
      icon: <Cpu className="w-6 h-6 text-deep-navy" />
    },
    {
      title: 'Session 3: Building portfolio Website from scratch',
      time: '12 July 2026, 2:00 PM',
      desc: 'Construct pages, inject smooth Framer Motion micro-animations, design complex layouts, and curate personalized graphics using AI design assets.',
      outcome: 'Completed web page with fluid custom cursor and animations.',
      icon: <Code className="w-6 h-6 text-deep-navy" />
    },
    {
      title: 'Session 4: Deploying the portfolio & dedicated Q&A',
      time: '12 July 2026, 6:00 PM',
      desc: 'Host the web app to edge CDN networks, map custom domains, configure metadata SEO tags, and open discussion for custom student questions.',
      outcome: 'Live URL accessible worldwide and a finalized student portfolio.',
      icon: <Globe className="w-6 h-6 text-deep-navy" />
    }
  ];

  const handleEnroll = () => {
    setEnrolled(true);
    setSeatsLeft(prev => Math.max(0, prev - 1));
  };

  return (
    <>
      <Navbar />

      <main className="flex-grow pt-32 pb-24 bg-brand-bg px-6 font-space relative overflow-hidden">
        {/* Background shapes */}
        <div className="absolute top-[12%] right-[8%] w-24 h-24 bg-coral/10 rounded-full border-4 border-deep-navy/5 pointer-events-none" />
        <div className="absolute bottom-[20%] left-[5%] w-36 h-36 bg-mint/10 rounded-3xl border-4 border-deep-navy/5 rotate-12 pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-bold text-deep-navy hover:text-primary mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Homepage
          </Link>

          {/* Header section */}
          <div className="text-left mb-16 max-w-4xl">
            <span className="bg-primary text-white border-2 border-deep-navy font-black text-xs uppercase tracking-widest px-3 py-1 rounded-full shadow-[2px_2px_0px_0px_#1B1F3B] inline-block mb-4">
              Premium Bootcamp Cohort
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-deep-navy leading-tight tracking-tight mb-6">
              Building Portfolio Website with <span className="marker-highlight">Vibe Coding</span>
            </h1>
            <p className="font-sans font-semibold text-lg sm:text-xl text-deep-navy/70 leading-relaxed max-w-3xl">
              Break out of template purgatory. Build a stunning, professional portfolio website from scratch using vibe-coding practices. Learn how to write code efficiently with AI assistance and deploy it to a global server.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: General Info and Sessions (Grid span 8) */}
            <div className="lg:col-span-8 flex flex-col gap-10">
              
              {/* Cohort Quick Specs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-white border-4 border-deep-navy rounded-2xl p-5 shadow-[4px_4px_0px_0px_#1B1F3B] flex items-center gap-4">
                  <div className="bg-mint p-3 border-2 border-deep-navy rounded-xl shadow-[2px_2px_0px_0px_#1B1F3B]">
                    <Users className="w-6 h-6 text-deep-navy" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-deep-navy/50 uppercase">Cohort Strength</h4>
                    <p className="font-black text-lg text-deep-navy">50 Seats Max</p>
                  </div>
                </div>

                <div className="bg-white border-4 border-deep-navy rounded-2xl p-5 shadow-[4px_4px_0px_0px_#1B1F3B] flex items-center gap-4">
                  <div className="bg-sky p-3 border-2 border-deep-navy rounded-xl shadow-[2px_2px_0px_0px_#1B1F3B]">
                    <Calendar className="w-6 h-6 text-deep-navy" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-deep-navy/50 uppercase">Date</h4>
                    <p className="font-black text-lg text-deep-navy">11-12 July 2026</p>
                  </div>
                </div>

                <div className="bg-white border-4 border-deep-navy rounded-2xl p-5 shadow-[4px_4px_0px_0px_#1B1F3B] flex items-center gap-4">
                  <div className="bg-coral p-3 border-2 border-deep-navy rounded-xl shadow-[2px_2px_0px_0px_#1B1F3B]">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-deep-navy/50 uppercase">Post-Session</h4>
                    <p className="font-black text-lg text-deep-navy">Assigned Tasks</p>
                  </div>
                </div>
              </div>

              {/* Limited Batch Notice */}
              <div className="bg-sky/10 border-4 border-deep-navy rounded-3xl p-6 md:p-8 shadow-[4px_4px_0px_0px_#1B1F3B] flex items-start gap-4">
                <div className="text-3xl mt-0.5">💡</div>
                <div>
                  <h3 className="font-black text-xl text-deep-navy mb-2">Why Only 50 Seats?</h3>
                  <p className="font-sans font-semibold text-sm text-deep-navy/70 leading-relaxed">
                    This workshop maintains a strict limit of <strong>50 members</strong> to allow the instructors to focus closely on each individual student queries. We ensure that no coder feels left out or stuck at any stage during the project building.
                  </p>
                </div>
              </div>

              {/* Sessions Details Accordion/Timeline */}
              <div className="bg-white border-4 border-deep-navy rounded-[32px] p-6 md:p-8 shadow-[6px_6px_0px_0px_#1B1F3B]">
                <h3 className="font-black text-2xl md:text-3xl text-deep-navy mb-8">
                  Interactive <span className="text-primary">4-Session Timeline</span>
                </h3>

                <div className="flex flex-col gap-6">
                  {sessions.map((session, idx) => (
                    <div 
                      key={idx}
                      onClick={() => setActiveSession(idx)}
                      className={`border-4 border-deep-navy rounded-2xl p-6 cursor-pointer transition-all ${
                        activeSession === idx
                          ? 'bg-brand-bg shadow-[4px_4px_0px_0px_#1B1F3B]' 
                          : 'bg-white hover:bg-brand-bg/40 shadow-[2px_2px_0px_0px_#1B1F3B]'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="bg-white border-2 border-deep-navy p-2 rounded-xl shadow-[1.5px_1.5px_0px_0px_#1B1F3B]">
                            {session.icon}
                          </div>
                          <h4 className="font-black text-lg sm:text-xl text-deep-navy leading-tight">
                            {session.title}
                          </h4>
                        </div>
                        <span className="bg-deep-navy text-white text-xs font-bold px-3 py-1 rounded-full border border-deep-navy w-fit shadow-[1px_1px_0px_0px_rgba(255,255,255,1)]">
                          {session.time}
                        </span>
                      </div>

                      {activeSession === idx && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="pt-2 border-t border-deep-navy/10 mt-4"
                        >
                          <p className="font-sans font-semibold text-sm text-deep-navy/85 leading-relaxed mb-4">
                            {session.desc}
                          </p>
                          <div className="bg-white border-2 border-deep-navy rounded-xl p-3 flex flex-col gap-1 shadow-[2px_2px_0px_0px_#1B1F3B]">
                            <span className="text-[10px] uppercase font-black text-primary tracking-wider">Hands-on Deliverable</span>
                            <span className="text-xs font-bold text-deep-navy">{session.outcome}</span>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="bg-primary/10 border-4 border-deep-navy rounded-2xl p-5 mt-8 text-deep-navy flex items-start gap-3">
                  <span className="text-xl">📝</span>
                  <div>
                    <h5 className="font-black text-sm uppercase text-primary">Instructor Note: Assignments</h5>
                    <p className="font-sans font-semibold text-xs text-deep-navy/80 mt-1 leading-relaxed">
                      After each of the four sessions, students will receive specific tasks to complete in their codebases. Instructors will review code pushes and provide feedback to ensure full correctness before the next block begins.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right: Enrollment Widget & Dev Tools Promo Card (Grid span 4) */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              
              {/* Enrollment Form Widget */}
              <div className="bg-white border-4 border-deep-navy rounded-[32px] p-6 shadow-[8px_8px_0px_0px_#1B1F3B] flex flex-col gap-6 relative">
                <span className="absolute -top-4 -right-4 bg-coral text-white border-2 border-deep-navy font-black text-xs px-3 py-1 rounded-full uppercase rotate-12 shadow-[2px_2px_0px_0px_#1B1F3B] animate-pulse">
                  Selling Fast! ⚡
                </span>

                <div>
                  <h3 className="font-black text-2xl text-deep-navy tracking-tight">Reserve Seat</h3>
                  <p className="font-sans font-semibold text-xs text-deep-navy/55 mt-1">
                    Secure your entry to this cohort batch. Only 50 spots available.
                  </p>
                </div>

                {/* Seats indicator progress bar */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-black text-xs text-deep-navy uppercase">Cohort Capacity</span>
                    <span className="font-black text-xs text-primary">{seatsLeft} Seats Left</span>
                  </div>
                  <div className="w-full bg-brand-bg border-2 border-deep-navy rounded-full h-4 overflow-hidden p-0.5 shadow-[1.5px_1.5px_0px_0px_#1B1F3B]">
                    <div 
                      className="bg-primary h-full rounded-full border-r-2 border-deep-navy transition-all duration-500" 
                      style={{ width: `${(50 - seatsLeft) / 50 * 100}%` }}
                    />
                  </div>
                </div>

                <div className="border-t border-deep-navy/10 pt-4">
                  {enrolled ? (
                    <div className="bg-mint/20 border-2 border-mint rounded-2xl p-4 text-center">
                      <h4 className="font-black text-lg text-deep-navy flex items-center justify-center gap-1.5 mb-1">
                        🎉 Enrollment Success!
                      </h4>
                      <p className="font-sans font-semibold text-xs text-deep-navy/70 leading-relaxed">
                        Welcome to the cohort, student. Instructions and repository links have been sent to your email. See you on 11 July!
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-4">
                      <Magnetic>
                        <button
                          onClick={handleEnroll}
                          className="w-full neo-btn-primary py-4 font-black uppercase text-base tracking-wider flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_#1B1F3B] cursor-pointer"
                        >
                          Enroll in Cohort
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </Magnetic>
                    </div>
                  )}
                </div>
              </div>

              {/* Free Dev Tools Upcoming Card */}
              <div className="bg-mint border-4 border-deep-navy rounded-[32px] p-6 shadow-[8px_8px_0px_0px_#1B1F3B] flex flex-col gap-5 relative overflow-hidden text-deep-navy">
                <div className="absolute top-0 right-0 opacity-10 bg-[radial-gradient(#1B1F3B_1.5px,transparent_1.5px)] bg-[size:12px_12px] w-full h-full pointer-events-none" />
                
                <div className="bg-white border-2 border-deep-navy p-2.5 rounded-2xl w-fit shadow-[2px_2px_0px_0px_#1B1F3B] text-deep-navy">
                  <Gift className="w-6 h-6" />
                </div>

                <div>
                  <span className="bg-white border border-deep-navy text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded shadow-[1px_1px_0px_0px_#1B1F3B]">
                    Upcoming Special Event
                  </span>
                  <h3 className="font-black text-xl leading-tight mt-3 mb-2">
                    Free Dev Tools worth ₹2 Lakhs+ for Students
                  </h3>
                  <p className="font-sans font-semibold text-xs text-deep-navy/75 leading-relaxed">
                    Learn how to unlock, configure, and maximize student credits for industrial dev tools. Covers GitHub Developer Pack, JetBrains premium IDE access, Vercel credits, domain registry vouchers, and API allowances.
                  </p>
                </div>

                <div className="border-t border-deep-navy/15 pt-4 flex justify-between items-center mt-2">
                  <span className="font-bold text-xs uppercase tracking-wider opacity-65">
                    Free Entry for Students
                  </span>
                  <button 
                    onClick={() => alert("Dev Tools session Waitlist: You have successfully registered your interest! Keep an eye on your inbox.")}
                    className="bg-white hover:bg-brand-bg text-xs font-black uppercase px-3 py-1.5 rounded-xl border-2 border-deep-navy shadow-[2px_2px_0px_0px_#1B1F3B] flex items-center gap-1 cursor-pointer transition-all"
                  >
                    Notify Me <Sparkles className="w-3 h-3 text-primary" />
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
