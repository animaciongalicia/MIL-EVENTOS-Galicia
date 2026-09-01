import type { Metadata } from "next";
import Hero from "@/components/shared/Hero";
import GridEjemplos from "@/components/shared/GridEjemplos";
import CitaDestacada from "@/components/shared/CitaDestacada";
import TarjetasTexto from "@/components/shared/TarjetasTexto";
import CTAFinal from "@/components/shared/CTAFinal";
import { seaGaliciaEjemplos } from "@/data/ecosistema-sea-galicia-ejemplos";

export const metadata: Metadata = {
  title: "Sea Galicia — Actividades Náuticas | Mil Eventos Galicia",
  description:
    "Sea Galicia es la marca hermana de Mil Eventos Galicia especializada en actividades náuticas para eventos de empresa.",
};

const queHace = [
  {
    titulo: "Regatas en equipo",
    texto:
      "Varias tripulaciones compitiendo entre sí, con patrón profesional a bordo de cada embarcación — nadie tiene que saber navegar de antemano para participar.",
  },
  {
    titulo: "Kayak y piragüismo",
    texto:
      "Descenso por ría o por río, con distintos niveles de exigencia según el grupo, la experiencia previa y el tiempo disponible.",
  },
  {
    titulo: "Vela y catamarán",
    texto:
      "Desde la iniciación sin experiencia hasta salidas para grupos que prefieren estabilidad y espacio antes que velocidad y adrenalina.",
  },
  {
    titulo: "Surf y paddle surf",
    texto:
      "Actividades de menor exigencia técnica, ideales como cierre de una jornada más intensa o como programa independiente para una tarde.",
  },
];

const cuandoEntra = [
  {
    titulo: "Team building con componente náutico",
    texto: "Cuando la coordinación física en el agua sustituye a la palabra y desbloquea algo que una sala de reuniones no consigue nunca.",
  },
  {
    titulo: "Jornada outdoor junto al mar",
    texto: "Cuando el entorno elegido para desconectar es la costa gallega, no el interior, y el agua forma parte del plan.",
  },
  {
    titulo: "Cierre de una convención costera",
    texto: "Un último día distinto que cambia el ritmo antes de la vuelta a casa, con el mar como escenario principal.",
  },
  {
    titulo: "Incentivo con experiencia náutica",
    texto: "Un reconocimiento que se sale de lo habitual, cuando el premio busca ser memorable de verdad y no un gesto genérico.",
  },
];

const comoTrabajamos = [
  {
    titulo: "Un único interlocutor",
    texto:
      "Coordinas con Mil Eventos Galicia, y nosotros coordinamos con Sea Galicia — nunca tienes que negociar tú directamente con el patrón o el club náutico.",
  },
  {
    titulo: "Seguridad y material incluidos",
    texto:
      "Equipo homologado, seguro y patrón titulado en cada actividad, sin que sea un extra que descubres en el presupuesto final sin haberlo pedido.",
  },
  {
    titulo: "Adaptado al nivel del grupo",
    texto: "Desde quien nunca ha subido a un barco hasta quien tiene experiencia previa, el reto se ajusta antes de proponer nada concreto.",
  },
  {
    titulo: "Coordinado con el resto del programa",
    texto: "Transporte, horario y actividad encajados en el día completo, no como una pieza suelta que organizas por tu cuenta aparte.",
  },
];

