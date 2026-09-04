import type { Metadata } from "next";
import Hero from "@/components/shared/Hero";
import GridEjemplos from "@/components/shared/GridEjemplos";
import CitaDestacada from "@/components/shared/CitaDestacada";
import TarjetasTexto from "@/components/shared/TarjetasTexto";
import CTAFinal from "@/components/shared/CTAFinal";
import { cumpleanosEjemplos } from "@/data/celebraciones-cumpleanos";
import { fincasEjemplos } from "@/data/celebraciones-fincas";
import { otrosEventosEjemplos } from "@/data/celebraciones-otros-eventos";

export const metadata: Metadata = {
  title: "Cumpleaños de Adultos y Celebraciones Privadas en Galicia | Mil Eventos Galicia",
  description:
    "Cumpleaños de adultos, fincas, aniversarios y celebraciones privadas en Galicia — con espacio, catering, música y animación resueltos para que solo tengas que disfrutar.",
};

const queCelebramos = [
  {
    titulo: "Cumpleaños de adultos",
    texto:
      "Cumplir 40, 50 o 60 no es motivo para conformarse con la cena de siempre. Es la excusa perfecta para montar algo que la gente recuerde.",
  },
  {
    titulo: "Aniversarios y bodas de plata",
    texto:
      "Celebrar los años juntos a lo grande, con los tuyos, en un sitio que esté a la altura del motivo.",
  },
  {
    titulo: "Jubilaciones y cierres de etapa",
    texto:
      "Un final de recorrido que se recuerda con cariño y buena fiesta, no con un discurso incómodo de sobremesa.",
  },
  {
    titulo: "Reuniones familiares y de grupo",
    texto:
      "Juntar a todos sin que nadie de la familia tenga que pasarse el día organizando en vez de disfrutar.",
  },
];

