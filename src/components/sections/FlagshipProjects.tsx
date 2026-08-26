"use client";

import React, { useState } from 'react';
import { GlassCard } from '../GlassCard';
import { SectionHeader } from '../SectionHeader';
import { TelemetryBadge } from '../TelemetryBadge';
import { ImagePlaceholder } from '../ImagePlaceholder';
import { portfolioData, Project } from '@/data/portfolio';
import {
  IconExternalLink,
  IconBrandGithub,
  IconChevronDown,
  IconChevronUp,
  IconSparkles,
  IconAward,
  IconTerminal2
} from '@tabler/icons-react';

export function FlagshipProjects() {
  const { projects } = portfolioData;
  const [legacyVaultOpen, setLegacyVaultOpen] = useState(false);

  const flagshipProjects = projects.filter(p => p.category === 'flagship' || p.category === 'company');
  const legacyProjects = projects.filter(p => p.category === 'legacy');

  return (
    <section id="projects" className="py-24 bg-carbon-mesh relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          sectionNumber="03"
          title="Flagship Telemetry Case Studies"
          subtitle="Featured enterprise web architectures & high-velocity UI builds."
          badgeLabel="LAP_RECORDS"
          badgeVariant="rosso"
        />

        {/* Flagship & Enterprise Projects Grid */}
        <div className="space-y-12">
          {flagshipProjects.map((project) => (
            <GlassCard key={project.id} className="p-8 border-[#E8002D]/20 hover:border-[#E8002D]/50">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Side: Project Metadata & Details */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Badges */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider bg-[#E8002D] text-white flex items-center gap-1.5 shadow-md shadow-[#E8002D]/30">
                      <IconAward className="w-3.5 h-3.5" stroke={1.5} />
                      {project.category === 'flagship' ? 'FLAGSHIP ENTERPRISE' : 'COMPANY PLATFORM'}
                    </span>
                    <TelemetryBadge label={project.ownership} variant="modena" />
                    <span className="text-xs font-mono text-zinc-400">{project.role}</span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-3xl font-extrabold text-white font-sans tracking-tight mb-3">
                      {project.title}
                    </h3>
                    <p className="text-sm text-zinc-300 font-sans leading-relaxed">
                      {project.description}
                    </p>
                    {project.longDescription && (
                      <p className="text-xs font-mono text-zinc-400 leading-relaxed mt-2 border-l-2 border-[#E8002D]/50 pl-3">
                        {project.longDescription}
                      </p>
                    )}
                  </div>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-zinc-950/80 border border-white/10">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center font-mono">
                        <span className="block text-[10px] text-zinc-500 uppercase">{metric.label}</span>
                        <span className="text-base font-bold text-[#FFF200]">{metric.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Telemetry Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.telemetryTags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded bg-white/5 text-[10px] font-mono text-zinc-300 border border-white/10 uppercase tracking-wider"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4 pt-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#E8002D] hover:bg-[#D40026] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-[#E8002D]/20"
                      >
                        <span>LIVE TELEMETRY DEMO</span>
                        <IconExternalLink className="w-4 h-4" stroke={1.5} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white font-mono text-xs font-bold uppercase tracking-wider border border-white/10 transition-all"
                      >
                        <IconBrandGithub className="w-4 h-4 text-zinc-400" stroke={1.5} />
                        <span>SOURCE CODE</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Side: Structured Thumbnail Placeholder */}
                <div className="lg:col-span-5">
                  <ImagePlaceholder
                    type="project"
                    label={project.thumbnailLabel}
                    sublabel={`ROLE: ${project.role.toUpperCase()}`}
                  />
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Collapsible Secondary Showcase: Legacy Era Vault (Pre-AI React Builds) */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <button
            onClick={() => setLegacyVaultOpen(!legacyVaultOpen)}
            className="w-full glass-card p-5 flex items-center justify-between group hover:border-[#FFF200]/40 transition-all text-left"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#FFF200]/10 border border-[#FFF200]/30 flex items-center justify-center text-[#FFF200]">
                <IconTerminal2 className="w-5 h-5" stroke={1.5} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white font-mono flex items-center gap-3">
                  <span>LEGACY ERA VAULT (PRE-AI REACT BUILDS)</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-white/10 text-zinc-300 font-mono">
                    {legacyProjects.length} ARCHIVED
                  </span>
                </h4>
                <p className="text-xs font-mono text-zinc-400">
                  Foundational React applications built from scratch prior to LLM acceleration.
                </p>
              </div>
            </div>

            <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300 group-hover:text-[#FFF200]">
              {legacyVaultOpen ? <IconChevronUp className="w-5 h-5" /> : <IconChevronDown className="w-5 h-5" />}
            </div>
          </button>

          {/* Collapsible Content */}
          {legacyVaultOpen && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 animate-in fade-in duration-300">
              {legacyProjects.map((proj) => (
                <GlassCard key={proj.id} className="space-y-4 border-white/10 hover:border-[#FFF200]/30">
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="text-lg font-bold text-white font-sans">{proj.title}</h5>
                      <span className="text-xs font-mono text-zinc-500">{proj.ownership}</span>
                    </div>
                    <TelemetryBadge label="PRE-AI ERA" variant="neutral" />
                  </div>

                  <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {proj.telemetryTags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-white/5 text-[9px] font-mono text-zinc-400 border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                    {proj.liveUrl && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-mono text-[#FFF200] hover:underline flex items-center gap-1"
                      >
                        <span>VIEW ARCHIVE</span>
                        <IconExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-mono text-zinc-400 hover:text-white flex items-center gap-1"
                      >
                        <IconBrandGithub className="w-3.5 h-3.5" />
                        <span>REPO</span>
                      </a>
                    )}
                  </div>
                </GlassCard>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
