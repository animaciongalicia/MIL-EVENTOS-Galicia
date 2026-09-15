import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Hero from "@/components/shared/Hero";
import CitaDestacada from "@/components/shared/CitaDestacada";
import TarjetasTexto from "@/components/shared/TarjetasTexto";
import CTAFinal from "@/components/shared/CTAFinal";
import { getProvincia, provincias } from "@/data/provincias";

type ProvinciaPageProps = {
  params: { provincia: string };
};

export function generateStaticParams() {
  return provincias.map((p) => ({ provincia: p.slug }));
}

export function generateMetadata({ params }: ProvinciaPageProps): Metadata {
  const provincia = getProvincia(params.provincia);
  if (!provincia) return {};
  return { title: provincia.titulo, description: provincia.descripcion };
}

// Enlaces internos obligatorios (§9): cada página de provincia enlaza a las pilares
// para repartir autoridad y dar por dónde seguir, sin canibalizar su keyword.
const servicios = [
  { nombre: "Team building", href: "/eventos-empresa/team-building" },
  { nombre: "Incentivos", href: "/eventos-empresa/incentivos" },
  { nombre: "Jornadas outdoor", href: "/eventos-empresa/jornadas-outdoor" },
  { nombre: "Congresos y convenciones", href: "/eventos-empresa/congresos-y-convenciones" },
  { nombre: "Actividades", href: "/actividades" },
  { nombre: "Espacios y recursos", href: "/espacios-y-recursos" },
  { nombre: "Celebraciones", href: "/celebraciones" },
];

export default function ProvinciaPage({ params }: ProvinciaPageProps) {
  const provincia = getProvincia(params.provincia);
  if (!provincia) notFound();

  return (
    <>
      <Hero
        imagen={provincia.heroImagen}
        titulo={provincia.heroTitulo}
        subtitulo={provincia.heroSubtitulo}
      />

      <section className="mx-auto max-w-5xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        {provincia.intro.map((parrafo, i) => (
          <p key={i} className={i === 0 ? "" : "mt-4"}>
            {parrafo}
          </p>
        ))}
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <CitaDestacada texto={provincia.cita} />
      </section>

      <section className="bg-cream-200 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold text-atlantico-700">
            Dónde montamos eventos en {provincia.nombre}
          </h2>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-ink-700">
            Las ciudades y zonas de la provincia donde ya trabajamos — con proveedores y espacios
            que hemos pisado en persona.
          </p>
          <div className="mt-8">
            <TarjetasTexto
              icono={false}
              items={provincia.ciudades.map((c) => ({ titulo: c.nombre, texto: c.texto }))}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-bold text-atlantico-700">
          Por qué {provincia.nombre} para tu evento
        </h2>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed text-ink-700">
          Cuatro razones concretas, no tópicos de guía turística.
        </p>
        <div className="mt-8">
          <TarjetasTexto items={provincia.porQue} />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16 text-lg leading-relaxed text-ink-700">
        <h2 className="text-2xl font-bold text-atlantico-700">Qué organizamos aquí</h2>
        <p className="mt-3 max-w-2xl">
          En {provincia.nombre} montamos el mismo catálogo que en el resto de Galicia — de la
          jornada outdoor al congreso, de la cena de equipo a la celebración. Elige el formato y lo
          adaptamos al terreno:
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {servicios.map((servicio) => (
            <Link
              key={servicio.href}
              href={servicio.href}
              className="rounded-full border border-sand-300 bg-cream-50 px-4 py-2 text-sm font-semibold text-atlantico-700 transition hover:border-atlantico-600 hover:bg-cream-100"
            >
              {servicio.nombre}
            </Link>
          ))}
        </div>
        <p className="mt-8 max-w-2xl font-semibold text-ink-900">{provincia.cierre}</p>
      </section>

      <CTAFinal titulo={provincia.ctaTitulo} />
    </>
  );
}
