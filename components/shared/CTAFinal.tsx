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
    <section className="bg-slate-900 px-6 py-16 text-center text-white">
      <h2 className="text-2xl font-bold sm:text-3xl">{titulo}</h2>
      <Link
        href={ctaHref}
        className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-semibold text-slate-900"
      >
        {ctaTexto}
      </Link>
    </section>
  );
}
