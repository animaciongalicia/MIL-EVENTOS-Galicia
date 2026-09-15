import Link from "next/link";
import Image from "next/image";
import TiraLogos from "@/components/shared/TiraLogos";
import { logosClientes } from "@/data/logos-clientes";
import { ecosistemaMarcas } from "@/data/ecosistema-marcas";
import { provincias } from "@/data/provincias";
import { IconMail, IconMapPin, IconPhone, IconWhatsApp } from "@/components/shared/icons";
import {
  DIRECCION_CONTACTO,
  EMAIL_CONTACTO,
  TELEFONO_CONTACTO,
  TELEFONO_CONTACTO_TEL_HREF,
  WHATSAPP_CONTACTO_HREF,
} from "@/data/contacto";

const empresas = [
  { nombre: "Team building", href: "/eventos-empresa/team-building" },
  { nombre: "Incentivos", href: "/eventos-empresa/incentivos" },
  { nombre: "Jornadas outdoor", href: "/eventos-empresa/jornadas-outdoor" },
  { nombre: "Congresos y convenciones", href: "/eventos-empresa/congresos-y-convenciones" },
];
const servicios = [
  { nombre: "Actividades", href: "/actividades" },
  { nombre: "Espacios y recursos", href: "/espacios-y-recursos" },
  { nombre: "Celebraciones", href: "/celebraciones" },
];
const institucional = [
  { nombre: "Blog", href: "/blog" },
  { nombre: "Quiénes somos", href: "/nosotros" },
  { nombre: "Contacto", href: "/contacto" },
];
const zonas = provincias.map((provincia) => ({
  nombre: provincia.nombre,
  href: `/eventos-en-galicia/${provincia.slug}`,
}));

const tituloClase = "text-xs font-semibold uppercase tracking-[0.15em] text-cream-300/80";
const enlaceClase = "block text-cream-200 transition hover:text-white";

function Columna({
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
      <div className="mt-4 flex flex-col gap-2.5">
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
      <div className="bg-atlantico-800 px-6 py-16 text-sm text-cream-200">
        {/* 5 columnas: marca+contacto (doble) · Empresas · Servicios · Mil Eventos (+Ecosistema) · Zonas */}
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-6">
          <div className="col-span-2">
            <Image
              src="/images/logo-mileventos-blanco.png"
              alt="Mil Eventos Galicia"
              width={250}
              height={30}
              className="h-7 w-auto"
            />
            <p className="mt-4 max-w-xs leading-relaxed text-cream-200">
              Más de 15 años haciendo que las cosas sucedan en Galicia.
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
              <p className="mt-1 flex items-start gap-2 leading-relaxed text-cream-300/90">
                <IconMapPin className="mt-0.5 h-4 w-4 shrink-0" />
                {DIRECCION_CONTACTO}
              </p>
            </div>
          </div>

          <Columna titulo="Empresas" tituloHref="/eventos-empresa" enlaces={empresas} />
          <Columna titulo="Servicios" tituloHref="/actividades" enlaces={servicios} />

          {/* Mil Eventos con Ecosistema apilado debajo */}
          <div>
            <Columna titulo="Mil Eventos" tituloHref="/nosotros" enlaces={institucional} />
            <div className="mt-8">
              <span className={tituloClase}>Ecosistema</span>
              <div className="mt-4 flex flex-col gap-2.5">
                {ecosistemaMarcas.map((marca) => (
                  <Link key={marca.nombre} href={marca.href} className={enlaceClase}>
                    {marca.nombre}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Columna titulo="Zonas de Galicia" tituloHref="/eventos-en-galicia" enlaces={zonas} />
        </div>

        <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-atlantico-600 pt-6 text-xs text-cream-300/80 sm:flex-row">
          <p>© {new Date().getFullYear()} Mil Eventos Galicia · Inversiones SHISO, S.L.</p>
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
