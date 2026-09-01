export type MarcaEcosistema = {
  nombre: string;
  descripcion: string;
  href: string;
  cuandoMostrar: string;
};

// Enlace SIEMPRE interno (CLAUDE.md §7): SUUNIA, Sea Galicia y Luxe Galicia no
// tienen todavía web propia, así que estas páginas de /ecosistema hacen de
// presencia informativa completa hasta que la tengan. Nunca se enlaza a un
// dominio externo para estas marcas.
export const SUUNIA: MarcaEcosistema = {
  nombre: "SUUNIA",
  descripcion: "Alojamientos, comidas y experiencias / DMC.",
  href: "/ecosistema/suunia",
  cuandoMostrar: "Contenido con alojamiento, comidas o programas de incentivo de varios días.",
};

export const SEA_GALICIA: MarcaEcosistema = {
  nombre: "Sea Galicia",
  descripcion: "Actividades náuticas.",
  href: "/ecosistema/sea-galicia",
  cuandoMostrar: "Contenido con componente náutico (regatas, kayak, catamarán).",
};

export const LUXE_GALICIA: MarcaEcosistema = {
  nombre: "Luxe Galicia",
  descripcion: "Transporte y desplazamientos.",
  href: "/ecosistema/luxe-galicia",
  cuandoMostrar: "Contenido con logística, traslados, programas multi-día.",
};

export const ecosistemaMarcas: MarcaEcosistema[] = [SUUNIA, SEA_GALICIA, LUXE_GALICIA];
