"use client";
import React, { useState } from "react";
import Link from "next/link";

const TelemetryDashboardSection = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[12px] uppercase font-semibold tracking-wider text-blue-600 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">
              Control Center
            </span>
            <h2 className="text-[28px] sm:text-[36px] font-bold text-slate-900 tracking-tight mt-4">
              Your job search, on autopilot.
            </h2>
          </div>
          <div className="flex items-center gap-2 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="font-mono-code text-[12px] font-medium text-blue-900">
              Engine Active • Checked 2m ago
            </span>
          </div>
        </div>

        {/* App Dashboard Window Mockup */}
        <div className="w-full bg-white rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden">
          {/* Mockup Sub-Header */}
          <div className="bg-slate-50 px-6 py-3.5 border-b border-slate-200/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-[15px] font-bold text-slate-900">
                Telemetry &amp; Matched Stream
              </span>
              <span className="font-mono-code text-[11px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-semibold">
                Realtime
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2 font-mono-code text-[12px] text-slate-500">
              <span>Latency: 18ms</span>
              <span>•</span>
              <span>Sync: 100%</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Sidebar Navigation Mockup */}
            <div className="lg:col-span-3 bg-slate-50/70 p-4 border-b lg:border-b-0 lg:border-r border-slate-200/80 space-y-1">
              <div className="font-mono-code text-[11px] uppercase text-slate-400 px-3 py-1 tracking-wider font-semibold">
                Preferences
              </div>
              <button
                onClick={() => setActiveTab("frontend")}
                className={`w-full text-left px-3 py-2 rounded-xl text-[14px] font-medium flex items-center justify-between transition-all ${
                  activeTab === "frontend"
                    ? "bg-white text-blue-700 shadow-sm border border-slate-200/60 font-semibold"
                    : "text-slate-600 hover:bg-white"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined !text-[18px]">
                    notifications_active
                  </span>
                  Frontend Remote
                </span>
                <span className="font-mono-code text-[11px] bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded font-bold">
                  8 new
                </span>
              </button>

              <button
                onClick={() => setActiveTab("fullstack")}
                className={`w-full text-left px-3 py-2 rounded-xl text-[14px] font-medium flex items-center justify-between transition-all ${
                  activeTab === "fullstack"
                    ? "bg-white text-blue-700 shadow-sm border border-slate-200/60 font-semibold"
                    : "text-slate-600 hover:bg-white"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined !text-[18px]">
                    notifications
                  </span>
                  Fullstack Hybrid
                </span>
                <span className="font-mono-code text-[11px] text-slate-400">
                  3 new
                </span>
              </button>

              <button
                onClick={() => setActiveTab("ui")}
                className={`w-full text-left px-3 py-2 rounded-xl text-[14px] font-medium flex items-center justify-between transition-all ${
                  activeTab === "ui"
                    ? "bg-white text-blue-700 shadow-sm border border-slate-200/60 font-semibold"
                    : "text-slate-600 hover:bg-white"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined !text-[18px]">
                    notifications
                  </span>
                  UI Engineer (Global)
                </span>
                <span className="font-mono-code text-[11px] text-slate-400">
                  1 new
                </span>
              </button>

              <div className="pt-4 font-mono-code text-[11px] uppercase text-slate-400 px-3 py-1 tracking-wider font-semibold">
                Configuration
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200/70 shadow-2xs space-y-2">
                <div className="flex justify-between text-[12px]">
                  <span className="text-slate-500">Digest schedule:</span>
                  <span className="font-semibold text-slate-900">09:00 AM IST</span>
                </div>
                <div className="flex justify-between text-[12px]">
                  <span className="text-slate-500">Min compensation:</span>
                  <span className="font-semibold text-slate-900">₹18,00,000</span>
                </div>
                <div className="flex justify-between text-[12px]">
                  <span className="text-slate-500">Platforms:</span>
                  <span className="font-semibold text-blue-600">5 Active</span>
                </div>
              </div>
            </div>

            {/* Main Stream Area */}
            <div className="lg:col-span-9 p-6 bg-white">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-2 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="text-[17px] font-bold text-slate-900">
                    Active Feed
                  </span>
                  <span className="font-mono-code text-[11px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium">
                    12 Verified Opportunities
                  </span>
                </div>
                <div className="flex items-center gap-1.5 font-mono-code text-[12px] text-slate-500">
                  <span>Sort by:</span>
                  <span className="text-slate-900 font-semibold">
                    Match Score ↓
                  </span>
                </div>
              </div>

              {/* Feed Items */}
              <div className="space-y-3">
                {/* Item 1 */}
                <div className="p-4 rounded-xl bg-slate-50 hover:bg-blue-50/40 border border-slate-200/70 hover:border-blue-200 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div>
                      <h4 className="text-[16px] text-slate-900 font-bold">
                        Senior React / TypeScript Architect
                      </h4>
                      <p className="text-[13px] text-slate-500">
                        Supabase Partner • Fully Remote • ₹24L – ₹36L
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="font-mono-code text-[11px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded font-bold">
                        99% Match
                      </span>
                      <Link
                        href="/create-alert"
                        className="inline-flex items-center gap-1 bg-white hover:bg-slate-100 border border-slate-200 px-3 py-1 rounded-lg text-[13px] font-medium text-slate-900 shadow-2xs transition-colors"
                      >
                        <span>Apply</span>
                        <span className="material-symbols-outlined !text-[14px]">
                          arrow_outward
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 font-mono-code text-[11px] text-slate-600">
                    <span className="bg-white px-2 py-0.5 rounded border border-slate-200 shadow-3xs">
                      Tailwind
                    </span>
                    <span className="bg-white px-2 py-0.5 rounded border border-slate-200 shadow-3xs">
                      Next.js 15
                    </span>
                    <span className="bg-white px-2 py-0.5 rounded border border-slate-200 shadow-3xs">
                      Zustand
                    </span>
                    <span className="text-slate-400 ml-auto text-[11px] font-normal">
                      Posted 42 mins ago on Greenhouse
                    </span>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="p-4 rounded-xl bg-slate-50 hover:bg-blue-50/40 border border-slate-200/70 hover:border-blue-200 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div>
                      <h4 className="text-[16px] text-slate-900 font-bold">
                        Frontend Platform Engineer
                      </h4>
                      <p className="text-[13px] text-slate-500">
                        Browserbase • Remote Worldwide • $110,000 – $145,000
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="font-mono-code text-[11px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded font-bold">
                        95% Match
                      </span>
                      <Link
                        href="/create-alert"
                        className="inline-flex items-center gap-1 bg-white hover:bg-slate-100 border border-slate-200 px-3 py-1 rounded-lg text-[13px] font-medium text-slate-900 shadow-2xs transition-colors"
                      >
                        <span>Apply</span>
                        <span className="material-symbols-outlined !text-[14px]">
                          arrow_outward
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 font-mono-code text-[11px] text-slate-600">
                    <span className="bg-white px-2 py-0.5 rounded border border-slate-200 shadow-3xs">
                      WebSockets
                    </span>
                    <span className="bg-white px-2 py-0.5 rounded border border-slate-200 shadow-3xs">
                      Canvas / WebGL
                    </span>
                    <span className="bg-white px-2 py-0.5 rounded border border-slate-200 shadow-3xs">
                      React 19
                    </span>
                    <span className="text-slate-400 ml-auto text-[11px] font-normal">
                      Posted 1h 15m ago on Lever
                    </span>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="p-4 rounded-xl bg-slate-50 hover:bg-blue-50/40 border border-slate-200/70 hover:border-blue-200 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div>
                      <h4 className="text-[16px] text-slate-900 font-bold">
                        Product Engineer (Fullstack JS)
                      </h4>
                      <p className="text-[13px] text-slate-500">
                        PostHog Series-B • Hybrid (Bangalore) • ₹30L – ₹45L
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="font-mono-code text-[11px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded font-bold">
                        91% Match
                      </span>
                      <Link
                        href="/create-alert"
                        className="inline-flex items-center gap-1 bg-white hover:bg-slate-100 border border-slate-200 px-3 py-1 rounded-lg text-[13px] font-medium text-slate-900 shadow-2xs transition-colors"
                      >
                        <span>Apply</span>
                        <span className="material-symbols-outlined !text-[14px]">
                          arrow_outward
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 font-mono-code text-[11px] text-slate-600">
                    <span className="bg-white px-2 py-0.5 rounded border border-slate-200 shadow-3xs">
                      Node
                    </span>
                    <span className="bg-white px-2 py-0.5 rounded border border-slate-200 shadow-3xs">
                      React
                    </span>
                    <span className="bg-white px-2 py-0.5 rounded border border-slate-200 shadow-3xs">
                      PostgreSQL
                    </span>
                    <span className="text-slate-400 ml-auto text-[11px] font-normal">
                      Posted 2h ago on Wellfound
                    </span>
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

export default TelemetryDashboardSection;
