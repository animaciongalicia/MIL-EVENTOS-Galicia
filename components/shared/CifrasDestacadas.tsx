import { gridColsClass } from "@/components/shared/gridCols";

export type Cifra = {
  valor: string;
  etiqueta: string;
};

type CifrasDestacadasProps = {
  cifras: Cifra[];
};

// Máximo 2-3 cifras reales y verificables (CLAUDE.md §6) — nunca contadores
// inflados ni redondeados sin justificación.
export default function CifrasDestacadas({ cifras }: CifrasDestacadasProps) {
  return (
    <div className={`mx-auto grid max-w-4xl gap-6 px-6 ${gridColsClass(cifras.length)}`}>
      {cifras.map((cifra) => (
        <div
          key={cifra.etiqueta}
          className="rounded-lg border border-sand-200 bg-cream-50 px-6 py-8 text-center shadow-sm"
        >
          <p className="font-serif text-4xl font-bold text-atlantico-700">{cifra.valor}</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-600">{cifra.etiqueta}</p>
        </div>
      ))}
    </div>
  );
}
