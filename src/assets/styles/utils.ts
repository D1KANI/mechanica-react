import css from "styled-jsx/css";

const transition = (
  property: string[],
  duration: string = "ease-in-out",
  fn: string = "0.15s"
) => css`
  will-change: ${property.join(", ")};
  transition: all ${duration} ${fn};
  transition-property: ${property.join(", ")};
`;

const hover = (...args: any) => css`
  @media (hover: hover) {
    &:hover {
      ${css(args)}
    }
  }
`;

export const styleUtils = { transition, hover };
