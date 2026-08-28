import type { Metadata } from "next";
import Hero from "@/components/shared/Hero";
import CTAFinal from "@/components/shared/CTAFinal";

export const metadata: Metadata = {
  title: "Programas de Incentivos en Galicia | Mil Eventos Galicia",
  description: "Programas de incentivos para empresas en Galicia.",
};

// TODO: copy real en tono Rentabilista pendiente (CLAUDE.md §5).
export default function IncentivosPage() {
  return (
    <>
      <Hero titulo="Incentivos" subtitulo="Programas que premian y motivan." />
      <CTAFinal titulo="¿Diseñamos el programa?" />
    </>
  );
}
