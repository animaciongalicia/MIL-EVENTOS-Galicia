import Image from "next/image";
import Link from "next/link";
import CifrasDestacadas from "@/components/shared/CifrasDestacadas";
import CitaDestacada from "@/components/shared/CitaDestacada";
import TarjetasTexto from "@/components/shared/TarjetasTexto";
import PasosTrabajo from "@/components/shared/PasosTrabajo";
import TiraLogos from "@/components/shared/TiraLogos";
import CTAFinal from "@/components/shared/CTAFinal";
import LandingCategoria from "@/components/shared/LandingCategoria";
import TarjetaPost from "@/components/blog/TarjetaPost";
import { IconArrowRight } from "@/components/shared/icons";
import { getAllPosts } from "@/lib/blog";
import { logosClientes } from "@/data/logos-clientes";

const areas = [
  {
    titulo: "Eventos de empresa",
    descripcion: "Team building, incentivos, jornadas outdoor, congresos y convenciones.",
    href: "/eventos-empresa",
    imagen: "/images/eventos-de-team-building.jpg",
  },
  {
    titulo: "Actividades",
    descripcion: "El catálogo de experiencias que le dan forma a tu evento.",
    href: "/actividades",
    imagen: "/images/barranquismo-en-galicia-para-empresas.jpg",
  },
  {
    titulo: "Espacios y recursos",
    descripcion: "El sitio, el traslado y el alojamiento, resueltos.",
    href: "/espacios-y-recursos",
    imagen: "/images/sotavento-palexco.jpg",
  },
  {
    titulo: "Celebraciones",
    descripcion: "Cenas de empresa, cumpleaños y fiestas — con DJs, cómicos y espectáculo.",
    href: "/celebraciones",
    imagen: "/images/celebracion-evento-empresa.jpg",
  },
];

const cifrasHome = [
  { valor: "+15", etiqueta: "años organizando eventos de empresa en Galicia" },
  { valor: "3", etiqueta: "marcas hermanas: alojamiento, náutica y transporte" },
  { valor: "4", etiqueta: "formatos de evento, de un team building a una convención" },
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
  const ultimosPosts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* Hero de dos columnas: texto a la izquierda, foto a la derecha.
          object-cover recorta sin deformar ni perder proporción. */}
      <section className="bg-cream-100">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-atlantico-600">
              Agencia de eventos en Galicia · +15 años
            </p>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-atlantico-700 sm:text-4xl">
              Eventos de empresa en Galicia, resueltos de principio a fin.
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-600">
              Team building, incentivos, congresos y celebraciones — con un único interlocutor que
              se ocupa de cada detalle para que tú no tengas que hacerlo.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 rounded-full bg-atlantico-700 px-6 py-3 font-semibold text-white transition hover:bg-atlantico-800"
              >
                Cuéntanos tu evento
                <IconArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/eventos-empresa"
                className="inline-flex items-center gap-2 rounded-full border border-sand-300 px-6 py-3 font-semibold text-ink-700 transition hover:border-atlantico-600 hover:text-atlantico-700"
              >
                Ver eventos de empresa
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/images/team-building-en-galicia.jpg"
              alt="Equipo de empresa en una actividad de team building en Galicia"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 480px, 100vw"
            />
          </div>
        </div>
      </section>

      {/* Claim ancla + manifiesto, corto */}
      <section className="border-y border-sand-200 bg-cream-50">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <p className="text-center font-serif text-xl italic text-ink-900 sm:text-2xl">
            Más de 15 años haciendo que las cosas sucedan.
          </p>
        </div>
      </section>

      {/* Qué hacemos — 4 cajas de servicio con imagen y enlace */}
      <section className="bg-cream-200 pb-16 pt-12">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold text-atlantico-700">Qué hacemos</h2>
        </div>
        <LandingCategoria
          intro="Cuatro áreas que se contratan juntas o por separado según lo que ya tengas resuelto. Entra por la que te encaje."
          sublandings={areas}
        />
      </section>

      {/* Cifras reales */}
      <section className="py-16">
        <CifrasDestacadas cifras={cifrasHome} />
      </section>

      {/* Manifiesto */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <CitaDestacada texto="No partimos de un catálogo cerrado de actividades para que elijas una y ya está. Partimos de tu objetivo, y construimos el evento a su alrededor." />
      </section>

      {/* Cómo trabajamos */}
      <section className="bg-cream-200 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold text-atlantico-700">Cómo trabajamos</h2>
          <PasosTrabajo pasos={pasosTrabajo} />
        </div>
      </section>

      {/* Por qué nosotros */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-bold text-atlantico-700">Por qué Mil Eventos Galicia</h2>
        <div className="mt-8">
          <TarjetasTexto items={razonesItems} />
        </div>
      </section>

      {/* Del blog — enlaces a contenido relevante */}
      {ultimosPosts.length > 0 && (
        <section className="bg-cream-200 py-16">
          <div className="mx-auto max-w-5xl px-6">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-2xl font-bold text-atlantico-700">Del blog</h2>
              <Link href="/blog" className="text-sm font-semibold text-atlantico-700 hover:underline">
                Ver el blog →
              </Link>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {ultimosPosts.map((post) => (
                <TarjetaPost key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      <TiraLogos logos={logosClientes} />

      <CTAFinal titulo="¿Va a ser un evento más, o el que todos recuerden? Empecemos por hablar." />
    </>
  );
}
