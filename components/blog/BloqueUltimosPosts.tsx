import type { Post } from "@/lib/blog";
import TarjetaPost from "@/components/blog/TarjetaPost";
import { gridColsClass } from "@/components/shared/gridCols";

type BloqueUltimosPostsProps = {
  posts: Post[];
  titulo?: string;
};

export default function BloqueUltimosPosts({ posts, titulo = "Últimos artículos" }: BloqueUltimosPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section>
      <h2 className="text-xl font-bold text-atlantico-700">{titulo}</h2>
      <div className={`mt-4 grid gap-6 ${gridColsClass(posts.length)}`}>
        {posts.map((post) => (
          <TarjetaPost key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
