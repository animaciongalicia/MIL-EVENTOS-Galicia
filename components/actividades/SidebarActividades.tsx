import Link from "next/link";

const enlaces = [
  { nombre: "Outdoor", href: "/actividades/outdoor" },
  { nombre: "Indoor", href: "/actividades/indoor" },
  { nombre: "Gastronomía y vinos", href: "/actividades/gastronomia-y-vinos" },
  { nombre: "A medida", href: "/actividades/a-medida" },
];

export default function SidebarActividades() {
  return (
    <nav className="w-full shrink-0 sm:w-48">
      <ul className="space-y-2 text-sm">
        {enlaces.map((enlace) => (
          <li key={enlace.href}>
            <Link href={enlace.href}>{enlace.nombre}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
