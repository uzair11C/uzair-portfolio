"use client";

import React, { useState } from 'react';
import { GlassCard } from '../GlassCard';
import { SectionHeader } from '../SectionHeader';
import { portfolioData, Skill } from '@/data/portfolio';
import {
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandJavascript,
  IconBrandTypescript,
  IconComponents,
  IconCpu,
  IconSparkles,
  IconActivity,
  IconDeviceTv,
  IconCode,
  IconLayoutGrid,
  IconLayout,
  IconHeartHandshake,
  IconApi
} from '@tabler/icons-react';

const iconMap: Record<string, React.ReactNode> = {
  IconBrandHtml5: <IconBrandHtml5 className="w-6 h-6 text-orange-500" stroke={1.5} />,
  IconBrandCss3: <IconBrandCss3 className="w-6 h-6 text-blue-500" stroke={1.5} />,
  IconBrandJavascript: <IconBrandJavascript className="w-6 h-6 text-amber-300" stroke={1.5} />,
  IconBrandTypescript: <IconBrandTypescript className="w-6 h-6 text-sky-400" stroke={1.5} />,
  IconBrandNextjs: <IconBrandNextjs className="w-6 h-6 text-[#E8002D]" stroke={1.5} />,
  IconBrandReact: <IconBrandReact className="w-6 h-6 text-sky-400" stroke={1.5} />,
  IconBrandTailwind: <IconBrandTailwind className="w-6 h-6 text-teal-400" stroke={1.5} />,
  IconComponents: <IconComponents className="w-6 h-6 text-[#FFF200]" stroke={1.5} />,
  IconLayout: <IconLayout className="w-6 h-6 text-[#E8002D]" stroke={1.5} />,
  IconHeartHandshake: <IconHeartHandshake className="w-6 h-6 text-rose-400" stroke={1.5} />,
  IconDeviceTv: <IconDeviceTv className="w-6 h-6 text-purple-400" stroke={1.5} />,
  IconCode: <IconCode className="w-6 h-6 text-amber-400" stroke={1.5} />,
  IconLayoutGrid: <IconLayoutGrid className="w-6 h-6 text-indigo-400" stroke={1.5} />,
  IconCpu: <IconCpu className="w-6 h-6 text-[#E8002D]" stroke={1.5} />,
  IconSparkles: <IconSparkles className="w-6 h-6 text-[#FFF200]" stroke={1.5} />,
  IconActivity: <IconActivity className="w-6 h-6 text-emerald-400" stroke={1.5} />,
  IconApi: <IconApi className="w-6 h-6 text-sky-300" stroke={1.5} />
};

export function TechStackBento() {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', 'CORE WEB', 'FRONTEND ENGINEERING', 'UI / UX', 'ROKU DEVELOPMENT', 'AI-ASSISTED ENGINEERING'];

  const filteredSkills = activeCategory === 'ALL'
    ? skills
    : skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 bg-carbon-mesh relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          sectionNumber="02"
          title="Technical Capabilities & Skill Taxonomy"
          subtitle="Core web fundamentals, React frontend engineering, Roku TV development (~3 Yrs), and AI workflows."
          badgeLabel="SKILLS_TAXONOMY"
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
                  : 'bg-zinc-900/70 text-zinc-400 border-white/10 hover:text-white hover:border-white/20'
              }`}
            >
              {cat === 'ALL' ? 'ALL SKILLS' : cat}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <GlassCard
              key={skill.id}
              className={`group relative space-y-4 border-white/10 hover:border-[#E8002D]/40 ${
                skill.highlight ? 'bg-zinc-900/80 border-[#FFF200]/20' : ''
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-white/10 flex items-center justify-center group-hover:border-[#E8002D]/50 transition-colors shrink-0">
                    {iconMap[skill.iconName] || <IconCode className="w-6 h-6 text-zinc-300" stroke={1.5} />}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-sans group-hover:text-[#FFF200] transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                      {skill.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                {skill.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
