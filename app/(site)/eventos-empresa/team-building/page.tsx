import type { Metadata } from "next";
import Hero from "@/components/shared/Hero";
import GridEjemplos from "@/components/shared/GridEjemplos";
import BannerEcosistema from "@/components/shared/BannerEcosistema";
import CTAFinal from "@/components/shared/CTAFinal";
import { teamBuildingEjemplos } from "@/data/eventos-empresa-team-building";
import { SEA_GALICIA } from "@/data/ecosistema-marcas";

export const metadata: Metadata = {
  title: "Team Building en Galicia | Mil Eventos Galicia",
  description: "Actividades de team building para empresas en Galicia.",
};

export default function TeamBuildingPage() {
  return (
    <>
      <Hero titulo="Team building" subtitulo="Actividades que unen equipos de verdad." />

      <section className="mx-auto max-w-3xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <p>
          El team building de manual ya no engaña a nadie. Tu equipo ha hecho el escape room, la
          gymkhana de preguntas y el taller de cócteles genérico. Y sigue sin hablarse bien entre
          departamentos.
        </p>
        <p className="mt-4">El problema no es la actividad. Es que la eligió alguien que no conoce a tu equipo.</p>
        <p className="mt-4">
          Nosotros preguntamos primero: cuántos sois, qué tensiones hay, qué queréis conseguir.
          Después diseñamos la actividad — no al revés.
        </p>
      </section>

      <GridEjemplos ejemplos={teamBuildingEjemplos} />

      <BannerEcosistema marca={SEA_GALICIA} />

      <CTAFinal
        titulo="Un equipo que confía entre sí no se construye en una tarde. Pero es un buen sitio para empezar."
        ctaTexto="Cuéntanos cómo es tu equipo"
      />
    </>
  );
}
