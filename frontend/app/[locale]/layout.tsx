import "../globals.css";

import { Providers } from "@/app/providers";
import Header from "@/components/ui/layout/header/header";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import Footer from "@/components/ui/layout/footer/footer";

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
              <div className="flex flex-col h-screen justify-between">
                <Header />
                <main className="mb-auto mt-20">{children}</main>
                <Footer />
              </div>
            </Providers>
          </NextIntlClientProvider>
        </body>
      </html>
    </>
  );
}
