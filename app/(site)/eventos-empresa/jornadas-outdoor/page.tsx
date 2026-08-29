import type { Metadata } from "next";
import Hero from "@/components/shared/Hero";
import GridEjemplos from "@/components/shared/GridEjemplos";
import BannerEcosistema from "@/components/shared/BannerEcosistema";
import CTAFinal from "@/components/shared/CTAFinal";
import { jornadasOutdoorEjemplos } from "@/data/eventos-empresa-jornadas-outdoor";
import { SEA_GALICIA } from "@/data/ecosistema-marcas";

export const metadata: Metadata = {
  title: "Jornadas Outdoor en Galicia | Mil Eventos Galicia",
  description: "Jornadas outdoor para empresas en Galicia.",
};

export default function JornadasOutdoorPage() {
  return (
    <>
      <Hero titulo="Jornadas outdoor" subtitulo="Salir de la oficina, con propósito." />

      <section className="mx-auto max-w-3xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <p>
          Salir de la oficina un día no arregla nada si el día se parece a estar en la oficina,
          solo que con mosquitos.
        </p>
        <p className="mt-4">
          Una jornada outdoor bien planteada tiene un objetivo claro — desconectar, integrar a un
          equipo nuevo, cerrar un proyecto — y una estructura que lo consigue. No es solo &ldquo;vamos
          a hacer algo fuera&rdquo;.
        </p>
        <p className="mt-4">
          Diseñamos el día completo: actividad, ritmo, comida, cierre. Tú apareces y participas.
          El resto, resuelto.
        </p>
      </section>

      <GridEjemplos ejemplos={jornadasOutdoorEjemplos} />

      <BannerEcosistema marca={SEA_GALICIA} />

      <CTAFinal
        titulo="El día que salgáis de la oficina, que sea uno que merezca la pena contar el lunes."
        ctaTexto="Planifiquemos la jornada"
      />
    </>
  );
}
