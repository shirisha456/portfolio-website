import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

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
          background: "#0b0b0a",
          borderRadius: 7,
          color: "#dd9a4d",
          fontSize: 18,
          fontWeight: 600,
        }}
      >
        SG
      </div>
    ),
    { ...size },
  );
}
