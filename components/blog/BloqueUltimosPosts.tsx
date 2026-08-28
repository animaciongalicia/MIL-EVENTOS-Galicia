import type { Post } from "@/lib/blog";
import TarjetaPost from "@/components/blog/TarjetaPost";

type BloqueUltimosPostsProps = {
  posts: Post[];
};

export default function BloqueUltimosPosts({ posts }: BloqueUltimosPostsProps) {
  const ultimos = posts.slice(0, 5);

  return (
    <section>
      <h2 className="text-xl font-bold">Últimos posts</h2>
      <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {ultimos.map((post) => (
          <TarjetaPost key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
