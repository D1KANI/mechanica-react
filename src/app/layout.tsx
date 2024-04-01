import type { Metadata } from "next";
import { SFProDisplay } from "@/assets/styles/fonts";
import { StyleProvider } from "@/components/providers/StyleProvider";

export const metadata: Metadata = {
  title: "MECHANICA",
  description: "Best shop for your custom enjoyment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={SFProDisplay.className}>
        <StyleProvider>{children}</StyleProvider>
      </body>
    </html>
  );
}
