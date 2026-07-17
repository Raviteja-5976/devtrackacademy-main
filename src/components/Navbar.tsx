'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Magnetic from './Magnetic';

export default function Navbar() {
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

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Workshops', href: 'https://workshop.devtrackacademy.com' },
    { name: 'Learning Platform', href: 'https://learn.devtrackacademy.com' },
    { name: 'About', href: '#about' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled
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
          <div className="hidden md:flex items-center gap-8 font-space">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-lg font-bold text-deep-navy hover:text-primary transition-colors duration-200 group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-deep-navy transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA & Auth */}
          <div className="hidden md:flex items-center gap-6 font-space">
            <Magnetic>
              <Link
                href="#ecosystem"
                className="neo-btn-primary px-6 py-2.5 flex items-center gap-1 text-base tracking-wide shadow-[3px_3px_0px_0px_#1B1F3B]"
              >
                Get Started
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </Magnetic>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border-2 border-deep-navy bg-white shadow-[2px_2px_0px_0px_#1B1F3B] rounded-xl text-deep-navy active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#1B1F3B] transition-all"
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
            className="fixed inset-0 top-[76px] z-30 bg-brand-bg border-b-4 border-deep-navy flex flex-col p-8 md:hidden font-space"
          >
            <div className="flex flex-col gap-6 text-center mt-8">
              {navLinks.map((link, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={link.name}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-3xl font-extrabold text-deep-navy hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (navLinks.length) * 0.1 }}
                className="mt-6 flex justify-center"
              >
                <Link
                  href="#ecosystem"
                  onClick={() => setMobileMenuOpen(false)}
                  className="neo-btn-primary text-xl px-10 py-4 w-full max-w-sm flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_#1B1F3B]"
                >
                  Get Started
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
