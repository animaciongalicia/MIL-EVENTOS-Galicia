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
          solo que con mosquitos. Una charla motivacional al aire libre sigue siendo una charla
          motivacional.
        </p>
        <p className="mt-4">
          Una jornada outdoor bien planteada tiene un objetivo claro — desconectar de verdad,
          integrar a un equipo nuevo, cerrar un proyecto largo, o simplemente dar un respiro antes
          de una temporada dura — y una estructura pensada para conseguirlo. No es solo
          &ldquo;vamos a hacer algo fuera&rdquo;: es decidir qué ritmo necesita el grupo, cuánto
          esfuerzo físico tiene sentido pedir, y cómo se cierra el día para que no se quede en una
          anécdota.
        </p>
        <p className="mt-4">
          Galicia ayuda: playas, ríos, montaña y bosque a menos de una hora de las principales
          ciudades. La diferencia entre &ldquo;salir al campo&rdquo; y una jornada outdoor de
          verdad está en aprovechar ese entorno con intención, no en encontrar un sitio bonito
          para la foto de grupo.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-12 text-ink-700">
        <h2 className="text-xl font-bold text-atlantico-700">Cómo trabajamos</h2>
        <p className="mt-3 leading-relaxed">
          Diseñamos el día completo: hora de salida, actividad principal, ritmo de la jornada,
          comida y cierre. Nos ocupamos del transporte si hace falta, del plan alternativo si el
          tiempo no acompaña, y de que nadie tenga que estar pendiente del reloj — tú apareces y
          participas, el resto está resuelto antes de que llegues.
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
