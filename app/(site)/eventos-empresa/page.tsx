import type { Metadata } from "next";
import Hero from "@/components/shared/Hero";
import LandingCategoria from "@/components/shared/LandingCategoria";
import CifrasDestacadas from "@/components/shared/CifrasDestacadas";
import CitaDestacada from "@/components/shared/CitaDestacada";
import TarjetasTexto from "@/components/shared/TarjetasTexto";
import PasosTrabajo from "@/components/shared/PasosTrabajo";
import CTAFinal from "@/components/shared/CTAFinal";
import Link from "next/link";

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

const cifrasEventosEmpresa = [
  { valor: "+15", etiqueta: "años organizando eventos de empresa para RRHH y dirección en Galicia" },
  { valor: "4", etiqueta: "formatos distintos, de un team building de diez personas a una convención" },
  { valor: "3", etiqueta: "marcas hermanas para resolver alojamiento, náutica y transporte" },
];

const criteriosFormato = [
  {
    titulo: "Team building",
    texto:
      "Cuando el problema es de relación entre personas — departamentos que no se hablan, gente nueva que no conoce al resto — no de motivación individual. Se nota en el día a día, no solo en la encuesta de clima.",
  },
  {
    titulo: "Incentivos",
    texto:
      "Cuando quieres premiar un resultado concreto — un comercial, un equipo que ha cumplido objetivo — no organizar algo genérico para toda la plantilla que acaba diluyendo el reconocimiento.",
  },
  {
    titulo: "Jornadas outdoor",
    texto:
      "Cuando lo que falta es desconectar del día a día, no resolver una tensión concreta ni premiar a nadie en particular. Un respiro con estructura, no una excursión sin más.",
  },
  {
    titulo: "Congresos y convenciones",
    texto:
      "Cuando el objetivo es comunicar — un lanzamiento, una convención anual, resultados ante inversores — no vivir una experiencia juntos. Aquí manda la producción, no la actividad.",
  },
];

const alcanceServicio = [
  {
    titulo: "El espacio",
    texto:
      "Localizamos y cerramos el sitio con el aforo y el carácter adecuados para tu evento, con el aforo real verificado, no el que promete la web del local.",
  },
  {
    titulo: "La actividad",
    texto:
      "Del catálogo o diseñada desde cero, según lo que tu equipo necesite de verdad — nunca al revés, eligiendo primero la actividad y ajustando después el objetivo.",
  },
  {
    titulo: "El desplazamiento y el alojamiento",
    texto:
      "Si el programa lo requiere, coordinamos traslados y habitaciones sin que sea un proveedor más que gestionar tú entre llamadas y correos.",
  },
  {
    titulo: "El seguimiento en directo",
    texto:
      "El día del evento estamos presentes para resolver cualquier imprevisto antes de que se note, desde un cambio de última hora hasta el plan B si llueve.",
  },
];

const pasosEventosEmpresa = [
  {
    titulo: "Nos cuentas el objetivo",
    descripcion:
      "Qué formato necesitas, cuántos sois, presupuesto y fecha. Una conversación de 20 minutos, no un formulario eterno ni una reunión de una hora para nada.",
  },
  {
    titulo: "Te proponemos 2-3 alternativas",
    descripcion:
      "Con precio y contenido ya cerrados, no un catálogo genérico para que decidas tú solo entre cifras que no sabes comparar sin contexto.",
  },
  {
    titulo: "Cerramos cada pieza",
    descripcion:
      "Espacio, actividad, transporte y alojamiento si hace falta — coordinado por un único interlocutor, no por ti llamando a cada proveedor por separado.",
  },
  {
    titulo: "Estamos el día del evento",
    descripcion:
      "Resolviendo lo que se tuerza, para que puedas centrarte en dirigir tu propio evento, no en apagar fuegos entre bambalinas.",
  },
];

