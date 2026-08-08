import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0b0a",
          padding: "80px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, #201d16 1px, transparent 1px), linear-gradient(to bottom, #201d16 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#dd9a4d",
              display: "flex",
            }}
          />
          <span style={{ color: "#a6a299", fontSize: 26, letterSpacing: 4, textTransform: "uppercase" }}>
            Software Engineer
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ color: "#f2f0e9", fontSize: 108, fontWeight: 600, lineHeight: 1.05 }}>
            Shirisha Gujja
          </span>
          <span style={{ color: "#dd9a4d", fontSize: 34, marginTop: 22, fontStyle: "italic" }}>
            Building reliable backend systems and AI-powered products.
          </span>
        </div>

        <div style={{ display: "flex", color: "#6b6862", fontSize: 22, letterSpacing: 2 }}>
          FastAPI · Next.js · PostgreSQL · AWS · LLM Tooling
        </div>
      </div>
    ),
    { ...size },
  );
}
