'use client';

import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Terminal, 
  Code2, 
  Globe, 
  Layout, 
  Award,
  ArrowRight,
  ArrowDown
} from 'lucide-react';

export default function LearningJourney() {
  const steps = [
    {
      title: 'Learn',
      desc: 'Master software engineering concepts through guided interactive modules.',
      icon: <BookOpen className="w-6 h-6 text-deep-navy" />,
      color: 'bg-mint',
    },
    {
      title: 'Practice',
      desc: 'Reinforce coding skills instantly in custom interactive code environments.',
      icon: <Terminal className="w-6 h-6 text-deep-navy" />,
      color: 'bg-sky',
    },
    {
      title: 'Build',
      desc: 'Construct actual full-stack applications and professional repositories.',
      icon: <Code2 className="w-6 h-6 text-deep-navy" />,
      color: 'bg-coral',
    },
    {
      title: 'Deploy',
      desc: 'Ship your working codebases live to production using CI/CD pipelines.',
      icon: <Globe className="w-6 h-6 text-deep-navy" />,
      color: 'bg-[#FFE066]',
    },
    {
      title: 'Portfolio',
      desc: 'Verify and host your code projects on a sleek public developer portfolio.',
      icon: <Layout className="w-6 h-6 text-deep-navy" />,
      color: 'bg-primary',
    },
    {
      title: 'Career',
      desc: 'Unlock job-ready opportunities with fully verified builder credentials.',
      icon: <Award className="w-6 h-6 text-deep-navy" />,
      color: 'bg-white',
    },
  ];

  return (
    <section className="py-20 px-6 bg-brand-bg relative border-t-4 border-deep-navy overflow-hidden">
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
              Your Roadmap
            </span>
            <h2 className="font-space font-black text-4xl sm:text-5xl text-deep-navy mb-4 tracking-tight">
              The Learning <span className="marker-highlight-mint">Journey</span>
            </h2>
            <p className="font-sans font-medium text-deep-navy/70 max-w-xl mx-auto text-base sm:text-lg">
              Here is the exact progression step-by-step from beginner student to software engineer.
            </p>
          </motion.div>
        </div>

        {/* Timeline Desktop (Hidden on mobile) */}
        <div className="hidden lg:grid grid-cols-6 gap-6 relative items-start">
          {/* Connector Line */}
          <div className="absolute top-12 left-[10%] right-[10%] h-[4px] bg-deep-navy z-0" />

          {steps.map((step, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              key={step.title}
              className="flex flex-col items-center text-center relative z-10"
            >
              {/* Animated Node Circle */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: [0, 4, -4, 0] }}
                className={`w-24 h-24 rounded-full border-4 border-deep-navy flex items-center justify-center ${step.color} shadow-[4px_4px_0px_0px_#1B1F3B] mb-6 relative`}
              >
                {step.icon}
                
                {/* Arrow indicator for next node */}
                {idx < steps.length - 1 && (
                  <div className="absolute top-1/2 -right-4 translate-y-[-50%] bg-white border-2 border-deep-navy p-1 rounded-full shadow-[1px_1px_0px_0px_#1B1F3B] z-20">
                    <ArrowRight className="w-3.5 h-3.5 text-deep-navy" />
                  </div>
                )}
              </motion.div>

              <h3 className="font-space font-black text-xl text-deep-navy mb-2 tracking-tight">
                {step.title}
              </h3>
              <p className="font-sans font-semibold text-xs text-deep-navy/75 max-w-[160px] leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Timeline Mobile (Stacked, Hidden on desktop) */}
        <div className="flex flex-col gap-8 lg:hidden max-w-md mx-auto">
          {steps.map((step, idx) => (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              key={step.title}
              className="flex items-start gap-4"
            >
              {/* Left Column: circle node and vertical connector */}
              <div className="flex flex-col items-center">
                <div className={`w-16 h-16 rounded-2xl border-4 border-deep-navy flex items-center justify-center ${step.color} shadow-[3px_3px_0px_0px_#1B1F3B]`}>
                  {step.icon}
                </div>
                {idx < steps.length - 1 && (
                  <div className="flex flex-col items-center py-2">
                    <ArrowDown className="w-5 h-5 text-deep-navy" />
                  </div>
                )}
              </div>

              {/* Right Column: Content */}
              <div className="bg-white border-4 border-deep-navy rounded-2xl p-5 shadow-[4px_4px_0px_0px_#1B1F3B] flex-1">
                <span className="font-space font-black text-xs text-primary uppercase">
                  Step {idx + 1}
                </span>
                <h3 className="font-space font-black text-xl text-deep-navy tracking-tight mt-1 mb-2">
                  {step.title}
                </h3>
                <p className="font-sans font-semibold text-xs text-deep-navy/70 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
