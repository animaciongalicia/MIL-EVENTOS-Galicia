import { getPostsByCategoria } from "@/lib/blog";
import TarjetaPost from "@/components/blog/TarjetaPost";
import { gridColsClass } from "@/components/shared/gridCols";

type CategoriaPageProps = {
  params: { categoria: string };
};

export default function CategoriaPage({ params }: CategoriaPageProps) {
  const posts = getPostsByCategoria(params.categoria);

  return (
    <div>
      <h1 className="text-2xl font-bold capitalize">{params.categoria.replace(/-/g, " ")}</h1>
      <div className={`mt-6 grid gap-6 ${gridColsClass(posts.length)}`}>
        {posts.map((post) => (
          <TarjetaPost key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
