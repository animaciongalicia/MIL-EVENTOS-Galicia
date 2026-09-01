import type { Metadata } from "next";
import Hero from "@/components/shared/Hero";
import GridEjemplos from "@/components/shared/GridEjemplos";
import CTAFinal from "@/components/shared/CTAFinal";
import CitaDestacada from "@/components/shared/CitaDestacada";
import { actividadesIndoor } from "@/data/actividades-indoor";

export const metadata: Metadata = {
  title: "Actividades Indoor en Galicia | Mil Eventos Galicia",
  description: "Actividades indoor de team building en Galicia.",
};

export default function ActividadesIndoorPage() {
  return (
    <>
      <Hero titulo="Indoor" subtitulo="Cuando el tiempo no acompaña, otro tipo de experiencia." />

      <section className="mx-auto max-w-3xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <p>
          O simplemente prefieres tener el evento bajo control — el indoor no es el plan B. Tiene
          su propio ritmo.
        </p>
        <p className="mt-4">
          Funcionan igual de bien como cierre de una convención que como plan independiente para
          una tarde. Se adaptan al espacio que ya tengas reservado — no hace falta buscar uno
          nuevo — y al tamaño del grupo, desde 10 personas hasta varios cientos.
        </p>
      </section>

      <section className="bg-cream-200 py-12">
        <div className="mx-auto max-w-3xl px-6 text-ink-700">
          <h2 className="text-xl font-bold text-atlantico-700">Cómo lo planteamos</h2>
          <p className="mt-3 leading-relaxed">
            Vemos el espacio antes (o sus planos, si no puedes enseñárnoslo) para que la actividad
            encaje en los metros cuadrados reales, no en los que aparecen en la web del hotel.
          </p>
          <div className="mt-6">
            <CitaDestacada texto="Llevamos el material; tú pones la sala." />
          </div>
        </div>
      </section>

      <GridEjemplos ejemplos={actividadesIndoor} />
      <CTAFinal titulo="No hace falta salir de la ciudad para salir de la rutina." ctaTexto="Cuéntanos tu evento indoor" />
    </>
  );
}
