import React from 'react';
import { GlassCard } from '../GlassCard';
import { SectionHeader } from '../SectionHeader';
import { TelemetryBadge } from '../TelemetryBadge';
import { ImagePlaceholder } from '../ImagePlaceholder';
import { portfolioData } from '@/data/portfolio';
import { IconMapPin, IconCheck, IconArrowUpRight, IconDeviceTv, IconSteeringWheel } from '@tabler/icons-react';

export function WorkExperience() {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-24 bg-carbon-mesh relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          sectionNumber="05"
          title="Career Progression at Invotyx"
          subtitle="From 2020 foundation to ~3 years Roku development and May 2026 transition to React web engineering."
          badgeLabel="INVOTYX_CAREER"
          badgeVariant="green"
        />

        {/* Progression Overview Strip */}
        <div className="mb-12 p-6 rounded-xl bg-zinc-950/90 border border-white/10 space-y-3 font-mono text-xs">
          <span className="text-[#FFF200] font-bold uppercase tracking-widest block">
            INVOTYX CAREER TRAJECTORY & TRANSITION TIMELINE:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-center">
            <div className="p-2.5 rounded bg-white/5 border border-white/10">
              <span className="block text-[10px] text-zinc-500">2020</span>
              <span className="text-white font-bold text-xs">FOUNDATION</span>
            </div>
            <div className="p-2.5 rounded bg-white/5 border border-white/10">
              <span className="block text-[10px] text-zinc-500">2022–2023</span>
              <span className="text-white font-bold text-xs">WEB INTERN</span>
            </div>
            <div className="p-2.5 rounded bg-purple-950/40 border border-purple-500/30">
              <span className="block text-[10px] text-purple-300">2023–2024</span>
              <span className="text-purple-200 font-bold text-xs">ROKU PART-TIME</span>
            </div>
            <div className="p-2.5 rounded bg-purple-950/60 border border-purple-500/50">
              <span className="block text-[10px] text-purple-300">2024–MAY 2026</span>
              <span className="text-purple-200 font-bold text-xs">ROKU FULL-TIME</span>
            </div>
            <div className="p-2.5 rounded bg-[#E8002D]/20 border border-[#E8002D]/40">
              <span className="block text-[10px] text-[#E8002D]">MAY 2026–PRES</span>
              <span className="text-white font-bold text-xs">JUNIOR FRONTEND</span>
            </div>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-[#E8002D]/40 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={exp.id} className="relative group">
              {/* Marker Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-zinc-950 border-2 border-[#E8002D] flex items-center justify-center group-hover:scale-125 group-hover:bg-[#E8002D] transition-all duration-300 shadow-md shadow-[#E8002D]/40">
                <span className="w-2 h-2 rounded-full bg-[#FFF200]" />
              </div>

              {/* Experience Card */}
              <GlassCard className="p-8 space-y-6">
                {/* Header */}
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

                {/* Description */}
                <p className="text-sm font-sans text-zinc-300 leading-relaxed">
                  {exp.description}
                </p>

                {/* Transition Note (if present) */}
                {exp.transitionNote && (
                  <div className="p-3.5 rounded-lg bg-[#FFF200]/10 border border-[#FFF200]/30 text-xs font-sans text-[#FFF200] flex items-start gap-2">
                    <IconArrowUpRight className="w-4 h-4 shrink-0 mt-0.5" stroke={2} />
                    <span><strong>Career Transition: </strong>{exp.transitionNote}</span>
                  </div>
                )}

                {/* Milestones */}
                <div className="space-y-3 pt-2">
                  <h4 className="font-mono text-xs font-bold text-zinc-300 uppercase tracking-widest">
                    KEY DELIVERABLES & RESPONSIBILITIES:
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
                      className="px-2.5 py-1 rounded bg-zinc-950 text-[11px] font-mono text-zinc-300 border border-white/10 uppercase"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </div>
          ))}
        </div>

        {/* F1 Visual Asset Motif 3 (Track / Racing Car Decorative Image) */}
        <div className="mt-16">
          <ImagePlaceholder
            type="project"
            src={portfolioData.profile.f1Visuals.trackNight}
            alt="Bahrain Night Circuit F1 Track"
            label="BAHRAIN NIGHT CIRCUIT // F1 RACING TRACK"
            sublabel="MOTORSPORT VISUAL MOTIF 3"
          />
        </div>
      </div>
    </section>
  );
}
