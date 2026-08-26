"use client";

import React, { useState } from 'react';
import { GlassCard } from '../GlassCard';
import { SectionHeader } from '../SectionHeader';
import { TelemetryBadge } from '../TelemetryBadge';
import { portfolioData } from '@/data/portfolio';
import {
  IconRadio,
  IconCopy,
  IconCheck,
  IconSend,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitch,
  IconBroadcast
} from '@tabler/icons-react';

export function RadioCheck() {
  const { contact } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    pilotName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(contact.email);
      } else {
        // Fallback for older browsers / HTTP contexts
        const textarea = document.createElement('textarea');
        textarea.value = contact.email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy email to clipboard:', err);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.pilotName || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ pilotName: '', email: '', subject: '', message: '' });
      setFormSubmitted(false);
    }, 4000);
  };

  return (
    <section id="radio-check" className="py-24 bg-carbon-mesh relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          sectionNumber="05"
          title="Radio Check & Pit Wall Link"
          subtitle="Establish direct radio communications with the pit wall for contracts, inquiries, or technical discussion."
          badgeLabel="CH_01_ACTIVE"
          badgeVariant="modena"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Radio Channel & Social Chips */}
          <div className="lg:col-span-5 space-y-6">
            <GlassCard className="p-8 space-y-6 border-[#E8002D]/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#E8002D]/10 border border-[#E8002D]/40 flex items-center justify-center text-[#E8002D]">
                  <IconBroadcast className="w-5 h-5" stroke={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-mono uppercase">
                    PIT WALL FREQUENCY
                  </h3>
                  <p className="text-xs font-mono text-[#FFF200]">
                    {contact.radioFrequency}
                  </p>
                </div>
              </div>

              <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                Available for high-impact frontend architecture contracts, engineering leadership, and senior Next.js roles.
              </p>

              {/* Email Copy Chip */}
              <div className="space-y-2">
                <label className="block text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                  DIRECT RADIO EMAIL:
                </label>
                <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-950 border border-white/15 font-mono text-xs text-zinc-200">
                  <span className="truncate mr-2 font-medium">{contact.email}</span>
                  <button
                    onClick={handleCopyEmail}
                    className="px-3 py-1.5 rounded-md bg-[#E8002D]/10 hover:bg-[#E8002D] text-[#E8002D] hover:text-white border border-[#E8002D]/30 transition-all font-mono text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 shrink-0"
                    aria-label="Copy direct email address"
                  >
                    {copied ? (
                      <>
                        <IconCheck className="w-3.5 h-3.5" />
                        <span>COPIED</span>
                      </>
                    ) : (
                      <>
                        <IconCopy className="w-3.5 h-3.5" />
                        <span>COPY EMAIL</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Social Channels */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <label className="block text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                  EXTERNAL TELEMETRY CHANNELS:
                </label>

                <div className="grid grid-cols-3 gap-3">
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center justify-center p-3 rounded-lg bg-zinc-950/80 hover:bg-zinc-900 border border-white/10 hover:border-[#FFF200]/40 transition-all group"
                  >
                    <IconBrandGithub className="w-5 h-5 text-zinc-400 group-hover:text-[#FFF200] transition-colors" stroke={1.5} />
                    <span className="text-[10px] font-mono text-zinc-300 mt-1.5">GITHUB</span>
                  </a>

                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center justify-center p-3 rounded-lg bg-zinc-950/80 hover:bg-zinc-900 border border-white/10 hover:border-sky-400/40 transition-all group"
                  >
                    <IconBrandLinkedin className="w-5 h-5 text-zinc-400 group-hover:text-sky-400 transition-colors" stroke={1.5} />
                    <span className="text-[10px] font-mono text-zinc-300 mt-1.5">LINKEDIN</span>
                  </a>

                  <a
                    href={contact.twitch}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center justify-center p-3 rounded-lg bg-zinc-950/80 hover:bg-zinc-900 border border-white/10 hover:border-purple-400/40 transition-all group"
                  >
                    <IconBrandTwitch className="w-5 h-5 text-zinc-400 group-hover:text-purple-400 transition-colors" stroke={1.5} />
                    <span className="text-[10px] font-mono text-zinc-300 mt-1.5">TWITCH</span>
                  </a>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: Radio Contact Form */}
          <div className="lg:col-span-7">
            <GlassCard className="p-8 border-[#E8002D]/20">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-extrabold text-white font-sans flex items-center gap-2">
                  <IconRadio className="w-5 h-5 text-[#E8002D]" />
                  <span>TRANSMIT RADIO MESSAGE</span>
                </h3>
                <TelemetryBadge label="PIT_WALL_RECEIVER" variant="rosso" />
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 my-8">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <IconCheck className="w-6 h-6" stroke={2} />
                  </div>
                  <h4 className="text-lg font-bold text-white font-mono">RADIO TRANSMISSION ACKNOWLEDGED</h4>
                  <p className="text-xs font-mono text-emerald-300">
                    Message received at pit wall. Response will be dispatched shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="pilotName" className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-2">
                        CALLSIGN / NAME *
                      </label>
                      <input
                        id="pilotName"
                        type="text"
                        required
                        value={formData.pilotName}
                        onChange={(e) => setFormData({ ...formData, pilotName: e.target.value })}
                        placeholder="e.g. Charles Leclerc"
                        className="w-full px-4 py-3 rounded-lg bg-zinc-950/90 border border-white/15 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#E8002D] font-mono transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="pilotEmail" className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-2">
                        RADIO EMAIL ADDRESS *
                      </label>
                      <input
                        id="pilotEmail"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@team.com"
                        className="w-full px-4 py-3 rounded-lg bg-zinc-950/90 border border-white/15 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#E8002D] font-mono transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="radioSubject" className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-2">
                      SUBJECT / TELEMETRY CATEGORY
                    </label>
                    <input
                      id="radioSubject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Contract Proposal / Frontend Inquiry"
                      className="w-full px-4 py-3 rounded-lg bg-zinc-950/90 border border-white/15 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#E8002D] font-mono transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="radioMessage" className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-2">
                      RADIO TRANSMISSION DETAILS *
                    </label>
                    <textarea
                      id="radioMessage"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Detail your inquiry, project scope, or opportunity..."
                      className="w-full px-4 py-3 rounded-lg bg-zinc-950/90 border border-white/15 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#E8002D] font-mono transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#E8002D] hover:bg-[#D40026] text-white font-mono text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-lg shadow-[#E8002D]/25 flex items-center justify-center gap-2 group"
                  >
                    <IconSend className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <span>TRANSMIT TO PIT WALL</span>
                  </button>
                </form>
              )}
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
