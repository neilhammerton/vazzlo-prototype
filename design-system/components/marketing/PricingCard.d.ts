import React from "react";

export interface PricingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  plan?: string;
  description?: string;
  /** Headline price, e.g. "£3.25". */
  price?: string;
  /** Period suffix, e.g. "/day". */
  period?: string;
  /** Small note under the price (VAT / billing terms). */
  priceNote?: string;
  ctaLabel?: string;
  onCta?: () => void;
  /** Reassurance line under the CTA. */
  footnote?: string;
  includesTitle?: string;
  /** Inclusion bullet strings shown with green checks. */
  features?: string[];
}
/**
 * Single-plan pricing card: plan + price + CTA beside an inclusions list.
 * @dsCard group="Components"
 * @startingPoint section="Marketing" subtitle="Single-plan pricing card" viewport="800x420"
 */
export function PricingCard(props: PricingCardProps): JSX.Element;
