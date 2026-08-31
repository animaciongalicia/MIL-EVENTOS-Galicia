import type { Metadata } from "next";
import Hero from "@/components/shared/Hero";
import LandingCategoria from "@/components/shared/LandingCategoria";
import CTAFinal from "@/components/shared/CTAFinal";

export const metadata: Metadata = {
  title: "Actividades de Team Building en Galicia | Mil Eventos Galicia",
  description: "El catálogo de experiencias que le dan forma a tu evento: outdoor, indoor, gastronomía y vinos, a medida.",
};

const sublandings = [
  {
    titulo: "Outdoor",
    descripcion: "Naturaleza gallega como escenario, no como decorado.",
    href: "/actividades/outdoor",
  },
  {
    titulo: "Indoor",
    descripcion: "Cuando el tiempo no acompaña, otro tipo de experiencia.",
    href: "/actividades/indoor",
  },
  {
    titulo: "Gastronomía y vinos",
    descripcion: "El producto local como excusa para reunir a la gente.",
    href: "/actividades/gastronomia-y-vinos",
  },
  {
    titulo: "A medida",
    descripcion: "Si no lo has visto en ningún sitio, lo diseñamos desde cero.",
    href: "/actividades/a-medida",
  },
];

export default function ActividadesPage() {
  return (
    <>
      <Hero
        titulo="Actividades para tu evento"
        subtitulo="El catálogo de experiencias que le dan forma a un team building, una jornada outdoor o un incentivo."
      />

      <section className="mx-auto max-w-3xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <p>
          Ninguna de estas actividades se vende suelta como un producto de catálogo — son las
          piezas con las que construimos tu evento, dentro de{" "}
          <a href="/eventos-empresa" className="text-atlantico-700 underline">
            /eventos-empresa
          </a>
          . Aquí las agrupamos por tipo para que veas de un vistazo lo que es posible.
        </p>
      </section>

      <LandingCategoria intro="Cuatro categorías, un mismo criterio: nada genérico." sublandings={sublandings} />

      <CTAFinal titulo="¿Cuál encaja con tu evento? Empecemos por ahí." />
    </>
  );
}
