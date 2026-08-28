import type { Metadata } from "next";
import GridEjemplos from "@/components/shared/GridEjemplos";
import { actividadesOutdoor } from "@/data/actividades-outdoor";

export const metadata: Metadata = {
  title: "Actividades Outdoor en Galicia | Mil Eventos Galicia",
  description: "Actividades outdoor de team building en Galicia.",
};

// TODO: copy real en tono Rentabilista pendiente (CLAUDE.md §5).
export default function ActividadesOutdoorPage() {
  return (
    <>
      <h1 className="text-2xl font-bold">Outdoor</h1>
      <GridEjemplos ejemplos={actividadesOutdoor} />
    </>
  );
}
