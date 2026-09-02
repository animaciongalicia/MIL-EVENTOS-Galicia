import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Favicon provisional generado por código (monograma "M" sobre atlantico-700)
// mientras no hay logo real del cliente en el repo — sustituir por el logo
// real en cuanto esté disponible como archivo (ver CLAUDE.md §11).
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1E4A47",
          color: "#F8F5EF",
          fontSize: 20,
          fontWeight: 700,
        }}
      >
        M
      </div>
    ),
    { ...size }
  );
}
