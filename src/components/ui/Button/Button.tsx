"use client";

import { clsx } from "clsx";

import { ButtonSize, ButtonVariable } from "@/types/kit";
import Link from "next/link";

import classes from "./Button.module.scss";

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

export default function Button({
  label,
  href,
  target = "_blank",
  size = ButtonSize.XL,
  variable = ButtonVariable.ACCENT,
  className,
  leftIcon,
  rightIcon,
  disabled,
  onClick,
}: Props) {
  const styles = clsx(
    classes.uiButton,
    classes[`size-${size}`],
    classes[`variable-${variable}`],
    { [classes["is-disabled"]]: disabled }
  );

  const content = (
    <>
      {leftIcon && <div className={classes.icon}>{leftIcon}</div>}
      {label}
      {rightIcon && <div className={classes.icon}>{rightIcon}</div>}
    </>
  );

  if (href) {
    return (
      <Link href={href} target={target} className={styles} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button className={styles} onClick={onClick}>
      {content}
    </button>
  );
}
