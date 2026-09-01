import type { Metadata } from "next";
import Hero from "@/components/shared/Hero";
import GridEjemplos from "@/components/shared/GridEjemplos";
import CitaDestacada from "@/components/shared/CitaDestacada";
import TarjetasTexto from "@/components/shared/TarjetasTexto";
import CTAFinal from "@/components/shared/CTAFinal";
import { luxeGaliciaEjemplos } from "@/data/ecosistema-luxe-galicia-ejemplos";

export const metadata: Metadata = {
  title: "Luxe Galicia — Transporte y Desplazamientos | Mil Eventos Galicia",
  description:
    "Luxe Galicia es la marca hermana de Mil Eventos Galicia especializada en transporte y desplazamientos para eventos de empresa.",
};

const queHace = [
  {
    titulo: "Traslados desde el aeropuerto",
    texto:
      "Recogida coordinada por vuelo, con seguimiento de horarios reales para que nadie espere de más ni llegue tarde al primer punto del programa.",
  },
  {
    titulo: "Transporte entre sedes",
    texto:
      "Cuando el evento se mueve entre varios espacios en el mismo día — del hotel al espacio, del espacio a la actividad, y vuelta sin fisuras.",
  },
  {
    titulo: "Logística de programas multi-día",
    texto:
      "Traslados encadenados para delegados que llegan y salen en fechas distintas, sin que la coordinación de horarios recaiga sobre ti.",
  },
  {
    titulo: "Transporte para grupos grandes",
    texto:
      "Varios vehículos sincronizados para que trescientas personas lleguen al mismo sitio a la vez, sin colas ni esperas innecesarias.",
  },
];

const cuandoEntra = [
  {
    titulo: "Congreso o convención con asistentes de fuera",
    texto: "Cuando hay delegados que llegan en vuelo y necesitan traslado coordinado hasta el evento sin depender de un taxi suelto.",
  },
  {
    titulo: "Programa con varias sedes en un día",
    texto: "Cuando el evento combina espacio, actividad y comida en lugares distintos que hay que conectar sin perder tiempo entre medias.",
  },
  {
    titulo: "Incentivo o convención de varios días",
    texto: "Cuando el grupo se mueve entre alojamiento, actividades y espacios durante todo el programa, día tras día.",
  },
  {
    titulo: "Cualquier evento con cien o más asistentes",
    texto: "Cuando el volumen de personas exige varios vehículos sincronizados en vez de coches sueltos llegando por su cuenta.",
  },
];

const comoTrabajamos = [
  {
    titulo: "Un único interlocutor",
    texto:
      "Coordinas con Mil Eventos Galicia, y nosotros coordinamos con Luxe Galicia — nunca tienes que negociar tú directamente con una empresa de transporte local.",
  },
  {
    titulo: "Horarios reales, no estimados",
    texto:
      "Los traslados se coordinan con el horario real del evento, no con uno estimado de antemano que se desajusta con el primer imprevisto del día.",
  },
  {
    titulo: "Vehículo según el grupo",
    texto: "Desde un turismo para dos personas hasta varios autobuses coordinados, según el tamaño real del grupo que se desplaza cada vez.",
  },
  {
    titulo: "Coordinado con el resto del programa",
    texto: "Si la comida se retrasa, el transporte espera — la logística de movimiento se adapta al evento, no al revés como suele pasar.",
  },
];

