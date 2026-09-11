import React from "react";

export interface FooterLink { label: string; href?: string; }
export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  links?: FooterLink[];
  copyright?: string;
  tone?: "light" | "dark";
}
/**
 * Marketing footer with logo, legal links and copyright.
 * @dsCard group="Components"
 */
export function Footer(props: FooterProps): JSX.Element;
