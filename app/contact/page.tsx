"use client";

import { useState } from "react";
import type { FormEvent } from "react";

const offices = [
  {
    city: "London",
    zh: "伦敦",
    address: ["14 Finsbury Square", "London EC2A 1HP", "United Kingdom"],
    email: "london@meridianadvisory.com",
    phone: "+44 20 7946 0958",
  },
  {
    city: "Hong Kong",
    zh: "香港",
    address: ["Suite 2401, Two Exchange Square", "8 Connaught Place, Central", "Hong Kong SAR"],
    email: "hongkong@meridianadvisory.com",
    phone: "+852 2110 0958",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "var(--color-forest)", paddingTop: "140px", paddingBottom: "80px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <p style={{ fontFamily: "var(--font-heading-zh)", fontSize: "13px", color: "var(--color-gold)", marginBottom: "24px", letterSpacing: "0.05em" }}>
            联系我们 / Contact
          </p>
          <h1 style={{ fontFamily: "var(--font-heading-en)", fontWeight: 300, fontSize: "clamp(36px, 5vw, 64px)", letterSpacing: "-0.03em", color: "var(--color-white)", lineHeight: "1.05", maxWidth: "640px", marginBottom: "32px" }}>
            Start with a conversation.
          </h1>
          <p style={{ fontFamily: "var(--font-body-en)", fontSize: "17px", lineHeight: "1.7", color: "rgba(255,255,255,0.75)", maxWidth: "520px" }}>
            The first conversation is always a candid assessment of whether we can help — and whether we have capacity. No commitment, no pitch deck.
          </p>
        </div>
      </section>

      {/* Form + Offices */}
      <section style={{ backgroundColor: "var(--color-warm-white)", padding: "96px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: "80px", alignItems: "start" }} className="contact-grid">
            {/* Form */}
            <div>
              <p style={{ fontFamily: "var(--font-body-en)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "32px" }}>
                Send us a message
              </p>

              {submitted ? (
                <div style={{ padding: "48px 40px", backgroundColor: "var(--color-muted)", borderLeft: "3px solid var(--color-forest)" }}>
                  <h3 style={{ fontFamily: "var(--font-heading-en)", fontWeight: 400, fontSize: "22px", letterSpacing: "-0.01em", color: "var(--color-dark)", marginBottom: "12px" }}>
                    Thank you. We&apos;ll be in touch.
                  </h3>
                  <p style={{ fontFamily: "var(--font-body-en)", fontSize: "15px", lineHeight: "1.7", color: "var(--color-slate)" }}>
                    We aim to respond within one business day. If your situation is urgent, feel free to call either office directly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }} className="form-two-col">
                    <div>
                      <label style={{ display: "block", fontFamily: "var(--font-body-en)", fontSize: "12px", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-slate)", marginBottom: "8px" }}>
                        First name *
                      </label>
                      <input
                        type="text"
                        required
                        style={{ width: "100%", padding: "12px 16px", border: "1px solid var(--color-border)", backgroundColor: "var(--color-white)", fontFamily: "var(--font-body-en)", fontSize: "15px", color: "var(--color-dark)", outline: "none", borderRadius: "2px", boxSizing: "border-box" }}
                        className="contact-input"
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontFamily: "var(--font-body-en)", fontSize: "12px", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-slate)", marginBottom: "8px" }}>
                        Last name *
                      </label>
                      <input
                        type="text"
                        required
                        style={{ width: "100%", padding: "12px 16px", border: "1px solid var(--color-border)", backgroundColor: "var(--color-white)", fontFamily: "var(--font-body-en)", fontSize: "15px", color: "var(--color-dark)", outline: "none", borderRadius: "2px", boxSizing: "border-box" }}
                        className="contact-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "block", fontFamily: "var(--font-body-en)", fontSize: "12px", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-slate)", marginBottom: "8px" }}>
                      Email address *
                    </label>
                    <input
                      type="email"
                      required
                      style={{ width: "100%", padding: "12px 16px", border: "1px solid var(--color-border)", backgroundColor: "var(--color-white)", fontFamily: "var(--font-body-en)", fontSize: "15px", color: "var(--color-dark)", outline: "none", borderRadius: "2px", boxSizing: "border-box" }}
                      className="contact-input"
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontFamily: "var(--font-body-en)", fontSize: "12px", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-slate)", marginBottom: "8px" }}>
                      Company
                    </label>
                    <input
                      type="text"
                      style={{ width: "100%", padding: "12px 16px", border: "1px solid var(--color-border)", backgroundColor: "var(--color-white)", fontFamily: "var(--font-body-en)", fontSize: "15px", color: "var(--color-dark)", outline: "none", borderRadius: "2px", boxSizing: "border-box" }}
                      className="contact-input"
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontFamily: "var(--font-body-en)", fontSize: "12px", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-slate)", marginBottom: "8px" }}>
                      Industry
                    </label>
                    <select
                      style={{ width: "100%", padding: "12px 16px", border: "1px solid var(--color-border)", backgroundColor: "var(--color-white)", fontFamily: "var(--font-body-en)", fontSize: "15px", color: "var(--color-dark)", outline: "none", borderRadius: "2px", appearance: "none", boxSizing: "border-box" }}
                      className="contact-input"
                    >
                      <option value="">Select industry</option>
                      <option value="wholesale">Wholesale Distribution</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="retail">Retail & Consumer</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: "block", fontFamily: "var(--font-body-en)", fontSize: "12px", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-slate)", marginBottom: "8px" }}>
                      What would you like to discuss? *
                    </label>
                    <textarea
                      required
                      rows={5}
                      style={{ width: "100%", padding: "12px 16px", border: "1px solid var(--color-border)", backgroundColor: "var(--color-white)", fontFamily: "var(--font-body-en)", fontSize: "15px", color: "var(--color-dark)", outline: "none", borderRadius: "2px", resize: "vertical", lineHeight: "1.6", boxSizing: "border-box" }}
                      className="contact-input"
                      placeholder="Brief description of the challenge or opportunity you're facing..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    style={{ alignSelf: "flex-start", padding: "14px 32px", backgroundColor: loading ? "var(--color-sage)" : "var(--color-forest)", color: "var(--color-white)", fontFamily: "var(--font-body-en)", fontSize: "14px", fontWeight: 500, border: "none", borderRadius: "4px", cursor: loading ? "not-allowed" : "pointer", transition: "background-color 0.2s" }}
                  >
                    {loading ? "Sending…" : "Send message ↗"}
                  </button>
                </form>
              )}
            </div>

            {/* Offices */}
            <div>
              <p style={{ fontFamily: "var(--font-body-en)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "32px" }}>
                Our offices
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {offices.map((office, i) => (
                  <div key={i} style={{ paddingBottom: "32px", marginBottom: "32px", borderBottom: i < offices.length - 1 ? "1px solid var(--color-border)" : "none" }}>
                    <div style={{ display: "flex", gap: "10px", alignItems: "baseline", marginBottom: "16px" }}>
                      <h3 style={{ fontFamily: "var(--font-heading-en)", fontWeight: 400, fontSize: "20px", letterSpacing: "-0.01em", color: "var(--color-dark)" }}>
                        {office.city}
                      </h3>
                      <span style={{ fontFamily: "var(--font-heading-zh)", fontSize: "13px", color: "var(--color-slate)" }}>
                        {office.zh}
                      </span>
                    </div>
                    {office.address.map((line, j) => (
                      <p key={j} style={{ fontFamily: "var(--font-body-en)", fontSize: "14px", lineHeight: "1.7", color: "var(--color-slate)" }}>
                        {line}
                      </p>
                    ))}
                    <p style={{ fontFamily: "var(--font-body-en)", fontSize: "14px", color: "var(--color-forest)", marginTop: "12px" }}>
                      {office.email}
                    </p>
                    <p style={{ fontFamily: "var(--font-body-en)", fontSize: "14px", color: "var(--color-slate)", marginTop: "4px" }}>
                      {office.phone}
                    </p>
                  </div>
                ))}
              </div>

              {/* Diagnostic Sprint callout */}
              <div style={{ marginTop: "8px", padding: "28px", backgroundColor: "var(--color-muted)", borderLeft: "3px solid var(--color-gold)" }}>
                <p style={{ fontFamily: "var(--font-body-en)", fontSize: "13px", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "10px" }}>
                  Diagnostic Sprint
                </p>
                <p style={{ fontFamily: "var(--font-body-en)", fontSize: "14px", lineHeight: "1.7", color: "var(--color-slate)" }}>
                  Not sure if you need full engagement? Our 30-day Diagnostic Sprint is a low-commitment way to get a clear picture of where the opportunity is — before committing to implementation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-input:focus {
          border-color: var(--color-forest) !important;
        }
        @media (max-width: 1023px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 56px !important; }
        }
        @media (max-width: 639px) {
          .form-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
