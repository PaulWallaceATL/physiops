import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#dc2626",
          borderRadius: "36px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "64px",
          fontWeight: 700,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        PS
      </div>
    ),
    { ...size }
  );
}
