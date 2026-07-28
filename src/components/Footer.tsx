'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Twitter, Linkedin, Instagram, ArrowUpRight, Heart, Mail, Sparkles } from 'lucide-react';
import Magnetic from './Magnetic';
import LegalModal from './LegalModal';

interface FooterProps {
  onOpenModal?: (type: 'courses' | 'interviews') => void;
}

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 127.14 96.36" className={className} fill="currentColor">
    <path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.22,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.44,8.07C3.66,31.58-1.86,54.65,1,77.53A105.73,105.73,0,0,0,32,96.36a77.7,77.7,0,0,0,6.63-10.85,68.43,68.43,0,0,1-10.4-5c.88-.65,1.72-1.34,2.51-2a75.58,75.58,0,0,0,72.6,0c.79.71,1.63,1.4,2.51,2a68.43,68.43,0,0,1-10.4,5,77.7,77.7,0,0,0,6.63,10.85,105.73,105.73,0,0,0,31.06-18.83C129.54,49.78,123.63,26.9,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.83,46,53.83,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.07,46,96.07,53,91,65.69,84.69,65.69Z" />
  </svg>
);

const RedditIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 20 20" className={className} fill="currentColor">
    <path d="M17.15,10a2.21,2.21,0,0,0-2.22-2.21,2.15,2.15,0,0,0-1.18.35,9.45,9.45,0,0,0-3.57-.8L11,4l2.58.55a1.44,1.44,0,1,0,1.44-1.42,1.43,1.43,0,0,0-1.28.78L10.83,3.3A.37.37,0,0,0,10.42,3.5L9.58,7.31a9.58,9.58,0,0,0-3.6.8,2.15,2.15,0,0,0-1.18-.35A2.21,2.21,0,0,0,2.58,10a2.17,2.17,0,0,0,.92,1.78,5.77,5.77,0,0,0-.07.82c0,2.83,3,5.13,6.72,5.13s6.72-2.3,6.72-5.13a5.77,5.77,0,0,0-.07-.82A2.18,2.18,0,0,0,17.15,10ZM6,10.88a1.18,1.18,0,1,1,1.18,1.18A1.18,1.18,0,0,1,6,10.88Zm7.11,3.47a3.52,3.52,0,0,1-4.48,0,.36.36,0,1,1,.48-.54,2.82,2.82,0,0,0,3.52,0,.36.36,0,1,1,.48.54Zm-.87-2.29A1.18,1.18,0,1,1,13.42,12,1.18,1.18,0,0,1,12.24,12.06Z" />
  </svg>
);

