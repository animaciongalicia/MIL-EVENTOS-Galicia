import Hero from "@/components/shared/Hero";
import GridEjemplos from "@/components/shared/GridEjemplos";
import FormularioContacto from "@/components/shared/FormularioContacto";
import { cumpleanosEjemplos } from "@/data/celebraciones-cumpleanos";
import { fincasEjemplos } from "@/data/celebraciones-fincas";
import { otrosEventosEjemplos } from "@/data/celebraciones-otros-eventos";

export default function CelebracionesPage() {
  return (
    <>
      <Hero
        variante="celebraciones"
        titulo="Celebraciones especiales en Galicia"
        subtitulo="Cumpleaños, fincas y momentos que merecen su propia fiesta."
      />

      <section className="mx-auto max-w-3xl px-6 py-12">
        <h2 className="text-2xl font-bold text-terracota-900">Cumpleaños de adultos</h2>
        <p className="mt-3 text-lg leading-relaxed text-ink-700">
          Cumplir 40, 50 o 60 no es motivo para conformarse con una cena de siempre. Es la excusa
          perfecta para montar algo que la gente recuerde — con la gente que quieres, en el sitio
          que quieres.
        </p>
      </section>

      <GridEjemplos ejemplos={cumpleanosEjemplos} />

      <section className="mx-auto max-w-3xl px-6 py-12">
        <h2 className="text-2xl font-bold text-terracota-900">Fincas y espacios especiales</h2>
        <p className="mt-3 text-lg leading-relaxed text-ink-700">
          Hay sitios que ya ponen el ambiente antes de que llegue el primer invitado. Buscamos el
          tuyo — con jardín, piscina, carpa o vistas — y nos encargamos de que esté listo.
        </p>
      </section>

      <GridEjemplos ejemplos={fincasEjemplos} />

      <section className="mx-auto max-w-3xl px-6 py-12">
        <h2 className="text-2xl font-bold text-terracota-900">Otros eventos especiales</h2>
        <p className="mt-3 text-lg leading-relaxed text-ink-700">
          Bodas de plata, jubilaciones, despedidas — momentos que no se repiten, y que merecen
          algo a la altura.
        </p>
      </section>

      <GridEjemplos ejemplos={otrosEventosEjemplos} />

      <section className="mx-auto max-w-xl px-6 pt-12 text-center">
        <h2 className="text-2xl font-bold text-terracota-900">Cuéntanos tu celebración</h2>
        <p className="mt-3 text-ink-700">
          Cuéntanos qué estás celebrando y con quién. Te contestamos con ideas, no con un
          cuestionario eterno.
        </p>
      </section>

      <FormularioContacto copyEnvio="Cuéntanos tu celebración" variante="celebraciones" />
    </>
  );
}
