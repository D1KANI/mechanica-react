// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      "white-50": string;
      "white-40": string;
      "white-30": string;
      "white-20": string;
      "white-10": string;

      "greyscale-1000": string;
      "greyscale-900": string;
      "greyscale-800": string;
      "greyscale-700": string;
      "greyscale-600": string;
      "greyscale-500": string;
      "greyscale-400": string;
      "greyscale-300": string;
      "greyscale-200": string;
      "greyscale-100": string;
      "greyscale-50": string;
      "greyscale-bg": string;

      orange: string;
      "orange-hover": string;
      green: string;
      red: string;
      yellow: string;
      purple: string;
      blue: string;
      "green-10": string;
      "orange-10": string;
      "red-10": string;
      "green-dark": string;
    };

    radius: {
      xl: string;
      l: string;
      m: string;
    };

    text: {
      "font-h-80-400": Interpolation<
        Substitute<
          DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
          Props
        >
      >;
      "font-h-64-500": Interpolation<
        Substitute<
          DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
          Props
        >
      >;
      "font-h-40-500": Interpolation<
        Substitute<
          DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
          Props
        >
      >;
      "font-h-40-400": Interpolation<
        Substitute<
          DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
          Props
        >
      >;
      "font-h-32-500": Interpolation<
        Substitute<
          DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
          Props
        >
      >;
      "font-h-32-400": Interpolation<
        Substitute<
          DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
          Props
        >
      >;
      "font-h-28-500": Interpolation<
        Substitute<
          DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
          Props
        >
      >;
      "font-h-28-400": Interpolation<
        Substitute<
          DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
          Props
        >
      >;
      "font-h-24-500": Interpolation<
        Substitute<
          DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
          Props
        >
      >;
      "font-h-24-400": Interpolation<
        Substitute<
          DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
          Props
        >
      >;
      "font-h-20-500": Interpolation<
        Substitute<
          DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
          Props
        >
      >;
      "font-h-20-400": Interpolation<
        Substitute<
          DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
          Props
        >
      >;
      "font-b-18-400": Interpolation<
        Substitute<
          DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
          Props
        >
      >;
      "font-b-18-500": Interpolation<
        Substitute<
          DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
          Props
        >
      >;
      "font-b-18-600": Interpolation<
        Substitute<
          DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
          Props
        >
      >;
      "font-b-16-400": Interpolation<
        Substitute<
          DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
          Props
        >
      >;
      "font-b-16-500": Interpolation<
        Substitute<
          DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
          Props
        >
      >;
      "font-b-16-600": Interpolation<
        Substitute<
          DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
          Props
        >
      >;
      "font-b-14-400": Interpolation<
        Substitute<
          DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
          Props
        >
      >;
      "font-b-14-500": Interpolation<
        Substitute<
          DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
          Props
        >
      >;
      "font-b-14-600": Interpolation<
        Substitute<
          DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
          Props
        >
      >;
    };

    utils: {
      transition: (
        property: string[],
        duration?: string,
        fn?: string
      ) => Interpolation<
        Substitute<
          DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
          Props
        >
      >;
      hover: (
        ...args: any
      ) => Interpolation<
        Substitute<
          DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
          Props
        >
      >;
    };
  }
}
