"use client";

import { ButtonSize, ButtonVariable } from "@/types/kit";
import Link from "next/link";

import styled, { css } from "styled-components";

interface Props {
  label: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  href?: string;
  target?: string;
  size?: ButtonSize;
  variable?: ButtonVariable;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

const StyledButton = styled.div<Props>`
  display: inline-flex;
  width: fit-content;
  align-items: center;
  outline: none;
  border: 1px solid transparent;
  cursor: pointer;
  white-space: nowrap;
  ${({ theme }) =>
    theme.utils.transition(["background", "box-shadow", "border-color"])}

  .icon {
    flex-shrink: 0;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  ${(props) => {
    switch (props.variable) {
      case ButtonVariable.ACCENT:
        return css``;
      case ButtonVariable.BLACK:
        return css``;
      case ButtonVariable.WHITE:
        return css``;
      case ButtonVariable.STROKE:
        return css``;
      case ButtonVariable.GREY:
        return css``;
    }
  }}

  ${(props) => {
    switch (props.size) {
      case ButtonSize.XL:
        return css``;
      case ButtonSize.L:
        return css``;
      case ButtonSize.M:
        return css``;
      case ButtonSize.S:
        return css``;
    }
  }}

  ${(props) => {
    if (props.disabled) {
      return css``;
    }
  }}
`;

export const Button = ({
  variable = ButtonVariable.ACCENT,
  size = ButtonSize.XL,
  ...props
}: Props) => {
  return (
    <StyledButton
      as={props.href ? Link : "button"}
      type={!props.href ? "button" : undefined}
      {...{ ...props, variable, size }}
    >
      {props.leftIcon && <div className="icon">{props.leftIcon}</div>}
      {props.label}
      {props.rightIcon && <div className="icon">{props.rightIcon}</div>}
    </StyledButton>
  );
};
