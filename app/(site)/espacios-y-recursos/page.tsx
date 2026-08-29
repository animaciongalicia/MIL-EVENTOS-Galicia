import type { Metadata } from "next";
import Hero from "@/components/shared/Hero";
import LandingCategoria from "@/components/shared/LandingCategoria";
import CTAFinal from "@/components/shared/CTAFinal";

export const metadata: Metadata = {
  title: "Espacios y Recursos para Eventos en Galicia | Mil Eventos Galicia",
  description: "Localización de espacios, traslados y alojamiento para eventos en Galicia.",
};

const sublandings = [
  {
    titulo: "Localización de espacios",
    descripcion: "El sitio exacto para tu evento.",
    href: "/espacios-y-recursos/localizacion-espacios",
  },
  {
    titulo: "Traslados",
    descripcion: "Logística sin fricciones.",
    href: "/espacios-y-recursos/traslados",
  },
  {
    titulo: "Alojamiento",
    descripcion: "Descanso a la altura del evento.",
    href: "/espacios-y-recursos/alojamiento",
  },
];

export default function EspaciosYRecursosPage() {
  return (
    <>
      <Hero
        titulo="Espacios y recursos para tu evento"
        subtitulo="Todo lo que rodea al evento, resuelto."
      />

      <section className="mx-auto max-w-3xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <p>
          El sitio, cómo llega la gente y dónde duerme si el evento dura más de un día — tres
          decisiones que no tienen nada que ver con la actividad en sí, y que aun así deciden si
          el evento sale bien.
        </p>
        <p className="mt-4">
          Las resolvemos por separado o juntas, según lo que ya tengas cerrado y lo que te falte.
        </p>
      </section>

      <LandingCategoria intro="Tres piezas que hacen que todo encaje." sublandings={sublandings} />

      <CTAFinal titulo="¿Buscamos el espacio, el traslado, o las tres piezas a la vez?" />
    </>
  );
}
