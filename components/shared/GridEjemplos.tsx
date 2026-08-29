export type Ejemplo = {
  nombre: string;
  descripcion: string;
};

type GridEjemplosProps = {
  ejemplos: Ejemplo[];
};

export default function GridEjemplos({ ejemplos }: GridEjemplosProps) {
  return (
    <section className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
      {ejemplos.map((ejemplo) => (
        <div key={ejemplo.nombre} className="rounded-lg border border-sand-200 p-6">
          <h3 className="font-semibold">{ejemplo.nombre}</h3>
          <p className="mt-2 text-sm text-ink-600">{ejemplo.descripcion}</p>
        </div>
      ))}
    </section>
  );
}
