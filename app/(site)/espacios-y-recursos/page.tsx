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

// TODO: copy real en tono Rentabilista pendiente (CLAUDE.md §5).
export default function EspaciosYRecursosPage() {
  return (
    <>
      <Hero
        titulo="Espacios y recursos para tu evento"
        subtitulo="Todo lo que rodea al evento, resuelto."
      />
      <LandingCategoria intro="Tres piezas que hacen que todo encaje." sublandings={sublandings} />
      <CTAFinal titulo="¿Buscamos el espacio?" />
    </>
  );
}
