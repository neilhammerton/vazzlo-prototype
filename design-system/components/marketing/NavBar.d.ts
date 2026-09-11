import React from "react";

export interface NavLink { label: string; href?: string; }
export interface NavBarProps extends React.HTMLAttributes<HTMLElement> {
  links?: NavLink[];
  /** Label of the currently-active link. */
  active?: string;
  /** light (on white) or dark (on navy). Default "light". */
  tone?: "light" | "dark";
  signInLabel?: string;
  ctaLabel?: string;
  onSignIn?: (e: React.MouseEvent) => void;
  onGetStarted?: (e: React.MouseEvent) => void;
}
/**
 * Marketing site header with logo, links and Neon Ice Get Started pill.
 * @dsCard group="Components"
 * @startingPoint section="Marketing" subtitle="Marketing nav bar" viewport="900x80"
 */
export function NavBar(props: NavBarProps): JSX.Element;
