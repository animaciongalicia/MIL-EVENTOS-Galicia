import type { Metadata } from "next";
import Hero from "@/components/shared/Hero";
import GridEjemplos from "@/components/shared/GridEjemplos";
import BannerEcosistema from "@/components/shared/BannerEcosistema";
import CTAFinal from "@/components/shared/CTAFinal";
import CitaDestacada from "@/components/shared/CitaDestacada";
import TarjetasTexto from "@/components/shared/TarjetasTexto";
import { actividadesGastronomia } from "@/data/actividades-gastronomia";
import { SUUNIA } from "@/data/ecosistema-marcas";

export const metadata: Metadata = {
  title: "Actividades de Gastronomía y Vinos en Galicia | Mil Eventos Galicia",
  description: "Actividades de gastronomía y vinos para eventos de empresa en Galicia.",
};

const tiposExperiencia = [
  {
    titulo: "Catas de vino",
    texto:
      "Rías Baixas, Ribeiro, Ribeira Sacra — cada denominación con su propia historia, guiada por alguien que la conoce de verdad y no repite guion.",
  },
  {
    titulo: "Showcooking",
    texto:
      "El equipo cocina, un chef dirige, el resultado se come en la misma mesa. Menos espectador, más participante en todo el proceso.",
  },
  {
    titulo: "Rutas gastronómicas",
    texto:
      "Varios locales, un solo grupo, cero coches que organizar — el casco viejo como recorrido con paradas pensadas, no como excursión libre.",
  },
  {
    titulo: "Cenas y maridajes a medida",
    texto:
      "Producto del día, sin intermediarios, con el vino pensado junto al menú desde el principio, no añadido después como un extra.",
  },
];

const factoresGastronomia = [
  {
    titulo: "Restricciones alimentarias",
    texto:
      "Alergias, intolerancias y preferencias — las preguntamos antes de proponer menú, no al final cuando ya está todo cerrado y es tarde para cambiar nada.",
  },
  {
    titulo: "Presupuesto por persona",
    texto: "Fijado desde el principio, para que el menú se diseñe dentro de ese margen real y no al revés, ajustando después.",
  },
  {
    titulo: "Logística del espacio",
    texto: "Cocina disponible, aforo del comedor y horario de servicio, revisados antes de confirmar el formato con el proveedor.",
  },
  {
    titulo: "Temporada del producto",
    texto: "El mejor producto gallego cambia según la época del año, y el menú se adapta a eso, no al calendario fijo del evento.",
  },
];

