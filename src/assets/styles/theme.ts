import { DefaultTheme } from "styled-components";

import { text } from "@/assets/styles/text";
import { styleUtils } from "@/assets/styles/utils";

const theme: DefaultTheme = {
  colors: {
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
  },

  radius: {
    xl: "16px",
    l: "12px",
    m: "10px",
  },

  text,

  utils: styleUtils,
};

export default theme;
