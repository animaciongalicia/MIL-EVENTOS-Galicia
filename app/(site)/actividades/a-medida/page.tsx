import type { Metadata } from "next";
import Hero from "@/components/shared/Hero";
import GridEjemplos from "@/components/shared/GridEjemplos";
import CTAFinal from "@/components/shared/CTAFinal";
import CitaDestacada from "@/components/shared/CitaDestacada";
import TarjetasTexto from "@/components/shared/TarjetasTexto";
import { actividadesAMedida } from "@/data/actividades-a-medida";

export const metadata: Metadata = {
  title: "Actividades a Medida en Galicia | Mil Eventos Galicia",
  description: "Actividades a medida para eventos de empresa en Galicia.",
};

const tiposProyecto = [
  {
    titulo: "Lanzamientos e hitos",
    texto:
      "Presentación de producto, cierre de ronda, aniversario de empresa — momentos que merecen algo distinto a una tarta en la sala de reuniones habitual.",
  },
  {
    titulo: "Experiencias con marca propia",
    texto:
      "Tu identidad integrada en cada detalle del evento, no solo en el logo proyectado en una pantalla al fondo de la sala.",
  },
  {
    titulo: "Formatos híbridos",
    texto:
      "Presencial y online a la vez, sin que ninguno de los dos se sienta el secundario del otro ni una idea añadida a última hora.",
  },
  {
    titulo: "Lo que no está en ninguna categoría",
    texto:
      "Si lo que tienes en la cabeza no encaja en team building, incentivos, outdoor o congresos, es justo el tipo de proyecto que nos gusta más.",
  },
];

const queNecesitamos = [
  {
    titulo: "La idea, aunque esté a medio formar",
    texto:
      "No hace falta que llegues con un briefing cerrado — muchas veces la conversación con nosotros es la que la termina de definir del todo.",
  },
  {
    titulo: "Un presupuesto orientativo",
    texto:
      "Aunque sea un rango amplio, nos ayuda a proponer algo realista desde el primer momento, no algo que no vas a poder pagar.",
  },
  {
    titulo: "El plazo real",
    texto:
      "Cuánto tiempo hay hasta el evento condiciona lo que es viable — cuanto antes lo sepamos, más opciones reales tenemos sobre la mesa.",
  },
  {
    titulo: "Referencias, si las tienes",
    texto:
      "Algo que has visto y te gustó, aunque sea de otro sector o de otro país, nos ayuda a entender qué buscas de verdad.",
  },
];

