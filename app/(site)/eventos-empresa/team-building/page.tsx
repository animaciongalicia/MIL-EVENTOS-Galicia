import type { Metadata } from "next";
import Hero from "@/components/shared/Hero";
import GridEjemplos from "@/components/shared/GridEjemplos";
import BannerEcosistema from "@/components/shared/BannerEcosistema";
import CTAFinal from "@/components/shared/CTAFinal";
import PasosTrabajo from "@/components/shared/PasosTrabajo";
import TarjetasTexto from "@/components/shared/TarjetasTexto";
import CitaDestacada from "@/components/shared/CitaDestacada";
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
          departamentos, o el nuevo de marketing sigue sin saber quién es el de contabilidad.
        </p>
        <p className="mt-4">
          El problema casi nunca es la actividad en sí. Es que la eligió alguien que no conoce a
          tu equipo — un catálogo genérico, pensado para cualquiera, aplicado al tuyo sin
          preguntar.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-12">
        <TarjetasTexto
          icono={false}
          items={[
            {
              titulo: "Un equipo que lleva años trabajando junto",
              texto: "No necesita romper el hielo — necesita una excusa distinta para desconectar.",
            },
            {
              titulo: "Un equipo recién fusionado",
              texto:
                "El reto es que se conozcan de verdad, no que compitan en una gymkhana genérica.",
            },
          ]}
        />
        <p className="mt-6 text-lg leading-relaxed text-ink-700">
          Nosotros preguntamos primero: cuántos sois, qué tensiones hay realmente (no las que se
          dicen en la encuesta de clima), qué queréis conseguir y cuánto tiempo tenéis. Después
          diseñamos la actividad — no al revés. Si lo que necesitáis no encaja con nada de lo de
          abajo, se diseña desde cero.
        </p>
      </section>

      <section className="bg-cream-200 py-12">
        <div className="mx-auto max-w-3xl px-6 text-ink-700">
          <h2 className="text-xl font-bold text-atlantico-700">Cómo trabajamos</h2>
          <PasosTrabajo
            pasos={[
              {
                titulo: "Cuéntanos tu equipo",
                descripcion: "Una llamada de 20 minutos: cuántos sois, el objetivo, el presupuesto.",
              },
              {
                titulo: "Te proponemos 2-3 formatos",
                descripcion: "No un catálogo de veinte actividades para que elijas a ciegas.",
              },
              {
                titulo: "Cerramos todo",
                descripcion: "Espacio, proveedores y horario, sin que tengas que llamar a nadie.",
              },
              {
                titulo: "El día del evento",
                descripcion:
                  "Tú participas. La logística y el “plan B si llueve” los llevamos nosotros.",
              },
            ]}
          />
          <div className="mt-8">
            <CitaDestacada texto="El team building no arregla un equipo roto en una tarde, y cualquiera que te prometa eso te está vendiendo humo. Lo que sí hace, bien planteado, es dar el primer empujón." />
          </div>
        </div>
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
