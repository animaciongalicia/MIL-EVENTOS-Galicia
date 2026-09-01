import type { Metadata } from "next";
import Hero from "@/components/shared/Hero";
import GridEjemplos from "@/components/shared/GridEjemplos";
import BannerEcosistema from "@/components/shared/BannerEcosistema";
import CTAFinal from "@/components/shared/CTAFinal";
import PasosTrabajo from "@/components/shared/PasosTrabajo";
import CitaDestacada from "@/components/shared/CitaDestacada";
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
          Galicia ayuda: playas, ríos, montaña y bosque a menos de una hora de las principales
          ciudades. La diferencia entre &ldquo;salir al campo&rdquo; y una jornada outdoor de
          verdad está en aprovechar ese entorno con intención, no en encontrar un sitio bonito
          para la foto de grupo.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-12">
        <CitaDestacada texto="No es solo salir al campo: es decidir qué ritmo necesita el grupo, cuánto esfuerzo físico tiene sentido pedir, y cómo se cierra el día para que no se quede en una anécdota." />
      </section>

      <section className="bg-cream-200 py-12">
        <div className="mx-auto max-w-3xl px-6 text-ink-700">
          <h2 className="text-xl font-bold text-atlantico-700">Cómo trabajamos</h2>
          <PasosTrabajo
            pasos={[
              {
                titulo: "Definimos el objetivo del día",
                descripcion: "Desconectar, integrar a un equipo nuevo, cerrar un proyecto.",
              },
              {
                titulo: "Elegimos el ritmo",
                descripcion: "Esfuerzo físico, duración y tipo de grupo, antes de proponer nada.",
              },
              {
                titulo: "Montamos el día completo",
                descripcion: "Actividad, transporte, comida y cierre — todo encadenado.",
              },
              {
                titulo: "Tú apareces",
                descripcion: "El plan alternativo si el tiempo no acompaña ya está resuelto.",
              },
            ]}
          />
        </div>
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
