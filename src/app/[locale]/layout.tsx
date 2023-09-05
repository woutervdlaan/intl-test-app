import "../globals.css";

import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import TestContextProvider from "@/contexts/testContext";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "nl" }];
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
      <html lang={locale}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <body>{children}</body>
        </NextIntlClientProvider>
      </html>
  );
}
