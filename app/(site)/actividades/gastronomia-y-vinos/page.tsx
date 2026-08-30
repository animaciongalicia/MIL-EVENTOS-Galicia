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
      <p className="mt-3 leading-relaxed text-ink-700">
        Galicia se explica mejor con un tenedor en la mano. El producto local como excusa para
        reunir a la gente — y para que el evento se recuerde por el sabor, no solo por la agenda.
      </p>
      <p className="mt-3 leading-relaxed text-ink-700">
        Trabajamos con productores y bodegas de la zona, no con catering genérico de macroevento.
        El planteamiento cambia según el evento: no es lo mismo una cata para 15 directivos que
        una cena de fin de año para 200 personas.
      </p>

      <div className="mt-6 rounded-lg bg-cream-200 p-6">
        <h2 className="font-semibold text-atlantico-700">Cómo lo planteamos</h2>
        <p className="mt-2 text-sm leading-relaxed text-ink-700">
          Te preguntamos por restricciones alimentarias y presupuesto por persona antes de
          proponer menú — no al final. Y si el evento dura más de un día, coordinamos comidas con
          SUUNIA para que no tengas que gestionar un proveedor de catering aparte.
        </p>
      </div>

      <GridEjemplos ejemplos={actividadesGastronomia} />
      <BannerEcosistema marca={SUUNIA} />
      <CTAFinal titulo="La mejor sobremesa de empresa es la que nadie quiere que termine." ctaTexto="Reservamos la mesa" />
    </>
  );
}
