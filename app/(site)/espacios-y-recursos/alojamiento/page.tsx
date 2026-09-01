import type { Metadata } from "next";
import Hero from "@/components/shared/Hero";
import GridEjemplos from "@/components/shared/GridEjemplos";
import BannerEcosistema from "@/components/shared/BannerEcosistema";
import CTAFinal from "@/components/shared/CTAFinal";
import CitaDestacada from "@/components/shared/CitaDestacada";
import TarjetasTexto from "@/components/shared/TarjetasTexto";
import { alojamientoEjemplos } from "@/data/espacios-alojamiento";
import { SUUNIA } from "@/data/ecosistema-marcas";

export const metadata: Metadata = {
  title: "Alojamiento para Eventos en Galicia | Mil Eventos Galicia",
  description:
    "Gestión de alojamiento para eventos de empresa en Galicia: bloques de habitaciones, alojamientos con encanto y programas de varios días, con check-in sin sorpresas.",
};

const comoTrabajamos = [
  {
    titulo: "Precio de grupo",
    texto:
      "Negociamos bloques de habitaciones, no reservas sueltas al precio público que pagaría cualquiera reservando por su cuenta.",
  },
  {
    titulo: "Reparto de habitaciones",
    texto:
      "Individuales, dobles, quién va con quién — resuelto antes de llegar, no discutido en la recepción delante de todo el grupo.",
  },
  {
    titulo: "Seguimiento con el hotel",
    texto:
      "Hasta el check-in y el check-out, para que no haya sorpresas de última hora ni cargos que nadie esperaba encontrar en la factura.",
  },
  {
    titulo: "Habitaciones VIP gestionadas aparte",
    texto:
      "Dirección, ponentes o invitados especiales, con condiciones distintas resueltas sin que se note el trato diferenciado ante el resto.",
  },
];

const segunPrograma = [
  {
    titulo: "Incentivo de varios días",
    texto:
      "Alojamiento con carácter propio, pazos o hoteles con encanto que forman parte del reconocimiento, no solo un sitio donde dormir.",
  },
  {
    titulo: "Congreso o convención con delegados de fuera",
    texto:
      "Bloques grandes en hoteles con capacidad de gestionar check-ins masivos y salas propias para el programa del día siguiente.",
  },
  {
    titulo: "Jornada outdoor con pernocta",
    texto:
      "Alojamiento cerca del entorno natural, coordinado con la actividad para no perder tiempo en desplazamientos largos entre medias.",
  },
  {
    titulo: "Celebración o cierre de proyecto",
    texto:
      "Un alojamiento con más carácter y menos protocolo, pensado para un grupo reducido que quiere algo distinto a un hotel de cadena.",
  },
];

const queRevisamos = [
  {
    titulo: "Ubicación real respecto al evento",
    texto: "Que el hotel esté cerca de verdad del espacio del evento, no a veinte minutos que en el mapa parecían cinco.",
  },
  {
    titulo: "Capacidad de check-in simultáneo",
    texto: "Que la recepción pueda atender a cuarenta personas llegando a la vez sin que se forme una cola de cuarenta minutos.",
  },
  {
    titulo: "Desayuno y horarios de servicio",
    texto: "Adaptados al horario real del evento, no al horario estándar del hotel que no encaja con una jornada que empieza pronto.",
  },
  {
    titulo: "Condiciones de cancelación",
    texto: "Revisadas antes de firmar nada, para que un cambio de última hora en el número de asistentes no cueste una fortuna.",
  },
];

