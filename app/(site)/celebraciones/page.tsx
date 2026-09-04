import type { Metadata } from "next";
import Hero from "@/components/shared/Hero";
import LandingCategoria from "@/components/shared/LandingCategoria";
import CitaDestacada from "@/components/shared/CitaDestacada";
import TarjetasTexto from "@/components/shared/TarjetasTexto";
import CTAFinal from "@/components/shared/CTAFinal";

export const metadata: Metadata = {
  title: "Celebraciones en Galicia para Empresas y Particulares | Mil Eventos Galicia",
  description:
    "Cenas de empresa, cenas de Navidad, cumpleaños, inauguraciones y fiestas en Galicia — con DJs, cómicos, monólogos, drag queens y animación. Para empresas y particulares.",
};

const sublandings = [
  {
    titulo: "Cenas de empresa",
    descripcion: "Cena de Navidad, cierre de año o de proyecto — con DJ, espectáculo o temática.",
    href: "/celebraciones/cenas-de-empresa",
  },
  {
    titulo: "Celebraciones de empresa",
    descripcion: "Inauguraciones, cócteles, aniversarios y entregas de premios que se recuerdan.",
    href: "/celebraciones/celebraciones-de-empresa",
  },
  {
    titulo: "Cumpleaños y grupos",
    descripcion: "Cumpleaños de adultos, fincas y celebraciones privadas para los tuyos.",
    href: "/celebraciones/cumpleanos-y-grupos",
  },
  {
    titulo: "Animación y espectáculo",
    descripcion: "DJs, monólogos, cómicos, drag queens y animación para cualquier celebración.",
    href: "/celebraciones/animacion-y-espectaculo",
  },
];

const porQue = [
  {
    titulo: "Un único interlocutor",
    texto:
      "Espacio, catering, música, espectáculo y decoración coordinados por una sola persona — tú no persigues a cinco proveedores distintos.",
  },
  {
    titulo: "Empresas y particulares",
    texto:
      "La misma agencia que monta la cena de Navidad de tu empresa te monta el cumpleaños sorpresa — con el mismo cuidado y sin cambiar de tono.",
  },
  {
    titulo: "Animación propia",
    texto:
      "DJs, cómicos, monologuistas y drag queens que ofrecemos nosotros, no un teléfono suelto que te pasamos para que te apañes.",
  },
  {
    titulo: "Sin sorpresas de última hora",
    texto:
      "El presupuesto cerrado antes de empezar, y un plan B para lo que pueda fallar — que en una fiesta, algo siempre intenta fallar.",
  },
];

