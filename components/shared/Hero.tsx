import Image from "next/image";
import { IconArrowRight } from "@/components/shared/icons";

type HeroVariant = "corporativa" | "celebraciones";

type HeroProps = {
  titulo: string;
  subtitulo: string;
  ctaTexto?: string;
  ctaHref?: string;
  variante?: HeroVariant;
  // Foto real en /public. Si no se indica, el Hero no muestra imagen.
  imagen?: string;
  // Hero cinematográfico (foto a sangre completa + degradado + texto encima),
  // como el de la home. Reservado a las páginas reina (landings de categoría) —
  // las páginas pilar interiores usan el hero claro por defecto (CLAUDE.md §12).
  cinematografico?: boolean;
  // Epígrafe pequeño sobre el titular (solo en modo cinematográfico).
  eyebrow?: string;
};

export default function Hero({
  titulo,
  subtitulo,
  ctaTexto,
  ctaHref,
  variante = "corporativa",
  imagen,
  cinematografico = false,
  eyebrow,
}: HeroProps) {
  const esCelebraciones = variante === "celebraciones";

  // --- Hero cinematográfico (páginas reina) -------------------------------
  if (imagen && cinematografico) {
    const gradiente = esCelebraciones
      ? "from-terracota-900 via-terracota-900/70 to-terracota-900/20"
      : "from-atlantico-800 via-atlantico-800/70 to-atlantico-800/20";
    const textoCta = esCelebraciones ? "text-terracota-900" : "text-atlantico-800";
    return (
      <section className="relative isolate flex min-h-[52vh] flex-col justify-end overflow-hidden">
        <Image src={imagen} alt="" fill priority className="-z-10 object-cover" sizes="100vw" />
        <div className={`absolute inset-0 -z-10 bg-gradient-to-t ${gradiente}`} />
        <div className="mx-auto w-full max-w-5xl px-6 pb-12 pt-24 sm:pt-28">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream-100/80">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-[1.1] text-cream-50 sm:text-5xl">
            {titulo}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream-100/90">{subtitulo}</p>
          {ctaTexto && ctaHref && (
            <a
              href={ctaHref}
              className={`mt-8 inline-flex items-center gap-2 rounded-full bg-cream-50 px-7 py-3.5 font-semibold ${textoCta} transition hover:bg-white`}
            >
              {ctaTexto}
              <IconArrowRight className="h-4 w-4" />
            </a>
          )}
        </div>
      </section>
    );
  }

  // --- Hero claro por defecto (páginas interiores) -------------------------
  return (
    <section
      className={
        esCelebraciones
          ? "bg-terracota-50 px-6 py-20 text-center"
          : "bg-cream-100 px-6 py-20 text-center"
      }
    >
      <h1
        className={
          esCelebraciones
            ? "text-3xl font-bold text-terracota-900 sm:text-5xl"
            : "text-3xl font-bold text-atlantico-700 sm:text-5xl"
        }
      >
        {titulo}
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-600">{subtitulo}</p>
      {ctaTexto && ctaHref && (
        <a
          href={ctaHref}
          className={
            esCelebraciones
              ? "mt-8 inline-flex items-center gap-2 rounded-full bg-terracota-600 px-6 py-3 font-semibold text-white transition hover:bg-terracota-900"
              : "mt-8 inline-flex items-center gap-2 rounded-full bg-atlantico-700 px-6 py-3 font-semibold text-white transition hover:bg-atlantico-800"
          }
        >
          {ctaTexto}
          <IconArrowRight className="h-4 w-4" />
        </a>
      )}
      {imagen && (
        <div className="relative mx-auto mt-12 aspect-[16/9] w-full max-w-4xl overflow-hidden rounded-xl shadow-lg sm:aspect-[2/1]">
          <Image
            src={imagen}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 896px, 100vw"
          />
        </div>
      )}
    </section>
  );
}
