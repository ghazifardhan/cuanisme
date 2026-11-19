# 🚀 CUANISME — Platform Navigasi Cuan, Simulator Side-Hustle & Finansial #1 Indonesia

[![Next.js 14](https://img.shields.io/badge/Next.js-14.2-black?style=flat&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg)](https://opensource.org/licenses/MIT)

> **"Stop tebak-tebakan. Hitung potensi cuan nyata sebelum boncos."**

Cuanisme adalah web application interaktif yang dirancang khusus untuk memecahkan kebingungan puluhan juta Gen Z, milenial, freelancer, dan pekerja di Indonesia yang ingin memulai side-income atau memvalidasi ide bisnis dengan angka nyata tanpa teori halu.

---

## 🌟 Modul & Fitur Utama

### 1. 🧭 CuanMeter™ (Simulator Kelayakan Ide & Side-Hustle)
- **Input Fleksibel:** Modal awal (Rp 0 s/d Rp 50jt+), jam komitmen harian, kategori skill (Tech, Sales, Design, Craft, Data), toleransi risiko, dan target penghasilan bulanan.
- **Output Presisi:**
  - *Cuan Viability Index* (0-100)
  - Proyeksi laba bersih bulanan (Min - Max)
  - Waktu balik modal (BEP / Break-Even Horizon)
  - Roadmap eksekusi 7 hari yang spesifik untuk ekosistem Indonesia (Tokopedia, Shopee, TikTok Shop, WhatsApp CRM, Lynk.id).
  - 1-Click Copy Rencana & Share Kartu Cuan ke WhatsApp / X.

### 2. 🧮 HargaCuan™ (Rate Card Freelancer & Konsultan Anti-Boncos)
- Mengatasi masalah umum pekerja lepas Indonesia: banting harga atau salah hitung jam kerja riil.
- Menghitung **Hourly Rate**, **Daily Rate**, dan **Paket 3-Tier Proposal** (Starter, Standard, Premium).
- Dilengkapi kalkulasi biaya operasional, buffer bench time (cuti), dan skema pajak (PP 55 UMKM 0.5% vs PPh 21).
- 1-Click Copy draft pesan penawaran WhatsApp ke calon klien.

### 3. 🔥 Radar FIRE Indo™ (Kemandirian Finansial & Runway Darurat)
- Menghitung **Angka Bebas Finansial (FIRE Number)** versi Rupiah (Standar, Lean, dan Fat FIRE).
- Menghitung **Emergency Runway** (berapa bulan bisa bertahan jika besok tanpa pemasukan/PHK).
- Proyeksi tahun menuju pensiun mandiri dengan yield realistis SBN (6.5%) dan inflasi BPS (4%).

### 4. 📚 Direktori 48+ Blueprint Ide Cuan Tervalidasi
- Filter berdasarkan Kategori (Jasa Digital & AI, Produk Digital, E-Commerce & Fisik, Kreator & Affiliate, Jasa Operasional Lokal) dan Filter Modal.
- Dilengkapi data **Unit Economics** (Harga jual rata-rata, HPP, Margin %, Target volume), langkah eksekusi 7 hari, tools yang dipakai, dan *Secret Growth Hack*.

### 5. 🎁 Lead Magnet & Kartu Viral Shareable
- Pop-up download **Blueprint 30 Hari Cuan Pertama** dengan local storage capture.
- Generator Kartu Hasil Skor Cuan siap screenshot dan bagikan ke media sosial.

---

## 🛠️ Tech Stack & Arsitektur

- **Framework:** Next.js 14.2 (App Router)
- **Language:** TypeScript 5.9
- **Styling:** Tailwind CSS 3.4 + Custom Fintech Dark Palette
- **Icons:** Lucide React
- **Visual FX:** Canvas-Confetti
- **Package Manager / Runtime:** Bun / Node.js 22

---

## ⚡ Menjalankan Secara Lokal

```bash
# Clone repo
git clone https://github.com/ghazifardhan/cuanisme.git
cd cuanisme

# Install dependencies
bun install
# atau: npm install

# Jalankan server development
bun dev
# atau: npm run dev
```

Buka `http://localhost:3000` di browser Anda.

---

## 📦 Build Produksi

```bash
bun run build
bun run start
```

---

## 🚀 Deployment

Platform ini 100% kompatibel dengan **Vercel**, **Cloudflare Pages**, atau server Node.js/Docker manapun:
- Root directory: `./`
- Build command: `bun run build` atau `npm run build`
- Output directory: `.next`

---

## 📄 Lisensi

Didistribusikan di bawah lisensi MIT. Silakan gunakan, modifikasi, dan kembangkan!
