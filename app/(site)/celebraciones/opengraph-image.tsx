import { ImageResponse } from "next/og";

export const alt = "Celebraciones en Galicia — Mil Eventos Galicia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Variante terracota de la tarjeta OG, propia del clúster /celebraciones —
// paleta más cálida y festiva que la corporativa (CLAUDE.md §8/§12).
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
          background: "#7A3A1F",
        }}
      >
        <div
          style={{
            fontSize: 30,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#EDD3B8",
          }}
        >
          Mil Eventos Galicia
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 58,
            fontWeight: 700,
            lineHeight: 1.15,
            color: "#FBF3EA",
            maxWidth: 980,
          }}
        >
          Celebraciones en Galicia, para empresas y particulares
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 30,
            color: "#F6E7D6",
          }}
        >
          Cenas de empresa · Cumpleaños · DJs, cómicos y espectáculo
        </div>
      </div>
    ),
    { ...size }
  );
}
