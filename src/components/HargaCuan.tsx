"use client";

import React, { useState, useMemo } from "react";
import {
  Calculator,
  DollarSign,
  Clock,
  Briefcase,
  Copy,
  Check,
  ShieldCheck,
  Send,
  Sparkles,
  Info,
} from "lucide-react";
import {
  calculateFreelanceRate,
  formatRupiah,
  formatCompactRupiah,
  FreelanceInput,
} from "@/lib/calculator";

export default function HargaCuan() {
  const [targetNetMonthly, setTargetNetMonthly] = useState<number>(10000000);
  const [monthlyExpenses, setMonthlyExpenses] = useState<number>(1800000);
  const [billableHoursPerWeek, setBillableHoursPerWeek] = useState<number>(20);
  const [annualVacationWeeks, setAnnualVacationWeeks] = useState<number>(4);
  const [bufferMarginPct, setBufferMarginPct] = useState<number>(25);
  const [taxMode, setTaxMode] = useState<FreelanceInput["taxMode"]>("pp55");

  const [copiedPitch, setCopiedPitch] = useState(false);

  const result = useMemo(() => {
    return calculateFreelanceRate({
      targetNetIncomeMonthly: targetNetMonthly,
      monthlyExpenses,
      billableHoursPerWeek,
      annualVacationWeeks,
      bufferMarginPct,
      taxMode,
    });
  }, [
    targetNetMonthly,
    monthlyExpenses,
    billableHoursPerWeek,
    annualVacationWeeks,
    bufferMarginPct,
    taxMode,
  ]);

  const handleCopyPitch = () => {
    navigator.clipboard.writeText(result.proposalSummaryText);
    setCopiedPitch(true);
    setTimeout(() => setCopiedPitch(false), 2500);
  };

  return (
    <section id="harga-cuan" className="py-16 md:py-24 border-b border-surface-border/40 bg-surface-card/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-950/40 px-3 py-1 text-xs font-semibold text-cyan-300 mb-3">
            <Calculator className="h-3.5 w-3.5 text-cyan-400" />
            <span>MODUL 2 • RATE CARD FREELANCER ANTI-BONCOS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            HargaCuan™: Hitung Nilai Jual & Rate Jasamu
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Stop pasang harga asal-asalan. Hitung rate card per jam, harian, dan paket proyek berdasarkan target take-home pay, jam kerja riil, biaya tools, dan pajak UMKM.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Inputs (6 cols) */}
          <div className="lg:col-span-6 space-y-5 rounded-2xl border border-surface-border bg-surface-card p-6 sm:p-7 shadow-xl">
            {/* Input 1: Target Take Home */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-slate-200">
                  Target Gaji Bersih / Bulan
                </label>
                <span className="text-base font-bold text-cyan-400">
                  {formatRupiah(targetNetMonthly)}
                </span>
              </div>
              <input
                type="range"
                min="3000000"
                max="35000000"
                step="500000"
                value={targetNetMonthly}
                onChange={(e) => setTargetNetMonthly(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer h-2 bg-surface-border rounded-lg"
              />
              <div className="mt-1 flex justify-between text-[11px] text-slate-400">
                <span>Rp 3 Jt (Pemula)</span>
                <span>Rp 10-15 Jt (Pro Mid)</span>
                <span>Rp 35 Jt (Senior)</span>
              </div>
            </div>

            {/* Input 2: Biaya Operasional / Tools */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-slate-200">
                  Biaya Operasional & Tools Bulanan
                </label>
                <span className="text-sm font-bold text-slate-200">
                  {formatRupiah(monthlyExpenses)}
                </span>
              </div>
              <input
                type="range"
                min="300000"
                max="8000000"
                step="250000"
                value={monthlyExpenses}
                onChange={(e) => setMonthlyExpenses(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer h-2 bg-surface-border rounded-lg"
              />
              <span className="text-[11px] text-slate-400">
                Internet, Canva/Adobe, AI subscription, listrik, coworking.
              </span>
            </div>

            {/* Input 3: Billable Hours */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-slate-200 block mb-1">
                  Jam Kerja Riil (Billable) / Minggu
                </label>
                <input
                  type="number"
                  min="5"
                  max="50"
                  value={billableHoursPerWeek}
                  onChange={(e) => setBillableHoursPerWeek(Number(e.target.value))}
                  className="w-full rounded-xl border border-surface-border bg-surface-base px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-400"
                />
                <span className="text-[10px] text-slate-400 mt-1 block">
                  Rekomendasi: 20 jam (sisanya admin & pitching).
                </span>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-200 block mb-1">
                  Jatah Libur / Cuti Setahun
                </label>
                <input
                  type="number"
                  min="0"
                  max="12"
                  value={annualVacationWeeks}
                  onChange={(e) => setAnnualVacationWeeks(Number(e.target.value))}
                  className="w-full rounded-xl border border-surface-border bg-surface-base px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-400"
                />
                <span className="text-[10px] text-slate-400 mt-1 block">
                  Minggu istirahat tanpa klien (standar 4 minggu).
                </span>
              </div>
            </div>

            {/* Input 4: Buffer Safety & Tax Mode */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div>
                <label className="text-xs font-semibold text-slate-200 block mb-1.5">
                  Buffer Risiko & Bench ({bufferMarginPct}%)
                </label>
                <div className="flex gap-1.5">
                  {[15, 25, 35].map((pct) => (
                    <button
                      key={pct}
                      type="button"
                      onClick={() => setBufferMarginPct(pct)}
                      className={`flex-1 rounded-lg py-1.5 text-xs font-semibold transition-all ${
                        bufferMarginPct === pct
                          ? "bg-cyan-500 text-surface-base"
                          : "bg-surface-hover text-slate-400 hover:text-white"
                      }`}
                    >
                      {pct}%
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-200 block mb-1.5">
                  Model Pajak Penghasilan
                </label>
                <div className="flex gap-1.5">
                  <button
                    type="button"
                    onClick={() => setTaxMode("pp55")}
                    className={`flex-1 rounded-lg py-1.5 text-xs font-semibold transition-all ${
                      taxMode === "pp55"
                        ? "bg-emerald-500 text-surface-base"
                        : "bg-surface-hover text-slate-400 hover:text-white"
                    }`}
                  >
                    PP 55 (0.5%)
                  </button>
                  <button
                    type="button"
                    onClick={() => setTaxMode("pph21")}
                    className={`flex-1 rounded-lg py-1.5 text-xs font-semibold transition-all ${
                      taxMode === "pph21"
                        ? "bg-emerald-500 text-surface-base"
                        : "bg-surface-hover text-slate-400 hover:text-white"
                    }`}
                  >
                    PPh 21 Pro
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Results Column (6 cols) */}
          <div className="lg:col-span-6 space-y-5">
            {/* Rate Display Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/40 to-surface-card p-5 shadow-lg">
                <span className="text-xs font-semibold text-cyan-300 uppercase tracking-wider">
                  Rate Minimum / Jam
                </span>
                <div className="mt-2 text-2xl sm:text-3xl font-black text-white">
                  {formatRupiah(result.hourlyRate)}
                </div>
                <span className="text-[11px] text-slate-400 mt-1 block">
                  Angka keramat: di bawah ini kamu boncos!
                </span>
              </div>

              <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/40 to-surface-card p-5 shadow-lg">
                <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">
                  Rate Harian (7 Jam)
                </span>
                <div className="mt-2 text-2xl sm:text-3xl font-black text-white">
                  {formatRupiah(result.dailyRate)}
                </div>
                <span className="text-[11px] text-slate-400 mt-1 block">
                  Ideal untuk retain konsultan lepas / sprint.
                </span>
              </div>
            </div>

            {/* 3-Tier Package Recommendation */}
            <div className="rounded-2xl border border-surface-border bg-surface-card p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                  3-Tier Paket Penawaran Klien
                </span>
                <span className="text-[11px] text-cuan-400 font-medium">
                  Rekomendasi Closing Cepat
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2.5 text-center">
                <div className="rounded-xl border border-surface-border bg-surface-base/80 p-3">
                  <div className="text-[11px] text-slate-400 font-semibold">Tier Starter</div>
                  <div className="text-xs text-slate-400 mt-0.5">Ruang lingkup mikro</div>
                  <div className="mt-2 text-sm font-extrabold text-white">
                    {formatRupiah(result.tierPricing.starter)}
                  </div>
                </div>

                <div className="rounded-xl border border-cyan-500/40 bg-cyan-950/30 p-3 relative">
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full bg-cyan-400 px-2 py-0.5 text-[9px] font-black text-surface-base">
                    BEST VALUE
                  </span>
                  <div className="text-[11px] text-cyan-300 font-semibold">Tier Standar</div>
                  <div className="text-xs text-slate-400 mt-0.5">Rekomendasi utama</div>
                  <div className="mt-2 text-sm font-extrabold text-cyan-300">
                    {formatRupiah(result.tierPricing.standard)}
                  </div>
                </div>

                <div className="rounded-xl border border-surface-border bg-surface-base/80 p-3">
                  <div className="text-[11px] text-slate-400 font-semibold">Tier VIP Pro</div>
                  <div className="text-xs text-slate-400 mt-0.5">Prioritas + Support</div>
                  <div className="mt-2 text-sm font-extrabold text-purple-300">
                    {formatRupiah(result.tierPricing.premium)}
                  </div>
                </div>
              </div>

              {/* Ready-to-copy Proposal Pitch */}
              <div className="mt-5 rounded-xl border border-surface-border/70 bg-surface-base/60 p-3.5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-semibold text-slate-300 flex items-center gap-1.5">
                    <Send className="h-3 w-3 text-cyan-400" />
                    Template Chat Penawaran ke Klien (WhatsApp)
                  </span>
                  <button
                    onClick={handleCopyPitch}
                    className="inline-flex items-center gap-1 text-[11px] text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    {copiedPitch ? (
                      <>
                        <Check className="h-3 w-3 text-emerald-400" />
                        <span className="text-emerald-400">Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        <span>Copy Draft</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-xs text-slate-400 italic leading-relaxed">
                  &ldquo;{result.proposalSummaryText}&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
