'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, Sparkles, Mail } from 'lucide-react';
import Magnetic from './Magnetic';

interface NavbarProps {
  onOpenModal?: (type: 'courses' | 'interviews') => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCoursesClick = (e: React.MouseEvent) => {
    if (onOpenModal) {
      e.preventDefault();
      onOpenModal('courses');
    }
  };

  const handleInterviewsClick = (e: React.MouseEvent) => {
    if (onOpenModal) {
      e.preventDefault();
      onOpenModal('interviews');
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-brand-bg/95 border-b-4 border-deep-navy shadow-[0_4px_0px_0px_#1B1F3B] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
              transition={{ duration: 0.3 }}
              className="relative w-12 h-12 bg-white border-2 border-deep-navy shadow-[2px_2px_0px_0px_#1B1F3B] rounded-xl flex items-center justify-center p-1"
            >
              <Image
                src="/logo.png"
                alt="DevTrack Academy Logo"
                width={36}
                height={36}
                className="object-contain"
              />
            </motion.div>
            <span className="font-space font-black text-2xl tracking-tight text-deep-navy">
              DevTrack <span className="text-primary group-hover:text-coral transition-colors duration-200">Academy</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 font-space">
            <Link
              href="/"
              className="relative text-base font-bold text-deep-navy hover:text-primary transition-colors duration-200 group py-1"
            >
              Home
            </Link>

            <a
              href="https://workshop.devtrackacademy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-base font-bold text-deep-navy hover:text-primary transition-colors duration-200 group py-1 flex items-center gap-1"
            >
              Workshops
              <span className="bg-mint text-deep-navy text-[9px] font-black uppercase px-1.5 py-0.5 rounded border border-deep-navy shadow-[1px_1px_0px_0px_#1B1F3B]">
                Live
              </span>
            </a>

            <button
              onClick={handleCoursesClick}
              className="relative text-base font-bold text-deep-navy hover:text-primary transition-colors duration-200 group py-1 flex items-center gap-1 cursor-pointer"
            >
              Courses
              <span className="bg-sky text-deep-navy text-[9px] font-black uppercase px-1.5 py-0.5 rounded border border-deep-navy shadow-[1px_1px_0px_0px_#1B1F3B]">
                Aug 30
              </span>
            </button>

            <button
              onClick={handleInterviewsClick}
              className="relative text-base font-bold text-deep-navy hover:text-primary transition-colors duration-200 group py-1 flex items-center gap-1 cursor-pointer"
            >
              AI Interview Prep
              <span className="bg-coral text-white text-[9px] font-black uppercase px-1.5 py-0.5 rounded border border-deep-navy shadow-[1px_1px_0px_0px_#1B1F3B]">
                Aug 30
              </span>
            </button>

            <Link
              href="/about"
              className="relative text-base font-bold text-deep-navy hover:text-primary transition-colors duration-200 group py-1"
            >
              About
            </Link>

            <a
              href="mailto:support@devtrackacademy.com?cc=founder@devtrackacademy.com"
              className="relative text-base font-bold text-deep-navy hover:text-primary transition-colors duration-200 group py-1 flex items-center gap-1"
            >
              Contact
            </a>
          </div>

          {/* CTA & Auth */}
          <div className="hidden lg:flex items-center gap-6 font-space">
            <Magnetic>
              <Link
                href="/#ecosystem"
                className="neo-btn-primary px-6 py-2.5 flex items-center gap-1 text-base tracking-wide shadow-[3px_3px_0px_0px_#1B1F3B]"
              >
                Get Started
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </Magnetic>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border-2 border-deep-navy bg-white shadow-[2px_2px_0px_0px_#1B1F3B] rounded-xl text-deep-navy active:translate-x-0.5 active:translate-y-0.5 transition-all"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[76px] z-30 bg-brand-bg border-b-4 border-deep-navy flex flex-col p-8 lg:hidden font-space overflow-y-auto"
          >
            <div className="flex flex-col gap-5 text-center mt-4">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-extrabold text-deep-navy hover:text-primary"
              >
                Home
              </Link>
              <a
                href="https://workshop.devtrackacademy.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-extrabold text-deep-navy hover:text-primary flex items-center justify-center gap-2"
              >
                Workshops <span className="bg-mint text-xs px-2 py-0.5 rounded border border-deep-navy">Live</span>
              </a>
              <button
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleCoursesClick(e);
                }}
                className="text-2xl font-extrabold text-deep-navy hover:text-primary flex items-center justify-center gap-2"
              >
                Courses <span className="bg-sky text-xs px-2 py-0.5 rounded border border-deep-navy">Aug 30</span>
              </button>
              <button
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleInterviewsClick(e);
                }}
                className="text-2xl font-extrabold text-deep-navy hover:text-primary flex items-center justify-center gap-2"
              >
                AI Interview Prep <span className="bg-coral text-white text-xs px-2 py-0.5 rounded border border-deep-navy">Aug 30</span>
              </button>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-extrabold text-deep-navy hover:text-primary"
              >
                About
              </Link>
              <a
                href="mailto:support@devtrackacademy.com?cc=founder@devtrackacademy.com"
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-extrabold text-deep-navy hover:text-primary"
              >
                Contact Us
              </a>

              <div className="mt-4 flex justify-center">
                <Link
                  href="/#ecosystem"
                  onClick={() => setMobileMenuOpen(false)}
                  className="neo-btn-primary text-lg px-8 py-3.5 w-full max-w-sm flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_#1B1F3B]"
                >
                  Get Started
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