const razonesEventosEmpresa = [
  {
    titulo: "Un único interlocutor",
    texto:
      "Espacio, actividad, transporte y alojamiento coordinados por el mismo equipo, no por tres proveedores que tienes que sincronizar tú mismo entre llamadas.",
  },
  {
    titulo: "Conocimiento real de Galicia",
    texto:
      "Espacios, proveedores y productores locales que conocemos de primera mano, no de un listado genérico sacado de una búsqueda rápida.",
  },
  {
    titulo: "Capacidad de escalar",
    texto:
      "Del team building de diez personas a la convención de varios cientos, con el mismo nivel de exigencia y los mismos estándares.",
  },
  {
    titulo: "Más de 15 años de oficio",
    texto:
      "La diferencia entre un evento que funciona y uno que no está casi siempre en la ejecución, no en la actividad elegida — y eso se aprende con años, no con un catálogo bonito ni con una web bien maquetada.",
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
          es lo mismo que producir un congreso para trescientas personas. Por eso no vendemos un
          formato único — cuatro maneras de mover a tu empresa, cada una pensada para lo que de
          verdad quieres conseguir.
        </p>
        <p className="mt-4">
          Las cuatro comparten una misma manera de trabajar: te preguntamos primero, proponemos
          después, y nos ocupamos de que la ejecución no dependa de que tú estés encima de cada
          detalle. Puedes ver cómo se organiza cada formato en detalle entrando en su página, o
          seguir leyendo aquí para entender cómo decidir cuál necesitas y qué incluye la gestión
          en cualquiera de los cuatro casos.
        </p>
      </section>

      <section className="pb-12">
        <CifrasDestacadas cifras={cifrasEventosEmpresa} />
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-12">
        <CitaDestacada texto="Tú decides el objetivo y el presupuesto. Nosotros nos ocupamos de que salga bien." />
      </section>

      <LandingCategoria
        intro="Cuatro formas de mover a tu equipo, explicadas en detalle en su propia página."
        sublandings={sublandings}
      />

      <section className="bg-cream-200 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold text-atlantico-700">Cómo elegir el formato adecuado</h2>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-ink-700">
            Si no tienes claro cuál de los cuatro necesitas, esto ayuda a decidir — según cuál sea
            el problema real que quieres resolver con el evento.
          </p>
          <div className="mt-8">
            <TarjetasTexto icono={false} items={criteriosFormato} />
          </div>
          <p className="mt-8 max-w-2xl leading-relaxed text-ink-700">
            Y si tu evento no encaja limpiamente en ninguno de los cuatro — porque mezcla premiar
            con desconectar, o integrar con comunicar — no pasa nada: los combinamos, o diseñamos
            algo distinto sobre la misma base. No es infrecuente que una convención anual incluya
            un cierre de team building, o que un programa de incentivos termine con una cena que
            en la práctica funciona como jornada outdoor.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-bold text-atlantico-700">Qué incluye la gestión de tu evento</h2>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed text-ink-700">
          Sea cual sea el formato que necesites, la gestión cubre siempre las mismas cuatro piezas
          — puedes ver el detalle de cada una en{" "}
          <Link href="/actividades" className="text-atlantico-700 underline">
            actividades
          </Link>{" "}
          y{" "}
          <Link href="/espacios-y-recursos" className="text-atlantico-700 underline">
            espacios y recursos
          </Link>
          .
        </p>
        <div className="mt-8">
          <TarjetasTexto icono={false} items={alcanceServicio} />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-bold text-atlantico-700">Cómo trabajamos</h2>
        <p className="mt-3 leading-relaxed text-ink-700">
          El proceso es el mismo tengas el evento que tengas — cambia el contenido, no la manera
          de trabajar. Así evitamos improvisar sobre la marcha, que es donde suelen aparecer los
          fallos que luego se recuerdan.
        </p>
        <PasosTrabajo pasos={pasosEventosEmpresa} />
      </section>

      <section className="bg-cream-200 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold text-atlantico-700">
            Por qué gestionar tus eventos de empresa con nosotros
          </h2>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-ink-700">
            Cuatro razones concretas, no frases hechas de folleto corporativo.
          </p>
          <div className="mt-8">
            <TarjetasTexto items={razonesEventosEmpresa} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 text-lg leading-relaxed text-ink-700">
        <h2 className="text-2xl font-bold text-atlantico-700">Para quién organizamos eventos de empresa</h2>
        <p className="mt-3">
          Trabajamos con responsables de RRHH, dirección y organización de eventos de empresas de
          toda Galicia — desde pequeñas compañías que organizan su primer team building hasta
          grandes organizaciones que celebran una convención anual para varios cientos de personas
          y ya tienen su propio departamento de eventos.
        </p>
        <p className="mt-4">
          También gestionamos eventos para empresas de fuera de la comunidad que eligen Galicia
          como destino, por su paisaje, su gastronomía y su oferta de espacios singulares. Si no
          sabes por dónde empezar, ese es exactamente el punto en el que entramos nosotros.
        </p>
        <p className="mt-4">
          Da igual si ya tienes fecha y presupuesto cerrados o si todavía estás valorando si
          organizar el evento este trimestre o el siguiente — en ambos casos podemos ayudarte a
          decidir el formato antes de comprometer nada. No hace falta tener todo definido para
          empezar la conversación; muchas veces el formato adecuado se aclara precisamente al
          hablarlo con alguien que ya lo ha hecho antes.
        </p>
        <p className="mt-4 font-semibold text-ink-900">
          Cuéntanos qué necesitas organizar y en cuánto tiempo. El resto lo resolvemos nosotros.
        </p>
      </section>

      <CTAFinal titulo="¿Cuál de las cuatro necesitas? Empecemos por ahí." />
    </>
  );
}
