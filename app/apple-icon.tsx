import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Icono para pantalla de inicio de iOS — colores de marca: "M" naranja
// (#F4A037) sobre negro, como el lockup oscuro del logo.
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
          background: "#141414",
          color: "#F4A037",
          fontSize: 110,
          fontWeight: 800,
        }}
      >
        M
      </div>
    ),
    { ...size }
  );
}
