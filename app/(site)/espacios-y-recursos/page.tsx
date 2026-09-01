import type { Metadata } from "next";
import Hero from "@/components/shared/Hero";
import LandingCategoria from "@/components/shared/LandingCategoria";
import CifrasDestacadas from "@/components/shared/CifrasDestacadas";
import CitaDestacada from "@/components/shared/CitaDestacada";
import TarjetasTexto from "@/components/shared/TarjetasTexto";
import CTAFinal from "@/components/shared/CTAFinal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Espacios y Recursos para Eventos en Galicia | Mil Eventos Galicia",
  description: "Localización de espacios, traslados y alojamiento para eventos en Galicia.",
};

const sublandings = [
  {
    titulo: "Localización de espacios",
    descripcion: "El sitio exacto para tu evento.",
    href: "/espacios-y-recursos/localizacion-espacios",
  },
  {
    titulo: "Traslados",
    descripcion: "Logística sin fricciones.",
    href: "/espacios-y-recursos/traslados",
  },
  {
    titulo: "Alojamiento",
    descripcion: "Descanso a la altura del evento.",
    href: "/espacios-y-recursos/alojamiento",
  },
];

const cifrasEspacios = [
  { valor: "+15", etiqueta: "años localizando espacios y resolviendo logística para empresas en Galicia" },
  { valor: "3", etiqueta: "piezas que resolvemos por separado o juntas: espacio, traslado y alojamiento" },
];

const piezasDetalle = [
  {
    titulo: "Localización de espacios",
    texto:
      "Pazos, naves, salas de congresos y espacios singulares — filtrados por nosotros antes de enseñarte nada, con el aforo real verificado, no el que promete la web del local.",
  },
  {
    titulo: "Traslados",
    texto:
      "Desde el aeropuerto, entre sedes, de vuelta al hotel — coordinados con el resto del evento, no como una pieza aparte que gestionas tú por tu cuenta entre llamadas.",
  },
  {
    titulo: "Alojamiento",
    texto:
      "Reserva, reparto de habitaciones y seguimiento con el hotel, para que el check-in de un grupo grande no se convierta en una cola eterna ni en una sorpresa de última hora.",
  },
];

const factoresRevision = [
  {
    titulo: "Accesibilidad y aparcamiento",
    texto:
      "Cuántos coches o autobuses caben, y si hay alguna limitación de acceso que descubrir el mismo día es demasiado tarde para resolver.",
  },
  {
    titulo: "Tecnología disponible",
    texto:
      "Sonido, proyección, wifi con capacidad real para el grupo entero — no solo para el personal del local un día normal de trabajo.",
  },
  {
    titulo: "Restricciones horarias",
    texto:
      "Algunos espacios cierran el acceso a una hora concreta, o cobran extra por cada hora de más — lo revisamos antes de proponer, no después de firmar.",
  },
  {
    titulo: "Plan alternativo",
    texto:
      "Si el evento depende del tiempo o de un único proveedor, tenemos una alternativa lista antes de que haga falta usarla.",
  },
];

const comoTrabajamosEspacios = [
  {
    titulo: "Nos cuentas qué tienes resuelto",
    texto:
      "Si ya tienes el espacio cerrado, empezamos por el traslado o el alojamiento. Si no tienes nada todavía, empezamos por el principio, sin dar nada por hecho.",
  },
  {
    titulo: "Filtramos antes de enseñarte nada",
    texto:
      "Dos o tres opciones que ya encajan con tu evento, no una lista interminable de posibilidades para que decidas tú solo sin criterio.",
  },
  {
    titulo: "Cerramos la negociación",
    texto:
      "Contrato, precio y condiciones — con un único interlocutor por nuestra parte, no tú hablando con cada proveedor por separado.",
  },
  {
    titulo: "Encajamos el timing",
    texto:
      "Espacio, traslado y alojamiento coordinados entre sí y con el resto del evento, para que nada quede suelto ni dependa de que todo salga perfecto por casualidad.",
  },
];

const razonesEspacios = [
  {
    titulo: "Conocemos el territorio",
    texto:
      "Espacios y proveedores que hemos visitado nosotros mismos, no un listado sacado de una web de reservas genérica sin verificar.",
  },
  {
    titulo: "Un único punto de contacto",
    texto:
      "Espacio, traslado y alojamiento coordinados por el mismo equipo, en vez de tres proveedores que sincronizas tú entre correos.",
  },
  {
    titulo: "Negociación en tu nombre",
    texto:
      "Precio de grupo y condiciones que gestionamos nosotros, con la experiencia de quien lo hace todos los meses del año.",
  },
  {
    titulo: "Parte de un ecosistema más amplio",
    texto:
      "SUUNIA y Luxe Galicia refuerzan alojamiento y transporte cuando el programa lo necesita, con un único interlocutor de tu parte.",
  },
];

