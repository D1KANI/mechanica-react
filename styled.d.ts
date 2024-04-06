// import original module declarations
import "styled-components";

import theme, { radius, text, colors } from "@/assets/styles/theme";

type cssReturnType = Interpolation<
  Substitute<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    Props
  >
>;

declare module "styled-components" {
  export interface DefaultTheme {
    colors: typeof colors;

    radius: typeof radius;

    text: Record<keyof typeof text, cssReturnType>;

    utils: {
      transition: (property: string, duration?: string, fn?: string) => string;
    };
  }
}
