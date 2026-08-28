import Hero from "@/components/shared/Hero";
import FormularioContacto from "@/components/shared/FormularioContacto";

// TODO: copy real, tono cálido y directo pendiente (CLAUDE.md §8).
// Bloques internos pendientes: cumpleaños de adultos · fincas y espacios especiales · otros eventos especiales · contacto.
export default function CelebracionesPage() {
  return (
    <>
      <Hero
        variante="celebraciones"
        titulo="Celebraciones especiales en Galicia"
        subtitulo="Cumpleaños, fincas y momentos que merecen su propia fiesta."
      />
      <FormularioContacto copyEnvio="Cuéntanos tu celebración" />
    </>
  );
}
