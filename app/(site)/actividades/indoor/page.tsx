import type { Metadata } from "next";
import GridEjemplos from "@/components/shared/GridEjemplos";
import { actividadesIndoor } from "@/data/actividades-indoor";

export const metadata: Metadata = {
  title: "Actividades Indoor en Galicia | Mil Eventos Galicia",
  description: "Actividades indoor de team building en Galicia.",
};

// TODO: copy real en tono Rentabilista pendiente (CLAUDE.md §5).
export default function ActividadesIndoorPage() {
  return (
    <>
      <h1 className="text-2xl font-bold">Indoor</h1>
      <GridEjemplos ejemplos={actividadesIndoor} />
    </>
  );
}
