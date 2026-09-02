import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import FooterGlobal from "@/components/layout/FooterGlobal";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });

const SITE_URL = "https://mileventosgalicia.com";
const DESCRIPCION_SITIO =
  "Eventos para empresas en Galicia: team building, incentivos, jornadas outdoor, congresos y convenciones.";

// Sin title.template: cada página ya añade "| Mil Eventos Galicia" a mano en
// su propio <title> (ver CLAUDE.md §9) — un template aquí lo duplicaría.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Mil Eventos Galicia",
  description: DESCRIPCION_SITIO,
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Mil Eventos Galicia",
    title: "Mil Eventos Galicia",
    description: DESCRIPCION_SITIO,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Mil Eventos Galicia",
    description: DESCRIPCION_SITIO,
  },
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
