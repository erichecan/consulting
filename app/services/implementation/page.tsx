import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Implementation — Meridian Advisory",
  description: "We embed alongside your team for 90–180 days to drive measurable operational change from concept to outcome.",
};

export default function ImplementationPage() {
  return (
    <>
      <section style={{ backgroundColor: "var(--color-forest)", paddingTop: "140px", paddingBottom: "80px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <Link href="/services" style={{ fontFamily: "var(--font-body-en)", fontSize: "13px", color: "rgba(255,255,255,0.5)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "32px" }}>
            ← Services
          </Link>
          <p style={{ fontFamily: "var(--font-body-en)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "16px" }}>
            02 / Implementation · 90–180 days
          </p>
          <h1 style={{ fontFamily: "var(--font-heading-en)", fontWeight: 300, fontSize: "clamp(36px, 5vw, 64px)", letterSpacing: "-0.03em", color: "var(--color-white)", lineHeight: "1.05", maxWidth: "680px", marginBottom: "24px" }}>
            From roadmap to measurable outcome.
          </h1>
          <p style={{ fontFamily: "var(--font-body-en)", fontSize: "17px", lineHeight: "1.7", color: "rgba(255,255,255,0.7)", maxWidth: "540px" }}>
            We embed alongside your team to drive the changes identified in the diagnostic phase — managing workstreams, redesigning processes, and tracking financial impact against baseline.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--color-warm-white)", padding: "96px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }} className="two-col">
            <div>
              <h2 style={{ fontFamily: "var(--font-heading-en)", fontWeight: 300, fontSize: "32px", letterSpacing: "-0.02em", color: "var(--color-dark)", marginBottom: "24px" }}>How we work</h2>
              <p style={{ fontFamily: "var(--font-body-en)", fontSize: "16px", lineHeight: "1.8", color: "var(--color-slate)", marginBottom: "20px" }}>
                We don&apos;t hand over a slide deck and wish you luck. Our team embeds directly into your organisation — attending operational meetings, joining the reporting cadence, and doing the work alongside your people.
              </p>
              <p style={{ fontFamily: "var(--font-body-en)", fontSize: "16px", lineHeight: "1.8", color: "var(--color-slate)" }}>
                Every workstream has an internal owner on your side and a Meridian lead on ours. Progress is tracked weekly against measurable milestones with financial impact quantified at each stage.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {[
                { title: "Embedded execution", desc: "Our consultants work inside your organisation — not from an external office." },
                { title: "Weekly reporting", desc: "A concise progress report with financial impact tracking, delivered to your leadership team." },
                { title: "Process documentation", desc: "Every changed process is documented in SOPs your team can own and iterate." },
                { title: "Capability building", desc: "We train your team as we go. Our goal is to make ourselves redundant." },
              ].map((item, i) => (
                <div key={i} style={{ padding: "20px 0", borderBottom: "1px solid var(--color-border)" }}>
                  <h3 style={{ fontFamily: "var(--font-body-en)", fontWeight: 500, fontSize: "15px", color: "var(--color-dark)", marginBottom: "6px" }}>{item.title}</h3>
                  <p style={{ fontFamily: "var(--font-body-en)", fontSize: "14px", lineHeight: "1.6", color: "var(--color-slate)" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--color-muted)", padding: "80px 0", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "32px" }}>
          <div>
            <h3 style={{ fontFamily: "var(--font-heading-en)", fontWeight: 300, fontSize: "28px", letterSpacing: "-0.02em", color: "var(--color-dark)", marginBottom: "8px" }}>Usually follows the Diagnostic Sprint.</h3>
            <p style={{ fontFamily: "var(--font-body-en)", fontSize: "15px", color: "var(--color-slate)", maxWidth: "480px" }}>
              Clients who come with an existing diagnosis can engage directly. We&apos;ll validate the findings in week one before execution begins.
            </p>
          </div>
          <Link href="/contact" style={{ fontFamily: "var(--font-body-en)", fontSize: "14px", fontWeight: 500, color: "var(--color-white)", backgroundColor: "var(--color-forest)", padding: "14px 28px", borderRadius: "4px", textDecoration: "none" }}>
            Start the conversation ↗
          </Link>
        </div>
      </section>

      <style>{`@media (max-width: 767px) { .two-col { grid-template-columns: 1fr !important; gap: 32px !important; } }`}</style>
    </>
  );
}
