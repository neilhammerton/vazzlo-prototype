import React from "react";

const SIZES = {
  sm: { padding: "8px 16px", fontSize: 14, gap: 6, icon: 16 },
  md: { padding: "12px 22px", fontSize: 15, gap: 8, icon: 18 },
  lg: { padding: "15px 28px", fontSize: 16, gap: 9, icon: 18 },
};

const VARIANTS = {
  primary: { background: "var(--primary)", color: "var(--primary-ink)", border: "1px solid transparent", shadow: "var(--shadow-primary)" },
  accent: { background: "var(--rg-ice)", color: "var(--rg-navy)", border: "1px solid transparent", shadow: "var(--shadow-accent)" },
  secondary: { background: "var(--surface-card)", color: "var(--text-strong)", border: "1px solid var(--border-strong)", shadow: "none" },
  ghost: { background: "transparent", color: "var(--text-strong)", border: "1px solid transparent", shadow: "none" },
  dark: { background: "var(--rg-ink)", color: "#fff", border: "1px solid transparent", shadow: "none" },
};

export function Button({
  children, variant = "primary", size = "md", icon, iconRight,
  disabled = false, fullWidth = false, style, ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  return (
    <button
      disabled={disabled}
      style={{
        display: fullWidth ? "flex" : "inline-flex", width: fullWidth ? "100%" : "auto",
        alignItems: "center", justifyContent: "center", gap: s.gap,
        fontFamily: "var(--font-body)", fontWeight: 600, fontSize: s.fontSize, lineHeight: 1,
        padding: s.padding, borderRadius: "var(--radius-pill)",
        background: v.background, color: v.color, border: v.border, boxShadow: v.shadow,
        cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.5 : 1,
        transition: "transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out), background var(--dur) var(--ease-out), filter var(--dur) var(--ease-out)",
        whiteSpace: "nowrap", ...style,
      }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = "translateY(0) scale(0.98)"; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = ""; }}
      onMouseEnter={(e) => {
        if (disabled) return;
        e.currentTarget.style.filter = "brightness(1.06)";
        if (v.shadow !== "none") e.currentTarget.style.transform = "translateY(-1px)";
        if (variant === "secondary") e.currentTarget.style.background = "var(--surface-muted)";
        if (variant === "ghost") e.currentTarget.style.background = "var(--surface-muted)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.filter = ""; e.currentTarget.style.transform = "";
        if (variant === "secondary" || variant === "ghost") e.currentTarget.style.background = VARIANTS[variant].background;
      }}
      {...rest}
    >
      {icon ? <span style={{ display: "inline-flex", marginLeft: -2 }}>{icon}</span> : null}
      {children}
      {iconRight ? <span style={{ display: "inline-flex", marginRight: -2 }}>{iconRight}</span> : null}
    </button>
  );
}
