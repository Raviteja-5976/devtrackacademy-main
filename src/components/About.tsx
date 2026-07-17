'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Wrench, Briefcase, Cpu, CheckCircle2, Terminal, Code2, ArrowUpRight } from 'lucide-react';
import Magnetic from './Magnetic';

export default function About() {
  const philosophyCards = [
    {
      icon: <Code2 className="w-10 h-10 text-deep-navy" />,
      title: 'Build Projects',
      desc: 'Create full-featured web applications, CLI tools, and background worker systems from scratch—not simple hello-world widgets.',
      color: 'bg-mint',
    },
    {
      icon: <Cpu className="w-10 h-10 text-deep-navy" />,
      title: 'Solve Problems',
      desc: 'Debug complex codebase issues, optimize database queries, and design scalable architectures under realistic engineering pressure.',
      color: 'bg-sky',
    },
    {
      icon: <Terminal className="w-10 h-10 text-deep-navy" />,
      title: 'Think Like Developers',
      desc: 'Understand architectural trade-offs, manage project dependencies, write clean Git commits, and read production codebases.',
      color: 'bg-coral',
    },
    {
      icon: <Wrench className="w-10 h-10 text-deep-navy" />,
      title: 'Learn by Doing',
      desc: 'Write production-ready code starting from line one. Skip passive, 50-hour video series and learn through execution.',
      color: 'bg-[#FFE066]',
    },
    {
      icon: <CheckCircle2 className="w-10 h-10 text-white" />,
      title: 'Practice Every Session',
      desc: 'Verify and solidify concepts through hands-on code checkpoints, structured assignments, and live mentor code reviews.',
      color: 'bg-primary',
      textColor: 'text-white/90',
      iconBg: 'bg-white/10 border-white/20',
      titleColor: 'text-white',
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-deep-navy" />,
      title: 'The DevTrack Way',
      desc: 'We measure success by what you deploy, not what you memorize. Build a verified portfolio that proves your capabilities to recruiters.',
      color: 'bg-white',
    },
  ];

  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden bg-brand-bg border-t-4 border-deep-navy">
      {/* Subtle dotted background grid */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#1B1F3B_1.5px,transparent_1.5px)] bg-[size:20px_20px] pointer-events-none" />

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
              Our Philosophy
            </span>
            <h2 className="font-space font-black text-4xl sm:text-5xl md:text-6xl text-deep-navy mb-6 tracking-tight">
              We Don&apos;t Teach Memorization.<br />
              We Teach <span className="marker-highlight-mint">Execution</span>.
            </h2>
            <p className="font-sans font-semibold text-lg sm:text-xl text-deep-navy/70 leading-relaxed">
              Tired of tutorial hell? We believe software development isn&apos;t about watching passive screens. It&apos;s about shipping real code. Here is how we build engineers:
            </p>
          </motion.div>
        </div>

        {/* Philosophy Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {philosophyCards.map((card, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={card.title}
              className={`border-4 border-deep-navy rounded-3xl p-8 cursor-pointer flex flex-col justify-between transition-all duration-300 ${card.color} shadow-[6px_6px_0px_0px_#1B1F3B] hover:shadow-[10px_10px_0px_0px_#1B1F3B] hover:-translate-y-1.5 min-h-[320px]`}
            >
              <div>
                {/* Icon Wrapper */}
                <div className={`border-4 border-deep-navy p-3 rounded-2xl w-fit shadow-[2px_2px_0px_0px_#1B1F3B] mb-8 ${card.iconBg || 'bg-white'} text-deep-navy`}>
                  {card.icon}
                </div>
                
                {/* Title */}
                <h3 className={`font-space font-black text-2xl tracking-tight mb-3 ${card.titleColor || 'text-deep-navy'}`}>
                  {card.title}
                </h3>
                
                {/* Description */}
                <p className={`font-sans font-semibold text-sm leading-relaxed ${card.textColor || 'text-deep-navy/75'}`}>
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
