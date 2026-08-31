import Image from "next/image";
import { placeholderImage } from "@/lib/placeholder-image";
import { gridColsClass } from "@/components/shared/gridCols";

export type Ejemplo = {
  nombre: string;
  descripcion: string;
};

type GridEjemplosProps = {
  ejemplos: Ejemplo[];
};

export default function GridEjemplos({ ejemplos }: GridEjemplosProps) {
  return (
    <section
      className={`mx-auto grid max-w-5xl gap-6 px-6 py-12 ${gridColsClass(ejemplos.length)}`}
    >
      {ejemplos.map((ejemplo) => (
        <div
          key={ejemplo.nombre}
          className="overflow-hidden rounded-lg border border-sand-200 bg-cream-50 shadow-sm transition hover:shadow-md"
        >
          <div className="relative aspect-video w-full">
            <Image
              src={placeholderImage(ejemplo.nombre)}
              alt=""
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </div>
          <div className="p-6">
            <h3 className="font-semibold">{ejemplo.nombre}</h3>
            <p className="mt-2 text-sm text-ink-600">{ejemplo.descripcion}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
