import type { Metadata } from "next";
import Hero from "@/components/shared/Hero";
import CTAFinal from "@/components/shared/CTAFinal";

export const metadata: Metadata = {
  title: "Jornadas Outdoor en Galicia | Mil Eventos Galicia",
  description: "Jornadas outdoor para empresas en Galicia.",
};

// TODO: copy real en tono Rentabilista pendiente (CLAUDE.md §5).
export default function JornadasOutdoorPage() {
  return (
    <>
      <Hero titulo="Jornadas outdoor" subtitulo="Salir de la oficina, con propósito." />
      <CTAFinal titulo="¿Salimos fuera?" />
    </>
  );
}
