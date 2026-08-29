import type { Metadata } from "next";
import GridEjemplos from "@/components/shared/GridEjemplos";
import BannerEcosistema from "@/components/shared/BannerEcosistema";
import CTAFinal from "@/components/shared/CTAFinal";
import { actividadesGastronomia } from "@/data/actividades-gastronomia";
import { SUUNIA } from "@/data/ecosistema-marcas";

export const metadata: Metadata = {
  title: "Actividades de Gastronomía y Vinos en Galicia | Mil Eventos Galicia",
  description: "Actividades de gastronomía y vinos para eventos de empresa en Galicia.",
};

export default function ActividadesGastronomiaYVinosPage() {
  return (
    <>
      <h1 className="text-2xl font-bold">Gastronomía y vinos</h1>
      <p className="mt-3 text-slate-700">
        Galicia se explica mejor con un tenedor en la mano. El producto local como excusa para
        reunir a la gente — y para que el evento se recuerde por el sabor.
      </p>
      <GridEjemplos ejemplos={actividadesGastronomia} />
      <BannerEcosistema marca={SUUNIA} />
      <CTAFinal titulo="La mejor sobremesa de empresa es la que nadie quiere que termine." ctaTexto="Reservamos la mesa" />
    </>
  );
}
