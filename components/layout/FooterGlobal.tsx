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

// Mapa del sitio: cada columna enlaza a fondo (páginas pilar y sub-páginas),
// no solo a las landings — ayuda a navegar y al enlazado interno (SEO).
const empresas = [
  { nombre: "Team building", href: "/eventos-empresa/team-building" },
  { nombre: "Incentivos", href: "/eventos-empresa/incentivos" },
  { nombre: "Jornadas outdoor", href: "/eventos-empresa/jornadas-outdoor" },
  { nombre: "Congresos y convenciones", href: "/eventos-empresa/congresos-y-convenciones" },
];
const actividades = [
  { nombre: "Outdoor", href: "/actividades/outdoor" },
  { nombre: "Indoor", href: "/actividades/indoor" },
  { nombre: "Gastronomía y vinos", href: "/actividades/gastronomia-y-vinos" },
  { nombre: "A medida", href: "/actividades/a-medida" },
];
const espacios = [
  { nombre: "Localización de espacios", href: "/espacios-y-recursos/localizacion-espacios" },
  { nombre: "Traslados", href: "/espacios-y-recursos/traslados" },
  { nombre: "Alojamiento", href: "/espacios-y-recursos/alojamiento" },
];
const celebraciones = [
  { nombre: "Cenas de empresa", href: "/celebraciones/cenas-de-empresa" },
  { nombre: "Celebraciones de empresa", href: "/celebraciones/celebraciones-de-empresa" },
  { nombre: "Cumpleaños y grupos", href: "/celebraciones/cumpleanos-y-grupos" },
  { nombre: "Animación y espectáculo", href: "/celebraciones/animacion-y-espectaculo" },
];
const institucional = [
  { nombre: "Quiénes somos", href: "/nosotros" },
  { nombre: "Blog", href: "/blog" },
  { nombre: "Contacto", href: "/contacto" },
];

const tituloClase = "text-xs font-semibold uppercase tracking-[0.15em] text-cream-300/80";
const enlaceClase = "block text-cream-200 transition hover:text-white";

function ColumnaEnlaces({
  titulo,
  tituloHref,
  enlaces,
}: {
  titulo: string;
  tituloHref: string;
  enlaces: { nombre: string; href: string }[];
}) {
  return (
    <div>
      <Link href={tituloHref} className={`${tituloClase} transition hover:text-white`}>
        {titulo}
      </Link>
      <div className="mt-3 flex flex-col gap-2">
        {enlaces.map((e) => (
          <Link key={e.href} href={e.href} className={enlaceClase}>
            {e.nombre}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function FooterGlobal() {
  return (
    <footer>
      {logosClientes.length > 0 && (
        <div className="border-t border-sand-200 bg-cream-200">
          <TiraLogos logos={logosClientes} />
        </div>
      )}
      <div className="bg-atlantico-800 px-6 py-14 text-sm text-cream-200">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 lg:grid-cols-6">
          {/* Marca + contacto + dirección (doble ancho) */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <p className="font-serif text-lg font-bold text-white">Mil Eventos Galicia</p>
            <p className="mt-2 max-w-xs leading-relaxed text-cream-200">
              Más de 15 años haciendo que las cosas sucedan. Eventos de empresa y celebraciones en
              Galicia, de principio a fin.
            </p>
            <div className="mt-5 flex flex-col gap-2.5">
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
              <p className="mt-1 flex items-start gap-2 leading-relaxed">
                <IconMapPin className="mt-0.5 h-4 w-4 shrink-0" />
                {DIRECCION_CONTACTO}
              </p>
            </div>
          </div>

          <ColumnaEnlaces titulo="Empresas" tituloHref="/eventos-empresa" enlaces={empresas} />
          <ColumnaEnlaces titulo="Actividades" tituloHref="/actividades" enlaces={actividades} />

          {/* Espacios + Celebraciones apilados en una columna */}
          <div className="space-y-8">
            <ColumnaEnlaces titulo="Espacios" tituloHref="/espacios-y-recursos" enlaces={espacios} />
            <ColumnaEnlaces titulo="Celebraciones" tituloHref="/celebraciones" enlaces={celebraciones} />
          </div>

          {/* Ecosistema + Institucional apilados */}
          <div className="space-y-8">
            <div>
              <p className={tituloClase}>Ecosistema</p>
              <div className="mt-3 flex flex-col gap-2">
                {ecosistemaMarcas.map((marca) => (
                  <Link key={marca.nombre} href={marca.href} className={enlaceClase}>
                    {marca.nombre}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className={tituloClase}>Mil Eventos</p>
              <div className="mt-3 flex flex-col gap-2">
                {institucional.map((e) => (
                  <Link key={e.href} href={e.href} className={enlaceClase}>
                    {e.nombre}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 flex max-w-5xl flex-col items-center justify-between gap-4 border-t border-atlantico-600 pt-6 text-xs text-cream-300/80 sm:flex-row">
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
