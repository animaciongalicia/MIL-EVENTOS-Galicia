import Hero from "@/components/shared/Hero";
import LandingCategoria from "@/components/shared/LandingCategoria";
import CifrasDestacadas from "@/components/shared/CifrasDestacadas";
import CitaDestacada from "@/components/shared/CitaDestacada";
import TarjetasTexto from "@/components/shared/TarjetasTexto";
import PasosTrabajo from "@/components/shared/PasosTrabajo";
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

const cifrasHome = [
  { valor: "+15", etiqueta: "años organizando eventos de empresa en Galicia" },
  { valor: "3", etiqueta: "marcas hermanas: alojamiento, náutica y transporte" },
  { valor: "4", etiqueta: "formatos de evento, de un team building a una convención" },
];

const escalaItems = [
  {
    titulo: "Equipos pequeños",
    texto:
      "Un team building para diez personas necesita agilidad y trato cercano — sin la carga logística de un evento grande.",
  },
  {
    titulo: "Grandes convenciones",
    texto:
      "Trescientos asistentes exigen producción técnica, gestión de acreditaciones y un plan de contingencia para cada eslabón de la cadena.",
  },
];

const razonesItems = [
  {
    titulo: "Más de 15 años de oficio",
    texto:
      "La diferencia entre un evento que funciona y uno que no está casi siempre en la ejecución, no en la actividad elegida.",
  },
  {
    titulo: "Conocimiento real del territorio",
    texto:
      "Espacios, proveedores y productores locales que una agencia sin presencia real en Galicia difícilmente puede ofrecer.",
  },
  {
    titulo: "Un ecosistema de marcas especializadas",
    texto:
      "SUUNIA (alojamiento y experiencias), Sea Galicia (náutica) y Luxe Galicia (transporte) resuelven programas complejos con un único punto de contacto.",
  },
  {
    titulo: "Capacidad de escalar",
    texto:
      "Del team building de diez personas a la convención de varios cientos, con el mismo nivel de exigencia.",
  },
];

const pasosTrabajo = [
  {
    titulo: "Una conversación, no un catálogo",
    descripcion:
      "Te preguntamos por el objetivo, el número de asistentes, el presupuesto y cualquier condicionante que debamos tener en cuenta.",
  },
  {
    titulo: "Una propuesta concreta",
    descripcion:
      "Dos o tres alternativas razonadas, no una lista interminable de opciones para que decidas tú solo entre cifras que no sabes comparar.",
  },
  {
    titulo: "Coordinación de cada pieza",
    descripcion:
      "Cerramos espacios, proveedores, transporte y alojamiento, y encajamos cada pieza en el horario previsto.",
  },
  {
    titulo: "Presencia el día del evento",
    descripcion:
      "Resolvemos cualquier imprevisto in situ — para que no tengas que estar pendiente de la logística mientras diriges tu propio evento.",
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
          Organizar un evento de empresa no es solo elegir una actividad y reservar un espacio. Es
          coordinar proveedores que no siempre responden a tiempo, ajustar presupuestos que
          cambian a mitad de proceso y conseguir que el resultado cumpla el objetivo por el que se
          organizó — ya sea unir a un equipo, premiar un buen año o presentar un proyecto ante
          clientes e inversores.
        </p>
        <p className="mt-4">
          En Mil Eventos Galicia nos ocupamos de esa complejidad para que tú no tengas que
          hacerlo. Trabajamos con responsables de RRHH, dirección y organización de eventos de
          empresas de toda Galicia — y de fuera de la comunidad, cuando el evento lo requiere —
          que necesitan un interlocutor único capaz de gestionar cada fase del proceso.
        </p>
      </section>

      <section className="pb-16">
        <CifrasDestacadas cifras={cifrasHome} />
      </section>

      <section className="bg-cream-200 pb-16 pt-4">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold text-atlantico-700">Qué hacemos</h2>
        </div>
        <LandingCategoria
          intro="Organizamos tres tipos de servicio, que se pueden contratar juntos o por separado según lo que ya tengas resuelto."
          sublandings={areas}
        />
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <CitaDestacada texto="No partimos de un catálogo cerrado de actividades para que elijas una y ya está. Partimos de tu objetivo, y construimos el evento a su alrededor." />
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <h2 className="text-2xl font-bold text-atlantico-700">
          Un servicio que se adapta a la escala del evento
        </h2>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed text-ink-700">
          No hay un tamaño único de evento de empresa, y no tratamos todos igual — aplicamos el
          mismo nivel de exigencia, con recursos y procesos ajustados al alcance real de cada
          encargo.
        </p>
        <div className="mt-8">
          <TarjetasTexto items={escalaItems} icono={false} />
        </div>
      </section>

      <section className="bg-cream-200 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-atlantico-700">Cómo trabajamos</h2>
          <PasosTrabajo pasos={pasosTrabajo} />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-bold text-atlantico-700">Por qué Mil Eventos Galicia</h2>
        <div className="mt-8">
          <TarjetasTexto items={razonesItems} />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-16 text-lg leading-relaxed text-ink-700">
        <h2 className="text-2xl font-bold text-atlantico-700">Para quién trabajamos</h2>
        <p className="mt-3">
          Desde pequeñas compañías que organizan su primer team building hasta grandes
          organizaciones que celebran una convención anual para varios cientos de personas.
          También gestionamos eventos para empresas de fuera de Galicia que buscan la comunidad
          como destino, por su paisaje, su gastronomía y su oferta de espacios singulares.
        </p>
        <p className="mt-4 font-semibold text-ink-900">
          Cuéntanos qué necesitas organizar y en cuánto tiempo. El resto lo resolvemos nosotros.
        </p>
      </section>

      <TiraLogos logos={logosClientes} />

      <CTAFinal titulo="¿Va a ser un evento más, o el que todos recuerden? Empecemos por hablar." />
    </>
  );
}
