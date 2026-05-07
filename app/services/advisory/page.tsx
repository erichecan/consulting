import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Embedded Advisory — Meridian Advisory",
  description: "Ongoing strategic counsel through a retainer model — keeping your leadership team accountable to decisions that compound.",
};

export default function AdvisoryPage() {
  return (
    <>
      <section style={{ backgroundColor: "var(--color-forest)", paddingTop: "140px", paddingBottom: "80px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <Link href="/services" style={{ fontFamily: "var(--font-body-en)", fontSize: "13px", color: "rgba(255,255,255,0.5)", textDecoration: "none", marginBottom: "32px", display: "inline-block" }}>
            ← Services
          </Link>
          <p style={{ fontFamily: "var(--font-body-en)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "16px" }}>
            03 / Embedded Advisory · Ongoing retainer
          </p>
          <h1 style={{ fontFamily: "var(--font-heading-en)", fontWeight: 300, fontSize: "clamp(36px, 5vw, 64px)", letterSpacing: "-0.03em", color: "var(--color-white)", lineHeight: "1.05", maxWidth: "680px", marginBottom: "24px" }}>
            A thinking partner for decisions that compound.
          </h1>
          <p style={{ fontFamily: "var(--font-body-en)", fontSize: "17px", lineHeight: "1.7", color: "rgba(255,255,255,0.7)", maxWidth: "540px" }}>
            Senior strategic counsel delivered through a monthly retainer — keeping your leadership team honest, focused, and accountable to the decisions that shape your trajectory.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--color-warm-white)", padding: "96px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px" }} className="two-col">
            <div>
              <h2 style={{ fontFamily: "var(--font-heading-en)", fontWeight: 300, fontSize: "32px", letterSpacing: "-0.02em", color: "var(--color-dark)", marginBottom: "24px" }}>What it includes</h2>
              {["Monthly 3-hour strategy session with a senior Meridian partner", "Priority initiatives review and accountability tracking", "Decision stress-testing and scenario analysis", "Unlimited async counsel (72-hour response SLA)", "Quarterly performance review against stated objectives", "Annual strategy refresh facilitation"].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "12px", padding: "14px 0", borderBottom: "1px solid var(--color-border)" }}>
                  <span style={{ color: "var(--color-gold)", fontSize: "14px", paddingTop: "3px" }}>✓</span>
                  <span style={{ fontFamily: "var(--font-body-en)", fontSize: "15px", color: "var(--color-dark)", lineHeight: "1.5" }}>{item}</span>
                </div>
              ))}
            </div>
            <div>
              <h2 style={{ fontFamily: "var(--font-heading-en)", fontWeight: 300, fontSize: "32px", letterSpacing: "-0.02em", color: "var(--color-dark)", marginBottom: "24px" }}>Who it&apos;s for</h2>
              <p style={{ fontFamily: "var(--font-body-en)", fontSize: "16px", lineHeight: "1.8", color: "var(--color-slate)", marginBottom: "20px" }}>
                Founders and CEOs of $10M–$100M businesses who want a senior strategic sounding board without the cost or complexity of adding headcount.
              </p>
              <p style={{ fontFamily: "var(--font-body-en)", fontSize: "16px", lineHeight: "1.8", color: "var(--color-slate)", marginBottom: "20px" }}>
                Often chosen by clients who have completed an Implementation engagement and want to sustain the discipline of structured strategic thinking.
              </p>
              <div style={{ backgroundColor: "var(--color-muted)", border: "1px solid var(--color-border)", borderRadius: "4px", padding: "24px", marginTop: "16px" }}>
                <p style={{ fontFamily: "var(--font-body-en)", fontSize: "13px", color: "var(--color-slate)", lineHeight: "1.6" }}>
                  Retainer engagements are limited to 6 clients per partner. We maintain small client lists intentionally — so the counsel you receive reflects genuine attention, not template thinking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--color-forest)", padding: "80px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "32px" }}>
          <div>
            <h3 style={{ fontFamily: "var(--font-heading-en)", fontWeight: 300, fontSize: "28px", letterSpacing: "-0.02em", color: "var(--color-white)", marginBottom: "8px" }}>Capacity is limited.</h3>
            <p style={{ fontFamily: "var(--font-body-en)", fontSize: "15px", color: "rgba(255,255,255,0.65)" }}>Reach out to discuss whether a retainer spot is currently available.</p>
          </div>
          <Link href="/contact" style={{ fontFamily: "var(--font-body-en)", fontSize: "14px", fontWeight: 500, color: "var(--color-forest)", backgroundColor: "var(--color-gold)", padding: "14px 28px", borderRadius: "4px", textDecoration: "none" }}>
            Enquire about availability ↗
          </Link>
        </div>
      </section>

      <style>{`@media (max-width: 767px) { .two-col { grid-template-columns: 1fr !important; gap: 32px !important; } }`}</style>
    </>
  );
}
