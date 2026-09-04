import type { Metadata } from "next";
import Hero from "@/components/shared/Hero";
import GridEjemplos from "@/components/shared/GridEjemplos";
import CitaDestacada from "@/components/shared/CitaDestacada";
import TarjetasTexto from "@/components/shared/TarjetasTexto";
import CTAFinal from "@/components/shared/CTAFinal";
import { animacionEjemplos } from "@/data/celebraciones-animacion";

export const metadata: Metadata = {
  title: "Animación y Espectáculo en Galicia: DJs, Cómicos y Drag Queens | Mil Eventos Galicia",
  description:
    "DJs, monologuistas, cómicos, drag queens, música en directo y animación para eventos de empresa y celebraciones privadas en Galicia — con recursos propios, no subcontratas a ciegas.",
};

const segunMomento = [
  {
    titulo: "Para una cena de empresa",
    texto:
      "Un DJ que arranque suave durante la cena y suba cuando toca, o un cómico entre platos que rompa el hielo del equipo.",
  },
  {
    titulo: "Para un cumpleaños o fiesta privada",
    texto:
      "Sesión de DJ, animación que dinamice al grupo o un show de drag queens para una fiesta que no quiere ser previsible.",
  },
  {
    titulo: "Para un acto corporativo",
    texto:
      "Música en directo o un espectáculo con presencia para darle ritmo a una inauguración, un cóctel o una entrega de premios.",
  },
  {
    titulo: "Para cerrar la noche",
    texto:
      "Cuando el plan es que la cosa no acabe con el postre: pista, barra y la música que mantiene a la gente de pie.",
  },
];

const comoTrabajamos = [
  {
    titulo: "Recursos propios",
    texto:
      "DJs, monologuistas, cómicos y artistas que ofrecemos nosotros — no un teléfono suelto que te pasamos para que negocies tú.",
  },
  {
    titulo: "Ajustado al grupo",
    texto:
      "El tono del humor y el estilo de la música se eligen según quién está en la sala, no un guion genérico para todos.",
  },
  {
    titulo: "Coordinado con el evento",
    texto:
      "El espectáculo encaja en el ritmo de la cena o del acto — entra cuando suma, no interrumpe el momento equivocado.",
  },
  {
    titulo: "Con equipo técnico",
    texto:
      "Sonido e iluminación resueltos para que el DJ suene y el show se vea, sin sorpresas de última hora con los cables.",
  },
];

