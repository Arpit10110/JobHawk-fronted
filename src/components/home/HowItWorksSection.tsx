import React from "react";

const HowItWorksSection = () => {
  return (
    <section className="w-full bg-slate-50 py-16 md:py-24" id="how-it-works">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[12px] uppercase font-semibold tracking-wider text-blue-600 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">
            How It Works
          </span>
          <h2 className="text-[28px] sm:text-[36px] font-bold text-slate-900 tracking-tight mt-4">
            From criteria to inbox in four streamlined phases.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 01 */}
          <div className="bg-white p-6 rounded-2xl shadow-xs border border-slate-200/80 flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono-code text-[20px] text-blue-600 font-bold">
                  01
                </span>
                <span className="material-symbols-outlined text-slate-400">
                  tune
                </span>
              </div>
              <h3 className="text-[18px] font-bold text-slate-900 mb-2">
                Define Target
              </h3>
              <p className="text-[13px] text-slate-500 leading-relaxed mb-6">
                Input role titles, preferred tech stack, remote/hybrid status, and minimum compensation threshold.
              </p>
            </div>
            {/* Mini UI Mockup */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
              <div className="bg-white p-2 rounded text-[11px] font-mono-code text-slate-700 flex justify-between shadow-2xs">
                <span>Role: Frontend / React</span>
                <span className="text-blue-600 font-bold">✓</span>
              </div>
              <div className="bg-white p-2 rounded text-[11px] font-mono-code text-slate-700 flex justify-between shadow-2xs">
                <span>Location: Remote Only</span>
                <span className="text-blue-600 font-bold">✓</span>
              </div>
            </div>
          </div>

          {/* Step 02 */}
          <div className="bg-white p-6 rounded-2xl shadow-xs border border-slate-200/80 flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono-code text-[20px] text-blue-600 font-bold">
                  02
                </span>
                <span className="material-symbols-outlined text-slate-400">
                  manage_search
                </span>
              </div>
              <h3 className="text-[18px] font-bold text-slate-900 mb-2">
                Multi-Portal Scan
              </h3>
              <p className="text-[13px] text-slate-500 leading-relaxed mb-6">
                JobHawk&apos;s scraping workers ingest new listings continuously from LinkedIn, Indeed, Wellfound, and ATS feeds.
              </p>
            </div>
            {/* Mini UI Mockup */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-around py-3">
              <span className="font-mono-code text-[11px] bg-white px-2 py-1 rounded shadow-2xs text-slate-800 border border-slate-200/60 font-medium">
                LinkedIn
              </span>
              <span className="font-mono-code text-[11px] bg-white px-2 py-1 rounded shadow-2xs text-slate-800 border border-slate-200/60 font-medium">
                Indeed
              </span>
              <span className="font-mono-code text-[11px] bg-white px-2 py-1 rounded shadow-2xs text-slate-800 border border-slate-200/60 font-medium">
                Wellfound
              </span>
            </div>
          </div>

          {/* Step 03 */}
          <div className="bg-white p-6 rounded-2xl shadow-xs border border-slate-200/80 flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono-code text-[20px] text-blue-600 font-bold">
                  03
                </span>
                <span className="material-symbols-outlined text-slate-400">
                  filter_alt
                </span>
              </div>
              <h3 className="text-[18px] font-bold text-slate-900 mb-2">
                Discard Noise
              </h3>
              <p className="text-[13px] text-slate-500 leading-relaxed mb-6">
                Intelligent filtering removes duplicates, ghost listings, third-party recruiter spam, and expired jobs.
              </p>
            </div>
            {/* Mini UI Mockup */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5 text-[11px] font-mono-code">
              <div className="flex items-center justify-between text-red-600 bg-red-50/70 p-1.5 rounded border border-red-100">
                <span className="line-through">Ghost recruiter post</span>
                <span className="material-symbols-outlined !text-[14px]">
                  delete
                </span>
              </div>
              <div className="flex items-center justify-between text-emerald-700 bg-emerald-50/70 p-1.5 rounded border border-emerald-100 font-medium">
                <span>Verified direct opening</span>
                <span className="material-symbols-outlined !text-[14px]">
                  verified
                </span>
              </div>
            </div>
          </div>

          {/* Step 04 */}
          <div className="bg-white p-6 rounded-2xl shadow-xs border border-slate-200/80 flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono-code text-[20px] text-blue-600 font-bold">
                  04
                </span>
                <span className="material-symbols-outlined text-slate-400">
                  forward_to_inbox
                </span>
              </div>
              <h3 className="text-[18px] font-bold text-slate-900 mb-2">
                Daily Delivery
              </h3>
              <p className="text-[13px] text-slate-500 leading-relaxed mb-6">
                Receive your custom digest each morning. Open, click through directly to the origin posting, and submit.
              </p>
            </div>
            {/* Mini UI Mockup */}
            <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100 flex items-center justify-between text-blue-700">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined !text-[16px]">
                  mail
                </span>
                <span className="font-mono-code text-[11px] font-semibold">
                  9:00 AM Dispatch
                </span>
              </div>
              <span className="material-symbols-outlined !text-[16px] text-blue-600">
                done_all
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
