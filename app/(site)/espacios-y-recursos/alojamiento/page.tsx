import type { Metadata } from "next";
import Hero from "@/components/shared/Hero";
import CTAFinal from "@/components/shared/CTAFinal";

export const metadata: Metadata = {
  title: "Alojamiento para Eventos en Galicia | Mil Eventos Galicia",
  description: "Gestión de alojamiento para eventos de empresa en Galicia.",
};

// TODO: copy real en tono Rentabilista pendiente (CLAUDE.md §5).
export default function AlojamientoPage() {
  return (
    <>
      <Hero titulo="Alojamiento" subtitulo="Descanso a la altura del evento." />
      <CTAFinal titulo="¿Buscamos el alojamiento?" />
    </>
  );
}
