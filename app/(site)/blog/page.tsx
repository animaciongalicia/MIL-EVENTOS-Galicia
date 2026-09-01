import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import Hero from "@/components/shared/Hero";
import TarjetaPost from "@/components/blog/TarjetaPost";
import BloqueUltimosPosts from "@/components/blog/BloqueUltimosPosts";
import BloqueDestacados from "@/components/blog/BloqueDestacados";
import SidebarBlog from "@/components/blog/SidebarBlog";

export const metadata: Metadata = {
  title: "Blog | Mil Eventos Galicia",
  description:
    "Ideas, guías y recursos para organizar eventos de empresa en Galicia: team building, incentivos, congresos y mucho más.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const [ultimo, ...resto] = posts;

  return (
    <>
      <Hero
        titulo="Blog"
        subtitulo="Ideas, guías y recursos para organizar eventos de empresa en Galicia — sin humo, sin relleno."
      />

      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-12 lg:flex-row">
        <div className="flex-1 space-y-12">
          {posts.length === 0 ? (
            <p className="text-lg leading-relaxed text-ink-700">
              Estamos preparando los primeros artículos del blog. Vuelve pronto.
            </p>
          ) : (
            <>
              {ultimo && (
                <section>
                  <h2 className="text-xl font-bold text-atlantico-700">Último artículo</h2>
                  <div className="mt-4">
                    <TarjetaPost post={ultimo} destacada />
                  </div>
                </section>
              )}

              <BloqueUltimosPosts posts={resto} titulo="Más artículos" />
              <BloqueDestacados posts={posts} />
            </>
          )}
        </div>

        <SidebarBlog />
      </div>
    </>
  );
}
