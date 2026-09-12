"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

// Clave de consentimiento en localStorage. La comparte el banner de cookies.
export const CONSENT_KEY = "cookie-consent";
export const CONSENT_EVENT = "cookie-consent-changed";

// Google Analytics 4. Solo se carga si:
//  1) NEXT_PUBLIC_GA_ID está definido (formato "G-XXXXXXXXXX"), y
//  2) el usuario ha ACEPTADO cookies analíticas (RGPD — consentimiento previo).
// Sin ambas cosas no se inyecta ningún script ni se instala ninguna cookie.
export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const [consentido, setConsentido] = useState(false);

  useEffect(() => {
    const leer = () => {
      try {
        setConsentido(localStorage.getItem(CONSENT_KEY) === "accepted");
      } catch {
        setConsentido(false);
      }
    };
    leer();
    window.addEventListener(CONSENT_EVENT, leer);
    return () => window.removeEventListener(CONSENT_EVENT, leer);
  }, []);

  if (!gaId || !consentido) return null;

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
gtag('config', '${gaId}', { anonymize_ip: true });`}
      </Script>
    </>
  );
}
