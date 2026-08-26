"use client";

import React, { useState, useEffect } from 'react';
import { TelemetryBadge } from '../TelemetryBadge';
import { IconSteeringWheel, IconMenu2, IconX, IconRadio } from '@tabler/icons-react';
import { portfolioData } from '@/data/portfolio';

export function TelemetryNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "TELEMETRY", href: "#hero" },
    { label: "COCKPIT STACK", href: "#cockpit-stack" },
    { label: "PROJECTS", href: "#projects" },
    { label: "RACE HISTORY", href: "#race-history" },
    { label: "RADIO CHECK", href: "#radio-check" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-zinc-950/80 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Pit Wall Indicator */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-[#E8002D]/10 border border-[#E8002D]/40 flex items-center justify-center group-hover:border-[#E8002D] group-hover:bg-[#E8002D]/20 transition-all">
              <IconSteeringWheel className="w-5 h-5 text-[#E8002D]" stroke={1.5} />
            </div>
            <div>
              <div className="font-mono text-sm font-bold text-white tracking-wider flex items-center gap-2">
                <span>{portfolioData.profile.name}</span>
                <span className="text-[10px] text-[#FFF200] bg-[#FFF200]/10 px-1.5 py-0.5 rounded border border-[#FFF200]/30 font-normal">F1_UI</span>
              </div>
              <p className="font-mono text-[10px] text-zinc-400 tracking-widest">{portfolioData.profile.handle}</p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-900/60 p-1.5 rounded-xl border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 rounded-lg text-xs font-mono text-zinc-300 hover:text-white hover:bg-white/10 transition-all duration-200 tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Status & Live Telemetry Badge */}
          <div className="hidden lg:flex items-center gap-3">
            <TelemetryBadge label="PIT WALL AVAILABLE" variant="green" pulse />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <IconX className="w-5 h-5" /> : <IconMenu2 className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950/95 border-b border-white/10 backdrop-blur-2xl px-4 pt-4 pb-6 mt-3 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-sm font-mono text-zinc-200 hover:bg-[#E8002D]/10 hover:text-[#E8002D] border border-transparent hover:border-[#E8002D]/30 transition-all"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <TelemetryBadge label="PIT WALL AVAILABLE" variant="green" pulse className="w-full justify-center py-2" />
          </div>
        </div>
      )}
    </header>
  );
}
