import { ButtonSize, ButtonVariable } from "@/types/kit";
import Link from "next/link";

import styles from "./Button.module.scss";

interface Props {
  label: string;
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
}: Props) {
  const classes = `${styles.uiButton} ${styles[`size-${size}`]}
                  ${styles[`variable-${variable}`]} ${className}`;

  const content = <>{label}</>;

  return (
    <>
      {!!href && (
        <Link href={href} target={target} className={classes}>
          {content}
        </Link>
      )}
      {!href && <button className={classes}>{content}</button>}
    </>
  );
}
