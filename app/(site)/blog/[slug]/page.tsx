import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import type { Metadata } from "next";
import {
  CATEGORIA_LABELS,
  CATEGORIA_PILAR_HREF,
  formatFecha,
  getAllPosts,
  getPostBySlug,
  getPostsRelacionados,
  tiempoLectura,
} from "@/lib/blog";
import TarjetaPost from "@/components/blog/TarjetaPost";
import { IconArrowRight } from "@/components/shared/icons";

type PostPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: PostPageProps): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return { title: `${post.title} | Mil Eventos Galicia`, description: post.description };
}

export default function PostPage({ params }: PostPageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const relacionados = getPostsRelacionados(post.slug);
  const pilarHref = CATEGORIA_PILAR_HREF[post.categoria];

  return (
    <article>
      <header className="bg-cream-100 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <nav className="text-sm text-ink-500">
            <Link href="/blog" className="hover:text-atlantico-700">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <Link href={`/blog/categoria/${post.categoria}`} className="hover:text-atlantico-700">
              {CATEGORIA_LABELS[post.categoria]}
            </Link>
          </nav>
          <span className="mt-6 inline-flex w-fit items-center rounded-full bg-atlantico-700/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-atlantico-700">
            {CATEGORIA_LABELS[post.categoria]}
          </span>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold text-atlantico-700 sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-ink-500">
            <time dateTime={post.fecha}>{formatFecha(post.fecha)}</time>
            <span aria-hidden="true">·</span>
            <span>{tiempoLectura(post.content)} min de lectura</span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="post-content">
          <MDXRemote source={post.content} />
        </div>

        <div className="mt-12 rounded-lg border border-atlantico-600/30 bg-cream-50 p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-atlantico-700">
            Sigue leyendo
          </p>
          <p className="mt-2 max-w-2xl font-serif text-xl font-bold text-ink-900">
            ¿Quieres ver cómo lo planteamos de principio a fin?
          </p>
          <Link
            href={pilarHref}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-atlantico-700 px-6 py-3 font-semibold text-white transition hover:bg-atlantico-800"
          >
            Ver {CATEGORIA_LABELS[post.categoria].toLowerCase()}
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {relacionados.length > 0 && (
          <section className="mt-12">
            <h2 className="text-xl font-bold text-atlantico-700">Más sobre esto</h2>
            <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relacionados.map((relacionado) => (
                <TarjetaPost key={relacionado.slug} post={relacionado} />
              ))}
            </div>
          </section>
        )}

        <Link href="/blog" className="mt-12 inline-block text-sm text-atlantico-700 underline">
          ← Volver al blog
        </Link>
      </div>
    </article>
  );
}
