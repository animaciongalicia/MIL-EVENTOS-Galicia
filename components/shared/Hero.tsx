import Image from "next/image";
import { placeholderImage } from "@/lib/placeholder-image";

type HeroVariant = "corporativa" | "celebraciones";

type HeroProps = {
  titulo: string;
  subtitulo: string;
  ctaTexto?: string;
  ctaHref?: string;
  variante?: HeroVariant;
  imagenSeed?: string;
};

export default function Hero({
  titulo,
  subtitulo,
  ctaTexto,
  ctaHref,
  variante = "corporativa",
  imagenSeed,
}: HeroProps) {
  const esCelebraciones = variante === "celebraciones";

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
              ? "mt-8 inline-block rounded-full bg-terracota-600 px-6 py-3 font-semibold text-white transition hover:bg-terracota-900"
              : "mt-8 inline-block rounded-full bg-atlantico-700 px-6 py-3 font-semibold text-white transition hover:bg-atlantico-800"
          }
        >
          {ctaTexto}
        </a>
      )}
      {imagenSeed && (
        <div className="relative mx-auto mt-12 aspect-[21/9] w-full max-w-4xl overflow-hidden rounded-xl shadow-lg">
          <Image
            src={placeholderImage(imagenSeed, 1400, 600)}
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
