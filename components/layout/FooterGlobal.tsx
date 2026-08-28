import Link from "next/link";
import TiraLogos from "@/components/shared/TiraLogos";
import { logosClientes } from "@/data/logos-clientes";
import { ecosistemaMarcas } from "@/data/ecosistema-marcas";

export default function FooterGlobal() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <TiraLogos logos={logosClientes} />
      <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-slate-600">
        <p className="font-semibold text-slate-900">
          Más de 15 años haciendo que las cosas sucedan.
        </p>
        <div className="mt-4 flex flex-wrap gap-4">
          {ecosistemaMarcas.map((marca) => (
            <a key={marca.nombre} href={marca.url}>
              {marca.nombre}
            </a>
          ))}
          <Link href="/celebraciones">Celebraciones</Link>
        </div>
      </div>
    </footer>
  );
}
