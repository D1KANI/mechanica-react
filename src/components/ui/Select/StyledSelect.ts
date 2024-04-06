import { SelectSize } from "@/types/kit";
import styled, { css } from "styled-components";

export const StyledSelectTargetChevron = styled.svg`
  ${({ theme }) => theme.utils.transition("transform")}
`;

export const StyledSelectTarget = styled.div`
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 64px;
  background-color: ${({ theme }) => theme.colors["greyscale-bg"]};
  color: ${({ theme }) => theme.colors["greyscale-600"]};
  border-radius: ${({ theme }) => theme.radius.xl};

  ${({ theme }) => theme.text["b-16-400"]}
  ${({ theme }) => theme.utils.transition("color")}
`;

export const StyledSelectListItem = styled.button<{
  $isActive: boolean;
}>`
  height: 56px;
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  background-color: transparent;
  padding: 0 12px;
  border-radius: ${({ theme }) => theme.radius.l};

  ${({ theme }) => theme.text["b-18-400"]}
  ${({ theme }) => theme.utils.transition("color, background")}

  ${(props) => {
    return (
      props.$isActive &&
      css`
        background-color: ${({ theme }) => theme.colors["greyscale-bg"]};
      `
    );
  }}

  .icon {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    margin-right: 4px;
  }

  span {
    color: ${({ theme }) => theme.colors["greyscale-600"]};
  }

  &:hover {
    @media (hover: hover) {
      color: ${({ theme }) => theme.colors.orange};
    }
  }
`;

export const StyledSelectList = styled.div`
  position: absolute;
  z-index: 2;
  top: calc(100% + 8px);
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors["greyscale-200"]};
  border-radius: ${({ theme }) => theme.radius.xl};
  overflow: hidden;
  opacity: 0;
  transform: translateY(-10px);
  visibility: hidden;

  ${({ theme }) => theme.utils.transition("opacity, transform, visibility")}
`;

export const StyledSelectLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;

  span {
    color: ${({ theme }) => theme.colors["greyscale-600"]};
  }
`;

export const StyledSelect = styled.div.attrs<{
  $size?: SelectSize;
  $isOpen?: boolean;
  $changed?: boolean;
}>((props) => ({
  $size: props.$size ?? SelectSize.XL,
}))`
  position: relative;
  min-width: 320px;

  ${(props) => {
    return (
      props.$isOpen &&
      css`
        ${StyledSelectTargetChevron} {
          transform: rotate(0.5turn);
        }

        ${StyledSelectList} {
          transform: translate(0);
          opacity: 1;
          visibility: visible;
        }
      `
    );
  }}

  ${(props) => {
    return (
      props.$changed &&
      css`
        ${StyledSelectTarget} {
          color: ${({ theme }) => theme.colors["greyscale-1000"]};
        }
      `
    );
  }}
`;
