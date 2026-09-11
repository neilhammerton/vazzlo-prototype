import React from "react";
import { IconTile } from "../core/IconTile.jsx";
import { Icon } from "../core/Icon.jsx";

/** Feature card — Neon Ice icon chip, title, supporting copy. */
export function FeatureCard({ icon = "phone", title, children, tone = "ice", style, ...rest }) {
  return (
    <div style={{
      display: "flex", flexDirection: "column", gap: 16,
      padding: 24, borderRadius: "var(--radius-md)",
      background: "var(--surface-card)", border: "1px solid var(--border-subtle)",
      transition: "transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out)",
      ...style,
    }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "var(--shadow-card)"; e.currentTarget.style.borderColor = "transparent"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "var(--border-subtle)"; }}
      {...rest}
    >
      <IconTile tone={tone} size={44}><Icon name={icon} size={22} /></IconTile>
      <h3 style={{ fontSize: 18, fontWeight: 700 }}>{title}</h3>
      <p style={{ fontSize: 15, lineHeight: 1.55, color: "var(--text-body)" }}>{children}</p>
    </div>
  );
}
