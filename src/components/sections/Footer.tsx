import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { IconSteeringWheel } from '@tabler/icons-react';

export function Footer() {
  return (
    <footer className="py-12 bg-zinc-950 border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#E8002D]/10 border border-[#E8002D]/40 flex items-center justify-center text-[#E8002D]">
              <IconSteeringWheel className="w-4 h-4" />
            </div>
            <div className="font-mono text-xs text-zinc-400">
              <span className="font-bold text-white">{portfolioData.profile.name}</span>
              <span className="mx-2 text-zinc-600">|</span>
              <span>{portfolioData.profile.role.toUpperCase()}</span>
            </div>
          </div>

          {/* Center Telemetry Note */}
          <div className="font-mono text-[11px] text-zinc-400 text-center">
            <span>[NEXT.JS 16 APP ROUTER]</span>
            <span className="mx-2 text-zinc-600">•</span>
            <span>TYPESCRIPT</span>
            <span className="mx-2 text-zinc-600">•</span>
            <span>TAILWIND CSS</span>
          </div>

          {/* Right Copyright */}
          <div className="font-mono text-[11px] text-zinc-400">
            © {new Date().getFullYear()} {portfolioData.profile.name}. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
