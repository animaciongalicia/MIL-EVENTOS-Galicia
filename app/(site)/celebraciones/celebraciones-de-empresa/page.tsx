import type { Metadata } from "next";
import Hero from "@/components/shared/Hero";
import GridEjemplos from "@/components/shared/GridEjemplos";
import CitaDestacada from "@/components/shared/CitaDestacada";
import TarjetasTexto from "@/components/shared/TarjetasTexto";
import CTAFinal from "@/components/shared/CTAFinal";
import { celebracionesEmpresaEjemplos } from "@/data/celebraciones-empresa";

export const metadata: Metadata = {
  title: "Celebraciones de Empresa en Galicia: Inauguraciones y Cócteles | Mil Eventos Galicia",
  description:
    "Inauguraciones, cócteles corporativos, aniversarios de empresa y entregas de premios en Galicia — con la producción, la animación y el catering resueltos de principio a fin.",
};

const cuandoTiene = [
  {
    titulo: "Abres algo nuevo",
    texto:
      "Una oficina, una tienda, una nave. La inauguración es la primera impresión pública — conviene que sea buena y que se comparta.",
  },
  {
    titulo: "Cumples una cifra redonda",
    texto:
      "Diez, veinticinco, cincuenta años. Un aniversario de empresa merece más que un correo interno de felicitación.",
  },
  {
    titulo: "Reconoces a alguien",
    texto:
      "Una entrega de premios internos, un homenaje a quien se jubila, el cierre de una etapa — con la puesta en escena a la altura.",
  },
  {
    titulo: "Quieres reunir sin más excusa",
    texto:
      "Un cóctel de empresa que mezcla networking y celebración, sin la rigidez de una jornada de trabajo.",
  },
];

const erroresQueEvitamos = [
  {
    titulo: "El acto que no acaba nunca",
    texto:
      "Discursos encadenados sin ritmo vacían la sala. Medimos los tiempos para que el acto tenga principio, clímax y cierre.",
  },
  {
    titulo: "La marca solo en el logo",
    texto:
      "Un logo proyectado al fondo no es presencia de marca. La integramos en el espacio, el detalle y la puesta en escena.",
  },
  {
    titulo: "El catering indistinguible",
    texto:
      "Bandejas iguales a las de cualquier otro evento no dejan huella. Producto y formato pensados para que se recuerden.",
  },
  {
    titulo: "El sitio mal calculado",
    texto:
      "Un aforo de ficha que en realidad se queda corto arruina la sensación. Verificamos el espacio en persona antes.",
  },
];

const queResolvemos = [
  {
    titulo: "Espacio y producción",
    texto:
      "El sitio con carácter y la parte técnica — sonido, iluminación, escenario — para que el acto se vea y se oiga bien.",
  },
  {
    titulo: "Catering y cóctel",
    texto:
      "Desde un cóctel en pie con producto gallego hasta un catering completo, según el formato y el número de invitados.",
  },
  {
    titulo: "Animación y espectáculo",
    texto:
      "DJ, música en directo o show para darle ritmo al acto — recursos propios, no un teléfono que te pasamos.",
  },
  {
    titulo: "Imagen y detalle",
    texto:
      "Photocall, decoración y ambientación coordinados con tu marca, para que el evento se reconozca como tuyo en la foto.",
  },
];

