import { NextResponse } from "next/server";
import { enviarContacto, type DatosContacto } from "@/lib/contacto";

export async function POST(request: Request) {
  const datos = (await request.json()) as Partial<DatosContacto>;

  if (!datos.nombre || !datos.email || !datos.mensaje) {
    return NextResponse.json({ error: "Faltan campos obligatorios." }, { status: 400 });
  }

  await enviarContacto(datos as DatosContacto);

  return NextResponse.json({ ok: true });
}
