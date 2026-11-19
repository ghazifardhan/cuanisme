"use client";

import React, { useState } from "react";
import {
  X,
  Share2,
  Copy,
  Check,
  TrendingUp,
  Sparkles,
  MessageCircle,
  ExternalLink,
} from "lucide-react";
import { formatRupiah, formatCompactRupiah } from "@/lib/calculator";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    score: number;
    verdict: string;
    modal: number;
    hours: number;
    targetIncome: number;
    estProfitMin: number;
    estProfitMax: number;
  } | null;
}

export default function ShareModal({ isOpen, onClose, data }: ShareModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !data) return null;

  const shareText = `🚀 Hasil Tes CuanMeter Saya di Cuanisme.id:
Skor Kelayakan: ${data.score}/100 (${data.verdict})
Modal Awal: ${formatRupiah(data.modal)}
Waktu Komitmen: ${data.hours} Jam/Hari
Target Net Income: ${formatRupiah(data.targetIncome)}/Bulan
Proyeksi Profit: ${formatCompactRupiah(data.estProfitMin)} - ${formatCompactRupiah(data.estProfitMax)}/Bln

Cek kelayakan ide bisnismu sendiri gratis di 👉 https://cuanisme.id`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsAppShare = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    window.open(url, "_blank");
  };

  const handleTwitterShare = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
      <div className="relative w-full max-w-md rounded-3xl border border-surface-border bg-surface-card p-6 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full bg-surface-hover p-2 text-slate-400 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-cuan-500/10 px-3 py-1 text-xs font-semibold text-cuan-300 border border-cuan-500/20 mb-2">
            <Sparkles className="h-3 w-3 text-cuan-400" />
            <span>KARTU RENCANA CUAN SIAP SHARE</span>
          </div>
          <h3 className="text-xl font-extrabold text-white">
            Pamerkan atau Simpan Kartumu
          </h3>
        </div>

        {/* The Visual Card */}
        <div className="rounded-2xl border border-surface-border bg-gradient-to-br from-surface-base via-surface-card to-emerald-950/20 p-5 shadow-inner">
          <div className="flex items-center justify-between border-b border-surface-border/60 pb-3">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500 text-surface-base font-black text-xs">
                C
              </div>
              <span className="font-extrabold text-sm text-white">
                CUAN<span className="text-cuan-400">ISME</span>
              </span>
            </div>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">
              VERIFIED RESULT
            </span>
          </div>

          <div className="my-5 text-center">
            <div className="text-xs text-slate-400 uppercase font-semibold">
              Skor Potensi Ide Cuan
            </div>
            <div className="text-5xl font-black text-white mt-1">
              {data.score}
              <span className="text-base font-semibold text-cuan-400">/100</span>
            </div>
            <div className="mt-2 inline-block rounded-full bg-emerald-500/20 px-3 py-0.5 text-xs font-extrabold text-emerald-300 border border-emerald-500/30">
              {data.verdict}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs border-t border-surface-border/60 pt-3">
            <div className="rounded-lg bg-surface-base/80 p-2 text-center">
              <span className="text-[10px] text-slate-400 block">Modal Awal</span>
              <span className="font-bold text-white mt-0.5 block">
                {formatRupiah(data.modal)}
              </span>
            </div>
            <div className="rounded-lg bg-surface-base/80 p-2 text-center">
              <span className="text-[10px] text-slate-400 block">Komitmen</span>
              <span className="font-bold text-cyan-300 mt-0.5 block">
                {data.hours} Jam / Hari
              </span>
            </div>
            <div className="rounded-lg bg-surface-base/80 p-2 text-center col-span-2">
              <span className="text-[10px] text-slate-400 block">Proyeksi Net Profit / Bln</span>
              <span className="font-extrabold text-emerald-400 mt-0.5 block text-sm">
                {formatCompactRupiah(data.estProfitMin)} - {formatCompactRupiah(data.estProfitMax)}
              </span>
            </div>
          </div>

          <div className="mt-3 text-center text-[10px] text-slate-500 font-mono">
            cuanisme.id • Validasi Ide & Finansial Bebas Halu
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-5 space-y-2.5">
          <button
            onClick={handleWhatsAppShare}
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 py-3 px-4 text-xs font-bold text-white transition-all shadow-md active:scale-95"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Bagikan ke WhatsApp</span>
          </button>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleTwitterShare}
              className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-surface-border bg-surface-card hover:bg-surface-hover py-2.5 text-xs font-semibold text-slate-200 transition-colors"
            >
              <span>Post di X (Twitter)</span>
            </button>

            <button
              onClick={handleCopy}
              className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-surface-border bg-surface-card hover:bg-surface-hover py-2.5 text-xs font-semibold text-slate-200 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>Salin Teks</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