export default function Footer({ onOpenModal }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const [activeLegalTab, setActiveLegalTab] = useState<'terms' | 'privacy' | 'refund' | null>(null);

  const socialLinks = [
    { icon: <DiscordIcon className="w-5 h-5" />, href: 'https://discord.gg/dftPTfdde', name: 'Discord' },
    { icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/devtrackacademy/', name: 'Instagram' },
    { icon: <RedditIcon className="w-5 h-5" />, href: 'https://www.reddit.com/r/devtrackacademy/', name: 'Reddit' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/company/devtrackacademy', name: 'LinkedIn' },
    { icon: <Twitter className="w-5 h-5" />, href: 'https://x.com/DevTrackAcademy', name: 'Twitter' },
  ];

  return (
    <footer className="relative bg-deep-navy text-white rounded-t-[40px] border-t-4 border-deep-navy pt-16 pb-8 px-6 mt-auto overflow-hidden font-space">
      {/* Decorative dot grid */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#FFF8F0_1.5px,transparent_1.5px)] bg-[size:20px_20px] rounded-t-[40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b-2 border-white/10">
        
        {/* Brand Column */}
        <div className="md:col-span-5 flex flex-col items-start">
          <Link href="/" className="flex items-center gap-3 group mb-6">
            <div className="relative w-12 h-12 bg-white border-2 border-deep-navy shadow-[2px_2px_0px_0px_#1B1F3B] rounded-xl flex items-center justify-center p-1">
              <Image
                src="/logo.png"
                alt="DevTrack Academy Logo"
                width={36}
                height={36}
                className="object-contain"
              />
            </div>
            <span className="font-space font-black text-2xl tracking-tight text-white">
              DevTrack <span className="text-primary group-hover:text-coral transition-colors duration-200">Academy</span>
            </span>
          </Link>
          <p className="font-sans font-medium text-sm text-white/70 max-w-sm mb-6 leading-relaxed">
            Hands-on development education designed to skip theoretical tutorial hell and help engineers deploy production-grade software portfolios.
          </p>

          {/* Direct Email Callout Box */}
          <div className="bg-white/10 border-2 border-white/20 p-4 rounded-2xl w-full max-w-sm mb-6 space-y-2 text-xs">
            <div className="flex items-center gap-1.5 text-mint font-bold uppercase tracking-wider text-[10px]">
              <Mail className="w-3.5 h-3.5" /> Reach Out Directly
            </div>
            <p className="text-white/80 font-sans font-medium">
              Founder: <a href="mailto:founder@devtrackacademy.com" className="font-mono text-mint hover:underline font-bold">founder@devtrackacademy.com</a>
            </p>
            <p className="text-white/80 font-sans font-medium">
              Support: <a href="mailto:support@devtrackacademy.com" className="font-mono text-sky hover:underline font-bold">support@devtrackacademy.com</a>
            </p>
          </div>
          
          {/* Social Icons */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <Magnetic key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border-2 border-white bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-deep-navy transition-all duration-200 shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[-1px] hover:translate-y-[-1px]"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              </Magnetic>
            ))}
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="md:col-span-3">
          <h4 className="font-space font-black text-lg uppercase text-white/40 tracking-wider mb-6">
            Academy Tracks
          </h4>
          <ul className="flex flex-col gap-3 font-space text-sm font-bold">
            <li>
              <Link href="/" className="text-white/80 hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <a
                href="https://workshop.devtrackacademy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-primary transition-colors flex items-center gap-1.5"
              >
                Workshops <span className="bg-mint text-deep-navy text-[9px] font-black uppercase px-1.5 py-0.5 rounded">Live</span>
              </a>
            </li>
            <li>
              <button
                onClick={() => onOpenModal && onOpenModal('courses')}
                className="text-white/80 hover:text-primary transition-colors text-left flex items-center gap-1.5 cursor-pointer"
              >
                Courses <span className="bg-sky text-deep-navy text-[9px] font-black uppercase px-1.5 py-0.5 rounded">Aug 30</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => onOpenModal && onOpenModal('interviews')}
                className="text-white/80 hover:text-primary transition-colors text-left flex items-center gap-1.5 cursor-pointer"
              >
                AI Interview Prep <span className="bg-coral text-white text-[9px] font-black uppercase px-1.5 py-0.5 rounded">Aug 30</span>
              </button>
            </li>
            <li>
              <Link href="/about" className="text-white/80 hover:text-primary transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <a href="mailto:support@devtrackacademy.com" className="text-white/80 hover:text-primary transition-colors">
                Contact Support
              </a>
            </li>
          </ul>
        </div>

        {/* Legal Column */}
        <div className="md:col-span-4">
          <h4 className="font-space font-black text-lg uppercase text-white/40 tracking-wider mb-6">
            Legal & Policy
          </h4>
          <ul className="flex flex-col gap-3 font-space text-sm font-bold mb-8">
            <li>
              <Link href="/terms" className="text-white/80 hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-white/80 hover:text-primary transition-colors">
                Privacy Policy (DPDP Act 2023)
              </Link>
            </li>
            <li>
              <button
                onClick={() => setActiveLegalTab('refund')}
                className="text-white/80 hover:text-primary transition-colors text-left cursor-pointer"
              >
                Refund Policy
              </button>
            </li>
          </ul>
          
          <div className="bg-white/5 border-2 border-white/10 p-4 rounded-2xl flex items-center gap-3">
            <Heart className="w-5 h-5 text-coral fill-coral shrink-0" />
            <span className="font-sans font-semibold text-xs text-white/60">
              Handcrafted for developers & future engineers.
            </span>
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
        <p className="font-space font-bold text-xs text-white/50">
          &copy; {currentYear} DevTrack <span className="text-primary">Academy</span>. All rights reserved.
        </p>
        <p className="font-sans text-[10px] font-semibold text-white/30">
          All branding designs and course materials are properties of DevTrack Academy.
        </p>
      </div>

      <LegalModal
        isOpen={activeLegalTab !== null}
        type={activeLegalTab}
        onClose={() => setActiveLegalTab(null)}
      />
    </footer>
  );
}
