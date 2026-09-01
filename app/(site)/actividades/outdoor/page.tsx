import type { Metadata } from "next";
import Hero from "@/components/shared/Hero";
import GridEjemplos from "@/components/shared/GridEjemplos";
import BannerEcosistema from "@/components/shared/BannerEcosistema";
import CTAFinal from "@/components/shared/CTAFinal";
import TarjetasTexto from "@/components/shared/TarjetasTexto";
import CitaDestacada from "@/components/shared/CitaDestacada";
import { actividadesOutdoor } from "@/data/actividades-outdoor";
import { SEA_GALICIA } from "@/data/ecosistema-marcas";

export const metadata: Metadata = {
  title: "Actividades Outdoor en Galicia | Mil Eventos Galicia",
  description: "Actividades outdoor de team building en Galicia.",
};

const tiposReto = [
  {
    titulo: "Agua",
    texto:
      "Piragüismo, surf, paddle surf — actividades donde el equilibrio y la coordinación se ponen a prueba de inmediato, sin margen para despistarse.",
  },
  {
    titulo: "Tierra",
    texto:
      "Rutas en bici eléctrica u orientación con GPS, para grupos que prefieren moverse por el territorio antes que quedarse en un punto fijo todo el día.",
  },
  {
    titulo: "Altura",
    texto:
      "Escalada y rápel — para equipos que confían literalmente unos en otros, cuerda de por medio, con un guía titulado siempre presente.",
  },
  {
    titulo: "Precisión",
    texto:
      "Tiro con arco y retos similares, donde la concentración individual se combina con la competición amistosa entre compañeros de equipo.",
  },
];

const factoresOutdoor = [
  {
    titulo: "Seguro y material homologado",
    texto:
      "Incluido siempre que la actividad lo requiera, no como un extra que descubres en el presupuesto final sin haberlo pedido.",
  },
  {
    titulo: "Guía titulado",
    texto:
      "Presente en cualquier actividad que lo exija por normativa o por sentido común, sin excepciones ni atajos que ahorren coste.",
  },
  {
    titulo: "Alternativa si el tiempo no acompaña",
    texto:
      "Toda actividad outdoor tiene un plan B cerrado de antemano, no una promesa vaga de improvisar si llueve el día señalado.",
  },
  {
    titulo: "Nivel de exigencia real del grupo",
    texto:
      "Ajustado a la condición física media del equipo, no al perfil más deportista de la plantilla que marca el ritmo para todos.",
  },
];

