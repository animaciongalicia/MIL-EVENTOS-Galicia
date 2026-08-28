import type { Metadata } from "next";
import Hero from "@/components/shared/Hero";
import FormularioContacto from "@/components/shared/FormularioContacto";

export const metadata: Metadata = {
  title: "Contacto | Mil Eventos Galicia",
  description: "Cuéntanos tu evento y te preparamos una propuesta.",
};

// TODO: copy real en tono Rentabilista pendiente (CLAUDE.md §5).
export default function ContactoPage() {
  return (
    <>
      <Hero titulo="Hablemos de tu evento" subtitulo="Cuéntanos qué necesitas, te contestamos rápido." />
      <FormularioContacto />
    </>
  );
}
