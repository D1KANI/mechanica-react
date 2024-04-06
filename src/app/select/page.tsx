"use client";

import { useState } from "react";
import styled from "styled-components";
import { SelectOption } from "@/types/kit";
import { Select } from "@/components/ui/Select/Select";
import TruckIcon from "@/assets/icons/truck.svg";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding-top: 20px;
  padding-bottom: 20px;
`;

export default function SelectPage() {
  const selectData: SelectOption[] = [
    {
      value: "value + label",
      label: "value + label",
    },
    {
      value: "value only",
    },
    {
      value: "full",
      label: "full",
      subLabel: "variant",
      icon: TruckIcon,
    },
  ];
  const [currentSelect, setCurrentSelect] = useState<string>();

  return (
    <main className="container">
      <StyledGrid>
        <Select
          list={selectData}
          value={currentSelect}
          onChange={setCurrentSelect}
          label="Test"
          secondLabel="second"
        />
      </StyledGrid>
    </main>
  );
}
