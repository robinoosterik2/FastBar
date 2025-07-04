import "../globals.css";

import { Providers } from "@/app/providers";
import Header from "@/components/ui/header/header";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <>
      <html lang={locale} suppressHydrationWarning>
        <head />
        <body>
          {/* IntLClientProvider needs to be here */}
          <NextIntlClientProvider>
            <Providers>
              <Header />
              {children}
            </Providers>
          </NextIntlClientProvider>
        </body>
      </html>
    </>
  );
}
