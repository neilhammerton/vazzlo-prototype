import React from "react";

export interface IconTileProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** ice = signature Neon Ice chip; ice-soft = pale wash; navy/sapphire = solid; muted. */
  tone?: "ice" | "ice-soft" | "navy" | "sapphire" | "muted";
  /** Square size in px. Default 44. */
  size?: number;
  /** Corner radius (CSS length). Default var(--radius-md). */
  radius?: string;
}

/**
 * Rounded-square container for a single icon glyph — the accent chips on
 * feature cards and step markers. Place an <Icon/> inside.
 * @dsCard group="Components"
 */
export function IconTile(props: IconTileProps): JSX.Element;
