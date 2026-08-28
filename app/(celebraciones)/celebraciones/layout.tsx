import type { Metadata } from "next";
import FooterCelebraciones from "@/components/celebraciones/FooterCelebraciones";
import "../../globals.css";

// Layout raíz propio: NO reutiliza <Header>/<FooterGlobal> corporativos (CLAUDE.md §8).
export const metadata: Metadata = {
  title: "Celebraciones | Mil Eventos Galicia",
  description: "Cumpleaños de adultos, fincas y eventos especiales en Galicia.",
};

export default function CelebracionesLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        {children}
        <FooterCelebraciones />
      </body>
    </html>
  );
}
