import React from "react";

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
  /** Title scale. Default "h1". */
  size?: "display" | "h1" | "h2";
}
/**
 * Centered (or left) section heading block.
 * @dsCard group="Components"
 */
export function SectionHeading(props: SectionHeadingProps): JSX.Element;
