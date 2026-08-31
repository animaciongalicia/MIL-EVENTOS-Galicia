// Evita huérfanos: una tarjeta sola en la última fila de un grid. El número
// de columnas se decide por la cantidad real de elementos, no al revés.
// Las clases están escritas literalmente (no interpoladas) para que Tailwind
// las detecte al escanear el contenido — un template string dinámico no
// funcionaría, Tailwind no ejecuta JS, solo busca clases tal cual aparecen.
export function gridColsClass(count: number): string {
  switch (count) {
    case 0:
    case 1:
      return "grid-cols-1";
    case 2:
      return "grid-cols-1 sm:grid-cols-2";
    case 3:
      // Salta directamente a 3 columnas en md (768px) — a 640px (sm) tres
      // columnas con imagen quedarían demasiado apretadas.
      return "grid-cols-1 md:grid-cols-3";
    case 4:
      return "grid-cols-1 sm:grid-cols-2";
    default:
      // 5 o más: 5 reparte 3+2 (aceptable, nunca 1 sola tarjeta suelta);
      // 6+ encaja siempre en filas completas de 2 o 3.
      return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
  }
}
