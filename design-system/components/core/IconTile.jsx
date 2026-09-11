import React from "react";

const TONES = {
  ice: { bg: "var(--rg-ice)", fg: "var(--rg-navy)" },
  "ice-soft": { bg: "var(--surface-accent-soft)", fg: "var(--rg-navy)" },
  navy: { bg: "var(--rg-navy)", fg: "#fff" },
  sapphire: { bg: "var(--rg-sapphire)", fg: "#fff" },
  muted: { bg: "var(--surface-muted)", fg: "var(--text-strong)" },
};

/** Rounded-square icon tile — the Neon Ice glyph chips used in feature cards. */
export function IconTile({ children, tone = "ice", size = 44, radius = "var(--radius-md)", style, ...rest }) {
  const t = TONES[tone] || TONES.ice;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      width: size, height: size, borderRadius: radius,
      background: t.bg, color: t.fg, flexShrink: 0, ...style,
    }} {...rest}>
      {children}
    </span>
  );
}
