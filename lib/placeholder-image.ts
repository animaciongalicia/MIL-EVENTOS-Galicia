// Fotografía de stock genérica (picsum.photos) mientras no hay fotos reales
// de eventos, espacios y equipo — sustituir antes de lanzar (CLAUDE.md §11).
// El seed da una imagen estable por tarjeta (no cambia entre renders).
export function placeholderImage(seed: string, width = 640, height = 400): string {
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/${width}/${height}`;
}
