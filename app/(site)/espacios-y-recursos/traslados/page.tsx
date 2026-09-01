import type { Metadata } from "next";
import Hero from "@/components/shared/Hero";
import GridEjemplos from "@/components/shared/GridEjemplos";
import BannerEcosistema from "@/components/shared/BannerEcosistema";
import CTAFinal from "@/components/shared/CTAFinal";
import CitaDestacada from "@/components/shared/CitaDestacada";
import TarjetasTexto from "@/components/shared/TarjetasTexto";
import { trasladosEjemplos } from "@/data/espacios-traslados";
import { LUXE_GALICIA } from "@/data/ecosistema-marcas";

export const metadata: Metadata = {
  title: "Traslados para Eventos en Galicia | Mil Eventos Galicia",
  description:
    "Gestión de traslados para eventos de empresa en Galicia: aeropuerto, entre sedes, grupos grandes y logística multi-día, coordinada con el resto del programa.",
};

const comoTrabajamos = [
  {
    titulo: "Un único punto de contacto",
    texto:
      "Toda la logística de movimiento, desde el primer vuelo que aterriza hasta el último coche que sale, coordinada por una sola persona.",
  },
  {
    titulo: "Horarios reales, no estimados",
    texto:
      "Seguimos el vuelo real, no la hora que aparecía en el billete la semana anterior — los retrasos no cogen a nadie por sorpresa.",
  },
  {
    titulo: "Vehículo según el grupo",
    texto:
      "Desde un turismo para dos personas hasta varios autobuses sincronizados, según el tamaño real del grupo que se desplaza.",
  },
  {
    titulo: "Coordinado con el resto del evento",
    texto:
      "Si la comida se retrasa, el autobús espera — la logística de movimiento se adapta al evento, no al revés.",
  },
];

const segunTamano = [
  {
    titulo: "Hasta 8 personas",
    texto:
      "Turismos o monovolúmenes, con conductor incluido cuando hace falta atender a dirección o a invitados especiales sin distracciones.",
  },
  {
    titulo: "De 9 a 50 personas",
    texto:
      "Microbuses o autocares medianos, la opción más habitual para team building, jornadas outdoor o incentivos de grupo cerrado.",
  },
  {
    titulo: "De 50 a 150 personas",
    texto:
      "Varios autocares sincronizados con horarios escalonados, para que la llegada al espacio no se convierta en un cuello de botella.",
  },
  {
    titulo: "Más de 150 personas",
    texto:
      "Logística de convención completa, con puntos de recogida múltiples y coordinación en tiempo real el día del evento.",
  },
];

const queEvitamos = [
  {
    titulo: "Grupos esperando sin información",
    texto: "Comunicación constante con el conductor y con el grupo, para que nadie se quede esperando sin saber cuánto falta.",
  },
  {
    titulo: "Vehículos infrautilizados o insuficientes",
    texto: "Calculamos el vehículo exacto antes del evento, no un autobús de sesenta plazas para quince personas ni al revés.",
  },
  {
    titulo: "Rutas sin margen de imprevistos",
    texto: "Tráfico, obras, un vuelo que se retrasa — el horario se calcula con margen real, no con el tiempo mínimo posible.",
  },
  {
    titulo: "Conductores que no conocen el destino",
    texto: "Especialmente en espacios rurales o de difícil acceso, donde un GPS genérico no basta y hace falta conocer el camino.",
  },
];

