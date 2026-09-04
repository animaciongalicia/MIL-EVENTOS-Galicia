import type { Metadata } from "next";
import Hero from "@/components/shared/Hero";
import GridEjemplos from "@/components/shared/GridEjemplos";
import CitaDestacada from "@/components/shared/CitaDestacada";
import TarjetasTexto from "@/components/shared/TarjetasTexto";
import CTAFinal from "@/components/shared/CTAFinal";
import { cenasEmpresaEjemplos } from "@/data/celebraciones-cenas-empresa";

export const metadata: Metadata = {
  title: "Cenas de Empresa y Cenas de Navidad en Galicia | Mil Eventos Galicia",
  description:
    "Cenas de empresa y cenas de Navidad en Galicia: espacio, menú, DJ, espectáculo y barra coordinados de principio a fin. Para equipos de 20 a 300 personas.",
};

const queTipo = [
  {
    titulo: "Cena de Navidad",
    texto:
      "La cita del año, la que todo el mundo recuerda para bien o para mal. La montamos para que sea de las primeras.",
  },
  {
    titulo: "Cierre de año o de proyecto",
    texto:
      "Celebrar lo conseguido con el equipo, con un formato que no se parezca a una reunión más pero con mantel.",
  },
  {
    titulo: "Cena de bienvenida o de kick-off",
    texto:
      "El arranque de una etapa, una incorporación importante o el pistoletazo de un nuevo año fiscal.",
  },
  {
    titulo: "Cena de equipo sin excusa",
    texto:
      "A veces no hace falta un motivo redondo: solo que la gente se siente junta y lo pase bien fuera de la oficina.",
  },
];

const segunTamano = [
  {
    titulo: "Grupo pequeño (hasta 30)",
    texto:
      "Una cena más íntima, en un reservado o un espacio con encanto, donde cabe hasta un cómico a un par de metros.",
  },
  {
    titulo: "Grupo mediano (30 a 100)",
    texto:
      "El formato más habitual: salón propio, menú de grupo, DJ y pista — la cena de empresa clásica, bien montada.",
  },
  {
    titulo: "Grupo grande (100 a 300)",
    texto:
      "Producción completa: espacio con aforo real, logística de servicio, escenario para el espectáculo y barra para todos.",
  },
];

const queIncluye = [
  {
    titulo: "Espacio y menú",
    texto:
      "Elegimos el sitio con aforo real para tu grupo y un menú que encaje con presupuesto, alergias y gustos — no el de siempre.",
  },
  {
    titulo: "DJ, barra y pista",
    texto:
      "Para que la cena no muera en el café: música, barra y pista de baile cuando el plan es que la noche siga.",
  },
  {
    titulo: "Espectáculo si lo quieres",
    texto:
      "Monólogo, cómico o show entre platos — animación que ofrecemos nosotros, coordinada con el ritmo de la cena.",
  },
  {
    titulo: "Traslados y alojamiento",
    texto:
      "Si el equipo viene de fuera o la cena acaba tarde, coordinamos el transporte de vuelta y las habitaciones.",
  },
];

