import React from "react";

export interface StatItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The headline figure, e.g. "24/7", "<5 min", "47%". */
  value: React.ReactNode;
  /** Two-line supporting label to the right. */
  label?: React.ReactNode;
}
/**
 * Large hero stat with supporting label.
 * @dsCard group="Components"
 */
export function StatItem(props: StatItemProps): JSX.Element;
