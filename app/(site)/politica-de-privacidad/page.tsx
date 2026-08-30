import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | Mil Eventos Galicia",
  description: "Política de privacidad de mileventosgalicia.com.",
};

// TODO: pendiente de revisión legal antes de lanzar — el formulario de
// /contacto no envía datos a ningún servidor propio (mailto: sin backend,
// ver CLAUDE.md §2), pero conviene confirmar con el cliente qué tratamiento
// de datos describir aquí (p.ej. si se usa analítica). La web antigua tenía
// esta página en /politica-de-privacidad/ — mapeada en next.config.js.
export default function PoliticaDePrivacidadPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 text-ink-700">
      <h1 className="text-2xl font-bold">Política de privacidad</h1>
      <p className="mt-6 text-sm text-terracota-600">
        Página pendiente de revisión legal antes del lanzamiento.
      </p>
      <div className="mt-8 space-y-4 text-sm leading-relaxed">
        <p>
          El formulario de contacto de este sitio no envía tus datos a ningún servidor: abre tu
          propio cliente de correo con el mensaje ya redactado, y lo envías tú directamente a{" "}
          info@mileventosgalicia.com.
        </p>
        <p>
          Para cualquier consulta sobre el tratamiento de tus datos personales, escríbenos a{" "}
          <a href="mailto:info@mileventosgalicia.com" className="underline">
            info@mileventosgalicia.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
