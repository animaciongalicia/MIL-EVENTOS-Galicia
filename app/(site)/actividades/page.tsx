import type { Metadata } from "next";
import Hero from "@/components/shared/Hero";
import LandingCategoria from "@/components/shared/LandingCategoria";
import CifrasDestacadas from "@/components/shared/CifrasDestacadas";
import CitaDestacada from "@/components/shared/CitaDestacada";
import TarjetasTexto from "@/components/shared/TarjetasTexto";
import CTAFinal from "@/components/shared/CTAFinal";
import Link from "next/link";

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

const cifrasActividades = [
  { valor: "+15", etiqueta: "años eligiendo y diseñando actividades para eventos de empresa en Galicia" },
  { valor: "4", etiqueta: "categorías: outdoor, indoor, gastronomía y vinos, y actividades a medida" },
];

const criteriosEleccion = [
  {
    titulo: "El objetivo del evento",
    texto:
      "No es lo mismo integrar un equipo nuevo que premiar un buen trimestre — la actividad cambia según lo que quieras conseguir, no según lo que esté de moda ese año.",
  },
  {
    titulo: "El tamaño y el perfil del grupo",
    texto:
      "Diez personas y doscientas no se gestionan igual, ni un equipo técnico y uno comercial responden a lo mismo — lo que funciona para uno puede no funcionar para el otro.",
  },
  {
    titulo: "El tiempo disponible",
    texto:
      "De una hora de cierre a una jornada completa — el formato se ajusta al tiempo real que tienes, no al revés, forzando una actividad que no cabe en la agenda.",
  },
  {
    titulo: "El presupuesto",
    texto:
      "Ajustamos la propuesta al presupuesto por persona desde el principio, no proponemos primero algo llamativo y encajamos precio después.",
  },
];

const categoriasDetalle = [
  {
    titulo: "Outdoor",
    texto:
      "Playas, ríos, montaña y bosque a menos de una hora de las principales ciudades gallegas. Para grupos que quieren moverse, decidir y coordinarse al aire libre, con distintos niveles de esfuerzo físico.",
  },
  {
    titulo: "Indoor",
    texto:
      "Cuando el tiempo no acompaña, o simplemente prefieres tener el evento bajo control. Se adaptan al espacio que ya tengas reservado, sin necesidad de buscar uno nuevo, y al tamaño del grupo.",
  },
  {
    titulo: "Gastronomía y vinos",
    texto:
      "Producto y productores locales, no catering genérico de macroevento. Funciona igual de bien como cierre de jornada que como programa independiente para toda una tarde.",
  },
  {
    titulo: "A medida",
    texto:
      "Para lanzamientos de producto, aniversarios de empresa o cualquier evento donde la marca tiene que estar presente en cada detalle, no solo en el logo de la pantalla. No cobramos por estudiar la viabilidad.",
  },
];

const factoresOperativos = [
  {
    titulo: "Seguridad y material técnico",
    texto:
      "Si una actividad requiere material especializado o un guía titulado, lo incluimos sin que tengas que buscarlo tú por tu cuenta ni contratar un seguro aparte.",
  },
  {
    titulo: "Restricciones y accesibilidad",
    texto:
      "Alimentarias, de movilidad o de cualquier tipo — las preguntamos antes de proponer, no las descubrimos el día del evento con el grupo ya allí y sin margen de reacción.",
  },
  {
    titulo: "Plan B si el tiempo no acompaña",
    texto:
      "Toda actividad outdoor tiene una alternativa cerrada de antemano, no una promesa vaga de improvisar sobre la marcha si llueve el día señalado.",
  },
  {
    titulo: "Edad y condición física del grupo",
    texto:
      "No todo el mundo quiere, ni puede, hacer rápel — ajustamos el nivel de esfuerzo antes de proponer nada, no después de que alguien se queje a mitad de actividad.",
  },
];

