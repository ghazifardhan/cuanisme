"use client";

import React, { useState, useMemo } from "react";
import {
  Compass,
  DollarSign,
  Clock,
  Briefcase,
  ShieldAlert,
  Target,
  Sparkles,
  Share2,
  Copy,
  Check,
  ChevronRight,
  TrendingUp,
  AlertCircle,
  HelpCircle,
} from "lucide-react";
import {
  calculateViability,
  formatRupiah,
  formatCompactRupiah,
  ViabilityInput,
} from "@/lib/calculator";
import confetti from "canvas-confetti";

interface CuanMeterProps {
  onShareResult: (data: {
    score: number;
    verdict: string;
    modal: number;
    hours: number;
    targetIncome: number;
    estProfitMin: number;
    estProfitMax: number;
  }) => void;
}

export default function CuanMeter({ onShareResult }: CuanMeterProps) {
  const [modal, setModal] = useState<number>(1500000);
  const [hoursPerDay, setHoursPerDay] = useState<number>(3);
  const [skill, setSkill] = useState<ViabilityInput["skill"]>("design-content");
  const [risk, setRisk] = useState<ViabilityInput["risk"]>("moderate");
  const [targetIncome, setTargetIncome] = useState<number>(6000000);

  const [copiedPlan, setCopiedPlan] = useState(false);

  const result = useMemo(() => {
    return calculateViability({
      modal,
      hoursPerDay,
      skill,
      risk,
      targetIncome,
    });
  }, [modal, hoursPerDay, skill, risk, targetIncome]);

  const handleShare = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#10b981", "#06b6d4", "#f59e0b"],
      });
    } catch (e) {
      // ignore
    }
    onShareResult({
      score: result.score,
      verdict: result.verdict,
      modal,
      hours: hoursPerDay,
      targetIncome,
      estProfitMin: result.estMonthlyProfitMin,
      estProfitMax: result.estMonthlyProfitMax,
    });
  };

  const handleCopyPlan = () => {
    const text = `🎯 RENCANA EKSEKUSI CUAN 7 HARI (Skor Cuan: ${result.score}/100 - ${result.verdict})
Modal: ${formatRupiah(modal)} | Waktu: ${hoursPerDay} jam/hari | Target: ${formatRupiah(targetIncome)}/bulan

${result.actionPlan7Days.map((step) => `[${step.day}] ${step.title}: ${step.task}`).join("\n")}

Diuji dengan Cuanisme.id`;
    navigator.clipboard.writeText(text);
    setCopiedPlan(true);
    setTimeout(() => setCopiedPlan(false), 2500);
  };

  const modalPresets = [
    { label: "Rp 0 (Modal Jasa)", val: 0 },
    { label: "Rp 500 Rb", val: 500000 },
    { label: "Rp 2 Juta", val: 2000000 },
    { label: "Rp 5 Juta", val: 5000000 },
    { label: "Rp 15 Juta", val: 15000000 },
  ];

  return (
    <section id="cuan-meter" className="py-16 md:py-24 border-b border-surface-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-cuan-500/20 bg-cuan-950/40 px-3 py-1 text-xs font-semibold text-cuan-300 mb-3">
            <Compass className="h-3.5 w-3.5 text-cuan-400" />
            <span>MODUL 1 • SIMULATOR KELAYAKAN</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            CuanMeter™: Uji Ide & Validasi Peluang
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Masukkan modal dan sumber daya yang kamu miliki sekarang. Algoritma kami akan memetakan probabilitas cuan dan menyusun roadmap eksekusi 7 hari.
          </p>
        </div>

        {/* Main Grid: Input Column & Live Result Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 rounded-2xl border border-surface-border bg-surface-card p-6 sm:p-8 shadow-xl">
            {/* Input 1: Modal Awal */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                  <DollarSign className="h-4 w-4 text-emerald-400" />
                  <span>Modal Awal yang Disiapkan</span>
                </label>
                <span className="text-base font-bold text-emerald-400">
                  {formatRupiah(modal)}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="25000000"
                step="250000"
                value={modal}
                onChange={(e) => setModal(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer h-2 bg-surface-border rounded-lg"
              />
              {/* Presets */}
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {modalPresets.map((p) => (
                  <button
                    key={p.val}
                    type="button"
                    onClick={() => setModal(p.val)}
                    className={`rounded-lg px-2.5 py-1 text-xs font-medium transition-colors ${
                      modal === p.val
                        ? "bg-emerald-500 text-surface-base font-semibold"
                        : "bg-surface-hover text-slate-400 hover:text-white"
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Input 2: Alokasi Waktu Harian */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                  <Clock className="h-4 w-4 text-cyan-400" />
                  <span>Alokasi Waktu Komitmen Harian</span>
                </label>
                <span className="text-base font-bold text-cyan-400">
                  {hoursPerDay} Jam / Hari
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                step="1"
                value={hoursPerDay}
                onChange={(e) => setHoursPerDay(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer h-2 bg-surface-border rounded-lg"
              />
              <div className="mt-2 flex justify-between text-[11px] text-slate-400">
                <span>1 Jam (Senggang)</span>
                <span>3-4 Jam (Side Hustle Serius)</span>
                <span>8+ Jam (Full Focus)</span>
              </div>
            </div>

            {/* Input 3: Core Skill */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-slate-200 mb-2.5">
                <Briefcase className="h-4 w-4 text-purple-400" />
                <span>Kekuatan Skill Utama Kamu</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { id: "design-content", label: "Desain & Konten", icon: "🎨" },
                  { id: "marketing-sales", label: "Marketing & Sales", icon: "📣" },
                  { id: "tech", label: "Tech, AI & Web", icon: "💻" },
                  { id: "ops-craft", label: "Fisik & Operasional", icon: "📦" },
                  { id: "data-admin", label: "Data & Admin/Riset", icon: "📊" },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSkill(s.id as ViabilityInput["skill"])}
                    className={`flex items-center gap-2 rounded-xl border p-2.5 text-left text-xs font-medium transition-all ${
                      skill === s.id
                        ? "border-purple-500 bg-purple-500/15 text-purple-200"
                        : "border-surface-border bg-surface-hover/50 text-slate-400 hover:border-slate-600 hover:text-slate-200"
                    }`}
                  >
                    <span>{s.icon}</span>
                    <span>{s.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Input 4: Target Income */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                  <Target className="h-4 w-4 text-amber-400" />
                  <span>Target Cuan Bersih Tambahan Bulanan</span>
                </label>
                <span className="text-base font-bold text-amber-400">
                  {formatRupiah(targetIncome)} / bln
                </span>
              </div>
              <input
                type="range"
                min="1000000"
                max="30000000"
                step="500000"
                value={targetIncome}
                onChange={(e) => setTargetIncome(Number(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer h-2 bg-surface-border rounded-lg"
              />
              <div className="mt-2 flex justify-between text-[11px] text-slate-400">
                <span>Rp 1 Jt (Uang Jajan)</span>
                <span>Rp 5-10 Jt (Kompensasi Gaji)</span>
                <span>Rp 20 Jt+ (Skala Agensi)</span>
              </div>
            </div>

            {/* Input 5: Risk Tolerance */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-slate-200 mb-2">
                <ShieldAlert className="h-4 w-4 text-rose-400" />
                <span>Toleransi Risiko & Gaya Eksekusi</span>
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "safe", label: "Aman / Konservatif", desc: "Anti boncos modal" },
                  { id: "moderate", label: "Seimbang (Rekomendasi)", desc: "Margin sehat" },
                  { id: "aggressive", label: "Agresif High-Growth", desc: "Skala cepat" },
                ].map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setRisk(r.id as ViabilityInput["risk"])}
                    className={`rounded-xl border p-2.5 text-center text-xs transition-all ${
                      risk === r.id
                        ? "border-emerald-500 bg-emerald-500/15 text-emerald-300 font-semibold"
                        : "border-surface-border bg-surface-hover/40 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <div>{r.label}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{r.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-surface-border bg-gradient-to-b from-surface-card to-surface-card/60 p-6 sm:p-7 shadow-2xl relative overflow-hidden">
              {/* Score Header */}
              <div className="flex items-center justify-between border-b border-surface-border/60 pb-5">
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                    Cuan Viability Index
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-4xl sm:text-5xl font-black text-white">
                      {result.score}
                    </span>
                    <span className="text-sm font-semibold text-slate-400">/ 100</span>
                  </div>
                </div>

                <div className="text-right">
                  <div
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold border ${
                      result.score >= 80
                        ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-400"
                        : result.score >= 65
                        ? "bg-teal-500/15 border-teal-500/30 text-teal-300"
                        : result.score >= 45
                        ? "bg-amber-500/15 border-amber-500/30 text-amber-300"
                        : "bg-rose-500/15 border-rose-500/30 text-rose-300"
                    }`}
                  >
                    <Sparkles className="h-3 w-3" />
                    <span>{result.verdict}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    BEP: <span className="text-slate-200 font-semibold">{result.paybackPeriodText}</span>
                  </div>
                </div>
              </div>

              {/* Diagnostic Text */}
              <p className="mt-4 text-xs text-slate-300 leading-relaxed bg-surface-base/50 p-3 rounded-xl border border-surface-border/50">
                {result.verdictDescription}
              </p>

              {/* Financial Projection Cards */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-surface-border bg-surface-base/80 p-3">
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">
                    Estimasi Net Profit / Bln
                  </div>
                  <div className="mt-1 text-xs sm:text-sm font-extrabold text-emerald-400">
                    {formatCompactRupiah(result.estMonthlyProfitMin)} - {formatCompactRupiah(result.estMonthlyProfitMax)}
                  </div>
                </div>

                <div className="rounded-xl border border-surface-border bg-surface-base/80 p-3">
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">
                    Kategori Paling Cocok
                  </div>
                  <div className="mt-1 text-xs sm:text-sm font-bold text-cyan-300 truncate">
                    {result.recommendedCategory}
                  </div>
                </div>
              </div>

              {/* Action Plan 7 Days Preview */}
              <div className="mt-5">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                    Roadmap Sprint 7 Hari
                  </span>
                  <button
                    onClick={handleCopyPlan}
                    className="inline-flex items-center gap-1 text-[11px] text-cuan-400 hover:text-cuan-300 transition-colors"
                  >
                    {copiedPlan ? (
                      <>
                        <Check className="h-3 w-3 text-emerald-400" />
                        <span className="text-emerald-400">Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        <span>Copy Roadmap</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                  {result.actionPlan7Days.slice(0, 4).map((step, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg border border-surface-border/70 bg-surface-base/40 p-2.5 text-xs"
                    >
                      <div className="flex items-center justify-between font-semibold text-slate-200">
                        <span className="text-cuan-400">{step.day}</span>
                        <span className="text-slate-300 text-[11px]">{step.title}</span>
                      </div>
                      <p className="mt-1 text-[11px] text-slate-400 leading-snug">
                        {step.task}
                      </p>
                    </div>
                  ))}
                  <div className="text-center pt-1">
                    <span className="text-[11px] text-slate-400">
                      + 3 Hari Closing & Testimoni (tercakup saat dicopy)
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row gap-2.5">
                <button
                  onClick={handleShare}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-cuan-500 py-3 px-4 text-xs font-bold text-surface-base hover:bg-cuan-400 transition-all shadow-glow active:scale-95"
                >
                  <Share2 className="h-3.5 w-3.5" />
                  <span>Bagikan Kartu Skor Cuan</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