export default function LuxeGaliciaPage() {
  return (
    <>
      <Hero
        titulo="Luxe Galicia"
        subtitulo="Transporte y desplazamientos para eventos de empresa en toda la comunidad."
      />

      <section className="mx-auto max-w-5xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <p>
          Luxe Galicia es la marca hermana de Mil Eventos Galicia especializada en transporte y
          desplazamientos — desde el aeropuerto, entre sedes, o de vuelta al hotel — para eventos
          de empresa que no pueden permitirse que la logística de movimiento falle en el peor
          momento posible.
        </p>
        <p className="mt-4">
          No es una empresa de transporte independiente con la que tengas que contratar por tu
          cuenta: es parte del mismo ecosistema que Mil Eventos Galicia, y se coordina siempre a
          través de nosotros — un único interlocutor, aunque detrás haya vehículos y conductores
          especializados moviendo a tu grupo. Esta página explica qué hace Luxe Galicia y cuándo
          tiene sentido incluirla; no es una web de reservas ni tiene tarifas propias publicadas.
        </p>
        <p className="mt-4">
          El transporte es la parte del evento que nadie recuerda cuando funciona bien, y la única
          que todo el mundo comenta cuando falla. Por eso se planifica con el mismo cuidado que la
          actividad principal, no como un trámite de última hora resuelto sin pensar.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <CitaDestacada texto="Nada rompe un evento como cincuenta personas esperando un autobús que no llega, o intentando aparcar en un sitio sin plazas." />
      </section>

      <section className="bg-cream-200 py-12">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-xl font-bold text-atlantico-700">Qué hace Luxe Galicia</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
            Cuatro tipos de traslado, cada uno con su propia lógica de coordinación según el
            tamaño del grupo y el programa completo del evento en cuestión.
          </p>
          <div className="mt-6">
            <TarjetasTexto icono={false} items={queHace} />
          </div>
          <p className="mt-6 max-w-2xl leading-relaxed text-ink-700">
            Cada tipo de traslado se puede contratar solo o combinado con el resto del programa
            del evento.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="text-xl font-bold text-atlantico-700">Cuándo entra en juego Luxe Galicia</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
          Cuatro situaciones habituales en las que el transporte deja de ser un detalle menor y
          pasa a ser parte central de la planificación del evento.
        </p>
        <div className="mt-6">
          <TarjetasTexto icono={false} items={cuandoEntra} />
        </div>
        <p className="mt-6 max-w-2xl leading-relaxed text-ink-700">
          Cincuenta personas esperando un autobús que no llega arruinan la percepción de un evento
          perfectamente organizado en todo lo demás — y es de las cosas más fáciles de evitar si
          se planifica con tiempo.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pt-6 text-lg leading-relaxed text-ink-700">
        <p>
          Algunos ejemplos representativos del tipo de traslado que gestiona Luxe Galicia — no un
          catálogo cerrado, sino una muestra de lo que suele incluir la logística de movimiento de
          un evento de empresa en Galicia.
        </p>
      </section>

      <GridEjemplos ejemplos={luxeGaliciaEjemplos} />

      <section className="bg-cream-200 py-12">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-xl font-bold text-atlantico-700">Cómo trabajamos juntos</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
            Luxe Galicia no funciona como una empresa de transporte que contratas por separado —
            funciona como una extensión del mismo equipo que organiza tu evento de principio a
            fin.
          </p>
          <div className="mt-6">
            <TarjetasTexto items={comoTrabajamos} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <h2 className="text-xl font-bold text-atlantico-700">Para qué eventos tiene sentido</h2>
        <p className="mt-3">
          Tiene sentido, sobre todo, para cualquier{" "}
          <a href="/eventos-empresa/congresos-y-convenciones" className="text-atlantico-700 underline">
            congreso o convención
          </a>{" "}
          con asistentes de fuera de Galicia, para programas que combinan varias sedes en un
          mismo día, y para cualquier evento con un volumen de personas que hace inviable que
          cada uno llegue por su cuenta. Si tu evento es pequeño y todos los asistentes son
          locales, probablemente no necesites nada de esto — y te lo diremos así, con la misma
          franqueza, en lugar de proponerte un servicio que no aporta nada real.
        </p>
        <p className="mt-4">
          Luxe Galicia no funciona sola. Si el programa combina transporte con alojamiento o
          actividades de varios días, coordinamos también con{" "}
          <a href="/ecosistema/suunia" className="text-atlantico-700 underline">
            SUUNIA
          </a>{" "}
          y{" "}
          <a href="/ecosistema/sea-galicia" className="text-atlantico-700 underline">
            Sea Galicia
          </a>{" "}
          para que todo el programa quede resuelto con el mismo interlocutor.
        </p>
        <p className="mt-4 font-semibold text-ink-900">
          Cuéntanos tu evento a través de Mil Eventos Galicia. Si Luxe Galicia encaja, lo
          coordinamos nosotros — sin que tengas que llamar a ninguna empresa de transporte por tu
          cuenta ni negociar precios.
        </p>
      </section>

      <CTAFinal
        titulo="La logística que no se ve es la que mejor está funcionando de verdad en el evento."
        ctaTexto="Cuéntanos tu evento"
      />
    </>
  );
}
