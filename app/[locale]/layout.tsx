import type { Metadata } from "next";
import { Inter, Inter_Tight, Noto_Serif_TC } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter-tight",
});

const notoSerifTC = Noto_Serif_TC({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-noto-serif-sc",
});

export const metadata: Metadata = {
  title: "Meridian Advisory — Strategy & Operations Consulting",
  description:
    "We partner with mid-market businesses to diagnose structural inefficiencies and implement lasting operational change.",
  keywords: "consulting, strategy, operations, business transformation, supply chain",
  openGraph: {
    title: "Meridian Advisory",
    description: "Honest counsel. Measurable outcomes.",
    type: "website",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "zh")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale === "zh" ? "zh-HK" : "en"}
      className={`${inter.variable} ${interTight.variable} ${notoSerifTC.variable}`}
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          <Nav />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
