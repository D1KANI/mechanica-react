"use client";

import { useState } from "react";
import Button from "@/components/ui/Button/Button";
import TruckIcon from "@/icons/truck.svg";
import styles from "./page.module.scss";

export default function Home() {
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <main className={`container ${styles.main}`}>
      <Button
        className={styles.button}
        label="Button XL"
        leftIcon={<TruckIcon />}
        rightIcon={<TruckIcon />}
        disabled={isDisabled}
        onClick={() => setIsDisabled(!isDisabled)}
      />
    </main>
  );
}
