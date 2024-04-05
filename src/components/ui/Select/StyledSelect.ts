import { SelectSize } from "@/types/kit";
import styled, { css } from "styled-components";

interface Props {
  $size?: SelectSize;
}

const defaultProps = (props: Record<any, any>) => {
  return {
    $size: props.$size ?? SelectSize.XL,
  };
};

export const StyledSelect = styled.div.attrs<Props>((props) =>
  defaultProps(props)
)`
  min-width: 320px;
`;

export const StyledSelectTarget = styled.div.attrs<Props>((props) =>
  defaultProps(props)
)`
  cursor: pointer;
  user-select: none;
`;

export const StyledSelectTargetChevron = styled.svg<{
  $isOpen: boolean;
}>`
  ${({ theme }) => theme.utils.transition(["transform"])}

  ${(props) => {
    return (
      props.$isOpen &&
      css`
        transform: rotate(0.5turn);
      `
    );
  }}
`;

export const StyledSelectList = styled.div.attrs<Props>((props) =>
  defaultProps(props)
)``;

export const StyledSelectListItem = styled.button<{
  $isActive: boolean;
  children?: React.ReactNode;
}>``;
