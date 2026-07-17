'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Mail, Terminal, ShieldAlert, Cpu, Database } from 'lucide-react';
import Magnetic from './Magnetic';

export default function CoursesComingSoon() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const upcomingCourses = [
    {
      title: 'Advanced React & Animation',
      desc: 'Master Framer Motion, GSAP, canvas layouts, custom cursors, and build high-fidelity interactive frontend sites.',
      icon: <Cpu className="w-8 h-8 text-deep-navy" />,
      color: 'bg-sky',
    },
    {
      title: 'Fullstack Node.js Engine',
      desc: 'Learn backends from routing, middleware, database integration with Postgres, caching with Redis, to Docker.',
      icon: <Database className="w-8 h-8 text-deep-navy" />,
      color: 'bg-coral',
    },
    {
      title: 'Scripting & Automation',
      desc: 'Harness Python for parsing datasets, automate API interactions, web scraping, and building CLI applications.',
      icon: <Terminal className="w-8 h-8 text-deep-navy" />,
      color: 'bg-[#FFE066]',
    },
    {
      title: 'AI Product Engineering',
      desc: 'Architect applications powered by Gemini models, orchestrate agents, manage vector embeddings, and prompt structures.',
      icon: <Sparkles className="w-8 h-8 text-deep-navy" />,
      color: 'bg-white',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section id="courses" className="py-20 px-6 bg-brand-bg relative border-t-4 border-deep-navy overflow-hidden">
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
              Coming Soon
            </span>
            <h2 className="font-space font-black text-4xl sm:text-5xl text-deep-navy mb-4 tracking-tight">
              Self-Paced <span className="marker-highlight-mint">Courses</span>
            </h2>
            <p className="font-sans font-medium text-deep-navy/70 max-w-xl mx-auto text-base sm:text-lg">
              Structured modules for deeper specialized studies. Get notified when we deploy our self-paced stack.
            </p>
          </motion.div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {upcomingCourses.map((course, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                rotate: idx % 2 === 0 ? 2 : -2,
                transition: { type: 'spring', stiffness: 300, damping: 10 }
              }}
              key={course.title}
              className={`border-4 border-deep-navy rounded-3xl p-6 ${course.color} shadow-[6px_6px_0px_0px_#1B1F3B] flex flex-col justify-between cursor-pointer min-h-[320px]`}
            >
              <div>
                {/* Coming Soon ribbon */}
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-white border-2 border-deep-navy p-2 rounded-xl text-deep-navy">
                    {course.icon}
                  </div>
                  <span className="bg-deep-navy text-white text-[10px] font-space font-black uppercase tracking-wider px-2 py-0.5 rounded border border-deep-navy shadow-[1px_1px_0px_0px_rgba(255,255,255,1)]">
                    Soon
                  </span>
                </div>

                <h3 className="font-space font-black text-xl text-deep-navy leading-tight mb-2 tracking-tight">
                  {course.title}
                </h3>
                <p className="font-sans font-semibold text-xs text-deep-navy/70 leading-relaxed">
                  {course.desc}
                </p>
              </div>

              <div className="border-t-2 border-deep-navy/10 pt-4 mt-6 flex items-center justify-between">
                <span className="font-space font-extrabold text-[10px] uppercase text-deep-navy/55 tracking-wider">
                  Syllabus Ready
                </span>
                <span className="text-xs font-space font-black text-deep-navy flex items-center gap-1">
                  Waitlist open <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="bg-mint border-4 border-deep-navy rounded-[32px] p-8 md:p-12 shadow-[8px_8px_0px_0px_#1B1F3B] relative overflow-hidden"
        >
          {/* Background dots grid */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1B1F3B_1.5px,transparent_1.5px)] bg-[size:18px_18px] pointer-events-none" />

          <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
            <div className="bg-white border-4 border-deep-navy p-3 rounded-full shadow-[2px_2px_0px_0px_#1B1F3B] mb-6 text-deep-navy animate-bounce">
              <Mail className="w-8 h-8" />
            </div>

            <h3 className="font-space font-black text-3xl sm:text-4xl md:text-5xl text-deep-navy tracking-tight mb-4">
              Join the DevTrack <span className="text-white drop-shadow-[2px_2px_0px_rgba(27,31,59,1)]">Academy</span> Waitlist
            </h3>

            <p className="font-sans font-semibold text-base sm:text-lg text-deep-navy/80 max-w-2xl mb-8 leading-relaxed">
              We are coding the courses as we speak. Drop your email below to receive instant launch notifications, early bird beta access, and 50% discounts.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white border-4 border-deep-navy rounded-2xl p-6 shadow-[4px_4px_0px_0px_#1B1F3B] max-w-md w-full"
              >
                <h4 className="font-space font-black text-xl text-deep-navy mb-1 flex items-center justify-center gap-2">
                  🎉 You are on the list!
                </h4>
                <p className="font-sans font-semibold text-xs text-deep-navy/70">
                  Thanks for joining our workspace waitlist. We will notify you the moment courses go live.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 w-full max-w-lg">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 bg-white border-4 border-deep-navy px-5 py-4 rounded-full font-space font-bold text-deep-navy placeholder:text-deep-navy/50 focus:outline-none focus:ring-0 shadow-[4px_4px_0px_0px_#1B1F3B] transition-transform focus:scale-[1.01]"
                />
                <Magnetic>
                  <button
                    type="submit"
                    className="neo-btn-primary bg-primary text-white text-lg px-8 py-4 w-full sm:w-auto h-full shadow-[4px_4px_0px_0px_#1B1F3B] flex items-center justify-center gap-1.5"
                  >
                    Join Waitlist
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Magnetic>
              </form>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
