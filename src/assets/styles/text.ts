import css from "styled-jsx/css";

export const createFont = (fz: number, lh: number = 1.2, fw: number = 400) => {
  return css`
    font-size: ${fz}px;
    line-height: ${lh};
    font-weight: ${fw};
  `;
};

export const text = {
  "font-h-80-400": createFont(80),
  "font-h-64-500": createFont(64, 1.12, 500),
  "font-h-40-500": createFont(40, 1.2, 500),
  "font-h-40-400": createFont(40),
  "font-h-32-500": createFont(32, 1.25, 500),
  "font-h-32-400": createFont(32, 1.25),
  "font-h-28-500": createFont(28, 1.29, 500),
  "font-h-28-400": createFont(28, 1.29),
  "font-h-24-500": createFont(24, 1.33, 500),
  "font-h-24-400": createFont(24, 1.33),
  "font-h-20-500": createFont(20, 1.4, 500),
  "font-h-20-400": createFont(20, 1.4),
  "font-b-18-400": createFont(18, 1.56),
  "font-b-18-500": createFont(18, 1.56, 500),
  "font-b-18-600": createFont(18, 1.56, 600),
  "font-b-16-400": createFont(16, 1.5),
  "font-b-16-500": createFont(16, 1.5, 500),
  "font-b-16-600": createFont(16, 1.5, 600),
  "font-b-14-400": createFont(14, 1.57),
  "font-b-14-500": createFont(14, 1.57, 500),
  "font-b-14-600": createFont(14, 1.57, 600),
};
