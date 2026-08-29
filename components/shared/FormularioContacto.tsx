"use client";

import { useState, type FormEvent } from "react";
import { EMAIL_CONTACTO } from "@/data/contacto";

type FormularioContactoProps = {
  copyEnvio?: string;
  variante?: "corporativa" | "celebraciones";
};

// Sin backend: construye un mailto: con los datos ya redactados y lo abre en
// el cliente de correo del usuario. Lo envía él, desde su propia cuenta, con
// copia automática para él y llegada directa a info@mileventosgalicia.com.
export default function FormularioContacto({
  copyEnvio = "Enviar",
  variante = "corporativa",
}: FormularioContactoProps) {
  const esCelebraciones = variante === "celebraciones";
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const nombre = String(formData.get("nombre") ?? "");
    const telefono = String(formData.get("telefono") ?? "");
    const email = String(formData.get("email") ?? "");
    const mensaje = String(formData.get("mensaje") ?? "");

    const asunto = `Presupuesto / contacto — ${nombre}`;
    const cuerpo = [
      `Nombre: ${nombre}`,
      `Email: ${email}`,
      telefono && `Teléfono: ${telefono}`,
      "",
      mensaje,
    ]
      .filter(Boolean)
      .join("\n");

    const mailtoUrl = `mailto:${EMAIL_CONTACTO}?subject=${encodeURIComponent(
      asunto
    )}&body=${encodeURIComponent(cuerpo)}`;

    window.location.href = mailtoUrl;
    setEnviado(true);
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-xl space-y-4 px-6 py-12">
      <div>
        <label htmlFor="nombre" className="block text-sm font-medium">
          Nombre
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          className="mt-1 w-full rounded-md border border-sand-300 px-3 py-2"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-md border border-sand-300 px-3 py-2"
        />
      </div>
      <div>
        <label htmlFor="telefono" className="block text-sm font-medium">
          Teléfono <span className="text-ink-500">(opcional)</span>
        </label>
        <input
          id="telefono"
          name="telefono"
          type="tel"
          className="mt-1 w-full rounded-md border border-sand-300 px-3 py-2"
        />
      </div>
      <div>
        <label htmlFor="mensaje" className="block text-sm font-medium">
          Cuéntanos tu evento
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={5}
          required
          className="mt-1 w-full rounded-md border border-sand-300 px-3 py-2"
        />
      </div>
      <button
        type="submit"
        className={
          esCelebraciones
            ? "rounded-full bg-terracota-600 px-6 py-3 font-semibold text-white transition hover:bg-terracota-900"
            : "rounded-full bg-atlantico-700 px-6 py-3 font-semibold text-white transition hover:bg-atlantico-800"
        }
      >
        {copyEnvio}
      </button>
      {enviado && (
        <p className="text-sm text-ink-600">
          Se abre tu app de correo con el mensaje ya redactado — solo tienes que darle a enviar.
        </p>
      )}
    </form>
  );
}
