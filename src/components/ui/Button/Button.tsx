"use client";

import { ButtonSize, ButtonVariable } from "@/types/kit";
import Link from "next/link";

import { StyledButton } from "./StyledButton";

export interface Props {
  label: string;
  "left-icon"?: React.ReactNode;
  "right-icon"?: React.ReactNode;
  href?: string;
  target?: "_self" | "_blank";
  size?: ButtonSize;
  variable?: ButtonVariable;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Button = ({
  variable = ButtonVariable.ACCENT,
  size = ButtonSize.XL,
  ...props
}: Props) => {
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
