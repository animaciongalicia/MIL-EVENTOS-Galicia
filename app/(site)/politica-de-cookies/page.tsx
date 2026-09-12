import type { Metadata } from "next";
import { RAZON_SOCIAL, CIF, EMAIL_CONTACTO } from "@/data/contacto";

export const metadata: Metadata = {
  title: "Política de Cookies | Mil Eventos Galicia",
  description: "Qué cookies usa mileventosgalicia.com, para qué, y cómo gestionarlas.",
};

export default function PoliticaDeCookiesPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 text-ink-700">
      <h1 className="text-2xl font-bold text-ink-900">Política de cookies</h1>

      <div className="mt-8 space-y-6 text-sm leading-relaxed">
        <div>
          <h2 className="text-base font-semibold text-ink-900">1. ¿Qué son las cookies?</h2>
          <p className="mt-2">
            Una cookie es un pequeño archivo que se descarga en tu dispositivo al visitar una web y
            que permite, entre otras cosas, recordar información sobre tu navegación. Esta política
            explica qué cookies utiliza el sitio mileventosgalicia.com, titularidad de {RAZON_SOCIAL}{" "}
            (CIF {CIF}), en cumplimiento del artículo 22.2 de la Ley 34/2002 (LSSI-CE) y del
            Reglamento (UE) 2016/679 (RGPD).
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-ink-900">2. Consentimiento</h2>
          <p className="mt-2">
            Al entrar en la web se muestra un aviso que te permite <strong>aceptar</strong> o{" "}
            <strong>rechazar</strong> las cookies no esenciales. Mientras no aceptes, no se instala
            ninguna cookie de analítica ni de terceros. Puedes cambiar tu decisión en cualquier
            momento borrando las cookies y los datos del sitio en tu navegador.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-ink-900">3. Cookies que utilizamos</h2>
          <p className="mt-2">
            <strong>Cookies técnicas o necesarias.</strong> El sitio es estático y no requiere inicio
            de sesión. El formulario de contacto no envía datos a ningún servidor: abre tu propio
            cliente de correo con el mensaje ya redactado, por lo que no instala cookies. Guardamos
            únicamente en tu navegador (localStorage) tu decisión sobre las cookies, para no volver a
            preguntártelo.
          </p>
          <p className="mt-3">
            <strong>Cookies analíticas (solo si las aceptas).</strong> Usamos Google Analytics 4, de
            Google Ireland Ltd., para entender de forma agregada y anónima cómo se usa la web
            (páginas más vistas, dispositivos, procedencia). Instala cookies como <code>_ga</code> y{" "}
            <code>_ga_&lt;id&gt;</code>, con una duración de hasta 2 años. La IP se recoge de forma
            anonimizada. Estos datos se tratan por Google como encargado; puede implicar
            transferencias internacionales amparadas en las garantías del RGPD. Más información en{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-atlantico-700 underline"
            >
              la política de privacidad de Google
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-ink-900">4. Cómo gestionar o desactivar las cookies</h2>
          <p className="mt-2">
            Puedes rechazar las cookies desde el aviso inicial, o eliminarlas y bloquearlas desde la
            configuración de tu navegador (Chrome, Firefox, Safari, Edge…). También puedes instalar
            el{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-atlantico-700 underline"
            >
              complemento de inhabilitación de Google Analytics
            </a>
            . Rechazar las cookies analíticas no afecta al funcionamiento de la web.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-ink-900">5. Cambios y contacto</h2>
          <p className="mt-2">
            Esta política puede actualizarse si cambian las cookies utilizadas o la normativa
            aplicable. Para cualquier duda, escríbenos a{" "}
            <a href={`mailto:${EMAIL_CONTACTO}`} className="text-atlantico-700 underline">
              {EMAIL_CONTACTO}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
