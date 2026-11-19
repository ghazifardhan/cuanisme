import React from "react";
import { TrendingUp, Heart, ShieldAlert } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-surface-border bg-surface-card/40 py-12 text-slate-400 text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500 text-surface-base font-black text-sm">
                C
              </div>
              <span className="text-lg font-black text-white">
                CUAN<span className="text-cuan-400">ISME</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs max-w-sm leading-relaxed">
              Platform kalkulator finansial independen, simulator kelayakan ide bisnis & playbook side-hustle nomor satu di Indonesia.
            </p>
            <div className="flex items-center gap-1.5 text-slate-500 text-[11px] pt-1">
              <span>Dibangun dengan cinta untuk ekosistem kreator & freelancer Indonesia</span>
              <Heart className="h-3 w-3 text-rose-500 fill-rose-500" />
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <span className="text-xs font-bold text-slate-200 uppercase tracking-wider block mb-3">
              Fitur & Kalkulator
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#cuan-meter" className="hover:text-cuan-400 transition-colors">
                  CuanMeter™ (Simulator Ide)
                </a>
              </li>
              <li>
                <a href="#harga-cuan" className="hover:text-cyan-400 transition-colors">
                  HargaCuan™ (Rate Freelance)
                </a>
              </li>
              <li>
                <a href="#fire-radar" className="hover:text-amber-400 transition-colors">
                  Radar FIRE (Kemandirian Finansial)
                </a>
              </li>
              <li>
                <a href="#playbooks" className="hover:text-purple-400 transition-colors">
                  48+ Blueprint Ide Cuan
                </a>
              </li>
            </ul>
          </div>

          {/* Legal / Disclaimer */}
          <div>
            <span className="text-xs font-bold text-slate-200 uppercase tracking-wider block mb-3 flex items-center gap-1">
              <ShieldAlert className="h-3.5 w-3.5 text-amber-400" />
              <span>Disclaimer</span>
            </span>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Cuanisme bukan penasihat keuangan berlisensi ataupun skema cepat kaya. Semua angka dan proyeksi adalah simulasi matematis edukatif yang bergantung penuh pada konsistensi dan eksekusi pribadi.
            </p>
          </div>
        </div>

        <div className="border-t border-surface-border/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Cuanisme Indonesia. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Server: Jakarta & Global CDN</span>
            <span>Status: 100% Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
