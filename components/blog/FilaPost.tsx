import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/blog";
import { CATEGORIA_LABELS, formatFecha, tiempoLectura } from "@/lib/blog";

type FilaPostProps = {
  post: Post;
  // compacto: miniatura y texto más pequeños (para la barra lateral del post).
  compacto?: boolean;
};

// Fila horizontal de post: miniatura a la izquierda, texto a la derecha. Se lee
// mejor que una rejilla de tarjetas pequeñas. Se usa en el índice del blog y,
// en modo compacto, en la barra lateral de cada artículo.
export default function FilaPost({ post, compacto = false }: FilaPostProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group flex gap-4 py-5">
      {post.imagen && (
        <div
          className={`relative shrink-0 overflow-hidden rounded-lg ${
            compacto ? "aspect-square w-16" : "aspect-[4/3] w-28 sm:w-44"
          }`}
        >
          <Image
            src={post.imagen}
            alt=""
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
            sizes={compacto ? "64px" : "(min-width: 640px) 176px, 112px"}
          />
        </div>
      )}
      <div className="min-w-0 flex-1">
        <span className="text-xs font-semibold uppercase tracking-wide text-atlantico-700">
          {CATEGORIA_LABELS[post.categoria]}
        </span>
        <h3
          className={`mt-1 font-bold leading-snug text-ink-900 transition group-hover:text-atlantico-700 ${
            compacto ? "text-sm" : "text-lg sm:text-xl"
          }`}
        >
          {post.title}
        </h3>
        {!compacto && (
          <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-ink-600">
            {post.description}
          </p>
        )}
        <p className="mt-2 text-xs text-ink-500">
          {formatFecha(post.fecha)} · {tiempoLectura(post.content)} min de lectura
        </p>
      </div>
    </Link>
  );
}
