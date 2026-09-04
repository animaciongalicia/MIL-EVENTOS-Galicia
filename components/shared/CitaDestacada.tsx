type CitaDestacadaProps = {
  texto: string;
  acento?: "atlantico" | "terracota";
};

// Bloque de cita/afirmación destacada — rompe un tramo de prosa con una
// frase aislada en formato caja, en vez de un párrafo más.
export default function CitaDestacada({ texto, acento = "atlantico" }: CitaDestacadaProps) {
  const borde = acento === "terracota" ? "border-terracota-600" : "border-atlantico-600";

  return (
    <blockquote className={`border-l-4 ${borde} bg-cream-50 py-6 pl-6 pr-4 shadow-sm sm:py-8 sm:pl-8`}>
      <p className="font-serif text-xl italic leading-snug text-ink-900 sm:text-2xl">{texto}</p>
    </blockquote>
  );
}
