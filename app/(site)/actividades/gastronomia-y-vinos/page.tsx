import type { Metadata } from "next";
import GridEjemplos from "@/components/shared/GridEjemplos";
import { actividadesGastronomia } from "@/data/actividades-gastronomia";

export const metadata: Metadata = {
  title: "Actividades de Gastronomía y Vinos en Galicia | Mil Eventos Galicia",
  description: "Actividades de gastronomía y vinos para eventos de empresa en Galicia.",
};

// TODO: copy real en tono Rentabilista pendiente (CLAUDE.md §5).
export default function ActividadesGastronomiaYVinosPage() {
  return (
    <>
      <h1 className="text-2xl font-bold">Gastronomía y vinos</h1>
      <GridEjemplos ejemplos={actividadesGastronomia} />
    </>
  );
}
