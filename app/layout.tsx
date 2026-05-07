import type { Metadata } from "next";
import { Inter, Inter_Tight, Noto_Serif_SC } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

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

const notoSerifSC = Noto_Serif_SC({
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className={`${inter.variable} ${interTight.variable} ${notoSerifSC.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