export default function SeaGaliciaPage() {
  return (
    <>
      <Hero
        titulo="Sea Galicia"
        subtitulo="Actividades náuticas para eventos de empresa en toda la costa gallega."
      />

      <section className="mx-auto max-w-3xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <p>
          Sea Galicia es la marca hermana de Mil Eventos Galicia especializada en actividades
          náuticas — regatas, kayak, vela, surf — para eventos de empresa que quieren aprovechar
          la costa gallega como algo más que un decorado bonito para la foto de grupo del final
          del día.
        </p>
        <p className="mt-4">
          No es una escuela náutica independiente con la que tengas que contactar por tu cuenta:
          es parte del mismo ecosistema que Mil Eventos Galicia, y se coordina siempre a través de
          nosotros. Un único interlocutor, aunque detrás haya patrones y monitores especializados
          llevando la parte técnica de cada salida.
        </p>
        <p className="mt-4">
          Esta página explica qué hace Sea Galicia y cuándo tiene sentido incluirla en tu evento —
          no es una web de reservas ni tiene tarifas propias publicadas.
        </p>
        <p className="mt-4">
          El mar exige algo que ninguna sala de reuniones consigue: coordinación real, decisiones
          rápidas y confianza en que la persona de al lado va a hacer su parte. Por eso funciona
          tan bien como actividad de equipo, más allá de lo bonito que sea el paisaje.
        </p>
        <p className="mt-4">
          No hace falta experiencia previa en ninguna de las actividades — el patrón o monitor
          lleva la parte técnica, y el grupo se centra en lo que de verdad importa: hacerlo
          juntos, sin miedo a equivocarse.
        </p>
        <p className="mt-4">
          Las condiciones del mar se revisan siempre antes de confirmar la actividad, con una
          alternativa cerrada de antemano si el día no acompaña como estaba previsto.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <h2 className="text-xl font-bold text-atlantico-700">Qué hace Sea Galicia</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
          Cuatro tipos de actividad náutica, cada una con su propio nivel de exigencia y de
          coordinación previa, siempre con patrón profesional a bordo.
        </p>
        <div className="mt-6">
          <TarjetasTexto icono={false} items={queHace} />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-12">
        <CitaDestacada texto="Cuando la coordinación física sustituye a la palabra, algo se desbloquea que en una sala de reuniones no pasa nunca." />
      </section>

      <section className="bg-cream-200 py-12">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-xl font-bold text-atlantico-700">Cuándo entra en juego Sea Galicia</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
            Cuatro situaciones habituales en las que una actividad náutica forma parte del
            programa de un evento de empresa.
          </p>
          <div className="mt-6">
            <TarjetasTexto icono={false} items={cuandoEntra} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pt-6 text-lg leading-relaxed text-ink-700">
        <p>
          Algunos ejemplos representativos del tipo de actividad que gestiona Sea Galicia — no un
          catálogo cerrado, sino una muestra de lo que suele encajar en un evento de empresa con
          componente náutico.
        </p>
      </section>

      <GridEjemplos ejemplos={seaGaliciaEjemplos} />

      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="text-xl font-bold text-atlantico-700">Cómo trabajamos juntos</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
          Sea Galicia no funciona como un proveedor externo que contratas por separado — funciona
          como una extensión del mismo equipo que organiza tu evento, con el mismo criterio de
          calidad.
        </p>
        <div className="mt-6">
          <TarjetasTexto items={comoTrabajamos} />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <h2 className="text-xl font-bold text-atlantico-700">Para qué eventos tiene sentido</h2>
        <p className="mt-3">
          El componente náutico añade algo distinto a casi cualquier evento de empresa, siempre
          que el grupo esté dispuesto a mojarse — literalmente hablando.
        </p>
        <p className="mt-4">
          Tiene sentido, sobre todo, para{" "}
          <a href="/eventos-empresa/team-building" className="text-atlantico-700 underline">
            team building
          </a>{" "}
          con componente náutico, para{" "}
          <a href="/eventos-empresa/jornadas-outdoor" className="text-atlantico-700 underline">
            jornadas outdoor
          </a>{" "}
          junto al mar, y para cualquier evento que quiera cerrar el día con algo distinto a lo
          habitual y a lo que ya se ha hecho antes.
        </p>
        <p className="mt-4">
          No todos los grupos son buenos candidatos — si hay perfiles con limitaciones físicas
          importantes o miedo real al agua, te lo diremos antes de proponer nada, en vez de
          forzar una actividad que no va a funcionar y acaba generando más tensión que la que
          resuelve.
        </p>
        <p className="mt-4">
          Si el programa combina actividad náutica con alojamiento de varios días, coordinamos
          también con{" "}
          <a href="/ecosistema/suunia" className="text-atlantico-700 underline">
            SUUNIA
          </a>{" "}
          para que el programa completo quede resuelto con el mismo interlocutor. Y si hace falta
          traslado hasta el punto de salida,{" "}
          <a href="/ecosistema/luxe-galicia" className="text-atlantico-700 underline">
            Luxe Galicia
          </a>{" "}
          se coordina de la misma manera.
        </p>
        <p className="mt-4 font-semibold text-ink-900">
          Cuéntanos tu evento a través de Mil Eventos Galicia. Si Sea Galicia encaja, lo
          coordinamos nosotros — sin que tengas que llamar a ningún club náutico por tu cuenta ni
          negociar el material.
        </p>
      </section>

      <CTAFinal
        titulo="El mar como escenario, no solo como decorado para la foto de grupo."
        ctaTexto="Cuéntanos tu evento"
      />
    </>
  );
}
