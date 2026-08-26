import React from 'react';
import { cn } from '@/lib/utils';

interface TelemetryBadgeProps {
  label: string;
  variant?: 'rosso' | 'modena' | 'green' | 'neutral';
  pulse?: boolean;
  className?: string;
}

export function TelemetryBadge({
  label,
  variant = 'neutral',
  pulse = false,
  className
}: TelemetryBadgeProps) {
  const variantStyles = {
    rosso: 'bg-[#E8002D]/10 text-[#E8002D] border-[#E8002D]/30',
    modena: 'bg-[#FFF200]/10 text-[#FFF200] border-[#FFF200]/30',
    green: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    neutral: 'bg-white/5 text-zinc-300 border-white/10'
  };

  const pulseStyles = {
    rosso: 'bg-[#E8002D] pulse-rosso',
    modena: 'bg-[#FFF200]',
    green: 'bg-emerald-400 pulse-green',
    neutral: 'bg-zinc-400'
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-xs font-mono tracking-wider uppercase border backdrop-blur-md select-none",
        variantStyles[variant],
        className
      )}
    >
      {pulse && (
        <span className={cn("w-2 h-2 rounded-full shrink-0", pulseStyles[variant])} />
      )}
      <span>{label}</span>
    </span>
  );
}
