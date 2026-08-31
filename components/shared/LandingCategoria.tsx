import Image from "next/image";
import Link from "next/link";
import { placeholderImage } from "@/lib/placeholder-image";
import { gridColsClass } from "@/components/shared/gridCols";

export type SublandingLink = {
  titulo: string;
  descripcion: string;
  href: string;
};

type LandingCategoriaProps = {
  intro: string;
  sublandings: SublandingLink[];
};

export default function LandingCategoria({ intro, sublandings }: LandingCategoriaProps) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-12">
      <p className="max-w-2xl text-lg text-ink-700">{intro}</p>
      <div className={`mt-8 grid gap-6 ${gridColsClass(sublandings.length)}`}>
        {sublandings.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block overflow-hidden rounded-lg border border-sand-200 bg-cream-50 shadow-sm transition hover:-translate-y-0.5 hover:border-atlantico-600 hover:shadow-md"
          >
            <div className="relative aspect-video w-full">
              <Image
                src={placeholderImage(item.titulo)}
                alt=""
                fill
                className="object-cover"
                sizes="(min-width: 640px) 50vw, 100vw"
              />
            </div>
            <div className="p-6">
              <h3 className="font-semibold">{item.titulo}</h3>
              <p className="mt-2 text-sm text-ink-600">{item.descripcion}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
