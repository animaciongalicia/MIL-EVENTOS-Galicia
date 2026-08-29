import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import FooterGlobal from "@/components/layout/FooterGlobal";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });

export const metadata: Metadata = {
  title: "Mil Eventos Galicia",
  description: "Eventos para empresas en Galicia: team building, incentivos, jornadas outdoor, congresos y convenciones.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="bg-cream-100 font-sans text-ink-700">
        <Header />
        {children}
        <FooterGlobal />
      </body>
    </html>
  );
}
