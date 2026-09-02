import { ImageResponse } from "next/og";

export const alt = "Mil Eventos Galicia — Eventos de empresa en Galicia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Tarjeta OG genérica compartida por todo el sitio corporativo (site-wide,
// no por página) hasta que haya fotografía real que darle protagonismo —
// mientras tanto, mejor una tarjeta de marca que ninguna preview al
// compartir un enlace. Colores de tailwind.config.ts (atlantico/cream).
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background: "#1E4A47",
        }}
      >
        <div
          style={{
            fontSize: 30,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#B3A28A",
          }}
        >
          Mil Eventos Galicia
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 62,
            fontWeight: 700,
            lineHeight: 1.15,
            color: "#F8F5EF",
            maxWidth: 980,
          }}
        >
          Más de 15 años haciendo que las cosas sucedan.
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 30,
            color: "#E8E0D2",
          }}
        >
          Team building · Incentivos · Congresos · Espacios · Eventos en Galicia
        </div>
      </div>
    ),
    { ...size }
  );
}
