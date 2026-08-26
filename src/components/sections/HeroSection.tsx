import React from 'react';
import { GlassCard } from '../GlassCard';
import { TelemetryBadge } from '../TelemetryBadge';
import { ImagePlaceholder } from '../ImagePlaceholder';
import { portfolioData } from '@/data/portfolio';
import { IconChevronRight, IconRadio, IconGauge, IconSparkles, IconBolt } from '@tabler/icons-react';

export function HeroSection() {
  const { profile } = portfolioData;

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-carbon-mesh">
      {/* Background Scuderia Red Gradient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#E8002D]/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Status Pill */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <TelemetryBadge label="[SEC_01 // PIT TELEMETRY]" variant="rosso" pulse />
          <TelemetryBadge label={profile.statusDetails} variant="modena" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Headline & Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="font-mono text-xs text-[#FFF200] tracking-widest uppercase font-semibold flex items-center gap-2">
                <IconSparkles className="w-4 h-4 text-[#FFF200]" stroke={1.5} />
                <span>ACCELERATED FRONTEND ARCHITECTURE</span>
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                {profile.role.split("Engineer")[0]}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8002D] via-[#FF3355] to-[#FFF200]">
                  Engineer
                </span>
              </h1>
            </div>

            <p className="text-lg text-zinc-300 font-sans leading-relaxed max-w-2xl">
              {profile.tagline}
            </p>

            <p className="text-sm font-mono text-zinc-400 leading-relaxed border-l-2 border-[#E8002D]/60 pl-4 py-1">
              {profile.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-[#E8002D] hover:bg-[#D40026] text-white font-mono text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-lg shadow-[#E8002D]/25 hover:shadow-[#E8002D]/40"
              >
                <IconGauge className="w-4 h-4" stroke={1.5} />
                <span>REVIEW TELEMETRY (PROJECTS)</span>
                <IconChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" stroke={1.5} />
              </a>

              <a
                href="#radio-check"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 border border-white/15 font-mono text-xs font-bold tracking-wider uppercase transition-all duration-300 backdrop-blur-md hover:border-[#FFF200]/50 hover:text-[#FFF200]"
              >
                <IconRadio className="w-4 h-4 text-[#FFF200]" stroke={1.5} />
                <span>RADIO PIT WALL (CONTACT)</span>
              </a>
            </div>

            {/* Telemetry Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10">
              {profile.telemetryStats.map((stat, idx) => (
                <div key={idx} className="bg-zinc-900/40 p-3.5 rounded-lg border border-white/5 space-y-1">
                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                    <span>{stat.label}</span>
                    <span className={stat.status === 'PEAK' ? 'text-[#E8002D]' : 'text-emerald-400'}>
                      {stat.unit}
                    </span>
                  </div>
                  <div className="text-2xl font-extrabold text-white font-mono tracking-tight">
                    {stat.value}
                  </div>
                  <p className="text-[10px] font-mono text-[#FFF200] font-medium">
                    {stat.change}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Dedicated Profile Avatar Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <GlassCard className="w-full p-8 border-[#E8002D]/30">
              <ImagePlaceholder
                type="avatar"
                label={`${profile.name.toUpperCase()} // HEADSHOT`}
                sublabel={profile.handle}
              />

              {/* Telemetry Quick Info Box under Portrait */}
              <div className="mt-6 p-4 rounded-lg bg-zinc-950/80 border border-white/10 space-y-2 font-mono text-xs">
                <div className="flex justify-between items-center text-zinc-400">
                  <span>LOCATION:</span>
                  <span className="text-zinc-200 font-semibold">{profile.location}</span>
                </div>
                <div className="flex justify-between items-center text-zinc-400">
                  <span>PIT WALL STATUS:</span>
                  <span className="text-[#E8002D] font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#E8002D] pulse-rosso" />
                    ONLINE & SYNCED
                  </span>
                </div>
                <div className="flex justify-between items-center text-zinc-400">
                  <span>STACK ACCELERATION:</span>
                  <span className="text-[#FFF200] font-semibold">100% LLM ENHANCED</span>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
