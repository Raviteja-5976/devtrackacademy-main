'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Users, Linkedin, Flame, ExternalLink, Twitter, Instagram } from 'lucide-react';

// Custom SVG Icons for Discord and Reddit
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

export default function Community() {
  const communityLinks = [
    {
      title: 'Discord Server',
      desc: 'Join our real-time chat server for community discussions, live study sessions, Q&A, and networking with peers.',
      linkText: 'Join Discord Discussions',
      href: 'https://discord.gg/dftPTfdde',
      badge: 'Discussions',
      icon: <DiscordIcon className="w-8 h-8 text-[#5865F2]" />,
    },
    {
      title: 'Reddit Subreddit',
      desc: 'Participate in our official subreddit for sharing projects, getting feedback, and code reviews.',
      linkText: 'Join Subreddit',
      href: 'https://www.reddit.com/r/devtrackacademy/',
      badge: 'Forum',
      icon: <RedditIcon className="w-8 h-8 text-[#FF4500]" />,
    },
    {
      title: 'LinkedIn',
      desc: 'Follow our official LinkedIn page for academy announcements, student success highlights, and industry trends.',
      linkText: 'Follow LinkedIn',
      href: 'https://www.linkedin.com/company/devtrackacademy',
      badge: 'Socials',
      icon: <Linkedin className="w-8 h-8 text-[#0A66C2]" />,
    },
    {
      title: 'Instagram',
      desc: 'Check out our Instagram for daily developer updates, behind-the-scenes insights, and visual tips.',
      linkText: 'Follow Instagram',
      href: 'https://www.instagram.com/devtrackacademy/',
      badge: 'Socials',
      icon: <Instagram className="w-8 h-8 text-[#E1306C]" />,
    },
    {
      title: 'X / Twitter',
      desc: 'Follow us on X (formerly Twitter) for hot takes, quick tips, workshop announcements, and industry updates.',
      linkText: 'Follow X / Twitter',
      href: 'https://x.com/DevTrackAcademy',
      badge: 'Updates',
      icon: <Twitter className="w-8 h-8 text-[#1B1F3B]" />,
    },
  ];

  return (
    <section id="community" className="py-24 px-6 bg-brand-bg relative border-t-4 border-deep-navy overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#1B1F3B_1.5px,transparent_1.5px)] bg-[size:28px_28px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-space font-black text-xs uppercase tracking-widest bg-white border-2 border-deep-navy px-3 py-1 rounded-full text-deep-navy shadow-[2px_2px_0px_0px_#1B1F3B] inline-block mb-4">
              Community & discussions
            </span>
            <h2 className="font-space font-black text-4xl sm:text-5xl md:text-6xl text-deep-navy mb-6 tracking-tight">
              Connect With Our <span className="marker-highlight-mint">Community</span>
            </h2>
            <p className="font-sans font-semibold text-lg text-deep-navy/70 leading-relaxed">
              Join our subreddit, Discord server for discussions and study sessions, or follow us on our socials to keep track of updates!
            </p>
          </motion.div>
        </div>

        {/* Staggered Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {communityLinks.map((card, idx) => {
            const isLast = idx === communityLinks.length - 1;
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ 
                  scale: 1.02, 
                  rotate: idx % 2 === 0 ? 1 : -1,
                  y: -5,
                  transition: { type: 'spring', stiffness: 300, damping: 15 }
                }}
                key={card.title}
                className={`border-4 border-deep-navy rounded-3xl p-8 cursor-pointer flex flex-col justify-between bg-white shadow-[6px_6px_0px_0px_#1B1F3B] hover:shadow-[10px_10px_0px_0px_#1B1F3B] transition-all min-h-[260px] ${
                  isLast ? 'md:col-span-2 md:max-w-xl md:mx-auto w-full' : ''
                }`}
              >
                <div>
                  {/* Icon */}
                  <div className="bg-brand-bg border-2 border-deep-navy p-3 rounded-2xl w-fit shadow-[2px_2px_0px_0px_#1B1F3B] mb-6 text-deep-navy">
                    {card.icon}
                  </div>

                  {/* Title */}
                  <h3 className="font-space font-black text-2xl tracking-tight mb-3 text-deep-navy">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans font-semibold text-sm text-deep-navy/75 leading-relaxed mb-6">
                    {card.desc}
                  </p>
                </div>

                <div className="border-t-2 border-deep-navy/15 pt-4 mt-4 flex justify-between items-center">
                  <a 
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-space font-extrabold text-sm text-primary hover:text-coral flex items-center gap-1.5 transition-colors"
                  >
                    {card.linkText}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <span className="bg-mint text-deep-navy border border-deep-navy text-[9px] font-space font-black uppercase px-2 py-0.5 rounded shadow-[1px_1px_0px_0px_#1B1F3B]">
                    {card.badge}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
