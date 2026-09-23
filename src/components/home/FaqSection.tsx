"use client";
import React, { useState } from "react";

const faqData = [
  {
    q: "How do I receive job alerts?",
    a: "JobHawk sends a consolidated digest straight to your verified email address every morning. No need to log into any platform or install mobile apps.",
  },
  {
    q: "Can I customize the time I receive job emails?",
    a: "Yes! While 9:00 AM local time is our default standard, Pro and Premium subscribers can configure their delivery time window inside their alert preferences.",
  },
  {
    q: "Which platforms do you get jobs from?",
    a: "JobHawk aggregates from top portals including LinkedIn, Indeed, Wellfound (AngelList), Naukri, and directly scrapes leading enterprise ATS feeds like Greenhouse, Lever, and Ashby.",
  },
  {
    q: "Do I need to upload my resume?",
    a: "No. JobHawk matches jobs based on your exact text criteria (title, tech stack, minimum pay, and remote preferences). You apply directly on original portals using your own resume.",
  },
  {
    q: "Is JobHawk completely automated?",
    a: "Yes. Once you define your alert parameters, our scraping engines and curation bots continuously work in the background without requiring manual intervention.",
  },
  {
    q: "What happens after my plan expires?",
    a: "When your plan validity ends, your account smoothly pauses without surprise auto-charges. You can renew anytime with a single click to resume morning digests.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-slate-50 py-16 md:py-24" id="faq">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[12px] uppercase font-semibold tracking-wider text-blue-600 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">
            Frequently Asked
          </span>
          <h2 className="text-[28px] sm:text-[36px] font-bold text-slate-900 tracking-tight mt-4">
            Questions &amp; Answers
          </h2>
        </div>

        {/* Accordion items */}
        <div className="space-y-3">
          {faqData.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleAccordion(i)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between text-[16px] text-slate-900 font-semibold hover:text-blue-600 transition-colors focus:outline-none"
                >
                  <span className="pr-4">{item.q}</span>
                  <span
                    className={`material-symbols-outlined text-slate-400 transform transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 text-blue-600" : ""
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-[14px] sm:text-[15px] text-slate-600 leading-relaxed border-t border-slate-100">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
