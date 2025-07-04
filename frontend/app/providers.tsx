"use client";

import { ThemeProvider } from "next-themes";
import { HeroUIProvider } from "@heroui/react";
import { NextIntlClientProvider } from "next-intl";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        {children}
      </ThemeProvider>
    </HeroUIProvider>
  );
}
