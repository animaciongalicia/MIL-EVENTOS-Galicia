import Link from "next/link";
import { CATEGORIAS_BLOG, CATEGORIA_LABELS, getAllPosts, type CategoriaBlog } from "@/lib/blog";

type BlogCategoriasNavProps = {
  // Categoría activa; sin valor = estamos en /blog (chip "Todos" activo).
  activa?: CategoriaBlog;
};

// Barra horizontal de chips de categoría, a ancho completo. Sustituye al
// antiguo sidebar (que estrujaba la rejilla de posts a 3 columnas diminutas).
export default function BlogCategoriasNav({ activa }: BlogCategoriasNavProps) {
  const posts = getAllPosts();
  const base = "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium transition";
  const on = "border-atlantico-700 bg-atlantico-700 text-white";
  const off = "border-sand-300 text-ink-700 hover:border-atlantico-600 hover:text-atlantico-700";

  return (
    <nav className="flex flex-wrap gap-2">
      <Link href="/blog" className={`${base} ${!activa ? on : off}`}>
        Todos
        <span className={!activa ? "text-cream-200" : "text-ink-500"}>{posts.length}</span>
      </Link>
      {CATEGORIAS_BLOG.map((categoria) => {
        const cuenta = posts.filter((post) => post.categoria === categoria).length;
        if (cuenta === 0) return null;
        const esActiva = categoria === activa;
        return (
          <Link
            key={categoria}
            href={`/blog/categoria/${categoria}`}
            className={`${base} ${esActiva ? on : off}`}
          >
            {CATEGORIA_LABELS[categoria]}
            <span className={esActiva ? "text-cream-200" : "text-ink-500"}>{cuenta}</span>
          </Link>
        );
      })}
    </nav>
  );
}
