import { ImageResponse } from "next/og";

export const alt = "BazaarBraker — Compare & buy insurance in India";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #0a0b0d 0%, #1a1d24 55%, #003ecc 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 36,
            fontWeight: 600,
            letterSpacing: "-0.02em",
          }}
        >
          bazaar
          <span style={{ color: "#7eb0ff" }}>braker</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              maxWidth: 900,
            }}
          >
            Compare insurance with clarity.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "rgba(255,255,255,0.72)",
              maxWidth: 760,
              lineHeight: 1.35,
            }}
          >
            Health, term, motor, travel & investment — from IRDAI partners,
            side by side.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "rgba(255,255,255,0.55)",
          }}
        >
          www.bazaarbraker.com
        </div>
      </div>
    ),
    { ...size },
  );
}
