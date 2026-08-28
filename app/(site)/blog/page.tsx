import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import BloqueUltimosPosts from "@/components/blog/BloqueUltimosPosts";
import BloqueDestacados from "@/components/blog/BloqueDestacados";

export const metadata: Metadata = {
  title: "Blog | Mil Eventos Galicia",
  description: "Ideas y recursos para organizar eventos de empresa en Galicia.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="space-y-12">
      <BloqueUltimosPosts posts={posts} />
      <BloqueDestacados posts={posts} />
    </div>
  );
}
