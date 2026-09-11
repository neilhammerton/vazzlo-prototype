import React from "react";

const VARIANTS = {
  neutral: { bg: "var(--surface-muted)", fg: "var(--text-strong)", dot: "var(--rg-success)" },
  live: { bg: "var(--surface-muted)", fg: "var(--text-strong)", dot: "var(--rg-success)" },
  accent: { bg: "var(--surface-accent-soft)", fg: "var(--accent-ink)", dot: "var(--rg-ice)" },
  primary: { bg: "rgba(90,105,255,0.12)", fg: "var(--rg-sapphire)", dot: "var(--rg-sapphire)" },
};

/** Small status pill — e.g. "Grace is live now" with a pulsing green dot. */
export function Badge({ children, variant = "neutral", dot = true, style, ...rest }) {
  const v = VARIANTS[variant] || VARIANTS.neutral;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 7,
      padding: "5px 12px 5px 10px", borderRadius: "var(--radius-pill)",
      background: v.bg, color: v.fg,
      fontFamily: "var(--font-body)", fontWeight: 500, fontSize: 13, lineHeight: 1.4,
      ...style,
    }} {...rest}>
      {dot ? <span style={{ width: 8, height: 8, borderRadius: "50%", background: v.dot, boxShadow: `0 0 0 3px color-mix(in srgb, ${v.dot} 22%, transparent)` }} /> : null}
      {children}
    </span>
  );
}