export default function CelebracionesPage() {
  return (
    <>
      <Hero
        variante="celebraciones"
        titulo="Celebraciones en Galicia"
        subtitulo="Cenas de empresa, cumpleaños y fiestas que se recuerdan — para empresas y para particulares."
        imagenSeed="celebraciones-galicia-fiesta"
      />

      <section className="mx-auto max-w-5xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <p>
          Hay quien celebra un cierre de año con su equipo y quien celebra los 50 con los suyos. El
          motivo cambia; lo que no cambia es lo que hace que una celebración salga bien: el sitio
          adecuado, la comida a la altura, la música que llena la pista y alguien que se ocupe de
          todo para que tú solo tengas que disfrutar.
        </p>
        <p className="mt-4">
          Eso es lo que hacemos aquí, lo mismo para una cena de empresa de trescientas personas que
          para un cumpleaños de treinta. Y con animación de verdad — DJs, cómicos, monólogos, drag
          queens — que ofrecemos nosotros, no que subcontratas a ciegas por tu cuenta.
        </p>
        <p className="mt-4">
          Durante años esta parte del negocio se quedó fuera de la web, como si celebrar fuera algo
          menor. No lo es: una cena de empresa bien montada hace por el equipo más que muchas
          reuniones, y una buena fiesta privada se recuerda durante años. Así que le damos el sitio
          que merece — una página reina, con todo lo que hace falta para montarla bien.
        </p>
        <p className="mt-4">
          El motivo cambia; el catálogo de lo que hace falta para montarla, no. Un buen sitio, la
          comida a la altura, la bebida que corre, música que llena la pista y, si toca, un
          espectáculo que la gente comenta al día siguiente. Nosotros reunimos todas esas piezas y
          las coordinamos, para que tú solo elijas el motivo y la fecha.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-6">
        <CitaDestacada
          acento="terracota"
          texto="Una buena fiesta no se improvisa el mismo día. Se organiza antes para que ese día no tengas que organizar nada."
        />
      </section>

      <LandingCategoria
        acento="terracota"
        intro="Cuatro formas de celebrar, según a quién reúnas y qué quieras celebrar. Entra por la que más se parezca a lo tuyo — y si dudas, empieza por escribirnos."
        sublandings={sublandings}
      />

      <section className="bg-terracota-100 py-12">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-xl font-bold text-terracota-900">Por qué montarla con nosotros</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
            Cuatro razones concretas, sin humo, que separan una celebración organizada de una
            improvisada a última hora.
          </p>
          <div className="mt-6">
            <TarjetasTexto acento="terracota" items={porQue} />
          </div>
          <p className="mt-6 max-w-2xl leading-relaxed text-ink-700">
            Ninguna de estas cuatro es un extra que se cobra aparte: es la forma en que trabajamos
            cualquier celebración, sea de empresa o privada, grande o pequeña.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <h2 className="text-xl font-bold text-terracota-900">Empresas y particulares, misma agencia</h2>
        <p className="mt-3">
          La mayoría de agencias eligen un lado: o eventos de empresa serios, o fiestas privadas.
          Nosotros hacemos los dos, y a propósito. La logística que hace que una convención de
          trescientas personas salga clavada es la misma que hace que un cumpleaños de treinta no se
          convierta en un caos — solo cambia el tono.
        </p>
        <p className="mt-4">
          Para las empresas eso significa una celebración tan bien organizada como cualquier otro
          evento corporativo, pero con ganas de fiesta. Para los particulares, que tu cumpleaños o
          tu aniversario hereda la seriedad logística de quien monta eventos de empresa todo el año,
          sin perder la cercanía. Lo mejor de los dos mundos, en la misma agencia.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12 text-lg leading-relaxed text-ink-700">
        <h2 className="text-xl font-bold text-terracota-900">Cómo lo montamos</h2>
        <p className="mt-3">
          Nos cuentas qué celebras, cuánta gente y la fecha aproximada. Te devolvemos una propuesta
          cerrada — espacio, comida, bebida, música y animación — con el presupuesto claro y sin
          letra pequeña. Si algo no encaja, lo ajustamos antes de contratar nada.
        </p>
        <p className="mt-4">
          El día de la celebración hay alguien de nuestro equipo coordinando sobre el terreno, para
          que cualquier imprevisto lo resolvamos nosotros mientras tú estás en la fiesta. Esa es la
          diferencia entre contratar proveedores sueltos y que alguien se responsabilice del evento
          entero.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12 text-lg leading-relaxed text-ink-700">
        <h2 className="text-xl font-bold text-terracota-900">Da igual el tamaño</h2>
        <p className="mt-3">
          Una celebración de treinta personas necesita cercanía y agilidad; una de trescientas
          necesita logística, producción técnica y un plan para cada eslabón. Montamos las dos, con
          el mismo criterio — lo que cambia es la escala, no el cuidado.
        </p>
        <p className="mt-4">
          Y da igual también quién celebra: la empresa que cierra el año y la familia que junta a
          tres generaciones reciben el mismo trato, el mismo interlocutor único y la misma
          animación propia. Cambia el tono, no la seriedad con la que lo organizamos.
        </p>
        <p className="mt-4 font-semibold text-ink-900">
          Cuéntanos qué celebras y con quién. Del resto nos encargamos nosotros.
        </p>
      </section>

      <CTAFinal
        acento="terracota"
        titulo="Tienes un motivo para celebrar. Nosotros, las ganas de montarlo bien."
        ctaTexto="Cuéntanos tu celebración"
      />
    </>
  );
}
