import React from 'react';
import { GlassCard } from '../GlassCard';
import { TelemetryBadge } from '../TelemetryBadge';
import { ImagePlaceholder } from '../ImagePlaceholder';
import { portfolioData } from '@/data/portfolio';
import {
  IconChevronDown,
  IconArrowRight,
  IconDownload,
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
  IconSteeringWheel,
  IconCode,
  IconDeviceTv
} from '@tabler/icons-react';

export function HeroSection() {
  const { profile } = portfolioData;

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-carbon-mesh">
      {/* Subtle Cockpit Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#E8002D]/12 blur-[140px] rounded-full pointer-events-none" />

      {/* Decorative F1 Line Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* System Active Status Pill */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <TelemetryBadge label="DEVELOPER TELEMETRY" variant="rosso" />
          <TelemetryBadge label={profile.status} variant="green" pulse />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Identity, Title, Tagline & Transition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              {/* 1. Name */}
              <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-none font-sans">
                {profile.name}
              </h1>

              {/* 2. Job Title */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#E8002D] via-[#FF3355] to-[#FFF200] font-sans">
                  {profile.role}
                </span>
                <span className="px-2.5 py-1 rounded bg-[#E8002D]/10 border border-[#E8002D]/30 text-xs font-mono text-[#E8002D]">
                  REACT / NEXT.JS
                </span>
              </div>
            </div>

            {/* 3. Value Proposition Tagline */}
            <p className="text-lg sm:text-xl text-zinc-200 font-sans font-medium leading-relaxed max-w-2xl">
              {profile.tagline}
            </p>

            {/* 4. Supporting Bio & Transition Context */}
            <div className="space-y-3 max-w-xl">
              <p className="text-sm text-zinc-300 font-sans leading-relaxed border-l-2 border-[#E8002D]/60 pl-4 py-1">
                {profile.bio}
              </p>
              <div className="p-3 rounded-lg bg-[#FFF200]/10 border border-[#FFF200]/30 text-xs font-mono text-[#FFF200] flex items-center gap-2">
                <IconDeviceTv className="w-4 h-4 shrink-0 text-[#FFF200]" />
                <span>BACKGROUND: ~3 Years Professional Roku/BrightScript Dev → React/Next.js Transition</span>
              </div>
            </div>

            {/* 5. CTAs & Social Links */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#E8002D] hover:bg-[#D40026] text-white font-mono text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-lg shadow-[#E8002D]/20 hover:shadow-[#E8002D]/40"
              >
                <span>VIEW PROJECTS</span>
                <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" stroke={2} />
              </a>

              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 border border-white/15 font-mono text-xs font-bold tracking-wider uppercase transition-all duration-300 backdrop-blur-md hover:border-[#FFF200]/50 hover:text-[#FFF200]"
              >
                <IconDownload className="w-4 h-4 text-[#FFF200]" stroke={1.5} />
                <span>DOWNLOAD RESUME</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 border border-white/10 font-mono text-xs font-bold tracking-wider uppercase transition-all"
              >
                <IconMail className="w-4 h-4 text-zinc-400" stroke={1.5} />
                <span>GET IN TOUCH</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-zinc-900/80 border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition-all"
                aria-label="GitHub Profile"
              >
                <IconBrandGithub className="w-5 h-5" stroke={1.5} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-zinc-900/80 border border-white/10 text-zinc-400 hover:text-sky-400 hover:border-sky-400/30 transition-all"
                aria-label="LinkedIn Profile"
              >
                <IconBrandLinkedin className="w-5 h-5" stroke={1.5} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="p-2.5 rounded-lg bg-zinc-900/80 border border-white/10 text-zinc-400 hover:text-[#E8002D] hover:border-[#E8002D]/30 transition-all"
                aria-label="Email Contact"
              >
                <IconMail className="w-5 h-5" stroke={1.5} />
              </a>
            </div>

            {/* 6. Real Portfolio Telemetry Stats Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10">
              {profile.telemetryStats.map((stat, idx) => (
                <div key={idx} className="bg-zinc-950/70 p-3.5 rounded-lg border border-white/10 space-y-1">
                  <span className="block text-[10px] font-mono text-zinc-400 tracking-wider">
                    {stat.label}
                  </span>
                  <div className="text-base font-bold text-white font-sans">
                    {stat.value}
                  </div>
                  {stat.subtext && (
                    <p className="text-[10px] font-mono text-[#FFF200]">
                      {stat.subtext}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: User Avatar Photo & F1 Hero Car Visual Card */}
          <div className="lg:col-span-5 space-y-6 flex flex-col items-center">
            <GlassCard className="w-full p-6 sm:p-8 border-[#E8002D]/30">
              <ImagePlaceholder
                type="avatar"
                src={profile.avatarUrl}
                alt={profile.name}
                label={`${profile.name.toUpperCase()} // HEADSHOT`}
                sublabel="JUNIOR FRONTEND ENGINEER"
              />

              {/* Cockpit HUD Detail Box */}
              <div className="mt-6 p-4 rounded-lg bg-zinc-950/90 border border-white/10 space-y-2 font-mono text-xs">
                <div className="flex justify-between items-center text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <IconSteeringWheel className="w-3.5 h-3.5 text-[#E8002D]" />
                    LOCATION:
                  </span>
                  <span className="text-zinc-200 font-medium">{profile.location}</span>
                </div>
                <div className="flex justify-between items-center text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <IconCode className="w-3.5 h-3.5 text-[#FFF200]" />
                    ORGANIZATION:
                  </span>
                  <span className="text-[#FFF200] font-medium">Invotyx</span>
                </div>
              </div>
            </GlassCard>

            {/* F1 Hero Car Visual Motif Card */}
            <div className="w-full">
              <ImagePlaceholder
                type="project"
                src={profile.f1Visuals.heroCar}
                alt="Ferrari F1 Formula One World Championship"
                label="FERRARI F1 CAR // WORLD CHAMPIONSHIP"
                sublabel="MOTORSPORT VISUAL MOTIF 1"
              />
            </div>
          </div>
        </div>

        {/* Racing Telemetry Chevron Scroll Indicator */}
        <div className="flex justify-center pt-16">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-zinc-500 hover:text-[#E8002D] transition-colors group"
            aria-label="Scroll to About section"
          >
            <span className="font-mono text-[10px] tracking-widest uppercase text-zinc-500 group-hover:text-zinc-300 transition-colors">
              SCROLL TELEMETRY
            </span>
            <div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:border-[#E8002D]/50 transition-colors">
              <IconChevronDown className="w-4 h-4 text-[#E8002D] animate-bounce" stroke={2} />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
