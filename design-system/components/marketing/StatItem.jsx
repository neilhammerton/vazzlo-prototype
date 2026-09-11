import React from "react";

/** Big stat with a two-line supporting label, as in the hero stats bar. */
export function StatItem({ value, label, style, ...rest }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, ...style }} {...rest}>
      <span style={{
        fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 44, lineHeight: 1,
        color: "var(--text-strong)", letterSpacing: "-0.02em",
      }}>{value}</span>
      {label ? (
        <span style={{ fontSize: 13, lineHeight: 1.25, color: "var(--text-muted)", maxWidth: 130 }}>{label}</span>
      ) : null}
    </div>
  );
}
