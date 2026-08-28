import type { Metadata } from "next";
import Hero from "@/components/shared/Hero";
import CTAFinal from "@/components/shared/CTAFinal";

export const metadata: Metadata = {
  title: "Traslados para Eventos en Galicia | Mil Eventos Galicia",
  description: "Gestión de traslados para eventos de empresa en Galicia.",
};

// TODO: copy real en tono Rentabilista pendiente (CLAUDE.md §5).
export default function TrasladosPage() {
  return (
    <>
      <Hero titulo="Traslados" subtitulo="Logística sin fricciones." />
      <CTAFinal titulo="¿Organizamos el traslado?" />
    </>
  );
}
