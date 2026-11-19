export function formatRupiah(value: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatCompactRupiah(value: number): string {
  if (value >= 1_000_000_000) {
    return `Rp ${(value / 1_000_000_000).toFixed(1)} M`;
  }
  if (value >= 1_000_000) {
    return `Rp ${(value / 1_000_000).toFixed(1)} Jt`;
  }
  if (value >= 1_000) {
    return `Rp ${(value / 1_000).toFixed(0)} Rb`;
  }
  return formatRupiah(value);
}

// ----------------- CUAN VIABILITY CALCULATOR -----------------
export interface ViabilityInput {
  modal: number; // e.g. 1000000
  hoursPerDay: number; // 1 to 12
  skill: "tech" | "design-content" | "marketing-sales" | "ops-craft" | "data-admin";
  risk: "safe" | "moderate" | "aggressive";
  targetIncome: number; // e.g. 5000000
}

export interface ViabilityResult {
  score: number; // 0 - 100
  verdict: "Sangat Potensial" | "Layak Dijalankan" | "Butuh Penyesuaian" | "Resiko Boncos";
  verdictColor: string;
  verdictDescription: string;
  estMonthlyProfitMin: number;
  estMonthlyProfitMax: number;
  paybackPeriodText: string;
  recommendedCategory: string;
  capitalSufficiency: "Kurang" | "Ideal" | "Lebih dari Cukup";
  keyStrengths: string[];
  keyRisks: string[];
  actionPlan7Days: { day: string; title: string; task: string }[];
}

export function calculateViability(input: ViabilityInput): ViabilityResult {
  let score = 50;

  // Capital evaluation
  const targetModalRatio = input.modal / Math.max(input.targetIncome * 0.4, 500000);
  if (targetModalRatio >= 1.5) score += 18;
  else if (targetModalRatio >= 0.8) score += 12;
  else if (targetModalRatio >= 0.3) score += 6;
  else score -= 10;

  // Hours per day
  if (input.hoursPerDay >= 4) score += 16;
  else if (input.hoursPerDay >= 2) score += 12;
  else score += 4;

  // Skills leverage
  if (input.skill === "tech" || input.skill === "marketing-sales") score += 12;
  else if (input.skill === "design-content") score += 10;
  else score += 8;

  // Risk alignment
  if (input.risk === "moderate") score += 8;
  else if (input.risk === "safe") score += 4;
  else score += 6;

  // Realistic bounds
  score = Math.min(Math.max(Math.round(score), 20), 98);

  let verdict: ViabilityResult["verdict"] = "Layak Dijalankan";
  let verdictColor = "text-emerald-400";
  let verdictDescription = "";

  if (score >= 80) {
    verdict = "Sangat Potensial";
    verdictColor = "text-cuan-accent";
    verdictDescription =
      "Rasio modal, alokasi waktu, dan skill kamu sangat solid. Probabilitas mencapai profit positif dalam 30 hari di atas 85%.";
  } else if (score >= 65) {
    verdict = "Layak Dijalankan";
    verdictColor = "text-emerald-400";
    verdictDescription =
      "Kombinasi input kamu realistis untuk menghasilkan side-income stabil jika konsisten eksekusi tanpa gonta-ganti ide.";
  } else if (score >= 45) {
    verdict = "Butuh Penyesuaian";
    verdictColor = "text-amber-400";
    verdictDescription =
      "Target income mungkin terlalu ambisius untuk alokasi waktu harian saat ini. Tambah jam kerja atau fokus pada produk margin tebal.";
  } else {
    verdict = "Resiko Boncos";
    verdictColor = "text-rose-400";
    verdictDescription =
      "Modal terlalu minim atau jam kerja kurang cukup untuk model bisnis ini. Pilih model Rp 0 modal berbasis jasa terlebih dahulu.";
  }

  // Estimated profit multiplier based on input
  const baseMultiplier = input.hoursPerDay * 30 * 45000;
  const capitalLeverage = input.modal * 0.45;
  const estMonthlyProfitMin = Math.round(
    Math.max(baseMultiplier * 0.7 + capitalLeverage * 0.2, input.targetIncome * 0.4) / 100000
  ) * 100000;
  const estMonthlyProfitMax = Math.round(
    Math.max(estMonthlyProfitMin * 2.2, input.targetIncome * 1.3) / 100000
  ) * 100000;

  // Payback period
  let paybackPeriodText = "2 - 4 Minggu";
  if (input.modal < 500000) paybackPeriodText = "3 - 7 Hari (Cepat)";
  else if (input.modal <= 2000000) paybackPeriodText = "2 - 3 Minggu";
  else if (input.modal <= 10000000) paybackPeriodText = "1 - 2 Bulan";
  else paybackPeriodText = "2 - 4 Bulan";

  // Capital Sufficiency
  let capitalSufficiency: ViabilityResult["capitalSufficiency"] = "Ideal";
  if (targetModalRatio < 0.4) capitalSufficiency = "Kurang";
  else if (targetModalRatio > 2.0) capitalSufficiency = "Lebih dari Cukup";

  // Category recommendation
  let recommendedCategory = "Jasa Digital & AI";
  if (input.modal < 500000) {
    recommendedCategory = input.skill === "design-content" ? "Produk Digital & Template" : "Jasa Digital & Automasi";
  } else if (input.modal <= 3000000) {
    recommendedCategory = input.skill === "marketing-sales" ? "Kreator & Affiliate Niche" : "Jasa Spesialis B2B";
  } else {
    recommendedCategory = "E-Commerce Niche & Brand Fisik";
  }

  return {
    score,
    verdict,
    verdictColor,
    verdictDescription,
    estMonthlyProfitMin,
    estMonthlyProfitMax,
    paybackPeriodText,
    recommendedCategory,
    capitalSufficiency,
    keyStrengths: [
      `Waktu ${input.hoursPerDay} jam/hari cukup untuk validasi sprint 7 hari tanpa burnout.`,
      `Kategori skill ${input.skill} punya demand likuid di pasar Indonesia saat ini.`,
      `Model operasional minim overhead tetap menghasilkan margin laba bersih > 60%.`,
    ],
    keyRisks: [
      "Jebakan perfeksionisme: menunda rilis karena merasa website/produk belum sempurna.",
      "Kelemahan distribusi: tidak aktif menawarkan solusi langsung ke 20 prospek pertama.",
    ],
    actionPlan7Days: [
      { day: "Hari 1", title: "Validasi Pasar Cepat", task: "Riset 5 kompetitor lokal di TikTok/Instagram/Tokopedia. Catat harga & review bintang 1-3 mereka." },
      { day: "Hari 2", title: "Definisi 'Irresistible Offer'", task: "Buat 1 paket penawaran spesifik dengan garansi (contoh: 'Hasil jadi 48 jam atau diskon 50%')." },
      { day: "Hari 3", title: "Bikin Sample / Portofolio Kilat", task: "Buat 1 contoh studi kasus nyata menggunakan Canva/Framer/Sheet gratis." },
      { day: "Hari 4", title: "Setup Kanal Pembayaran & Kontak", task: "Buat link Lynk.id / nomor WhatsApp bisnis khusus dengan auto-greeting sopan." },
      { day: "Hari 5", title: "Outreach Gelombang 1", task: "Kirim pesan penawaran personal ke 25 orang/bisnis yang tepat sasaran." },
      { day: "Hari 6", title: "Follow-up & Handle Objections", task: "Tindak lanjuti prospek yang merespons dengan voice note ramah dan solusi konkrit." },
      { day: "Hari 7", title: "Closing & Pengiriman Pertama", task: "Ambil uang muka (DP 50%), selesaikan deliverable, dan minta testimoni video/chat!" },
    ],
  };
}

// ----------------- FREELANCER RATE CALCULATOR -----------------
export interface FreelanceInput {
  targetNetIncomeMonthly: number; // e.g. 10000000
  monthlyExpenses: number; // e.g. 2000000 (tools, wifi, coworking)
  billableHoursPerWeek: number; // e.g. 20
  annualVacationWeeks: number; // e.g. 4
  bufferMarginPct: number; // e.g. 20 (for emergency / bench time)
  taxMode: "pp55" | "pph21" | "none"; // PP 55 (0.5% UMKM final) or standard PPh 21
}

export interface FreelanceResult {
  hourlyRate: number;
  dailyRate: number; // 7h
  weeklyRate: number;
  minimumProjectRate: number;
  targetGrossAnnual: number;
  annualTaxEst: number;
  totalAnnualHours: number;
  tierPricing: {
    starter: number;
    standard: number;
    premium: number;
  };
  proposalSummaryText: string;
}

export function calculateFreelanceRate(input: FreelanceInput): FreelanceResult {
  const workingWeeksPerYear = Math.max(52 - input.annualVacationWeeks, 20);
  const totalAnnualHours = workingWeeksPerYear * input.billableHoursPerWeek;

  // Monthly net required * 12 + annual expenses
  const annualNetRequired = input.targetNetIncomeMonthly * 12;
  const annualOperatingExpenses = input.monthlyExpenses * 12;

  // Buffer
  const bufferMultiplier = 1 + input.bufferMarginPct / 100;
  const rawAnnualNeeded = (annualNetRequired + annualOperatingExpenses) * bufferMultiplier;

  // Tax calculation
  let taxMultiplier = 1.0;
  if (input.taxMode === "pp55") {
    // 0.5% flat if gross > 500jt for perorangan, or flat 0.5%
    taxMultiplier = 1 / (1 - 0.005);
  } else if (input.taxMode === "pph21") {
    // effective average ~8% for standard freelance brackets
    taxMultiplier = 1 / (1 - 0.08);
  }

  const targetGrossAnnual = Math.round(rawAnnualNeeded * taxMultiplier);
  const annualTaxEst = Math.round(targetGrossAnnual - rawAnnualNeeded);

  const rawHourly = targetGrossAnnual / Math.max(totalAnnualHours, 100);
  // Round to nearest Rp 5.000
  const hourlyRate = Math.ceil(rawHourly / 5000) * 5000;
  const dailyRate = hourlyRate * 7;
  const weeklyRate = hourlyRate * input.billableHoursPerWeek;
  const minimumProjectRate = hourlyRate * 12; // minimal 1.5 hari pengerjaan

  const tierPricing = {
    starter: Math.round(hourlyRate * 8 / 25000) * 25000,
    standard: Math.round(hourlyRate * 25 / 50000) * 50000,
    premium: Math.round(hourlyRate * 60 / 100000) * 100000,
  };

  const proposalSummaryText = `Halo! Terima kasih atas diskusinya. Berdasarkan ruang lingkup pekerjaan ini, estimasi fee profesional adalah ${formatRupiah(tierPricing.standard)} (durasi pengerjaan ~2 minggu, mencakup 2 putaran revisi dan garansi support 14 hari). Jika tertarik, invoice DP 50% akan saya kirimkan agar slot pengerjaan minggu ini segera diamankan. Terima kasih!`;

  return {
    hourlyRate,
    dailyRate,
    weeklyRate,
    minimumProjectRate,
    targetGrossAnnual,
    annualTaxEst,
    totalAnnualHours,
    tierPricing,
    proposalSummaryText,
  };
}

// ----------------- FIRE & RUNWAY RADAR -----------------
export interface FireInput {
  monthlyExpenses: number; // e.g. 6000000
  currentSavings: number; // e.g. 50000000
  monthlyInvestment: number; // e.g. 3000000
  annualReturnPct: number; // e.g. 7.5% (SBN/Index)
  inflationPct: number; // e.g. 4.0%
}

export interface FireResult {
  fireNumber: number; // 25x annual expenses (4% rule)
  leanFireNumber: number; // 20x annual expenses (5% rule)
  fatFireNumber: number; // 33x annual expenses (3% rule)
  runwayMonths: number;
  yearsToFire: number;
  monthlyPassiveIncomeAtFire: number;
  emergencyFundStatus: "Kritis (< 3 Bln)" | "Waspada (3-6 Bln)" | "Aman (6-12 Bln)" | "Bebas Cemas (> 12 Bln)";
  emergencyFundColor: string;
}

export function calculateFireRadar(input: FireInput): FireResult {
  const annualExpenses = input.monthlyExpenses * 12;
  const fireNumber = annualExpenses * 25; // 4% rule
  const leanFireNumber = annualExpenses * 20; // 5% rule
  const fatFireNumber = annualExpenses * 33; // 3% rule

  const runwayMonths = Number((input.currentSavings / Math.max(input.monthlyExpenses, 1)).toFixed(1));

  let emergencyFundStatus: FireResult["emergencyFundStatus"] = "Aman (6-12 Bln)";
  let emergencyFundColor = "text-emerald-400";

  if (runwayMonths < 3) {
    emergencyFundStatus = "Kritis (< 3 Bln)";
    emergencyFundColor = "text-rose-400";
  } else if (runwayMonths < 6) {
    emergencyFundStatus = "Waspada (3-6 Bln)";
    emergencyFundColor = "text-amber-400";
  } else if (runwayMonths <= 12) {
    emergencyFundStatus = "Aman (6-12 Bln)";
    emergencyFundColor = "text-emerald-400";
  } else {
    emergencyFundStatus = "Bebas Cemas (> 12 Bln)";
    emergencyFundColor = "text-cuan-accent";
  }

  // Real annual net rate of return (Fisher equation approximate)
  const realReturnRate = Math.max((input.annualReturnPct - input.inflationPct) / 100, 0.01);
  const monthlyRealRate = realReturnRate / 12;

  // Simulate months to reach fireNumber
  let currentBalance = input.currentSavings;
  let monthsCount = 0;
  const maxMonths = 600; // 50 years cap

  while (currentBalance < fireNumber && monthsCount < maxMonths) {
    currentBalance = currentBalance * (1 + monthlyRealRate) + input.monthlyInvestment;
    monthsCount++;
  }

  const yearsToFire = Number((monthsCount / 12).toFixed(1));
  const monthlyPassiveIncomeAtFire = Math.round((fireNumber * 0.04) / 12);

  return {
    fireNumber,
    leanFireNumber,
    fatFireNumber,
    runwayMonths,
    yearsToFire,
    monthlyPassiveIncomeAtFire,
    emergencyFundStatus,
    emergencyFundColor,
  };
}
