export type MarcaEcosistema = {
  nombre: string;
  descripcion: string;
  url: string;
  cuandoMostrar: string;
};

export const SUUNIA: MarcaEcosistema = {
  nombre: "SUUNIA",
  descripcion: "Alojamientos, comidas y experiencias / DMC.",
  url: "https://suunia.com",
  cuandoMostrar: "Contenido con alojamiento, comidas o programas de incentivo de varios días.",
};

export const SEA_GALICIA: MarcaEcosistema = {
  nombre: "Sea Galicia",
  descripcion: "Actividades náuticas.",
  url: "https://seagalicia.com",
  cuandoMostrar: "Contenido con componente náutico (regatas, kayak, catamarán).",
};

export const LUXE_GALICIA: MarcaEcosistema = {
  nombre: "Luxe Galicia",
  descripcion: "Transporte y desplazamientos.",
  url: "https://luxegalicia.com",
  cuandoMostrar: "Contenido con logística, traslados, programas multi-día.",
};

export const ecosistemaMarcas: MarcaEcosistema[] = [SUUNIA, SEA_GALICIA, LUXE_GALICIA];
