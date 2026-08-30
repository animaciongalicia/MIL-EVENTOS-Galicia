import Link from "next/link";

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
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {sublandings.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-lg border border-sand-200 bg-cream-50 p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-atlantico-600 hover:shadow-md"
          >
            <h3 className="font-semibold">{item.titulo}</h3>
            <p className="mt-2 text-sm text-ink-600">{item.descripcion}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
