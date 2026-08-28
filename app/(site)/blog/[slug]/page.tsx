import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { getAllPosts, getPostBySlug, getPostsRelacionados } from "@/lib/blog";
import type { Metadata } from "next";

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

  return (
    <article>
      <span className="text-xs uppercase text-slate-500">{post.categoria}</span>
      <h1 className="mt-1 text-3xl font-bold">{post.title}</h1>
      <time className="mt-2 block text-sm text-slate-400">{post.fecha}</time>
      <div className="prose mt-8 max-w-none">
        <MDXRemote source={post.content} />
      </div>
      {relacionados.length > 0 && (
        <div className="mt-12 space-y-2">
          <h2 className="text-sm font-semibold uppercase text-slate-500">Relacionados</h2>
          {relacionados.map((relacionado) => (
            <Link key={relacionado.slug} href={`/blog/${relacionado.slug}`} className="block underline">
              {relacionado.title}
            </Link>
          ))}
        </div>
      )}
    </article>
  );
}
