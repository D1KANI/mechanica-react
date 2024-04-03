import { DefaultTheme, css } from "styled-components";
import { styleUtils } from "@/assets/styles/utils";

export const colors = {
  white: "#fff",
  "white-50": "rgba($c-white, 0.5)",
  "white-40": "rgba($c-white, 0.4)",
  "white-30": "rgba($c-white, 0.3)",
  "white-20": "rgba($c-white, 0.2)",
  "white-10": "rgba($c-white, 0.1)",

  "greyscale-1000": "#101828",
  "greyscale-900": "#1e2635",
  "greyscale-800": "#383f4c",
  "greyscale-700": "#525864",
  "greyscale-600": "#6d727b",
  "greyscale-500": "#868a92",
  "greyscale-400": "#a1a4aa",
  "greyscale-300": "#bdbfc3",
  "greyscale-200": "#d8d9dc",
  "greyscale-100": "#e8e9eb",
  "greyscale-50": "#f8f9f9",
  "greyscale-bg": "#f3f5f6",

  orange: "#ed5a08",
  "orange-hover": "#e35608",
  green: "#02a862",
  red: "#ff4848",
  yellow: "#ffba09",
  purple: "#6941c6",
  blue: "#468df8",
  "green-10": "#e6f7f0",
  "orange-10": "#feefe7",
  "red-10": "#ff4848",
  "green-dark": "#058e13",
};

export const createFont = (fz: number, lh: number = 1.2, fw: number = 400) => {
  return css`
    font-size: ${fz}px;
    line-height: ${lh};
    font-weight: ${fw};
  `;
};

export const text = {
  "h-80-400": createFont(80),
  "h-64-500": createFont(64, 1.12, 500),
  "h-40-500": createFont(40, 1.2, 500),
  "h-40-400": createFont(40),
  "h-32-500": createFont(32, 1.25, 500),
  "h-32-400": createFont(32, 1.25),
  "h-28-500": createFont(28, 1.29, 500),
  "h-28-400": createFont(28, 1.29),
  "h-24-500": createFont(24, 1.33, 500),
  "h-24-400": createFont(24, 1.33),
  "h-20-500": createFont(20, 1.4, 500),
  "h-20-400": createFont(20, 1.4),
  "b-18-400": createFont(18, 1.56),
  "b-18-500": createFont(18, 1.56, 500),
  "b-18-600": createFont(18, 1.56, 600),
  "b-16-400": createFont(16, 1.5),
  "b-16-500": createFont(16, 1.5, 500),
  "b-16-600": createFont(16, 1.5, 600),
  "b-14-400": createFont(14, 1.57),
  "b-14-500": createFont(14, 1.57, 500),
  "b-14-600": createFont(14, 1.57, 600),
};

export const radius = {
  xl: "16px",
  l: "12px",
  m: "10px",
};

const theme: DefaultTheme = {
  colors,

  radius,

  text,

  utils: styleUtils,
};

export default theme;
