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

export type PostFrontmatter = {
  title: string;
  description: string;
  categoria: CategoriaBlog;
  fecha: string;
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
