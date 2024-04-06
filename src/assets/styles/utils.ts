const transition = (
  property: string,
  duration: string = "ease-in-out",
  fn: string = "0.15s"
) => `
  will-change: ${property};
  transition: all ${duration} ${fn};
  transition-property: ${property};
`;

export const styleUtils = { transition };
