import React from "react";

const ContrastSection = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-[12px] uppercase font-semibold tracking-wider text-blue-600 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">
            The Contrast
          </span>
          <h2 className="text-[28px] sm:text-[36px] font-bold text-slate-900 tracking-tight mt-4">
            Job hunting shouldn&apos;t be a full-time job.
          </h2>
          <p className="text-[16px] sm:text-[18px] text-slate-600 mt-3 leading-relaxed">
            Manual job board searching causes mental fatigue and missed windows.
            Here is what shifts when you automate the top-of-funnel intake.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* The Old Way */}
          <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200/80 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
                <span className="material-symbols-outlined !text-[20px]">
                  close
                </span>
              </div>
              <h3 className="text-[18px] font-bold text-slate-900">
                The Manual Grind
              </h3>
            </div>
            <ul className="space-y-4 text-[14px] sm:text-[15px] text-slate-600">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-red-500 !text-[18px] mt-0.5 shrink-0">
                  remove_circle_outline
                </span>
                <span>
                  Open 7 tabs every morning (LinkedIn, Indeed, Wellfound, Naukri, Glassdoor).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-red-500 !text-[18px] mt-0.5 shrink-0">
                  remove_circle_outline
                </span>
                <span>
                  Sift through 150+ sponsored, expired, or irrelevant agency posts.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-red-500 !text-[18px] mt-0.5 shrink-0">
                  remove_circle_outline
                </span>
                <span>
                  Apply 4 days late after 500+ other applicants have already saturated the inbox.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-red-500 !text-[18px] mt-0.5 shrink-0">
                  remove_circle_outline
                </span>
                <span>
                  Burnout and frustration from spending 3 hours daily on administrative browsing.
                </span>
              </li>
            </ul>
          </div>

          {/* The JobHawk Way */}
          <div className="bg-blue-50/50 p-6 sm:p-8 rounded-2xl border border-blue-200/80 relative shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
                <span className="material-symbols-outlined !text-[20px]">
                  check
                </span>
              </div>
              <h3 className="text-[18px] font-bold text-slate-900">
                The JobHawk Autopilot
              </h3>
            </div>
            <ul className="space-y-4 text-[14px] sm:text-[15px] text-slate-800">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-blue-600 !text-[18px] mt-0.5 shrink-0">
                  task_alt
                </span>
                <span>
                  Set your strict target parameters once (title, compensation, location mode).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-blue-600 !text-[18px] mt-0.5 shrink-0">
                  task_alt
                </span>
                <span>
                  Our bots poll multi-portal ATS boards in real time without human intervention.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-blue-600 !text-[18px] mt-0.5 shrink-0">
                  task_alt
                </span>
                <span>
                  1 clean morning email containing the top 10–15 verified opportunities.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-blue-600 !text-[18px] mt-0.5 shrink-0">
                  task_alt
                </span>
                <span>
                  Direct 1-click apply links right to the company’s native Greenhouse/Lever page.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContrastSection;
