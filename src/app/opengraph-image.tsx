import { ImageResponse } from "next/og"
import { STATS } from "@/lib/stats"

export const runtime = "edge"
export const alt = "Click Dudes — Turning Clicks Into Revenue"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #F8FAFF 0%, #EEF2FF 50%, #F8FAFF 100%)",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow orbs */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(139,92,246,0.18) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            right: "-80px",
            width: "400px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(103,232,249,0.14) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />

        {/* Logo / brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "14px",
              background: "linear-gradient(135deg, #8B5CF6, #60A5FA)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ color: "white", fontSize: "24px", fontWeight: "900" }}>C</div>
          </div>
          <span
            style={{
              fontSize: "32px",
              fontWeight: "800",
              background: "linear-gradient(135deg, #8B5CF6, #60A5FA)",
              backgroundClip: "text",
              color: "transparent",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Click Dudes
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: "64px",
            fontWeight: "900",
            color: "#07112F",
            textAlign: "center",
            lineHeight: 1.1,
            margin: "0 80px 20px",
            letterSpacing: "-0.03em",
          }}
        >
          Turning Clicks{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #8B5CF6, #60A5FA)",
              backgroundClip: "text",
              color: "transparent",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Into Revenue
          </span>
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontSize: "24px",
            color: "#374151",
            textAlign: "center",
            margin: "0 120px 48px",
            lineHeight: 1.5,
            fontWeight: "400",
          }}
        >
          AI-powered monetization for web, app &amp; CTV publishers
        </p>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: "40px",
            background: "rgba(255,255,255,0.80)",
            border: "1px solid rgba(139,92,246,0.15)",
            borderRadius: "20px",
            padding: "24px 48px",
            backdropFilter: "blur(20px)",
          }}
        >
          {[
            [STATS.publishers, "Active Publishers"],
            [STATS.rpmLift, "Avg RPM Uplift"],
            ["GCPP", "Google Certified"],
            [STATS.goLive, "Go-Live Time"],
          ].map(([value, label]) => (
            <div key={label} style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: "4px" }}>
              <span
                style={{
                  fontSize: "28px",
                  fontWeight: "900",
                  background: "linear-gradient(135deg, #8B5CF6, #60A5FA)",
                  backgroundClip: "text",
                  color: "transparent",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {value}
              </span>
              <span style={{ fontSize: "14px", color: "#9CA3AF", fontWeight: "500" }}>{label}</span>
            </div>
          ))}
        </div>

        {/* URL bar */}
        <div style={{ position: "absolute", bottom: "32px", color: "#9CA3AF", fontSize: "18px" }}>
          clickdudes.com
        </div>
      </div>
    ),
    { ...size }
  )
}
