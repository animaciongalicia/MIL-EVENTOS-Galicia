import type { Metadata } from "next";
import GridEjemplos from "@/components/shared/GridEjemplos";
import CTAFinal from "@/components/shared/CTAFinal";
import { actividadesAMedida } from "@/data/actividades-a-medida";

export const metadata: Metadata = {
  title: "Actividades a Medida en Galicia | Mil Eventos Galicia",
  description: "Actividades a medida para eventos de empresa en Galicia.",
};

export default function ActividadesAMedidaPage() {
  return (
    <>
      <h1 className="text-2xl font-bold">A medida</h1>
      <p className="mt-3 text-slate-700">
        Hay eventos que no encajan en ninguna categoría de esta web. Para esos, no tenemos
        catálogo — tenemos una conversación.
      </p>
      <GridEjemplos ejemplos={actividadesAMedida} />
      <CTAFinal
        titulo="Si no lo has visto en ningún sitio, probablemente sea porque hay que inventarlo. Empecemos."
        ctaTexto="Cuéntanos tu idea"
      />
    </>
  );
}
