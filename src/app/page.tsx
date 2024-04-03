"use client";

import styled from "styled-components";
import { Button } from "@/components/ui/Button/Button";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding-top: 20px;
  padding-bottom: 20px;
`;
export default function Home() {
  return (
    <main className="container">
      <StyledGrid>
        <Button label="Button page" href="/button" />
      </StyledGrid>
    </main>
  );
}
