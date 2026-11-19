"use client";

import React, { useState, useMemo } from "react";
import {
  Flame,
  ShieldAlert,
  ShieldCheck,
  TrendingUp,
  Clock,
  Sparkles,
  Info,
  DollarSign,
  PiggyBank,
} from "lucide-react";
import {
  calculateFireRadar,
  formatRupiah,
  formatCompactRupiah,
} from "@/lib/calculator";

export default function FireRadar() {
  const [monthlyExpenses, setMonthlyExpenses] = useState<number>(6500000);
  const [currentSavings, setCurrentSavings] = useState<number>(35000000);
  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(3000000);
  const [annualReturnPct, setAnnualReturnPct] = useState<number>(7.5);
  const [inflationPct, setInflationPct] = useState<number>(4.0);

  const result = useMemo(() => {
    return calculateFireRadar({
      monthlyExpenses,
      currentSavings,
      monthlyInvestment,
      annualReturnPct,
      inflationPct,
    });
  }, [
    monthlyExpenses,
    currentSavings,
    monthlyInvestment,
    annualReturnPct,
    inflationPct,
  ]);

  return (
    <section id="fire-radar" className="py-16 md:py-24 border-b border-surface-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-950/40 px-3 py-1 text-xs font-semibold text-amber-300 mb-3">
            <Flame className="h-3.5 w-3.5 text-amber-400" />
            <span>MODUL 3 • RADAR FIRE INDONESIA</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Radar FIRE: Kapan Bebas Cemas Finansial?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Simulasi kebebasan finansial (Financial Independence Retire Early) versi Rupiah. Ketahui runway darurat jika besok tanpa kerja dan angka target pensiun mandirimu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inputs Column (6 cols) */}
          <div className="lg:col-span-6 space-y-5 rounded-2xl border border-surface-border bg-surface-card p-6 sm:p-7 shadow-xl">
            {/* Input 1: Pengeluaran Bulanan */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-slate-200">
                  Pengeluaran Hidup Bulanan Riil
                </label>
                <span className="text-base font-bold text-amber-400">
                  {formatRupiah(monthlyExpenses)}
                </span>
              </div>
              <input
                type="range"
                min="2000000"
                max="30000000"
                step="500000"
                value={monthlyExpenses}
                onChange={(e) => setMonthlyExpenses(Number(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer h-2 bg-surface-border rounded-lg"
              />
              <span className="text-[11px] text-slate-400">
                Sewa/KPR, makan, transportasi, tagihan, hiburan.
              </span>
            </div>

            {/* Input 2: Tabungan & Portofolio Saat Ini */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-slate-200">
                  Tabungan & Investasi Likuid Saat Ini
                </label>
                <span className="text-base font-bold text-emerald-400">
                  {formatRupiah(currentSavings)}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="200000000"
                step="2500000"
                value={currentSavings}
                onChange={(e) => setCurrentSavings(Number(e.target.value))}
                className="w-full accent-emerald-400 cursor-pointer h-2 bg-surface-border rounded-lg"
              />
              <span className="text-[11px] text-slate-400">
                Rekening bank, reksadana pasar uang, SBN/emas yang bisa dicairkan.
              </span>
            </div>

            {/* Input 3: Investasi Rutin Bulanan */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-slate-200">
                  Investasi Rutin Bulanan (DCA)
                </label>
                <span className="text-base font-bold text-cyan-400">
                  {formatRupiah(monthlyInvestment)} / bln
                </span>
              </div>
              <input
                type="range"
                min="500000"
                max="20000000"
                step="500000"
                value={monthlyInvestment}
                onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer h-2 bg-surface-border rounded-lg"
              />
            </div>

            {/* Input 4: Return Rate & Inflation */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div>
                <label className="text-xs font-semibold text-slate-200 block mb-1">
                  Expected Return Portofolio
                </label>
                <div className="flex items-center gap-1.5">
                  {[6.5, 7.5, 10.0].map((rate) => (
                    <button
                      key={rate}
                      type="button"
                      onClick={() => setAnnualReturnPct(rate)}
                      className={`flex-1 rounded-lg py-1.5 text-xs font-semibold transition-all ${
                        annualReturnPct === rate
                          ? "bg-amber-500 text-surface-base"
                          : "bg-surface-hover text-slate-400 hover:text-white"
                      }`}
                    >
                      {rate}%
                    </button>
                  ))}
                </div>
                <span className="text-[10px] text-slate-400 mt-1 block">
                  6.5% SBN / 10% Saham
                </span>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-200 block mb-1">
                  Inflasi Riil Indonesia
                </label>
                <div className="flex items-center gap-1.5">
                  {[3.0, 4.0, 5.0].map((inf) => (
                    <button
                      key={inf}
                      type="button"
                      onClick={() => setInflationPct(inf)}
                      className={`flex-1 rounded-lg py-1.5 text-xs font-semibold transition-all ${
                        inflationPct === inf
                          ? "bg-rose-500 text-white"
                          : "bg-surface-hover text-slate-400 hover:text-white"
                      }`}
                    >
                      {inf}%
                    </button>
                  ))}
                </div>
                <span className="text-[10px] text-slate-400 mt-1 block">
                  Standar historis BPS: 3.5 - 4.5%
                </span>
              </div>
            </div>
          </div>

          {/* Results Column (6 cols) */}
          <div className="lg:col-span-6 space-y-5">
            {/* Top Cards: Runway & FIRE Number */}
            <div className="grid grid-cols-2 gap-4">
              {/* Emergency Runway */}
              <div className="rounded-2xl border border-surface-border bg-gradient-to-br from-surface-card to-surface-card/60 p-5 shadow-lg">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Runway Darurat (Zero Income)
                </span>
                <div className="mt-2 text-3xl font-black text-white">
                  {result.runwayMonths}{" "}
                  <span className="text-base font-normal text-slate-400">Bulan</span>
                </div>
                <div className="mt-2 flex items-center gap-1.5">
                  <span className={`text-xs font-bold ${result.emergencyFundColor}`}>
                    {result.emergencyFundStatus}
                  </span>
                </div>
              </div>

              {/* Years to FIRE */}
              <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-950/30 to-surface-card p-5 shadow-lg">
                <span className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
                  Target Kebebasan Finansial
                </span>
                <div className="mt-2 text-3xl font-black text-amber-300">
                  {result.yearsToFire >= 50 ? "> 40" : result.yearsToFire}{" "}
                  <span className="text-base font-normal text-slate-400">Tahun</span>
                </div>
                <span className="text-[11px] text-slate-400 mt-1 block">
                  Dengan investasi {formatCompactRupiah(monthlyInvestment)}/bln
                </span>
              </div>
            </div>

            {/* FIRE Breakdown Box */}
            <div className="rounded-2xl border border-surface-border bg-surface-card p-6 shadow-xl">
              <span className="text-xs font-bold text-slate-200 uppercase tracking-wider block mb-4">
                Target Portofolio Bebas Finansial (4% Rule)
              </span>

              <div className="space-y-3.5">
                <div className="flex items-center justify-between border-b border-surface-border/60 pb-3">
                  <div>
                    <div className="text-xs font-semibold text-slate-200">
                      Standard FIRE (Gaya Hidup Saat Ini)
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Passive income aman {formatRupiah(result.monthlyPassiveIncomeAtFire)} / bln
                    </div>
                  </div>
                  <div className="text-base font-extrabold text-emerald-400">
                    {formatCompactRupiah(result.fireNumber)}
                  </div>
                </div>

                <div className="flex items-center justify-between border-b border-surface-border/60 pb-3">
                  <div>
                    <div className="text-xs font-semibold text-slate-200">
                      Lean FIRE (Kebutuhan Esensial / Minimalis)
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Cukup untuk kebutuhan dasar sandang & pangan
                    </div>
                  </div>
                  <div className="text-base font-extrabold text-cyan-300">
                    {formatCompactRupiah(result.leanFireNumber)}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-slate-200">
                      Fat FIRE (Ekstra Nyaman & Traveling)
                    </div>
                    <div className="text-[11px] text-slate-400">
                      33x pengeluaran tahunan dengan buffer melimpah
                    </div>
                  </div>
                  <div className="text-base font-extrabold text-purple-300">
                    {formatCompactRupiah(result.fatFireNumber)}
                  </div>
                </div>
              </div>

              {/* Action Tip */}
              <div className="mt-5 rounded-xl bg-surface-base/80 p-3.5 border border-surface-border flex items-start gap-2.5">
                <Sparkles className="h-4 w-4 text-cuan-400 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong className="text-cuan-300">Akselerasi Cuanisme:</strong> Membangun 1 side-hustle yang menghasilkan Rp 3.000.000/bulan setara dengan memiliki portofolio investasi senilai <strong className="text-emerald-400">Rp 900.000.000</strong> di instrumen obligasi 4%!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
