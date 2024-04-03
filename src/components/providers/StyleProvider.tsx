"use client";

import StyledComponentsRegistry from "@/lib/registry";
import theme from "@/assets/styles/theme";
import { GlobalStyles } from "@/assets/styles/global";
import { ThemeProvider } from "styled-components";

export const StyleProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};
