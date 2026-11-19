"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  Sparkles,
  Download,
  CheckCircle2,
  Lock,
  ArrowRight,
  Gift,
  FileText,
} from "lucide-react";
import confetti from "canvas-confetti";

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadCaptureModal({
  isOpen,
  onClose,
}: LeadCaptureModalProps) {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("cuanisme_lead_unlocked");
    if (saved === "true") {
      setIsUnlocked(true);
    }
  }, []);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !whatsapp.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      localStorage.setItem("cuanisme_lead_unlocked", "true");
      localStorage.setItem(
        "cuanisme_lead_user",
        JSON.stringify({ name, whatsapp, date: new Date().toISOString() })
      );
      setIsUnlocked(true);
      setIsSubmitting(false);

      try {
        confetti({
          particleCount: 70,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#10b981", "#3b82f6", "#a855f7"],
        });
      } catch (err) {
        // ignore
      }
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto">
      <div className="relative w-full max-w-lg rounded-3xl border border-surface-border bg-surface-card p-6 sm:p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full bg-surface-hover p-2 text-slate-400 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        {!isUnlocked ? (
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-cuan-500/10 px-3 py-1 text-xs font-semibold text-cuan-300 border border-cuan-500/20 mb-3">
              <Gift className="h-3.5 w-3.5 text-cuan-400" />
              <span>GRATIS • INSTANT DOWNLOAD</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
              Blueprint 30 Hari Cuan Pertama
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300">
              Akses panduan praktis Notion & PDF untuk memulai bisnis sampingan dari Rp 0 tanpa resiko boncos.
            </p>

            {/* Inclusions */}
            <div className="mt-4 space-y-2 rounded-2xl border border-surface-border bg-surface-base/80 p-4 text-xs">
              <div className="flex items-start gap-2 text-slate-200">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Template Notion Cuan Tracker:</strong> Budget bulanan, pencatatan pajak PP 55 & target FIRE.
                </span>
              </div>
              <div className="flex items-start gap-2 text-slate-200">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Script Cold Pitching WhatsApp:</strong> 5 template penawaran jasa anti-diabaikan ke calon klien.
                </span>
              </div>
              <div className="flex items-start gap-2 text-slate-200">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Checklist 24 Jam Anti-Boncos:</strong> 7 filter sebelum mengeluarkan uang sepeserpun untuk ide baru.
                </span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Nama Panggilan
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Ghazi"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-surface-border bg-surface-base px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cuan-400"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Nomor WhatsApp (Aktif)
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Contoh: 081234567890"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className="w-full rounded-xl border border-surface-border bg-surface-base px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cuan-400"
                />
                <span className="text-[10px] text-slate-400 mt-1 block">
                  Bebas spam. Link download akan langsung terbuka di halaman ini.
                </span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 py-3 px-4 text-sm font-bold text-surface-base shadow-glow hover:opacity-95 transition-all disabled:opacity-50 active:scale-95"
              >
                {isSubmitting ? (
                  <span>Menyiapkan Akses...</span>
                ) : (
                  <>
                    <Download className="h-4 w-4" />
                    <span>Dapatkan Akses Blueprint Sekarang</span>
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mb-4">
              <CheckCircle2 className="h-8 w-8" />
            </div>

            <h3 className="text-2xl font-black text-white">
              Akses Kamu Berhasil Terbuka! 🎉
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-sm mx-auto">
              Terima kasih! Seluruh materi Starter Kit & Notion Template siap kamu gunakan sekarang.
            </p>

            <div className="mt-6 space-y-2.5">
              <a
                href="#playbooks"
                onClick={onClose}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-cuan-500 py-3 px-4 text-xs font-bold text-surface-base hover:bg-cuan-400 transition-colors shadow-glow"
              >
                <FileText className="h-4 w-4" />
                <span>Buka Direktori 48+ Ide Cuan Lengkap</span>
              </a>

              <button
                onClick={() => {
                  alert("Link template Notion & PDF telah disematkan di browser lokal kamu!");
                  onClose();
                }}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-surface-border bg-surface-card py-2.5 text-xs font-semibold text-slate-300 hover:text-white"
              >
                <span>Simpan Bookmark Halaman Ini</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
