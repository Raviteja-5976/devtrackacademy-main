'use client';

import { motion } from 'framer-motion';
import { 
  Hammer, 
  Terminal, 
  Briefcase, 
  Code2, 
  Laptop, 
  Users2 
} from 'lucide-react';

export default function WhyDevTrack() {
  const cards = [
    {
      title: 'Learn by Doing',
      desc: 'No watching passive screens. We build live web applications together from absolute scratch, line-by-line.',
      color: 'bg-mint',
      icon: <Hammer className="w-8 h-8 text-deep-navy" />,
    },
    {
      title: 'Real Projects',
      desc: 'Build functional portfolio assets (not boring todo lists) that represent practical production solutions.',
      color: 'bg-sky',
      icon: <Terminal className="w-8 h-8 text-deep-navy" />,
    },
    {
      title: 'Career Focused',
      desc: 'Tailor-made resources to help you master engineering resumes, portfolio branding, and coding challenges.',
      color: 'bg-coral',
      icon: <Briefcase className="w-8 h-8 text-deep-navy" />,
    },
    {
      title: 'Modern Tech Stack',
      desc: 'Code with industry-leading stacks. We teach Next.js 15, TypeScript, TailwindCSS, Framer Motion, and Git workflows.',
      color: 'bg-[#FFE066]',
      icon: <Code2 className="w-8 h-8 text-deep-navy" />,
    },
    {
      title: 'Interactive Workshops',
      desc: 'Take part in structured, live workshop sessions where you can ask questions, debug bugs, and get code reviews.',
      color: 'bg-primary',
      icon: <Laptop className="w-8 h-8 text-deep-navy" />,
    },
    {
      title: 'Global Community',
      desc: 'Join a tight-knit ecosystem of aspiring developers. Share code, collaborate on hackathons, and help each other.',
      color: 'bg-white',
      icon: <Users2 className="w-8 h-8 text-deep-navy" />,
    },
  ];

  return (
    <section className="py-20 px-6 bg-brand-bg relative border-t-4 border-deep-navy overflow-hidden">
      {/* Subtle dotted background grid */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#1B1F3B_1.5px,transparent_1.5px)] bg-[size:20px_20px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-space font-black text-xs uppercase tracking-widest bg-white border-2 border-deep-navy px-3 py-1 rounded-full text-deep-navy shadow-[2px_2px_0px_0px_#1B1F3B] inline-block mb-4">
              Why DevTrack Academy
            </span>
            <h2 className="font-space font-black text-4xl sm:text-5xl text-deep-navy mb-4 tracking-tight">
              Built for <span className="marker-highlight">Builders</span>
            </h2>
            <p className="font-sans font-medium text-deep-navy/70 max-w-xl mx-auto text-base sm:text-lg">
              Here is how DevTrack <span className="text-primary font-bold">Academy</span> helps you skip the theory and accelerate your career.
            </p>
          </motion.div>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={card.title}
              className={`border-4 border-deep-navy rounded-3xl p-8 cursor-pointer flex flex-col justify-between transition-all duration-300 ${card.color} shadow-[6px_6px_0px_0px_#1B1F3B] hover:shadow-[10px_10px_0px_0px_#1B1F3B] hover:-translate-y-1.5`}
            >
              <div>
                {/* Icon Wrapper */}
                <div className="bg-white border-4 border-deep-navy p-3 rounded-2xl w-fit shadow-[2px_2px_0px_0px_#1B1F3B] mb-8 text-deep-navy">
                  {card.icon}
                </div>
                
                {/* Title */}
                <h3 className="font-space font-black text-2xl text-deep-navy tracking-tight mb-3">
                  {card.title}
                </h3>
                
                {/* Description */}
                <p className="font-sans font-semibold text-sm text-deep-navy/70 leading-relaxed">
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
