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
      <p className="mt-3 leading-relaxed text-ink-700">
        Hay eventos que no encajan en ninguna categoría de esta web. Para esos, no tenemos
        catálogo — tenemos una conversación.
      </p>
      <p className="mt-3 leading-relaxed text-ink-700">
        Suele pasar con lanzamientos de producto, aniversarios de empresa o cualquier evento donde
        la marca tiene que estar presente en cada detalle, no solo en el logo de la pantalla.
      </p>

      <div className="mt-6 rounded-lg bg-cream-200 p-6">
        <h2 className="font-semibold text-atlantico-700">Cómo lo planteamos</h2>
        <p className="mt-2 text-sm leading-relaxed text-ink-700">
          No cobramos por estudiar la viabilidad. Nos cuentas la idea, te decimos en un par de
          días si es realista con tu presupuesto y plazo, y qué haría falta para llevarla a cabo.
          Si no lo es, te lo decimos también — mejor eso que un proyecto a medias.
        </p>
      </div>

      <GridEjemplos ejemplos={actividadesAMedida} />
      <CTAFinal
        titulo="Si no lo has visto en ningún sitio, probablemente sea porque hay que inventarlo. Empecemos."
        ctaTexto="Cuéntanos tu idea"
      />
    </>
  );
}
