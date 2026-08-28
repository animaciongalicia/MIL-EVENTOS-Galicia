import Image from "next/image";
import type { LogoCliente } from "@/data/logos-clientes";

type TiraLogosProps = {
  logos: LogoCliente[];
};

export default function TiraLogos({ logos }: TiraLogosProps) {
  if (logos.length === 0) return null;

  return (
    <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-8 px-6 py-8 opacity-80">
      {logos.map((logo) => (
        <Image key={logo.nombre} src={logo.imagen} alt={logo.nombre} width={120} height={48} />
      ))}
    </div>
  );
}
