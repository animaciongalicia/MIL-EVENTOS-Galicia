import type { Metadata } from "next";
import Hero from "@/components/shared/Hero";
import GridEjemplos from "@/components/shared/GridEjemplos";
import BannerEcosistema from "@/components/shared/BannerEcosistema";
import CTAFinal from "@/components/shared/CTAFinal";
import PasosTrabajo from "@/components/shared/PasosTrabajo";
import CitaDestacada from "@/components/shared/CitaDestacada";
import TarjetasTexto from "@/components/shared/TarjetasTexto";
import { jornadasOutdoorEjemplos } from "@/data/eventos-empresa-jornadas-outdoor";
import { SEA_GALICIA } from "@/data/ecosistema-marcas";

export const metadata: Metadata = {
  title: "Jornadas Outdoor en Galicia | Mil Eventos Galicia",
  description: "Jornadas outdoor para empresas en Galicia.",
};

const objetivosJornada = [
  {
    titulo: "Desconectar de verdad",
    texto:
      "Un respiro real antes de una temporada exigente, no una reunión trasladada al aire libre con el mismo ritmo de siempre y el mismo tipo de conversación.",
  },
  {
    titulo: "Integrar a un equipo nuevo",
    texto:
      "Después de una contratación grande o una fusión, cuando hace falta que la gente se conozca fuera del contexto de trabajo y de la jerarquía habitual.",
  },
  {
    titulo: "Cerrar un proyecto largo",
    texto:
      "Un punto y final que se recuerda, en vez de que el proyecto termine con un email de cierre y nadie note que se ha acabado.",
  },
  {
    titulo: "Recargar antes de una temporada dura",
    texto:
      "Un día de margen antes de que empiece la época de más carga de trabajo del año, cuando ya no habrá tiempo para parar.",
  },
];

const dondeGalicia = [
  {
    titulo: "Playa",
    texto:
      "Deportes de coordinación en la arena o en el agua, con el Atlántico como único decorado que hace falta — sin nada más que montar.",
  },
  {
    titulo: "Río",
    texto:
      "Descenso en canoa o kayak, actividades que exigen comunicación constante entre quienes reman juntos, sin margen para ir cada uno a lo suyo.",
  },
  {
    titulo: "Montaña",
    texto:
      "Rutas con reto físico real, orientación y trabajo en equipo cuando el terreno no perdona errores ni decisiones tomadas a la ligera.",
  },
  {
    titulo: "Bosque",
    texto:
      "Entornos más tranquilos, ideales para actividades de menor exigencia física y más enfoque en la conversación entre el grupo.",
  },
];

const factoresJornada = [
  {
    titulo: "Plan B si el tiempo no acompaña",
    texto: "Toda jornada outdoor tiene una alternativa cerrada de antemano, no una promesa vaga de improvisar si llueve el día señalado.",
  },
  {
    titulo: "Nivel de esfuerzo físico",
    texto: "Ajustado a la edad y condición del grupo entero, no al perfil más deportista de la plantilla que marca el ritmo.",
  },
  {
    titulo: "Transporte hasta el lugar",
    texto: "Coordinado como parte del día, no como algo que cada uno resuelve por su cuenta y llega cuando puede.",
  },
  {
    titulo: "Cierre del día",
    texto: "Una comida o un momento final que redondea la jornada, para que no se quede solo en la actividad física.",
  },
];

