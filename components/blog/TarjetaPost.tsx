import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/blog";
import { CATEGORIA_LABELS, formatFecha, tiempoLectura } from "@/lib/blog";
import { placeholderImage } from "@/lib/placeholder-image";

type TarjetaPostProps = {
  post: Post;
  destacada?: boolean;
};

export default function TarjetaPost({ post, destacada = false }: TarjetaPostProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group block overflow-hidden rounded-lg border border-sand-200 bg-cream-50 shadow-sm transition hover:-translate-y-0.5 hover:border-atlantico-600 hover:shadow-md ${
        destacada ? "sm:flex sm:flex-row" : ""
      }`}
    >
      <div
        className={`relative w-full overflow-hidden ${
          destacada ? "aspect-video sm:aspect-auto sm:w-1/2" : "aspect-video"
        }`}
      >
        <Image
          src={placeholderImage(post.slug)}
          alt=""
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes={destacada ? "(min-width: 640px) 50vw, 100vw" : "(min-width: 640px) 33vw, 100vw"}
        />
      </div>
      <div className={destacada ? "flex flex-1 flex-col justify-center p-6 sm:p-8" : "p-6"}>
        <span className="inline-flex w-fit items-center rounded-full bg-atlantico-700/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-atlantico-700">
          {CATEGORIA_LABELS[post.categoria]}
        </span>
        <h3
          className={`mt-3 font-bold text-ink-900 ${
            destacada ? "text-2xl leading-snug sm:text-3xl" : "text-lg leading-snug"
          }`}
        >
          {post.title}
        </h3>
        <p className={`mt-2 text-ink-600 ${destacada ? "text-base" : "text-sm"}`}>
          {post.description}
        </p>
        <div className="mt-4 flex items-center gap-3 text-xs text-ink-500">
          <time dateTime={post.fecha}>{formatFecha(post.fecha)}</time>
          <span aria-hidden="true">·</span>
          <span>{tiempoLectura(post.content)} min de lectura</span>
        </div>
      </div>
    </Link>
  );
}
