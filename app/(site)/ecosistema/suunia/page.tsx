import type { Metadata } from "next";
import Hero from "@/components/shared/Hero";
import GridEjemplos from "@/components/shared/GridEjemplos";
import CitaDestacada from "@/components/shared/CitaDestacada";
import TarjetasTexto from "@/components/shared/TarjetasTexto";
import CTAFinal from "@/components/shared/CTAFinal";
import { suuniaEjemplos } from "@/data/ecosistema-suunia-ejemplos";

export const metadata: Metadata = {
  title: "SUUNIA — Alojamiento, Comidas y Experiencias | Mil Eventos Galicia",
  description:
    "SUUNIA es la marca hermana de Mil Eventos Galicia especializada en alojamiento, comidas y experiencias para programas de varios días.",
};

const queHace = [
  {
    titulo: "Alojamiento para grupos",
    texto:
      "Bloques de habitaciones a precio de grupo, con reparto y seguimiento con el hotel para que el check-in de un grupo grande no se convierta en una cola eterna ni en una sorpresa de última hora.",
  },
  {
    titulo: "Comidas y experiencias gastronómicas",
    texto:
      "Producto y productores locales, no catering genérico de macroevento — desde una cena de gala en un pazo hasta una cata para un grupo reducido de directivos.",
  },
  {
    titulo: "Programas DMC de varios días",
    texto:
      "Alojamiento, comidas y experiencias encadenadas en un único programa, para delegados o equipos que pasan más de una jornada en Galicia sin descanso en la coordinación diaria.",
  },
  {
    titulo: "Coordinación con el resto del evento",
    texto:
      "Todo sincronizado con la actividad, el espacio y el transporte, para que sea un único interlocutor y no un proveedor más que gestionar por tu cuenta entre llamadas.",
  },
];

const cuandoEntra = [
  {
    titulo: "Incentivo de varios días",
    texto: "Cuando el reconocimiento incluye un viaje completo, no solo una experiencia puntual de un día suelto sin continuidad.",
  },
  {
    titulo: "Convención con pernocta",
    texto: "Si parte del equipo se queda a dormir, el alojamiento forma parte de la experiencia del evento, para bien o para mal.",
  },
  {
    titulo: "Comidas con producto gallego",
    texto: "Cuando el evento quiere que la gastronomía local sea parte del programa, no un trámite de catering resuelto sin cuidado ni criterio.",
  },
  {
    titulo: "Congreso con delegados de fuera",
    texto: "Alojamiento y comidas coordinados para asistentes que vienen de fuera de Galicia durante varios días de programa completo.",
  },
];

const comoTrabajamos = [
  {
    titulo: "Un único interlocutor",
    texto:
      "Coordinas con Mil Eventos Galicia, y nosotros coordinamos con SUUNIA — nunca tienes que hablar directamente con dos proveedores distintos ni sincronizarlos tú mismo.",
  },
  {
    titulo: "El mismo criterio de calidad",
    texto:
      "SUUNIA sigue el mismo estándar de exigencia que el resto del evento, sin que se note el cambio de proveedor en ningún momento del programa completo.",
  },
  {
    titulo: "Presupuesto integrado",
    texto:
      "El coste del alojamiento y las comidas se planifica junto con el resto del evento desde el principio, no como una sorpresa aparte al final.",
  },
  {
    titulo: "Seguimiento hasta el final",
    texto:
      "Desde la primera reserva hasta el check-out del último día, con el mismo nivel de atención que dedicamos a la actividad principal del evento.",
  },
];

