"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

const offices = [
  {
    city: "London",
    address: "12 Grosvenor Square, Mayfair, London W1K 6JP",
    phone: "+44 20 7946 0321",
  },
  {
    city: "Hong Kong",
    address: "Unit 2801, Two IFC, 8 Finance Street, Central",
    phone: "+852 2345 6789",
  },
];

export default function ContactPage() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const l = (href: string) => `/${locale}${href}`;

  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((res) => setTimeout(res, 1200));
    setStatus("success");
  };

  return (
    <main style={{ paddingTop: "68px" }}>
      {/* Hero */}
      <section style={{ backgroundColor: "var(--color-dark)", color: "#fff", padding: "80px 32px 72px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "24px" }}>
            {t("eyebrow")}
          </div>
          <h1 style={{ fontFamily: "var(--font-heading-en)", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.1, maxWidth: "680px", marginBottom: "24px" }}>
            {t("headline")}
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.68)", maxWidth: "520px", lineHeight: 1.7 }}>
            {t("sub")}
          </p>
        </div>
      </section>

      {/* Form + info */}
      <section style={{ padding: "80px 32px 96px", backgroundColor: "var(--color-warm-white)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 360px", gap: "80px", alignItems: "start" }} className="contact-grid">

          {/* Form */}
          <div style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "48px 44px", border: "1px solid var(--color-border)" }}>
            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "50%", backgroundColor: "rgba(0,63,45,0.1)", border: "2px solid var(--color-forest)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: "20px" }}>
                  ✓
                </div>
                <p style={{ fontSize: "16px", color: "var(--color-dark)", fontWeight: 500, lineHeight: 1.6 }}>
                  {t("formSuccess")}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {(["name", "email", "company"] as const).map((field) => (
                  <div key={field} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <label htmlFor={field} style={{ fontSize: "13px", fontWeight: 500, color: "var(--color-dark)" }}>
                      {t(`form${field.charAt(0).toUpperCase()}${field.slice(1)}` as Parameters<typeof t>[0])}
                    </label>
                    <input
                      id={field}
                      type={field === "email" ? "email" : "text"}
                      value={form[field]}
                      onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                      required={field !== "company"}
                      style={{ padding: "11px 14px", border: "1px solid var(--color-border)", borderRadius: "6px", fontSize: "15px", color: "var(--color-dark)", outline: "none", backgroundColor: "var(--color-warm-white)" }}
                    />
                  </div>
                ))}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label htmlFor="message" style={{ fontSize: "13px", fontWeight: 500, color: "var(--color-dark)" }}>
                    {t("formMessage")}
                  </label>
                  <textarea
                    id="message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    required
                    style={{ padding: "11px 14px", border: "1px solid var(--color-border)", borderRadius: "6px", fontSize: "15px", color: "var(--color-dark)", outline: "none", resize: "vertical", backgroundColor: "var(--color-warm-white)", fontFamily: "inherit" }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  style={{ backgroundColor: "var(--color-dark)", color: "#fff", padding: "13px 28px", borderRadius: "6px", fontWeight: 600, fontSize: "15px", border: "none", cursor: status === "sending" ? "not-allowed" : "pointer", opacity: status === "sending" ? 0.7 : 1, marginTop: "4px" }}
                >
                  {status === "sending" ? t("formSending") : t("formSubmit")}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {/* Offices */}
            <div>
              <h2 style={{ fontFamily: "var(--font-heading-en)", fontSize: "16px", fontWeight: 600, color: "var(--color-dark)", marginBottom: "20px", letterSpacing: "-0.01em" }}>
                {t("officesHeadline")}
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {offices.map((office) => (
                  <div key={office.city} style={{ padding: "20px 24px", backgroundColor: "#fff", borderRadius: "8px", border: "1px solid var(--color-border)" }}>
                    <div style={{ fontFamily: "var(--font-heading-en)", fontSize: "14px", fontWeight: 600, color: "var(--color-dark)", marginBottom: "8px" }}>
                      {office.city}
                    </div>
                    <p style={{ fontSize: "13px", color: "var(--color-slate)", lineHeight: 1.6, marginBottom: "6px" }}>{office.address}</p>
                    <p style={{ fontSize: "13px", color: "var(--color-slate)" }}>{office.phone}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Response */}
            <div style={{ padding: "24px", backgroundColor: "rgba(201,169,97,0.08)", borderLeft: "3px solid var(--color-gold)", borderRadius: "0 8px 8px 0" }}>
              <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-dark)", marginBottom: "6px" }}>
                {t("responseTime")}
              </div>
              <p style={{ fontSize: "13px", color: "var(--color-slate)", lineHeight: 1.6, marginBottom: "14px" }}>
                {t("responseDesc")}
              </p>
              <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-dark)", marginBottom: "6px" }}>
                {t("engagements")}
              </div>
              <p style={{ fontSize: "13px", color: "var(--color-slate)", lineHeight: 1.6 }}>
                {t("engagementsDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>
      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
