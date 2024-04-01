import { Button } from "@/components/ui/Button/Button";
import classes from "./page.module.scss";

export default function Home() {
  return (
    <main className={`container ${classes.main}`}>
      <div className={classes.grid}>
        <Button className={classes.button} label="Button page" href="/button" />
      </div>
    </main>
  );
}
