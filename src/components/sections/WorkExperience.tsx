import React from 'react';
import { GlassCard } from '../GlassCard';
import { SectionHeader } from '../SectionHeader';
import { TelemetryBadge } from '../TelemetryBadge';
import { portfolioData } from '@/data/portfolio';
import { IconFlag, IconMapPin, IconCalendar, IconCheck } from '@tabler/icons-react';

export function WorkExperience() {
  const { experiences } = portfolioData;

  return (
    <section id="race-history" className="py-24 bg-zinc-950/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          sectionNumber="04"
          title="Race History & Pit Stop Stints"
          subtitle="Engineering milestones, stint timelines, and UI ownership records."
          badgeLabel="RACE_STINTS"
          badgeVariant="green"
        />

        {/* Vertical Timeline Container */}
        <div className="relative border-l-2 border-[#E8002D]/40 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={exp.id} className="relative group">
              {/* Pit Stop Marker Indicator on Line */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-zinc-950 border-2 border-[#E8002D] flex items-center justify-center group-hover:scale-125 group-hover:bg-[#E8002D] transition-all duration-300 shadow-md shadow-[#E8002D]/40">
                <span className="w-2 h-2 rounded-full bg-[#FFF200]" />
              </div>

              {/* Glass Stint Card */}
              <GlassCard className="p-8 space-y-6">
                {/* Header Info */}
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <span className="font-mono text-xs font-bold text-[#FFF200] tracking-wider uppercase">
                        {exp.stintType}
                      </span>
                      <TelemetryBadge label={exp.stintPeriod} variant={idx === 0 ? 'rosso' : 'neutral'} />
                    </div>

                    <h3 className="text-2xl font-extrabold text-white font-sans tracking-tight">
                      {exp.role}
                    </h3>
                    <p className="text-base font-mono text-[#E8002D] font-semibold">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 font-mono text-xs text-zinc-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                    <IconMapPin className="w-4 h-4 text-zinc-400" stroke={1.5} />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Role Description */}
                <p className="text-sm font-sans text-zinc-300 leading-relaxed">
                  {exp.description}
                </p>

                {/* Telemetry Milestones List */}
                <div className="space-y-3 pt-2">
                  <h4 className="font-mono text-xs font-bold text-zinc-300 uppercase tracking-widest flex items-center gap-2">
                    <IconFlag className="w-4 h-4 text-[#E8002D]" stroke={1.5} />
                    <span>TELEMETRY MILESTONES & ACHIEVEMENTS:</span>
                  </h4>

                  <ul className="space-y-2">
                    {exp.telemetryMilestones.map((milestone, mIdx) => (
                      <li key={mIdx} className="flex items-start gap-3 text-xs font-sans text-zinc-300">
                        <span className="mt-0.5 w-4 h-4 rounded bg-[#E8002D]/15 border border-[#E8002D]/40 flex items-center justify-center shrink-0 text-[#E8002D]">
                          <IconCheck className="w-3 h-3" stroke={2} />
                        </span>
                        <span>{milestone}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded bg-zinc-950 text-[10px] font-mono text-zinc-400 border border-white/10 uppercase"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
