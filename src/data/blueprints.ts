export interface Blueprint {
  id: string;
  title: string;
  tagline: string;
  category: "digital-service" | "digital-product" | "ecommerce" | "creator" | "local-ops";
  categoryLabel: string;
  modalRange: "< 500rb" | "500rb - 2jt" | "2jt - 5jt" | "5jt - 15jt";
  modalMin: number;
  modalMax: number;
  estMonthlyProfitMin: number;
  estMonthlyProfitMax: number;
  timeCommitment: string;
  difficulty: "Mudah" | "Menengah" | "Advance";
  timeToFirstCuan: string; // e.g. "3 - 7 Hari"
  primaryPlatforms: string[];
  toolsNeeded: string[];
  unitEconomics: {
    hargaJualRata2: string;
    hppOrCost: string;
    marginPersen: string;
    volumeBulanan: string;
  };
  stepByStepPlan: {
    day: string;
    action: string;
  }[];
  pitfalls: string[];
  growthHack: string;
}

export const BLUEPRINTS: Blueprint[] = [
  {
    id: "wa-crm-automation",
    title: "Jasa Automasi WhatsApp & CRM Toko Online",
    tagline: "Bantu olshop & UMKM setup auto-reply, blast promo legal, dan funnel follow-up pesanan otomatis.",
    category: "digital-service",
    categoryLabel: "Jasa Digital & AI",
    modalRange: "< 500rb",
    modalMin: 150000,
    modalMax: 500000,
    estMonthlyProfitMin: 3500000,
    estMonthlyProfitMax: 15000000,
    timeCommitment: "2-3 jam/hari",
    difficulty: "Menengah",
    timeToFirstCuan: "5 - 10 Hari",
    primaryPlatforms: ["WhatsApp", "Instagram DM", "Waba / Make.com"],
    toolsNeeded: ["Make.com / n8n", "WA Gateway (Starsender/Fonnte)", "Google Sheets"],
    unitEconomics: {
      hargaJualRata2: "Rp 1.200.000 / setup toko",
      hppOrCost: "Rp 150.000 (kuota gateway & domain)",
      marginPersen: "87%",
      volumeBulanan: "3 - 8 Klien UMKM",
    },
    stepByStepPlan: [
      { day: "Hari 1-2", action: "Pelajari integrasi Google Sheets ke Fonnte/Starsender via Make.com." },
      { day: "Hari 3-4", action: "Bikin video demo 60 detik 'Cara otomatis reminder pesanan yang belum transfer'." },
      { day: "Hari 5-7", action: "Kirim DM personal ke 30 pemilik olshop di Instagram yang orderannya manual." },
      { day: "Hari 8-10", action: "Tawarkan garansi: 'Kalau gak hemat 2 jam kerja per hari, gratis!' Dapat 2 klien pertama." }
    ],
    pitfalls: ["Jangan pakai nomor WA personal klien buat spam blast sembarangan (bisa ke-banned)."],
    growthHack: "Tawarkan add-on retainer bulanan Rp 250.000 untuk maintenance broadcast promo mingguan."
  },
  {
    id: "tiktok-affiliate-micro-review",
    title: "TikTok & Shopee Video Affiliate Niche Rumah Tangga",
    tagline: "Bikin video review produk problem-solving unik tanpa perlu stok barang fisik sama sekali.",
    category: "creator",
    categoryLabel: "Kreator & Affiliate",
    modalRange: "< 500rb",
    modalMin: 100000,
    modalMax: 400000,
    estMonthlyProfitMin: 2500000,
    estMonthlyProfitMax: 18000000,
    timeCommitment: "1-2 jam/hari",
    difficulty: "Mudah",
    timeToFirstCuan: "7 - 14 Hari",
    primaryPlatforms: ["TikTok", "Shopee Video", "Instagram Reels"],
    toolsNeeded: ["HP Kamera", "CapCut Gratis", "Ring Light Mini"],
    unitEconomics: {
      hargaJualRata2: "Komisi 8% - 15% per checkout",
      hppOrCost: "Rp 0 (sampel produk dikirim penjual saat akun aktif)",
      marginPersen: "95%",
      volumeBulanan: "150 - 800 Keranjang Terjual",
    },
    stepByStepPlan: [
      { day: "Hari 1", action: "Riset produk trending di Shopee/TikTok dengan rating 4.8+ dan komisi >10%." },
      { day: "Hari 2-3", action: "Beli 2-3 barang problem solving murah (<Rp 50rb) di sekitar rumah buat sampel awal." },
      { day: "Hari 4-6", action: "Rekam video format 3 detik pertama 'hook problem' + solusi nyata. Upload 3x per hari." },
      { day: "Hari 7-14", action: "Analisis video FYP, replikasi angle video pemenang, dan minta sampel gratis ke seller." }
    ],
    pitfalls: ["Hindari reupload video orang lain tanpa modifikasi drastis (kena pelanggaran hak cipta)."],
    growthHack: "Fokus pada produk 'life hacks' ibu rumah tangga yang emosional dan murah impulsif (<Rp 100rb)."
  },
  {
    id: "notion-financial-planner-id",
    title: "Template Notion Keuangan & Bisnis Khusus WNI",
    tagline: "Template Notion siap pakai dengan sistem pencatatan pajak PP 55, tracking utang, dan budget gaji UMR.",
    category: "digital-product",
    categoryLabel: "Produk Digital",
    modalRange: "< 500rb",
    modalMin: 0,
    modalMax: 200000,
    estMonthlyProfitMin: 2000000,
    estMonthlyProfitMax: 12000000,
    timeCommitment: "1-2 jam/hari",
    difficulty: "Mudah",
    timeToFirstCuan: "3 - 7 Hari",
    primaryPlatforms: ["Lynk.id", "Mayar", "TikTok / X"],
    toolsNeeded: ["Notion Free", "Canva Free (Mockup)", "Lynk.id / Mayar (Payment Gateway)"],
    unitEconomics: {
      hargaJualRata2: "Rp 49.000 - Rp 99.000 / lisensi",
      hppOrCost: "Rp 0 (Hanya biaya platform ~3%)",
      marginPersen: "97%",
      volumeBulanan: "60 - 200 Pembeli",
    },
    stepByStepPlan: [
      { day: "Hari 1-2", action: "Desain template Notion dengan formula otomatis gaji bulanan + tracker THR + tabungan." },
      { day: "Hari 3", action: "Buat cover estetik dan video walkthrough 45 detik di Canva." },
      { day: "Hari 4", action: "Setup etalase pembayaran otomatis di Lynk.id dengan QRIS." },
      { day: "Hari 5-7", action: "Post konten edukasi finansial di X (Twitter) & TikTok dengan CTA download versi gratis + upsell pro." }
    ],
    pitfalls: ["Template terlalu rumit dengan formula yang gampang rusak jika pengguna awam menghapus baris."],
    growthHack: "Bikin versi gratis '100% Free Starter Sheet', kumpulkan 1.000 lead email, lalu tawarkan versi bundle."
  },
  {
    id: "landing-page-framer-umkm",
    title: "Jasa Landing Page Cepat 48 Jam (Framer / WordPress)",
    tagline: "Bikin landing page konversi tinggi untuk agen properti, dokter gigi, klinik kecantikan, atau katering lokal.",
    category: "digital-service",
    categoryLabel: "Jasa Digital & AI",
    modalRange: "< 500rb",
    modalMin: 150000,
    modalMax: 500000,
    estMonthlyProfitMin: 5000000,
    estMonthlyProfitMax: 25000000,
    timeCommitment: "3-4 jam/hari",
    difficulty: "Menengah",
    timeToFirstCuan: "7 - 14 Hari",
    primaryPlatforms: ["Google My Business", "LinkedIn", "Instagram"],
    toolsNeeded: ["Framer / Carrd", "ChatGPT (Copywriting)", "Unsplash & Midjourney/Flux"],
    unitEconomics: {
      hargaJualRata2: "Rp 1.500.000 - Rp 3.500.000 / website",
      hppOrCost: "Rp 250.000 (Domain .id / Hosting)",
      marginPersen: "85%",
      volumeBulanan: "2 - 5 Klien",
    },
    stepByStepPlan: [
      { day: "Hari 1-3", action: "Siapkan 3 template demo yang sangat spesifik (e.g., Klinik Estetika, Katering Nikahan)." },
      { day: "Hari 4-6", action: "Riset UMKM di Google Maps kota Anda yang punya rating tinggi tapi belum punya website." },
      { day: "Hari 7-10", action: "Audit gratis tampilan kompetitor mereka dan tawarkan website siap jadi dalam 48 jam." }
    ],
    pitfalls: ["Scope creep (revisi tanpa batas). Batasi sejak awal: maksimal 2 putaran revisi minor."],
    growthHack: "Tawarkan include Google Maps SEO lokal setup untuk garansi ranking 3 besar di pencarian terdekat."
  },
  {
    id: "ghostwriting-linkedin-ceos",
    title: "Ghostwriting & Personal Branding Pendiri Startup / CEO",
    tagline: "Kelola akun LinkedIn eksekutif bisnis untuk positioning thought leadership & lead generation B2B.",
    category: "digital-service",
    categoryLabel: "Jasa Digital & AI",
    modalRange: "< 500rb",
    modalMin: 0,
    modalMax: 100000,
    estMonthlyProfitMin: 6000000,
    estMonthlyProfitMax: 30000000,
    timeCommitment: "2-3 jam/hari",
    difficulty: "Menengah",
    timeToFirstCuan: "10 - 20 Hari",
    primaryPlatforms: ["LinkedIn"],
    toolsNeeded: ["LinkedIn", "Grammarly / Claude", "Notion Content Calendar"],
    unitEconomics: {
      hargaJualRata2: "Rp 3.000.000 - Rp 7.500.000 / retainer bulanan",
      hppOrCost: "Rp 0",
      marginPersen: "98%",
      volumeBulanan: "2 - 4 Founder",
    },
    stepByStepPlan: [
      { day: "Hari 1-3", action: "Optimasi profil LinkedIn pribadi dengan portofolio case study & sudut pandang tajam." },
      { day: "Hari 4-7", action: "Tulis 3 artikel breakdown bisnis viral (studi kasus unicorn lokal) untuk bukti kapabilitas." },
      { day: "Hari 8-14", action: "Kirim pesan koneksi personal ke founder series seed/bootstrap dengan 2 draf postingan gratis yang siap tayang." }
    ],
    pitfalls: ["Menulis postingan klise tanpa gaya bahasa autentik sang founder."],
    growthHack: "Lakukan interview audio 30 menit via WA voice note per minggu, lalu transcribe jadi 5 postingan LinkedIn."
  },
  {
    id: "snack-sehat-maklon-repack",
    title: "Brand Camilan Diet / Healthy Granola Curated",
    tagline: "Ambil dari produsen lokal / maklon kiloan, kemas dengan ziplock matte minimalis & branding modern.",
    category: "ecommerce",
    categoryLabel: "E-Commerce & Fisik",
    modalRange: "500rb - 2jt",
    modalMin: 800000,
    modalMax: 2000000,
    estMonthlyProfitMin: 4000000,
    estMonthlyProfitMax: 16000000,
    timeCommitment: "2-3 jam/hari",
    difficulty: "Mudah",
    timeToFirstCuan: "7 - 14 Hari",
    primaryPlatforms: ["Shopee", "Tokopedia", "Komunitas Kantor / Gym"],
    toolsNeeded: ["Standing Pouch Matte", "Stiker Label Vinyl", "Timbangan Digital"],
    unitEconomics: {
      hargaJualRata2: "Rp 38.000 / pack 200gr",
      hppOrCost: "Rp 16.000 (bahan + pouch + stiker)",
      marginPersen: "58%",
      volumeBulanan: "200 - 600 Pcs",
    },
    stepByStepPlan: [
      { day: "Hari 1-3", action: "Cari produsen granola / keripik oven di marketplace grosir atau sentra oleh-oleh lokal." },
      { day: "Hari 4-5", action: "Desain stiker brand minimalis ala Jepang/Korea di Canva, cetak 100 pcs di percetakan lokal." },
      { day: "Hari 6-8", action: "Bagikan tester ke teman kantor, komunitas lari/gym, minta review foto estetik." },
      { day: "Hari 9-14", action: "Buka pre-order batch 1 di Instagram story dan WhatsApp status." }
    ],
    pitfalls: ["Membeli bahan baku terlalu banyak di awal sebelum validasi rasa dan minat pasar."],
    growthHack: "Jadikan snack langganan kantor (corporate pantry subscription) dengan diskon kuantitas bulanan."
  },
  {
    id: "jasa-cuci-sepatu-express-panggilan",
    title: "Shoe Cleaning & Care On-Demand / Drop Point",
    tagline: "Layanan cuci sepatu premium antar-jemput untuk klaster perumahan atau area perkantoran padat.",
    category: "local-ops",
    categoryLabel: "Operasional & Jasa Lokal",
    modalRange: "500rb - 2jt",
    modalMin: 600000,
    modalMax: 1500000,
    estMonthlyProfitMin: 4500000,
    estMonthlyProfitMax: 14000000,
    timeCommitment: "2-4 jam/hari",
    difficulty: "Mudah",
    timeToFirstCuan: "3 - 7 Hari",
    primaryPlatforms: ["WhatsApp Group RT/RW", "Instagram Lokal", "Spanduk Mini"],
    toolsNeeded: ["Sikat Kuda & Mikrofiber", "Cairan Cleaner Khusus (AndrRows/ShoeMo)", "Shoe Tree"],
    unitEconomics: {
      hargaJualRata2: "Rp 40.000 - Rp 70.000 / pasang",
      hppOrCost: "Rp 6.000 (shampoo + air + plastik ziplock)",
      marginPersen: "88%",
      volumeBulanan: "100 - 250 Pasang",
    },
    stepByStepPlan: [
      { day: "Hari 1-2", action: "Beli paket starter cleaner sepatu profesional & sikat premium." },
      { day: "Hari 3", action: "Praktek cuci 5 pasang sepatu keluarga, foto Before/After dengan pencahayaan terang." },
      { day: "Hari 4-5", action: "Posting di WhatsApp grup komplek / RT: 'Promo Khusus Warga: Cuci 2 Pasang Gratis 1'." },
      { day: "Hari 6-7", action: "Ambil orderan perdana, selesaikan dalam 24 jam dengan wangi bubblegum khas." }
    ],
    pitfalls: ["Salah pilih cairan pembersih untuk bahan suede/nubuck yang sensitif luntur."],
    growthHack: "Bekerjasama dengan barbershop atau coffee shop lokal sebagai drop point dengan bagi hasil 15%."
  },
  {
    id: "ai-content-repurposing",
    title: "Agensi Repurposing Video Panjang Jadi 30 Shorts/TikTok",
    tagline: "Ubah 1 video YouTube / podcast klien jadi 15-30 video pendek viral dengan subtitle animasi bergerak.",
    category: "digital-service",
    categoryLabel: "Jasa Digital & AI",
    modalRange: "< 500rb",
    modalMin: 0,
    modalMax: 300000,
    estMonthlyProfitMin: 6000000,
    estMonthlyProfitMax: 28000000,
    timeCommitment: "2-4 jam/hari",
    difficulty: "Menengah",
    timeToFirstCuan: "5 - 10 Hari",
    primaryPlatforms: ["YouTube", "Instagram", "TikTok"],
    toolsNeeded: ["Opus Clip / Vizard.ai", "CapCut Pro", "Google Drive"],
    unitEconomics: {
      hargaJualRata2: "Rp 2.000.000 / paket 30 video shorts",
      hppOrCost: "Rp 200.000 (langganan AI tool)",
      marginPersen: "90%",
      volumeBulanan: "3 - 8 Podcaster / Kreator",
    },
    stepByStepPlan: [
      { day: "Hari 1-2", action: "Pilih 3 podcast Indonesia populer di YouTube yang klip pendeknya belum maksimal." },
      { day: "Hari 3-4", action: "Potong 2 klip terbaik, beri hook teks menarik, b-roll dinamis, dan subtitle viral." },
      { day: "Hari 5-6", action: "Kirim email / DM ke podcaster tersebut dengan subjek: 'Saya buatkan 2 video shorts gratis untuk channel Anda'." },
      { day: "Hari 7-10", action: "Konversi podcaster yang terkesan menjadi klien retainer bulanan." }
    ],
    pitfalls: ["Memotong bagian video yang membosankan tanpa punchline atau konteks yang jelas."],
    growthHack: "Tawarkan garansi: 'Jika engagement akun Anda tidak naik dalam 30 hari, kami kerjakan bulan berikutnya gratis!'"
  },
  {
    id: "print-on-demand-niche-profesi",
    title: "Merchandise Kaos & Totebag Niche Profesi (Guru, IT, Perawat)",
    tagline: "Desain kutipan relatable profesi di Canva, upload ke platform POD lokal, diproduksi hanya saat ada order.",
    category: "ecommerce",
    categoryLabel: "E-Commerce & Fisik",
    modalRange: "< 500rb",
    modalMin: 0,
    modalMax: 300000,
    estMonthlyProfitMin: 3000000,
    estMonthlyProfitMax: 15000000,
    timeCommitment: "1-2 jam/hari",
    difficulty: "Mudah",
    timeToFirstCuan: "7 - 14 Hari",
    primaryPlatforms: ["Tees.co.id / Ciptaloka / Tokopedia"],
    toolsNeeded: ["Canva", "Mockup Generator Free", "Akun TikTok Niche"],
    unitEconomics: {
      hargaJualRata2: "Rp 125.000 / kaos",
      hppOrCost: "Rp 75.000 (biaya cetak + kaos POD)",
      marginPersen: "40%",
      volumeBulanan: "80 - 300 Kaos",
    },
    stepByStepPlan: [
      { day: "Hari 1-2", action: "Riset jokes atau keresahan spesifik satu profesi (misal: Programmer lembur, Bidan shift malam)." },
      { day: "Hari 3", action: "Buat 5 desain tipografi minimalis menggunakan font lisensi komersial di Canva." },
      { day: "Hari 4", action: "Integrasikan toko Tokopedia dengan supplier vendor print-on-demand." },
      { day: "Hari 5-10", action: "Bikin konten POV relatable di TikTok memakai sound trending." }
    ],
    pitfalls: ["Menggunakan gambar berhak cipta (seperti karakter Disney atau logo brand terkenal)."],
    growthHack: "Bikin totebag edisi terbatas saat hari perayaan nasional profesi (Hari Guru, Hari Perawat, dll)."
  },
  {
    id: "jasa-optimasi-google-maps-umkm",
    title: "Optimasi Google Bisnisku & Local SEO Resto/Klinik",
    tagline: "Bantu bisnis lokal muncul di pencarian 'terdekat' di Google Maps, tambah review bintang 5 legal & foto menu.",
    category: "digital-service",
    categoryLabel: "Jasa Digital & AI",
    modalRange: "< 500rb",
    modalMin: 0,
    modalMax: 100000,
    estMonthlyProfitMin: 4000000,
    estMonthlyProfitMax: 18000000,
    timeCommitment: "2-3 jam/hari",
    difficulty: "Mudah",
    timeToFirstCuan: "3 - 7 Hari",
    primaryPlatforms: ["Google Maps / Google Business Profile"],
    toolsNeeded: ["Google My Business App", "Canva (Desain Menu)", "QR Code Generator"],
    unitEconomics: {
      hargaJualRata2: "Rp 750.000 - Rp 1.500.000 / lokasi",
      hppOrCost: "Rp 50.000 (cetak plakat QR Code akrilik)",
      marginPersen: "93%",
      volumeBulanan: "4 - 10 Toko",
    },
    stepByStepPlan: [
      { day: "Hari 1-2", action: "Pelajari cara verifikasi lokasi, penambahan kategori sekunder, dan penulisan deskripsi SEO Google Maps." },
      { day: "Hari 3-4", action: "Kunjungi 5 coffee shop / dokter gigi di sekitar rumah yang listing Google Maps-nya belum terverifikasi atau foto jelek." },
      { day: "Hari 5", action: "Tawarkan paket: Optimasi profil + cetak 1 stand akrilik QR review instan ke kasir." },
      { day: "Hari 6-7", action: "Tutup transaksi dan minta izin update foto beresolusi tinggi." }
    ],
    pitfalls: ["Membeli ulasan palsu (bot) yang bisa menyebabkan akun di-suspend oleh Google."],
    growthHack: "Bawa plakat akrilik contoh yang sudah tercetak rapi langsung ke hadapan owner saat presentasi."
  },
  {
    id: "micro-saas-sheet-automation",
    title: "Jual Spreadsheet Keuangan & Payroll Otomatis (AppSheet)",
    tagline: "Software akuntansi dan absensi mini untuk UMKM yang tidak mau bayar software jutaan per bulan.",
    category: "digital-product",
    categoryLabel: "Produk Digital",
    modalRange: "< 500rb",
    modalMin: 0,
    modalMax: 150000,
    estMonthlyProfitMin: 3500000,
    estMonthlyProfitMax: 20000000,
    timeCommitment: "2-3 jam/hari",
    difficulty: "Menengah",
    timeToFirstCuan: "7 - 14 Hari",
    primaryPlatforms: ["Google Sheets / AppSheet", "Lynk.id"],
    toolsNeeded: ["Google Workspace", "AppSheet Free Tier", "Loom (Video Panduan)"],
    unitEconomics: {
      hargaJualRata2: "Rp 199.000 - Rp 499.000 sekali beli",
      hppOrCost: "Rp 0",
      marginPersen: "96%",
      volumeBulanan: "20 - 60 Penjualan",
    },
    stepByStepPlan: [
      { day: "Hari 1-3", action: "Rancang sheet dashboard penjualan, inventori stok minim peringatan otomatis, dan slip gaji PDF." },
      { day: "Hari 4", action: "Rekam video demo 2 menit cara pakai yang mudah bahkan untuk orang gaptek." },
      { day: "Hari 5-7", action: "Posting video demo di TikTok & Instagram Reels dengan format 'Goodbye software mahal!'." }
    ],
    pitfalls: ["Tidak menyertakan video instruksi onboarding sehingga banyak komplain pengguna yang bingung."],
    growthHack: "Sertakan bonus konsultasi Zoom 15 menit untuk 50 pembeli pertama untuk menaikkan trust."
  },
  {
    id: "kopi-cold-brew-botolan-kantor",
    title: "Kopi Cold Brew Botolan 250ml Langganan Kantor",
    tagline: "Kopi artisan less sugar harga terjangkau (Rp 18rb) untuk pasokan kafein para pekerja kantoran.",
    category: "ecommerce",
    categoryLabel: "E-Commerce & Fisik",
    modalRange: "500rb - 2jt",
    modalMin: 700000,
    modalMax: 1800000,
    estMonthlyProfitMin: 3500000,
    estMonthlyProfitMax: 12000000,
    timeCommitment: "2 jam/hari (Pagi/Malam)",
    difficulty: "Mudah",
    timeToFirstCuan: "3 - 7 Hari",
    primaryPlatforms: ["WhatsApp", "Gojek/Grab Instant", "Bazaar Kantor"],
    toolsNeeded: ["French Press / Toddy Brewer", "Botol Kale 250ml", "Stiker Label"],
    unitEconomics: {
      hargaJualRata2: "Rp 18.000 - Rp 22.000 / botol",
      hppOrCost: "Rp 7.500 (biji kopi + susu + botol + stiker)",
      marginPersen: "62%",
      volumeBulanan: "250 - 600 Botol",
    },
    stepByStepPlan: [
      { day: "Hari 1-2", action: "Seduh 2 liter konsentrat cold brew 16 jam di kulkas rumah." },
      { day: "Hari 3", action: "Uji rasa 3 varian: Kopi Hitam Dingin, Kopi Susu Aren Rendah Gula, dan Kopi Susu Oat." },
      { day: "Hari 4", action: "Bawa 10 tester ke kantor atau teman satu gedung." },
      { day: "Hari 5-7", action: "Buka paket langganan mingguan (Senin-Jumat dapat 1 botol fresh di meja kerja)." }
    ],
    pitfalls: ["Menjaga kebersihan dan sanitasi botol agar kopi tahan minimal 5-7 hari dalam kulkas."],
    growthHack: "Bikin sistem jemput botol kosong (dapat diskon Rp 1.500 per botol yang dikembalikan) untuk loyalitas."
  }
];
