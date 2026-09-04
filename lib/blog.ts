import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

// Categorías confirmadas — mapeadas 1:1 con páginas pilar para evitar
// ambigüedad en el enlazado interno obligatorio (CLAUDE.md §9) y canibalización
// de keyword entre categoría y pilar (p.ej. "outdoor" competía entre
// /eventos-empresa/jornadas-outdoor y /actividades/outdoor).
export const CATEGORIAS_BLOG = [
  "team-building",
  "incentivos",
  "jornadas-outdoor",
  "congresos-y-convenciones",
  "gastronomia-y-vinos",
  "espacios-y-recursos",
] as const;

export type CategoriaBlog = (typeof CATEGORIAS_BLOG)[number];

// Nombre legible de cada categoría, para mostrar en badges, sidebar y <h1>
// en vez del slug en crudo ("team-building" → "Team building").
export const CATEGORIA_LABELS: Record<CategoriaBlog, string> = {
  "team-building": "Team building",
  incentivos: "Incentivos",
  "jornadas-outdoor": "Jornadas outdoor",
  "congresos-y-convenciones": "Congresos y convenciones",
  "gastronomia-y-vinos": "Gastronomía y vinos",
  "espacios-y-recursos": "Espacios y recursos",
};

// Página pilar 1:1 de cada categoría (CLAUDE.md §10) — usada para el enlace
// interno obligatorio al cierre de cada post (CLAUDE.md §9).
export const CATEGORIA_PILAR_HREF: Record<CategoriaBlog, string> = {
  "team-building": "/eventos-empresa/team-building",
  incentivos: "/eventos-empresa/incentivos",
  "jornadas-outdoor": "/eventos-empresa/jornadas-outdoor",
  "congresos-y-convenciones": "/eventos-empresa/congresos-y-convenciones",
  "gastronomia-y-vinos": "/actividades/gastronomia-y-vinos",
  "espacios-y-recursos": "/espacios-y-recursos",
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
  fecha: string;
  // Portada real en /public; si falta, cae en la de stock por slug.
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

export function getPostsRelacionados(slug: string, limite = 3): Post[] {
  const post = getPostBySlug(slug);
  if (!post) return [];

  return getAllPosts()
    .filter((p) => p.slug !== slug && p.categoria === post.categoria)
    .slice(0, limite);
}
