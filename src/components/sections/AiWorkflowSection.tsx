import React from 'react';
import { GlassCard } from '../GlassCard';
import { SectionHeader } from '../SectionHeader';
import { TelemetryBadge } from '../TelemetryBadge';
import { portfolioData } from '@/data/portfolio';
import {
  IconCpu,
  IconSparkles,
  IconCode,
  IconComponents,
  IconChecklist,
  IconCircleCheck,
  IconCrosshair,
  IconTools,
  IconShieldCheck,
  IconFileSearch,
  IconArrowRight
} from '@tabler/icons-react';

const iconMap: Record<string, React.ReactNode> = {
  IconFileSearch: <IconFileSearch className="w-5 h-5 text-sky-400" stroke={1.5} />,
  IconComponents: <IconComponents className="w-5 h-5 text-[#FFF200]" stroke={1.5} />,
  IconCode: <IconCode className="w-5 h-5 text-[#E8002D]" stroke={1.5} />,
  IconChecklist: <IconChecklist className="w-5 h-5 text-amber-400" stroke={1.5} />,
  IconCircleCheck: <IconCircleCheck className="w-5 h-5 text-emerald-400" stroke={1.5} />,
  IconCrosshair: <IconCrosshair className="w-5 h-5 text-rose-400" stroke={1.5} />,
  IconTools: <IconTools className="w-5 h-5 text-indigo-400" stroke={1.5} />,
  IconShieldCheck: <IconShieldCheck className="w-5 h-5 text-teal-400" stroke={1.5} />
};

export function AiWorkflowSection() {
  const { aiWorkflows } = portfolioData;

  return (
    <section id="ai-workflow" className="py-24 bg-zinc-950/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          sectionNumber="03"
          title="AI-Assisted Engineering Workflow"
          subtitle="Multi-agent pipelines, custom AGENTS.md rules, and model-tier orchestration with Codex subscriptions."
          badgeLabel="AGENTIC_WORKFLOW"
          badgeVariant="rosso"
        />

        {/* Workflow Overview Banner */}
        <GlassCard className="p-8 mb-12 border-[#E8002D]/30 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E8002D]/10 border border-[#E8002D]/40 flex items-center justify-center text-[#E8002D]">
                <IconCpu className="w-5 h-5" stroke={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-sans">
                  Enterprise Agentic Workflow Architecture
                </h3>
                <p className="text-xs font-mono text-[#FFF200]">
                  CODEX SUBSCRIPTION // AGENTS.MD CUSTOM INSTRUCTIONS
                </p>
              </div>
            </div>
            <TelemetryBadge label="MODEL-TIER OPTIMIZED" variant="modena" />
          </div>

          <p className="text-xs text-zinc-300 font-sans leading-relaxed max-w-4xl">
            At Invotyx, I leverage company Codex subscriptions and custom root AGENTS.md configuration files to drive multi-agent engineering workflows. Rather than generic single-prompt AI chat, I engineer custom skills (<code className="font-mono text-[#FFF200]">/implement-module</code>, <code className="font-mono text-[#FFF200]">/resolve-issues</code>, <code className="font-mono text-[#FFF200]">/explore-project</code>) that delegate subtasks to specialized subagents using lower-tier models (flash/flash-lite) to maintain speed and efficiency.
          </p>
        </GlassCard>

        {/* Multi-Agent Process Pipelines */}
        <div className="space-y-12">
          {aiWorkflows.map((workflow) => (
            <div key={workflow.id} className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded bg-[#E8002D] text-white font-mono text-xs font-bold">
                      {workflow.command}
                    </span>
                    <h4 className="text-xl font-bold text-white font-sans">
                      {workflow.name}
                    </h4>
                  </div>
                  <p className="text-xs text-zinc-400 font-sans mt-1">
                    {workflow.description}
                  </p>
                </div>
                <TelemetryBadge label={`${workflow.steps.length} STAGE PIPELINE`} variant="green" />
              </div>

              {/* Workflow Step Grid */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {workflow.steps.map((step, sIdx) => (
                  <GlassCard key={sIdx} className="p-5 space-y-3 border-white/10 relative group hover:border-[#FFF200]/40">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#E8002D]">
                        STAGE {step.stepNumber}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-zinc-950 border border-white/10 flex items-center justify-center">
                        {iconMap[step.iconName] || <IconSparkles className="w-4 h-4 text-zinc-400" />}
                      </div>
                    </div>

                    <div>
                      <h5 className="text-sm font-bold text-white font-sans">
                        {step.title}
                      </h5>
                      <span className="text-[10px] font-mono text-[#FFF200]">
                        {step.agentRole}
                      </span>
                    </div>

                    <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                      {step.description}
                    </p>

                    {sIdx < workflow.steps.length - 1 && (
                      <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-zinc-600">
                        <IconArrowRight className="w-5 h-5" />
                      </div>
                    )}
                  </GlassCard>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
