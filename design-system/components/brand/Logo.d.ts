import React from "react";

export type LogoTone = "light" | "dark" | "navy" | "white" | "mono";

export interface LogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** "full" = mark + wordmark; "mark" = genie mark only. Default "full". */
  variant?: "full" | "mark";
  /** Color treatment: light (mark+Genies navy, Reception sapphire, on light bg),
   *  dark (white + ice, on dark bg), navy (all navy), white (all white),
   *  mono (currentColor). Default "light". */
  tone?: LogoTone;
  /** Overall mark height in px (wordmark scales from it). Default 40. */
  size?: number;
}

export interface LogoMarkProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

/**
 * The Reception Genies brand lockup — the official mark + wordmark artwork,
 * recoloured per tone.
 * @dsCard group="Brand"
 * @startingPoint section="Brand" subtitle="Brand lockup — mark + wordmark" viewport="700x220"
 */
export function Logo(props: LogoProps): JSX.Element;
/** Genie mark only (exact vector). */
export function LogoMark(props: LogoMarkProps): JSX.Element;
