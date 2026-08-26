"use client";

import React, { useState } from 'react';
import { GlassCard } from '../GlassCard';
import { SectionHeader } from '../SectionHeader';
import { TelemetryBadge } from '../TelemetryBadge';
import { portfolioData, Skill } from '@/data/portfolio';
import {
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTailwind,
  IconComponents,
  IconCpu,
  IconSparkles,
  IconActivity,
  IconApi,
  IconDatabase,
  IconGauge,
  IconEngine,
  IconFlame
} from '@tabler/icons-react';

const iconMap: Record<string, React.ReactNode> = {
  IconBrandNextjs: <IconBrandNextjs className="w-6 h-6 text-[#E8002D]" stroke={1.5} />,
  IconBrandReact: <IconBrandReact className="w-6 h-6 text-sky-400" stroke={1.5} />,
  IconBrandTailwind: <IconBrandTailwind className="w-6 h-6 text-teal-400" stroke={1.5} />,
  IconComponents: <IconComponents className="w-6 h-6 text-[#FFF200]" stroke={1.5} />,
  IconCpu: <IconCpu className="w-6 h-6 text-[#E8002D]" stroke={1.5} />,
  IconSparkles: <IconSparkles className="w-6 h-6 text-[#FFF200]" stroke={1.5} />,
  IconActivity: <IconActivity className="w-6 h-6 text-emerald-400" stroke={1.5} />,
  IconApi: <IconApi className="w-6 h-6 text-indigo-400" stroke={1.5} />,
  IconDatabase: <IconDatabase className="w-6 h-6 text-amber-400" stroke={1.5} />,
  IconGauge: <IconGauge className="w-6 h-6 text-[#E8002D]" stroke={1.5} />
};

export function TechStackBento() {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', 'Core UI', 'AI Acceleration', 'Backend & Architecture'];

  const filteredSkills = activeCategory === 'ALL'
    ? skills
    : skills.filter(s => s.category === activeCategory);

  return (
    <section id="cockpit-stack" className="py-24 bg-zinc-950/60 relative">
      {/* Background Accent Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          sectionNumber="02"
          title="Cockpit Tech Stack & Telemetry"
          subtitle="Categorized engineering capabilities featuring real-time tachometer RPM utilization bars."
          badgeLabel="COCKPIT_READY"
          badgeVariant="modena"
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg font-mono text-xs tracking-wider uppercase transition-all duration-200 border ${
                activeCategory === cat
                  ? 'bg-[#E8002D] text-white border-[#E8002D] shadow-lg shadow-[#E8002D]/20 font-bold'
                  : 'bg-zinc-900/60 text-zinc-400 border-white/10 hover:text-white hover:border-white/20'
              }`}
            >
              {cat === 'ALL' ? '[ALL TELEMETRY]' : cat}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <GlassCard key={skill.id} className="group relative space-y-4">
              {/* Top Card Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-white/10 flex items-center justify-center group-hover:border-[#E8002D]/50 transition-colors">
                    {iconMap[skill.iconName] || <IconEngine className="w-6 h-6 text-zinc-300" stroke={1.5} />}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-sans group-hover:text-[#FFF200] transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                      {skill.category}
                    </span>
                  </div>
                </div>

                <TelemetryBadge
                  label={`${skill.rpm.toLocaleString()} RPM`}
                  variant={skill.proficiency >= 95 ? 'rosso' : 'neutral'}
                />
              </div>

              {/* Description */}
              <p className="text-xs text-zinc-400 font-sans leading-relaxed min-h-[36px]">
                {skill.description}
              </p>

              {/* Tachometer Utilization Bar */}
              <div className="space-y-1.5 pt-2 border-t border-white/5">
                <div className="flex justify-between items-center text-[10px] font-mono">
                  <span className="text-zinc-500 flex items-center gap-1">
                    <IconFlame className="w-3 h-3 text-[#E8002D]" />
                    TACHOMETER UTILIZATION
                  </span>
                  <span className="text-[#FFF200] font-bold">{skill.proficiency}%</span>
                </div>

                <div className="w-full h-2 rounded-md bg-zinc-950 border border-white/10 p-0.5 relative overflow-hidden">
                  <div
                    className="h-full rounded-sm bg-gradient-to-r from-emerald-500 via-[#FFF200] to-[#E8002D] transition-all duration-700 ease-out group-hover:brightness-125"
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
