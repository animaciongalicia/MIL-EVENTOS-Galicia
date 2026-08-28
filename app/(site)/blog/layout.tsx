import SidebarBlog from "@/components/blog/SidebarBlog";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-12 sm:flex-row">
      <SidebarBlog />
      <div className="flex-1">{children}</div>
    </div>
  );
}
