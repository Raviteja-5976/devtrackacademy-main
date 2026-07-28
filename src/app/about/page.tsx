'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import About from '@/components/About';
import PlatformOverview from '@/components/PlatformOverview';
import Link from 'next/link';
import { ArrowLeft, Code2, Users, Rocket, Award, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';
import Magnetic from '@/components/Magnetic';

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="flex-grow pt-32 pb-24 bg-brand-bg px-6 font-space relative overflow-hidden">
        {/* Background shapes */}
        <div className="absolute top-[10%] left-[5%] w-32 h-32 bg-mint/10 rounded-full border-4 border-deep-navy/5 pointer-events-none" />
        <div className="absolute bottom-[15%] right-[5%] w-44 h-44 bg-sky/10 rounded-3xl border-4 border-deep-navy/5 rotate-12 pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-bold text-deep-navy hover:text-primary mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Homepage
          </Link>

          {/* Hero Header */}
          <div className="text-left mb-16 max-w-4xl">
            <span className="bg-white text-deep-navy border-2 border-deep-navy font-black text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-[2px_2px_0px_0px_#1B1F3B] inline-block mb-4">
              About DevTrack Academy
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-deep-navy leading-tight tracking-tight mb-6">
              Empowering Developers Through <span className="marker-highlight">Hands-on Execution</span>
            </h1>
            <p className="font-sans font-semibold text-lg sm:text-xl text-deep-navy/70 leading-relaxed max-w-3xl">
              We started DevTrackAcademy with a simple conviction: software engineering cannot be learned by watching passive 50-hour video series. It is learned by building real projects, debugging codebases, and shipping software to production.
            </p>
          </div>

          {/* Core Story & Vision Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
            {/* Left Box (Grid span 7) */}
            <div className="lg:col-span-7 bg-white border-4 border-deep-navy rounded-[36px] p-8 md:p-10 shadow-[8px_8px_0px_0px_#1B1F3B] flex flex-col justify-between">
              <div>
                <div className="bg-mint border-2 border-deep-navy p-3 rounded-2xl w-fit shadow-[2px_2px_0px_0px_#1B1F3B] mb-6">
                  <Rocket className="w-8 h-8 text-deep-navy" />
                </div>
                <h3 className="font-black text-2xl sm:text-3xl text-deep-navy mb-4 tracking-tight">
                  Our Mission: Kill Tutorial Hell
                </h3>
                <p className="font-sans font-semibold text-sm sm:text-base text-deep-navy/75 leading-relaxed space-y-4 mb-6">
                  Millions of aspiring coders get stuck in the cycle of copying video tutorials without ever building independent projects. DevTrackAcademy bridges the gap between learning syntax and becoming a software engineer.
                </p>
                <div className="space-y-3 font-sans font-semibold text-xs sm:text-sm text-deep-navy">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>Real-world industrial tech stacks (Next.js, Node.js, AI, Docker, Redis)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>Live mentor code reviews and feedback loops</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>Verified GitHub portfolio deliverables for recruiters</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Box (Grid span 5) */}
            <div className="lg:col-span-5 bg-primary text-white border-4 border-deep-navy rounded-[36px] p-8 md:p-10 shadow-[8px_8px_0px_0px_#1B1F3B] flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFF8F0_1.5px,transparent_1.5px)] bg-[size:16px_16px] pointer-events-none" />

              <div>
                <div className="bg-white/10 border-2 border-white/20 p-3 rounded-2xl w-fit shadow-[2px_2px_0px_0px_#1B1F3B] mb-6">
                  <ShieldCheck className="w-8 h-8 text-mint" />
                </div>
                <h3 className="font-black text-2xl sm:text-3xl text-white mb-4 tracking-tight">
                  The DevTrack Standard
                </h3>
                <p className="font-sans font-semibold text-sm text-white/90 leading-relaxed mb-6">
                  Every curriculum on our platform is authored by active software developers. We continuously refine our workshops and modules based on modern industry standards.
                </p>
              </div>

              <div className="bg-deep-navy/40 border border-white/15 p-4 rounded-2xl font-mono text-xs text-mint">
                <p>✓ 100% Practical project builds</p>
                <p>✓ Live mentor support</p>
                <p>✓ AI interactive code environments</p>
              </div>
            </div>
          </div>

          {/* Philosophy Section */}
          <About />

          {/* Platform Overview */}
          <div className="mt-12">
            <PlatformOverview />
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
