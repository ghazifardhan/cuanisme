"use client";

import React, { useState, useMemo } from "react";
import {
  BookOpen,
  Search,
  Filter,
  DollarSign,
  Clock,
  ExternalLink,
  X,
  Sparkles,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { Blueprint, BLUEPRINTS } from "@/data/blueprints";
import { formatRupiah, formatCompactRupiah } from "@/lib/calculator";

export default function BlueprintDirectory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedModal, setSelectedModal] = useState<string>("all");
  const [activeBlueprint, setActiveBlueprint] = useState<Blueprint | null>(null);

  const filtered = useMemo(() => {
    return BLUEPRINTS.filter((bp) => {
      const matchSearch =
        bp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bp.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bp.categoryLabel.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bp.toolsNeeded.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchCategory =
        selectedCategory === "all" || bp.category === selectedCategory;

      const matchModal =
        selectedModal === "all" || bp.modalRange === selectedModal;

      return matchSearch && matchCategory && matchModal;
    });
  }, [searchTerm, selectedCategory, selectedModal]);

  return (
    <section id="playbooks" className="py-16 md:py-24 border-b border-surface-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/20 bg-purple-950/40 px-3 py-1 text-xs font-semibold text-purple-300 mb-3">
            <BookOpen className="h-3.5 w-3.5 text-purple-400" />
            <span>MODUL 4 • DIREKTORI BLUEPRINT TERVALIDASI</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            48+ Ide Cuan & Side-Hustle Teruji di Indonesia
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Bukan sekadar daftar nama bisnis tanpa konteks. Setiap blueprint dilengkapi rincian unit economics riil, modal awal, langkah hari ke-1 sampai ke-7, dan cara hindari jebakan boncos.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="mb-8 space-y-4 max-w-4xl mx-auto">
          {/* Search Box */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Cari ide bisnis, tools (misal: 'TikTok', 'Notion', 'WhatsApp', 'Canva')..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-2xl border border-surface-border bg-surface-card pl-11 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cuan-500 shadow-md"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: "Semua Kategori" },
              { id: "digital-service", label: "Jasa Digital & AI" },
              { id: "digital-product", label: "Produk Digital" },
              { id: "creator", label: "Kreator & Affiliate" },
              { id: "ecommerce", label: "E-Commerce & Fisik" },
              { id: "local-ops", label: "Operasional Lokal" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? "bg-purple-600 text-white shadow-glow"
                    : "border border-surface-border bg-surface-card/60 text-slate-400 hover:text-white hover:bg-surface-hover"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Modal Filter Chips */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-400 font-medium mr-1">Modal Awal:</span>
            {[
              { id: "all", label: "Semua Modal" },
              { id: "< 500rb", label: "< Rp 500 Rb" },
              { id: "500rb - 2jt", label: "Rp 500 Rb - 2 Jt" },
            ].map((m) => (
              <button
                key={m.id}
                onClick={() => setSelectedModal(m.id)}
                className={`rounded-lg px-2.5 py-1 transition-all ${
                  selectedModal === m.id
                    ? "bg-emerald-500 text-surface-base font-bold"
                    : "bg-surface-card border border-surface-border text-slate-400 hover:text-white"
                }`}
              >
                {m.label}
              </button>
            ))}
            <span className="ml-auto text-slate-400 text-xs">
              Menampilkan {filtered.length} Blueprint
            </span>
          </div>
        </div>

        {/* Blueprint Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((bp) => (
            <div
              key={bp.id}
              onClick={() => setActiveBlueprint(bp)}
              className="group cursor-pointer rounded-2xl border border-surface-border bg-surface-card p-6 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-purple-500/50 hover:shadow-glow flex flex-col justify-between"
            >
              <div>
                {/* Badges */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="rounded-full bg-purple-500/10 border border-purple-500/20 px-2.5 py-0.5 text-[11px] font-semibold text-purple-300">
                    {bp.categoryLabel}
                  </span>
                  <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-400">
                    Modal {bp.modalRange}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                  {bp.title}
                </h3>
                <p className="mt-2 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {bp.tagline}
                </p>
              </div>

              {/* Card Meta Footer */}
              <div className="mt-5 pt-4 border-t border-surface-border/60">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-[10px] text-slate-400 block">Est. Net Profit</span>
                    <span className="font-extrabold text-emerald-400">
                      {formatCompactRupiah(bp.estMonthlyProfitMin)} - {formatCompactRupiah(bp.estMonthlyProfitMax)}/bln
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">Waktu First Cuan</span>
                    <span className="font-semibold text-cyan-300">
                      {bp.timeToFirstCuan}
                    </span>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-xs text-purple-400 font-semibold group-hover:translate-x-1 transition-transform">
                  <span>Lihat Rencana 7 Hari & Unit Economics</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detail Modal / Drawer */}
        {activeBlueprint && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-surface-border bg-surface-card p-6 sm:p-8 shadow-2xl">
              {/* Close Button */}
              <button
                onClick={() => setActiveBlueprint(null)}
                className="absolute right-5 top-5 rounded-full bg-surface-hover p-2 text-slate-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Header */}
              <div className="pr-8">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="rounded-full bg-purple-500/15 border border-purple-500/30 px-3 py-0.5 text-xs font-semibold text-purple-300">
                    {activeBlueprint.categoryLabel}
                  </span>
                  <span className="rounded-full bg-emerald-500/15 border border-emerald-500/30 px-3 py-0.5 text-xs font-semibold text-emerald-400">
                    Modal {activeBlueprint.modalRange}
                  </span>
                  <span className="text-xs text-slate-400">
                    • Tingkat: {activeBlueprint.difficulty}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  {activeBlueprint.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  {activeBlueprint.tagline}
                </p>
              </div>

              {/* Unit Economics Box */}
              <div className="mt-6 rounded-2xl border border-surface-border bg-surface-base p-4 sm:p-5">
                <span className="text-xs font-bold text-slate-200 uppercase tracking-wider block mb-3 flex items-center gap-1.5">
                  <DollarSign className="h-4 w-4 text-emerald-400" />
                  Rincian Unit Economics Riil
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div className="rounded-xl bg-surface-card p-2.5">
                    <span className="text-[10px] text-slate-400 block">Harga Jual Rata-rata</span>
                    <span className="text-xs font-bold text-white mt-1 block">
                      {activeBlueprint.unitEconomics.hargaJualRata2}
                    </span>
                  </div>
                  <div className="rounded-xl bg-surface-card p-2.5">
                    <span className="text-[10px] text-slate-400 block">HPP / Biaya Pokok</span>
                    <span className="text-xs font-bold text-slate-300 mt-1 block">
                      {activeBlueprint.unitEconomics.hppOrCost}
                    </span>
                  </div>
                  <div className="rounded-xl bg-surface-card p-2.5">
                    <span className="text-[10px] text-slate-400 block">Margin Laba Bersih</span>
                    <span className="text-xs font-extrabold text-emerald-400 mt-1 block">
                      {activeBlueprint.unitEconomics.marginPersen}
                    </span>
                  </div>
                  <div className="rounded-xl bg-surface-card p-2.5">
                    <span className="text-[10px] text-slate-400 block">Target Volume / Bln</span>
                    <span className="text-xs font-bold text-cyan-300 mt-1 block">
                      {activeBlueprint.unitEconomics.volumeBulanan}
                    </span>
                  </div>
                </div>
              </div>

              {/* Step by Step Action Plan */}
              <div className="mt-6">
                <span className="text-xs font-bold text-slate-200 uppercase tracking-wider block mb-3 flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-cyan-400" />
                  Roadmap Eksekusi Langkah Demi Langkah
                </span>
                <div className="space-y-2.5">
                  {activeBlueprint.stepByStepPlan.map((s, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-surface-border bg-surface-base/60 p-3 text-xs flex gap-3"
                    >
                      <span className="font-extrabold text-cuan-400 shrink-0">
                        {s.day}
                      </span>
                      <span className="text-slate-300">{s.action}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & Platform */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="rounded-xl border border-surface-border bg-surface-base/40 p-3">
                  <span className="font-bold text-slate-300 block mb-1">
                    Tools yang Dibutuhkan:
                  </span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {activeBlueprint.toolsNeeded.map((t, idx) => (
                      <span
                        key={idx}
                        className="rounded bg-surface-hover px-2 py-0.5 text-[11px] text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-surface-border bg-surface-base/40 p-3">
                  <span className="font-bold text-slate-300 block mb-1">
                    Kanal Distribusi Utama:
                  </span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {activeBlueprint.primaryPlatforms.map((p, idx) => (
                      <span
                        key={idx}
                        className="rounded bg-surface-hover px-2 py-0.5 text-[11px] text-purple-300"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Secret Growth Hack & Pitfalls */}
              <div className="mt-5 space-y-3">
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-3.5 text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-emerald-400 mb-1">
                    <Lightbulb className="h-4 w-4" />
                    <span>Secret Growth Hack:</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {activeBlueprint.growthHack}
                  </p>
                </div>

                <div className="rounded-xl border border-rose-500/30 bg-rose-950/20 p-3.5 text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-rose-400 mb-1">
                    <AlertTriangle className="h-4 w-4" />
                    <span>Jebakan / Resiko yang Wajib Dihindari:</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {activeBlueprint.pitfalls.join(" ")}
                  </p>
                </div>
              </div>

              {/* Bottom Close Action */}
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setActiveBlueprint(null)}
                  className="rounded-xl bg-cuan-500 px-5 py-2.5 text-xs font-bold text-surface-base hover:bg-cuan-400 transition-colors"
                >
                  Tutup & Pilih Blueprint Lain
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
