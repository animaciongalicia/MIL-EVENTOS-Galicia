import Hero from "@/components/shared/Hero";
import CTAFinal from "@/components/shared/CTAFinal";

// TODO: copy real en tono Rentabilista pendiente (CLAUDE.md §5).
export default function HomePage() {
  return (
    <>
      <Hero
        titulo="Más de 15 años haciendo que las cosas sucedan."
        subtitulo="Eventos de empresa en Galicia, sin humo ni sinergias vacías."
        ctaTexto="Cuéntanos tu evento"
        ctaHref="/contacto"
      />
      <CTAFinal titulo="¿Organizamos el próximo?" />
    </>
  );
}
