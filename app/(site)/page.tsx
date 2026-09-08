import Image from "next/image";
import Link from "next/link";
import CitaDestacada from "@/components/shared/CitaDestacada";
import TarjetasTexto from "@/components/shared/TarjetasTexto";
import PasosTrabajo from "@/components/shared/PasosTrabajo";
import TiraLogos from "@/components/shared/TiraLogos";
import CTAFinal from "@/components/shared/CTAFinal";
import TarjetaPost from "@/components/blog/TarjetaPost";
import { IconArrowRight } from "@/components/shared/icons";
import { getAllPosts } from "@/lib/blog";
import { logosClientes } from "@/data/logos-clientes";

// Cifras integradas en el hero (barra inferior). Reales y verificables (§6).
const cifrasHero = [
  { valor: "+15", etiqueta: "años haciendo que las cosas sucedan" },
  { valor: "4", etiqueta: "formatos, de un team building a una convención" },
  { valor: "3", etiqueta: "marcas hermanas: alojamiento, náutica y transporte" },
];

// Servicio destacado (banner ancho) — la prioridad de negocio es el B2B (§11).
const destacado = {
  titulo: "Eventos de empresa",
  descripcion:
    "Team building, incentivos, jornadas outdoor, congresos y convenciones. El núcleo de lo que hacemos, y donde más se nota el oficio.",
  href: "/eventos-empresa",
  imagen: "/images/eventos-de-team-building.jpg",
};

// Las otras tres áreas — fila de mosaicos con texto sobre la imagen.
const areas = [
  {
    titulo: "Actividades",
    descripcion: "Outdoor, indoor, gastronomía y a medida.",
    href: "/actividades",
    imagen: "/images/barranquismo-en-galicia-para-empresas.jpg",
  },
  {
    titulo: "Espacios y recursos",
    descripcion: "El sitio, el traslado y el alojamiento.",
    href: "/espacios-y-recursos",
    imagen: "/images/sotavento-palexco.jpg",
  },
  {
    titulo: "Celebraciones",
    descripcion: "Cenas, cumpleaños y fiestas con espectáculo.",
    href: "/celebraciones",
    imagen: "/images/cena-grupo-empresa-barcelona.jpg",
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
    titulo: "Un ecosistema de marcas propias",
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
      "Nos cuentas el objetivo, cuántos sois, el presupuesto y cualquier condicionante. Veinte minutos, no un formulario eterno.",
  },
  {
    titulo: "Una propuesta concreta",
    descripcion:
      "Dos o tres alternativas razonadas, con precio cerrado — no una lista interminable para que decidas tú solo.",
  },
  {
    titulo: "Coordinación de cada pieza",
    descripcion:
      "Espacio, proveedores, transporte y alojamiento cerrados y encajados en el horario previsto, por un único interlocutor.",
  },
  {
    titulo: "Presencia el día del evento",
    descripcion:
      "Resolvemos lo que se tuerza in situ — para que dirijas tu evento en vez de apagar fuegos entre bambalinas.",
  },
];

