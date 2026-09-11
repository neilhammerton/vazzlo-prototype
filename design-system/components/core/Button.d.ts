import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary = brand action (amethyst / sapphire in dark); accent = Neon Ice pill;
   *  secondary = outlined; ghost = text; dark = near-black. Default "primary". */
  variant?: "primary" | "accent" | "secondary" | "ghost" | "dark";
  /** Default "md". */
  size?: "sm" | "md" | "lg";
  /** Leading icon node (e.g. <Icon name="phone" size={18}/>). */
  icon?: React.ReactNode;
  /** Trailing icon node (e.g. <Icon name="arrow-right" size={18}/>). */
  iconRight?: React.ReactNode;
  /** Stretch to container width. */
  fullWidth?: boolean;
}

/**
 * Pill-shaped brand button. Primary is the confident amethyst CTA; accent is the
 * Neon Ice "Get Started" pill; secondary is the outlined "Listen to a demo".
 * @dsCard group="Components"
 * @startingPoint section="Core" subtitle="Pill buttons — primary, accent, secondary" viewport="700x160"
 */
export function Button(props: ButtonProps): JSX.Element;
