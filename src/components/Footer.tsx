import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-50 border-t border-slate-200 py-16 text-slate-600">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/70 p-1.5 flex items-center justify-center shadow-xs">
                <Image
                  src="/logo-icon.png"
                  alt="JobHawk Logo"
                  width={26}
                  height={26}
                  className="object-contain"
                />
              </div>
              <span className="text-[20px] font-bold text-slate-900 tracking-tight">
                JobHawk
              </span>
            </Link>
            <p className="text-[14px] text-slate-500 max-w-sm leading-relaxed">
              Engineering-grade career automation platform. Streamline your job
              hunt with telemetry precision, multi-portal ATS crawling, and
              verified morning digest delivery.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[12px] font-medium border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Telemetry Active</span>
              </span>
              <span className="text-[12px] text-slate-400 font-mono-code">
                Daily 9:00 AM Dispatch
              </span>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-[13px] font-semibold text-slate-900 uppercase tracking-wider mb-4">
              Product
            </h4>
            <ul className="space-y-2.5 text-[14px]">
              <li>
                <Link
                  href="/#how-it-works"
                  className="hover:text-blue-600 transition-colors"
                >
                  How it Works
                </Link>
              </li>
              <li>
                <Link
                  href="/#features"
                  className="hover:text-blue-600 transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-blue-600 transition-colors"
                >
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="hover:text-blue-600 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/create-alert"
                  className="hover:text-blue-600 transition-colors"
                >
                  Create Alert
                </Link>
              </li>
            </ul>
          </div>

          {/* Account Links */}
          <div>
            <h4 className="text-[13px] font-semibold text-slate-900 uppercase tracking-wider mb-4">
              Account
            </h4>
            <ul className="space-y-2.5 text-[14px]">
              <li>
                <Link
                  href="/login"
                  className="hover:text-blue-600 transition-colors"
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="hover:text-blue-600 transition-colors"
                >
                  Create Account
                </Link>
              </li>
              <li>
                <Link
                  href="/profile/userinfo"
                  className="hover:text-blue-600 transition-colors"
                >
                  User Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/password/reset"
                  className="hover:text-blue-600 transition-colors"
                >
                  Reset Password
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Contact Info (Requested by User) */}
          <div>
            <h4 className="text-[13px] font-semibold text-slate-900 uppercase tracking-wider mb-4">
              Legal &amp; Contact
            </h4>
            <ul className="space-y-2.5 text-[14px]">
              <li className="text-slate-800 font-medium">
                <span className="text-slate-400 block text-[11px] uppercase tracking-wider">
                  Entity / Developer
                </span>
                <span>Arpit Kumar Agrahari</span>
              </li>
              <li>
                <span className="text-slate-400 block text-[11px] uppercase tracking-wider">
                  Official Email
                </span>
                <a
                  href="mailto:omagrahari55@gmail.com"
                  className="text-blue-600 hover:underline break-all"
                >
                  omagrahari55@gmail.com
                </a>
              </li>
              <li>
                <span className="text-slate-400 block text-[11px] uppercase tracking-wider">
                  Support Contact
                </span>
                <a
                  href="tel:9599056856"
                  className="text-slate-700 hover:text-blue-600 transition-colors"
                >
                  +91 9599056856
                </a>
              </li>
              <li className="pt-1 flex gap-3 text-[13px] text-slate-400">
                <span>Privacy</span>
                <span>•</span>
                <span>Terms</span>
                <span>•</span>
                <span>Security</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-slate-200/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-slate-500">
          <div>
            © 2026 JobHawk. All rights reserved. Operated by{" "}
            <span className="font-semibold text-slate-700">
              Arpit Kumar Agrahari
            </span>
            .
          </div>
          <div className="font-mono-code text-[12px] text-slate-400">
            Latency: 18ms • v2.4.0-stable
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;