import type { MetadataRoute } from "next";
import { CATEGORIAS_BLOG, getAllPosts } from "@/lib/blog";

const SITE_URL = "https://mileventosgalicia.com";

// Rutas estáticas — debe mantenerse en sincronía con sitemap-definitivo.md
// y con CLAUDE.md §3 si se añade o quita una página pilar.
const RUTAS_ESTATICAS = [
  "",
  "/eventos-empresa",
  "/eventos-empresa/team-building",
  "/eventos-empresa/incentivos",
  "/eventos-empresa/jornadas-outdoor",
  "/eventos-empresa/congresos-y-convenciones",
  "/actividades",
  "/actividades/outdoor",
  "/actividades/indoor",
  "/actividades/gastronomia-y-vinos",
  "/actividades/a-medida",
  "/espacios-y-recursos",
  "/espacios-y-recursos/localizacion-espacios",
  "/espacios-y-recursos/traslados",
  "/espacios-y-recursos/alojamiento",
  "/ecosistema/suunia",
  "/ecosistema/sea-galicia",
  "/ecosistema/luxe-galicia",
  "/blog",
  "/contacto",
  "/celebraciones",
  "/celebraciones/cenas-de-empresa",
  "/celebraciones/celebraciones-de-empresa",
  "/celebraciones/cumpleanos-y-grupos",
  "/celebraciones/animacion-y-espectaculo",
  "/nosotros",
  "/aviso-legal",
  "/politica-de-privacidad",
  "/politica-de-cookies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const ahora = new Date();

  const estaticas: MetadataRoute.Sitemap = RUTAS_ESTATICAS.map((ruta) => ({
    url: `${SITE_URL}${ruta}`,
    lastModified: ahora,
  }));

  const categorias: MetadataRoute.Sitemap = CATEGORIAS_BLOG.map((categoria) => ({
    url: `${SITE_URL}/blog/categoria/${categoria}`,
    lastModified: ahora,
  }));

  const posts: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.fecha),
  }));

  return [...estaticas, ...categorias, ...posts];
}
