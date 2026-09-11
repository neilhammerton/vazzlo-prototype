import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Field label rendered above the control. */
  label?: string;
  /** Helper text below the field. */
  hint?: string;
  /** Error message — turns the border red and replaces the hint. */
  error?: string;
  /** Leading icon node inside the field. */
  icon?: React.ReactNode;
  /** Style for the wrapping <label>. */
  wrapStyle?: React.CSSProperties;
}

/**
 * Labelled text input used in the sign-up / onboarding flow.
 * @dsCard group="Components"
 */
export function Input(props: InputProps): JSX.Element;
