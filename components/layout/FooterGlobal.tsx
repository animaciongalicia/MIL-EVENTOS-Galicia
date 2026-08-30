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
    <footer>
      {logosClientes.length > 0 && (
        <div className="border-t border-sand-200 bg-cream-200">
          <TiraLogos logos={logosClientes} />
        </div>
      )}
      <div className="bg-atlantico-800 px-6 py-10 text-sm text-cream-200">
        <div className="mx-auto max-w-5xl">
          <p className="font-semibold text-white">
            Más de 15 años haciendo que las cosas sucedan.
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            <a href={TELEFONO_CONTACTO_TEL_HREF} className="transition hover:text-white">
              {TELEFONO_CONTACTO}
            </a>
            <a href={WHATSAPP_CONTACTO_HREF} className="transition hover:text-white">
              WhatsApp
            </a>
            <a href={`mailto:${EMAIL_CONTACTO}`} className="transition hover:text-white">
              {EMAIL_CONTACTO}
            </a>
          </div>
          <div className="mt-4 flex flex-wrap gap-4">
            {ecosistemaMarcas.map((marca) => (
              <a key={marca.nombre} href={marca.url} className="transition hover:text-white">
                {marca.nombre}
              </a>
            ))}
            <Link href="/celebraciones" className="transition hover:text-white">
              Celebraciones
            </Link>
            <Link href="/nosotros" className="transition hover:text-white">
              Quiénes somos
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-4 border-t border-atlantico-600 pt-4 text-xs text-cream-300/80">
            <Link href="/aviso-legal" className="transition hover:text-white">
              Aviso legal
            </Link>
            <Link href="/politica-de-privacidad" className="transition hover:text-white">
              Política de privacidad
            </Link>
            <Link href="/politica-de-cookies" className="transition hover:text-white">
              Política de cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