export default function CenasDeEmpresaPage() {
  return (
    <>
      <Hero
        variante="celebraciones"
        titulo="Cenas de empresa"
        subtitulo="La cena de Navidad y el cierre de año, montados para que RRHH no acabe más agotado que el equipo."
      />

      <section className="mx-auto max-w-5xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <p>
          La cena de empresa es de los pocos momentos del año en que todo el equipo está en el mismo
          sitio sin pantallas de por medio. Sale bien o sale regular, y la diferencia casi nunca
          está en el presupuesto — está en que alguien se haya ocupado de los detalles antes de que
          llegue la gente.
        </p>
        <p className="mt-4">
          Nos encargamos de eso: el espacio con aforo real, el menú que encaja con tu equipo, la
          música que llena la pista y el espectáculo si lo quieres. Tú apareces, saludas y
          disfrutas como uno más — no como quien está pendiente de que el catering llegue a tiempo.
        </p>
        <p className="mt-4">
          Y lo planificamos con antelación, sobre todo en Navidad: las mejores fechas y los mejores
          espacios se agotan primero, y dejarlo para noviembre casi siempre significa pagar más por
          menos.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <CitaDestacada
          acento="terracota"
          texto="El equipo no recuerda el balance del año. Recuerda la cena. Vale la pena montarla bien."
        />
      </section>

      <section className="bg-terracota-100 py-12">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-xl font-bold text-terracota-900">Qué tipo de cena</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
            Cuatro motivos habituales para reunir al equipo alrededor de una mesa — aunque el cuarto
            es que a veces no hace falta motivo.
          </p>
          <div className="mt-6">
            <TarjetasTexto acento="terracota" icono={false} items={queTipo} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <h2 className="text-xl font-bold text-terracota-900">Cómo la montamos</h2>
        <p className="mt-3">
          Nos cuentas cuántos sois, la fecha y el tipo de noche que quieres — de una cena tranquila
          a una fiesta que acabe de madrugada. Te devolvemos una propuesta cerrada con espacio,
          menú, música y extras, sin letra pequeña. Nada se contrata hasta que lo apruebas.
        </p>
        <p className="mt-4">
          El día de la cena hay alguien de nuestro equipo coordinando sobre el terreno, para que si
          algo se tuerce lo resolvamos nosotros antes de que tú te enteres.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-6 text-lg leading-relaxed text-ink-700">
        <p>
          Algunos formatos de cena de empresa que montamos habitualmente en Galicia — no un catálogo
          cerrado, sino una muestra de por dónde se suele empezar.
        </p>
      </section>

      <GridEjemplos ejemplos={cenasEmpresaEjemplos} />

      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="text-xl font-bold text-terracota-900">Según cuántos sois</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
          El formato de la cena cambia con el tamaño del grupo — lo que funciona para treinta se
          queda corto para trescientos, y al revés.
        </p>
        <div className="mt-6">
          <TarjetasTexto acento="terracota" icono={false} items={segunTamano} />
        </div>
      </section>

      <section className="bg-terracota-100 py-12">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-xl font-bold text-terracota-900">Qué incluye</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
            Todo coordinado con un único interlocutor — tú no hablas con el restaurante, el DJ y el
            autobús por separado.
          </p>
          <div className="mt-6">
            <TarjetasTexto acento="terracota" items={queIncluye} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <h2 className="text-xl font-bold text-terracota-900">Cuándo empezar a organizarla</h2>
        <p className="mt-3">
          En Navidad, cuanto antes mejor: las mejores fechas de diciembre y los espacios con más
          capacidad se reservan con meses de antelación, y a partir de octubre las opciones buenas
          empiezan a caer. Dejarlo para el último momento casi siempre significa peor sitio, peor
          fecha y peor precio por lo mismo.
        </p>
        <p className="mt-4">
          Para una cena fuera de temporada alta hay más margen, pero la lógica no cambia: reservar
          con tiempo da mejores condiciones y deja espacio para afinar el menú, la música y los
          extras sin prisas. Y si el número de asistentes aún no está cerrado, trabajamos con un
          rango y lo ajustamos según se confirman, sin penalización de última hora.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12 text-lg leading-relaxed text-ink-700">
        <h2 className="text-xl font-bold text-terracota-900">La cena, con espectáculo</h2>
        <p className="mt-3">
          Si quieres que la cena sea algo más que cenar, tenemos la parte de{" "}
          <a href="/celebraciones/animacion-y-espectaculo" className="text-terracota-600 underline">
            animación y espectáculo
          </a>{" "}
          resuelta con recursos propios: DJs, monologuistas, cómicos y drag queens. Y si buscas otro
          tipo de evento de empresa más allá de la cena, échale un ojo a las{" "}
          <a href="/celebraciones/celebraciones-de-empresa" className="text-terracota-600 underline">
            celebraciones de empresa
          </a>{" "}
          — inauguraciones, cócteles y aniversarios.
        </p>
        <p className="mt-4">
          Y no hace falta que tengas todo decidido para empezar: con la fecha aproximada y un número
          orientativo de asistentes ya podemos apartar espacio y proponerte opciones. Lo demás — el
          menú, la música, los extras — lo afinamos contigo sobre esa base.
        </p>
        <p className="mt-4 font-semibold text-ink-900">
          Dinos la fecha y cuántos sois. Cuanto antes, mejor sitio y mejor precio.
        </p>
      </section>

      <CTAFinal
        acento="terracota"
        titulo="La cena de empresa que el equipo comenta en enero. Empecemos por la fecha."
        ctaTexto="Organizamos vuestra cena"
      />
    </>
  );
}
