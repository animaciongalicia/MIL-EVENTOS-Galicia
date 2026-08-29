import Link from "next/link";

const enlaces = [
  { nombre: "Inicio", href: "/" },
  { nombre: "Empresas", href: "/eventos-empresa" },
  { nombre: "Actividades", href: "/actividades" },
  { nombre: "Espacios", href: "/espacios-y-recursos" },
  { nombre: "Blog", href: "/blog" },
  { nombre: "Contacto", href: "/contacto" },
];

export default function Header() {
  return (
    <header className="border-b border-sand-200">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-bold">
          Mil Eventos Galicia
        </Link>
        <ul className="flex gap-6 text-sm">
          {enlaces.map((enlace) => (
            <li key={enlace.href}>
              <Link href={enlace.href} className="transition hover:text-atlantico-700">
                {enlace.nombre}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
