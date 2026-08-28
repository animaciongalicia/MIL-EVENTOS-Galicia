import { getPostsByCategoria } from "@/lib/blog";
import TarjetaPost from "@/components/blog/TarjetaPost";

type CategoriaPageProps = {
  params: { categoria: string };
};

export default function CategoriaPage({ params }: CategoriaPageProps) {
  const posts = getPostsByCategoria(params.categoria);

  return (
    <div>
      <h1 className="text-2xl font-bold capitalize">{params.categoria.replace(/-/g, " ")}</h1>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {posts.map((post) => (
          <TarjetaPost key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
