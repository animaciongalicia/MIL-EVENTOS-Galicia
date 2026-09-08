import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  CATEGORIAS_BLOG,
  CATEGORIA_LABELS,
  esCategoriaValida,
  getPostsByCategoria,
} from "@/lib/blog";
import TarjetaPost from "@/components/blog/TarjetaPost";
import BlogCategoriasNav from "@/components/blog/BlogCategoriasNav";
import CTAFinal from "@/components/shared/CTAFinal";
import { gridColsClass } from "@/components/shared/gridCols";

type CategoriaPageProps = {
  params: { categoria: string };
};

export function generateStaticParams() {
  return CATEGORIAS_BLOG.map((categoria) => ({ categoria }));
}

export function generateMetadata({ params }: CategoriaPageProps): Metadata {
  if (!esCategoriaValida(params.categoria)) return {};
  const label = CATEGORIA_LABELS[params.categoria];
  return {
    title: `${label} | Blog | Mil Eventos Galicia`,
    description: `Artículos sobre ${label.toLowerCase()} para eventos de empresa en Galicia.`,
  };
}

export default function CategoriaPage({ params }: CategoriaPageProps) {
  if (!esCategoriaValida(params.categoria)) notFound();

  const categoria = params.categoria;
  const posts = getPostsByCategoria(categoria);
  const label = CATEGORIA_LABELS[categoria];

  return (
    <>
      {/* Cabecera editorial */}
      <section className="border-b border-sand-200 bg-cream-100">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Link
            href="/blog"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-atlantico-600 hover:underline"
          >
            ← Blog
          </Link>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-ink-900 sm:text-4xl">
            {label}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-600">
            Artículos sobre {label.toLowerCase()} para eventos de empresa en Galicia.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pt-12">
        <BlogCategoriasNav activa={categoria} />
      </section>

      {posts.length === 0 ? (
        <section className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-lg leading-relaxed text-ink-700">
            Todavía no hay artículos publicados en {label.toLowerCase()}. Mientras tanto, puedes ver
            todo lo que ya tenemos en el{" "}
            <Link href="/blog" className="text-atlantico-700 underline">
              blog completo
            </Link>
            .
          </p>
        </section>
      ) : (
        <section className="mx-auto max-w-5xl px-6 py-16">
          <div className={`grid gap-6 ${gridColsClass(posts.length)}`}>
            {posts.map((post) => (
              <TarjetaPost key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      <CTAFinal titulo="¿Estás dándole vueltas a un evento? Cuéntanoslo y te respondemos con opciones reales, no con un folleto." />
    </>
  );
}
