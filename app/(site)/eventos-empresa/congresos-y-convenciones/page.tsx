import type { Metadata } from "next";
import Hero from "@/components/shared/Hero";
import GridEjemplos from "@/components/shared/GridEjemplos";
import BannerEcosistema from "@/components/shared/BannerEcosistema";
import CTAFinal from "@/components/shared/CTAFinal";
import PasosTrabajo from "@/components/shared/PasosTrabajo";
import TarjetasTexto from "@/components/shared/TarjetasTexto";
import CitaDestacada from "@/components/shared/CitaDestacada";
import { congresosYConvencionesEjemplos } from "@/data/eventos-empresa-congresos-y-convenciones";
import { LUXE_GALICIA } from "@/data/ecosistema-marcas";

export const metadata: Metadata = {
  title: "Congresos y Convenciones en Galicia | Mil Eventos Galicia",
  description: "Congresos y convenciones para empresas en Galicia.",
};

const produccionTecnica = [
  {
    titulo: "Sonido e iluminación",
    texto:
      "Ajustados al aforo real de la sala, no a lo que venía por defecto con el alquiler del espacio y que casi nunca es suficiente.",
  },
  {
    titulo: "Escenario y señalética",
    texto:
      "Montaje coherente con la marca del evento, desde el atril hasta los carteles de dirección, sin elementos genéricos de alquiler.",
  },
  {
    titulo: "Streaming y grabación",
    texto:
      "Para formatos híbridos o para que el contenido tenga vida después del propio día del evento, en redes o en formación interna.",
  },
  {
    titulo: "Acreditaciones y control de acceso",
    texto:
      "Que la entrada de trescientas personas no se convierta en una cola que empaña el resto del programa antes incluso de empezar.",
  },
];

const tiposConvencion = [
  {
    titulo: "Convención anual de empresa",
    texto:
      "El evento que reúne a toda la plantilla una vez al año — resultados, objetivos y reconocimiento en un mismo día, sin que se note la logística detrás.",
  },
  {
    titulo: "Lanzamiento de producto",
    texto:
      "Ante clientes, prensa o inversores, donde cada detalle de producción comunica tanto como el propio contenido de la presentación.",
  },
  {
    titulo: "Congreso sectorial o formativo",
    texto:
      "Con ponentes externos, agenda de varias sesiones y asistentes que vienen de fuera de Galicia y necesitan traslado y alojamiento.",
  },
  {
    titulo: "Evento híbrido con streaming",
    texto:
      "Parte del público en sala, parte conectado en remoto — con la misma calidad de producción para ambos grupos de asistentes.",
  },
];

const factoresCongreso = [
  {
    titulo: "Plan de contingencia técnica",
    texto: "Equipo de repuesto y un técnico presente durante todo el evento, no solo en el montaje inicial de la mañana.",
  },
  {
    titulo: "Catering para grandes grupos",
    texto: "Coordinado por franjas y turnos, para que trescientas personas no colapsen el mismo punto de servicio a la vez.",
  },
  {
    titulo: "Gestión de ponentes",
    texto: "Fichas técnicas, necesidades de cada uno y ensayo previo, para que nadie descubra un problema en directo delante del público.",
  },
  {
    titulo: "Logística de quien viene de fuera",
    texto: "Traslados y alojamiento coordinados desde el primer vuelo que aterriza hasta el último coche que sale de Galicia.",
  },
];

