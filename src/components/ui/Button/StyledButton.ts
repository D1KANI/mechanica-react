import styled, { css } from "styled-components";
import { ButtonSize, ButtonVariable } from "@/types/kit";

export const StyledButton = styled.div<{
  $variable: ButtonVariable;
  size: ButtonSize;
  disabled?: boolean;
}>`
  display: inline-flex;
  width: fit-content;
  align-items: center;
  outline: none;
  border: 1px solid transparent;
  cursor: pointer;
  white-space: nowrap;
  ${({ theme }) =>
    theme.utils.transition(["background", "box-shadow", "border-color"])}

  .icon {
    flex-shrink: 0;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  ${(props) => {
    switch (props.$variable) {
      case ButtonVariable.ACCENT:
        return css`
          background-color: ${({ theme }) => theme.colors.orange};
          color: ${({ theme }) => theme.colors.white};

          .icon {
            color: ${({ theme }) => theme.colors.white};
          }

          ${!props.disabled &&
          css`
            @media (hover: hover) {
              &:hover {
                background-color: ${({ theme }) =>
                  theme.colors["orange-hover"]};
              }
            }

            &:active {
              background-color: ${({ theme }) => theme.colors.orange};
              box-shadow: inset 0 8px 8px 0 rgba(0, 0, 0, 0.1);
            }
          `}
        `;
      case ButtonVariable.BLACK:
        return css`
          background-color: ${({ theme }) => theme.colors["greyscale-1000"]};
          color: ${({ theme }) => theme.colors.white};

          .icon {
            color: ${({ theme }) => theme.colors.white};
          }

          ${!props.disabled &&
          css`
            @media (hover: hover) {
              &:hover {
                background-color: ${({ theme }) =>
                  theme.colors["greyscale-800"]};
              }
            }

            &:active {
              background-color: ${({ theme }) => theme.colors["greyscale-900"]};
            }
          `}
        `;
      case ButtonVariable.WHITE:
        return css`
          background-color: ${({ theme }) => theme.colors.white};
          color: ${({ theme }) => theme.colors["greyscale-1000"]};

          .icon {
            color: ${({ theme }) => theme.colors["greyscale-1000"]};
          }

          ${!props.disabled &&
          css`
            @media (hover: hover) {
              &:hover {
                background-color: ${({ theme }) =>
                  theme.colors["greyscale-50"]};
              }
            }

            &:active {
              box-shadow: inset 0 8px 8px 0 rgba(0, 0, 0, 0.1);
            }
          `}
        `;
      case ButtonVariable.STROKE:
        return css`
          background-color: ${({ theme }) => theme.colors.white};
          color: ${({ theme }) => theme.colors["greyscale-1000"]};
          border-color: ${({ theme }) => theme.colors["greyscale-100"]};

          .icon {
            color: ${({ theme }) => theme.colors["greyscale-1000"]};
          }

          ${!props.disabled &&
          css`
            @media (hover: hover) {
              &:hover {
                background-color: ${({ theme }) =>
                  theme.colors["greyscale-50"]};
              }
            }

            &:active {
              background-color: ${({ theme }) => theme.colors.white};
              box-shadow: inset 0 8px 8px 0 rgba(0, 0, 0, 0.1);
            }
          `}
        `;
      case ButtonVariable.GREY:
        return css`
          background-color: ${({ theme }) => theme.colors["greyscale-bg"]};
          color: ${({ theme }) => theme.colors["greyscale-1000"]};

          .icon {
            color: ${({ theme }) => theme.colors["greyscale-1000"]};
          }

          ${!props.disabled &&
          css`
            @media (hover: hover) {
              &:hover {
                background-color: ${({ theme }) =>
                  theme.colors["greyscale-100"]};
              }
            }

            &:active {
              background-color: ${({ theme }) => theme.colors["greyscale-bg"]};
              box-shadow: inset 0 8px 8px 0 rgba(0, 0, 0, 0.1);
            }
          `}
        `;
    }
  }}

  ${(props) => {
    return (
      props.disabled &&
      css`
        cursor: not-allowed;
        background-color: ${({ theme }) => theme.colors["greyscale-100"]};
        color: ${({ theme }) => theme.colors["greyscale-600"]};

        .icon {
          color: ${({ theme }) => theme.colors["greyscale-600"]};
        }
      `
    );
  }}

  ${(props) => {
    switch (props.size) {
      case ButtonSize.XL:
        return css`
          gap: 12px;
          height: 64px;
          padding: 0 24px;
          border-radius: ${({ theme }) => theme.radius.xl};
          ${({ theme }) => theme.text["b-18-400"]}

          .icon {
            width: 24px;
            height: 24px;
          }
        `;
      case ButtonSize.L:
        return css`
          gap: 12px;
          height: 56px;
          padding: 0 20px;
          border-radius: ${({ theme }) => theme.radius.xl};
          ${({ theme }) => theme.text["b-18-400"]}

          .icon {
            width: 24px;
            height: 24px;
          }
        `;
      case ButtonSize.M:
        return css`
          gap: 10px;
          height: 48px;
          padding: 0 16px;
          border-radius: ${({ theme }) => theme.radius.l};
          ${({ theme }) => theme.text["b-16-400"]}

          .icon {
            width: 20px;
            height: 20px;
          }
        `;
      case ButtonSize.S:
        return css`
          gap: 8px;
          height: 40px;
          padding: 0 16px;
          border-radius: ${({ theme }) => theme.radius.m};
          ${({ theme }) => theme.text["b-16-400"]}

          .icon {
            width: 16px;
            height: 16px;
          }
        `;
    }
  }}
`;