export default function HomePage() {
  const ultimosPosts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* HERO cinematográfico a pantalla completa: foto de evento + degradado
          oscuro, texto y CTAs anclados abajo, cifras reales integradas.
          object-cover recorta sin deformar. (Ver CLAUDE.md §12: la home usa un
          hero full-bleed propio, distinto del componente Hero de páginas
          interiores, que sigue siendo claro.) */}
      <section className="relative isolate flex min-h-[62vh] flex-col justify-end overflow-hidden">
        <Image
          src="/images/celebracion-evento-empresa.jpg"
          alt="Evento de empresa montado por Mil Eventos Galicia en Galicia"
          fill
          priority
          className="-z-10 object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-atlantico-800 via-atlantico-800/75 to-atlantico-800/35" />

        <div className="mx-auto w-full max-w-5xl px-6 pb-12 pt-24 sm:pt-28">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream-100/80">
            Agencia de eventos en Galicia · Más de 15 años
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.08] text-cream-50 sm:text-5xl lg:text-6xl">
            Organizar el evento no es tu trabajo. Es el nuestro.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream-100/90">
            Team building, incentivos, congresos y celebraciones para empresas. Un único
            interlocutor que se ocupa de cada pieza — para que tú te ocupes de lo tuyo.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 rounded-full bg-cream-50 px-7 py-3.5 font-semibold text-atlantico-800 transition hover:bg-white"
            >
              Cuéntanos tu evento
              <IconArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/eventos-empresa"
              className="inline-flex items-center gap-2 rounded-full border border-cream-50/40 px-7 py-3.5 font-semibold text-cream-50 transition hover:bg-cream-50/10"
            >
              Ver eventos de empresa
            </Link>
          </div>

          <dl className="mt-10 grid max-w-3xl grid-cols-1 gap-x-8 gap-y-6 border-t border-cream-50/20 pt-6 sm:grid-cols-3">
            {cifrasHero.map((c) => (
              <div key={c.etiqueta}>
                <dt className="font-serif text-4xl font-bold text-cream-50">{c.valor}</dt>
                <dd className="mt-1 text-sm leading-snug text-cream-100/75">{c.etiqueta}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* INTRO editorial — tipográfica, con aire, sin foto */}
      <section className="bg-cream-50">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-atlantico-600">
            Cómo lo entendemos
          </p>
          <h2 className="mt-4 max-w-3xl text-2xl font-bold leading-snug text-ink-900 sm:text-3xl">
            No vendemos actividades sueltas. Empezamos por tu objetivo y construimos el evento a su
            alrededor.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-600">
            Unir un equipo no es lo mismo que premiar a un comercial, y una cena de Navidad no es lo
            mismo que producir un congreso para trescientas personas. Por eso no te damos un
            catálogo: te escuchamos primero y montamos lo que de verdad necesitas — con la misma
            gente detrás, de la primera llamada al último traslado de vuelta.
          </p>
        </div>
      </section>

      {/* SERVICIOS — jerarquía: banner destacado (B2B) + fila de 3 mosaicos.
          El texto va sobre la imagen (menos "foto + caja" repetido). */}
      <section className="bg-cream-100">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-atlantico-600">
                Qué hacemos
              </p>
              <h2 className="mt-3 text-2xl font-bold text-ink-900 sm:text-3xl">
                Cuatro áreas, un mismo interlocutor
              </h2>
            </div>
          </div>

          {/* Banner destacado — Eventos de empresa */}
          <Link
            href={destacado.href}
            className="group relative mt-8 block overflow-hidden rounded-2xl shadow-md ring-1 ring-sand-200 transition hover:shadow-xl"
          >
            <div className="relative aspect-[16/10] w-full sm:aspect-[16/6]">
              <Image
                src={destacado.imagen}
                alt={destacado.titulo}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(min-width: 1024px) 1024px, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-atlantico-800/90 via-atlantico-800/55 to-transparent" />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center p-8 sm:p-12">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cream-100/80">
                Nuestra especialidad
              </span>
              <h3 className="mt-2 max-w-md text-2xl font-bold text-cream-50 sm:text-3xl">
                {destacado.titulo}
              </h3>
              <p className="mt-3 max-w-md leading-relaxed text-cream-100/85">
                {destacado.descripcion}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cream-50">
                Ver eventos de empresa
                <IconArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </div>
          </Link>

          {/* Fila de 3 mosaicos */}
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {areas.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="group relative block overflow-hidden rounded-2xl shadow-md ring-1 ring-sand-200 transition hover:shadow-xl"
              >
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={area.imagen}
                    alt={area.titulo}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 640px) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-atlantico-800/95 via-atlantico-800/35 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-xl font-bold text-cream-50">{area.titulo}</h3>
                  <p className="mt-1.5 text-sm leading-snug text-cream-100/80">{area.descripcion}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-cream-50">
                    Ver más
                    <IconArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CÓMO TRABAJAMOS */}
      <section className="bg-cream-200 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-atlantico-600">
            Cómo trabajamos
          </p>
          <h2 className="mt-3 text-2xl font-bold text-ink-900 sm:text-3xl">
            Cuatro pasos, ni uno de relleno
          </h2>
          <PasosTrabajo pasos={pasosTrabajo} />
        </div>
      </section>

      {/* POR QUÉ */}
      <section className="bg-cream-50">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <CitaDestacada texto="Tú decides el objetivo y el presupuesto. Nosotros nos ocupamos de que salga bien — y de que se recuerde." />
          <div className="mt-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-atlantico-600">
              Por qué Mil Eventos Galicia
            </p>
            <h2 className="mt-3 text-2xl font-bold text-ink-900 sm:text-3xl">
              Cuatro razones concretas, no frases de folleto
            </h2>
            <div className="mt-8">
              <TarjetasTexto items={razonesItems} />
            </div>
          </div>
        </div>
      </section>

      {/* DEL BLOG */}
      {ultimosPosts.length > 0 && (
        <section className="bg-cream-100 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-atlantico-600">
                  Ideas y guías
                </p>
                <h2 className="mt-3 text-2xl font-bold text-ink-900 sm:text-3xl">Del blog</h2>
              </div>
              <Link
                href="/blog"
                className="shrink-0 text-sm font-semibold text-atlantico-700 hover:underline"
              >
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
