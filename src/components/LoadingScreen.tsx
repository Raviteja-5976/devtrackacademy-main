'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const quotes = [
  "Rerouting data packets...",
  "Powering up the ecosystem...",
  "Aligning borders to exactly 4px...",
  "Inflating flat shadows...",
  "Preparing awesome software workshops...",
  "Stretching coding muscles...",
];

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setLoading(false);
            // Re-enable scrolling when loaded
            document.body.style.overflow = 'unset';
          }, 400);
          return 100;
        }
        return prev + 4;
      });
    }, 80);

    const quoteTimer = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 1200);

    // Disable scrolling during load
    document.body.style.overflow = 'hidden';

    return () => {
      clearInterval(timer);
      clearInterval(quoteTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: "-100%", 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 bg-primary z-50 flex flex-col items-center justify-center text-white px-4"
        >
          <div className="flex flex-col items-center max-w-sm w-full text-center">
            {/* Logo Wrapper */}
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2, 
                ease: "easeInOut" 
              }}
              className="relative w-32 h-32 mb-8 bg-white border-4 border-deep-navy shadow-[6px_6px_0px_0px_#1B1F3B] rounded-[24px] p-4 flex items-center justify-center"
            >
              <Image 
                src="/logo.png" 
                alt="DevTrack Academy Logo" 
                width={100} 
                height={100}
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Brand Title */}
            <h1 className="font-space font-black text-4xl mb-4 text-deep-navy tracking-tight">
              DevTrack <span className="text-white drop-shadow-[2px_2px_0px_rgba(27,31,59,1)]">Academy</span>
            </h1>

            {/* Rotating Quote */}
            <p className="font-sans font-semibold text-lg text-deep-navy mb-8 h-8 opacity-80">
              {quotes[quoteIndex]}
            </p>

            {/* Progress Bar Container */}
            <div className="w-full h-8 bg-white border-4 border-deep-navy rounded-full overflow-hidden p-1 shadow-[4px_4px_0px_0px_#1B1F3B]">
              <div 
                className="h-full bg-deep-navy rounded-full transition-all duration-75 ease-out" 
                style={{ width: `${progress}%` }}
              />
            </div>
            
            {/* Progress Percentage */}
            <span className="font-space font-black mt-3 text-deep-navy text-xl">
              {progress}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
