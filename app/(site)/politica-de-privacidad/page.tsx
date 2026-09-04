import type { Metadata } from "next";
import { CIF, DOMICILIO_SOCIAL, EMAIL_CONTACTO, RAZON_SOCIAL } from "@/data/contacto";

export const metadata: Metadata = {
  title: "Política de Privacidad | Mil Eventos Galicia",
  description: "Política de privacidad de mileventosgalicia.com.",
};

// El formulario de /contacto no envía datos a ningún servidor propio (mailto:
// sin backend, ver CLAUDE.md §2). La web antigua tenía esta página en
// /politica-de-privacidad/ — mapeada en next.config.js.
export default function PoliticaDePrivacidadPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 text-ink-700">
      <h1 className="text-2xl font-bold">Política de privacidad</h1>

      <div className="mt-8 space-y-6 text-sm leading-relaxed">
        <div>
          <h2 className="text-base font-semibold text-ink-900">1. Responsable del tratamiento</h2>
          <ul className="mt-2 space-y-1">
            <li>
              <strong>Titular:</strong> {RAZON_SOCIAL}
            </li>
            <li>
              <strong>CIF:</strong> {CIF}
            </li>
            <li>
              <strong>Domicilio:</strong> {DOMICILIO_SOCIAL}
            </li>
            <li>
              <strong>Correo electrónico:</strong>{" "}
              <a href={`mailto:${EMAIL_CONTACTO}`} className="underline">
                {EMAIL_CONTACTO}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-base font-semibold text-ink-900">
            2. Cómo se tratan tus datos en este sitio
          </h2>
          <p className="mt-2">
            El formulario de contacto de este sitio no envía tus datos a ningún servidor: abre tu
            propio cliente de correo con el mensaje ya redactado, y lo envías tú directamente a{" "}
            {EMAIL_CONTACTO}. Es decir, tus datos viajan por tu propio correo, no a través de este
            sitio web.
          </p>
          <p className="mt-2">
            Cuando nos escribes, {RAZON_SOCIAL} trata los datos que nos facilitas (nombre, correo,
            teléfono y el contenido de tu mensaje) con la única finalidad de responder a tu consulta
            y, en su caso, preparar una propuesta para tu evento. La base legal es tu consentimiento
            al contactarnos.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-ink-900">3. Conservación y cesiones</h2>
          <p className="mt-2">
            Conservamos tus datos el tiempo necesario para atender tu consulta y gestionar, en su
            caso, la relación comercial derivada. No cedemos tus datos a terceros salvo obligación
            legal.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-ink-900">4. Tus derechos</h2>
          <p className="mt-2">
            Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y
            portabilidad escribiéndonos a{" "}
            <a href={`mailto:${EMAIL_CONTACTO}`} className="underline">
              {EMAIL_CONTACTO}
            </a>
            . Si consideras que el tratamiento de tus datos no se ajusta a la normativa, puedes
            presentar una reclamación ante la Agencia Española de Protección de Datos (aepd.es).
          </p>
        </div>
      </div>
    </section>
  );
}
