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

      <section className="mx-auto max-w-5xl px-6 py-12 text-lg leading-relaxed text-ink-700">
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
        <p className="mt-4">
          El mecanismo que hace que un team building funcione no es la actividad en sí, sino lo
          que obliga a hacer al grupo mientras la vive: decidir juntos, depender de otro, o
          simplemente pasar tiempo sin la excusa del correo o la reunión de seguimiento.
        </p>
        <p className="mt-4">
          Por eso empezamos siempre por el equipo, no por el catálogo.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <TarjetasTexto
          icono={false}
          items={[
            {
              titulo: "Un equipo que lleva años trabajando junto",
              texto:
                "No necesita romper el hielo — necesita una excusa distinta para desconectar y salir de la rutina de siempre.",
            },
            {
              titulo: "Un equipo recién fusionado",
              texto:
                "El reto es que se conozcan de verdad, no que compitan en una gymkhana genérica sin saber ni el nombre del compañero de al lado.",
            },
          ]}
        />
        <p className="mt-6 text-lg leading-relaxed text-ink-700">
          Nosotros preguntamos primero: cuántos sois, qué tensiones hay realmente (no las que se
          dicen en la encuesta de clima), qué queréis conseguir y cuánto tiempo tenéis. Después
          diseñamos la actividad — no al revés. Si lo que necesitáis no encaja con nada de lo de
          abajo, se diseña desde cero.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-ink-700">
          Esa conversación inicial es la que marca la diferencia entre una actividad que se
          recuerda y una que se olvida en cuanto se vuelve a la oficina el lunes.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <h2 className="text-xl font-bold text-atlantico-700">Cuatro mecanismos que funcionan</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
          No elegimos la actividad por lo divertida que parece en una foto — la elegimos por lo
          que obliga a hacer al grupo mientras la vive.
        </p>
        <div className="mt-6">
          <TarjetasTexto
            icono={false}
            items={[
              {
                titulo: "Cooperación forzada",
                texto:
                  "Retos de escape, construcciones en equipo — solo se avanza si todos aportan. Rompe jerarquías informales en la primera hora, sin que nadie tenga que decirlo en voz alta.",
              },
              {
                titulo: "Competencia sana",
                texto:
                  "Gymkhanas y retos por puntos entre equipos, no contra el reloj. Funciona especialmente bien con perfiles comerciales acostumbrados a medirse.",
              },
              {
                titulo: "Manual y creativo",
                texto:
                  "Cocina, talleres de habilidades cruzadas. Menos presión física, más conversación mientras se hace algo con las manos, sin la incomodidad de tener que hablar de tú a tú.",
              },
              {
                titulo: "Náutico",
                texto:
                  "Regata, kayak o vela en equipo — cuando la coordinación física sustituye a la palabra, algo se desbloquea que en una sala de reuniones no pasa nunca.",
              },
            ]}
          />
        </div>
        <p className="mt-6 max-w-2xl leading-relaxed text-ink-700">
          Estos cuatro mecanismos se pueden combinar dentro de una misma jornada, o usarse por
          separado según el tiempo y el presupuesto disponibles.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <h2 className="text-xl font-bold text-atlantico-700">Cuándo no es la solución</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
          Y hay que decirlo también: el team building no lo arregla todo, y venderte lo contrario
          sería mentirte a ti y a tu equipo.
        </p>
        <div className="mt-6">
          <TarjetasTexto
            icono={false}
            items={[
              {
                titulo: "Un conflicto entre dos personas concretas",
                texto: "Eso se resuelve hablando con ellas cara a cara, no llevándolas a hacer rápel juntas y esperando que se arregle solo.",
              },
              {
                titulo: "Una estructura organizativa que no funciona",
                texto: "Ninguna actividad compensa un organigrama mal diseñado o una carga de trabajo insostenible, por muy bien planteada que esté.",
              },
              {
                titulo: "Una plantilla que va a irse igual",
                texto: "Si el problema es salarial o de expectativas de carrera, un buen día no cambia la decisión de nadie a medio plazo.",
              },
            ]}
          />
        </div>
      </section>

      <section className="bg-cream-200 py-12">
        <div className="mx-auto max-w-5xl px-6 text-ink-700">
          <h2 className="text-xl font-bold text-atlantico-700">Cómo trabajamos</h2>
          <PasosTrabajo
            pasos={[
              {
                titulo: "Cuéntanos tu equipo",
                descripcion:
                  "Una llamada de 20 minutos: cuántos sois, el objetivo, el presupuesto y qué habéis probado ya.",
              },
              {
                titulo: "Te proponemos 2-3 formatos",
                descripcion: "No un catálogo de veinte actividades para que elijas a ciegas sin saber cuál encaja.",
              },
              {
                titulo: "Cerramos todo",
                descripcion: "Espacio, proveedores y horario, sin que tengas que llamar a nadie ni coordinar tú mismo.",
              },
              {
                titulo: "El día del evento",
                descripcion:
                  "Tú participas. La logística y el “plan B si llueve” los llevamos nosotros, sin que se note.",
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

      <section className="mx-auto max-w-5xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <h2 className="text-xl font-bold text-atlantico-700">Para qué tipo de equipo funciona</h2>
        <p className="mt-3">
          Funciona con equipos de cualquier tamaño — de diez personas a varios cientos — y con
          cualquier antigüedad, siempre que el objetivo sea real: integrar, romper el hielo,
          celebrar un hito, o simplemente recordar que se trabaja con personas, no con un nombre
          en un chat.
        </p>
        <p className="mt-4">
          También funciona igual de bien con un solo departamento que con toda la plantilla junta,
          aunque el formato cambia bastante: cuanta más gente, más peso tiene la logística y menos
          la actividad en sí misma.
        </p>
        <p className="mt-4">
          Si no tienes claro si tu equipo necesita esto o algo distinto — un incentivo, una
          jornada outdoor —{" "}
          <a href="/eventos-empresa" className="text-atlantico-700 underline">
            aquí explicamos cómo elegir
          </a>
          .
        </p>
        <p className="mt-4">
          Y si ya sabes que quieres team building pero no cuál de los cuatro mecanismos encaja
          mejor con tu gente, esa es exactamente la primera pregunta que te haremos.
        </p>
        <p className="mt-4 font-semibold text-ink-900">
          Cuéntanos cómo es tu equipo y qué queréis conseguir. El formato lo resolvemos nosotros.
        </p>
      </section>

      <CTAFinal
        titulo="Un equipo que confía entre sí no se construye en una tarde. Pero es un buen sitio para empezar."
        ctaTexto="Cuéntanos cómo es tu equipo"
      />
    </>
  );
}
