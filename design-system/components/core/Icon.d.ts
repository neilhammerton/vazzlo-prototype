import React from "react";

export type IconName =
  | "phone" | "phone-call" | "calendar" | "message" | "building" | "help"
  | "users" | "check" | "check-circle" | "arrow-right" | "chevron-right"
  | "mic" | "sparkles" | "upload" | "play" | "google";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  /** Glyph name from the Reception Genies icon set (Lucide geometry). */
  name?: IconName;
  /** Pixel size (width & height). Default 24. */
  size?: number;
  /** Stroke width for line glyphs. Default 2. */
  strokeWidth?: number;
  /** Stroke color; defaults to currentColor so it inherits text color. */
  color?: string;
}

/** Inline line-icon set (24×24, 2px round stroke) used across the brand. */
export function Icon(props: IconProps): JSX.Element;
