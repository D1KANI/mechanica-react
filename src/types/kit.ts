import { FC, SVGProps } from "react";

export enum ButtonSize {
  "XL" = "xl",
  "L" = "l",
  "M" = "m",
  "S" = "s",
}

export enum ButtonVariable {
  "ACCENT" = "accent",
  "BLACK" = "black",
  "WHITE" = "white",
  "STROKE" = "stroke",
  "GREY" = "grey",
}

export enum SelectSize {
  XL = "xl",
  L = "l",
  m = "m",
}

export interface SelectOption {
  value: string;
  label?: string;
  subLabel?: string;
  icon?: FC<SVGProps<SVGElement>>;
}
