import Link from "next/link";

type EnlaceMenu = {
  nombre: string;
  href: string;
  submenu?: { nombre: string; href: string }[];
};

const enlaces: EnlaceMenu[] = [
  { nombre: "Inicio", href: "/" },
  {
    nombre: "Empresas",
    href: "/eventos-empresa",
    submenu: [
      { nombre: "Team building", href: "/eventos-empresa/team-building" },
      { nombre: "Incentivos", href: "/eventos-empresa/incentivos" },
      { nombre: "Jornadas outdoor", href: "/eventos-empresa/jornadas-outdoor" },
      { nombre: "Congresos y convenciones", href: "/eventos-empresa/congresos-y-convenciones" },
    ],
  },
  {
    nombre: "Actividades",
    href: "/actividades",
    submenu: [
      { nombre: "Outdoor", href: "/actividades/outdoor" },
      { nombre: "Indoor", href: "/actividades/indoor" },
      { nombre: "Gastronomía y vinos", href: "/actividades/gastronomia-y-vinos" },
      { nombre: "A medida", href: "/actividades/a-medida" },
    ],
  },
  {
    nombre: "Espacios",
    href: "/espacios-y-recursos",
    submenu: [
      { nombre: "Localización de espacios", href: "/espacios-y-recursos/localizacion-espacios" },
      { nombre: "Traslados", href: "/espacios-y-recursos/traslados" },
      { nombre: "Alojamiento", href: "/espacios-y-recursos/alojamiento" },
    ],
  },
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
            <li key={enlace.href} className="group relative">
              <Link
                href={enlace.href}
                className="flex items-center gap-1 py-2 transition hover:text-atlantico-700"
              >
                {enlace.nombre}
                {enlace.submenu && <span aria-hidden="true">▾</span>}
              </Link>
              {enlace.submenu && (
                <ul className="invisible absolute left-0 top-full z-10 min-w-[220px] rounded-lg border border-sand-200 bg-cream-100 py-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  {enlace.submenu.map((sub) => (
                    <li key={sub.href}>
                      <Link
                        href={sub.href}
                        className="block px-4 py-2 text-ink-700 transition hover:bg-cream-200 hover:text-atlantico-700"
                      >
                        {sub.nombre}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
