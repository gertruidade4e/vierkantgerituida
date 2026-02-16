import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Grace";
export const size = {
  width: 1200,
  height: 600,
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
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(120deg, #1b2e80, #111118 60%, #34205f)",
          color: "white",
          fontSize: 74,
          fontFamily: "sans-serif",
        }}
      >
        Grace
      </div>
    ),
    size,
  );
}

