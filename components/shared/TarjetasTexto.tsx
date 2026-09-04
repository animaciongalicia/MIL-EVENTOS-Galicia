import { gridColsClass } from "@/components/shared/gridCols";
import { IconCheck } from "@/components/shared/icons";

export type ItemTarjetaTexto = {
  titulo: string;
  texto: string;
};

type TarjetasTextoProps = {
  items: ItemTarjetaTexto[];
  icono?: boolean;
  acento?: "atlantico" | "terracota";
};

// Tarjetas de título + texto corto, sin imagen — para romper bloques de
// prosa (razones, comparativas) en formato caja en vez de párrafo seguido.
export default function TarjetasTexto({ items, icono = true, acento = "atlantico" }: TarjetasTextoProps) {
  const colorIcono = acento === "terracota" ? "text-terracota-600" : "text-atlantico-700";

  return (
    <div className={`grid gap-6 ${gridColsClass(items.length)}`}>
      {items.map((item) => (
        <div key={item.titulo} className="rounded-lg bg-cream-50 p-6 shadow-sm">
          {icono && <IconCheck className={`h-6 w-6 ${colorIcono}`} />}
          <p className={`font-semibold text-ink-900 ${icono ? "mt-3" : ""}`}>{item.titulo}</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-700">{item.texto}</p>
        </div>
      ))}
    </div>
  );
}
