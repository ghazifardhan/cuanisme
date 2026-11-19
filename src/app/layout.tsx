import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cuanisme | Platform Navigasi Cuan & Simulator Side-Hustle #1 Indonesia",
  description:
    "Validasi ide bisnis dan side-hustle dalam 60 detik. Kalkulator rate freelance anti-boncos, radar FIRE versi Rupiah, dan 48+ playbook bisnis tervalidasi.",
  keywords: [
    "cuan",
    "side hustle indonesia",
    "ide bisnis modal kecil",
    "kalkulator rate freelance",
    "fire calculator rupiah",
    "financial freedom indonesia",
    "solopreneur indonesia",
    "cara dapat uang tambahan",
  ],
  authors: [{ name: "Cuanisme Team" }],
  openGraph: {
    title: "Cuanisme - Validasi Ide & Kalkulator Potensi Cuan Kamu",
    description:
      "Stop tebak-tebakan. Hitung potensi cuan bersih, waktu balik modal, dan blueprint 7 hari bisnismu secara gratis.",
    url: "https://cuanisme.id",
    siteName: "Cuanisme",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cuanisme - Stop Halu, Hitung Cuan Nyata",
    description:
      "Simulator kelayakan bisnis & rate calculator freelancer paling akurat di Indonesia.",
  },
};

export const viewport: Viewport = {
  themeColor: "#06080c",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark scroll-smooth">
      <body className="min-h-screen bg-surface-base text-slate-100 antialiased selection:bg-cuan-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
