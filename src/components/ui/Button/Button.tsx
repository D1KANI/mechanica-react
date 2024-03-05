import { ButtonSize, ButtonVariable } from "@/types/kit";
import Link from "next/link";
import Image from "next/image";

import styles from "./Button.module.scss";
import useDynamicSVGImport from "@/hooks/useDynamicSVGImport";

interface Props {
  label: string;
  leftIconName?: string;
  rightIconName?: string;
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
  leftIconName,
  rightIconName,
}: Props) {
  const classes = `${styles.uiButton} ${styles[`size-${size}`]}
                  ${styles[`variable-${variable}`]} ${className}`;

  const content = (
    <>
      {leftIconName && (
        <Image
          src={`/images/${leftIconName}.svg`}
          alt={leftIconName}
          width={32}
          height={32}
        />
      )}
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