export default function SuuniaPage() {
  return (
    <>
      <Hero
        titulo="SUUNIA"
        subtitulo="Alojamiento, comidas y experiencias para programas de varios días en toda Galicia."
      />

      <section className="mx-auto max-w-3xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <p>
          SUUNIA es la marca hermana de Mil Eventos Galicia especializada en alojamiento, comidas
          y experiencias — lo que en el sector se conoce como DMC (Destination Management
          Company). Entra en juego cuando un evento de empresa se extiende más de un día, o cuando
          la gastronomía local forma parte importante del programa completo.
        </p>
        <p className="mt-4">
          No es una web ni una empresa aparte con la que tengas que negociar por tu cuenta: es
          parte del mismo ecosistema que Mil Eventos Galicia, y se coordina siempre a través de
          nosotros — un único interlocutor, aunque detrás haya varios especialistas trabajando en
          tu evento. Esta página explica qué hace SUUNIA y cuándo tiene sentido incluirla; no es
          una web de reservas ni tiene un catálogo propio de precios.
        </p>
        <p className="mt-4">
          Lo que resuelve, en el fondo, es sencillo: que la parte de tu evento que no es la
          actividad principal — dónde duermes, qué comes — esté a la misma altura que el resto del
          programa, y no la parte de la que nadie se ocupó con cuidado.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-12">
        <CitaDestacada texto="El alojamiento y la comida no son un trámite del evento — son parte de la experiencia, para bien o para mal." />
      </section>

      <section className="bg-cream-200 py-12">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-xl font-bold text-atlantico-700">Qué hace SUUNIA</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
            Cuatro piezas que resuelve, siempre coordinadas con el resto del evento a través de
            Mil Eventos Galicia, no por separado ni de forma independiente.
          </p>
          <div className="mt-6">
            <TarjetasTexto icono={false} items={queHace} />
          </div>
          <p className="mt-6 max-w-2xl leading-relaxed text-ink-700">
            Cada una se puede contratar sola o combinada con el resto, según lo que ya tengas
            resuelto.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="text-xl font-bold text-atlantico-700">Cuándo entra en juego SUUNIA</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
          Cuatro situaciones habituales en las que SUUNIA forma parte del programa de un evento de
          empresa en Galicia.
        </p>
        <div className="mt-6">
          <TarjetasTexto icono={false} items={cuandoEntra} />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pt-6 text-lg leading-relaxed text-ink-700">
        <p>
          Algunos ejemplos representativos del tipo de programa que gestiona SUUNIA — no un
          catálogo cerrado, sino una muestra de lo que suele incluir un programa de varios días
          en Galicia.
        </p>
      </section>

      <GridEjemplos ejemplos={suuniaEjemplos} />

      <section className="bg-cream-200 py-12">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-xl font-bold text-atlantico-700">Cómo trabajamos juntos</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
            SUUNIA no funciona como un proveedor externo que contratas por separado — funciona
            como una extensión del mismo equipo que organiza tu evento de principio a fin.
          </p>
          <div className="mt-6">
            <TarjetasTexto items={comoTrabajamos} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <h2 className="text-xl font-bold text-atlantico-700">Para qué eventos tiene sentido</h2>
        <p className="mt-3">
          Tiene sentido, sobre todo, para cualquier evento de empresa que se extienda más de un
          día — un{" "}
          <a href="/eventos-empresa/incentivos" className="text-atlantico-700 underline">
            programa de incentivos
          </a>{" "}
          de varias jornadas, una{" "}
          <a href="/eventos-empresa/congresos-y-convenciones" className="text-atlantico-700 underline">
            convención
          </a>{" "}
          con delegados de fuera, o un evento de un día donde la comida es parte importante del
          programa. Si tu evento no incluye pernocta ni comidas especiales, probablemente no
          necesites nada de esto — y te lo diremos así, en lugar de proponerte algo que no hace
          falta solo por vender más.
        </p>
        <p className="mt-4">
          SUUNIA no funciona sola: si el programa combina alojamiento con actividades outdoor o
          náuticas, coordinamos también con{" "}
          <a href="/ecosistema/sea-galicia" className="text-atlantico-700 underline">
            Sea Galicia
          </a>
          , y si hay que mover al grupo entre sedes o desde el aeropuerto, con{" "}
          <a href="/ecosistema/luxe-galicia" className="text-atlantico-700 underline">
            Luxe Galicia
          </a>{" "}
          — todo con el mismo interlocutor, sin que tengas que gestionar un tercer proveedor.
        </p>
        <p className="mt-4 font-semibold text-ink-900">
          Cuéntanos tu evento a través de Mil Eventos Galicia. Si SUUNIA encaja, lo coordinamos
          nosotros — sin que tengas que buscar ni negociar nada por tu cuenta ni conocer a nadie
          del sector.
        </p>
      </section>

      <CTAFinal
        titulo="El alojamiento y la comida, resueltos sin que sea un proveedor más que gestionar por tu cuenta."
        ctaTexto="Cuéntanos tu evento"
      />
    </>
  );
}
