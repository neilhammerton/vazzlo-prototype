import React from "react";
import { Logo } from "../brand/Logo.jsx";

/** Marketing footer — logo, legal links, copyright. */
export function Footer({
  links = [{ label: "Privacy Policy", href: "#" }, { label: "Terms of Service", href: "#" }, { label: "Contact Support", href: "#" }],
  copyright = "© 2026 Reception Genies Ltd. All rights reserved.",
  tone = "light", style, ...rest
}) {
  const dark = tone === "dark";
  return (
    <footer style={{
      display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20,
      padding: "28px 40px", background: dark ? "var(--rg-navy)" : "var(--surface-page)",
      borderTop: `1px solid ${dark ? "rgba(255,255,255,0.08)" : "var(--border-subtle)"}`,
      ...style,
    }} {...rest}>
      <Logo size={30} tone={dark ? "dark" : "light"} />
      <nav style={{ display: "flex", gap: 28 }}>
        {links.map((l) => (
          <a key={l.label} href={l.href} style={{ fontFamily: "var(--font-body)", fontSize: 14, color: dark ? "rgba(255,255,255,0.72)" : "var(--text-body)", textDecoration: "none" }}>{l.label}</a>
        ))}
      </nav>
      <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-muted)" }}>{copyright}</span>
    </footer>
  );
}
