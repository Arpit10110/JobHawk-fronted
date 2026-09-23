import React from "react";
import Link from "next/link";

const FinalCtaSection = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#0B0F19] overflow-hidden p-8 sm:p-12 md:p-16 text-center text-white shadow-2xl border border-slate-800">
          {/* Subtle layered blue ambient glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-600/20 blur-3xl pointer-events-none rounded-full"></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="font-mono-code text-[12px] text-blue-300 uppercase tracking-wider bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
              Automate Today
            </span>
            <h2 className="text-[32px] sm:text-[44px] md:text-[52px] font-bold text-white tracking-tight mt-5 mb-4 leading-tight">
              Stop refreshing.
              <br />
              Start discovering.
            </h2>
            <p className="text-[16px] sm:text-[18px] text-slate-300 mb-8 leading-relaxed">
              Join hundreds of proactive professionals who let JobHawk monitor the
              market while they sleep. Set up your alert in under 2 minutes.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/create-alert"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-[15px] px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <span>Create My Job Alerts</span>
                <span className="material-symbols-outlined !text-[18px]">
                  arrow_forward
                </span>
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/15 text-white font-medium text-[15px] px-6 py-3.5 rounded-xl border border-white/10 transition-all"
              >
                <span>View Pricing</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
