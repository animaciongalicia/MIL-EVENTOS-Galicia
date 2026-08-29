import type { Metadata } from "next";
import GridEjemplos from "@/components/shared/GridEjemplos";
import CTAFinal from "@/components/shared/CTAFinal";
import { actividadesIndoor } from "@/data/actividades-indoor";

export const metadata: Metadata = {
  title: "Actividades Indoor en Galicia | Mil Eventos Galicia",
  description: "Actividades indoor de team building en Galicia.",
};

export default function ActividadesIndoorPage() {
  return (
    <>
      <h1 className="text-2xl font-bold">Indoor</h1>
      <p className="mt-3 text-slate-700">
        Cuando el tiempo no acompaña — o simplemente prefieres tener el evento bajo control — el
        indoor no es el plan B. Es otro tipo de experiencia.
      </p>
      <GridEjemplos ejemplos={actividadesIndoor} />
      <CTAFinal titulo="No hace falta salir de la ciudad para salir de la rutina." ctaTexto="Cuéntanos tu evento indoor" />
    </>
  );
}
