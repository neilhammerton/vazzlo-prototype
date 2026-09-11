import React from "react";
import { Logo } from "../brand/Logo.jsx";
import { Button } from "../core/Button.jsx";

/** Marketing top navigation — logo, center links, sign-in + Get Started. */
export function NavBar({
  links = [{ label: "Features", href: "#" }, { label: "Pricing", href: "#" }, { label: "Affiliate Program", href: "#" }],
  active, tone = "light", signInLabel = "Sign in", ctaLabel = "Get Started",
  onSignIn, onGetStarted, style, ...rest
}) {
  const dark = tone === "dark";
  return (
    <header style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "16px 40px", background: dark ? "var(--rg-navy)" : "var(--surface-page)",
      borderBottom: `1px solid ${dark ? "rgba(255,255,255,0.08)" : "var(--border-subtle)"}`,
      ...style,
    }} {...rest}>
      <Logo size={34} tone={dark ? "dark" : "light"} />
      <nav style={{ display: "flex", gap: 34 }}>
        {links.map((l) => (
          <a key={l.label} href={l.href}
            style={{
              fontFamily: "var(--font-body)", fontSize: 15, fontWeight: 500,
              color: l.label === active ? (dark ? "#fff" : "var(--text-strong)") : (dark ? "rgba(255,255,255,0.72)" : "var(--text-body)"),
              textDecoration: "none",
            }}>{l.label}</a>
        ))}
      </nav>
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <a href="#" onClick={onSignIn} style={{ fontFamily: "var(--font-body)", fontSize: 15, fontWeight: 600, color: dark ? "#fff" : "var(--text-strong)", textDecoration: "none" }}>{signInLabel}</a>
        <Button variant="accent" size="sm" onClick={onGetStarted}>{ctaLabel}</Button>
      </div>
    </header>
  );
}
