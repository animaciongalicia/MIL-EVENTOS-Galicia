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

export default function EventosEmpresaPage() {
  return (
    <>
      <Hero
        titulo="Eventos para empresas en Galicia"
        subtitulo="Más de 15 años haciendo que las cosas sucedan."
      />

      <section className="mx-auto max-w-3xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <p>
          Cada evento de empresa tiene un objetivo distinto, aunque a veces se organicen todos
          igual: unir un equipo no es lo mismo que premiar a un comercial, y desconectar un día no
          es lo mismo que producir un congreso para trescientas personas.
        </p>
        <p className="mt-4">
          Por eso no vendemos un formato único. Cuatro maneras de mover a tu empresa, cada una
          pensada para lo que de verdad quieres conseguir.
        </p>
        <p className="mt-4">
          Si organizas eventos de empresa sabes lo que cuesta hacerlo bien mientras sigues con tu
          trabajo del día a día: proveedores que no responden, presupuestos que se disparan,
          imprevistos que caen encima tuyo el mismo día del evento. Llevamos más de 15 años
          quitándole ese peso a responsables de RRHH y dirección en toda Galicia — tú decides el
          objetivo y el presupuesto, nosotros nos ocupamos de que salga bien.
        </p>
      </section>

      <LandingCategoria intro="Cuatro formas de mover a tu equipo." sublandings={sublandings} />

      <CTAFinal titulo="¿Cuál de las cuatro necesitas? Empecemos por ahí." />
    </>
  );
}