export default function EspaciosYRecursosPage() {
  return (
    <>
      <Hero
        titulo="Espacios y recursos para tu evento"
        subtitulo="Todo lo que rodea al evento, resuelto."
      />

      <section className="mx-auto max-w-3xl px-6 py-12 text-lg leading-relaxed text-ink-700">
        <p>
          El sitio, cómo llega la gente y dónde duerme si el evento dura más de un día — tres
          decisiones que no tienen nada que ver con la actividad en sí, y que aun así deciden si
          el evento sale bien o se recuerda por lo que falló.
        </p>
        <p className="mt-4">
          Las resolvemos por separado o juntas, según lo que ya tengas cerrado y lo que te falte.
          Si ya tienes el espacio pero necesitas coordinar los traslados de cien personas desde el
          aeropuerto, empezamos por ahí. Si no tienes nada todavía, empezamos por el principio.
        </p>
        <p className="mt-4">
          Son decisiones logísticas que, mal resueltas, pueden arruinar la percepción de un evento
          perfectamente planteado — y que casi nunca reciben la atención que merecen porque toda
          la energía se va en decidir la actividad.
        </p>
        <p className="mt-4">
          No hace falta que sepas exactamente qué necesitas antes de hablar con nosotros. Muchas
          veces la propia conversación es la que aclara si el problema real es el espacio, el
          transporte o el alojamiento — o los tres a la vez.
        </p>
        <p className="mt-4">
          Tampoco hace falta que las tres piezas las gestione la misma persona en tu empresa:
          coordinamos directamente con quien lleve cada parte, si así es como trabajáis
          internamente.
        </p>
      </section>

      <section className="pb-12">
        <CifrasDestacadas cifras={cifrasEspacios} />
      </section>

      <LandingCategoria
        intro="Tres piezas que hacen que todo encaje, explicadas en detalle en su propia página."
        sublandings={sublandings}
      />

      <section className="bg-cream-200 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold text-atlantico-700">Qué incluye cada pieza</h2>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-ink-700">
            Tres piezas que puedes contratar por separado o dejar que resolvamos juntas, según lo
            que ya tengas cerrado.
          </p>
          <div className="mt-8">
            <TarjetasTexto icono={false} items={piezasDetalle} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <CitaDestacada texto="Tú decides qué pieza necesitas resolver. Nosotros nos ocupamos de que encaje con todo lo demás." />
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <h2 className="text-2xl font-bold text-atlantico-700">Qué revisamos antes de proponer un espacio</h2>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed text-ink-700">
          Cuatro cosas que casi nunca aparecen en la web del propio local.
        </p>
        <div className="mt-8">
          <TarjetasTexto icono={false} items={factoresRevision} />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <h2 className="text-2xl font-bold text-atlantico-700">Cómo trabajamos</h2>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed text-ink-700">
          El mismo proceso, resuelvas una pieza o las tres a la vez — sin pasos de más ni
          reuniones que no aporten nada.
        </p>
        <div className="mt-8">
          <TarjetasTexto icono={false} items={comoTrabajamosEspacios} />
        </div>
      </section>

      <section className="bg-cream-200 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold text-atlantico-700">Por qué gestionar la logística con nosotros</h2>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-ink-700">
            Cuatro razones concretas, no frases hechas de folleto corporativo.
          </p>
          <div className="mt-8">
            <TarjetasTexto items={razonesEspacios} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 text-lg leading-relaxed text-ink-700">
        <h2 className="text-2xl font-bold text-atlantico-700">Cuándo entra en juego cada pieza</h2>
        <p className="mt-3">
          No todas las piezas se deciden en el mismo momento del proceso de organización, y eso
          está bien — cada una tiene su propio ritmo.
        </p>
        <p className="mt-3">
          La localización de espacios suele ser la primera decisión, porque condiciona todo lo
          demás — el aforo, el ambiente, incluso qué actividades caben dentro. Los traslados
          entran en juego en cuanto hay asistentes que vienen de fuera, o varias sedes que
          conectar en el mismo día. El alojamiento, en cuanto el programa se extiende más de una
          jornada o hay invitados que se quedan a dormir.
        </p>
        <p className="mt-4">
          Si todavía estás definiendo el formato del evento en sí, puede que te interese empezar
          por{" "}
          <Link href="/eventos-empresa" className="text-atlantico-700 underline">
            eventos de empresa
          </Link>{" "}
          o por{" "}
          <Link href="/actividades" className="text-atlantico-700 underline">
            actividades
          </Link>
          , y volver aquí cuando tengas claro qué tipo de evento vas a organizar.
        </p>
        <p className="mt-4">
          Y si lo que tienes es solo una fecha y la certeza de que necesitas ayuda con la
          logística, tampoco pasa nada — cuanto antes empecemos, más opciones tenemos disponibles
          para elegir, en vez de conformarnos con lo que quede libre para esas fechas.
        </p>
        <p className="mt-4 font-semibold text-ink-900">
          Cuéntanos qué pieza necesitas resolver primero. El resto lo encajamos nosotros.
        </p>
      </section>

      <CTAFinal titulo="¿Buscamos el espacio, el traslado, o las tres piezas a la vez?" />
    </>
  );
}
