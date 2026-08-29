import type { Metadata } from "next";
import Hero from "@/components/shared/Hero";
import GridEjemplos from "@/components/shared/GridEjemplos";
import BannerEcosistema from "@/components/shared/BannerEcosistema";
import CTAFinal from "@/components/shared/CTAFinal";
import { congresosYConvencionesEjemplos } from "@/data/eventos-empresa-congresos-y-convenciones";
import { LUXE_GALICIA } from "@/data/ecosistema-marcas";

export const metadata: Metadata = {
  title: "Congresos y Convenciones en Galicia | Mil Eventos Galicia",
  description: "Congresos y convenciones para empresas en Galicia.",
};

export default function CongresosYConvencionesPage() {
  return (
    <>
      <Hero titulo="Congresos y convenciones" subtitulo="Eventos corporativos a gran escala." />

      <section className="mx-auto max-w-3xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <p>
          Un congreso mal producido se nota en los primeros cinco minutos: el micrófono que
          falla, el ponente que no encuentra su sitio, la sala que se queda pequeña.
        </p>
        <p className="mt-4">Cuanta más gente convocas, menos margen tienes para improvisar.</p>
        <p className="mt-4">
          Nos ocupamos de la producción técnica, los espacios, los ponentes y la logística de
          quien viene de fuera — para que tu convención se recuerde por el contenido, no por los
          fallos.
        </p>
      </section>

      <GridEjemplos ejemplos={congresosYConvencionesEjemplos} />

      <BannerEcosistema marca={LUXE_GALICIA} />

      <CTAFinal
        titulo="Tu convención no tiene una segunda oportunidad de salir bien. Nos aseguramos de que no la necesite."
        ctaTexto="Hablemos de tu congreso"
      />
    </>
  );
}
