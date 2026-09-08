import Link from "next/link";
import TiraLogos from "@/components/shared/TiraLogos";
import { logosClientes } from "@/data/logos-clientes";
import { ecosistemaMarcas } from "@/data/ecosistema-marcas";
import { IconMail, IconMapPin, IconPhone, IconWhatsApp } from "@/components/shared/icons";
import {
  DIRECCION_CONTACTO,
  EMAIL_CONTACTO,
  TELEFONO_CONTACTO,
  TELEFONO_CONTACTO_TEL_HREF,
  WHATSAPP_CONTACTO_HREF,
} from "@/data/contacto";

const explora = [
  { nombre: "Eventos de empresa", href: "/eventos-empresa" },
  { nombre: "Actividades", href: "/actividades" },
  { nombre: "Espacios y recursos", href: "/espacios-y-recursos" },
  { nombre: "Celebraciones", href: "/celebraciones" },
];
const institucional = [
  { nombre: "Blog", href: "/blog" },
  { nombre: "Quiénes somos", href: "/nosotros" },
  { nombre: "Contacto", href: "/contacto" },
];

const tituloClase = "text-xs font-semibold uppercase tracking-[0.15em] text-cream-300/80";
const enlaceClase = "block text-cream-200 transition hover:text-white";

export default function FooterGlobal() {
  return (
    <footer>
      {logosClientes.length > 0 && (
        <div className="border-t border-sand-200 bg-cream-200">
          <TiraLogos logos={logosClientes} />
        </div>
      )}
      <div className="bg-atlantico-800 px-6 py-16 text-sm text-cream-200">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Marca + contacto (doble ancho) */}
          <div className="lg:col-span-2">
            <p className="font-serif text-lg font-bold text-white">Mil Eventos Galicia</p>
            <p className="mt-3 max-w-sm leading-relaxed text-cream-200">
              Más de 15 años haciendo que las cosas sucedan. Eventos de empresa y celebraciones en
              Galicia, resueltos de principio a fin.
            </p>
            <div className="mt-6 flex flex-col gap-2.5">
              <a href={TELEFONO_CONTACTO_TEL_HREF} className="flex items-center gap-2 transition hover:text-white">
                <IconPhone className="h-4 w-4 shrink-0" />
                {TELEFONO_CONTACTO}
              </a>
              <a href={WHATSAPP_CONTACTO_HREF} className="flex items-center gap-2 transition hover:text-white">
                <IconWhatsApp className="h-4 w-4 shrink-0" />
                WhatsApp
              </a>
              <a href={`mailto:${EMAIL_CONTACTO}`} className="flex items-center gap-2 transition hover:text-white">
                <IconMail className="h-4 w-4 shrink-0" />
                {EMAIL_CONTACTO}
              </a>
              <p className="mt-1 flex items-start gap-2 leading-relaxed text-cream-300/90">
                <IconMapPin className="mt-0.5 h-4 w-4 shrink-0" />
                {DIRECCION_CONTACTO}
              </p>
            </div>
          </div>

          {/* Explora */}
          <div>
            <p className={tituloClase}>Explora</p>
            <div className="mt-4 flex flex-col gap-2.5">
              {explora.map((e) => (
                <Link key={e.href} href={e.href} className={enlaceClase}>
                  {e.nombre}
                </Link>
              ))}
            </div>
          </div>

          {/* Mil Eventos + Ecosistema */}
          <div className="space-y-8">
            <div>
              <p className={tituloClase}>Mil Eventos</p>
              <div className="mt-4 flex flex-col gap-2.5">
                {institucional.map((e) => (
                  <Link key={e.href} href={e.href} className={enlaceClase}>
                    {e.nombre}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className={tituloClase}>Ecosistema</p>
              <div className="mt-4 flex flex-col gap-2.5">
                {ecosistemaMarcas.map((marca) => (
                  <Link key={marca.nombre} href={marca.href} className={enlaceClase}>
                    {marca.nombre}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 flex max-w-5xl flex-col items-center justify-between gap-4 border-t border-atlantico-600 pt-6 text-xs text-cream-300/80 sm:flex-row">
          <p>© {new Date().getFullYear()} Mil Eventos Galicia</p>
          <div className="flex flex-wrap justify-center gap-4">
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
