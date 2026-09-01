import type { Metadata } from "next";
import Hero from "@/components/shared/Hero";
import GridEjemplos from "@/components/shared/GridEjemplos";
import CTAFinal from "@/components/shared/CTAFinal";
import CitaDestacada from "@/components/shared/CitaDestacada";
import TarjetasTexto from "@/components/shared/TarjetasTexto";
import { localizacionEspaciosEjemplos } from "@/data/espacios-localizacion-espacios";

export const metadata: Metadata = {
  title: "Localización de Espacios para Eventos en Galicia | Mil Eventos Galicia",
  description:
    "Localización de espacios para eventos de empresa en Galicia: pazos, naves, salas de congresos y espacios singulares, filtrados y visitados antes de proponértelos.",
};

const comoTrabajamos = [
  {
    titulo: "Aforo real verificado",
    texto:
      "No el que aparece en su propia web, sin la barra, el escenario o la zona técnica ocupando el sitio que en la ficha parecía libre.",
  },
  {
    titulo: "Negociación y contrato",
    texto:
      "Nos encargamos nosotros del precio, las condiciones y la letra pequeña — nunca tienes que negociar tú directamente con el espacio.",
  },
  {
    titulo: "Timing con el resto del evento",
    texto:
      "El espacio encaja con proveedores, horarios de montaje y transporte desde el primer momento, no como una pieza suelta que ajustas después.",
  },
  {
    titulo: "Visita previa siempre",
    texto:
      "No proponemos ningún espacio que no hayamos pisado nosotros mismos — fotos bonitas no son garantía de que un sitio funcione de verdad.",
  },
];

const segunEvento = [
  {
    titulo: "Team building o jornada outdoor",
    texto:
      "Fincas con terreno abierto o entornos naturales con posibilidad de instalar actividades, más que salas cerradas de mobiliario fijo.",
  },
  {
    titulo: "Congreso o convención",
    texto:
      "Aforo real certificado, buena acústica y accesos amplios para cientos de personas entrando y saliendo en poco tiempo entre sesiones.",
  },
  {
    titulo: "Incentivo o celebración con carácter",
    texto:
      "Pazos, bodegas o espacios singulares donde el propio sitio ya forma parte de la experiencia, no solo el contenedor del evento.",
  },
  {
    titulo: "Presentación de producto o lanzamiento",
    texto:
      "Naves o espacios diáfanos que funcionan como lienzo en blanco, sin una decoración propia que compita con la de tu marca.",
  },
];

const queRevisamos = [
  {
    titulo: "Accesos y aparcamiento",
    texto: "Cómo llega la gente, dónde aparca, y si hay algún cuello de botella a la entrada que arruine los primeros diez minutos.",
  },
  {
    titulo: "Acústica y climatización",
    texto: "Un espacio precioso con mala acústica arruina cualquier discurso — se comprueba antes de proponerlo, no el día del evento.",
  },
  {
    titulo: "Plan B si llueve",
    texto: "En Galicia el plan B no es opcional. Todo espacio que proponemos con componente exterior tiene alternativa cerrada de antemano.",
  },
  {
    titulo: "Compatibilidad con proveedores",
    texto: "Cocina, suministro eléctrico, acceso para catering y montaje — lo que no se ve en las fotos pero decide si el evento sale bien.",
  },
];

