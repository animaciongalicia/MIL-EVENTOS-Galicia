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
          momento que la persona no se habría dado a sí misma. Y que se entrega bien — no un vale
          que llega por correo interno sin más explicación, sino algo con producción, con
          historia que contar el lunes en la oficina.
        </p>
        <p className="mt-4">
          El error más habitual no es el presupuesto, es la genericidad: el mismo premio para
          todo el equipo comercial, sin distinguir a quien de verdad ha destacado. Un buen
          programa de incentivos escala — desde un reconocimiento puntual para quien ha cerrado
          el trimestre, hasta un viaje de varios días para todo el equipo que ha cumplido
          objetivo anual.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-12 text-ink-700">
        <h2 className="text-xl font-bold text-atlantico-700">Cómo trabajamos</h2>
        <p className="mt-3 leading-relaxed">
          Nos cuentas el objetivo (retener, motivar, premiar resultados concretos), a quién va
          dirigido y el presupuesto por persona. Diseñamos el programa — desde una cena bien
          elegida hasta un viaje de incentivo de varios días con alojamiento y actividades
          incluidas — y nos encargamos de la logística completa, incluida la entrega o el momento
          de reconocimiento si quieres que forme parte del propio evento.
        </p>
        <p className="mt-4 leading-relaxed">
          Si el programa incluye desplazamiento o alojamiento para el equipo, lo coordinamos con
          nuestras marcas hermanas (ver más abajo) para que sea un único interlocutor, no tres
          proveedores distintos que hay que sincronizar tú mismo.
        </p>
      </section>

      <GridEjemplos ejemplos={incentivosEjemplos} />

      <BannerEcosistema marca={SUUNIA} />

      <CTAFinal titulo="El mejor incentivo es el que se recuerda meses después de gastárselo." ctaTexto="Diseñamos tu programa" />
    </>
  );
}
