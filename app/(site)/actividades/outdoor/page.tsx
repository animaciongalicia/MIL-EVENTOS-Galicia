import type { Metadata } from "next";
import GridEjemplos from "@/components/shared/GridEjemplos";
import BannerEcosistema from "@/components/shared/BannerEcosistema";
import CTAFinal from "@/components/shared/CTAFinal";
import { actividadesOutdoor } from "@/data/actividades-outdoor";
import { SEA_GALICIA } from "@/data/ecosistema-marcas";

export const metadata: Metadata = {
  title: "Actividades Outdoor en Galicia | Mil Eventos Galicia",
  description: "Actividades outdoor de team building en Galicia.",
};

export default function ActividadesOutdoorPage() {
  return (
    <>
      <h1 className="text-2xl font-bold">Outdoor</h1>
      <p className="mt-3 text-slate-700">
        Naturaleza gallega como escenario, no como decorado. Actividades para sacar al equipo del
        asfalto y ponerlo a decidir, coordinarse y — a veces — mojarse.
      </p>
      <GridEjemplos ejemplos={actividadesOutdoor} />
      <BannerEcosistema marca={SEA_GALICIA} />
      <CTAFinal titulo="El asfalto no enseña a nadie a trabajar en equipo. La naturaleza, sí." ctaTexto="Sácanos de la oficina" />
    </>
  );
}