export default function ActividadesPage() {
  return (
    <>
      <Hero
        titulo="Actividades para tu evento"
        subtitulo="El catálogo de experiencias que le dan forma a un team building, una jornada outdoor o un incentivo."
      />

      <section className="mx-auto max-w-5xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <p>
          Ninguna de estas actividades se vende suelta como un producto de catálogo — son las
          piezas con las que construimos tu{" "}
          <Link href="/eventos-empresa" className="text-atlantico-700 underline">
            evento de empresa
          </Link>
          . Aquí las agrupamos por tipo para que veas de un vistazo lo que es posible.
        </p>
        <p className="mt-4">
          Cada actividad se elige, o se diseña, en función del objetivo del evento — no al revés.
          Por eso no encontrarás aquí una ficha de producto con precio y botón de reserva: la
          decisión se toma en conversación contigo, no en una página web.
        </p>
        <p className="mt-4">
          Lo que sí encontrarás es una idea clara de lo que es posible en cada categoría, para que
          llegues a esa conversación sabiendo qué preguntar — no en blanco, ni con la idea de que
          esto funciona como un catálogo de e-commerce.
        </p>
        <p className="mt-4">
          Y si al final del recorrido sigues sin tener claro por dónde empezar, esa es
          precisamente la conversación que tenemos que tener nosotros — no algo que debas resolver
          solo leyendo esta página.
        </p>
      </section>

      <section className="pb-12">
        <CifrasDestacadas cifras={cifrasActividades} />
      </section>

      <LandingCategoria intro="Cuatro categorías, un mismo criterio: nada genérico." sublandings={sublandings} />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-bold text-atlantico-700">Qué encontrarás en cada categoría</h2>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed text-ink-700">
          Un resumen antes de entrar en el detalle de cada una, con ejemplos concretos, en su
          propia página.
        </p>
        <div className="mt-8">
          <TarjetasTexto icono={false} items={categoriasDetalle} />
        </div>
      </section>

      <section className="bg-cream-200 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold text-atlantico-700">Cómo elegimos las actividades</h2>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-ink-700">
            Antes de proponerte nada, ajustamos la actividad a cuatro variables — en este orden,
            no al azar.
          </p>
          <div className="mt-8">
            <TarjetasTexto icono={false} items={criteriosEleccion} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-bold text-atlantico-700">Se combinan, no se venden sueltas</h2>
        <div className="mt-6">
          <CitaDestacada texto="Una misma jornada puede combinar una actividad náutica por la mañana, una comida con producto gallego al mediodía y un taller en equipo por la tarde." />
        </div>
        <p className="mt-6 text-lg leading-relaxed text-ink-700">
          La combinación depende del objetivo del evento, del perfil de los asistentes y del
          tiempo disponible — no de una lista fija de la que elegir sin más. Utilizamos las
          actividades como piezas modulares dentro de un programa más amplio, casi nunca como un
          plan cerrado y aislado.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-ink-700">
          Esto significa, en la práctica, que el mismo día de evento puede tocar tres de las
          cuatro categorías sin que se note la costura entre una y otra.
        </p>
      </section>

      <section className="bg-cream-200 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold text-atlantico-700">Qué tenemos en cuenta siempre</h2>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-ink-700">
            Cuatro factores que revisamos en cualquier actividad, sea cual sea la categoría —
            antes de que se conviertan en un problema el día del evento.
          </p>
          <div className="mt-8">
            <TarjetasTexto items={factoresOperativos} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 text-lg leading-relaxed text-ink-700">
        <h2 className="text-2xl font-bold text-atlantico-700">Cuando nada de esto encaja</h2>
        <p className="mt-3">
          Si tu evento no encaja con ninguna de las cuatro categorías — porque mezcla varias,
          porque el grupo tiene una necesidad muy concreta, o porque quieres algo que nadie más ha
          hecho — no hay problema. Es, de hecho, uno de los encargos que más se repite, y suele
          dar los resultados más memorables precisamente porque no sigue una plantilla.
        </p>
        <p className="mt-4">
          En la práctica no cuesta ni más tiempo ni más dinero que elegir de las categorías ya
          existentes: solo una conversación distinta al principio, en la que entendemos qué
          quieres conseguir antes de proponer nada concreto. Puedes ver algunos ejemplos en{" "}
          <Link href="/actividades/a-medida" className="text-atlantico-700 underline">
            actividades a medida
          </Link>
          .
        </p>
        <p className="mt-4">
          Y si todavía no tienes claro el formato de evento en el que encajará la actividad,{" "}
          <Link href="/eventos-empresa" className="text-atlantico-700 underline">
            eventos de empresa
          </Link>{" "}
          es un buen punto de partida: ahí explicamos cómo elegir entre team building, incentivos,
          jornadas outdoor y congresos, antes de entrar en el detalle de qué actividad concreta
          encaja con cada uno.
        </p>
      </section>

      <CTAFinal titulo="¿Cuál encaja con tu evento? Empecemos por ahí." />
    </>
  );
}
