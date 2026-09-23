import React from "react";

const SocialProofStrip = () => {
  return (
    <section className="w-full bg-slate-50 border-y border-slate-200/80 py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[20px] sm:text-[22px] text-slate-800 font-medium tracking-tight leading-snug">
            &ldquo;Your next opportunity shouldn&apos;t depend on how often you refresh a job board.&rdquo;
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Stat 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/70 flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
              <span className="material-symbols-outlined !text-[24px]">
                mark_email_unread
              </span>
            </div>
            <span className="text-[36px] sm:text-[40px] font-bold text-slate-900 mb-1 tracking-tight">
              10–20
            </span>
            <span className="text-[16px] font-semibold text-slate-800 mb-2">
              Curated Daily Listings
            </span>
            <p className="text-[14px] text-slate-500 leading-relaxed">
              De-duplicated, verified openings sent straight to your email every morning at 9:00 AM sharp.
            </p>
          </div>

          {/* Stat 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/70 flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
              <span className="material-symbols-outlined !text-[24px]">
                radar
              </span>
            </div>
            <span className="text-[36px] sm:text-[40px] font-bold text-slate-900 mb-1 tracking-tight">
              24/7
            </span>
            <span className="text-[16px] font-semibold text-slate-800 mb-2">
              Continuous Portal Monitoring
            </span>
            <p className="text-[14px] text-slate-500 leading-relaxed">
              Automated crawlers run constantly so you are always within the first batch of applicants.
            </p>
          </div>

          {/* Stat 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200/70 flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
              <span className="material-symbols-outlined !text-[24px]">
                tune
              </span>
            </div>
            <span className="text-[36px] sm:text-[40px] font-bold text-slate-900 mb-1 tracking-tight">
              1 Setup
            </span>
            <span className="text-[16px] font-semibold text-slate-800 mb-2">
              Zero Ongoing Hassle
            </span>
            <p className="text-[14px] text-slate-500 leading-relaxed">
              Tune your target role, stack, and salary floor once. JobHawk handles the ongoing grind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofStrip;
