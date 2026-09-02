import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Icono para pantalla de inicio de iOS — mismo criterio provisional que
// app/icon.tsx (ver CLAUDE.md §11).
export default function AppleIcon() {
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
          fontSize: 96,
          fontWeight: 700,
        }}
      >
        M
      </div>
    ),
    { ...size }
  );
}
