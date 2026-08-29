import type { Metadata } from "next";
import Hero from "@/components/shared/Hero";
import GridEjemplos from "@/components/shared/GridEjemplos";
import BannerEcosistema from "@/components/shared/BannerEcosistema";
import CTAFinal from "@/components/shared/CTAFinal";
import { alojamientoEjemplos } from "@/data/espacios-alojamiento";
import { SUUNIA } from "@/data/ecosistema-marcas";

export const metadata: Metadata = {
  title: "Alojamiento para Eventos en Galicia | Mil Eventos Galicia",
  description: "Gestión de alojamiento para eventos de empresa en Galicia.",
};

export default function AlojamientoPage() {
  return (
    <>
      <Hero titulo="Alojamiento" subtitulo="Descanso a la altura del evento." />

      <section className="mx-auto max-w-3xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <p>
          Un evento no termina cuando se apaga la luz de la sala. Si parte del equipo se queda a
          dormir, el alojamiento forma parte de la experiencia — para bien o para mal.
        </p>
        <p className="mt-4">
          Gestionamos la reserva, el reparto de habitaciones y el seguimiento con el hotel, para
          que llegues al check-in sin sorpresas.
        </p>
      </section>

      <GridEjemplos ejemplos={alojamientoEjemplos} />

      <BannerEcosistema marca={SUUNIA} />

      <CTAFinal
        titulo="Que el evento no termine bien por el sitio donde durmieron es un error que se evita fácil."
        ctaTexto="Buscamos el alojamiento"
      />
    </>
  );
}
