import type { Metadata } from "next";
import Hero from "@/components/shared/Hero";
import LandingCategoria from "@/components/shared/LandingCategoria";
import CitaDestacada from "@/components/shared/CitaDestacada";
import CTAFinal from "@/components/shared/CTAFinal";
import { provincias } from "@/data/provincias";

export const metadata: Metadata = {
  title: "Eventos de Empresa en Galicia por Provincias | Mil Eventos Galicia",
  description:
    "Organizamos eventos de empresa, team building, incentivos y celebraciones en las cuatro provincias gallegas: A Coruña, Pontevedra, Lugo y Ourense.",
};

const sublandings = provincias.map((provincia) => ({
  titulo: provincia.nombre,
  descripcion: provincia.heroSubtitulo,
  href: `/eventos-en-galicia/${provincia.slug}`,
  imagen: provincia.heroImagen,
}));

export default function EventosEnGaliciaPage() {
  return (
    <>
      <Hero
        imagen="/images/playas-de-galicia.jpg"
        titulo="Eventos de empresa por toda Galicia"
        subtitulo="Cuatro provincias, un único equipo que conoce el terreno."
      />

      <section className="mx-auto max-w-5xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <p>
          Galicia no es un sitio, son cuatro. La costa atlántica de A Coruña, las Rías Baixas, el
          interior termal de Ourense y la Ribeira Sacra que comparten Lugo y Ourense — cada
          provincia juega una carta distinta, y elegir bien la mitad del trabajo de que un evento
          salga redondo.
        </p>
        <p className="mt-4">
          Trabajamos las cuatro con la misma exigencia: espacios que hemos visitado, proveedores
          que hemos probado y logística atada de principio a fin. Tú pones el objetivo y el equipo;
          nosotros ponemos la provincia que mejor le va.
        </p>
      </section>

      <LandingCategoria
        intro="Elige la provincia y te contamos qué montamos allí — o cuéntanoslo y te proponemos nosotros la que mejor encaja con tu evento."
        sublandings={sublandings}
      />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <CitaDestacada texto="No hace falta que sepas dónde. Solo qué quieres conseguir. El sitio lo elegimos juntos." />
      </section>

      <CTAFinal titulo="¿En qué rincón de Galicia montamos tu próximo evento?" />
    </>
  );
}
