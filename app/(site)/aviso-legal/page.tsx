import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal | Mil Eventos Galicia",
  description: "Aviso legal de mileventosgalicia.com.",
};

// TODO: pendiente de datos reales del cliente antes de lanzar — razón social,
// NIF/CIF, domicilio social y datos de inscripción registral. No se inventan
// (obligación legal LSSI-CE art. 10). La web antigua tenía esta página en
// /aviso-legal/ — mapeada en next.config.js → redirects().
export default function AvisoLegalPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 text-ink-700">
      <h1 className="text-2xl font-bold">Aviso legal</h1>
      <p className="mt-6 text-sm text-terracota-600">
        Página pendiente de completar con los datos legales reales de la empresa (razón social,
        NIF/CIF, domicilio social, datos registrales) antes del lanzamiento.
      </p>
      <div className="mt-8 space-y-4 text-sm leading-relaxed">
        <p>
          En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Información y
          Comercio Electrónico (LSSI-CE), se informa de los siguientes datos: [razón social],
          con NIF [NIF], domicilio en [domicilio social], inscrita en [registro].
        </p>
        <p>
          Contacto: {" "}
          <a href="mailto:info@mileventosgalicia.com" className="underline">
            info@mileventosgalicia.com
          </a>{" "}
          · +34 678 288 284.
        </p>
      </div>
    </section>
  );
}
