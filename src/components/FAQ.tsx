'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      q: 'How do the live workshops work?',
      a: 'Workshops are live, interactive cohort sessions. You build complete, production-grade applications line-by-line alongside experienced mentors. You get live Q&A, assignments, code checkpoints for every hour, and lifetime access to recording archives.',
    },
    {
      q: 'What is the role of AI in the learning platform?',
      a: 'The Learning Platform features integrated code sandboxes with custom AI assistants. They act as 24/7 pair-programming partners—helping diagnose build errors, explaining complex logic, and offering style hints without just writing the code for you.',
    },
    {
      q: 'How do workshops differ from the self-paced learning platform?',
      a: 'Workshops are live, scheduled cohort-based programs focusing on collective building and real-time mentor interaction. The Learning Platform is self-paced, providing access to interactive code editors, structured video courses, and automated checkpoints.',
    },
    {
      q: 'How does DevTrack help me build a developer portfolio?',
      a: 'We focus on high-fidelity, unique projects rather than cookie-cutter template widgets. Every app you build is deployed to production. We also host a customized, verified developer portfolio page linking to your live apps and Git commit histories.',
    },
    {
      q: 'How does practical learning help with career growth?',
      a: 'Recruiters don&apos;t value empty certificates. They value working code. DevTrack credentials verify that you have written, deployed, and debugged real software. This provides concrete evidence of your engineering capabilities during interviews.',
    },
  ];

  return (
    <section id="faq" className="py-20 px-6 bg-brand-bg relative border-t-4 border-deep-navy overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-space font-black text-xs uppercase tracking-widest bg-white border-2 border-deep-navy px-3 py-1 rounded-full text-deep-navy shadow-[2px_2px_0px_0px_#1B1F3B] inline-block mb-4">
              Common Questions
            </span>
            <h2 className="font-space font-black text-4xl sm:text-5xl text-deep-navy mb-4 tracking-tight">
              Frequently Asked <span className="marker-highlight">Questions</span>
            </h2>
            <p className="font-sans font-medium text-deep-navy/70 max-w-lg mx-auto text-base">
              Got questions? We have answers. If you need anything else, feel free to contact our mentors.
            </p>
          </motion.div>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border-4 border-deep-navy rounded-3xl overflow-hidden shadow-[4px_4px_0px_0px_#1B1F3B] transition-shadow duration-200 hover:shadow-[6px_6px_0px_0px_#1B1F3B]"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left font-space font-black text-lg md:text-xl text-deep-navy bg-white hover:bg-brand-bg/20 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-6 h-6 flex-shrink-0 transition-colors ${isOpen ? 'text-primary' : 'text-deep-navy/60'}`} />
                    <span>{faq.q}</span>
                  </div>
                  <span className="ml-4 border-2 border-deep-navy bg-white p-1 rounded-lg text-deep-navy flex-shrink-0 shadow-[2px_2px_0px_0px_#1B1F3B] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#1B1F3B] transition-all">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: 'auto', 
                        opacity: 1, 
                        transition: { height: { duration: 0.3 }, opacity: { duration: 0.2, delay: 0.05 } } 
                      }}
                      exit={{ 
                        height: 0, 
                        opacity: 0, 
                        transition: { height: { duration: 0.25 }, opacity: { duration: 0.15 } } 
                      }}
                      className="border-t-2 border-deep-navy/15"
                    >
                      <div className="p-6 font-sans font-semibold text-sm sm:text-base text-deep-navy/75 leading-relaxed bg-brand-bg/10">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
