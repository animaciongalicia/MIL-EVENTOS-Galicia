import Link from "next/link";
import type { Post } from "@/lib/blog";

type TarjetaPostProps = {
  post: Post;
};

export default function TarjetaPost({ post }: TarjetaPostProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block rounded-lg border border-sand-200 p-6 transition hover:border-sand-400"
    >
      <span className="text-xs uppercase text-ink-500">{post.categoria}</span>
      <h3 className="mt-1 font-semibold">{post.title}</h3>
      <p className="mt-2 text-sm text-ink-600">{post.description}</p>
      <time className="mt-3 block text-xs text-ink-500">{post.fecha}</time>
    </Link>
  );
}
