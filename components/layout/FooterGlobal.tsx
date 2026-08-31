import Link from "next/link";
import TiraLogos from "@/components/shared/TiraLogos";
import { logosClientes } from "@/data/logos-clientes";
import { ecosistemaMarcas } from "@/data/ecosistema-marcas";
import {
  DIRECCION_CONTACTO,
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
      <div className="bg-atlantico-800 px-6 py-12 text-sm text-cream-200">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-semibold text-white">Mil Eventos Galicia</p>
            <p className="mt-2 leading-relaxed">Más de 15 años haciendo que las cosas sucedan.</p>
            <div className="mt-4 flex flex-col gap-2">
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
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-cream-300/80">
              Ecosistema
            </p>
            <div className="mt-3 flex flex-col gap-2">
              {ecosistemaMarcas.map((marca) => (
                <a key={marca.nombre} href={marca.url} className="transition hover:text-white">
                  {marca.nombre}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-cream-300/80">
              Enlaces
            </p>
            <div className="mt-3 flex flex-col gap-2">
              <Link href="/celebraciones" className="transition hover:text-white">
                Celebraciones
              </Link>
              <Link href="/nosotros" className="transition hover:text-white">
                Quiénes somos
              </Link>
              <Link href="/blog" className="transition hover:text-white">
                Blog
              </Link>
              <Link href="/contacto" className="transition hover:text-white">
                Contacto
              </Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-cream-300/80">
              Dirección
            </p>
            <p className="mt-3 leading-relaxed">{DIRECCION_CONTACTO}</p>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-4 border-t border-atlantico-600 pt-6 text-center text-xs text-cream-300/80">
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
    </footer>
  );
}
