import React from "react";

export interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Icon glyph name (see Icon). Default "phone". */
  icon?: string;
  title: string;
  /** Icon chip tone. Default "ice". */
  tone?: "ice" | "ice-soft" | "navy" | "sapphire" | "muted";
}

/**
 * Feature card with a Neon Ice icon chip, title and body — the "What your AI
 * receptionist handles" grid.
 * @dsCard group="Components"
 * @startingPoint section="Marketing" subtitle="Feature card with icon chip" viewport="700x260"
 */
export function FeatureCard(props: FeatureCardProps): JSX.Element;
