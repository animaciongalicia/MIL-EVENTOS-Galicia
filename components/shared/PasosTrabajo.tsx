export type Paso = {
  titulo: string;
  descripcion: string;
};

type PasosTrabajoProps = {
  pasos: Paso[];
};

// Bloque "Cómo trabajamos" con pasos numerados — reservado a las páginas
// pilar de /eventos-empresa (prioridad de negocio, CLAUDE.md §11) para que
// destaquen visualmente sobre el resto del catálogo de páginas pilar.
export default function PasosTrabajo({ pasos }: PasosTrabajoProps) {
  return (
    <ol className="mt-4 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      {pasos.map((paso, index) => (
        <li key={paso.titulo} className="flex gap-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-atlantico-700 text-sm font-semibold text-white">
            {index + 1}
          </span>
          <div>
            <p className="font-semibold text-ink-900">{paso.titulo}</p>
            <p className="mt-1 text-sm leading-relaxed text-ink-700">{paso.descripcion}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
