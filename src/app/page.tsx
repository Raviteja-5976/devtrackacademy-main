import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
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

export default function Home() {
  return (
    <>
      {/* Utility Utilities */}
      <LoadingScreen />
      <ScrollProgress />
      
      {/* Header Layer */}
      <Navbar />

      {/* Main Structural Blocks */}
      <main className="flex-grow">
        <Hero />
        <Stats />
        <About />
        <Ecosystem />
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
      <Footer />
    </>
  );
}
