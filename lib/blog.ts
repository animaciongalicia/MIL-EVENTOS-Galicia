import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

// --- PILAR (SEO, no visible como taxonomía) ---------------------------------
// Cada post apoya a UNA página pilar. Sirve solo para el enlace interno
// obligatorio al cierre del post (CLAUDE.md §9), NO como categoría navegable —
// así el blog nunca compite por keyword con la pilar (anti-canibalización).
export const PILARES = [
  "team-building",
  "incentivos",
  "jornadas-outdoor",
  "congresos-y-convenciones",
  "gastronomia-y-vinos",
  "espacios-y-recursos",
] as const;

export type Pilar = (typeof PILARES)[number];

export const PILAR_LABELS: Record<Pilar, string> = {
  "team-building": "team building",
  incentivos: "incentivos",
  "jornadas-outdoor": "jornadas outdoor",
  "congresos-y-convenciones": "congresos y convenciones",
  "gastronomia-y-vinos": "gastronomía y vinos",
  "espacios-y-recursos": "espacios y recursos",
};

export const PILAR_HREF: Record<Pilar, string> = {
  "team-building": "/eventos-empresa/team-building",
  incentivos: "/eventos-empresa/incentivos",
  "jornadas-outdoor": "/eventos-empresa/jornadas-outdoor",
  "congresos-y-convenciones": "/eventos-empresa/congresos-y-convenciones",
  "gastronomia-y-vinos": "/actividades/gastronomia-y-vinos",
  "espacios-y-recursos": "/espacios-y-recursos",
};

// --- CATEGORÍA (editorial, la taxonomía navegable del blog) -----------------
// Agrupa por TIPO de contenido, no por servicio — así no duplica la intención
// de búsqueda de ninguna pilar y las páginas de categoría sí pueden indexarse.
export const CATEGORIAS_BLOG = ["guias", "ideas", "errores"] as const;

export type CategoriaBlog = (typeof CATEGORIAS_BLOG)[number];

export const CATEGORIA_LABELS: Record<CategoriaBlog, string> = {
  guias: "Guías",
  ideas: "Ideas",
  errores: "Errores a evitar",
};

export function esCategoriaValida(valor: string): valor is CategoriaBlog {
  return (CATEGORIAS_BLOG as readonly string[]).includes(valor);
}

export function formatFecha(fecha: string): string {
  return new Intl.DateTimeFormat("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(fecha));
}

export function tiempoLectura(content: string): number {
  const palabras = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(palabras / 200));
}

export type PostFrontmatter = {
  title: string;
  description: string;
  categoria: CategoriaBlog;
  pilar: Pilar;
  fecha: string;
  // Portada real en /public; si falta, la tarjeta y el post no muestran imagen.
  imagen?: string;
};

export type Post = PostFrontmatter & {
  slug: string;
  content: string;
};

export function getAllPosts(): Post[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((archivo) => archivo.endsWith(".mdx"))
    .map((archivo) => {
      const slug = archivo.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(BLOG_DIR, archivo), "utf8");
      const { data, content } = matter(raw);

      return { ...(data as PostFrontmatter), slug, content };
    })
    .sort((a, b) => (a.fecha < b.fecha ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}

export function getPostsByCategoria(categoria: string): Post[] {
  return getAllPosts().filter((post) => post.categoria === categoria);
}

// Relacionados: primero de la misma categoría editorial; si no llegan a
// `limite`, se rellena con los más recientes del resto — para que TODO post
// ofrezca siempre por dónde seguir navegando el blog.
export function getPostsRelacionados(slug: string, limite = 3): Post[] {
  const post = getPostBySlug(slug);
  if (!post) return [];

  const resto = getAllPosts().filter((p) => p.slug !== slug);
  const mismaCategoria = resto.filter((p) => p.categoria === post.categoria);
  const otros = resto.filter((p) => p.categoria !== post.categoria);

  return [...mismaCategoria, ...otros].slice(0, limite);
}
