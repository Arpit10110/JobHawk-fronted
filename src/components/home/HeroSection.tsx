"use client";
import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 md:py-24 lg:py-28">
      {/* Ambient micro-grid background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-gradient-to-b from-blue-500/10 via-blue-600/5 to-transparent blur-3xl pointer-events-none rounded-full"></div>

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Form Controls */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* High-contrast badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-[13px] font-medium mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span>Job-Alert Automation Platform</span>
              <span className="text-slate-300 font-mono-code">•</span>
              <span className="text-slate-600">Daily Curation</span>
            </div>

            {/* Headline */}
            <h1 className="text-[38px] sm:text-[48px] lg:text-[56px] font-bold text-slate-900 leading-[1.12] tracking-tight mb-5">
              Stop Searching.
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                Start Getting Hired.
              </span>
            </h1>

            {/* Subhead */}
            <p className="text-[17px] sm:text-[19px] text-slate-600 max-w-xl leading-relaxed mb-8">
              JobHawk automatically monitors 5+ top hiring platforms and delivers
              verified, high-match opportunities directly to your inbox — every
              morning at 9:00 AM sharp.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-8">
              <Link
                href="/create-alert"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-[15px] px-6 py-3.5 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all w-full sm:w-auto text-center"
              >
                <span>Create My Job Alerts</span>
                <span className="material-symbols-outlined !text-[18px]">
                  arrow_forward
                </span>
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200/80 text-slate-800 font-medium text-[15px] px-5 py-3.5 rounded-xl transition-all w-full sm:w-auto text-center"
              >
                <span className="material-symbols-outlined !text-[20px] text-blue-600">
                  play_circle
                </span>
                <span>See How It Works</span>
              </a>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-[13px] text-slate-500">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-blue-600 !text-[16px]">
                  check_circle
                </span>
                <span>No complicated setup</span>
              </div>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-blue-600 !text-[16px]">
                  schedule_send
                </span>
                <span>Daily job alerts</span>
              </div>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-blue-600 !text-[16px]">
                  open_in_new
                </span>
                <span>Direct application links</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Digest Mockup */}
          <div className="lg:col-span-6 relative mt-6 lg:mt-0">
            {/* Floating Status Widget Top Right */}
            <div className="absolute -top-4 -right-2 sm:-right-4 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-xl border border-slate-100 flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
              </span>
              <span className="font-mono-code text-[12px] font-semibold text-slate-800">
                12 new jobs matched
              </span>
            </div>

            {/* Floating Status Widget Bottom Left */}
            <div className="absolute -bottom-5 -left-2 sm:-left-4 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-xl border border-slate-100 flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-600 !text-[18px]">
                mark_email_read
              </span>
              <span className="text-[12px] font-medium text-slate-800">
                Digest sent to your inbox • 9:00 AM
              </span>
            </div>

            {/* Mockup Shell */}
            <div className="w-full bg-white rounded-2xl shadow-2xl border border-slate-200/80 overflow-hidden">
              {/* Mockup Header */}
              <div className="bg-slate-50 px-5 py-3 border-b border-slate-200/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  </div>
                  <span className="font-mono-code text-[12px] text-slate-500 ml-2">
                    JobHawk Daily Digest • Issue #42
                  </span>
                </div>
                <div className="flex items-center gap-1.5 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200/50">
                  <span className="material-symbols-outlined !text-[13px] text-blue-600">
                    sync
                  </span>
                  <span className="font-mono-code text-[11px] text-blue-700">
                    Searching 5 portals
                  </span>
                </div>
              </div>

              {/* Mockup Content Banner */}
              <div className="p-5 sm:p-6 bg-white">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
                  <div>
                    <h2 className="text-[17px] font-bold text-slate-900">
                      Tuesday Morning Digest
                    </h2>
                    <p className="text-[13px] text-slate-500">
                      Target: Frontend / Fullstack • Remote &amp; Hybrid
                    </p>
                  </div>
                  <span className="self-start sm:self-auto inline-flex font-mono-code text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-1 rounded-md">
                    98% Match Rate
                  </span>
                </div>

                {/* Job Rows */}
                <div className="space-y-3 pt-4">
                  {/* Job Card 1 */}
                  <div className="p-4 rounded-xl bg-slate-50 hover:bg-blue-50/50 border border-slate-100 hover:border-blue-200 transition-all">
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[15px] text-slate-900 font-semibold">
                            Staff Frontend Engineer
                          </span>
                          <span className="font-mono-code text-[10px] uppercase tracking-wider bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-medium">
                            New Today
                          </span>
                        </div>
                        <p className="text-[13px] text-slate-500">
                          Vercel Inc. • Remote (Global)
                        </p>
                      </div>
                      <span className="font-mono-code text-[13px] text-slate-900 font-semibold">
                        $140k – $175k
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5 mt-2">
                      <span className="font-mono-code text-[11px] bg-white text-slate-700 px-2 py-0.5 rounded border border-slate-200/80 shadow-xs">
                        Next.js
                      </span>
                      <span className="font-mono-code text-[11px] bg-white text-slate-700 px-2 py-0.5 rounded border border-slate-200/80 shadow-xs">
                        TypeScript
                      </span>
                      <span className="font-mono-code text-[11px] bg-white text-slate-700 px-2 py-0.5 rounded border border-slate-200/80 shadow-xs">
                        React Server Comps
                      </span>
                      <Link
                        href="/create-alert"
                        className="font-mono-code text-[11px] text-blue-600 hover:text-blue-700 ml-auto font-medium cursor-pointer"
                      >
                        Apply on Greenhouse →
                      </Link>
                    </div>
                  </div>

                  {/* Job Card 2 */}
                  <div className="p-4 rounded-xl bg-slate-50 hover:bg-blue-50/50 border border-slate-100 hover:border-blue-200 transition-all">
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[15px] text-slate-900 font-semibold">
                            Lead React Native Architect
                          </span>
                          <span className="font-mono-code text-[10px] uppercase tracking-wider bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded font-medium">
                            1h ago
                          </span>
                        </div>
                        <p className="text-[13px] text-slate-500">
                          Fintech Labs • Bangalore / Hybrid
                        </p>
                      </div>
                      <span className="font-mono-code text-[13px] text-slate-900 font-semibold">
                        ₹28L – ₹42L
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5 mt-2">
                      <span className="font-mono-code text-[11px] bg-white text-slate-700 px-2 py-0.5 rounded border border-slate-200/80 shadow-xs">
                        Mobile UI
                      </span>
                      <span className="font-mono-code text-[11px] bg-white text-slate-700 px-2 py-0.5 rounded border border-slate-200/80 shadow-xs">
                        GraphQL
                      </span>
                      <span className="font-mono-code text-[11px] bg-white text-slate-700 px-2 py-0.5 rounded border border-slate-200/80 shadow-xs">
                        iOS / Android
                      </span>
                      <Link
                        href="/create-alert"
                        className="font-mono-code text-[11px] text-blue-600 hover:text-blue-700 ml-auto font-medium cursor-pointer"
                      >
                        Apply on Lever →
                      </Link>
                    </div>
                  </div>

                  {/* Job Card 3 */}
                  <div className="p-4 rounded-xl bg-slate-50 hover:bg-blue-50/50 border border-slate-100 hover:border-blue-200 transition-all">
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[15px] text-slate-900 font-semibold">
                            Senior UI/UX Design Technologist
                          </span>
                          <span className="font-mono-code text-[10px] uppercase tracking-wider bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded font-medium">
                            3h ago
                          </span>
                        </div>
                        <p className="text-[13px] text-slate-500">
                          Stripe ecosystem • Remote (India)
                        </p>
                      </div>
                      <span className="font-mono-code text-[13px] text-slate-900 font-semibold">
                        ₹20L – ₹35L
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5 mt-2">
                      <span className="font-mono-code text-[11px] bg-white text-slate-700 px-2 py-0.5 rounded border border-slate-200/80 shadow-xs">
                        Design Systems
                      </span>
                      <span className="font-mono-code text-[11px] bg-white text-slate-700 px-2 py-0.5 rounded border border-slate-200/80 shadow-xs">
                        Tailwind CSS
                      </span>
                      <Link
                        href="/create-alert"
                        className="font-mono-code text-[11px] text-blue-600 hover:text-blue-700 ml-auto font-medium cursor-pointer"
                      >
                        Apply on Workable →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
