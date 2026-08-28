import type { Metadata } from "next";
import Hero from "@/components/shared/Hero";
import CTAFinal from "@/components/shared/CTAFinal";

export const metadata: Metadata = {
  title: "Congresos y Convenciones en Galicia | Mil Eventos Galicia",
  description: "Congresos y convenciones para empresas en Galicia.",
};

// TODO: copy real en tono Rentabilista pendiente (CLAUDE.md §5).
export default function CongresosYConvencionesPage() {
  return (
    <>
      <Hero titulo="Congresos y convenciones" subtitulo="Eventos corporativos a gran escala." />
      <CTAFinal titulo="¿Organizamos el próximo congreso?" />
    </>
  );
}
