import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Grace - Production Discord Operations";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "70px",
          background: "radial-gradient(circle at 20% 20%, #253688, #0b0b0f 60%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 82, lineHeight: 1.05 }}>Grace</div>
        <div style={{ marginTop: 16, fontSize: 34, opacity: 0.88 }}>
          Reliable Discord moderation and automation
        </div>
      </div>
    ),
    size,
  );
}