export default function CumpleanosYGruposPage() {
  return (
    <>
      <Hero
        variante="celebraciones"
        titulo="Cumpleaños y grupos"
        subtitulo="Cumpleaños de adultos, fincas y celebraciones privadas — para los tuyos, sin que te toque a ti montarlo todo."
      />

      <section className="mx-auto max-w-5xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <p>
          Organizar tu propia fiesta tiene un problema: acabas trabajando el día que querías
          disfrutar. Persiguiendo al catering, montando mesas, pendiente de la música mientras tus
          invitados lo pasan bien sin ti. La idea aquí es justo la contraria — que la fiesta la
          disfrutes como uno más.
        </p>
        <p className="mt-4">
          Nos ocupamos del sitio, la comida, la bebida, la música y la animación, y tú apareces a
          celebrar. Lo mismo para un cumpleaños de treinta que para una reunión familiar de cien, en
          una finca con jardín o en un espacio con encanto en plena ciudad.
        </p>
        <p className="mt-4">
          Y con la misma agencia que monta cenas de empresa detrás — así que la fiesta privada
          hereda la misma logística seria, aunque el tono sea mucho más de celebración que de
          reunión de trabajo.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <CitaDestacada
          acento="terracota"
          texto="El día de tu fiesta deberías ser un invitado más, no el que está pendiente de que todo salga bien."
        />
      </section>

      <section className="bg-terracota-100 py-12">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-xl font-bold text-terracota-900">Qué celebramos</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
            Cuatro celebraciones privadas habituales — aunque si lo tuyo no está en la lista, es
            justo el tipo de encargo que nos gusta.
          </p>
          <div className="mt-6">
            <TarjetasTexto acento="terracota" icono={false} items={queCelebramos} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-6 pt-12 text-lg leading-relaxed text-ink-700">
        <h2 className="text-xl font-bold text-terracota-900">Ideas para un cumpleaños</h2>
        <p className="mt-3">
          Algunas formas de darle forma a un cumpleaños de adultos — una muestra de por dónde se
          suele empezar, no un menú cerrado.
        </p>
      </section>

      <GridEjemplos ejemplos={cumpleanosEjemplos} />

      <section className="mx-auto max-w-5xl px-6 pb-6 pt-6 text-lg leading-relaxed text-ink-700">
        <h2 className="text-xl font-bold text-terracota-900">El sitio manda</h2>
        <p className="mt-3">
          Una buena celebración empieza por el lugar. Buscamos el tuyo y nos encargamos de dejarlo
          listo — con jardín, piscina, carpa o vistas — para que el espacio ya ponga el ambiente
          antes de que llegue el primer invitado.
        </p>
      </section>

      <GridEjemplos ejemplos={fincasEjemplos} />

      <section className="bg-terracota-100 py-12">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-xl font-bold text-terracota-900">Otros momentos que celebramos</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
            No todo son cumpleaños: hay fechas que merecen su fiesta aunque no salgan en el
            calendario de nadie más.
          </p>
          <div className="mt-6">
            <TarjetasTexto acento="terracota" icono={false} items={otrosEventosEjemplos.map((e) => ({ titulo: e.nombre, texto: e.descripcion }))} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <h2 className="text-xl font-bold text-terracota-900">Sin sorpresas en el presupuesto</h2>
        <p className="mt-3">
          Una celebración privada no tiene por qué dispararse de precio para salir bien. Trabajamos
          con el presupuesto que nos digas y te proponemos lo que de verdad encaja dentro de él —
          sin apuntarte extras que no pediste y sin cifras que aparecen solo al final, con la fiesta
          ya montada.
        </p>
        <p className="mt-4">
          Y ajustamos según lo que más te importe: a veces es el sitio, a veces la comida, a veces
          que la música no pare. Te ayudamos a poner el dinero donde de verdad se va a notar el día
          de la fiesta, no a repartirlo a ciegas por igual.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12 text-lg leading-relaxed text-ink-700">
        <h2 className="text-xl font-bold text-terracota-900">Cómo empezamos</h2>
        <p className="mt-3">
          Nos cuentas a quién celebras, cuánta gente sois y qué tipo de fiesta imaginas — de una
          comida tranquila en una finca a una noche con DJ hasta tarde. Te proponemos sitio, comida,
          bebida y animación con un presupuesto claro, y lo ajustamos hasta que encaje con lo que
          tienes en la cabeza y con lo que quieres gastar.
        </p>
        <p className="mt-4">
          No cobramos por proponerte ideas: si al final no lo montas con nosotros, no pasa nada. Y
          si lo montas, el día de la fiesta tienes a alguien pendiente de que todo salga bien para
          que tú no tengas que estarlo. Esa es la parte que de verdad se paga — poder ser un
          invitado más en tu propia celebración.
        </p>
        <p className="mt-4">
          Y trabajamos con toda Galicia: una finca en el rural, un espacio con encanto en el centro
          de la ciudad o el sitio de siempre de la familia, si es ahí donde quieres celebrarlo.
          Nosotros nos adaptamos al lugar, no al revés.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12 text-lg leading-relaxed text-ink-700">
        <h2 className="text-xl font-bold text-terracota-900">Y con música y espectáculo</h2>
        <p className="mt-3">
          Si quieres que la fiesta tenga ritmo de verdad, la parte de{" "}
          <a href="/celebraciones/animacion-y-espectaculo" className="text-terracota-600 underline">
            animación y espectáculo
          </a>{" "}
          la ponemos nosotros: DJs, monologuistas, cómicos y drag queens para que nadie se quede
          sentado mirando el móvil.
        </p>
        <p className="mt-4">
          Y si lo que quieres celebrar no encaja del todo en ninguna de estas categorías, mejor: los
          encargos que empiezan con un «se me ha ocurrido una idea rara» suelen ser los que más
          disfrutamos montando, y los que más recuerda quien viene.
        </p>
        <p className="mt-4 font-semibold text-ink-900">
          Cuéntanos qué celebras y con cuánta gente. Nosotros montamos, tú disfrutas.
        </p>
      </section>

      <CTAFinal
        acento="terracota"
        titulo="Es tu fiesta. Deberías poder disfrutarla como el que más."
        ctaTexto="Cuéntanos tu celebración"
      />
    </>
  );
}
