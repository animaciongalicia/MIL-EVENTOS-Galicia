"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CONSENT_KEY, CONSENT_EVENT } from "@/components/analytics/Analytics";

// Banner de consentimiento de cookies (RGPD / LSSI art. 22.2). Aparece en la
// primera visita; guarda la decisión en localStorage y avisa a <Analytics>.
// Mientras no haya decisión o si se rechaza, no se carga ninguna cookie.
export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(CONSENT_KEY)) setVisible(true);
    } catch {
      // Si localStorage no está disponible, no mostramos el banner ni cargamos nada.
    }
  }, []);

  function decidir(valor: "accepted" | "rejected") {
    try {
      localStorage.setItem(CONSENT_KEY, valor);
    } catch {
      // ignorar
    }
    window.dispatchEvent(new Event(CONSENT_EVENT));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-atlantico-600 bg-atlantico-800 px-6 py-4 text-sm text-cream-100 shadow-lg">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="leading-relaxed">
          Usamos cookies propias y de terceros (Google Analytics) para medir el uso de la web. Solo
          se activan si las aceptas.{" "}
          <Link href="/politica-de-cookies" className="underline hover:text-white">
            Más información
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => decidir("rejected")}
            className="rounded-full border border-cream-50/40 px-5 py-2 font-semibold text-cream-50 transition hover:bg-cream-50/10"
          >
            Rechazar
          </button>
          <button
            type="button"
            onClick={() => decidir("accepted")}
            className="rounded-full bg-cream-50 px-5 py-2 font-semibold text-atlantico-800 transition hover:bg-white"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
