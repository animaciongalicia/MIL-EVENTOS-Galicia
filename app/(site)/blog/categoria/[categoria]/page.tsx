import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  CATEGORIAS_BLOG,
  CATEGORIA_LABELS,
  esCategoriaValida,
  getPostsByCategoria,
} from "@/lib/blog";
import Hero from "@/components/shared/Hero";
import TarjetaPost from "@/components/blog/TarjetaPost";
import SidebarBlog from "@/components/blog/SidebarBlog";
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
      <Hero titulo={label} subtitulo={`Artículos sobre ${label.toLowerCase()} para eventos de empresa en Galicia.`} />

      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-12 lg:flex-row">
        <div className="flex-1">
          <Link href="/blog" className="text-sm text-atlantico-700 underline">
            ← Todos los artículos
          </Link>

          {posts.length === 0 ? (
            <p className="mt-6 text-lg leading-relaxed text-ink-700">
              Todavía no hay artículos publicados en {label.toLowerCase()}. Mientras tanto,
              puedes ver todo lo que ya tenemos en el{" "}
              <Link href="/blog" className="text-atlantico-700 underline">
                blog completo
              </Link>
              .
            </p>
          ) : (
            <div className={`mt-6 grid gap-6 ${gridColsClass(posts.length)}`}>
              {posts.map((post) => (
                <TarjetaPost key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>

        <SidebarBlog activa={categoria} />
      </div>
    </>
  );
}
