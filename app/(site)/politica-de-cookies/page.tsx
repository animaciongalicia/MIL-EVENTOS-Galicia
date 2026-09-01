import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies | Mil Eventos Galicia",
  description: "Política de cookies de mileventosgalicia.com.",
};

// TODO: revisar cuando se decida si se activa analítica (Vercel Analytics o
// Google Analytics, ver CLAUDE.md §2/§11) — hoy el sitio no instala cookies
// de analítica ni de terceros. La web antigua tenía esta página en
// /politica-de-cookies/ — mapeada en next.config.js.
export default function PoliticaDeCookiesPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 text-ink-700">
      <h1 className="text-2xl font-bold">Política de cookies</h1>
      <div className="mt-8 space-y-4 text-sm leading-relaxed">
        <p>
          Este sitio no instala cookies de analítica ni de terceros. Si en el futuro se activa
          analítica, esta página se actualizará para reflejarlo.
        </p>
      </div>
    </section>
  );
}
