import React from "react";

const AutomationPipelineSection = () => {
  return (
    <section className="w-full bg-[#0B0F19] py-16 md:py-24 text-slate-100">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono-code text-[12px] text-blue-300 uppercase tracking-wider bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
            Background Engine
          </span>
          <h2 className="text-[28px] sm:text-[40px] font-bold text-white tracking-tight mt-4 mb-3">
            You search once. JobHawk keeps searching.
          </h2>
          <p className="text-[16px] sm:text-[18px] text-slate-400 leading-relaxed">
            Our telemetry pipeline ingests millions of data points across portals,
            parsing, deduplicating, and matching against your strict schema.
          </p>
        </div>

        {/* 5-Step Pipeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {/* Node 1 */}
          <div className="bg-[#111827] p-5 rounded-2xl border border-slate-800 hover:border-blue-500/50 hover:-translate-y-1 transition-all group">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-mono-code text-[12px] font-bold mb-4">
              01
            </div>
            <h4 className="text-[15px] font-bold text-white mb-1.5">
              Preferences Set
            </h4>
            <p className="text-[12px] text-slate-400 leading-relaxed">
              Titles, stack, compensation thresholds defined.
            </p>
          </div>

          {/* Node 2 */}
          <div className="bg-[#111827] p-5 rounded-2xl border border-slate-800 hover:border-blue-500/50 hover:-translate-y-1 transition-all group">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-mono-code text-[12px] font-bold mb-4">
              02
            </div>
            <h4 className="text-[15px] font-bold text-white mb-1.5">
              24/7 Scraping
            </h4>
            <p className="text-[12px] text-slate-400 leading-relaxed">
              Continuous polling across LinkedIn, Indeed, Wellfound.
            </p>
          </div>

          {/* Node 3 */}
          <div className="bg-[#111827] p-5 rounded-2xl border border-slate-800 hover:border-blue-500/50 hover:-translate-y-1 transition-all group">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-mono-code text-[12px] font-bold mb-4">
              03
            </div>
            <h4 className="text-[15px] font-bold text-white mb-1.5">
              Noise Pruning
            </h4>
            <p className="text-[12px] text-slate-400 leading-relaxed">
              Eliminates duplicates, spam recruiters, and ghost postings.
            </p>
          </div>

          {/* Node 4 */}
          <div className="bg-[#111827] p-5 rounded-2xl border border-slate-800 hover:border-blue-500/50 hover:-translate-y-1 transition-all group">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-mono-code text-[12px] font-bold mb-4">
              04
            </div>
            <h4 className="text-[15px] font-bold text-white mb-1.5">
              Digest Assembly
            </h4>
            <p className="text-[12px] text-slate-400 leading-relaxed">
              Compiles top 10–15 verified matching opportunities.
            </p>
          </div>

          {/* Node 5 */}
          <div className="bg-[#111827] p-5 rounded-2xl border border-blue-500/40 hover:-translate-y-1 transition-all group shadow-lg shadow-blue-500/5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-mono-code text-[12px] font-bold mb-4 shadow-sm">
              05
            </div>
            <h4 className="text-[15px] font-bold text-white mb-1.5">
              Inbox Delivery
            </h4>
            <p className="text-[12px] text-slate-400 leading-relaxed">
              Arrives cleanly at 9:00 AM ready for 1-click apply.
            </p>
          </div>
        </div>

        {/* Live Terminal Simulation */}
        <div className="mt-12 bg-black/80 rounded-2xl p-5 sm:p-6 font-mono-code text-[12px] text-slate-400 border border-slate-800 shadow-2xl overflow-x-auto">
          <div className="flex items-center gap-2 text-blue-400 mb-3 font-semibold">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></span>
            <span>SYSTEM_LOG::STREAM_ACTIVE</span>
          </div>
          <div className="space-y-1.5">
            <div className="text-slate-400">
              [08:58:12] Ingested 1,420 listings across 5 portal spiders.
            </div>
            <div className="text-slate-400">
              [08:58:44] Noise filter evaluated: 1,388 discarded (duplicate / non-matching salary).
            </div>
            <div className="text-slate-400">
              [08:59:01] Assembled high-confidence cohort: 14 matches for profile #jh_9821.
            </div>
            <div className="text-emerald-400 font-semibold">
              [09:00:00] Dispatch completed: Digest email successfully routed to applicant.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationPipelineSection;
