import type { Metadata } from "next";
import {
  CIF,
  DOMICILIO_SOCIAL,
  EMAIL_CONTACTO,
  NOMBRE_COMERCIAL,
  RAZON_SOCIAL,
  TELEFONO_CONTACTO,
} from "@/data/contacto";

export const metadata: Metadata = {
  title: "Aviso Legal | Mil Eventos Galicia",
  description: "Aviso legal de mileventosgalicia.com.",
};

// Datos identificativos reales aportados por el cliente. La web antigua tenía
// esta página en /aviso-legal/ — mapeada en next.config.js → redirects().
export default function AvisoLegalPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 text-ink-700">
      <h1 className="text-2xl font-bold">Aviso legal</h1>

      <div className="mt-8 space-y-6 text-sm leading-relaxed">
        <div>
          <h2 className="text-base font-semibold text-ink-900">1. Datos identificativos</h2>
          <p className="mt-2">
            En cumplimiento del artículo 10 de la Ley 34/2002, de Servicios de la Sociedad de la
            Información y de Comercio Electrónico (LSSI-CE), se informa de los siguientes datos del
            titular de este sitio web:
          </p>
          <ul className="mt-3 space-y-1">
            <li>
              <strong>Titular:</strong> {RAZON_SOCIAL} ({NOMBRE_COMERCIAL})
            </li>
            <li>
              <strong>CIF:</strong> {CIF}
            </li>
            <li>
              <strong>Domicilio social:</strong> {DOMICILIO_SOCIAL}
            </li>
            <li>
              <strong>Correo electrónico:</strong>{" "}
              <a href={`mailto:${EMAIL_CONTACTO}`} className="underline">
                {EMAIL_CONTACTO}
              </a>
            </li>
            <li>
              <strong>Teléfono:</strong> {TELEFONO_CONTACTO}
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-base font-semibold text-ink-900">2. Objeto</h2>
          <p className="mt-2">
            El presente aviso legal regula el uso del sitio web mileventosgalicia.com, cuyo titular
            es {RAZON_SOCIAL} La navegación por el sitio atribuye la condición de usuario e implica
            la aceptación de las condiciones recogidas en este aviso legal.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-ink-900">
            3. Propiedad intelectual e industrial
          </h2>
          <p className="mt-2">
            Todos los contenidos del sitio web (textos, fotografías, gráficos, imágenes, logotipos y
            marcas) son titularidad de {RAZON_SOCIAL} o de terceros que han autorizado su uso, y
            están protegidos por la normativa de propiedad intelectual e industrial. Queda prohibida
            su reproducción, distribución o transformación sin autorización expresa del titular.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-ink-900">4. Responsabilidad</h2>
          <p className="mt-2">
            {RAZON_SOCIAL} no se hace responsable del mal uso que se realice de los contenidos de
            este sitio web, siendo responsabilidad exclusiva de la persona que accede a ellos o los
            utiliza.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-ink-900">5. Legislación aplicable</h2>
          <p className="mt-2">
            El presente aviso legal se rige por la legislación española. Para la resolución de
            cualquier controversia, las partes se someten a los juzgados y tribunales que
            correspondan conforme a derecho.
          </p>
        </div>
      </div>
    </section>
  );
}
