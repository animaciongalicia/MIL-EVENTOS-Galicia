import type { Metadata } from "next";
import Hero from "@/components/shared/Hero";
import GridEjemplos from "@/components/shared/GridEjemplos";
import BannerEcosistema from "@/components/shared/BannerEcosistema";
import CTAFinal from "@/components/shared/CTAFinal";
import { actividadesOutdoor } from "@/data/actividades-outdoor";
import { SEA_GALICIA } from "@/data/ecosistema-marcas";

export const metadata: Metadata = {
  title: "Actividades Outdoor en Galicia | Mil Eventos Galicia",
  description: "Actividades outdoor de team building en Galicia.",
};

export default function ActividadesOutdoorPage() {
  return (
    <>
      <Hero titulo="Outdoor" subtitulo="Naturaleza gallega como escenario, no como decorado." />

      <section className="mx-auto max-w-3xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <p>
          Actividades para sacar al equipo del asfalto y ponerlo a decidir, coordinarse y — a
          veces — mojarse.
        </p>
        <p className="mt-4">
          Cada una se puede montar suelta — como el cierre de una jornada outdoor, por ejemplo — o
          combinarla con otras dentro de un programa más largo. Son el contenido que le da forma a
          las páginas de{" "}
          <a href="/eventos-empresa/jornadas-outdoor" className="text-atlantico-700 underline">
            jornadas outdoor
          </a>{" "}
          y{" "}
          <a href="/eventos-empresa/team-building" className="text-atlantico-700 underline">
            team building
          </a>
          .
        </p>
      </section>

      <section className="bg-cream-200 py-12">
        <div className="mx-auto max-w-3xl px-6 text-ink-700">
          <h2 className="text-xl font-bold text-atlantico-700">Cómo lo planteamos</h2>
          <p className="mt-3 leading-relaxed">
            Nivel de esfuerzo físico, duración y edad del grupo son las tres variables que
            ajustamos antes de proponerte nada — no todo el mundo quiere, ni puede, hacer rápel.
            Si hace falta material técnico o un guía titulado, lo incluimos sin que tengas que
            buscarlo tú.
          </p>
        </div>
      </section>

      <GridEjemplos ejemplos={actividadesOutdoor} />
      <BannerEcosistema marca={SEA_GALICIA} />
      <CTAFinal titulo="El asfalto no enseña a nadie a trabajar en equipo. La naturaleza, sí." ctaTexto="Sácanos de la oficina" />
    </>
  );
}
