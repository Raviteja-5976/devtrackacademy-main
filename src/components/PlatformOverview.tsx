'use client';

import { motion } from 'framer-motion';
import { HelpCircle, Target, Radio, Rocket, ArrowRight, CheckCircle2, Sparkles, Code2, Users, Laptop, Bot } from 'lucide-react';
import Magnetic from './Magnetic';

interface PlatformOverviewProps {
  onOpenModal?: (type: 'courses') => void;
}

export default function PlatformOverview({ onOpenModal }: PlatformOverviewProps) {
  const cards = [
    {
      question: 'What is DevTrackAcademy?',
      icon: <HelpCircle className="w-8 h-8 text-deep-navy" />,
      color: 'bg-mint',
      content:
        'DevTrackAcademy is a hands-on, execution-driven software development academy. We replace passive video tutorial hell with real-time workshops, AI-powered interactive learning, live mentoring, and industrial project cohorts where students write, debug, and deploy production software from line one.',
      points: [
        'Practical execution over endless theory',
        'Live instructor-guided project build cohorts',
        'Verified software engineering portfolios',
      ],
    },
    {
      question: 'Who is it for?',
      icon: <Target className="w-8 h-8 text-deep-navy" />,
      color: 'bg-sky',
      content:
        'Built for computer science students, self-taught coders, career switchers, and ambitious developers who want to master real-world software engineering, build job-ready portfolios, and excel in technical interview environments.',
      points: [
        'Computer Science & Engineering Students',
        'Self-taught developers needing portfolio proof',
        'Engineers preparing for top tier tech interviews',
      ],
    },
    {
      question: 'What is already LIVE?',
      icon: <Radio className="w-8 h-8 text-white" />,
      color: 'bg-primary text-white',
      badge: '🟢 LIVE NOW',
      badgeColor: 'bg-mint text-deep-navy',
      content:
        'Our Workshop Platform and our AI Interview Prep platform are both LIVE! Join active cohorts where mentors lead live interactive sessions and review your code pushes, then sharpen your technical interviewing with AI-driven mock interviews, DSA drills, and system design rounds.',
      actionText: 'Explore Live Workshops',
      actionHref: 'https://workshop.devtrackacademy.com',
      secondaryActionText: 'Start AI Interview Prep',
      secondaryActionHref: 'https://interview.devtrackacademy.com/',
      isExternal: true,
      points: [
        'Live 4-Session project bootcamps',
        'AI mock interviews, DSA & system design rounds',
        'Deploy custom portfolios to live URLs',
      ],
    },
    {
      question: 'What is coming next?',
      icon: <Rocket className="w-8 h-8 text-deep-navy" />,
      color: 'bg-[#FFE066]',
      badge: 'Coming Soon',
      badgeColor: 'bg-coral text-white',
      content:
        'Our Self-Paced Courses platform is in active development. It will bring interactive browser code playgrounds, Gemini AI coding assistants, and structured project tracks you can work through on your own schedule. No launch date yet—join the waitlist and we will tell you the moment it opens.',
      actionText: 'Preview & Get Early Access',
      modalType: 'courses' as const,
      points: [
        'Self-Paced Courses with integrated IDE',
        'Gemini AI copilot for instant code debugging',
        'Verified portfolio certification on completion',
      ],
    },
  ];

  return (
    <section id="overview" className="py-24 px-6 bg-brand-bg relative border-t-4 border-deep-navy overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#1B1F3B_1.5px,transparent_1.5px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-space font-black text-xs uppercase tracking-widest bg-white border-2 border-deep-navy px-3 py-1 rounded-full text-deep-navy shadow-[2px_2px_0px_0px_#1B1F3B] inline-block mb-4">
              Platform Breakdown
            </span>
            <h2 className="font-space font-black text-4xl sm:text-5xl text-deep-navy mb-4 tracking-tight">
              Everything You Need To Know About <span className="marker-highlight">DevTrackAcademy</span>
            </h2>
            <p className="font-sans font-semibold text-base sm:text-lg text-deep-navy/70 leading-relaxed">
              Clear answers to who we are, what we offer today, and what we are building next.
            </p>
          </motion.div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, idx) => {
            const isDarkCard = card.color.includes('bg-primary');
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={card.question}
                className={`border-4 border-deep-navy rounded-[32px] p-8 ${card.color} shadow-[8px_8px_0px_0px_#1B1F3B] hover:shadow-[12px_12px_0px_0px_#1B1F3B] transition-all flex flex-col justify-between relative overflow-hidden`}
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex justify-between items-start mb-6">
                    <div className={`border-4 border-deep-navy p-3 rounded-2xl ${isDarkCard ? 'bg-white/10 border-white/20' : 'bg-white'} shadow-[2px_2px_0px_0px_#1B1F3B]`}>
                      {card.icon}
                    </div>
                    {card.badge && (
                      <span className={`font-space font-black text-xs uppercase tracking-wider px-3 py-1 rounded-full border-2 border-deep-navy shadow-[2px_2px_0px_0px_#1B1F3B] ${card.badgeColor}`}>
                        {card.badge}
                      </span>
                    )}
                  </div>

                  <h3 className={`font-space font-black text-2xl sm:text-3xl leading-tight mb-4 ${isDarkCard ? 'text-white' : 'text-deep-navy'}`}>
                    {card.question}
                  </h3>

                  <p className={`font-sans font-semibold text-sm sm:text-base leading-relaxed mb-6 ${isDarkCard ? 'text-white/90' : 'text-deep-navy/80'}`}>
                    {card.content}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2 mb-6 font-sans font-semibold text-xs sm:text-sm">
                    {card.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2.5">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 ${isDarkCard ? 'text-mint' : 'text-primary'}`} />
                        <span className={isDarkCard ? 'text-white/90' : 'text-deep-navy'}>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions if present */}
                {card.actionHref && (
                  <div className="pt-4 border-t-2 border-white/20 mt-4">
                    <Magnetic>
                      <a
                        href={card.actionHref}
                        target={card.isExternal ? '_blank' : undefined}
                        rel={card.isExternal ? 'noopener noreferrer' : undefined}
                        className="neo-btn-secondary text-deep-navy text-sm font-black px-6 py-3 flex items-center justify-center gap-2 w-full shadow-[3px_3px_0px_0px_#1B1F3B]"
                      >
                        {card.actionText}
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </Magnetic>
                    {card.secondaryActionHref && (
                      <Magnetic>
                        <a
                          href={card.secondaryActionHref}
                          target={card.isExternal ? '_blank' : undefined}
                          rel={card.isExternal ? 'noopener noreferrer' : undefined}
                          className="neo-btn-primary bg-mint text-deep-navy text-sm font-black px-6 py-3 flex items-center justify-center gap-2 w-full shadow-[3px_3px_0px_0px_#1B1F3B] mt-3"
                        >
                          {card.secondaryActionText}
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </Magnetic>
                    )}
                  </div>
                )}

                {card.modalType && (
                  <div className="pt-4 border-t-2 border-deep-navy/10 mt-4">
                    <button
                      onClick={() => onOpenModal && onOpenModal(card.modalType!)}
                      className="neo-btn-primary bg-primary text-white text-sm font-black px-6 py-3 flex items-center justify-center gap-2 w-full shadow-[3px_3px_0px_0px_#1B1F3B] cursor-pointer"
                    >
                      {card.actionText}
                      <Sparkles className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
