"use client";

import styled from "styled-components";
import { Button } from "@/components/ui/Button/Button";
import { ButtonVariable } from "@/types/kit";
import type { Route } from "next";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding-top: 20px;
  padding-bottom: 20px;
`;

interface Buttons {
  label: string;
  href: URL | Route<string> | undefined;
  variable: ButtonVariable;
}

export default function Home() {
  const buttons: Buttons[] = [
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
            key={button.label}
            label={button.label}
            href={button.href}
            variable={button.variable}
          />
        ))}
      </StyledGrid>
    </main>
  );
}
