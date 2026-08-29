import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import FooterCelebraciones from "@/components/celebraciones/FooterCelebraciones";
import "../../globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });

// Layout raíz propio: NO reutiliza <Header>/<FooterGlobal> corporativos (CLAUDE.md §8).
export const metadata: Metadata = {
  title: "Celebraciones | Mil Eventos Galicia",
  description: "Cumpleaños de adultos, fincas y eventos especiales en Galicia.",
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
