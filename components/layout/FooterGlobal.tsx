import Link from "next/link";
import TiraLogos from "@/components/shared/TiraLogos";
import { logosClientes } from "@/data/logos-clientes";
import { ecosistemaMarcas } from "@/data/ecosistema-marcas";
import {
  EMAIL_CONTACTO,
  TELEFONO_CONTACTO,
  TELEFONO_CONTACTO_TEL_HREF,
  WHATSAPP_CONTACTO_HREF,
} from "@/data/contacto";

export default function FooterGlobal() {
  return (
    <footer className="border-t border-sand-200 bg-cream-100">
      <TiraLogos logos={logosClientes} />
      <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-ink-600">
        <p className="font-semibold text-atlantico-700">
          Más de 15 años haciendo que las cosas sucedan.
        </p>
        <div className="mt-4 flex flex-wrap gap-4">
          <a href={TELEFONO_CONTACTO_TEL_HREF}>{TELEFONO_CONTACTO}</a>
          <a href={WHATSAPP_CONTACTO_HREF}>WhatsApp</a>
          <a href={`mailto:${EMAIL_CONTACTO}`}>{EMAIL_CONTACTO}</a>
        </div>
        <div className="mt-4 flex flex-wrap gap-4">
          {ecosistemaMarcas.map((marca) => (
            <a key={marca.nombre} href={marca.url}>
              {marca.nombre}
            </a>
          ))}
          <Link href="/celebraciones">Celebraciones</Link>
          <Link href="/nosotros">Quiénes somos</Link>
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-xs text-ink-500">
          <Link href="/aviso-legal">Aviso legal</Link>
          <Link href="/politica-de-privacidad">Política de privacidad</Link>
          <Link href="/politica-de-cookies">Política de cookies</Link>
        </div>
      </div>
    </footer>
  );
}
