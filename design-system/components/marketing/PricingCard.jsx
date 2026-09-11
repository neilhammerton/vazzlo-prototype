import React from "react";
import { Button } from "../core/Button.jsx";
import { CheckItem } from "./StepCard.jsx";

/** Two-panel pricing card: plan + price + CTA beside an inclusions checklist. */
export function PricingCard({
  plan = "Reception Genies", description, price = "£3.25", period = "/day",
  priceNote, ctaLabel = "Get started today", onCta, footnote,
  includesTitle = "Everything included:", features = [], style, ...rest
}) {
  return (
    <div style={{
      display: "grid", gridTemplateColumns: "1fr 1fr", overflow: "hidden",
      borderRadius: "var(--radius-lg)", border: "1px solid var(--border-subtle)",
      background: "var(--surface-card)", boxShadow: "var(--shadow-card)",
      maxWidth: 760, ...style,
    }} {...rest}>
      <div style={{ display: "flex", flexDirection: "column", gap: 18, padding: 36 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <h3 style={{ fontSize: 22, fontWeight: 700 }}>{plan}</h3>
          {description ? <p style={{ fontSize: 15, color: "var(--text-body)", lineHeight: 1.5 }}>{description}</p> : null}
        </div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
          <span style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 48, color: "var(--text-strong)", letterSpacing: "-0.02em" }}>{price}</span>
          <span style={{ fontSize: 16, color: "var(--text-muted)" }}>{period}</span>
        </div>
        {priceNote ? <p style={{ fontSize: 13, color: "var(--text-muted)", marginTop: -8 }}>{priceNote}</p> : null}
        <Button variant="primary" size="lg" fullWidth onClick={onCta}>{ctaLabel}</Button>
        {footnote ? <p style={{ fontSize: 13, color: "var(--text-muted)", textAlign: "center", lineHeight: 1.5 }}>{footnote}</p> : null}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14, padding: 36, background: "var(--surface-muted)" }}>
        <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 15, color: "var(--text-strong)" }}>{includesTitle}</span>
        <ul style={{ display: "flex", flexDirection: "column", gap: 12, margin: 0, padding: 0 }}>
          {features.map((f, i) => <CheckItem key={i}>{f}</CheckItem>)}
        </ul>
      </div>
    </div>
  );
}
