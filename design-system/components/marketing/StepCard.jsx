import React from "react";
import { Icon } from "../core/Icon.jsx";

/** Numbered "How it works" step card. */
export function StepCard({ number = "01", title, children, style, ...rest }) {
  return (
    <div style={{
      display: "flex", flexDirection: "column", gap: 14,
      padding: 24, borderRadius: "var(--radius-md)",
      background: "var(--surface-card)", border: "1px solid var(--border-subtle)", ...style,
    }} {...rest}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          width: 40, height: 40, borderRadius: "var(--radius-md)",
          background: "var(--rg-ice)", color: "var(--rg-navy)",
          fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16,
        }}>{number}</span>
        <h3 style={{ fontSize: 18, fontWeight: 700 }}>{title}</h3>
      </div>
      <p style={{ fontSize: 15, lineHeight: 1.55, color: "var(--text-body)" }}>{children}</p>
    </div>
  );
}

/** Small green check row for inclusion lists. */
export function CheckItem({ children, style, ...rest }) {
  return (
    <li style={{ display: "flex", alignItems: "center", gap: 10, listStyle: "none", fontSize: 15, color: "var(--text-strong)", ...style }} {...rest}>
      <Icon name="check-circle" size={20} color="var(--rg-success)" />
      <span>{children}</span>
    </li>
  );
}
