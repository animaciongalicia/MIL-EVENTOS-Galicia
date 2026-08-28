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
      <p className="max-w-2xl text-lg text-slate-700">{intro}</p>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {sublandings.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-lg border border-slate-200 p-6 transition hover:border-slate-400"
          >
            <h3 className="font-semibold">{item.titulo}</h3>
            <p className="mt-2 text-sm text-slate-600">{item.descripcion}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
