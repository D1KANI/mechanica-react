import { SelectOption, SelectSize } from "@/types/kit";
import {
  StyledSelect,
  StyledSelectTarget,
  StyledSelectList,
  StyledSelectTargetChevron,
  StyledSelectListItem,
} from "./StyledSelect";
import ChevronIcon from "@/assets/icons/chevron_down.svg";
import { useState } from "react";

type Props = {
  list: SelectOption[];
  value: string;
  label?: string;
  secondLabel?: string;
  placeholder?: string;
  size?: SelectSize;
  onChange: (value: string) => void;
};

export const Select = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const currentLabel =
    props.list.find((item) => item.value === props.value)?.label ??
    props.placeholder ??
    "Выберите...";

  return (
    <StyledSelect $size={props.size}>
      <StyledSelectTarget $size={props.size} onClick={() => setIsOpen(!isOpen)}>
        {currentLabel}
        <StyledSelectTargetChevron as={ChevronIcon} $isOpen={isOpen} />
      </StyledSelectTarget>
      <StyledSelectList $size={props.size}>
        {props.list.map((item) => (
          <StyledSelectListItem
            key={item.value}
            $isActive={item.value === props.value}
          >
            {item.label ?? item.value}
            {item.subLabel && <span>{item.subLabel}</span>}
          </StyledSelectListItem>
        ))}
      </StyledSelectList>
    </StyledSelect>
  );
};
