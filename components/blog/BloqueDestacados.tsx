import type { Post } from "@/lib/blog";
import TarjetaPost from "@/components/blog/TarjetaPost";
import { postsDestacadosSlugs } from "@/data/posts-destacados";
import { gridColsClass } from "@/components/shared/gridCols";

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
      <h2 className="text-xl font-bold text-atlantico-700">Destacados</h2>
      <div className={`mt-4 grid gap-6 ${gridColsClass(destacados.length)}`}>
        {destacados.map((post) => (
          <TarjetaPost key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
