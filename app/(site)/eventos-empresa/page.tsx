import type { Metadata } from "next";
import Hero from "@/components/shared/Hero";
import LandingCategoria from "@/components/shared/LandingCategoria";
import CTAFinal from "@/components/shared/CTAFinal";

export const metadata: Metadata = {
  title: "Eventos para Empresas en Galicia | Mil Eventos Galicia",
  description:
    "Team building, incentivos, jornadas outdoor, congresos y convenciones para empresas en Galicia.",
};

const sublandings = [
  {
    titulo: "Team building",
    descripcion: "Actividades que unen equipos de verdad.",
    href: "/eventos-empresa/team-building",
  },
  {
    titulo: "Incentivos",
    descripcion: "Programas que premian y motivan.",
    href: "/eventos-empresa/incentivos",
  },
  {
    titulo: "Jornadas outdoor",
    descripcion: "Salir de la oficina, con propósito.",
    href: "/eventos-empresa/jornadas-outdoor",
  },
  {
    titulo: "Congresos y convenciones",
    descripcion: "Eventos corporativos a gran escala.",
    href: "/eventos-empresa/congresos-y-convenciones",
  },
];

// TODO: copy real en tono Rentabilista pendiente (CLAUDE.md §5).
export default function EventosEmpresaPage() {
  return (
    <>
      <Hero
        titulo="Eventos para empresas en Galicia"
        subtitulo="Más de 15 años haciendo que las cosas sucedan."
      />
      <LandingCategoria intro="Cuatro formas de mover a tu equipo." sublandings={sublandings} />
      <CTAFinal titulo="¿Empezamos a planificar?" />
    </>
  );
}
