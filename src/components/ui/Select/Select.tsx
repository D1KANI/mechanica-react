import { SelectOption, SelectSize } from "@/types/kit";
import {
  StyledSelect,
  StyledSelectTarget,
  StyledSelectList,
  StyledSelectTargetChevron,
  StyledSelectListItem,
  StyledSelectLabel,
} from "./StyledSelect";
import ChevronIcon from "@/assets/icons/chevron_down.svg";
import { useRef, useState } from "react";
import { useOutsideClick } from "@/hooks/useOutsideClick";

type Props = {
  list: SelectOption[];
  value?: string;
  label?: string;
  secondLabel?: string;
  placeholder?: string;
  size?: SelectSize;
  onChange: (value: string) => void;
};

export const Select = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectRef = useRef<HTMLDivElement>(null);

  useOutsideClick(selectRef, () => {
    setIsOpen(false);
  });

  const currentLabel =
    props.list.find((item) => item.value === props.value)?.label ??
    props.value ??
    props.placeholder ??
    "Выберите...";

  const handleChange = (value: string) => {
    if (value !== props.value) {
      props.onChange(value);
    }

    setIsOpen(false);
  };

  return (
    <StyledSelect
      ref={selectRef}
      $size={props.size}
      $isOpen={isOpen}
      $changed={!!props.value}
    >
      {(props.label || props.secondLabel) && (
        <StyledSelectLabel>
          {props.label}
          {props.secondLabel && <span>{props.secondLabel}</span>}
        </StyledSelectLabel>
      )}
      <StyledSelectTarget onClick={() => setIsOpen(!isOpen)}>
        {currentLabel}
        <StyledSelectTargetChevron as={ChevronIcon} />
      </StyledSelectTarget>
      <StyledSelectList>
        {props.list.map((item) => (
          <StyledSelectListItem
            key={item.value}
            $isActive={item.value === props.value}
            onClick={() => handleChange(item.value)}
          >
            {item.icon && (
              <div className="icon">
                {item.icon({ width: "100%", height: "100%" })}
              </div>
            )}
            {item.label ?? item.value}
            {item.subLabel && <span>{item.subLabel}</span>}
          </StyledSelectListItem>
        ))}
      </StyledSelectList>
    </StyledSelect>
  );
};
