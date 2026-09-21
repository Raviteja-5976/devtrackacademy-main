'use client';

import { useState } from 'react';
import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PlatformOverview from "@/components/PlatformOverview";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Ecosystem from "@/components/Ecosystem";
import WhyPracticalWins from "@/components/WhyPracticalWins";
import LearningJourney from "@/components/LearningJourney";
import Specializations from "@/components/Specializations";
import Community from "@/components/Community";
import UpcomingPlatforms from "@/components/UpcomingPlatforms";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ComingSoonModal from "@/components/ComingSoonModal";

export default function Home() {
  const [modalType, setModalType] = useState<'courses' | null>(null);

  const handleOpenModal = (type: 'courses') => {
    setModalType(type);
  };

  const handleCloseModal = () => {
    setModalType(null);
  };

  return (
    <>
      {/* Utility Utilities */}
      <LoadingScreen />
      <ScrollProgress />
      
      {/* Header Layer */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Main Structural Blocks */}
      <main className="flex-grow">
        <Hero />
        <PlatformOverview onOpenModal={handleOpenModal} />
        <Stats />
        <Ecosystem onOpenModal={handleOpenModal} />
        <About />
        <WhyPracticalWins />
        <LearningJourney />
        <Specializations />
        <Community />
        <UpcomingPlatforms />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>

      {/* Footer Block */}
      <Footer onOpenModal={handleOpenModal} />

      {/* Coming Soon Modal for Self-Paced Courses */}
      <ComingSoonModal
        isOpen={modalType !== null}
        type={modalType}
        onClose={handleCloseModal}
      />
    </>
  );
}