export default function AnimacionYEspectaculoPage() {
  return (
    <>
      <Hero
        variante="celebraciones"
        titulo="Animación y espectáculo"
        subtitulo="DJs, monólogos, cómicos, drag queens y animación — lo que convierte una reunión en una fiesta."
      />

      <section className="mx-auto max-w-5xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <p>
          Un buen espacio y una buena cena montan la mitad de una celebración. La otra mitad es lo
          que pasa cuando la gente termina de comer: si hay algo que los levante de la silla, la
          noche se recuerda; si no, se apaga con el café.
        </p>
        <p className="mt-4">
          Esa segunda mitad la ponemos nosotros, con recursos propios. No te pasamos un contacto
          para que te apañes: coordinamos DJ, cómico, monologuista, drag queen o música en directo
          como parte del evento, ajustados al grupo y al momento exacto en que suman.
        </p>
        <p className="mt-4">
          Y sirve igual para una cena de empresa, un cumpleaños o una inauguración — la animación es
          la pieza que atraviesa todas las celebraciones, sea quien sea el que celebra.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <CitaDestacada
          acento="terracota"
          texto="La diferencia entre una cena y una fiesta es lo que pasa después del postre. Eso no se improvisa."
        />
      </section>

      <section className="bg-terracota-100 py-12">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-xl font-bold text-terracota-900">Qué ofrecemos</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
            Seis formas de darle vida a una celebración — solas o combinadas dentro del mismo
            evento, según lo que pida la noche.
          </p>
        </div>
      </section>

      <GridEjemplos ejemplos={animacionEjemplos} />

      <section className="mx-auto max-w-5xl px-6 pb-6 pt-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-xl font-bold text-terracota-900">Según el momento</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
            La misma caja de herramientas cambia de forma según el tipo de celebración a la que
            entra.
          </p>
          <div className="mt-6">
            <TarjetasTexto acento="terracota" icono={false} items={segunMomento} />
          </div>
        </div>
      </section>

      <section className="bg-terracota-100 py-12">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-xl font-bold text-terracota-900">Cómo trabajamos la animación</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
            Cuatro cosas que hacen que el espectáculo sume en vez de quedar como un número pegado al
            final.
          </p>
          <div className="mt-6">
            <TarjetasTexto acento="terracota" items={comoTrabajamos} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <h2 className="text-xl font-bold text-terracota-900">La música según el grupo</h2>
        <p className="mt-3">
          No suena igual una cena de directivos que un cumpleaños de un grupo de amigos, ni un
          cóctel de networking que una fiesta de fin de año de una plantilla joven. El DJ y el
          repertorio se eligen según quién está en la sala y qué momento de la noche es — arrancar
          suave en la cena, subir en el postre, cerrar fuerte.
        </p>
        <p className="mt-4">
          Con el humor pasa lo mismo: un monologuista o un cómico funcionan cuando el tono encaja
          con el público. Por eso hablamos antes contigo del perfil del grupo, para elegir al
          artista adecuado y no arriesgar un número que se caiga en el silencio equivocado.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12 text-lg leading-relaxed text-ink-700">
        <h2 className="text-xl font-bold text-terracota-900">Por qué con recursos propios</h2>
        <p className="mt-3">
          La diferencia entre contratar un DJ suelto por tu cuenta y hacerlo a través de nosotros no
          es el artista — es que aquí el espectáculo forma parte del evento. Sabemos a qué hora
          entra, cómo encaja con la cena o el acto, qué tono de humor funciona con ese grupo y qué
          sonido necesita la sala. Un proveedor aislado hace su número y se va; nosotros lo
          integramos en el ritmo de la noche.
        </p>
        <p className="mt-4">
          También significa un único responsable si algo se tuerce. Si el técnico se retrasa o el
          equipo falla, lo resolvemos nosotros — no te quedas tú, la noche de tu evento, buscando un
          cable o llamando a un número que no contesta. Esa tranquilidad es buena parte de lo que se
          contrata al coordinar la animación con el resto del evento.
        </p>
        <p className="mt-4">
          Todo el catálogo — DJs, cómicos, monologuistas, drag queens, música en directo — sale de
          gente con la que ya hemos trabajado y sabemos cómo responde. No improvisamos con un nombre
          sacado de un anuncio la semana antes de tu evento.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12 text-lg leading-relaxed text-ink-700">
        <h2 className="text-xl font-bold text-terracota-900">Parte de una celebración completa</h2>
        <p className="mt-3">
          La animación no suele ir sola: la coordinamos con la{" "}
          <a href="/celebraciones/cenas-de-empresa" className="text-terracota-600 underline">
            cena de empresa
          </a>
          , la{" "}
          <a href="/celebraciones/celebraciones-de-empresa" className="text-terracota-600 underline">
            celebración corporativa
          </a>{" "}
          o el{" "}
          <a href="/celebraciones/cumpleanos-y-grupos" className="text-terracota-600 underline">
            cumpleaños
          </a>{" "}
          — un único interlocutor para todo el evento, no un proveedor más que gestionar aparte.
        </p>
        <p className="mt-4">
          También podemos entrar solo con la parte de animación si el resto del evento ya lo tienes
          montado: si solo te falta el DJ, el cómico o el show, esa pieza te la resolvemos igual, sin
          obligarte a contratar todo el paquete.
        </p>
        <p className="mt-4 font-semibold text-ink-900">
          Cuéntanos qué tipo de noche quieres. Le ponemos la música y el show que le pega.
        </p>
      </section>

      <CTAFinal
        acento="terracota"
        titulo="La celebración la recuerdan por cómo terminó. Pongámosle el final que merece."
        ctaTexto="Cuéntanos tu celebración"
      />
    </>
  );
}
