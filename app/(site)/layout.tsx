import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import FooterGlobal from "@/components/layout/FooterGlobal";
import Analytics from "@/components/analytics/Analytics";
import CookieConsent from "@/components/analytics/CookieConsent";
import {
  CIF,
  DIRECCION_CALLE,
  DIRECCION_CP,
  DIRECCION_LOCALIDAD,
  EMAIL_CONTACTO,
  NOMBRE_COMERCIAL,
  RAZON_SOCIAL,
  TELEFONO_CONTACTO_TEL_HREF,
} from "@/data/contacto";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });

const SITE_URL = "https://mileventosgalicia.com";
const DESCRIPCION_SITIO =
  "Eventos para empresas en Galicia: team building, incentivos, jornadas outdoor, congresos y convenciones.";

// Token de verificación de Google Search Console (método "etiqueta HTML").
// Es público (aparece en el <head>), así que va hardcodeado como valor por
// defecto; una variable de entorno en Vercel puede sobreescribirlo.
const GSC_VERIFICATION =
  process.env.NEXT_PUBLIC_GSC_VERIFICATION || "VG5mGqoD-CzMnmMRYfO4qjCoG5TZD_oO56YoOSni7M4";

// JSON-LD Organization/LocalBusiness — ayuda a Google y a los LLMs a entender
// la entidad (nombre, NAP, servicios, zona) y a citarla/recomendarla. Datos
// legales reales centralizados en data/contacto.ts.
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: NOMBRE_COMERCIAL,
  legalName: RAZON_SOCIAL,
  vatID: CIF,
  url: SITE_URL,
  email: EMAIL_CONTACTO,
  telephone: TELEFONO_CONTACTO_TEL_HREF.replace("tel:", ""),
  description:
    "Agencia con más de 15 años organizando eventos para empresas en Galicia: team building, incentivos, jornadas outdoor, congresos y convenciones. También localiza espacios, gestiona traslados y alojamiento, y organiza celebraciones con animación propia (DJs, cómicos, monólogos y drag queens).",
  address: {
    "@type": "PostalAddress",
    streetAddress: DIRECCION_CALLE,
    postalCode: DIRECCION_CP,
    addressLocality: DIRECCION_LOCALIDAD,
    addressRegion: "Galicia",
    addressCountry: "ES",
  },
  areaServed: { "@type": "AdministrativeArea", name: "Galicia" },
  knowsLanguage: ["es", "gl"],
  slogan: "Más de 15 años haciendo que las cosas sucedan.",
};

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
  verification: { google: GSC_VERIFICATION },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="bg-cream-100 font-sans text-ink-700">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Header />
        {children}
        <FooterGlobal />
        <Analytics />
        <CookieConsent />
      </body>
    </html>
  );
}
