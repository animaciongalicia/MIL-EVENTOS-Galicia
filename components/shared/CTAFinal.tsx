import Link from "next/link";
import { IconArrowRight } from "@/components/shared/icons";

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
    <section className="bg-atlantico-700 px-6 py-16 text-center">
      <h2 className="mx-auto max-w-2xl text-2xl font-bold text-white sm:text-3xl">{titulo}</h2>
      <Link
        href={ctaHref}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-atlantico-700 transition hover:bg-cream-200"
      >
        {ctaTexto}
        <IconArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
}
