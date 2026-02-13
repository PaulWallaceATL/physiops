import { ImageResponse } from "next/og";

export const alt = "Physio PS – Physiotherapy Products & Specialties";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0a",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "24px",
        }}
      >
        <div
          style={{
            width: "160px",
            height: "160px",
            background: "#dc2626",
            borderRadius: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "56px",
            fontWeight: 700,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          PS
        </div>
        <div
          style={{
            color: "white",
            fontSize: "48px",
            fontWeight: 600,
            fontFamily: "system-ui, sans-serif",
            letterSpacing: "-0.02em",
          }}
        >
          Physio PS
        </div>
        <div
          style={{
            color: "#a3a3a3",
            fontSize: "24px",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Physiotherapy Products & Specialties
        </div>
      </div>
    ),
    { ...size }
  );
}
