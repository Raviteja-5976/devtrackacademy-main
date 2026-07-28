'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

function Counter({ end, duration = 1.5, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const endValue = parseInt(end.toString(), 10);
    if (start === endValue) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = 30; // ms per update
    const totalSteps = totalMiliseconds / incrementTime;
    const stepIncrement = endValue / totalSteps;

    const timer = setInterval(() => {
      start += stepIncrement;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  const statsData = [
    {
      value: 100,
      suffix: '%',
      label: 'Practical Learning',
      desc: 'Zero fluff, 100% building real projects.',
      color: 'bg-primary',
    },
    {
      value: 24,
      suffix: '/7',
      label: 'AI Assisted Learning',
      desc: 'Get instant explanations and codebase debugging.',
      color: 'bg-mint',
    },
    {
      value: 100,
      suffix: '%',
      label: 'Live Interactive Workshops',
      desc: 'Collaborate live with experienced software engineers.',
      color: 'bg-sky',
    },
    {
      value: 100,
      suffix: '%',
      label: 'AI Interview Prep',
      desc: 'Simulate live technical & system design interviews with AI.',
      color: 'bg-coral',
    },
    {
      value: 100,
      suffix: '%',
      label: 'Portfolio Focused',
      desc: 'We construct assets that make recruiters notice you.',
      color: 'bg-[#FFE066]',
    },
  ];

  return (
    <section className="relative py-20 px-6 bg-deep-navy border-y-4 border-deep-navy overflow-hidden">
      {/* Decorative dots grid background inside stats section */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFF8F0_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {statsData.map((stat, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            key={idx}
            className={`bg-white border-4 border-deep-navy p-6 md:p-8 rounded-[24px] shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-all flex flex-col justify-between`}
          >
            <div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className={`w-3 h-3 rounded-full ${stat.color} border border-deep-navy inline-block`} />
                <h3 className="font-space font-black text-5xl md:text-6xl text-deep-navy">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </h3>
              </div>
              <h4 className="font-space font-black text-xl text-deep-navy mb-1 uppercase tracking-tight">
                {stat.label}
              </h4>
            </div>
            <p className="font-sans font-medium text-sm text-deep-navy/75 mt-2">
              {stat.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
