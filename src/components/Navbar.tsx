"use client";

import React, { useState } from "react";
import { Sparkles, TrendingUp, Compass, Calculator, Flame, BookOpen, ShieldCheck } from "lucide-react";

interface NavbarProps {
  onOpenLeadModal: () => void;
}

export default function Navbar({ onOpenLeadModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-surface-border/60 bg-surface-base/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-cuan-600 shadow-glow transition-transform group-hover:scale-105">
            <TrendingUp className="h-5 w-5 text-surface-base stroke-[2.5]" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-extrabold tracking-tight text-white">
                CUAN<span className="text-cuan-400">ISME</span>
              </span>
              <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400 border border-emerald-500/20">
                PRO v1.0
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">
              Navigasi Cuan & Side-Hustle #1
            </p>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-surface-border bg-surface-card/60 p-1 text-xs font-medium text-slate-300">
          <a
            href="#cuan-meter"
            className="flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-colors hover:bg-surface-hover hover:text-white"
          >
            <Compass className="h-3.5 w-3.5 text-cuan-400" />
            CuanMeter™
          </a>
          <a
            href="#harga-cuan"
            className="flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-colors hover:bg-surface-hover hover:text-white"
          >
            <Calculator className="h-3.5 w-3.5 text-cyan-400" />
            HargaCuan™
          </a>
          <a
            href="#fire-radar"
            className="flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-colors hover:bg-surface-hover hover:text-white"
          >
            <Flame className="h-3.5 w-3.5 text-amber-400" />
            Radar FIRE
          </a>
          <a
            href="#playbooks"
            className="flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-colors hover:bg-surface-hover hover:text-white"
          >
            <BookOpen className="h-3.5 w-3.5 text-purple-400" />
            48+ Ide Cuan
          </a>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenLeadModal}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-3.5 py-2 text-xs font-semibold text-surface-base shadow-glow transition-all hover:opacity-95 hover:shadow-glow-lg active:scale-95"
          >
            <Sparkles className="h-3.5 w-3.5 animate-pulse text-surface-base" />
            <span>Blueprint 30 Hari</span>
            <span className="hidden lg:inline-block rounded bg-black/20 px-1.5 py-0.5 text-[10px] text-surface-base font-bold">
              GRATIS
            </span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex md:hidden rounded-lg border border-surface-border p-2 text-slate-300 hover:bg-surface-hover"
            aria-label="Toggle menu"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-surface-border bg-surface-card px-4 py-3 md:hidden">
          <div className="flex flex-col gap-2 text-sm font-medium">
            <a
              href="#cuan-meter"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-slate-200 hover:bg-surface-hover"
            >
              <Compass className="h-4 w-4 text-cuan-400" />
              CuanMeter™ (Simulator Ide)
            </a>
            <a
              href="#harga-cuan"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-slate-200 hover:bg-surface-hover"
            >
              <Calculator className="h-4 w-4 text-cyan-400" />
              HargaCuan™ (Rate Freelance)
            </a>
            <a
              href="#fire-radar"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-slate-200 hover:bg-surface-hover"
            >
              <Flame className="h-4 w-4 text-amber-400" />
              Radar FIRE (Kemandirian Finansial)
            </a>
            <a
              href="#playbooks"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-slate-200 hover:bg-surface-hover"
            >
              <BookOpen className="h-4 w-4 text-purple-400" />
              48+ Playbook Ide Cuan
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
