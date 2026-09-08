import type { Metadata } from "next";
import FormularioContacto from "@/components/shared/FormularioContacto";
import { IconMail, IconMapPin, IconPhone, IconWhatsApp } from "@/components/shared/icons";
import {
  DIRECCION_CONTACTO,
  EMAIL_CONTACTO,
  TELEFONO_CONTACTO,
  TELEFONO_CONTACTO_TEL_HREF,
  WHATSAPP_CONTACTO_HREF,
} from "@/data/contacto";

export const metadata: Metadata = {
  title: "Contacto | Mil Eventos Galicia",
  description: "Cuéntanos tu evento y te preparamos una propuesta con opciones reales, no un cuestionario.",
};

const pasos = [
  {
    titulo: "Nos cuentas el objetivo",
    texto: "Qué evento, cuántos sois, fecha y presupuesto aproximado. En un mensaje corto basta.",
  },
  {
    titulo: "Te proponemos 2-3 opciones",
    texto: "Con precio y contenido cerrados, no un catálogo para que decidas tú solo.",
  },
  {
    titulo: "Lo montamos y estamos el día del evento",
    texto: "Cerramos cada pieza y lo resolvemos in situ — tú te ocupas de lo tuyo.",
  },
];

export default function ContactoPage() {
  return (
    <>
      {/* Cabecera editorial */}
      <section className="border-b border-sand-200 bg-cream-100">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-atlantico-600">
            Contacto
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-ink-900 sm:text-4xl">
            Hablemos de tu evento
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-600">
            Sin formularios eternos ni esperas de una semana. Cuéntanos qué necesitas y te
            respondemos con una propuesta, no con un cuestionario.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-10 px-6 py-16 lg:grid-cols-2">
        {/* Izquierda: contacto directo + qué pasa después */}
        <div>
          <h2 className="text-xl font-bold text-ink-900">Contacto directo</h2>
          <p className="mt-2 leading-relaxed text-ink-600">
            Si lo prefieres, escríbenos o llámanos y lo hablamos al momento.
          </p>
          <div className="mt-5 flex flex-col gap-3">
            <a
              href={WHATSAPP_CONTACTO_HREF}
              className="flex items-center gap-3 rounded-lg border border-sand-200 bg-cream-50 px-4 py-3 font-medium shadow-sm transition hover:border-atlantico-600 hover:text-atlantico-700"
            >
              <IconWhatsApp className="h-5 w-5 shrink-0 text-atlantico-700" />
              WhatsApp · respuesta rápida
            </a>
            <a
              href={TELEFONO_CONTACTO_TEL_HREF}
              className="flex items-center gap-3 rounded-lg border border-sand-200 bg-cream-50 px-4 py-3 font-medium shadow-sm transition hover:border-atlantico-600 hover:text-atlantico-700"
            >
              <IconPhone className="h-5 w-5 shrink-0 text-atlantico-700" />
              {TELEFONO_CONTACTO}
            </a>
            <a
              href={`mailto:${EMAIL_CONTACTO}`}
              className="flex items-center gap-3 rounded-lg border border-sand-200 bg-cream-50 px-4 py-3 font-medium shadow-sm transition hover:border-atlantico-600 hover:text-atlantico-700"
            >
              <IconMail className="h-5 w-5 shrink-0 text-atlantico-700" />
              {EMAIL_CONTACTO}
            </a>
            <p className="flex items-start gap-3 px-1 pt-1 text-sm leading-relaxed text-ink-500">
              <IconMapPin className="mt-0.5 h-5 w-5 shrink-0" />
              {DIRECCION_CONTACTO}
            </p>
          </div>

          <h2 className="mt-10 text-xl font-bold text-ink-900">Qué pasa después</h2>
          <ol className="mt-5 space-y-4">
            {pasos.map((paso, i) => (
              <li key={paso.titulo} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-atlantico-700 font-serif text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-ink-900">{paso.titulo}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-600">{paso.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Derecha: formulario en tarjeta */}
        <div className="rounded-2xl border border-sand-200 bg-cream-50 p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-bold text-ink-900">Cuéntanos tu evento</h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-600">
            Rellena esto y se abre tu correo con el mensaje ya redactado — solo le das a enviar.
          </p>
          <FormularioContacto claseWrapper="mt-6" copyEnvio="Enviar y hablar" />
        </div>
      </section>
    </>
  );
}
