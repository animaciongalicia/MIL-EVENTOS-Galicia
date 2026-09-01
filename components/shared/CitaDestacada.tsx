type CitaDestacadaProps = {
  texto: string;
};

// Bloque de cita/afirmación destacada — rompe un tramo de prosa con una
// frase aislada en formato caja, en vez de un párrafo más.
export default function CitaDestacada({ texto }: CitaDestacadaProps) {
  return (
    <blockquote className="border-l-4 border-atlantico-600 bg-cream-50 py-6 pl-6 pr-4 shadow-sm sm:py-8 sm:pl-8">
      <p className="font-serif text-xl italic leading-snug text-ink-900 sm:text-2xl">{texto}</p>
    </blockquote>
  );
}
