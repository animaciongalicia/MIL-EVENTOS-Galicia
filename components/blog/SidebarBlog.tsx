import Link from "next/link";
import { CATEGORIAS_BLOG } from "@/lib/blog";

export default function SidebarBlog() {
  return (
    <nav className="w-full shrink-0 sm:w-48">
      <ul className="space-y-2 text-sm">
        {CATEGORIAS_BLOG.map((categoria) => (
          <li key={categoria}>
            <Link href={`/blog/categoria/${categoria}`}>{categoria}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
