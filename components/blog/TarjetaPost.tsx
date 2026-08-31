import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/blog";
import { placeholderImage } from "@/lib/placeholder-image";

type TarjetaPostProps = {
  post: Post;
};

export default function TarjetaPost({ post }: TarjetaPostProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block overflow-hidden rounded-lg border border-sand-200 bg-cream-50 shadow-sm transition hover:-translate-y-0.5 hover:border-atlantico-600 hover:shadow-md"
    >
      <div className="relative aspect-video w-full">
        <Image
          src={placeholderImage(post.slug)}
          alt=""
          fill
          className="object-cover"
          sizes="(min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="p-6">
        <span className="text-xs uppercase text-ink-500">{post.categoria}</span>
        <h3 className="mt-1 font-semibold">{post.title}</h3>
        <p className="mt-2 text-sm text-ink-600">{post.description}</p>
        <time className="mt-3 block text-xs text-ink-500">{post.fecha}</time>
      </div>
    </Link>
  );
}
