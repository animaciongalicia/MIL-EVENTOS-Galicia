import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Favicon con los colores de la marca real: "M" naranja (#F4A037) sobre negro,
// haciendo eco del lockup oscuro del logo (ver data/logos / public/images).
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
          background: "#141414",
          color: "#F4A037",
          fontSize: 24,
          fontWeight: 800,
        }}
      >
        M
      </div>
    ),
    { ...size }
  );
}
