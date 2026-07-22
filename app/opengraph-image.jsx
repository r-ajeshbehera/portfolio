import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Rajesh Behera - Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Next.js special file convention: generates the default og:image / twitter
// card image for any route that doesn't define its own opengraph-image.jsx
// (blog and project detail pages override this with their own dynamic
// version). Rendered as an actual PNG via next/og -- no static image asset
// needed.
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #1f2937, #111827)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 120,
            height: 120,
            borderRadius: 28,
            background: "linear-gradient(145deg, #60a5fa, #2563eb)",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 56,
            fontWeight: 700,
            marginBottom: 36,
          }}
        >
          RB
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 700 }}>
          Rajesh Behera
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#9ca3af",
            marginTop: 16,
          }}
        >
          Aspiring Software Engineer
        </div>
      </div>
    ),
    { ...size }
  );
}
