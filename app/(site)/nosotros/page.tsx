import type { Metadata } from "next";
import Hero from "@/components/shared/Hero";
import CTAFinal from "@/components/shared/CTAFinal";

export const metadata: Metadata = {
  title: "Quiénes Somos | Mil Eventos Galicia",
  description: "Más de 15 años organizando eventos de empresa en Galicia.",
};

// TODO: contenido mínimo con los únicos hechos verificados que tenemos
// (CLAUDE.md §1 y §6). Falta que el cliente aporte la historia real de la
// agencia, quién la fundó y el equipo, para ampliarlo — no se inventa.
// La web antigua tenía esta página en /nosotros/ — mapeada en next.config.js.
export default function NosotrosPage() {
  return (
    <>
      <Hero
        titulo="Quiénes somos"
        subtitulo="Más de 15 años haciendo que las cosas sucedan en Galicia."
      />
      <section className="mx-auto max-w-3xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <p>
          Mil Eventos Galicia lleva más de 15 años organizando eventos de empresa en Galicia:
          team building, incentivos, jornadas outdoor, congresos y convenciones. También
          localizamos espacios, gestionamos traslados y alojamiento.
        </p>
        <p className="mt-4">
          Trabajamos con empresas de toda Galicia — y fuera de ella — que necesitan que su evento
          salga bien sin tener que ocuparse de cada detalle.
        </p>
      </section>
      <CTAFinal titulo="¿Hablamos de tu próximo evento?" />
    </>
  );
}
