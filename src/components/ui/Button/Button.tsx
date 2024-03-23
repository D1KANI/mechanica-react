"use client";

import { ButtonSize, ButtonVariable } from "@/types/kit";
import Link from "next/link";

import styles from "./Button.module.scss";
import Icon from "../Icon/TruckIcon";

interface Props {
  label: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  href?: string;
  target?: string;
  size?: ButtonSize;
  variable?: ButtonVariable;
  className?: string;
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
}: Props) {
  const classes = `${styles.uiButton} ${styles[`size-${size}`]}
                  ${styles[`variable-${variable}`]} ${className}`;

  const content = (
    <>
      {leftIcon ?? undefined}
      {label}
    </>
  );

  return (
    <>
      {!!href && (
        <Link href={href} target={target} className={styles.icon}>
          {content}
        </Link>
      )}
      {!href && <button className={classes}>{content}</button>}
    </>
  );
}
