import type { Metadata } from "next";
import Hero from "@/components/shared/Hero";
import CTAFinal from "@/components/shared/CTAFinal";

export const metadata: Metadata = {
  title: "Team Building en Galicia | Mil Eventos Galicia",
  description: "Actividades de team building para empresas en Galicia.",
};

// TODO: copy real en tono Rentabilista pendiente (CLAUDE.md §5).
export default function TeamBuildingPage() {
  return (
    <>
      <Hero titulo="Team building" subtitulo="Actividades que unen equipos de verdad." />
      <CTAFinal titulo="¿Hablamos de tu equipo?" />
    </>
  );
}
