import React from "react";

export interface StepCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Step number/label shown in the Neon Ice chip, e.g. "01". */
  number?: string;
  title: string;
}
export interface CheckItemProps extends React.LiHTMLAttributes<HTMLLIElement> {}

/**
 * Numbered step card for the "How it works" section.
 * @dsCard group="Components"
 */
export function StepCard(props: StepCardProps): JSX.Element;
/** Green check row for pricing / inclusion lists. Render inside a <ul>. */
export function CheckItem(props: CheckItemProps): JSX.Element;
