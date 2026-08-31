import type { Metadata } from "next";
import Hero from "@/components/shared/Hero";
import GridEjemplos from "@/components/shared/GridEjemplos";
import BannerEcosistema from "@/components/shared/BannerEcosistema";
import CTAFinal from "@/components/shared/CTAFinal";
import PasosTrabajo from "@/components/shared/PasosTrabajo";
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

      <section className="bg-cream-200 py-12">
        <div className="mx-auto max-w-3xl px-6 text-ink-700">
          <h2 className="text-xl font-bold text-atlantico-700">Cómo trabajamos</h2>
          <PasosTrabajo
            pasos={[
              {
                titulo: "Nos cuentas el objetivo",
                descripcion: "Retener, motivar, premiar resultados concretos — y a quién va dirigido.",
              },
              {
                titulo: "Fijamos el presupuesto por persona",
                descripcion: "Desde un reconocimiento puntual hasta un viaje de varios días.",
              },
              {
                titulo: "Diseñamos el programa",
                descripcion: "Cena, experiencia o viaje — con la producción incluida.",
              },
              {
                titulo: "Coordinamos la entrega",
                descripcion: "Incluido el momento de reconocimiento, si quieres que forme parte del evento.",
              },
            ]}
          />
          <p className="mt-6 leading-relaxed">
            Si el programa incluye desplazamiento o alojamiento para el equipo, lo coordinamos con
            nuestras marcas hermanas (ver más abajo) para que sea un único interlocutor, no tres
            proveedores distintos que hay que sincronizar tú mismo.
          </p>
        </div>
      </section>

      <GridEjemplos ejemplos={incentivosEjemplos} />

      <BannerEcosistema marca={SUUNIA} />

      <CTAFinal titulo="El mejor incentivo es el que se recuerda meses después de gastárselo." ctaTexto="Diseñamos tu programa" />
    </>
  );
}
