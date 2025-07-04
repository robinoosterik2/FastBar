import "./globals.css";

import { Providers } from "./providers";
import Header from "@/components/ui/header/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <Providers>
            <Header />
            {children}
          </Providers>
        </body>
      </html>
    </>
  );
}
