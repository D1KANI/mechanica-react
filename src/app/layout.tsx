import type { Metadata } from "next";
import { SFProDisplay } from "@/assets/styles/fonts";
import { StyleProvider } from "@/components/providers/StyleProvider";
import { Button } from "@/components/ui/Button/Button";
import { ButtonSize } from "@/types/kit";

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
        <StyleProvider>
          <Button label="Главная" href="/" size={ButtonSize.S} />
          {children}
        </StyleProvider>
      </body>
    </html>
  );
}
