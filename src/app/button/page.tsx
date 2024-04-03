"use client";

import { useState } from "react";
import Link from "next/link";
import { ButtonSize, ButtonVariable } from "@/types/kit";
import { Button } from "@/components/ui/Button/Button";
import TruckIcon from "@/assets/icons/truck.svg";
import styled from "styled-components";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding-top: 20px;
  padding-bottom: 20px;
`;

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
    <main className="container">
      <Link href="/">На главную</Link>

      <StyledGrid>
        <Button
          label={`Button ${options.size}`}
          size={options.size}
          variable={options.variable}
          left-icon={<TruckIcon />}
          right-icon={<TruckIcon />}
          disabled={options.disabled}
          onClick={() => alert("click")}
        />
      </StyledGrid>

      <StyledGrid>
        {Object.values(ButtonSize).map((size) => (
          <Button
            key={size}
            label={`Change ${size}`}
            onClick={() => changeOptions({ size: size })}
          />
        ))}
      </StyledGrid>

      <StyledGrid>
        {Object.values(ButtonVariable).map((variable) => (
          <Button
            key={variable}
            label={`Change ${variable}`}
            onClick={() => changeOptions({ variable: variable })}
          />
        ))}
      </StyledGrid>

      <StyledGrid>
        <Button
          label="Change disabled"
          onClick={() => changeOptions({ disabled: !options.disabled })}
        />
      </StyledGrid>
    </main>
  );
}