export default function AlojamientoPage() {
  return (
    <>
      <Hero
        titulo="Alojamiento"
        subtitulo="Descanso a la altura del evento, en cualquier punto de Galicia."
      />

      <section className="mx-auto max-w-5xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <p>
          Un evento no termina cuando se apaga la luz de la sala. Si parte del equipo se queda a
          dormir, el alojamiento forma parte de la experiencia — para bien o para mal, aunque no
          esté en la agenda oficial del programa ni nadie lo mencione hasta que algo falla.
        </p>
        <p className="mt-4">
          Gestionamos la reserva, el reparto de habitaciones y el seguimiento con el hotel, para
          que llegues al check-in sin sorpresas y sin tener que resolver tú mismo quién duerme con
          quién a última hora.
        </p>
        <p className="mt-4">
          No es un trámite aparte del evento — es parte de la misma planificación, con el mismo
          nivel de exigencia que la actividad principal o el espacio elegido.
        </p>
        <p className="mt-4">
          No trabajamos con una cadena hotelera fija ni cobramos comisión de nadie por
          recomendarte un hotel en concreto — la prioridad es que encaje de verdad con tu grupo y
          tu presupuesto, no con ningún acuerdo comercial de fondo del que tú no tienes por qué
          saber nada.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <CitaDestacada texto="Que el evento no termine bien por el sitio donde durmieron es un error que se evita fácil, si se planifica con tiempo." />
      </section>

      <section className="bg-cream-200 py-12">
        <div className="mx-auto max-w-5xl px-6 text-ink-700">
          <h2 className="text-xl font-bold text-atlantico-700">Cómo trabajamos</h2>
          <p className="mt-3 max-w-2xl leading-relaxed">
            Para que el check-in de cuarenta personas no se convierta en una cola de cuarenta
            minutos delante de todo el grupo.
          </p>
          <div className="mt-6">
            <TarjetasTexto icono={false} items={comoTrabajamos} />
          </div>
          <p className="mt-6 max-w-2xl leading-relaxed">
            Todo esto se resuelve antes de que el grupo llegue al hotel — no es un servicio de
            recepción que improvisamos el mismo día si algo falla.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="text-xl font-bold text-atlantico-700">Según el tipo de programa</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
          El tipo de alojamiento cambia según el objetivo del evento, no solo según el presupuesto
          disponible.
        </p>
        <div className="mt-6">
          <TarjetasTexto items={segunPrograma} />
        </div>
        <p className="mt-6 max-w-2xl leading-relaxed text-ink-700">
          Ninguna de estas cuatro opciones es la correcta por defecto — se decide según lo que
          quieres que la gente recuerde del evento, no según lo que sea más rápido de reservar.
        </p>
      </section>

      <section className="bg-cream-200 py-12">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-xl font-bold text-atlantico-700">Qué revisamos siempre</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
            Cuatro cosas que comprobamos antes de proponerte un hotel, porque en la ficha de
            reservas nunca se ven del todo.
          </p>
          <div className="mt-6">
            <TarjetasTexto icono={false} items={queRevisamos} />
          </div>
          <p className="mt-6 max-w-2xl leading-relaxed text-ink-700">
            Se comprueban en persona o por videollamada con el hotel, no se dan por buenas solo
            porque aparecen bien redactadas en la página de reservas.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pt-6 text-lg leading-relaxed text-ink-700">
        <p>
          Seis situaciones habituales de alojamiento para eventos de empresa en Galicia — no un
          catálogo cerrado, sino una muestra de lo que gestionamos con frecuencia, desde un hotel
          de ciudad hasta un pazo perdido en el interior.
        </p>
      </section>

      <GridEjemplos ejemplos={alojamientoEjemplos} />

      <BannerEcosistema marca={SUUNIA} />

      <section className="mx-auto max-w-5xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <h2 className="text-xl font-bold text-atlantico-700">Cuándo empezar a reservar</h2>
        <p className="mt-3">
          Cuanto antes, mejor — los hoteles con más carácter y los bloques grandes de habitaciones
          se agotan primero, sobre todo en temporada alta o coincidiendo con otros eventos en la
          misma zona. Reservar con margen también da mejor precio de grupo que negociar contra
          reloj a dos semanas del evento.
        </p>
        <p className="mt-4">
          Si el programa combina alojamiento con traslados desde el aeropuerto o entre sedes,
          coordinamos también con{" "}
          <a href="/ecosistema/luxe-galicia" className="text-atlantico-700 underline">
            Luxe Galicia
          </a>{" "}
          para que la logística completa quede resuelta con el mismo interlocutor, sin que tengas
          que gestionar dos proveedores por separado ni cruzar horarios tú mismo.
        </p>
        <p className="mt-4">
          Y si además hay comidas o experiencias gastronómicas de por medio durante el programa,
          coordinamos también con{" "}
          <a href="/ecosistema/suunia" className="text-atlantico-700 underline">
            SUUNIA
          </a>{" "}
          para que todo quede resuelto bajo el mismo criterio de calidad.
        </p>
        <p className="mt-4">
          Y si el número de asistentes cambia a última hora — pasa más de lo que parece —
          ajustamos el bloque de habitaciones con el hotel sin que tengas que renegociar tú las
          condiciones desde cero.
        </p>
        <p className="mt-4 font-semibold text-ink-900">
          Cuéntanos cuántas noches, cuántas personas y qué tipo de alojamiento buscas. Te
          proponemos opciones ya negociadas, no una lista de hoteles para que llames tú uno a uno.
        </p>
      </section>

      <CTAFinal
        titulo="Que el evento no termine bien por el sitio donde durmieron es un error que se evita fácil."
        ctaTexto="Buscamos el alojamiento"
      />
    </>
  );
}
