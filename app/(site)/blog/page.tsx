import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import TarjetaPost from "@/components/blog/TarjetaPost";
import BlogCategoriasNav from "@/components/blog/BlogCategoriasNav";
import CTAFinal from "@/components/shared/CTAFinal";
import { gridColsClass } from "@/components/shared/gridCols";

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
      {/* Cabecera editorial */}
      <section className="border-b border-sand-200 bg-cream-100">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-atlantico-600">
            El blog de Mil Eventos Galicia
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-ink-900 sm:text-4xl">
            Ideas y guías para que tu próximo evento salga redondo
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-600">
            Sin humo y sin relleno: lo que de verdad importa al organizar team building, incentivos,
            congresos y celebraciones en Galicia.
          </p>
        </div>
      </section>

      {posts.length === 0 ? (
        <section className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-lg leading-relaxed text-ink-700">
            Estamos preparando los primeros artículos del blog. Vuelve pronto.
          </p>
        </section>
      ) : (
        <>
          <section className="mx-auto max-w-5xl px-6 pt-12">
            <BlogCategoriasNav />
          </section>

          {/* Artículo destacado — tarjeta ancha a todo el contenedor */}
          {ultimo && (
            <section className="mx-auto max-w-5xl px-6 pt-8">
              <TarjetaPost post={ultimo} destacada />
            </section>
          )}

          {/* Resto de artículos — rejilla a ancho completo, ya sin sidebar */}
          {resto.length > 0 && (
            <section className="mx-auto max-w-5xl px-6 py-16">
              <h2 className="text-2xl font-bold text-ink-900">Más artículos</h2>
              <div className={`mt-8 grid gap-6 ${gridColsClass(resto.length)}`}>
                {resto.map((post) => (
                  <TarjetaPost key={post.slug} post={post} />
                ))}
              </div>
            </section>
          )}
        </>
      )}

      <CTAFinal titulo="¿Estás dándole vueltas a un evento? Cuéntanoslo y te respondemos con opciones reales, no con un folleto." />
    </>
  );
}