export default function ActividadesGastronomiaYVinosPage() {
  return (
    <>
      <Hero
        titulo="Gastronomía y vinos"
        subtitulo="Galicia se explica mejor con un tenedor en la mano que con una diapositiva más."
      />

      <section className="mx-auto max-w-5xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <p>
          El producto local como excusa para reunir a la gente — y para que el evento se recuerde
          por el sabor, no solo por la agenda del día.
        </p>
        <p className="mt-4">
          Trabajamos siempre con productores y bodegas de la zona, no con catering genérico de
          macroevento. El planteamiento cambia según el evento: no es lo mismo una cata para 15
          directivos que una cena de fin de año para 200 personas de toda la plantilla.
        </p>
        <p className="mt-4">
          Puede ser la actividad central del día, o el cierre de una jornada distinta — un
          showcooking después de una reunión de trabajo cambia el tono de todo lo que vino antes.
        </p>
        <p className="mt-4">
          El vino y la comida gallega no son un extra decorativo: son parte de por qué las
          empresas eligen Galicia como destino de evento, y merecen el mismo cuidado que la
          actividad principal del programa.
        </p>
        <p className="mt-4">
          Un menú improvisado el mismo día se nota, aunque el producto sea bueno de por sí. La
          diferencia está en la preparación previa, no solo en la calidad de lo que llega a la
          mesa.
        </p>
        <p className="mt-4">
          Por eso no proponemos el menú hasta haber resuelto las cuatro cosas de la sección
          siguiente, en el orden exacto en que aparecen.
        </p>
      </section>

      <section className="bg-cream-200 py-12">
        <div className="mx-auto max-w-5xl px-6 text-ink-700">
          <h2 className="text-xl font-bold text-atlantico-700">Cómo lo planteamos siempre</h2>
          <p className="mt-3 leading-relaxed">
            Y si el evento dura más de un día, coordinamos comidas con SUUNIA para que no tengas
            que gestionar un proveedor de catering aparte del resto del programa completo.
          </p>
          <div className="mt-6">
            <CitaDestacada texto="Te preguntamos por restricciones alimentarias y presupuesto por persona antes de proponer menú — no al final." />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="text-xl font-bold text-atlantico-700">
          Cuatro tipos de experiencia gastronómica
        </h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
          Cada una tiene su propio ritmo y su propio grado de participación del grupo, del más
          pasivo al más activo de todos.
        </p>
        <div className="mt-6">
          <TarjetasTexto icono={false} items={tiposExperiencia} />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12 text-lg leading-relaxed text-ink-700">
        <p>
          Algunos ejemplos representativos — no un menú cerrado, sino una muestra de lo que
          suele funcionar según el tipo de evento y el grupo que lo protagoniza.
        </p>
      </section>

      <GridEjemplos ejemplos={actividadesGastronomia} />

      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="text-xl font-bold text-atlantico-700">Según el tipo de evento</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
          No es lo mismo un grupo reducido de directivos que una cena de fin de año para toda la
          plantilla al completo, y el formato cambia según el caso.
        </p>
        <div className="mt-6">
          <TarjetasTexto
            icono={false}
            items={[
              {
                titulo: "Grupo reducido de dirección",
                texto: "Catas y maridajes con más conversación que espectáculo, en un espacio íntimo y sin prisa por terminar.",
              },
              {
                titulo: "Cierre de convención",
                texto: "Cena de producto local que funciona como broche del día, con la producción ya resuelta de antemano.",
              },
              {
                titulo: "Plantilla completa",
                texto: "Rutas o showcooking que dividen al grupo en equipos pequeños, para que nadie quede fuera de la actividad.",
              },
              {
                titulo: "Clientes o inversores",
                texto: "Cenas y maridajes cuidados hasta el último detalle, cuando la impresión que se lleva alguien importa de verdad al negocio.",
              },
            ]}
          />
        </div>
      </section>

      <section className="bg-cream-200 py-12">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-xl font-bold text-atlantico-700">Qué tenemos en cuenta siempre</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
            Cuatro cosas que revisamos en cualquier experiencia gastronómica, sea cual sea el
            formato elegido y el número de comensales.
          </p>
          <div className="mt-6">
            <TarjetasTexto items={factoresGastronomia} />
          </div>
          <p className="mt-6 max-w-2xl leading-relaxed text-ink-700">
            Un solo detalle mal resuelto — una alergia no preguntada, un menú fuera de temporada —
            puede empañar toda la experiencia gastronómica del evento.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <CitaDestacada texto="Trabajamos siempre con productores y bodegas de la zona, no con catering genérico de macroevento que podría servir cualquiera." />
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12 text-lg leading-relaxed text-ink-700">
        <h2 className="text-xl font-bold text-atlantico-700">Para qué eventos funciona</h2>
        <p className="mt-3">
          Funciona como actividad independiente, como cierre de una convención, o como parte de un
          programa de incentivos de varios días. También funciona bien con clientes o inversores
          de fuera de Galicia, cuando el objetivo es que se lleven algo del territorio, no solo de
          la reunión de trabajo.
        </p>
        <p className="mt-4">
          Y no hace falta que sea el plato fuerte del programa — a veces funciona mejor como
          detalle final, algo que redondea un día que ya ha ido bien por sí solo, sin robarle
          protagonismo a nada.
        </p>
        <p className="mt-4">
          Se combina bien con casi cualquier otro formato del catálogo: si buscas outdoor por la
          mañana y gastronomía al mediodía,{" "}
          <a href="/actividades/outdoor" className="text-atlantico-700 underline">
            outdoor
          </a>{" "}
          explica las opciones al aire libre. Y si el evento dura más de un día,{" "}
          <a href="/ecosistema/suunia" className="text-atlantico-700 underline">
            SUUNIA
          </a>{" "}
          coordina el resto del alojamiento y las comidas, con el mismo interlocutor de siempre.
        </p>
        <p className="mt-4 font-semibold text-ink-900">
          Cuéntanos cuántos sois, para cuándo, y qué presupuesto por persona manejas. El menú lo
          diseñamos nosotros, con las restricciones ya resueltas de antemano.
        </p>
      </section>

      <BannerEcosistema marca={SUUNIA} />
      <CTAFinal
        titulo="La mejor sobremesa de empresa es la que nadie quiere que termine nunca."
        ctaTexto="Reservamos la mesa"
      />
    </>
  );
}
