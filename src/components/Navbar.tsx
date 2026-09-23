"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Drawer } from "@mui/material";

type User = {
  id: string;
  name: string;
  email: string;
} | null;

const Navbar = ({ user }: { user?: User }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_2px_15px_-4px_rgba(0,0,0,0.03)] transition-all">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <Link
            href="/"
            className="flex items-center gap-3 group transition-transform hover:scale-[1.01]"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/70 p-1.5 flex items-center justify-center shadow-xs group-hover:border-blue-300 transition-colors">
              <Image
                src="/logo-icon.png"
                alt="JobHawk Icon"
                width={26}
                height={26}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[19px] font-bold text-slate-900 tracking-tight">
                JobHawk
              </span>
              <span className="hidden sm:inline-flex text-[10px] font-mono-code font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/60 px-1.5 py-0.5 rounded-md">
                Auto
              </span>
            </div>
          </Link>

          {/* Center Navigation Links - Modern Pill Container */}
          <nav className="hidden md:flex items-center bg-slate-100/70 border border-slate-200/60 p-1 rounded-full">
            <Link
              href="/"
              className="text-[13px] font-medium text-slate-700 hover:text-blue-600 hover:bg-white px-3.5 py-1.5 rounded-full transition-all"
            >
              Home
            </Link>
            <Link
              href="/pricing"
              className="text-[13px] font-medium text-slate-700 hover:text-blue-600 hover:bg-white px-3.5 py-1.5 rounded-full transition-all"
            >
              Pricing
            </Link>
            <Link
              href="/create-alert"
              className="text-[13px] font-medium text-slate-700 hover:text-blue-600 hover:bg-white px-3.5 py-1.5 rounded-full transition-all"
            >
              Create Alert
            </Link>
            <Link
              href="/#how-it-works"
              className="text-[13px] font-medium text-slate-700 hover:text-blue-600 hover:bg-white px-3.5 py-1.5 rounded-full transition-all"
            >
              How it Works
            </Link>
            <Link
              href="/#faq"
              className="text-[13px] font-medium text-slate-700 hover:text-blue-600 hover:bg-white px-3.5 py-1.5 rounded-full transition-all"
            >
              FAQ
            </Link>
          </nav>

          {/* Desktop Right Action Area */}
          <div className="hidden md:flex items-center gap-3">
            {user == null ? (
              <>
                <Link
                  href="/login"
                  className="text-[13px] font-medium text-slate-600 hover:text-slate-900 px-3.5 py-1.5 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  Log in
                </Link>
                {/* "Get Started" links to /create-alert as requested */}
                <Link
                  href="/create-alert"
                  className="inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-[13px] font-semibold px-4.5 py-2 rounded-full shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all"
                >
                  <span>Get Started</span>
                  <span className="material-symbols-outlined !text-[16px]">
                    arrow_forward
                  </span>
                </Link>
              </>
            ) : (
              <div className="flex items-center gap-2.5">
                <Link
                  href="/create-alert"
                  className="text-[13px] font-medium text-blue-600 hover:text-blue-700 px-3 py-1.5 rounded-lg hover:bg-blue-50/70 transition-colors"
                >
                  + Create Alert
                </Link>
                <Link
                  href="/profile/userinfo"
                  className="inline-flex items-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-800 text-[13px] font-medium px-3 py-1.5 rounded-full border border-slate-200 transition-all"
                >
                  <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[11px] font-bold">
                    {user.name ? user.name[0].toUpperCase() : "U"}
                  </div>
                  <span>{user.name || "Profile"}</span>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/create-alert"
              className="text-[12px] font-semibold bg-blue-600 text-white px-3 py-1.5 rounded-full shadow-xs"
            >
              Get Started
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              className="p-1.5 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
            >
              <span className="material-symbols-outlined !text-[26px]">
                menu
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: "82%",
            maxWidth: "340px",
            backgroundColor: "#FFFFFF",
            p: 3,
          },
        }}
      >
        <div className="flex flex-col h-full justify-between">
          <div>
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-5 border-b border-slate-100">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200/60 p-1 flex items-center justify-center">
                  <Image
                    src="/logo-icon.png"
                    alt="JobHawk Logo"
                    width={22}
                    height={22}
                    className="object-contain"
                  />
                </div>
                <span className="text-[18px] font-bold text-slate-900">
                  JobHawk
                </span>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100"
              >
                <span className="material-symbols-outlined !text-[20px]">
                  close
                </span>
              </button>
            </div>

            {/* Nav List */}
            <nav className="flex flex-col gap-1 mt-6">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 text-[15px] font-medium text-slate-700 hover:text-blue-600 px-3.5 py-2.5 rounded-xl hover:bg-slate-50 transition-colors"
              >
                <span className="material-symbols-outlined !text-[18px] text-slate-400">
                  home
                </span>
                <span>Home</span>
              </Link>
              <Link
                href="/pricing"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 text-[15px] font-medium text-slate-700 hover:text-blue-600 px-3.5 py-2.5 rounded-xl hover:bg-slate-50 transition-colors"
              >
                <span className="material-symbols-outlined !text-[18px] text-slate-400">
                  sell
                </span>
                <span>Pricing</span>
              </Link>
              <Link
                href="/create-alert"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 text-[15px] font-medium text-slate-700 hover:text-blue-600 px-3.5 py-2.5 rounded-xl hover:bg-slate-50 transition-colors"
              >
                <span className="material-symbols-outlined !text-[18px] text-slate-400">
                  add_alert
                </span>
                <span>Create Alert</span>
              </Link>
              <Link
                href="/#how-it-works"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 text-[15px] font-medium text-slate-700 hover:text-blue-600 px-3.5 py-2.5 rounded-xl hover:bg-slate-50 transition-colors"
              >
                <span className="material-symbols-outlined !text-[18px] text-slate-400">
                  account_tree
                </span>
                <span>How it Works</span>
              </Link>
              <Link
                href="/#faq"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 text-[15px] font-medium text-slate-700 hover:text-blue-600 px-3.5 py-2.5 rounded-xl hover:bg-slate-50 transition-colors"
              >
                <span className="material-symbols-outlined !text-[18px] text-slate-400">
                  quiz
                </span>
                <span>FAQ</span>
              </Link>
            </nav>
          </div>

          {/* Drawer Footer Actions */}
          <div className="pt-6 border-t border-slate-100 flex flex-col gap-2.5">
            {user == null ? (
              <>
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="w-full text-center text-[14px] font-medium text-slate-700 hover:bg-slate-100 py-2.5 rounded-xl border border-slate-200 transition-colors"
                >
                  Log in
                </Link>
                <Link
                  href="/create-alert"
                  onClick={() => setMobileOpen(false)}
                  className="w-full text-center text-[14px] font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2.5 rounded-xl shadow-sm transition-colors"
                >
                  Get Started (Create Alert)
                </Link>
              </>
            ) : (
              <Link
                href="/profile/userinfo"
                onClick={() => setMobileOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-blue-50 text-blue-700 text-[14px] font-medium py-2.5 rounded-xl transition-colors"
              >
                <span className="material-symbols-outlined !text-[18px]">
                  person
                </span>
                <span>My Profile</span>
              </Link>
            )}
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;