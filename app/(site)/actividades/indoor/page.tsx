import type { Metadata } from "next";
import Hero from "@/components/shared/Hero";
import GridEjemplos from "@/components/shared/GridEjemplos";
import CTAFinal from "@/components/shared/CTAFinal";
import CitaDestacada from "@/components/shared/CitaDestacada";
import TarjetasTexto from "@/components/shared/TarjetasTexto";
import { actividadesIndoor } from "@/data/actividades-indoor";

export const metadata: Metadata = {
  title: "Actividades Indoor en Galicia | Mil Eventos Galicia",
  description: "Actividades indoor de team building en Galicia.",
};

const tiposIndoor = [
  {
    titulo: "Mental y estratégico",
    texto:
      "Escape rooms, hackathones exprés — retos que exigen pensar rápido y coordinarse bajo presión, sin moverse de la sala en ningún momento.",
  },
  {
    titulo: "Creativo",
    texto:
      "Talleres de cerámica, pintura o diseño — algo que el equipo se lleva a casa además del recuerdo del día, con menos presión de por medio.",
  },
  {
    titulo: "Escénico",
    texto:
      "Improvisación teatral con actores profesionales — saca al equipo de su zona de confort entre risas, sin forzar nada ni exponer a nadie.",
  },
  {
    titulo: "Gastronómico y competitivo",
    texto:
      "Catas a ciegas y torneos de juegos de mesa — competición sana que funciona igual de bien con diez que con cien personas a la vez.",
  },
];

const factoresIndoor = [
  {
    titulo: "Aforo real de la sala",
    texto:
      "Medido por nosotros o por sus planos, no el que promete la web del hotel sin contar mesas, escenario ni pasillos de paso.",
  },
  {
    titulo: "Acústica y ruido ambiente",
    texto:
      "Una actividad con mucho diálogo no funciona igual en una sala con eco que en una bien tratada acústicamente para el propósito del día.",
  },
  {
    titulo: "Mobiliario disponible",
    texto:
      "Si la actividad necesita mesas libres o espacio despejado, lo comprobamos antes de proponerla, no el mismo día del evento.",
  },
  {
    titulo: "Tecnología del espacio",
    texto:
      "Proyección, sonido y wifi con capacidad real para el grupo entero, no solo para el personal del hotel un día normal de trabajo.",
  },
];

