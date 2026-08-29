import Link from "next/link";

type CTAFinalProps = {
  titulo: string;
  ctaTexto?: string;
  ctaHref?: string;
};

export default function CTAFinal({
  titulo,
  ctaTexto = "Cuéntanos tu evento",
  ctaHref = "/contacto",
}: CTAFinalProps) {
  return (
    <section className="bg-cream-200 px-6 py-16 text-center">
      <h2 className="mx-auto max-w-2xl text-2xl font-bold text-atlantico-700 sm:text-3xl">
        {titulo}
      </h2>
      <Link
        href={ctaHref}
        className="mt-6 inline-block rounded-full bg-atlantico-700 px-6 py-3 font-semibold text-white transition hover:bg-atlantico-800"
      >
        {ctaTexto}
      </Link>
    </section>
  );
}
