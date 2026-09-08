import type { Metadata } from "next";
import Hero from "@/components/shared/Hero";
import CifrasDestacadas from "@/components/shared/CifrasDestacadas";
import CitaDestacada from "@/components/shared/CitaDestacada";
import TarjetasTexto from "@/components/shared/TarjetasTexto";
import CTAFinal from "@/components/shared/CTAFinal";

export const metadata: Metadata = {
  title: "Quiénes Somos | Mil Eventos Galicia",
  description:
    "Más de 15 años organizando eventos de empresa, presentaciones y celebraciones en Galicia — con un único interlocutor que se ocupa de cada pieza.",
};

// Solo hechos verificados (CLAUDE.md §1 y §6). Pendiente de que el cliente
// aporte la historia real (fundación, equipo, clientes) para ampliarlo — no se
// inventa nada de eso. La web antigua tenía esta página en /nosotros/.
const cifras = [
  { valor: "+15", etiqueta: "años organizando eventos en Galicia" },
  { valor: "4", etiqueta: "formatos de empresa: team building, incentivos, outdoor y congresos" },
  { valor: "3", etiqueta: "marcas hermanas: alojamiento, náutica y transporte" },
];

const queResolvemos = [
  {
    titulo: "Eventos de empresa",
    texto:
      "Team building, incentivos, jornadas outdoor, congresos y convenciones. El núcleo de lo que hacemos.",
  },
  {
    titulo: "Espacios y logística",
    texto:
      "Localizamos el sitio, coordinamos los traslados y gestionamos el alojamiento cuando el programa lo pide.",
  },
  {
    titulo: "Celebraciones",
    texto:
      "Cenas de empresa y de Navidad, inauguraciones, cócteles, aniversarios, cumpleaños de adultos y fincas.",
  },
  {
    titulo: "Animación propia",
    texto:
      "DJs, cómicos, monologuistas y drag queens que ofrecemos y coordinamos nosotros, no un teléfono suelto.",
  },
];

const comoTrabajamos = [
  {
    titulo: "Un único interlocutor",
    texto:
      "Espacio, actividad, catering, transporte y alojamiento coordinados por la misma gente — no cinco proveedores que sincronizas tú.",
  },
  {
    titulo: "Conocimiento real de Galicia",
    texto:
      "Espacios, proveedores y productores locales que conocemos de primera mano, no de un listado sacado de una búsqueda.",
  },
  {
    titulo: "Del briefing al día del evento",
    texto:
      "Te preguntamos primero, proponemos después y estamos presentes cuando llega el día para resolver lo que se tuerza.",
  },
  {
    titulo: "Un ecosistema que escala",
    texto:
      "SUUNIA (alojamiento y experiencias), Sea Galicia (náutica) y Luxe Galicia (transporte) para los programas más complejos.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <Hero
        titulo="Quiénes somos"
        subtitulo="Más de 15 años haciendo que las cosas sucedan en Galicia."
      />

      <section className="mx-auto max-w-5xl px-6 py-16 text-lg leading-relaxed text-ink-700">
        <p className="max-w-2xl">
          Llevamos más de 15 años atendiendo a empresas en Galicia: sus eventos, sus
          presentaciones, sus celebraciones. Team building, incentivos, jornadas outdoor,
          congresos y convenciones — y todo lo que hay alrededor, del espacio al último traslado
          de vuelta.
        </p>
        <p className="mt-4 max-w-2xl">
          Trabajamos con responsables de RRHH, dirección y organización de eventos — de toda
          Galicia y de fuera — que necesitan que su evento salga bien sin tener que estar encima de
          cada detalle. Ese es exactamente el punto en el que entramos nosotros.
        </p>
      </section>

      <section className="pb-16">
        <CifrasDestacadas cifras={cifras} />
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <CitaDestacada texto="No partimos de un catálogo cerrado. Partimos de tu objetivo, y construimos el evento a su alrededor." />
      </section>

      <section className="bg-cream-200 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-atlantico-600">
            Qué resolvemos
          </p>
          <h2 className="mt-3 text-2xl font-bold text-ink-900 sm:text-3xl">
            Todo lo que rodea a un evento, en el mismo sitio
          </h2>
          <div className="mt-8">
            <TarjetasTexto items={queResolvemos} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-atlantico-600">
          Cómo trabajamos
        </p>
        <h2 className="mt-3 text-2xl font-bold text-ink-900 sm:text-3xl">
          Por qué las empresas repiten con nosotros
        </h2>
        <div className="mt-8">
          <TarjetasTexto items={comoTrabajamos} />
        </div>
      </section>

      <CTAFinal titulo="Llevamos 15 años detrás. ¿Montamos el tuyo?" />
    </>
  );
}
