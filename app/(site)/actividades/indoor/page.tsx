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
      <p className="mt-3 leading-relaxed text-ink-700">
        Cuando el tiempo no acompaña — o simplemente prefieres tener el evento bajo control — el
        indoor no es el plan B. Es otro tipo de experiencia, con su propio ritmo.
      </p>
      <p className="mt-3 leading-relaxed text-ink-700">
        Funcionan igual de bien como cierre de una convención que como plan independiente para una
        tarde. Se adaptan al espacio que ya tengas reservado — no hace falta buscar uno nuevo — y
        al tamaño del grupo, desde 10 personas hasta varios cientos.
      </p>

      <div className="mt-6 rounded-lg bg-cream-200 p-6">
        <h2 className="font-semibold text-atlantico-700">Cómo lo planteamos</h2>
        <p className="mt-2 text-sm leading-relaxed text-ink-700">
          Vemos el espacio antes (o sus planos, si no puedes enseñárnoslo) para que la actividad
          encaje en los metros cuadrados reales, no en los que aparecen en la web del hotel.
          Llevamos el material; tú pones la sala.
        </p>
      </div>

      <GridEjemplos ejemplos={actividadesIndoor} />
      <CTAFinal titulo="No hace falta salir de la ciudad para salir de la rutina." ctaTexto="Cuéntanos tu evento indoor" />
    </>
  );
}
