import localFont from "next/font/local";

export const SFProDisplay = localFont({
  src: [
    {
      path: "../fonts/SFProDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/SFProDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/SFProDisplay-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Open Sans",
    "Helvetica Neue",
    "sans-serif",
  ],
  display: "swap",
  preload: true,
});
