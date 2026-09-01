import Link from "next/link";
import { CATEGORIAS_BLOG, CATEGORIA_LABELS, getAllPosts, type CategoriaBlog } from "@/lib/blog";
import { IconArrowRight } from "@/components/shared/icons";
import { WHATSAPP_CONTACTO_HREF } from "@/data/contacto";

type SidebarBlogProps = {
  activa?: CategoriaBlog;
};

export default function SidebarBlog({ activa }: SidebarBlogProps) {
  const posts = getAllPosts();

  return (
    <aside className="w-full shrink-0 space-y-6 lg:w-64">
      <div className="rounded-lg border border-sand-200 bg-cream-50 p-5 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">Categorías</p>
        <nav className="mt-3">
          <ul className="space-y-1">
            <li>
              <Link
                href="/blog"
                className={`flex items-center justify-between rounded-md px-3 py-2 text-sm transition ${
                  !activa
                    ? "bg-atlantico-700 font-semibold text-white"
                    : "text-ink-700 hover:bg-cream-200"
                }`}
              >
                Todos los artículos
                <span className={!activa ? "text-cream-200" : "text-ink-500"}>{posts.length}</span>
              </Link>
            </li>
            {CATEGORIAS_BLOG.map((categoria) => {
              const cuenta = posts.filter((post) => post.categoria === categoria).length;
              const esActiva = categoria === activa;
              return (
                <li key={categoria}>
                  <Link
                    href={`/blog/categoria/${categoria}`}
                    className={`flex items-center justify-between rounded-md px-3 py-2 text-sm transition ${
                      esActiva
                        ? "bg-atlantico-700 font-semibold text-white"
                        : "text-ink-700 hover:bg-cream-200"
                    }`}
                  >
                    {CATEGORIA_LABELS[categoria]}
                    <span className={esActiva ? "text-cream-200" : "text-ink-500"}>{cuenta}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="rounded-lg bg-atlantico-700 p-5 text-white shadow-sm">
        <p className="font-serif text-lg font-bold leading-snug">¿Organizando un evento?</p>
        <p className="mt-2 text-sm leading-relaxed text-cream-200">
          Cuéntanos qué necesitas y te respondemos con opciones reales, no con un formulario
          genérico.
        </p>
        <a
          href={WHATSAPP_CONTACTO_HREF}
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-atlantico-700 transition hover:bg-cream-200"
        >
          Escríbenos
          <IconArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </aside>
  );
}
