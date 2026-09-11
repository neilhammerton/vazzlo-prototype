import React from "react";

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Image URL — use one of the illustrated receptionist avatars in assets/avatars/. */
  src: string;
  alt?: string;
  /** Diameter in px. Default 72. */
  size?: number;
  /** Neon Ice ring around the avatar. Default true. */
  ring?: boolean;
  /** Show a green "live" status dot. Default false. */
  status?: boolean;
}

/**
 * Circular receptionist avatar with the brand ring treatment.
 * @dsCard group="Components"
 */
export function Avatar(props: AvatarProps): JSX.Element;
