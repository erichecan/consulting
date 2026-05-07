import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Meridian Advisory",
  description: "Get in touch with Meridian Advisory. First conversation is always a candid assessment of whether we can help — no commitment required.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
