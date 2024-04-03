import css from "styled-jsx/css";

const transition = (
  property: string[],
  duration: string = "ease-in-out",
  fn: string = "0.15s"
) => `
  will-change: ${property.join(", ")};
  transition: all ${duration} ${fn};
  transition-property: ${property.join(", ")};
`;

export const styleUtils = { transition };
