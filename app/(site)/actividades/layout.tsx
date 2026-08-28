import SidebarActividades from "@/components/actividades/SidebarActividades";

export default function ActividadesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-12 sm:flex-row">
      <SidebarActividades />
      <div className="flex-1">{children}</div>
    </div>
  );
}
