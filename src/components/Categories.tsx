'use client';

import { motion } from 'framer-motion';
import { Layout, Database, Terminal, Cpu, Target, Layers, ArrowUpRight } from 'lucide-react';

export default function Categories() {
  const categories = [
    {
      title: 'Career & Portfolio',
      desc: 'Build a standout developer portfolio, optimize your GitHub, and master interviews to land your dream job.',
      count: '1 Active Workshop',
      icon: <Target className="w-8 h-8" />,
      color: 'bg-white',
      rotation: 'hover:rotate-[1.5deg]',
    },
    {
      title: 'Frontend and Backend',
      desc: 'Go from UI layout to scalable servers. Learn React, Next.js, Node.js, and databases by building real web apps.',
      count: '3 Courses Coming Soon',
      icon: <Layout className="w-8 h-8" />,
      color: 'bg-mint',
      rotation: 'hover:rotate-[-1.5deg]',
    },
    {
      title: 'Competitive Coding',
      desc: 'Master data structures, algorithms, and logical problem-solving to ace coding rounds and hackathons.',
      count: '1 Course Coming Soon',
      icon: <Terminal className="w-8 h-8" />,
      color: 'bg-sky',
      rotation: 'hover:rotate-[2deg]',
    },
    {
      title: 'AI and ML',
      desc: 'Integrate LLMs, engineer prompts, build agent frameworks, and train machine learning models for real-world tasks.',
      count: '2 Courses Coming Soon',
      icon: <Cpu className="w-8 h-8" />,
      color: 'bg-coral',
      rotation: 'hover:rotate-[-2deg]',
    },
    {
      title: 'System Design',
      desc: 'Architect large-scale, high-availability distributed systems capable of handling millions of concurrent requests.',
      count: '1 Course Coming Soon',
      icon: <Layers className="w-8 h-8" />,
      color: 'bg-[#FFE066]', // bright yellow
      rotation: 'hover:rotate-[1.5deg]',
    },
  ];

  return (
    <section id="categories" className="py-20 px-6 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-space font-black text-xs uppercase tracking-widest bg-white border-2 border-deep-navy px-3 py-1 rounded-full text-deep-navy shadow-[2px_2px_0px_0px_#1B1F3B] inline-block mb-4">
            Curriculum Categories
          </span>
          <h2 className="font-space font-black text-4xl sm:text-5xl text-deep-navy mb-4 tracking-tight">
            Choose Your <span className="marker-highlight">Specialization</span>
          </h2>
          <p className="font-sans font-medium text-deep-navy/70 max-w-xl mx-auto text-base sm:text-lg">
            Explore practical paths structured to turn you from code-consumer into production-architect.
          </p>
        </motion.div>
      </div>

      {/* Grid of Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            key={cat.title}
            className={`border-4 border-deep-navy rounded-3xl p-8 cursor-pointer flex flex-col justify-between transition-all duration-300 ${cat.color} ${cat.rotation} shadow-[6px_6px_0px_0px_#1B1F3B] hover:shadow-[10px_10px_0px_0px_#1B1F3B] hover:-translate-y-1.5`}
          >
            <div>
              {/* Header Box */}
              <div className="bg-white border-4 border-deep-navy p-3 rounded-2xl w-fit shadow-[2px_2px_0px_0px_#1B1F3B] mb-8 text-deep-navy">
                {cat.icon}
              </div>
              
              {/* Category Details */}
              <h3 className="font-space font-black text-2xl text-deep-navy tracking-tight mb-3">
                {cat.title}
              </h3>
              <p className="font-sans font-semibold text-sm text-deep-navy/75 leading-relaxed mb-6">
                {cat.desc}
              </p>
            </div>

            {/* Bottom Panel */}
            <div className="border-t-2 border-deep-navy/15 pt-4 mt-6 flex justify-between items-center">
              <span className="font-space font-extrabold text-xs text-deep-navy uppercase tracking-wider">
                {cat.count}
              </span>
              <span className="w-8 h-8 rounded-full border-2 border-deep-navy bg-white flex items-center justify-center text-deep-navy shadow-[2px_2px_0px_0px_#1B1F3B] group-hover:bg-deep-navy group-hover:text-white transition-colors duration-200">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
