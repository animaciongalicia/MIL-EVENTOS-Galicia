import type { MarcaEcosistema } from "@/data/ecosistema-marcas";

type BannerEcosistemaProps = {
  marca: MarcaEcosistema;
};

export default function BannerEcosistema({ marca }: BannerEcosistemaProps) {
  return (
    <aside className="mx-auto max-w-5xl px-6 py-6">
      <div className="rounded-lg bg-slate-50 p-4 text-sm">
        <span className="text-slate-600">¿Necesitas {marca.descripcion.toLowerCase()}? </span>
        <a href={marca.url} className="font-semibold underline">
          Descubre {marca.nombre}
        </a>
      </div>
    </aside>
  );
}
