import { TelemetryNavbar } from '@/components/sections/TelemetryNavbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { TechStackBento } from '@/components/sections/TechStackBento';
import { FlagshipProjects } from '@/components/sections/FlagshipProjects';
import { WorkExperience } from '@/components/sections/WorkExperience';
import { RadioCheck } from '@/components/sections/RadioCheck';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0D11] text-[#F3F3F6] selection:bg-[#E8002D] selection:text-white relative">
      {/* Top Navbar */}
      <TelemetryNavbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Cockpit Tech Stack Bento Grid */}
      <TechStackBento />

      {/* Flagship Projects & Case Studies */}
      <FlagshipProjects />

      {/* Work Experience & Race Stints */}
      <WorkExperience />

      {/* Radio Check / Contact & Socials */}
      <RadioCheck />

      {/* Telemetry Footer */}
      <Footer />
    </main>
  );
}
