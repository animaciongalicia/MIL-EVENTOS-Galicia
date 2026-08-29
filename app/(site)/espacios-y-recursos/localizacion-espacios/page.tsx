import type { Metadata } from "next";
import Hero from "@/components/shared/Hero";
import GridEjemplos from "@/components/shared/GridEjemplos";
import CTAFinal from "@/components/shared/CTAFinal";
import { localizacionEspaciosEjemplos } from "@/data/espacios-localizacion-espacios";

export const metadata: Metadata = {
  title: "Localización de Espacios para Eventos en Galicia | Mil Eventos Galicia",
  description: "Localización de espacios para eventos de empresa en Galicia.",
};

export default function LocalizacionEspaciosPage() {
  return (
    <>
      <Hero titulo="Localización de espacios" subtitulo="El sitio exacto para tu evento." />

      <section className="mx-auto max-w-3xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <p>
          Un espacio equivocado condiciona todo lo demás: el aforo, el ambiente, hasta el humor
          de la gente. Y encontrarlo bien es el trabajo que menos tiempo tienes para hacer.
        </p>
        <p className="mt-4">
          Conocemos el territorio — pazos, naves, espacios singulares, salas con capacidad real —
          y filtramos antes de enseñarte nada. Tú decides entre opciones que ya encajan, no entre
          una lista interminable de posibilidades.
        </p>
      </section>

      <GridEjemplos ejemplos={localizacionEspaciosEjemplos} />

      <CTAFinal
        titulo="El sitio perfecto para tu evento existe. El trabajo es encontrarlo antes de que lo reserve otro."
        ctaTexto="Buscamos el espacio"
      />
    </>
  );
}
