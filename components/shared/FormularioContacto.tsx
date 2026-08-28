"use client";

import { useState, type FormEvent } from "react";

type FormularioContactoProps = {
  copyEnvio?: string;
};

type EstadoEnvio = "idle" | "enviando" | "ok" | "error";

export default function FormularioContacto({
  copyEnvio = "Enviar",
}: FormularioContactoProps) {
  const [estado, setEstado] = useState<EstadoEnvio>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setEstado("enviando");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const respuesta = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setEstado(respuesta.ok ? "ok" : "error");
    } catch {
      setEstado("error");
    }
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
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
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
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
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
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
        />
      </div>
      <button
        type="submit"
        disabled={estado === "enviando"}
        className="rounded-full bg-slate-900 px-6 py-3 font-semibold text-white disabled:opacity-60"
      >
        {estado === "enviando" ? "Enviando..." : copyEnvio}
      </button>
      {estado === "ok" && (
        <p className="text-sm text-green-700">Mensaje enviado. Te contestamos en breve.</p>
      )}
      {estado === "error" && (
        <p className="text-sm text-red-700">Algo ha fallado. Inténtalo de nuevo.</p>
      )}
    </form>
  );
}