export default function ActividadesOutdoorPage() {
  return (
    <>
      <Hero titulo="Outdoor" subtitulo="Naturaleza gallega como escenario, no como decorado." />

      <section className="mx-auto max-w-5xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <p>
          Actividades para sacar al equipo del asfalto y ponerlo a decidir, coordinarse y — a
          veces — mojarse, sin que nadie tenga la opción de quedarse mirando desde el margen.
        </p>
        <p className="mt-4">
          Cada una se puede montar suelta — como el cierre de una jornada outdoor, por ejemplo — o
          combinarla con otras dentro de un programa más largo. Son el contenido que le da forma a
          las páginas de{" "}
          <a href="/eventos-empresa/jornadas-outdoor" className="text-atlantico-700 underline">
            jornadas outdoor
          </a>{" "}
          y{" "}
          <a href="/eventos-empresa/team-building" className="text-atlantico-700 underline">
            team building
          </a>
          .
        </p>
        <p className="mt-4">
          Galicia ofrece playas, ríos, montaña y bosque a menos de una hora de las principales
          ciudades, así que el entorno casi nunca es el problema — lo es elegir la actividad
          adecuada dentro de ese entorno.
        </p>
        <p className="mt-4">
          No trabajamos con un catálogo cerrado de seis actividades. Estas son ejemplos
          representativos — si tu equipo necesita algo distinto, lo diseñamos igual que
          cualquier otra actividad a medida, sin coste adicional por estudiar la idea antes de
          comprometerte a nada.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <h2 className="text-xl font-bold text-atlantico-700">Cuatro tipos de reto</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
          Agrupamos las actividades por lo que exigen al grupo, no solo por el escenario donde
          suceden — eso es lo que de verdad marca la experiencia.
        </p>
        <div className="mt-6">
          <TarjetasTexto icono={false} items={tiposReto} />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <CitaDestacada texto="No todo el mundo quiere, ni puede, hacer rápel. Ajustamos el reto antes de proponer nada, no después de que alguien se eche atrás." />
        <p className="mt-6 text-lg leading-relaxed text-ink-700">
          Combinar tipos de reto dentro de un mismo día también es habitual: una ruta suave por la
          mañana y algo de mayor exigencia después de comer, por ejemplo, según cómo vaya
          reaccionando el grupo a lo largo de la jornada.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <h2 className="text-xl font-bold text-atlantico-700">Cuándo elegir outdoor frente a otras opciones</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
          No siempre es la opción adecuada, y conviene saberlo antes de reservar nada ni de
          comprometer una fecha.
        </p>
        <div className="mt-6">
          <TarjetasTexto
            icono={false}
            items={[
              {
                titulo: "Cuando el objetivo es desconectar del entorno de oficina",
                texto:
                  "El cambio de escenario forma parte del efecto — algo que el indoor no ofrece de la misma manera, por bien planteado que esté.",
              },
              {
                titulo: "Cuando el grupo tiene buena condición física media",
                texto:
                  "Si la mayoría prefiere no moverse demasiado, otras categorías como gastronomía o indoor encajan mejor con menos fricción inicial.",
              },
              {
                titulo: "Cuando el tiempo puede jugar en contra",
                texto:
                  "Siempre con un plan B cerrado, pero conviene asumir el riesgo desde el principio, no descubrirlo el mismo día del evento.",
              },
            ]}
          />
        </div>
      </section>

      <section className="bg-cream-200 py-12">
        <div className="mx-auto max-w-5xl px-6 text-ink-700">
          <h2 className="text-xl font-bold text-atlantico-700">Cómo lo planteamos</h2>
          <p className="mt-3 leading-relaxed">
            Tres variables que ajustamos antes de proponerte nada — en este orden, no al azar ni
            según lo que parezca más divertido en una foto.
          </p>
          <div className="mt-6">
            <TarjetasTexto
              icono={false}
              items={[
                { titulo: "Esfuerzo físico", texto: "Del paseo guiado al rápel, según quién viene y qué está dispuesto a probar." },
                { titulo: "Duración", texto: "De un cierre de tarde de dos horas a una jornada completa de día entero." },
                { titulo: "Edad del grupo", texto: "El ritmo se decide antes de elegir actividad, no se ajusta sobre la marcha." },
              ]}
            />
          </div>
          <p className="mt-6 leading-relaxed">
            Si hace falta material técnico o un guía titulado, lo incluimos sin que tengas que
            buscarlo tú por tu cuenta ni contratar un seguro aparte.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="text-xl font-bold text-atlantico-700">Qué revisamos siempre</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
          Cuatro cosas que comprobamos en cualquier actividad outdoor, sea cual sea el tipo de
          reto elegido y el tamaño real del grupo que participa.
        </p>
        <div className="mt-6">
          <TarjetasTexto items={factoresOutdoor} />
        </div>
      </section>

      <GridEjemplos ejemplos={actividadesOutdoor} />
      <BannerEcosistema marca={SEA_GALICIA} />

      <section className="mx-auto max-w-5xl px-6 pt-12 text-lg leading-relaxed text-ink-700">
        <p>
          Las actividades de agua las coordinamos directamente con Sea Galicia, que aporta el
          material, el patrón y la experiencia náutica que una agencia de eventos generalista no
          tiene por su cuenta. Esto incluye desde el equipo de seguridad hasta el conocimiento de
          las condiciones reales de cada tramo de costa.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <h2 className="text-xl font-bold text-atlantico-700">Para qué eventos funciona</h2>
        <p className="mt-3">
          Funciona como actividad central de una jornada outdoor, como cierre de un team building,
          o como programa independiente para una tarde. El único requisito real es un grupo
          dispuesto a salir del entorno habitual de trabajo, sin importar demasiado el tamaño.
        </p>
        <p className="mt-4">
          Funciona igual de bien con diez personas que con varios cientos, aunque el tipo de
          actividad y la logística cambian bastante según el tamaño del grupo.
        </p>
        <p className="mt-4">
          Si todavía no tienes claro si de verdad necesitas outdoor o algo distinto — indoor,
          gastronomía y vinos, o algo a medida —{" "}
          <a href="/actividades" className="text-atlantico-700 underline">
            aquí explicamos cómo elegir entre las cuatro categorías
          </a>
          .
        </p>
        <p className="mt-4 font-semibold text-ink-900">
          Cuéntanos qué tipo de reto encaja con tu equipo. El resto lo montamos nosotros, con el
          material y el guía ya resueltos.
        </p>
      </section>

      <CTAFinal
        titulo="El asfalto no enseña a nadie a trabajar en equipo. La naturaleza, sí."
        ctaTexto="Sácanos de la oficina"
      />
    </>
  );
}
