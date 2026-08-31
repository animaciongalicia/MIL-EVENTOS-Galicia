import type { Post } from "@/lib/blog";
import TarjetaPost from "@/components/blog/TarjetaPost";
import { gridColsClass } from "@/components/shared/gridCols";

type BloqueUltimosPostsProps = {
  posts: Post[];
};

export default function BloqueUltimosPosts({ posts }: BloqueUltimosPostsProps) {
  const ultimos = posts.slice(0, 5);

  return (
    <section>
      <h2 className="text-xl font-bold">Últimos posts</h2>
      <div className={`mt-4 grid gap-6 ${gridColsClass(ultimos.length)}`}>
        {ultimos.map((post) => (
          <TarjetaPost key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
