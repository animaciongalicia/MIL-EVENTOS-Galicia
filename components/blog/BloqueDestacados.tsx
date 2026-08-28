import type { Post } from "@/lib/blog";
import TarjetaPost from "@/components/blog/TarjetaPost";
import { postsDestacadosSlugs } from "@/data/posts-destacados";

type BloqueDestacadosProps = {
  posts: Post[];
};

// Sustituye a un ranking de "más leídos" mientras no haya analítica conectada
// (curado a mano vía data/posts-destacados.ts — ver CLAUDE.md §11).
export default function BloqueDestacados({ posts }: BloqueDestacadosProps) {
  const destacados = posts.filter((post) => postsDestacadosSlugs.includes(post.slug));

  if (destacados.length === 0) return null;

  return (
    <section>
      <h2 className="text-xl font-bold">Destacados</h2>
      <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {destacados.map((post) => (
          <TarjetaPost key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