export default function TrasladosPage() {
  return (
    <>
      <Hero titulo="Traslados" subtitulo="Logística sin fricciones, en cualquier punto de Galicia." />

      <section className="mx-auto max-w-5xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <p>
          Nada rompe un evento como cincuenta personas esperando un autobús que no llega, o
          intentando aparcar en un sitio sin plazas. Es la parte del evento que nadie recuerda
          cuando funciona bien, y la única que todo el mundo comenta durante semanas cuando falla.
        </p>
        <p className="mt-4">
          Coordinamos los traslados de principio a fin — desde el aeropuerto, entre sedes, de
          vuelta al hotel — para que nadie tenga que preocuparse de cómo llegar a ningún sitio. Tú
          te centras en el evento; nosotros, en que todos estén donde tienen que estar a la hora
          que tienen que estar.
        </p>
        <p className="mt-4">
          Por eso se planifica con el mismo cuidado que la actividad principal, no como un trámite
          de última hora resuelto entre llamadas el día antes.
        </p>
        <p className="mt-4">
          No trabajamos con una única flotilla fija: según el tamaño del grupo, la ruta y la fecha,
          elegimos entre varios proveedores de confianza en toda Galicia — la prioridad es el
          vehículo adecuado para tu evento, no el que tengamos más a mano ese día concreto.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <CitaDestacada texto="Coordinamos los horarios con el resto del evento, no al revés: si la comida se retrasa, el autobús espera." />
      </section>

      <section className="bg-cream-200 py-12">
        <div className="mx-auto max-w-5xl px-6 text-ink-700">
          <h2 className="text-xl font-bold text-atlantico-700">Cómo trabajamos</h2>
          <p className="mt-3 max-w-2xl leading-relaxed">
            Cuatro principios que se aplican a cualquier traslado, desde un coche para dos personas
            hasta la logística completa de una convención de trescientos asistentes.
          </p>
          <div className="mt-6">
            <TarjetasTexto icono={false} items={comoTrabajamos} />
          </div>
          <p className="mt-6 max-w-2xl leading-relaxed">
            Todo esto se define antes del evento, no se improvisa el mismo día — un plan de
            traslados cerrado con antelación es la diferencia entre logística invisible y caos
            visible.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="text-xl font-bold text-atlantico-700">Qué evitamos siempre</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
          Cuatro errores habituales en la logística de movimiento que revisamos antes de que
          lleguen a pasar, no después de que hayan arruinado el arranque del evento.
        </p>
        <div className="mt-6">
          <TarjetasTexto items={queEvitamos} />
        </div>
        <p className="mt-6 max-w-2xl leading-relaxed text-ink-700">
          Ninguno de estos cuatro puntos se resuelve el mismo día del evento — se revisan antes,
          cuando todavía hay margen para corregirlos sin que nadie se entere de que hubo un
          problema.
        </p>
      </section>

      <section className="bg-cream-200 py-12">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-xl font-bold text-atlantico-700">Según el tamaño del grupo</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
            El vehículo se decide por el número real de asistentes, no por una estimación
            aproximada que luego se queda corta o sobra a medias.
          </p>
          <div className="mt-6">
            <TarjetasTexto icono={false} items={segunTamano} />
          </div>
          <p className="mt-6 max-w-2xl leading-relaxed text-ink-700">
            Y si el grupo llega en fechas distintas — habitual en programas con delegados
            internacionales — el vehículo se recalcula día a día, no se reserva de una vez para
            todo el programa.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pt-12 text-lg leading-relaxed text-ink-700">
        <p>
          Seis tipos de traslado que gestionamos habitualmente — no un catálogo cerrado, sino una
          muestra de la logística de movimiento que suele formar parte de un evento de empresa en
          Galicia, desde el aeropuerto hasta el último rincón rural de la comunidad.
        </p>
      </section>

      <GridEjemplos ejemplos={trasladosEjemplos} />

      <BannerEcosistema marca={LUXE_GALICIA} />

      <section className="mx-auto max-w-5xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <h2 className="text-xl font-bold text-atlantico-700">Cuándo hace falta planificarlo con más tiempo</h2>
        <p className="mt-3">
          Cuanto mayor sea el grupo o más delegados vengan de fuera de Galicia, antes hay que
          cerrar la logística — los autobuses grandes y los vehículos VIP se reservan con semanas
          de antelación, sobre todo en fechas con varios eventos coincidiendo en la misma zona.
          Dejarlo para la última semana suele significar pagar más o quedarte sin la opción que de
          verdad necesitabas.
        </p>
        <p className="mt-4">
          Si el programa combina traslados con alojamiento o comidas de varios días, coordinamos
          también con{" "}
          <a href="/ecosistema/suunia" className="text-atlantico-700 underline">
            SUUNIA
          </a>{" "}
          para que todo el desplazamiento del grupo quede resuelto con el mismo interlocutor, sin
          que tengas que gestionar dos proveedores distintos ni cruzar horarios por tu cuenta.
        </p>
        <p className="mt-4">
          Y si algo cambia a última hora — un vuelo se retrasa, una reunión se alarga — el plan se
          ajusta en tiempo real el propio día del evento, sin que tengas que gestionarlo tú desde
          el móvil entre una cosa y otra.
        </p>
        <p className="mt-4 font-semibold text-ink-900">
          Cuéntanos cuántas personas se mueven, desde dónde y hasta dónde. Te devolvemos un plan de
          traslados cerrado, no una lista de opciones para que la organices tú.
        </p>
      </section>

      <CTAFinal titulo="La logística que no se ve es la que mejor está funcionando." ctaTexto="Organizamos el traslado" />
    </>
  );
}
