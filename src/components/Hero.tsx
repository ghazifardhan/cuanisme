"use client";

import React from "react";
import { ArrowDown, CheckCircle2, DollarSign, Flame, Sparkles, TrendingUp, Users, Zap } from "lucide-react";

interface HeroProps {
  onExplorePlaybooks: () => void;
  onOpenLeadModal: () => void;
}

export default function Hero({ onExplorePlaybooks, onOpenLeadModal }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 border-b border-surface-border/40">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[400px] w-[600px] rounded-full bg-emerald-500/10 blur-[130px]" />
        <div className="h-[300px] w-[400px] rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-cuan-500/30 bg-cuan-950/60 px-3.5 py-1 text-xs font-medium text-cuan-300 backdrop-blur-sm mb-6">
            <span className="flex h-2 w-2 rounded-full bg-cuan-400 animate-ping" />
            <span>Update 2026: Mesin Validasi & Finansial Solopreneur RI</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            Stop Tebak-Tebakan. <br />
            <span className="text-gradient">Hitung Potensi Cuan Nyata</span> <br className="hidden sm:inline" />
            Sebelum Boncos.
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Simulator kelayakan bisnis & side-hustle dalam 60 detik. Dilengkapi kalkulator rate freelancer anti-banting harga, radar FIRE rupiah, dan 48+ blueprint tervalidasi pasar Indonesia.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#cuan-meter"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-cuan-500 px-6 py-3.5 text-sm font-bold text-surface-base shadow-glow hover:bg-cuan-400 hover:shadow-glow-lg transition-all active:scale-95"
            >
              <Zap className="h-4 w-4 fill-surface-base" />
              <span>Cek Kelayakan Ide Sekarang</span>
              <ArrowDown className="h-4 w-4" />
            </a>

            <button
              onClick={onExplorePlaybooks}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-surface-border bg-surface-card/80 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:bg-surface-hover hover:border-slate-600 transition-all active:scale-95"
            >
              <Sparkles className="h-4 w-4 text-purple-400" />
              <span>Jelajahi 48+ Ide Cuan Modal Ringan</span>
            </button>
          </div>

          {/* Micro trust indicators */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-cuan-400" />
              <span>100% Gratis Tanpa Registrasi Wajib</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-cuan-400" />
              <span>Rumus Pajak UMKM PP 55 & Inflasi RI</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-cuan-400" />
              <span>Hasil Siap Share ke WhatsApp & X</span>
            </div>
          </div>
        </div>

        {/* Live Metrics Grid Bar */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          <div className="rounded-2xl border border-surface-border bg-surface-card/60 p-4 text-center backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-white">48+</div>
            <div className="text-xs font-medium text-slate-400 mt-1">Blueprint Ide Teruji</div>
            <div className="text-[10px] text-cuan-400 mt-0.5">Filter Modal &lt; Rp 500rb</div>
          </div>

          <div className="rounded-2xl border border-surface-border bg-surface-card/60 p-4 text-center backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">Rp 0 - 50Jt</div>
            <div className="text-xs font-medium text-slate-400 mt-1">Simulasi Modal Fleksibel</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Skala Mahasiswa s/d Pro</div>
          </div>

          <div className="rounded-2xl border border-surface-border bg-surface-card/60 p-4 text-center backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">&lt; 60 Detik</div>
            <div className="text-xs font-medium text-slate-400 mt-1">Diagnosa Kelayakan</div>
            <div className="text-[10px] text-cyan-400 mt-0.5">7-Day Action Plan Instan</div>
          </div>

          <div className="rounded-2xl border border-surface-border bg-surface-card/60 p-4 text-center backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">100% Riil</div>
            <div className="text-xs font-medium text-slate-400 mt-1">Bebas MLM & Halu</div>
            <div className="text-[10px] text-amber-400 mt-0.5">Matematika Margin Bersih</div>
          </div>
        </div>
      </div>
    </section>
  );
}
