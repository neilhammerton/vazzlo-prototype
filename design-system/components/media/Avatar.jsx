import React from "react";

/** Circular receptionist avatar (illustrated genies) with optional brand ring + live dot. */
export function Avatar({ src, alt = "Receptionist", size = 72, ring = true, status = false, style, ...rest }) {
  return (
    <span style={{ position: "relative", display: "inline-block", width: size, height: size, flexShrink: 0, ...style }} {...rest}>
      <img src={src} alt={alt} width={size} height={size}
        style={{
          width: size, height: size, borderRadius: "50%", objectFit: "cover", display: "block",
          background: "var(--surface-muted)",
          boxShadow: ring ? "0 0 0 3px var(--surface-page), 0 0 0 5px var(--rg-ice)" : "none",
        }} />
      {status ? (
        <span style={{
          position: "absolute", right: size * 0.04, bottom: size * 0.04,
          width: size * 0.2, height: size * 0.2, borderRadius: "50%",
          background: "var(--rg-success)", border: "2px solid var(--surface-page)",
        }} />
      ) : null}
    </span>
  );
}
