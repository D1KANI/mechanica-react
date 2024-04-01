"use client";

import { useState } from "react";
import Link from "next/link";
import { ButtonSize, ButtonVariable } from "@/types/kit";
import Button from "@/components/ui/Button/Button";
import TruckIcon from "@/icons/truck.svg";
import classes from "./page.module.scss";

export default function ButtonPage() {
  const [options, setOptions] = useState({
    size: ButtonSize.XL,
    variable: ButtonVariable.ACCENT,
    disabled: false,
  });

  type OptionsOptional = Partial<typeof options>;

  const changeOptions = ({ size, variable, disabled }: OptionsOptional) => {
    setOptions((prev) => {
      return {
        size: size ?? prev.size,
        variable: variable ?? prev.variable,
        disabled: disabled ?? prev.disabled,
      };
    });
  };

  return (
    <main className={`container ${classes.main}`}>
      <Link href="/">На главную</Link>

      <div className={classes.grid}>
        <Button
          className={classes.button}
          label={`Button ${options.size}`}
          size={options.size}
          variable={options.variable}
          leftIcon={<TruckIcon />}
          rightIcon={<TruckIcon />}
          disabled={options.disabled}
          onClick={() => alert("click")}
        />
      </div>

      <div className={classes.grid}>
        {Object.values(ButtonSize).map((size) => (
          <Button
            key={size}
            label={`Change ${size}`}
            onClick={() => changeOptions({ size: size as ButtonSize })}
          />
        ))}
      </div>

      <div className={classes.grid}>
        {Object.values(ButtonVariable).map((variable) => (
          <Button
            key={variable}
            label={`Change ${variable}`}
            onClick={() =>
              changeOptions({ variable: variable as ButtonVariable })
            }
          />
        ))}
      </div>

      <div className={classes.grid}>
        <Button
          label="Change disabled"
          onClick={() => changeOptions({ disabled: !options.disabled })}
        />
      </div>
    </main>
  );
}
