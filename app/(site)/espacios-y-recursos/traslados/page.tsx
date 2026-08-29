import type { Metadata } from "next";
import Hero from "@/components/shared/Hero";
import GridEjemplos from "@/components/shared/GridEjemplos";
import BannerEcosistema from "@/components/shared/BannerEcosistema";
import CTAFinal from "@/components/shared/CTAFinal";
import { trasladosEjemplos } from "@/data/espacios-traslados";
import { LUXE_GALICIA } from "@/data/ecosistema-marcas";

export const metadata: Metadata = {
  title: "Traslados para Eventos en Galicia | Mil Eventos Galicia",
  description: "Gestión de traslados para eventos de empresa en Galicia.",
};

export default function TrasladosPage() {
  return (
    <>
      <Hero titulo="Traslados" subtitulo="Logística sin fricciones." />

      <section className="mx-auto max-w-3xl px-6 py-12 text-lg leading-relaxed text-slate-700">
        <p>
          Nada rompe un evento como cincuenta personas esperando un autobús que no llega, o
          intentando aparcar en un sitio sin plazas.
        </p>
        <p className="mt-4">
          Coordinamos los traslados de principio a fin — desde el aeropuerto, entre sedes, de
          vuelta al hotel — para que nadie tenga que preocuparse de cómo llegar a ningún sitio.
        </p>
      </section>

      <GridEjemplos ejemplos={trasladosEjemplos} />

      <BannerEcosistema marca={LUXE_GALICIA} />

      <CTAFinal titulo="La logística que no se ve es la que mejor está funcionando." ctaTexto="Organizamos el traslado" />
    </>
  );
}
