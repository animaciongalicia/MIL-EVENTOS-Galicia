import type { Metadata } from "next";
import Hero from "@/components/shared/Hero";
import GridEjemplos from "@/components/shared/GridEjemplos";
import BannerEcosistema from "@/components/shared/BannerEcosistema";
import CTAFinal from "@/components/shared/CTAFinal";
import { incentivosEjemplos } from "@/data/eventos-empresa-incentivos";
import { SUUNIA } from "@/data/ecosistema-marcas";

export const metadata: Metadata = {
  title: "Programas de Incentivos en Galicia | Mil Eventos Galicia",
  description: "Programas de incentivos para empresas en Galicia.",
};

export default function IncentivosPage() {
  return (
    <>
      <Hero titulo="Incentivos" subtitulo="Programas que premian y motivan." />

      <section className="mx-auto max-w-3xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <p>Dar las gracias con un email no motiva a nadie. Y un cheque regalo genérico tampoco.</p>
        <p className="mt-4">
          Lo que funciona es un reconocimiento que se recuerda: un viaje, una experiencia, un
          momento que la persona no se habría dado a sí misma.
        </p>
        <p className="mt-4">
          Diseñamos programas de incentivos que premian de verdad — desde una cena bien elegida
          hasta una escapada de varios días. Tú marcas el objetivo y el presupuesto; nosotros
          construimos algo que vale la pena ganar.
        </p>
      </section>

      <GridEjemplos ejemplos={incentivosEjemplos} />

      <BannerEcosistema marca={SUUNIA} />

      <CTAFinal titulo="El mejor incentivo es el que se recuerda meses después de gastárselo." ctaTexto="Diseñamos tu programa" />
    </>
  );
}
