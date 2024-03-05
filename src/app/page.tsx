import Button from "@/components/ui/Button/Button";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={`container ${styles.main}`}>
      <Button
        className={styles.button}
        label="Button XL"
        leftIconName="truck"
      />
    </main>
  );
}