export default function LocalizacionEspaciosPage() {
  return (
    <>
      <Hero
        titulo="Localización de espacios"
        subtitulo="El sitio exacto para tu evento, en cualquier punto de Galicia."
      />

      <section className="mx-auto max-w-5xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <p>
          Un espacio equivocado condiciona todo lo demás: el aforo, el ambiente, hasta el humor de
          la gente. Y encontrarlo bien es el trabajo que menos tiempo tienes para hacer — entre
          filtrar opciones, visitarlas y negociar condiciones, es fácil que se coman semanas
          enteras de tu agenda.
        </p>
        <p className="mt-4">
          Conocemos el territorio — pazos, naves, espacios singulares, salas con capacidad real —
          y filtramos antes de enseñarte nada. Tú decides entre dos o tres opciones que ya encajan
          con tu evento, no entre una lista interminable de posibilidades sacada de una web de
          reservas genérica.
        </p>
        <p className="mt-4">
          No cobramos por buscar. La localización de espacio va dentro del servicio de
          organización del evento, así que buscar no te cuesta nada extra por explorar varias
          opciones antes de decidir.
        </p>
        <p className="mt-4">
          Y no trabajamos con un único proveedor fijo de espacios ni cobramos comisión de nadie por
          recomendarte un sitio en concreto — la única prioridad al proponerte una opción es que
          encaje de verdad con tu evento, no con ningún acuerdo comercial de fondo del que tú no
          sabes nada.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <CitaDestacada texto="No enseñamos catálogos de fotos bonitas — enseñamos los espacios que ya hemos visitado nosotros mismos y sabemos que funcionan de verdad." />
      </section>

      <section className="bg-cream-200 py-12">
        <div className="mx-auto max-w-5xl px-6 text-ink-700">
          <h2 className="text-xl font-bold text-atlantico-700">Cómo trabajamos</h2>
          <p className="mt-3 max-w-2xl leading-relaxed">
            Te enseñamos dos o tres espacios que ya hemos visitado nosotros — no una lista sacada
            de una web de reservas ni un catálogo genérico de portales inmobiliarios.
          </p>
          <div className="mt-6">
            <TarjetasTexto icono={false} items={comoTrabajamos} />
          </div>
          <p className="mt-6 max-w-2xl leading-relaxed">
            Todo esto pasa antes de que veas la primera propuesta — no es un proceso que empieza
            cuando ya has elegido, sino el filtro que decide qué llega a enseñarte.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="text-xl font-bold text-atlantico-700">Qué tipo de espacio según tu evento</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
          No todos los eventos necesitan el mismo tipo de sitio — el objetivo del evento decide
          antes que la estética del espacio.
        </p>
        <div className="mt-6">
          <TarjetasTexto items={segunEvento} />
        </div>
        <p className="mt-6 max-w-2xl leading-relaxed text-ink-700">
          Cuando el evento combina objetivos — un congreso con cena de gala, por ejemplo — buscamos
          un espacio que cumpla los dos requisitos a la vez, en vez de forzarte a elegir entre uno
          u otro.
        </p>
      </section>

      <section className="bg-cream-200 py-12">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-xl font-bold text-atlantico-700">Qué revisamos siempre</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
            Cuatro cosas que decidimos comprobar en persona antes de proponerte cualquier espacio,
            porque en las fotos nunca se ven.
          </p>
          <div className="mt-6">
            <TarjetasTexto icono={false} items={queRevisamos} />
          </div>
          <p className="mt-6 max-w-2xl leading-relaxed text-ink-700">
            Ninguno de estos cuatro puntos aparece en la ficha de un portal de alquiler de
            espacios — se comprueban en la visita, no se dan por hecho porque el espacio se vea
            bien en las fotos.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pt-6 text-lg leading-relaxed text-ink-700">
        <p>
          Seis tipos de espacio que trabajamos habitualmente en Galicia — no un catálogo cerrado,
          sino una muestra de la variedad real que tenemos ya localizada, visitada y contrastada
          con eventos anteriores.
        </p>
      </section>

      <GridEjemplos ejemplos={localizacionEspaciosEjemplos} />

      <section className="mx-auto max-w-5xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <h2 className="text-xl font-bold text-atlantico-700">Cuándo empezar a buscar</h2>
        <p className="mt-3">
          Cuanto antes, mejor — los espacios con más carácter se reservan con meses de antelación,
          sobre todo en temporada alta o para fechas concretas como cierres de año o convenciones
          de primavera. Si ya tienes fecha decidida, ese es el momento de empezar a mirar, no
          cuando falten dos semanas.
        </p>
        <p className="mt-4">
          Si el programa incluye alojamiento o comidas de varios días, coordinamos también con{" "}
          <a href="/ecosistema/suunia" className="text-atlantico-700 underline">
            SUUNIA
          </a>
          , y si el grupo necesita traslado hasta el espacio, con{" "}
          <a href="/ecosistema/luxe-galicia" className="text-atlantico-700 underline">
            Luxe Galicia
          </a>{" "}
          — todo resuelto con el mismo interlocutor.
        </p>
        <p className="mt-4">
          Y si el espacio que necesitas al final no está en el listado que te enseñamos, seguimos
          buscando — el objetivo no es cerrar rápido, es cerrar bien, aunque haga falta una tercera
          o cuarta ronda de opciones.
        </p>
        <p className="mt-4 font-semibold text-ink-900">
          Cuéntanos el tipo de evento y el aforo aproximado. Te proponemos opciones reales, no una
          lista para que te pierdas eligiendo tú solo.
        </p>
      </section>

      <CTAFinal
        titulo="El sitio perfecto para tu evento existe. El trabajo es encontrarlo antes de que lo reserve otro."
        ctaTexto="Buscamos el espacio"
      />
    </>
  );
}
