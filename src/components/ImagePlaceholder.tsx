import React from 'react';
import { IconUser, IconPhoto, IconFocus2 } from '@tabler/icons-react';
import { cn } from '@/lib/utils';

interface ImagePlaceholderProps {
  label?: string;
  sublabel?: string;
  className?: string;
  type?: 'avatar' | 'project';
}

export function ImagePlaceholder({
  label = "PROFILE HEADSHOT // 1080x1080",
  sublabel = "[READY FOR AVATAR REPLACEMENT]",
  className,
  type = 'avatar'
}: ImagePlaceholderProps) {
  if (type === 'avatar') {
    return (
      <div className={cn("relative group max-w-xs sm:max-w-sm mx-auto w-full", className)}>
        {/* Neon Rosso Corsa Border Ring */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#E8002D] via-[#E8002D]/40 to-[#FFF200]/50 blur-sm opacity-80 group-hover:opacity-100 transition-all duration-500 animate-pulse" />
        
        {/* Frame Container */}
        <div className="relative aspect-square rounded-xl bg-zinc-950/90 border border-white/15 p-6 flex flex-col items-center justify-center text-center overflow-hidden">
          {/* Carbon Grid Overlay */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#E8002D_1px,transparent_1px)] [background-size:16px_16px]" />
          
          {/* Corner Telemetry Overlay */}
          <div className="absolute top-3 left-3 text-[#E8002D]/80 font-mono text-[10px] select-none tracking-widest">[SEC_00]</div>
          <div className="absolute top-3 right-3 text-[#FFF200]/80 font-mono text-[10px] select-none tracking-widest">[DRS_READY]</div>
          <div className="absolute bottom-3 left-3 text-zinc-500 font-mono text-[10px] select-none tracking-widest">PIT_WALL_CAM</div>
          <div className="absolute bottom-3 right-3 text-[#E8002D] font-mono text-[10px] select-none tracking-widest">AVATAR_RAW</div>

          {/* Center Avatar Graphic */}
          <div className="relative z-10 w-24 h-24 rounded-xl bg-gradient-to-br from-[#E8002D]/25 via-zinc-900 to-zinc-950 border border-[#E8002D]/50 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300 shadow-xl">
            <IconUser className="w-12 h-12 text-[#E8002D]" stroke={1.5} />
            <IconFocus2 className="absolute -top-1.5 -right-1.5 w-6 h-6 text-[#FFF200]" stroke={1.5} />
          </div>

          {/* Text Labels */}
          <div className="relative z-10 space-y-1">
            <p className="text-xs font-mono text-zinc-200 tracking-wider font-semibold uppercase">{label}</p>
            <p className="text-[10px] font-mono text-[#E8002D] uppercase tracking-widest">{sublabel}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative aspect-video rounded-lg bg-zinc-950/80 border border-white/10 p-4 flex flex-col items-center justify-center text-center overflow-hidden group/img", className)}>
      <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_14px]" />
      
      <div className="relative z-10 w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-2 group-hover/img:border-[#E8002D]/50 transition-colors">
        <IconPhoto className="w-6 h-6 text-zinc-400 group-hover/img:text-[#E8002D] transition-colors" stroke={1.5} />
      </div>

      <p className="relative z-10 text-xs font-mono text-zinc-300 tracking-wider uppercase">{label}</p>
      <p className="relative z-10 text-[10px] font-mono text-zinc-500 uppercase mt-0.5">{sublabel}</p>
    </div>
  );
}
