export type MarcaEcosistema = {
  nombre: string;
  descripcion: string;
  url: string;
  cuandoMostrar: string;
};

export const ecosistemaMarcas: MarcaEcosistema[] = [
  {
    nombre: "SUUNIA",
    descripcion: "Alojamientos, comidas y experiencias / DMC.",
    url: "https://suunia.com",
    cuandoMostrar:
      "Contenido con alojamiento, comidas o programas de incentivo de varios días.",
  },
  {
    nombre: "Sea Galicia",
    descripcion: "Actividades náuticas.",
    url: "https://seagalicia.com",
    cuandoMostrar: "Contenido con componente náutico (regatas, kayak, catamarán).",
  },
  {
    nombre: "Luxe Galicia",
    descripcion: "Transporte y desplazamientos.",
    url: "https://luxegalicia.com",
    cuandoMostrar: "Contenido con logística, traslados, programas multi-día.",
  },
];
