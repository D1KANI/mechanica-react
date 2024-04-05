"use client";

import styled from "styled-components";
import { Button } from "@/components/ui/Button/Button";
import { ButtonVariable } from "@/types/kit";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding-top: 20px;
  padding-bottom: 20px;
`;
export default function Home() {
  const buttons = [
    {
      label: "Button page",
      href: "/button",
      variable: ButtonVariable.ACCENT,
    },
    {
      label: "Select page",
      href: "/select",
      variable: ButtonVariable.BLACK,
    },
  ];

  return (
    <main className="container">
      <StyledGrid>
        {buttons.map((button) => (
          <Button
            key={button.href}
            label={button.label}
            href={button.href}
            variable={button.variable}
          />
        ))}
      </StyledGrid>
    </main>
  );
}
