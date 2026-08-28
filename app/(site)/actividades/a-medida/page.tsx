import type { Metadata } from "next";
import GridEjemplos from "@/components/shared/GridEjemplos";
import { actividadesAMedida } from "@/data/actividades-a-medida";

export const metadata: Metadata = {
  title: "Actividades a Medida en Galicia | Mil Eventos Galicia",
  description: "Actividades a medida para eventos de empresa en Galicia.",
};

// TODO: copy real en tono Rentabilista pendiente (CLAUDE.md §5).
export default function ActividadesAMedidaPage() {
  return (
    <>
      <h1 className="text-2xl font-bold">A medida</h1>
      <GridEjemplos ejemplos={actividadesAMedida} />
    </>
  );
}
