"use client";

import Button from "@/components/ui/Button/Button";
import styles from "./page.module.scss";
import TruckIcon from "@/components/ui/Icon/TruckIcon";

export default function Home() {
  return (
    <main className={`container ${styles.main}`}>
      <Button
        className={styles.button}
        label="Button XL"
        leftIcon={<TruckIcon />}
      />
    </main>
  );
}
