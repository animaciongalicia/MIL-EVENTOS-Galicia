import type { Metadata } from "next";
import Hero from "@/components/shared/Hero";
import FormularioContacto from "@/components/shared/FormularioContacto";
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
        <a href={TELEFONO_CONTACTO_TEL_HREF} className="rounded-full border border-slate-300 px-4 py-2">
          Llamar · {TELEFONO_CONTACTO}
        </a>
        <a href={WHATSAPP_CONTACTO_HREF} className="rounded-full border border-slate-300 px-4 py-2">
          WhatsApp
        </a>
      </div>
      <p className="mx-auto mt-6 max-w-xl px-6 text-center text-sm text-slate-500">
        Sin formularios eternos ni esperas de una semana. Cuéntanos qué necesitas y te
        respondemos con una propuesta, no con un cuestionario.
      </p>
      <FormularioContacto />
    </>
  );
}
