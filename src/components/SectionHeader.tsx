import React from 'react';
import { TelemetryBadge } from './TelemetryBadge';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  sectionNumber: string; // e.g. "01"
  title: string;
  subtitle?: string;
  badgeLabel?: string;
  badgeVariant?: 'rosso' | 'modena' | 'green' | 'neutral';
  className?: string;
}

export function SectionHeader({
  sectionNumber,
  title,
  subtitle,
  badgeLabel,
  badgeVariant = 'rosso',
  className
}: SectionHeaderProps) {
  return (
    <div className={cn("space-y-3 mb-12", className)}>
      <div className="flex flex-wrap items-center gap-3">
        <span className="font-mono text-xs text-[#E8002D] tracking-widest uppercase font-bold px-2 py-0.5 rounded bg-[#E8002D]/10 border border-[#E8002D]/20 select-none">
          [SEC_{sectionNumber}]
        </span>
        {badgeLabel && (
          <TelemetryBadge label={badgeLabel} variant={badgeVariant} pulse />
        )}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-baseline gap-4">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans flex items-center gap-3">
          <span>{title}</span>
          <span className="h-[2px] w-12 bg-gradient-to-r from-[#E8002D] to-transparent inline-block rounded-full" />
        </h2>
        {subtitle && (
          <p className="text-sm font-mono text-zinc-400 max-w-xl">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
