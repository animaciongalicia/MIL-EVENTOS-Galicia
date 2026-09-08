import Script from "next/script";

// Google Analytics 4 (GA4). Solo se carga si NEXT_PUBLIC_GA_ID está definido en
// las variables de entorno de Vercel (formato "G-XXXXXXXXXX"). Mientras no lo
// esté, no se inyecta ningún script — la web funciona igual sin analítica.
// Nota RGPD: para producción conviene condicionar esto a un banner de
// consentimiento de cookies (ver /politica-de-cookies). Pendiente §2 CLAUDE.md.
export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  if (!gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`}
      </Script>
    </>
  );
}
