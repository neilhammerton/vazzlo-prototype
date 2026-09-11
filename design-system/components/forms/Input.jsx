import React from "react";

/** Labelled text field matching the onboarding forms. */
export function Input({ label, hint, error, id, icon, style, wrapStyle, ...rest }) {
  const inputId = id || (label ? `in-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return (
    <label htmlFor={inputId} style={{ display: "flex", flexDirection: "column", gap: 6, ...wrapStyle }}>
      {label ? (
        <span style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: 14, color: "var(--text-strong)" }}>{label}</span>
      ) : null}
      <span style={{ position: "relative", display: "flex", alignItems: "center" }}>
        {icon ? <span style={{ position: "absolute", left: 12, display: "inline-flex", color: "var(--text-muted)", pointerEvents: "none" }}>{icon}</span> : null}
        <input
          id={inputId}
          style={{
            width: "100%", fontFamily: "var(--font-body)", fontSize: 15, color: "var(--text-strong)",
            padding: icon ? "11px 14px 11px 40px" : "11px 14px",
            background: "var(--surface-card)",
            border: `1px solid ${error ? "#E5484D" : "var(--border-strong)"}`,
            borderRadius: "var(--radius-sm)", outline: "none",
            transition: "border-color var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)",
            ...style,
          }}
          onFocus={(e) => { e.currentTarget.style.borderColor = "var(--rg-blue)"; e.currentTarget.style.boxShadow = "var(--focus-ring)"; }}
          onBlur={(e) => { e.currentTarget.style.borderColor = error ? "#E5484D" : "var(--border-strong)"; e.currentTarget.style.boxShadow = "none"; }}
          {...rest}
        />
      </span>
      {error ? <span style={{ fontSize: 13, color: "#E5484D" }}>{error}</span>
        : hint ? <span style={{ fontSize: 13, color: "var(--text-muted)" }}>{hint}</span> : null}
    </label>
  );
}
