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
  IconMail,
  IconDownload
} from '@tabler/icons-react';

export function RadioCheck() {
  const { profile } = portfolioData;
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
        await navigator.clipboard.writeText(profile.email);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = profile.email;
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
    <section id="contact" className="py-24 bg-zinc-950/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          sectionNumber="06"
          title="Radio Check & Contact"
          subtitle="Reach out directly via email, LinkedIn, or GitHub for engineering discussions and opportunities."
          badgeLabel="CONTACT_ACTIVE"
          badgeVariant="modena"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Contact & Profiles */}
          <div className="lg:col-span-5 space-y-6">
            <GlassCard className="p-8 space-y-6 border-[#E8002D]/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#E8002D]/10 border border-[#E8002D]/40 flex items-center justify-center text-[#E8002D]">
                  <IconRadio className="w-5 h-5" stroke={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-sans">
                    DIRECT CONTACT
                  </h3>
                  <p className="text-xs font-mono text-[#FFF200]">
                    {profile.location}
                  </p>
                </div>
              </div>

              <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                Connect with me regarding Junior Frontend Engineer roles, Next.js / React projects, or technical collaboration.
              </p>

              {/* Email Copy Chip */}
              <div className="space-y-2">
                <label className="block text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                  DIRECT EMAIL ADDRESS:
                </label>
                <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-950 border border-white/15 font-mono text-xs text-zinc-200">
                  <span className="truncate mr-2 font-medium">{profile.email}</span>
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

              {/* Social Channels & Resume */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <label className="block text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                  PROFESSIONAL PROFILES & RESUME:
                </label>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center justify-center p-4 rounded-lg bg-zinc-950/80 hover:bg-zinc-900 border border-white/10 hover:border-[#FFF200]/40 transition-all group"
                  >
                    <IconBrandGithub className="w-5 h-5 text-zinc-400 group-hover:text-[#FFF200] transition-colors" stroke={1.5} />
                    <span className="text-xs font-mono text-zinc-300 mt-1.5 font-semibold">GITHUB</span>
                  </a>

                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center justify-center p-4 rounded-lg bg-zinc-950/80 hover:bg-zinc-900 border border-white/10 hover:border-sky-400/40 transition-all group"
                  >
                    <IconBrandLinkedin className="w-5 h-5 text-zinc-400 group-hover:text-sky-400 transition-colors" stroke={1.5} />
                    <span className="text-xs font-mono text-zinc-300 mt-1.5 font-semibold">LINKEDIN</span>
                  </a>
                </div>

                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-white/15 text-zinc-200 hover:text-[#FFF200] hover:border-[#FFF200]/40 font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all mt-2"
                >
                  <IconDownload className="w-4 h-4 text-[#FFF200]" />
                  <span>DOWNLOAD RESUME (PDF)</span>
                </a>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: Normal Form */}
          <div className="lg:col-span-7">
            <GlassCard className="p-8 border-[#E8002D]/20">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-extrabold text-white font-sans flex items-center gap-2">
                  <IconMail className="w-5 h-5 text-[#E8002D]" />
                  <span>SEND A MESSAGE</span>
                </h3>
                <TelemetryBadge label="DIRECT_TRANSMISSION" variant="rosso" />
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 my-8">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <IconCheck className="w-6 h-6" stroke={2} />
                  </div>
                  <h4 className="text-lg font-bold text-white font-sans">MESSAGE TRANSMITTED</h4>
                  <p className="text-xs font-mono text-emerald-300">
                    Thank you for reaching out. I will respond to your message promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="pilotName" className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-2">
                        YOUR NAME *
                      </label>
                      <input
                        id="pilotName"
                        type="text"
                        required
                        value={formData.pilotName}
                        onChange={(e) => setFormData({ ...formData, pilotName: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-lg bg-zinc-950/90 border border-white/15 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#E8002D] font-mono transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="pilotEmail" className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-2">
                        YOUR EMAIL *
                      </label>
                      <input
                        id="pilotEmail"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-lg bg-zinc-950/90 border border-white/15 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#E8002D] font-mono transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="radioSubject" className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-2">
                      SUBJECT
                    </label>
                    <input
                      id="radioSubject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Frontend Engineering Role / Project Scope"
                      className="w-full px-4 py-3 rounded-lg bg-zinc-950/90 border border-white/15 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#E8002D] font-mono transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="radioMessage" className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-2">
                      MESSAGE *
                    </label>
                    <textarea
                      id="radioMessage"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details about your opportunity or project..."
                      className="w-full px-4 py-3 rounded-lg bg-zinc-950/90 border border-white/15 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#E8002D] font-mono transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#E8002D] hover:bg-[#D40026] text-white font-mono text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-lg shadow-[#E8002D]/20 flex items-center justify-center gap-2 group"
                  >
                    <IconSend className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <span>SEND MESSAGE</span>
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
