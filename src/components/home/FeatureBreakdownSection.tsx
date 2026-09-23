import React from "react";

const FeatureBreakdownSection = () => {
  return (
    <section className="w-full bg-slate-50 py-16 md:py-24" id="features">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-20 md:space-y-28">
        {/* Feature 1: Tell JobHawk what you want */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <span className="text-[12px] uppercase font-semibold tracking-wider text-blue-600 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">
              Granular Filtering
            </span>
            <h3 className="text-[26px] sm:text-[34px] font-bold text-slate-900 tracking-tight mt-4 mb-4">
              Tell JobHawk what you want. Exactly.
            </h3>
            <p className="text-[15px] sm:text-[16px] text-slate-600 mb-6 leading-relaxed">
              Generic job alerts bombard you with irrelevant junior roles or
              completely different domains. With JobHawk, set strict parameters on
              seniority, tech stack combinations, salary minimums, and workplace
              flexibility.
            </p>
            <div className="flex flex-col gap-3 text-[14px] text-slate-800">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-blue-600 !text-[18px]">
                  check_circle
                </span>
                <span>
                  Boolean keywords: (React AND TypeScript) NOT WordPress
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-blue-600 !text-[18px]">
                  check_circle
                </span>
                <span>Enforce compensation floor to skip underpaid roles</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-slate-200/80">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-[16px] font-bold text-slate-900">
                    Preference Matrix
                  </span>
                  <span className="font-mono-code text-[12px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                    Auto-Save: Enabled
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div className="text-[11px] font-mono-code text-slate-400">
                      Target Titles
                    </div>
                    <div className="text-[14px] font-bold text-slate-900 mt-1">
                      Staff Frontend, Lead UI
                    </div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div className="text-[11px] font-mono-code text-slate-400">
                      Location Preference
                    </div>
                    <div className="text-[14px] font-bold text-slate-900 mt-1">
                      Remote (Global / India)
                    </div>
                  </div>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="text-[11px] font-mono-code text-slate-400">
                    Mandatory Skillset
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="bg-blue-100 text-blue-800 px-2.5 py-1 rounded-md font-mono-code text-[12px] font-semibold">
                      React 19
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-2.5 py-1 rounded-md font-mono-code text-[12px] font-semibold">
                      TypeScript
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-2.5 py-1 rounded-md font-mono-code text-[12px] font-semibold">
                      System Design
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: Wake up to relevant opportunities */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-slate-200/80">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                  <span className="material-symbols-outlined !text-[20px]">
                    outgoing_mail
                  </span>
                </div>
                <div>
                  <span className="text-[15px] font-bold text-slate-900 block">
                    Your Daily Inbox Digest
                  </span>
                  <span className="font-mono-code text-[12px] text-slate-400">
                    Delivered to your personal inbox
                  </span>
                </div>
              </div>
              <div className="space-y-2.5 pt-4">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-mono-code text-[12px] font-bold text-blue-600">
                      01
                    </span>
                    <span className="text-[14px] font-medium text-slate-900">
                      Senior Frontend Developer
                    </span>
                  </div>
                  <span className="font-mono-code text-[12px] text-slate-500">
                    ₹18L – ₹28L • Remote
                  </span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-mono-code text-[12px] font-bold text-blue-600">
                      02
                    </span>
                    <span className="text-[14px] font-medium text-slate-900">
                      Next.js Solutions Architect
                    </span>
                  </div>
                  <span className="font-mono-code text-[12px] text-slate-500">
                    $120k – $150k • Remote
                  </span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-mono-code text-[12px] font-bold text-blue-600">
                      03
                    </span>
                    <span className="text-[14px] font-medium text-slate-900">
                      Staff Web Engineer
                    </span>
                  </div>
                  <span className="font-mono-code text-[12px] text-slate-500">
                    ₹25L – ₹40L • Hybrid
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <span className="text-[12px] uppercase font-semibold tracking-wider text-blue-600 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">
              Morning Delivery
            </span>
            <h3 className="text-[26px] sm:text-[34px] font-bold text-slate-900 tracking-tight mt-4 mb-4">
              Wake up to curated opportunities.
            </h3>
            <p className="text-[15px] sm:text-[16px] text-slate-600 mb-6 leading-relaxed">
              No notification spam during dinner or while you are working. One
              clean, scannable briefing waiting in your inbox at the exact hour you
              choose. Spend 5 minutes reviewing, apply to the top matches, and get
              on with your day.
            </p>
            <div className="flex items-center gap-3">
              <span className="font-mono-code text-[12px] bg-blue-50 text-blue-700 px-3 py-1 rounded-lg border border-blue-200/80 font-semibold">
                Delivered 9:00 AM Daily
              </span>
              <span className="font-mono-code text-[12px] text-slate-500">
                Zero spam guarantee
              </span>
            </div>
          </div>
        </div>

        {/* Feature 3: Apply where the job lives */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <span className="text-[12px] uppercase font-semibold tracking-wider text-blue-600 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">
              Zero Middleman
            </span>
            <h3 className="text-[26px] sm:text-[34px] font-bold text-slate-900 tracking-tight mt-4 mb-4">
              Apply where the job actually lives.
            </h3>
            <p className="text-[15px] sm:text-[16px] text-slate-600 mb-6 leading-relaxed">
              JobHawk doesn&apos;t trap you behind proprietary job applications or
              hidden resumes. Every link takes you directly to the original job
              board, LinkedIn posting, or direct company career page.
            </p>
            <ul className="space-y-3 text-[14px] text-slate-800">
              <li className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-blue-600 !text-[18px]">
                  link
                </span>
                <span>
                  Direct outbound ATS URLs (Greenhouse, Lever, Ashby)
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-blue-600 !text-[18px]">
                  verified_user
                </span>
                <span>No proprietary intermediate forms to refill</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-200/80 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined !text-[32px]">
                  open_in_browser
                </span>
              </div>
              <h4 className="text-[18px] text-slate-900 font-bold mb-2">
                Direct Deep Links
              </h4>
              <p className="text-[14px] text-slate-500 max-w-md mb-6 leading-relaxed">
                We extract and canonicalize authentic application endpoints so
                your resume lands right on the hiring manager&apos;s desk.
              </p>
              <div className="inline-flex items-center gap-2 font-mono-code text-[12px] text-blue-600 bg-slate-50 border border-slate-200 px-4 py-2 rounded-xl shadow-2xs">
                <span>https://boards.greenhouse.io/company/jobs/482910</span>
                <span className="material-symbols-outlined !text-[14px]">
                  arrow_forward
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureBreakdownSection;
