import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Rajesh Behera Digital Studio";

export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#0B1F33", color: "#fff", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 72, height: 72, borderRadius: 16, background: "#2563EB", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, fontWeight: 800 }}>RB</div>
          <div style={{ fontSize: 34, fontWeight: 700 }}>Rajesh Behera Digital Studio</div>
        </div>
        <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.1, maxWidth: 950 }}>Websites and automation that help your business grow.</div>
        <div style={{ fontSize: 28, color: "#94A3B8" }}>Bhubaneswar, Odisha · rajeshbehera.vercel.app</div>
      </div>
    ),
    size
  );
}