export default function CongresosYConvencionesPage() {
  return (
    <>
      <Hero titulo="Congresos y convenciones" subtitulo="Eventos corporativos a gran escala." />

      <section className="mx-auto max-w-3xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <p>
          Un congreso mal producido se nota en los primeros cinco minutos: el micrófono que
          falla, el ponente que no encuentra su sitio, la sala que se queda pequeña porque el
          aforo real no coincidía con el que prometió el espacio.
        </p>
        <p className="mt-4">
          Nos ocupamos de la producción técnica, los espacios, los ponentes y la logística de
          quien viene de fuera — traslados, alojamiento, acreditaciones — para que tu convención
          se recuerde por el contenido, no por los fallos. Tanto si es la convención anual de toda
          la empresa como el lanzamiento de un producto ante clientes y prensa.
        </p>
        <p className="mt-4">
          Cuanto mayor es el formato, menos margen hay para el error — y menos se nota el esfuerzo
          que hay detrás cuando todo sale bien, que es precisamente el objetivo.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-12">
        <p className="text-lg leading-relaxed text-ink-700">
          Cuanta más gente convocas, menos margen tienes para improvisar.
        </p>
        <div className="mt-6">
          <TarjetasTexto
            icono={false}
            items={[
              {
                titulo: "Doce personas",
                texto: "Un fallo técnico pasa desapercibido, se resuelve y nadie más lo nota.",
              },
              {
                titulo: "Cien personas",
                texto: "El mismo fallo ya interrumpe el ritmo de la sesión y se percibe desde varias filas.",
              },
              {
                titulo: "Trescientas personas",
                texto: "El mismo fallo se convierte en la anécdota que todos recuerdan — y no por lo bueno.",
              },
            ]}
          />
        </div>
      </section>

      <section className="bg-cream-200 py-12">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-xl font-bold text-atlantico-700">Qué incluye la producción técnica</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
            Cuatro piezas que coordinamos con un único proveedor, en vez de que tengas que
            contratar cada una por separado y sincronizarlas tú mismo.
          </p>
          <div className="mt-6">
            <TarjetasTexto icono={false} items={produccionTecnica} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="text-xl font-bold text-atlantico-700">Qué tipo de convención organizas</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
          Cada formato tiene su propia lógica de producción, aunque el proceso de trabajo sea
          siempre el mismo por detrás.
        </p>
        <div className="mt-6">
          <TarjetasTexto icono={false} items={tiposConvencion} />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-12">
        <CitaDestacada texto="Tu convención no tiene una segunda oportunidad de salir bien. Por eso no dejamos nada a la improvisación el día del evento." />
        <p className="mt-6 text-lg leading-relaxed text-ink-700">
          Cada pieza se prueba antes del día del evento, no se confía a que salga bien a la
          primera.
        </p>
      </section>

      <section className="bg-cream-200 py-12">
        <div className="mx-auto max-w-3xl px-6 text-ink-700">
          <h2 className="text-xl font-bold text-atlantico-700">Cómo trabajamos</h2>
          <PasosTrabajo
            pasos={[
              {
                titulo: "Definimos aforo y formato",
                descripcion: "Presencial, híbrido o con streaming — de ahí sale el tipo de espacio que necesitas buscar.",
              },
              {
                titulo: "Coordinamos la producción técnica",
                descripcion: "Sonido, iluminación, escenario y grabación con un único proveedor de confianza, no varios.",
              },
              {
                titulo: "Gestionamos ponentes",
                descripcion: "Agenda y fichas técnicas, sin que se te escape ningún detalle a mitad de programa del día.",
              },
              {
                titulo: "Cerramos la logística de fuera",
                descripcion: "Traslados y alojamiento para quien viene de fuera de Galicia, coordinados de principio a fin sin fisuras.",
              },
            ]}
          />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="text-xl font-bold text-atlantico-700">Qué tenemos en cuenta siempre</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
          Cuatro cosas que revisamos en cualquier congreso, sea cual sea su tamaño o formato.
        </p>
        <div className="mt-6">
          <TarjetasTexto items={factoresCongreso} />
        </div>
      </section>

      <GridEjemplos ejemplos={congresosYConvencionesEjemplos} />

      <BannerEcosistema marca={LUXE_GALICIA} />

      <section className="mx-auto max-w-3xl px-6 pt-12 text-lg leading-relaxed text-ink-700">
        <p>
          Cuando el congreso trae asistentes de fuera de Galicia, coordinamos directamente con
          Luxe Galicia los traslados desde el aeropuerto y entre sedes, sin que tengas que
          gestionar un proveedor de transporte aparte.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <h2 className="text-xl font-bold text-atlantico-700">Para quién organizamos estos eventos</h2>
        <p className="mt-3">
          Trabajamos con dirección y comunicación de empresas que necesitan producir su convención
          anual, con marketing de compañías que lanzan producto ante clientes y prensa, y con
          organizadores de congresos sectoriales que traen ponentes y asistentes de fuera de
          Galicia.
        </p>
        <p className="mt-4">
          También con quien organiza este tipo de evento por primera vez y no sabe muy bien por
          dónde empezar — es más habitual de lo que parece, y no supone ningún problema para
          nosotros.
        </p>
        <p className="mt-4">
          Si tu evento es más pequeño y no necesita esta escala de producción técnica, puede que{" "}
          <a href="/eventos-empresa/incentivos" className="text-atlantico-700 underline">
            incentivos
          </a>{" "}
          o{" "}
          <a href="/eventos-empresa/team-building" className="text-atlantico-700 underline">
            team building
          </a>{" "}
          encajen mejor con lo que necesitas.
        </p>
        <p className="mt-4 font-semibold text-ink-900">
          Cuéntanos el aforo y el formato que necesitas. La producción la coordinamos nosotros.
        </p>
      </section>

      <CTAFinal
        titulo="Tu convención no tiene una segunda oportunidad de salir bien. Nos aseguramos de que no la necesite."
        ctaTexto="Hablemos de tu congreso"
      />
    </>
  );
}
