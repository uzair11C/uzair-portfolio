import React from 'react';
import { GlassCard } from '../GlassCard';
import { SectionHeader } from '../SectionHeader';
import { portfolioData } from '@/data/portfolio';
import { IconSparkles, IconHeartHandshake, IconDeviceTv, IconCode, IconCheck } from '@tabler/icons-react';

export function AboutMeSection() {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-24 bg-zinc-950/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          sectionNumber="01"
          title="About Me & Engineering Journey"
          subtitle="Building user interfaces with speed, reusability, and user-centric UX advocacy."
          badgeLabel="DEVELOPER_PROFILE"
          badgeVariant="modena"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Authentic Invotyx Story */}
          <div className="lg:col-span-7 space-y-6">
            <GlassCard className="p-8 space-y-6 border-white/10">
              <h3 className="text-2xl font-bold text-white font-sans tracking-tight">
                {about.headline}
              </h3>

              <div className="space-y-4 text-zinc-300 font-sans text-sm leading-relaxed">
                {about.paragraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* UX Advocacy & Philosophy Banner */}
              <div className="p-5 rounded-xl bg-[#E8002D]/10 border border-[#E8002D]/30 space-y-2">
                <div className="flex items-center gap-2 text-[#E8002D] font-mono text-xs font-bold uppercase">
                  <IconHeartHandshake className="w-4 h-4" />
                  <span>UI / UX ADVOCACY PHILOSOPHY</span>
                </div>
                <p className="text-xs text-zinc-200 font-sans leading-relaxed">
                  {about.uxPhilosophy}
                </p>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: Invotyx Journey Timeline Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest px-1">
              INVOTYX CAREER PROGRESSION
            </h4>

            {about.journeyTimeline.map((item, idx) => (
              <GlassCard key={idx} className="p-5 space-y-1.5 border-white/10 hover:border-[#FFF200]/30">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#FFF200]">
                    [{item.year}]
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase">INVOTYX</span>
                </div>
                <h5 className="text-sm font-bold text-white font-sans">
                  {item.title}
                </h5>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  {item.detail}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
