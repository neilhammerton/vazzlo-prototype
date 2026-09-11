import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** neutral/live = subtle wash + green dot; accent = Neon Ice; primary = sapphire. */
  variant?: "neutral" | "live" | "accent" | "primary";
  /** Show the leading status dot. Default true. */
  dot?: boolean;
}

/**
 * Compact status pill used for the live-receptionist label and small tags.
 * @dsCard group="Components"
 */
export function Badge(props: BadgeProps): JSX.Element;
