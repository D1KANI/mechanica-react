"use client";

import { ButtonSize, ButtonVariable } from "@/types/kit";
import Link from "next/link";

import { StyledButton } from "./StyledButton";
import type { Route } from "next";

export interface Props<T extends string> {
  label: string;
  "left-icon"?: React.ReactNode;
  "right-icon"?: React.ReactNode;
  href?: Route<T> | URL;
  target?: "_self" | "_blank";
  size?: ButtonSize;
  variable?: ButtonVariable;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Button = <T extends string>({
  variable = ButtonVariable.ACCENT,
  size = ButtonSize.XL,
  ...props
}: Props<T>) => {
  return (
    <StyledButton
      as={props.href ? Link : "button"}
      type={!props.href ? "button" : undefined}
      href={props.href ?? undefined}
      $variable={variable}
      size={size}
      disabled={props.disabled}
      className={props.className}
      onClick={props.onClick}
    >
      {props["left-icon"] && <div className="icon">{props["left-icon"]}</div>}
      {props.label}
      {props["right-icon"] && <div className="icon">{props["right-icon"]}</div>}
    </StyledButton>
  );
};
