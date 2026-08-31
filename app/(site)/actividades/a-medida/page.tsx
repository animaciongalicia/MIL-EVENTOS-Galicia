import type { Metadata } from "next";
import Hero from "@/components/shared/Hero";
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
      <Hero
        titulo="A medida"
        subtitulo="Hay eventos que no encajan en ninguna categoría de esta web."
      />

      <section className="mx-auto max-w-3xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <p>Para esos, no tenemos catálogo — tenemos una conversación.</p>
        <p className="mt-4">
          Suele pasar con lanzamientos de producto, aniversarios de empresa o cualquier evento
          donde la marca tiene que estar presente en cada detalle, no solo en el logo de la
          pantalla.
        </p>
      </section>

      <section className="bg-cream-200 py-12">
        <div className="mx-auto max-w-3xl px-6 text-ink-700">
          <h2 className="text-xl font-bold text-atlantico-700">Cómo lo planteamos</h2>
          <p className="mt-3 leading-relaxed">
            No cobramos por estudiar la viabilidad. Nos cuentas la idea, te decimos en un par de
            días si es realista con tu presupuesto y plazo, y qué haría falta para llevarla a
            cabo. Si no lo es, te lo decimos también — mejor eso que un proyecto a medias.
          </p>
        </div>
      </section>

      <GridEjemplos ejemplos={actividadesAMedida} />
      <CTAFinal
        titulo="Si no lo has visto en ningún sitio, probablemente sea porque hay que inventarlo. Empecemos."
        ctaTexto="Cuéntanos tu idea"
      />
    </>
  );
}
