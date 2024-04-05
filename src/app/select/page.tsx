"use client";

import { useState } from "react";
import styled from "styled-components";
import { SelectOption } from "@/types/kit";
import { Select } from "@/components/ui/Select/Select";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding-top: 20px;
  padding-bottom: 20px;
`;

export default function SelectPage() {
  const selectData: SelectOption[] = [
    {
      value: "Вариант 1",
      label: "Вариант 1",
    },
    {
      value: "Вариант 2",
      label: "Вариант 2",
    },
    {
      value: "Вариант 3",
      label: "Вариант 3",
    },
  ];
  const [currentSelect, setCurrentSelect] = useState(selectData[0].value);

  return (
    <main className="container">
      <StyledGrid>
        <Select
          list={selectData}
          value={currentSelect}
          onChange={setCurrentSelect}
        />
      </StyledGrid>
    </main>
  );
}
