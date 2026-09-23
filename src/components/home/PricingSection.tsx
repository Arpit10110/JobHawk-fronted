import React from "react";
import Link from "next/link";

const PricingSection = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24" id="pricing">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[12px] uppercase font-semibold tracking-wider text-blue-600 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">
            Clear &amp; Simple
          </span>
          <h2 className="text-[28px] sm:text-[36px] font-bold text-slate-900 tracking-tight mt-4">
            Transparent plans for focused seekers.
          </h2>
          <p className="text-[15px] sm:text-[16px] text-slate-600 mt-2">
            Get started for free, or unlock multi-portal coverage and priority routing for pocket change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Tier 1: Free */}
          <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[20px] font-bold text-slate-900">
                  Free
                </span>
                <span className="font-mono-code text-[11px] bg-white border border-slate-200 text-slate-600 px-2 py-0.5 rounded font-medium">
                  Starter
                </span>
              </div>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-[36px] sm:text-[40px] font-bold text-slate-900">
                  ₹0
                </span>
                <span className="text-[14px] text-slate-500">/ 1 month</span>
              </div>
              <p className="text-[14px] text-slate-500 mb-6">
                Essential curation for casual job hunters exploring new options.
              </p>
              <ul className="space-y-3 text-[14px] text-slate-800 mb-8">
                <li className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-blue-600 !text-[18px]">
                    check
                  </span>
                  <span>5 curated jobs / day</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-blue-600 !text-[18px]">
                    check
                  </span>
                  <span>2 major job portals scanned</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-blue-600 !text-[18px]">
                    check
                  </span>
                  <span>2 active alert configurations</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-blue-600 !text-[18px]">
                    check
                  </span>
                  <span>1 month validity</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-blue-600 !text-[18px]">
                    check
                  </span>
                  <span>Standard morning email delivery</span>
                </li>
              </ul>
            </div>
            <Link
              href="/create-alert"
              className="w-full inline-flex items-center justify-center bg-white hover:bg-slate-100 text-slate-800 font-semibold text-[14px] py-3 rounded-xl border border-slate-200 shadow-2xs transition-all text-center"
            >
              Get Started Free
            </Link>
          </div>

          {/* Tier 2: Pro (Popular Badge) */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-blue-600 shadow-xl flex flex-col justify-between relative transform md:-translate-y-2">
            {/* Popular Ribbon */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white font-mono-code text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
              Most Popular
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[20px] font-bold text-slate-900">
                  Pro
                </span>
                <span className="font-mono-code text-[11px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-bold">
                  Recommended
                </span>
              </div>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-[36px] sm:text-[40px] font-bold text-slate-900">
                  ₹9
                </span>
                <span className="text-[14px] text-slate-500">/ 1 month</span>
              </div>
              <p className="text-[14px] text-slate-500 mb-6">
                Double the reach and accelerated matching for active job hunters.
              </p>
              <ul className="space-y-3 text-[14px] text-slate-800 mb-8">
                <li className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-blue-600 !text-[18px]">
                    check
                  </span>
                  <span className="font-semibold text-slate-900">
                    10 curated jobs / day
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-blue-600 !text-[18px]">
                    check
                  </span>
                  <span>4 job portals scanned</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-blue-600 !text-[18px]">
                    check
                  </span>
                  <span>6 active alert configurations</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-blue-600 !text-[18px]">
                    check
                  </span>
                  <span>Priority algorithmic matching</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-blue-600 !text-[18px]">
                    check
                  </span>
                  <span>1 month validity</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-blue-600 !text-[18px]">
                    check
                  </span>
                  <span>Email delivery + direct ATS links</span>
                </li>
              </ul>
            </div>
            <Link
              href="/pricing"
              className="w-full inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold text-[14px] py-3 rounded-xl shadow-md hover:shadow-lg transition-all text-center"
            >
              Upgrade to Pro
            </Link>
          </div>

          {/* Tier 3: Premium */}
          <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[20px] font-bold text-slate-900">
                  Premium
                </span>
                <span className="font-mono-code text-[11px] bg-white border border-slate-200 text-slate-600 px-2 py-0.5 rounded font-medium">
                  Comprehensive
                </span>
              </div>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-[36px] sm:text-[40px] font-bold text-slate-900">
                  ₹19
                </span>
                <span className="text-[14px] text-slate-500">/ 2 months</span>
              </div>
              <p className="text-[14px] text-slate-500 mb-6">
                Maximum automation breadth with extended validity for career shifts.
              </p>
              <ul className="space-y-3 text-[14px] text-slate-800 mb-8">
                <li className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-blue-600 !text-[18px]">
                    check
                  </span>
                  <span className="font-semibold text-slate-900">
                    15 curated jobs / day
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-blue-600 !text-[18px]">
                    check
                  </span>
                  <span>All 5 job portals scanned</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-blue-600 !text-[18px]">
                    check
                  </span>
                  <span>10 active alert configurations</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-blue-600 !text-[18px]">
                    check
                  </span>
                  <span>2 months extended validity</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-blue-600 !text-[18px]">
                    check
                  </span>
                  <span>Dedicated support assistance</span>
                </li>
              </ul>
            </div>
            <Link
              href="/pricing"
              className="w-full inline-flex items-center justify-center bg-white hover:bg-slate-100 text-slate-800 font-semibold text-[14px] py-3 rounded-xl border border-slate-200 shadow-2xs transition-all text-center"
            >
              Get Premium
            </Link>
          </div>
        </div>

        <div className="text-center mt-8">
          <span className="font-mono-code text-[12px] text-slate-500">
            Note: Plans and availability may change as JobHawk expands. All prices are in Indian Rupees (INR).
          </span>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
