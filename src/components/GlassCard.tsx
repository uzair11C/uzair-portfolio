import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = true, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-card rounded-xl p-6 relative overflow-hidden",
        hoverEffect && "glass-card-hover",
        className
      )}
      {...props}
    >
      {/* Top telemetry corner accent line */}
      <div className="absolute top-0 left-0 w-10 h-[2px] bg-gradient-to-r from-[#E8002D] to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 w-[2px] h-10 bg-gradient-to-b from-[#E8002D] to-transparent pointer-events-none" />
      {children}
    </div>
  );
}