export default function JornadasOutdoorPage() {
  return (
    <>
      <Hero titulo="Jornadas outdoor" subtitulo="Salir de la oficina, con propósito." />

      <section className="mx-auto max-w-3xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <p>
          Salir de la oficina un día no arregla nada si el día se parece a estar en la oficina,
          solo que con mosquitos. Una charla motivacional al aire libre sigue siendo una charla
          motivacional.
        </p>
        <p className="mt-4">
          Galicia ayuda: playas, ríos, montaña y bosque a menos de una hora de las principales
          ciudades. La diferencia entre &ldquo;salir al campo&rdquo; y una jornada outdoor de
          verdad está en aprovechar ese entorno con intención, no en encontrar un sitio bonito
          para la foto de grupo que luego nadie mira.
        </p>
        <p className="mt-4">
          Por eso la primera pregunta nunca es dónde, sino para qué. El lugar se elige después, en
          función del objetivo del día, no al revés como suele plantearse.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-12">
        <CitaDestacada texto="No es solo salir al campo: es decidir qué ritmo necesita el grupo, cuánto esfuerzo físico tiene sentido pedir, y cómo se cierra el día para que no se quede en una anécdota." />
        <p className="mt-6 text-lg leading-relaxed text-ink-700">
          Esa decisión se toma antes de reservar nada, no sobre la marcha el mismo día de la
          jornada.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <h2 className="text-xl font-bold text-atlantico-700">Qué objetivo buscas</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
          El formato del día cambia por completo según cuál sea el objetivo real — no es lo mismo
          desconectar que integrar a gente nueva.
        </p>
        <div className="mt-6">
          <TarjetasTexto icono={false} items={objetivosJornada} />
        </div>
      </section>

      <section className="bg-cream-200 py-12">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-xl font-bold text-atlantico-700">Dónde lo hacemos</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
            Cuatro entornos, cada uno con su propio tipo de actividad y de exigencia física —
            todos a menos de una hora de las principales ciudades gallegas.
          </p>
          <div className="mt-6">
            <TarjetasTexto icono={false} items={dondeGalicia} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <h2 className="text-xl font-bold text-atlantico-700">Cómo trabajamos</h2>
        <p className="mt-3">
          El mismo proceso siempre, cambie el entorno o el objetivo del día — sin pasos de más ni
          reuniones que no aporten nada.
        </p>
        <PasosTrabajo
          pasos={[
            {
              titulo: "Definimos el objetivo del día",
              descripcion: "Desconectar, integrar a un equipo nuevo, cerrar un proyecto — no salir por salir sin motivo claro.",
            },
            {
              titulo: "Elegimos el ritmo",
              descripcion: "Esfuerzo físico, duración y tipo de grupo, antes de proponer ningún entorno o actividad concreta.",
            },
            {
              titulo: "Montamos el día completo",
              descripcion: "Actividad, transporte, comida y cierre — todo encadenado, sin huecos que tengas que llenar tú.",
            },
            {
              titulo: "Tú apareces",
              descripcion: "El plan alternativo si el tiempo no acompaña ya está resuelto de antemano, sin improvisar nada.",
            },
          ]}
        />
      </section>

      <section className="bg-cream-200 py-12">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-xl font-bold text-atlantico-700">Qué tenemos en cuenta siempre</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
            Cuatro cosas que revisamos en cualquier jornada, sea cual sea el entorno elegido —
            antes de que se conviertan en un problema el mismo día.
          </p>
          <div className="mt-6">
            <TarjetasTexto items={factoresJornada} />
          </div>
        </div>
      </section>

      <GridEjemplos ejemplos={jornadasOutdoorEjemplos} />

      <BannerEcosistema marca={SEA_GALICIA} />

      <section className="mx-auto max-w-3xl px-6 pt-12 text-lg leading-relaxed text-ink-700">
        <p>
          Si la jornada incluye una actividad náutica, coordinamos directamente con Sea Galicia
          para que el material, el guía y el seguro estén resueltos sin que tengas que buscar un
          proveedor aparte.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <h2 className="text-xl font-bold text-atlantico-700">Para qué equipos funciona</h2>
        <p className="mt-3">
          Funciona con equipos que necesitan un respiro real, no una obligación más en el
          calendario. Va bien tanto para un departamento pequeño como para toda la plantilla,
          aunque el formato cambia según el número de personas y el terreno elegido.
        </p>
        <p className="mt-4">
          También funciona como cierre de una convención o de un incentivo de varios días, cuando
          el programa ya incluye otras actividades y hace falta un último día distinto que cambie
          el ritmo antes de la vuelta a casa.
        </p>
        <p className="mt-4">
          Si lo que buscas es integrar a un equipo o fortalecer relaciones concretas más que
          desconectar,{" "}
          <a href="/eventos-empresa/team-building" className="text-atlantico-700 underline">
            team building
          </a>{" "}
          puede encajar mejor con lo que necesitas — los dos formatos comparten entorno pero
          persiguen objetivos distintos.
        </p>
        <p className="mt-4 font-semibold text-ink-900">
          Cuéntanos para qué necesitáis desconectar. El entorno y el ritmo los proponemos
          nosotros, con el clima gallego ya tenido en cuenta.
        </p>
      </section>

      <CTAFinal
        titulo="El día que salgáis de la oficina, que sea uno que merezca la pena contar el lunes."
        ctaTexto="Planifiquemos la jornada"
      />
    </>
  );
}
