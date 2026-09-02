"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { IconChevronDown, IconClose, IconMenu } from "@/components/shared/icons";

type EnlaceMenu = {
  nombre: string;
  href: string;
  submenu?: { nombre: string; href: string }[];
};

type MobileMenuProps = {
  enlaces: EnlaceMenu[];
};

// Versión móvil del menú: los submenús del Header de escritorio se abren con
// :hover, que no existe en touch — sin esto, en móvil era imposible llegar a
// Team building, Incentivos, etc.
export default function MobileMenu({ enlaces }: MobileMenuProps) {
  const [abierto, setAbierto] = useState(false);
  const [submenuAbierto, setSubmenuAbierto] = useState<string | null>(null);

  // Evita que el menú quede abierto por detrás si cambia el tamaño de
  // ventana (p.ej. al girar el móvil o pasar a escritorio).
  useEffect(() => {
    function cerrarSiEscritorio() {
      if (window.innerWidth >= 768) {
        setAbierto(false);
        setSubmenuAbierto(null);
      }
    }
    window.addEventListener("resize", cerrarSiEscritorio);
    return () => window.removeEventListener("resize", cerrarSiEscritorio);
  }, []);

  function cerrarTodo() {
    setAbierto(false);
    setSubmenuAbierto(null);
  }

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setAbierto((valor) => !valor)}
        aria-expanded={abierto}
        aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
        className="flex h-9 w-9 items-center justify-center text-ink-700 transition hover:text-atlantico-700"
      >
        {abierto ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
      </button>

      {abierto && (
        <div className="absolute inset-x-0 top-full max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-sand-300 bg-cream-50 shadow-lg">
          <ul className="mx-auto max-w-5xl px-6 py-2">
            {enlaces.map((enlace) => (
              <li key={enlace.href} className="border-b border-sand-200 last:border-0">
                {enlace.submenu ? (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setSubmenuAbierto((actual) => (actual === enlace.href ? null : enlace.href))
                      }
                      aria-expanded={submenuAbierto === enlace.href}
                      className="flex w-full items-center justify-between py-3 text-left font-medium text-ink-900"
                    >
                      {enlace.nombre}
                      <IconChevronDown
                        className={`h-3.5 w-3.5 shrink-0 transition-transform ${
                          submenuAbierto === enlace.href ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {submenuAbierto === enlace.href && (
                      <ul className="pb-2 pl-4">
                        {enlace.submenu.map((sub) => (
                          <li key={sub.href}>
                            <Link
                              href={sub.href}
                              onClick={cerrarTodo}
                              className="block py-2 text-sm text-ink-700 transition hover:text-atlantico-700"
                            >
                              {sub.nombre}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={enlace.href}
                    onClick={cerrarTodo}
                    className="block py-3 font-medium text-ink-900 transition hover:text-atlantico-700"
                  >
                    {enlace.nombre}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