export default function ActividadesIndoorPage() {
  return (
    <>
      <Hero titulo="Indoor" subtitulo="Cuando el tiempo no acompaña, otro tipo de experiencia bajo techo." />

      <section className="mx-auto max-w-3xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <p>
          O simplemente prefieres tener el evento bajo control — el indoor no es el plan B. Tiene
          su propio ritmo, y no lo elegimos solo cuando llueve.
        </p>
        <p className="mt-4">
          Funcionan igual de bien como cierre de una convención que como plan independiente para
          una tarde. Se adaptan al espacio que ya tengas reservado — no hace falta buscar uno
          nuevo — y al tamaño del grupo, desde 10 personas hasta varios cientos.
        </p>
        <p className="mt-4">
          La ventaja frente al outdoor no es solo el clima: es el control total sobre el entorno,
          el horario y hasta la temperatura de la sala, algo que fuera nunca se puede garantizar.
        </p>
        <p className="mt-4">
          Y eso importa más de lo que parece cuando el evento tiene un horario apretado, o cuando
          entre los asistentes hay perfiles que no disfrutan de actividades al aire libre.
        </p>
        <p className="mt-4">
          Tampoco depende de la temporada — funciona igual de bien en pleno verano que en enero,
          cuando salir fuera no es una opción real para casi nadie del grupo.
        </p>
      </section>

      <section className="bg-cream-200 py-12">
        <div className="mx-auto max-w-3xl px-6 text-ink-700">
          <h2 className="text-xl font-bold text-atlantico-700">Cómo lo planteamos</h2>
          <p className="mt-3 leading-relaxed">
            Vemos el espacio antes (o sus planos, si no puedes enseñárnoslo) para que la actividad
            encaje en los metros cuadrados reales, no en los que aparecen en la web del hotel. Es
            el paso que más problemas evita, y el que más se salta cuando no hay tiempo de sobra.
          </p>
          <div className="mt-6">
            <CitaDestacada texto="Llevamos el material; tú pones la sala." />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="text-xl font-bold text-atlantico-700">Cuatro tipos de actividad</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
          Agrupadas por lo que le piden al equipo, no solo por el material que necesitan ni por el
          espacio concreto donde se montan.
        </p>
        <div className="mt-6">
          <TarjetasTexto icono={false} items={tiposIndoor} />
        </div>
        <p className="mt-6 max-w-2xl leading-relaxed text-ink-700">
          Se pueden combinar varios tipos en un mismo día, según el tiempo disponible.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-12 text-lg leading-relaxed text-ink-700">
        <p>
          Algunos ejemplos representativos del catálogo — no un listado cerrado, sino una muestra
          de lo que suele funcionar bien bajo techo, con distintos niveles de energía y de
          exigencia.
        </p>
      </section>

      <GridEjemplos ejemplos={actividadesIndoor} />

      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="text-xl font-bold text-atlantico-700">Según el tamaño del grupo</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
          No todas las actividades escalan igual de bien — esto ayuda a decidir cuál encaja con tu
          equipo antes de comprometer una fecha.
        </p>
        <div className="mt-6">
          <TarjetasTexto
            icono={false}
            items={[
              {
                titulo: "Grupos pequeños (hasta 30)",
                texto: "Escape rooms, catas a ciegas y talleres creativos funcionan mejor con contacto cercano entre todos los participantes.",
              },
              {
                titulo: "Grupos medianos (30-100)",
                texto: "Torneos de juegos de mesa e improvisación teatral se adaptan bien dividiendo en varios grupos simultáneos por sala.",
              },
              {
                titulo: "Grupos grandes (100+)",
                texto: "Hackathones exprés y competiciones por equipos escalan mejor cuando hay estructura clara y varias salas disponibles a la vez.",
              },
            ]}
          />
        </div>
      </section>

      <section className="bg-cream-200 py-12">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-xl font-bold text-atlantico-700">Qué revisamos siempre</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
            Cuatro cosas que casi nunca aparecen en la web del propio espacio, y que marcan la
            diferencia real el día del evento.
          </p>
          <div className="mt-6">
            <TarjetasTexto items={factoresIndoor} />
          </div>
          <p className="mt-6 max-w-2xl leading-relaxed text-ink-700">
            Cualquiera de estos factores, mal resuelto, puede arruinar una actividad muy bien
            elegida de por sí.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="text-xl font-bold text-atlantico-700">Cuándo no es la mejor opción</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
          Y hay que decirlo también: el indoor no siempre es la mejor elección, aunque el tiempo
          acompañe.
        </p>
        <div className="mt-6">
          <TarjetasTexto
            icono={false}
            items={[
              {
                titulo: "Cuando el objetivo es desconectar del entorno de trabajo",
                texto: "Una sala de hotel se sigue pareciendo demasiado a una oficina para algunos equipos, por bien decorada que esté.",
              },
              {
                titulo: "Cuando el grupo necesita moverse físicamente",
                texto: "Semanas de trabajo sedentario piden salir, no encerrarse otra vez en una sala más, aunque sea con actividades distintas.",
              },
            ]}
          />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <h2 className="text-xl font-bold text-atlantico-700">Para qué eventos funciona</h2>
        <p className="mt-3">
          Funciona como cierre de una convención cuando ya no hay tiempo ni ganas de salir del
          hotel, como plan de invierno cuando el tiempo no acompaña, o simplemente como preferencia
          — hay equipos que rinden mejor bajo techo, sin más, y no hace falta justificarlo.
        </p>
        <p className="mt-4">
          También funciona bien cuando el grupo incluye personas con movilidad reducida o
          limitaciones físicas que harían incómoda una actividad al aire libre — el control total
          sobre el espacio permite adaptar cada detalle sin que nadie quede fuera.
        </p>
        <p className="mt-4">
          Si prefieres aprovechar el entorno gallego en vez de quedarte dentro, en{" "}
          <a href="/actividades/outdoor" className="text-atlantico-700 underline">
            outdoor
          </a>{" "}
          explicamos las alternativas al aire libre. Y si tu evento combina las dos cosas — mañana
          fuera, tarde dentro —{" "}
          <a href="/eventos-empresa/jornadas-outdoor" className="text-atlantico-700 underline">
            jornadas outdoor
          </a>{" "}
          explica cómo lo montamos.
        </p>
        <p className="mt-4 font-semibold text-ink-900">
          Cuéntanos qué espacio tienes y para cuántas personas, y en qué franja horaria. La
          actividad la ajustamos nosotros, adaptada a esos metros cuadrados exactos.
        </p>
      </section>

      <CTAFinal
        titulo="No hace falta salir de la ciudad para salir de la rutina del día a día."
        ctaTexto="Cuéntanos tu evento indoor"
      />
    </>
  );
}
