import { IconChevronDown } from "@/components/shared/icons";

export type PreguntaFrecuente = {
  pregunta: string;
  respuesta: string;
};

type FAQProps = {
  preguntas: PreguntaFrecuente[];
  titulo?: string;
};

// Bloque de preguntas frecuentes: acordeón VISIBLE + JSON-LD FAQPage generado de
// los mismos datos. Google exige que las Q&A del schema estén visibles en la
// página, por eso ambos salen del mismo array (nunca solo el JSON-LD).
export default function FAQ({ preguntas, titulo = "Preguntas frecuentes" }: FAQProps) {
  if (preguntas.length === 0) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: preguntas.map((p) => ({
      "@type": "Question",
      name: p.pregunta,
      acceptedAnswer: { "@type": "Answer", text: p.respuesta },
    })),
  };

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-bold text-atlantico-700">{titulo}</h2>
      <div className="mt-8 border-t border-sand-200">
        {preguntas.map((p) => (
          <details key={p.pregunta} className="group border-b border-sand-200 py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink-900">
              {p.pregunta}
              <IconChevronDown className="h-4 w-4 shrink-0 transition group-open:rotate-180" />
            </summary>
            <p className="mt-3 max-w-2xl leading-relaxed text-ink-600">{p.respuesta}</p>
          </details>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
