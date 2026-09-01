import Link from "next/link";
import type { MarcaEcosistema } from "@/data/ecosistema-marcas";

type BannerEcosistemaProps = {
  marca: MarcaEcosistema;
};

export default function BannerEcosistema({ marca }: BannerEcosistemaProps) {
  const descripcion = marca.descripcion.toLowerCase().replace(/\.$/, "");

  return (
    <aside className="mx-auto max-w-5xl px-6 py-6">
      <div className="rounded-lg border-l-4 border-atlantico-700 bg-cream-50 p-4 text-sm shadow-sm">
        <span className="text-ink-600">¿Necesitas {descripcion}? </span>
        <Link href={marca.href} className="font-semibold text-atlantico-700 underline">
          Descubre {marca.nombre}
        </Link>
      </div>
    </aside>
  );
}
