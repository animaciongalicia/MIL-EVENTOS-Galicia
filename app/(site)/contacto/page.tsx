import type { Metadata } from "next";
import Hero from "@/components/shared/Hero";
import FormularioContacto from "@/components/shared/FormularioContacto";
import { IconPhone, IconWhatsApp } from "@/components/shared/icons";
import { TELEFONO_CONTACTO, TELEFONO_CONTACTO_TEL_HREF, WHATSAPP_CONTACTO_HREF } from "@/data/contacto";

export const metadata: Metadata = {
  title: "Contacto | Mil Eventos Galicia",
  description: "Cuéntanos tu evento y te preparamos una propuesta.",
};

export default function ContactoPage() {
  return (
    <>
      <Hero titulo="Hablemos de tu evento" subtitulo="Cuéntanos qué necesitas, te contestamos rápido." />
      <div className="mx-auto flex max-w-xl flex-wrap justify-center gap-4 px-6 pt-8 text-sm">
        <a
          href={TELEFONO_CONTACTO_TEL_HREF}
          className="flex items-center gap-2 rounded-full border border-sand-300 px-4 py-2 transition hover:border-atlantico-600 hover:text-atlantico-700"
        >
          <IconPhone className="h-4 w-4" />
          Llamar · {TELEFONO_CONTACTO}
        </a>
        <a
          href={WHATSAPP_CONTACTO_HREF}
          className="flex items-center gap-2 rounded-full border border-sand-300 px-4 py-2 transition hover:border-atlantico-600 hover:text-atlantico-700"
        >
          <IconWhatsApp className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
      <p className="mx-auto mt-6 max-w-xl px-6 text-center text-sm text-ink-500">
        Sin formularios eternos ni esperas de una semana. Cuéntanos qué necesitas y te
        respondemos con una propuesta, no con un cuestionario.
      </p>
      <FormularioContacto />
    </>
  );
}
