import Hero from "@/components/shared/Hero";
import LandingCategoria from "@/components/shared/LandingCategoria";
import TiraLogos from "@/components/shared/TiraLogos";
import CTAFinal from "@/components/shared/CTAFinal";
import { logosClientes } from "@/data/logos-clientes";

const areas = [
  {
    titulo: "Eventos de empresa",
    descripcion: "Team building, incentivos, jornadas outdoor, congresos y convenciones.",
    href: "/eventos-empresa",
  },
  {
    titulo: "Actividades",
    descripcion: "El catálogo de experiencias que le dan forma a tu evento.",
    href: "/actividades",
  },
  {
    titulo: "Espacios y recursos",
    descripcion: "El sitio, el traslado y el alojamiento, resueltos.",
    href: "/espacios-y-recursos",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        titulo="Organizar el evento de tu empresa no debería darte más trabajo del que ya tienes."
        subtitulo="Más de 15 años haciendo que las cosas sucedan."
        ctaTexto="Cuéntanos tu evento"
        ctaHref="/contacto"
        imagenSeed="mil-eventos-galicia-home"
      />

      <section className="mx-auto max-w-3xl px-6 py-16 text-lg leading-relaxed text-ink-700">
        <p>
          Team building genérico. La cena de Navidad en el mismo restaurante de siempre. Una
          convención que nadie recuerda al día siguiente — ni tú, ni tu equipo.
        </p>
        <p className="mt-4">
          Tú no quieres eso. Quieres que la gente siga hablando del evento semanas después. Y
          quieres organizarlo sin que se te acumulen las noches sin dormir.
        </p>
        <p className="mt-4">
          Ahí entramos nosotros. Nos ocupamos de la logística, los proveedores, los espacios y los
          imprevistos de última hora. Tú decides qué quieres conseguir con el evento — nosotros
          hacemos que pase.
        </p>
      </section>

      <LandingCategoria intro="Todo lo que necesita un evento de empresa, en un mismo sitio." sublandings={areas} />

      <TiraLogos logos={logosClientes} />

      <CTAFinal titulo="¿Va a ser un evento más, o el que todos recuerden? Empecemos por hablar." />
    </>
  );
}
