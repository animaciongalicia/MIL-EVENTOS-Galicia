import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import FooterGlobal from "@/components/layout/FooterGlobal";
import "../globals.css";

export const metadata: Metadata = {
  title: "Mil Eventos Galicia",
  description: "Eventos para empresas en Galicia: team building, incentivos, jornadas outdoor, congresos y convenciones.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
        <FooterGlobal />
      </body>
    </html>
  );
}
