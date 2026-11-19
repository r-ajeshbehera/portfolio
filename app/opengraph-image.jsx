import { ImageResponse } from "next/og";
import { site } from "../data/site";

export const alt = site.brand;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "linear-gradient(135deg,#0A1022 0%,#16224A 60%,#2B3FD6 130%)", color: "#fff", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 64, height: 64, borderRadius: 16, background: "#4F6BFF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, fontWeight: 800 }}>RB</div>
          <div style={{ fontSize: 30, fontWeight: 700 }}>{site.brand}</div>
        </div>
        <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.08, maxWidth: 980 }}>Websites, SEO & automation that grow your business.</div>
        <div style={{ fontSize: 28, color: "#B9C3E6" }}>Bhubaneswar, Odisha · Serving businesses across India</div>
      </div>
    ),
    size
  );
}