export default function ActividadesAMedidaPage() {
  return (
    <>
      <Hero
        titulo="A medida"
        subtitulo="Hay eventos que no encajan en ninguna categoría de esta web."
      />

      <section className="mx-auto max-w-5xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <p>Para esos, no tenemos catálogo — tenemos una conversación.</p>
        <p className="mt-4">
          Suele pasar con lanzamientos de producto, aniversarios de empresa o cualquier evento
          donde la marca tiene que estar presente en cada detalle, no solo en el logo de la
          pantalla. También pasa, más a menudo de lo que parece, con equipos que ya han probado el
          catálogo estándar dos o tres años seguidos y necesitan que este no se parezca a los
          anteriores.
        </p>
        <p className="mt-4">
          No es una categoría residual para lo que no sabemos dónde meter — es, de hecho, uno de
          los encargos que más se repite, y en la práctica no cuesta ni más tiempo ni más dinero
          que elegir de un catálogo cerrado. Lo que cambia es el punto de partida: en vez de
          adaptar un formato ya existente, construimos uno desde cero pensado para tu marca, tu
          objetivo y tu presupuesto concretos.
        </p>
        <p className="mt-4">
          Eso sí — a medida no significa sin estructura ni sin plazos. Significa que el punto de
          partida no es un formulario con casillas prefijadas, sino una conversación real sobre lo
          que quieres conseguir, y de ahí construimos hacia atrás: presupuesto, plazo, proveedores,
          logística.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <CitaDestacada texto="Si lo que tienes en la cabeza no está en esta web, es justo el tipo de proyecto que nos gusta más — porque significa que aún no lo ha hecho nadie exactamente así." />
      </section>

      <section className="bg-cream-200 py-12">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-xl font-bold text-atlantico-700">Qué tipo de proyecto encaja aquí</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
            Cuatro situaciones habituales, aunque la lista real es más larga que esto — si tu caso no
          está aquí, es justo la razón por la que existe esta página.
          </p>
          <div className="mt-6">
            <TarjetasTexto icono={false} items={tiposProyecto} />
          </div>
          <p className="mt-6 max-w-2xl leading-relaxed text-ink-700">
            Ninguna de estas cuatro es excluyente entre sí — un lanzamiento de producto puede tener
            también componente híbrido, y un aniversario puede necesitar la marca integrada en
            cada detalle del espacio.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <h2 className="text-xl font-bold text-atlantico-700">Cómo lo planteamos</h2>
        <p className="mt-3">
          No cobramos por estudiar la viabilidad. Nos cuentas la idea, te decimos en un par de
          días si es realista con tu presupuesto y plazo, y qué haría falta para llevarla a cabo.
          Si no lo es, te lo decimos también — mejor eso que un proyecto a medias que decepciona a
          todo el mundo.
        </p>
        <p className="mt-4">
          A partir de ahí, el proceso se parece más al de un proyecto de producción que al de
          reservar una actividad de catálogo: definimos el concepto, buscamos proveedores y
          espacios que encajen, y te presentamos una propuesta cerrada antes de mover nada. Nada se
          contrata hasta que la apruebas tú, línea por línea.
        </p>
        <p className="mt-4">
          Y si a mitad de camino algo cambia — el presupuesto se ajusta, el plazo se adelanta, la
          idea inicial evoluciona — lo replanteamos contigo, no seguimos adelante con un plan que ya
          no encaja solo porque ya estaba en marcha.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12 text-lg leading-relaxed text-ink-700">
        <p>
          Algunos ejemplos de proyectos que hemos planteado desde cero — no un catálogo, sino una
          muestra de lo que es posible cuando no partimos de un formato ya definido. Cada uno
          arrancó igual: una idea sin forma todavía y una conversación para darle estructura.
        </p>
      </section>

      <GridEjemplos ejemplos={actividadesAMedida} />

      <section className="bg-cream-200 py-12">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-xl font-bold text-atlantico-700">Qué necesitamos de ti para empezar</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
            Cuatro datos de partida — no hace falta tenerlos todos cerrados desde el primer día,
            pero cuantos más traigas, antes te damos una propuesta real.
          </p>
          <div className="mt-6">
            <TarjetasTexto items={queNecesitamos} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <h2 className="text-xl font-bold text-atlantico-700">Para quién es esto</h2>
        <p className="mt-3">
          Para empresas que tienen un evento en la cabeza que no se parece a nada que hayan
          organizado antes — o que no se parece a nada que hayan organizado otras empresas,
          directamente. También para quien ha probado el catálogo estándar y sabe que esta vez
          necesita algo distinto.
        </p>
        <p className="mt-4">
          No es la opción por defecto — si tu evento encaja bien en team building, incentivos,
          outdoor o congresos, esas páginas ya tienen el formato resuelto y probablemente sea más
          rápido y más económico partir de ahí. A medida tiene sentido cuando de verdad no hay
          categoría que encaje, no como capricho de última hora.
        </p>
        <p className="mt-4 font-semibold text-ink-900">
          Cuéntanos la idea, por muy poco definida que esté. El resto lo construimos juntos.
        </p>
      </section>

      <CTAFinal
        titulo="Si no lo has visto en ningún sitio, probablemente sea porque hay que inventarlo. Empecemos."
        ctaTexto="Cuéntanos tu idea"
      />
    </>
  );
}
