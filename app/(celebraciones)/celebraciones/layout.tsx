import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import FooterCelebraciones from "@/components/celebraciones/FooterCelebraciones";
import "../../globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });

const DESCRIPCION_CELEBRACIONES = "Cumpleaños de adultos, fincas y eventos especiales en Galicia.";

// Layout raíz propio: NO reutiliza <Header>/<FooterGlobal> corporativos (CLAUDE.md §8).
// metadataBase propio porque es un root layout independiente del corporativo
// (no hereda el metadataBase de app/(site)/layout.tsx).
export const metadata: Metadata = {
  metadataBase: new URL("https://mileventosgalicia.com"),
  title: "Celebraciones | Mil Eventos Galicia",
  description: DESCRIPCION_CELEBRACIONES,
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Mil Eventos Galicia",
    title: "Celebraciones | Mil Eventos Galicia",
    description: DESCRIPCION_CELEBRACIONES,
    url: "https://mileventosgalicia.com/celebraciones",
  },
  twitter: {
    card: "summary_large_image",
    title: "Celebraciones | Mil Eventos Galicia",
    description: DESCRIPCION_CELEBRACIONES,
  },
};

export default function CelebracionesLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="bg-terracota-50 font-sans text-ink-700">
        {children}
        <FooterCelebraciones />
      </body>
    </html>
  );
}
