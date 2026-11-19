"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CuanMeter from "@/components/CuanMeter";
import HargaCuan from "@/components/HargaCuan";
import FireRadar from "@/components/FireRadar";
import BlueprintDirectory from "@/components/BlueprintDirectory";
import ShareModal from "@/components/ShareModal";
import LeadCaptureModal from "@/components/LeadCaptureModal";
import Footer from "@/components/Footer";
import { HelpCircle, ChevronDown, Sparkles, TrendingUp, ShieldCheck } from "lucide-react";

export default function Home() {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [shareData, setShareData] = useState<{
    score: number;
    verdict: string;
    modal: number;
    hours: number;
    targetIncome: number;
    estProfitMin: number;
    estProfitMax: number;
  } | null>(null);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleShareResult = (data: {
    score: number;
    verdict: string;
    modal: number;
    hours: number;
    targetIncome: number;
    estProfitMin: number;
    estProfitMax: number;
  }) => {
    setShareData(data);
    setIsShareModalOpen(true);
  };

  const handleExplorePlaybooks = () => {
    const el = document.getElementById("playbooks");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const faqs = [
    {
      q: "Apakah seluruh fitur di Cuanisme 100% gratis digunakan?",
      a: "Ya! Seluruh kalkulator (CuanMeter, HargaCuan, dan Radar FIRE) serta direktori 48+ blueprint dapat diakses secara gratis tanpa perlu kartu kredit atau pendaftaran wajib.",
    },
    {
      q: "Bagaimana cara CuanMeter™ menghitung skor kelayakan ide bisnis?",
      a: "CuanMeter mengombinasikan 5 variabel utama: rasio kecukupan modal awal terhadap target laba, alokasi jam kerja harian, daya ungkit skill (tech, sales, creative), profil risiko, dan margin historis model bisnis di pasar Indonesia.",
    },
    {
      q: "Mengapa kalkulator rate freelancer memperhitungkan jam kerja hanya 20 jam/minggu?",
      a: "Berdasarkan studi empiris para freelancer profesional, sekitar 40-50% waktu kerja dihabiskan untuk aktivitas non-billable (mencari klien, pitching, meeting revisi, administrasi invoice). Jika Anda menagih klien dengan asumsi 40 jam kerja per minggu, Anda akan mengalami burnout atau boncos.",
    },
    {
      q: "Apa bedanya skema pajak PP 55 dan PPh 21 di HargaCuan?",
      a: "PP 55 adalah skema Pajak Penghasilan Final UMKM dengan tarif 0.5% dari omzet bruto bagi wajib pajak orang pribadi dengan omzet di bawah Rp 4.8 miliar/tahun (bebas pajak untuk omzet s/d Rp 500 juta pertama). Sedangkan PPh 21 menggunakan norma penghitungan atau tarif progresif standar untuk tenaga ahli/pekerja bebas.",
    },
    {
      q: "Bagaimana jika saya tidak memiliki modal uang sama sekali (Rp 0)?",
      a: "Gunakan filter modal '< Rp 500rb' atau pilih kategori 'Jasa Digital & AI' atau 'Produk Digital'. Anda dapat mulai dengan menjual keahlian (jasa riset, ghostwriting, automasi WhatsApp, atau perantara affiliate) di mana modal utamanya hanyalah koneksi internet dan smartphone/laptop.",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-surface-base text-slate-100">
      {/* Top Notification Bar */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cuan-600 px-4 py-1.5 text-center text-xs font-semibold text-surface-base">
        <span className="inline-flex items-center gap-1.5">
          <span>🚀 Rilis Cuanisme v1.0 Live: Akses Gratis Simulator Kelayakan & Playbook Bisnis Tanpa Halu!</span>
        </span>
      </div>

      {/* Navigation */}
      <Navbar onOpenLeadModal={() => setIsLeadModalOpen(true)} />

      {/* Hero Section */}
      <Hero
        onExplorePlaybooks={handleExplorePlaybooks}
        onOpenLeadModal={() => setIsLeadModalOpen(true)}
      />

      {/* Module 1: CuanMeter Simulator */}
      <CuanMeter onShareResult={handleShareResult} />

      {/* Module 2: HargaCuan Freelance Rate */}
      <HargaCuan />

      {/* Module 3: Fire Radar */}
      <FireRadar />

      {/* Module 4: Blueprint Directory */}
      <BlueprintDirectory />

      {/* FAQ Section */}
      <section className="py-16 md:py-20 border-b border-surface-border/40">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-surface-border bg-surface-card px-3 py-1 text-xs font-semibold text-slate-300 mb-2">
              <HelpCircle className="h-3.5 w-3.5 text-cuan-400" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Pertanyaan yang Sering Diajukan
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-surface-border bg-surface-card transition-colors overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm font-bold text-white hover:text-cuan-300"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-cuan-400" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 text-xs text-slate-300 leading-relaxed border-t border-surface-border/40 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-gradient-to-b from-surface-card to-surface-base">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-surface-card to-teal-950/40 p-8 sm:p-12 shadow-glow">
            <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-300 border border-emerald-500/30">
              EKSEKUSI HARI INI
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-4">
              Siap Jemput Cuan Pertama Kamu?
            </h2>
            <p className="mt-3 text-sm text-slate-300 max-w-xl mx-auto">
              Jangan biarkan idemu mengendap di catatan ponsel. Uji probabilitasnya di CuanMeter, amankan rate profesionalmu, dan eksekusi 7 hari ke depan.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#cuan-meter"
                className="w-full sm:w-auto rounded-xl bg-cuan-500 px-6 py-3 text-xs font-extrabold text-surface-base shadow-glow hover:bg-cuan-400 transition-colors"
              >
                Mulai Tes CuanMeter Sekarang
              </a>
              <button
                onClick={() => setIsLeadModalOpen(true)}
                className="w-full sm:w-auto rounded-xl border border-surface-border bg-surface-card px-6 py-3 text-xs font-semibold text-white hover:bg-surface-hover transition-colors"
              >
                Download Blueprint 30 Hari
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        data={shareData}
      />

      <LeadCaptureModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
      />
    </main>
  );
}
