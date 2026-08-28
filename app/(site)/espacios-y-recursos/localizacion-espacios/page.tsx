import type { Metadata } from "next";
import Hero from "@/components/shared/Hero";
import CTAFinal from "@/components/shared/CTAFinal";

export const metadata: Metadata = {
  title: "Localización de Espacios para Eventos en Galicia | Mil Eventos Galicia",
  description: "Localización de espacios para eventos de empresa en Galicia.",
};

// TODO: copy real en tono Rentabilista pendiente (CLAUDE.md §5).
export default function LocalizacionEspaciosPage() {
  return (
    <>
      <Hero titulo="Localización de espacios" subtitulo="El sitio exacto para tu evento." />
      <CTAFinal titulo="¿Buscamos el espacio?" />
    </>
  );
}
