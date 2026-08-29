"use client";

import React, { useState } from 'react';
import { GlassCard } from '../GlassCard';
import { SectionHeader } from '../SectionHeader';
import { TelemetryBadge } from '../TelemetryBadge';
import { ImagePlaceholder } from '../ImagePlaceholder';
import { portfolioData } from '@/data/portfolio';
import {
  IconExternalLink,
  IconBrandGithub,
  IconChevronDown,
  IconChevronUp,
  IconAward,
  IconCheck,
  IconArchive,
  IconDeviceTv,
  IconCode
} from '@tabler/icons-react';

export function FlagshipProjects() {
  const { projects } = portfolioData;
  const [legacyVaultOpen, setLegacyVaultOpen] = useState(false);

  const flagshipProject = projects.find(p => p.category === 'flagship');
  const companyProjects = projects.filter(p => p.category === 'company');
  const rokuProjects = projects.filter(p => p.category === 'roku');
  const legacyProjects = projects.filter(p => p.category === 'legacy');

  return (
    <section id="projects" className="py-24 bg-zinc-950/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          sectionNumber="04"
          title="Featured Engineering Projects & Roku Portfolio"
          subtitle="Production web applications, flagship dashboards, Roku TV apps (~3 Yrs), and legacy React builds."
          badgeLabel="FEATURED_PROJECTS"
          badgeVariant="rosso"
        />

        {/* 01 — FLAGSHIP WEB PROJECT (neofulkrum) */}
        {flagshipProject && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded bg-[#E8002D] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-[#E8002D]/20">
                <IconAward className="w-4 h-4" />
                01 — FLAGSHIP WEB PROJECT
              </span>
              <TelemetryBadge label={flagshipProject.ownership} variant="modena" />
            </div>

            <GlassCard className="p-8 sm:p-10 border-[#E8002D]/40 space-y-8 bg-zinc-950/90">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Side: Case Details */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-black text-white font-sans tracking-tight mb-3">
                      {flagshipProject.title}
                    </h3>
                    <p className="text-sm font-mono text-[#E8002D] font-semibold">
                      ROLE: {flagshipProject.role.toUpperCase()} ({flagshipProject.ownership})
                    </p>
                  </div>

                  <p className="text-sm text-zinc-300 font-sans leading-relaxed">
                    {flagshipProject.overview || flagshipProject.description}
                  </p>

                  {/* Contributions */}
                  {flagshipProject.contributions && (
                    <div className="space-y-2.5 pt-2">
                      <h4 className="font-mono text-xs font-bold text-zinc-300 uppercase tracking-widest">
                        KEY ENGINEERING CONTRIBUTIONS:
                      </h4>
                      <ul className="space-y-2">
                        {flagshipProject.contributions.map((contribution, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 font-sans">
                            <span className="w-4 h-4 rounded bg-[#E8002D]/20 border border-[#E8002D]/40 flex items-center justify-center shrink-0 text-[#E8002D] mt-0.5">
                              <IconCheck className="w-3 h-3" stroke={2} />
                            </span>
                            <span>{contribution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="space-y-2">
                    <span className="block text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                      TECHNOLOGIES INVOLVED:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {flagshipProject.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-md bg-white/5 text-xs font-mono text-zinc-200 border border-white/10 uppercase"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-3">
                    {flagshipProject.liveUrl && (
                      <a
                        href={flagshipProject.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#E8002D] hover:bg-[#D40026] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-[#E8002D]/20"
                      >
                        <span>VIEW LIVE DEMO</span>
                        <IconExternalLink className="w-4 h-4" stroke={1.5} />
                      </a>
                    )}
                    {flagshipProject.githubUrl && (
                      <a
                        href={flagshipProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white font-mono text-xs font-bold uppercase tracking-wider border border-white/10 transition-all"
                      >
                        <IconBrandGithub className="w-4 h-4 text-zinc-400" stroke={1.5} />
                        <span>VIEW CODE REPO</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Side: Screenshot Slot Placeholder */}
                <div className="lg:col-span-5">
                  <ImagePlaceholder
                    type="project"
                    label={flagshipProject.thumbnailLabel}
                    sublabel="PROJECT SCREENSHOT SLOT"
                  />
                </div>
              </div>
            </GlassCard>
          </div>
        )}

        {/* 02 — COMPANY WEB PROJECT (vendorIQ) */}
        {companyProjects.length > 0 && (
          <div className="space-y-6 mb-16">
            <h4 className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest">
              02 — COMPANY WEB PROJECT (MAY 2026 TRANSITION)
            </h4>

            <div className="grid grid-cols-1 gap-8">
              {companyProjects.map((project) => (
                <GlassCard key={project.id} className="p-8 border-white/10 hover:border-[#FFF200]/30">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7 space-y-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <TelemetryBadge label={project.ownership} variant="modena" />
                        <span className="text-xs font-mono text-zinc-400">{project.role}</span>
                      </div>

                      <h4 className="text-2xl font-bold text-white font-sans">{project.title}</h4>
                      <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                        {project.overview || project.description}
                      </p>

                      {project.contributions && (
                        <ul className="space-y-1.5 pt-1">
                          {project.contributions.map((c, cIdx) => (
                            <li key={cIdx} className="flex items-start gap-2 text-xs text-zinc-300 font-sans">
                              <span className="text-[#FFF200] font-mono">•</span>
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="px-2.5 py-1 rounded bg-white/5 text-[11px] font-mono text-zinc-300 border border-white/10 uppercase">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-4 pt-3">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs font-mono text-[#FFF200] hover:underline flex items-center gap-1.5 font-bold"
                          >
                            <span>LIVE DEMO</span>
                            <IconExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs font-mono text-zinc-400 hover:text-white flex items-center gap-1.5"
                          >
                            <IconBrandGithub className="w-3.5 h-3.5" />
                            <span>CODE REPO</span>
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="lg:col-span-5">
                      <ImagePlaceholder
                        type="project"
                        label={project.thumbnailLabel}
                        sublabel="PROJECT SCREENSHOT SLOT"
                      />
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        )}

        {/* 03 — ROKU APPLICATION PORTFOLIO (~3 Years Professional Experience Showcase) */}
        <div className="space-y-6 mb-16">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h4 className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                <IconDeviceTv className="w-4 h-4 text-purple-400" />
                <span>03 — ROKU TV APPLICATION PORTFOLIO (~3 YEARS PROFESSIONAL EXPERIENCE)</span>
              </h4>
              <p className="text-xs text-zinc-400 font-sans mt-1">
                Full frontend Roku TV streaming apps, SceneGraph layouts, and BrightScript API integrations built at Invotyx.
              </p>
            </div>
            <TelemetryBadge label="MAJOR ROKU EXPERTISE" variant="rosso" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rokuProjects.map((project) => (
              <GlassCard key={project.id} className="p-6 space-y-4 border-purple-500/20 hover:border-purple-500/50">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="text-lg font-bold text-white font-sans flex items-center gap-2">
                      <span>{project.title}</span>
                    </h5>
                    <span className="text-xs font-mono text-purple-300">{project.ownership}</span>
                  </div>
                  <TelemetryBadge label="ROKU APP" variant="modena" />
                </div>

                <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                  {project.overview || project.description}
                </p>

                {project.contributions && (
                  <ul className="space-y-1 pt-1">
                    {project.contributions.map((c, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2 text-xs text-zinc-300 font-sans">
                        <span className="text-purple-400 font-mono">›</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-purple-950/40 text-[10px] font-mono text-purple-200 border border-purple-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>

          {/* F1 Visual Asset Motif 2 (Cockpit / Steering Wheel View Visual Motif) */}
          <div className="mt-8">
            <ImagePlaceholder
              type="project"
              src={portfolioData.profile.f1Visuals.cockpitView}
              alt="Ferrari F1 Cockpit Steering Wheel View"
              label="FERRARI F1 COCKPIT // STEERING WHEEL VIEW"
              sublabel="MOTORSPORT VISUAL MOTIF 2"
            />
          </div>
        </div>

        {/* 04 — LEGACY REACT PROJECTS (Collapsible Vault) */}
        <div className="pt-8 border-t border-white/10">
          <button
            onClick={() => setLegacyVaultOpen(!legacyVaultOpen)}
            className="w-full glass-card p-5 flex items-center justify-between group hover:border-[#FFF200]/40 transition-all text-left"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#FFF200]/10 border border-[#FFF200]/30 flex items-center justify-center text-[#FFF200]">
                <IconArchive className="w-5 h-5" stroke={1.5} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white font-mono flex items-center gap-3">
                  <span>04 — LEGACY REACT PROJECTS & FYP</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-white/10 text-zinc-300 font-mono">
                    {legacyProjects.length} PROJECTS
                  </span>
                </h4>
                <p className="text-xs font-mono text-zinc-400">
                  Early React applications, university final-year project modules (Smart Learn), and prototype builds.
                </p>
              </div>
            </div>

            <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300 group-hover:text-[#FFF200]">
              {legacyVaultOpen ? <IconChevronUp className="w-5 h-5" /> : <IconChevronDown className="w-5 h-5" />}
            </div>
          </button>

          {/* Collapsible Content */}
          {legacyVaultOpen && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {legacyProjects.map((proj) => (
                <GlassCard key={proj.id} className="p-6 space-y-4 border-white/10 hover:border-[#FFF200]/30">
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="text-lg font-bold text-white font-sans">{proj.title}</h5>
                      <span className="text-xs font-mono text-zinc-400">{proj.ownership}</span>
                    </div>
                    <TelemetryBadge label="LEGACY" variant="neutral" />
                  </div>

                  <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                    {proj.overview || proj.description}
                  </p>

                  {proj.contributions && (
                    <ul className="space-y-1 pt-1">
                      {proj.contributions.map((c, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2 text-xs text-zinc-300 font-sans">
                          <span className="text-[#FFF200] font-mono">•</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {proj.technologies.map((tech, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-zinc-400 border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-mono text-[#FFF200] hover:underline flex items-center gap-1 font-bold"
                      >
                        <IconBrandGithub className="w-3.5 h-3.5" />
                        <span>CODE REPO</span>
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
