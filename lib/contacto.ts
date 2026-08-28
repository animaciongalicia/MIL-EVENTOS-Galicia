export type DatosContacto = {
  nombre: string;
  email: string;
  mensaje: string;
};

// Punto único de acoplamiento con el proveedor externo (a definir — ver CLAUDE.md §11).
// Hoy solo registra el envío; cuando se decida el proveedor (email transaccional,
// Resend, Formspree...), esta función es la única que hay que tocar.
export async function enviarContacto(datos: DatosContacto): Promise<void> {
  console.log("[contacto] Nuevo mensaje recibido:", datos);
}
