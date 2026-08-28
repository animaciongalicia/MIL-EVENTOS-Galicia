type HeroVariant = "corporativa" | "celebraciones";

type HeroProps = {
  titulo: string;
  subtitulo: string;
  ctaTexto?: string;
  ctaHref?: string;
  variante?: HeroVariant;
};

export default function Hero({
  titulo,
  subtitulo,
  ctaTexto,
  ctaHref,
  variante = "corporativa",
}: HeroProps) {
  const esCelebraciones = variante === "celebraciones";

  return (
    <section
      className={
        esCelebraciones
          ? "bg-amber-50 px-6 py-20 text-center"
          : "bg-slate-900 px-6 py-20 text-center text-white"
      }
    >
      <h1 className="text-3xl font-bold sm:text-5xl">{titulo}</h1>
      <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">{subtitulo}</p>
      {ctaTexto && ctaHref && (
        <a
          href={ctaHref}
          className={
            esCelebraciones
              ? "mt-8 inline-block rounded-full bg-amber-600 px-6 py-3 font-semibold text-white"
              : "mt-8 inline-block rounded-full bg-white px-6 py-3 font-semibold text-slate-900"
          }
        >
          {ctaTexto}
        </a>
      )}
    </section>
  );
}
