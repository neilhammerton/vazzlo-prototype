import React from "react";

/** Centered section heading — title + optional eyebrow and subtitle. */
export function SectionHeading({ eyebrow, title, subtitle, align = "center", size = "h1", style, ...rest }) {
  const fs = size === "display" ? "var(--text-display)" : size === "h2" ? "var(--text-h2)" : "var(--text-h1)";
  return (
    <div style={{
      display: "flex", flexDirection: "column", gap: 12,
      alignItems: align === "center" ? "center" : "flex-start",
      textAlign: align, maxWidth: 620, marginInline: align === "center" ? "auto" : 0, ...style,
    }} {...rest}>
      {eyebrow ? <span className="rg-eyebrow">{eyebrow}</span> : null}
      <h2 style={{ fontSize: fs, fontWeight: 700 }}>{title}</h2>
      {subtitle ? <p style={{ fontSize: 17, lineHeight: 1.55, color: "var(--text-body)" }}>{subtitle}</p> : null}
    </div>
  );
}