export default function CelebracionesDeEmpresaPage() {
  return (
    <>
      <Hero
        variante="celebraciones"
        titulo="Celebraciones de empresa"
        subtitulo="Inauguraciones, cócteles, aniversarios y entregas de premios que se recuerdan y se comparten."
      />

      <section className="mx-auto max-w-5xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <p>
          No todas las celebraciones de empresa son una cena. Hay momentos que piden su propio
          formato: abrir un sitio nuevo, cumplir años como compañía, reconocer a quien lo merece o
          simplemente reunir a clientes y equipo en un ambiente distinto al de la sala de reuniones.
        </p>
        <p className="mt-4">
          Son eventos donde la marca está presente en cada detalle, no solo en un logo proyectado al
          fondo. Por eso los montamos como lo que son — un acto que representa a tu empresa — y no
          como una fiesta genérica con el nombre pegado encima.
        </p>
        <p className="mt-4">
          Y lo hacemos de principio a fin: espacio, producción técnica, catering, animación e imagen
          coordinados por una sola persona, para que tú puedas estar en tu propio evento como
          anfitrión y no como responsable de logística.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <CitaDestacada
          acento="terracota"
          texto="Un buen evento de empresa no se nota en el montaje. Se nota en que todo el mundo se fue con ganas de repetir."
        />
      </section>

      <section className="bg-terracota-100 py-12">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-xl font-bold text-terracota-900">Cuándo tiene sentido</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
            Cuatro situaciones habituales en las que a una empresa le compensa celebrar con formato
            propio, más allá de la cena anual.
          </p>
          <div className="mt-6">
            <TarjetasTexto acento="terracota" icono={false} items={cuandoTiene} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-6 pt-12 text-lg leading-relaxed text-ink-700">
        <p>
          Algunos formatos de celebración de empresa que montamos habitualmente en Galicia — una
          muestra, no un catálogo cerrado: casi todo se adapta a lo que tu empresa quiere contar.
        </p>
      </section>

      <GridEjemplos ejemplos={celebracionesEmpresaEjemplos} />

      <section className="bg-terracota-100 py-12">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-xl font-bold text-terracota-900">Qué resolvemos</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
            Las cuatro piezas de cualquier celebración corporativa, coordinadas entre sí y con tu
            marca, no gestionadas por separado.
          </p>
          <div className="mt-6">
            <TarjetasTexto acento="terracota" items={queResolvemos} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="text-xl font-bold text-terracota-900">Qué evitamos</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
          Cuatro fallos habituales que convierten un evento de empresa con buena intención en una
          tarde larga que nadie recuerda con ganas.
        </p>
        <div className="mt-6">
          <TarjetasTexto acento="terracota" icono={false} items={erroresQueEvitamos} />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <h2 className="text-xl font-bold text-terracota-900">Cómo lo planteamos</h2>
        <p className="mt-3">
          Empezamos por lo que quieres que la gente se lleve del evento — una imagen de marca, una
          sensación de cercanía, un reconocimiento público — y desde ahí construimos hacia atrás:
          formato, espacio, producción y ritmo. No al revés, eligiendo un formato de catálogo y
          encajando tu objetivo como se pueda.
        </p>
        <p className="mt-4">
          Te presentamos una propuesta cerrada, con presupuesto claro, antes de mover nada. Y el día
          del evento coordinamos sobre el terreno para que tú ejerzas de anfitrión — recibiendo a
          los invitados, no revisando si el técnico de sonido ha llegado. Ese cambio de papel, de
          organizador a anfitrión, es justo lo que vienes a comprar.
        </p>
        <p className="mt-4">
          Y no cobramos por estudiar la idea: nos cuentas qué tienes en mente y te decimos en un par
          de días si es realista con tu presupuesto y tu fecha, y qué haría falta para llevarla a
          cabo. Si no lo es, te lo decimos también — mejor eso que un evento a medias.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12 text-lg leading-relaxed text-ink-700">
        <h2 className="text-xl font-bold text-terracota-900">Con espectáculo y bien ubicado</h2>
        <p className="mt-3">
          Si el acto pide música o show, la parte de{" "}
          <a href="/celebraciones/animacion-y-espectaculo" className="text-terracota-600 underline">
            animación y espectáculo
          </a>{" "}
          la ponemos nosotros. Y si buscas el espacio ideal para el evento, lo localizamos a través
          de{" "}
          <a href="/espacios-y-recursos/localizacion-espacios" className="text-terracota-600 underline">
            localización de espacios
          </a>
          , con aforo real verificado antes de proponerte nada.
        </p>
        <p className="mt-4">
          Trabajamos igual con la empresa que celebra su primera apertura que con la que lleva
          décadas y quiere un aniversario a la altura de su historia. El presupuesto y la escala
          cambian; el criterio de que el evento represente bien a la marca, no.
        </p>
        <p className="mt-4 font-semibold text-ink-900">
          Cuéntanos qué celebra tu empresa. Le damos el formato que merece.
        </p>
      </section>

      <CTAFinal
        acento="terracota"
        titulo="Tu empresa tiene algo que celebrar. Vamos a montarlo para que se note."
        ctaTexto="Cuéntanos tu evento"
      />
    </>
  );
}
