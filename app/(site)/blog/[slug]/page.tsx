import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import type { Metadata } from "next";
import {
  CATEGORIA_LABELS,
  PILAR_HREF,
  PILAR_LABELS,
  formatFecha,
  getAllPosts,
  getPostBySlug,
  getPostsRelacionados,
  tiempoLectura,
} from "@/lib/blog";
import FilaPost from "@/components/blog/FilaPost";
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
  const pilarHref = PILAR_HREF[post.pilar];

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

      {post.imagen && (
        <div className="mx-auto max-w-5xl px-6 pt-8">
          <div className="relative aspect-[16/7] w-full overflow-hidden rounded-xl shadow-md">
            <Image
              src={post.imagen}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 1024px, 100vw"
            />
          </div>
        </div>
      )}

      <div className="mx-auto grid max-w-5xl gap-12 px-6 py-12 lg:grid-cols-[minmax(0,1fr)_16rem]">
        {/* Columna principal: cuerpo del artículo + cierre hacia la pilar */}
        <div className="min-w-0">
          <div className="post-content max-w-2xl">
            <MDXRemote source={post.content} />
          </div>

          <div className="mt-12 max-w-2xl rounded-lg border border-atlantico-600/30 bg-cream-50 p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-atlantico-700">
              Sigue leyendo
            </p>
            <p className="mt-2 font-serif text-xl font-bold text-ink-900">
              ¿Quieres ver cómo lo planteamos de principio a fin?
            </p>
            <Link
              href={pilarHref}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-atlantico-700 px-6 py-3 font-semibold text-white transition hover:bg-atlantico-800"
            >
              Ver {PILAR_LABELS[post.pilar]}
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <Link href="/blog" className="mt-12 inline-block text-sm text-atlantico-700 underline">
            ← Volver al blog
          </Link>
        </div>

        {/* Barra lateral: aprovecha el hueco del cuerpo estrecho — CTA + relacionados */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-xl border border-sand-200 bg-atlantico-800 p-6 text-cream-100">
            <p className="font-serif text-lg font-bold text-white">
              ¿Le das vueltas a un evento?
            </p>
            <p className="mt-2 text-sm leading-relaxed text-cream-200">
              Cuéntanoslo y te respondemos con opciones reales, no con un folleto.
            </p>
            <Link
              href="/contacto"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-terracota-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-terracota-900"
            >
              Pedir propuesta
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {relacionados.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-500">
                Sigue leyendo
              </h2>
              <div className="mt-2 divide-y divide-sand-200 border-t border-sand-200">
                {relacionados.map((relacionado) => (
                  <FilaPost key={relacionado.slug} post={relacionado} compacto />
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </article>
  );
}
