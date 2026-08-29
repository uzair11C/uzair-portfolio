import { TelemetryNavbar } from '@/components/sections/TelemetryNavbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutMeSection } from '@/components/sections/AboutMeSection';
import { TechStackBento } from '@/components/sections/TechStackBento';
import { AiWorkflowSection } from '@/components/sections/AiWorkflowSection';
import { FlagshipProjects } from '@/components/sections/FlagshipProjects';
import { WorkExperience } from '@/components/sections/WorkExperience';
import { RadioCheck } from '@/components/sections/RadioCheck';
import { Footer } from '@/components/sections/Footer';
import { ScrollRacingLine } from '@/components/ScrollRacingLine';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0D11] text-[#F3F3F6] selection:bg-[#E8002D] selection:text-white relative">
      {/* Scroll-Driven F1 Racing Line Animation */}
      <ScrollRacingLine />

      {/* Top Navbar */}
      <TelemetryNavbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Me & Engineering Journey */}
      <AboutMeSection />

      {/* Technical Capabilities & Skills Bento Grid */}
      <TechStackBento />

      {/* AI-Assisted Engineering Workflow Section */}
      <AiWorkflowSection />

      {/* Flagship Web Projects & Roku App Portfolio */}
      <FlagshipProjects />

      {/* Invotyx Career Progression & Timeline */}
      <WorkExperience />

      {/* Radio Check / Contact & Socials */}
      <RadioCheck />

      {/* Telemetry Footer */}
      <Footer />
    </main>
  );
}
