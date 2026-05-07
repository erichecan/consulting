import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diagnostic Sprint — Meridian Advisory",
  description: "A 30-day structured assessment that maps every friction point across your operations and produces a prioritised action roadmap.",
};

const weeks = [
  { week: "Week 1", title: "Access & orientation", tasks: ["Kickoff and stakeholder briefing", "Document and data collection", "Interview scheduling"] },
  { week: "Week 2", title: "Deep interviews", tasks: ["12–18 structured interviews across functions", "Process observation sessions", "Financial data analysis begins"] },
  { week: "Week 3", title: "Analysis & synthesis", tasks: ["Root cause mapping", "Cost and margin reconstruction", "Draft findings development"] },
  { week: "Week 4", title: "Delivery", tasks: ["Internal review and validation", "Findings document finalisation", "Leadership readout and roadmap presentation"] },
];

export default function DiagnosticPage() {
  return (
    <>
      <section style={{ backgroundColor: "var(--color-forest)", paddingTop: "140px", paddingBottom: "80px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <Link href="/services" style={{ fontFamily: "var(--font-body-en)", fontSize: "13px", color: "rgba(255,255,255,0.5)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "32px" }}>
            ← Services
          </Link>
          <p style={{ fontFamily: "var(--font-body-en)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "16px" }}>
            01 / Diagnostic Sprint · 30 days
          </p>
          <h1 style={{ fontFamily: "var(--font-heading-en)", fontWeight: 300, fontSize: "clamp(36px, 5vw, 64px)", letterSpacing: "-0.03em", color: "var(--color-white)", lineHeight: "1.05", maxWidth: "680px", marginBottom: "24px" }}>
            Find the structural fault before it compounds.
          </h1>
          <p style={{ fontFamily: "var(--font-body-en)", fontSize: "17px", lineHeight: "1.7", color: "rgba(255,255,255,0.7)", maxWidth: "540px" }}>
            A 30-day deep diagnostic of your operations, finance, and organisational design — producing a findings document and ranked action roadmap your leadership team can act on immediately.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--color-warm-white)", padding: "96px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px" }} className="two-col">
            <div>
              <h2 style={{ fontFamily: "var(--font-heading-en)", fontWeight: 300, fontSize: "32px", letterSpacing: "-0.02em", color: "var(--color-dark)", marginBottom: "24px" }}>
                Who it&apos;s for
              </h2>
              <p style={{ fontFamily: "var(--font-body-en)", fontSize: "16px", lineHeight: "1.8", color: "var(--color-slate)", marginBottom: "20px" }}>
                The Diagnostic Sprint is designed for business leaders who know something is wrong but can&apos;t locate the root cause. Revenue is flat. Margin is compressing. Headcount is growing faster than output. The team is busy but the business isn&apos;t moving.
              </p>
              <p style={{ fontFamily: "var(--font-body-en)", fontSize: "16px", lineHeight: "1.8", color: "var(--color-slate)" }}>
                These are structural problems dressed as operational problems. They require a structural diagnosis.
              </p>
            </div>
            <div>
              <h2 style={{ fontFamily: "var(--font-heading-en)", fontWeight: 300, fontSize: "32px", letterSpacing: "-0.02em", color: "var(--color-dark)", marginBottom: "24px" }}>
                What you receive
              </h2>
              {["30–50 page findings document", "Priority-ranked action roadmap", "Financial impact quantification", "90-day quick-win implementation plan", "Leadership readout with Q&A", "30-day post-delivery support"].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "12px", padding: "12px 0", borderBottom: "1px solid var(--color-border)" }}>
                  <span style={{ color: "var(--color-gold)", fontSize: "14px", paddingTop: "3px" }}>✓</span>
                  <span style={{ fontFamily: "var(--font-body-en)", fontSize: "15px", color: "var(--color-dark)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--color-muted)", padding: "96px 0", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <h2 style={{ fontFamily: "var(--font-heading-en)", fontWeight: 300, fontSize: "36px", letterSpacing: "-0.02em", color: "var(--color-dark)", marginBottom: "56px" }}>
            Four weeks. No surprises.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", backgroundColor: "var(--color-border)" }} className="weeks-grid">
            {weeks.map((w) => (
              <div key={w.week} style={{ backgroundColor: "var(--color-warm-white)", padding: "32px 28px" }}>
                <p style={{ fontFamily: "var(--font-body-en)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "8px" }}>{w.week}</p>
                <h3 style={{ fontFamily: "var(--font-heading-en)", fontWeight: 400, fontSize: "18px", letterSpacing: "-0.01em", color: "var(--color-dark)", marginBottom: "20px" }}>{w.title}</h3>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {w.tasks.map((t, i) => (
                    <li key={i} style={{ fontFamily: "var(--font-body-en)", fontSize: "13px", color: "var(--color-slate)", lineHeight: "1.5", paddingLeft: "12px", borderLeft: "2px solid var(--color-border)" }}>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--color-forest)", padding: "80px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "32px" }}>
          <div>
            <h3 style={{ fontFamily: "var(--font-heading-en)", fontWeight: 300, fontSize: "28px", letterSpacing: "-0.02em", color: "var(--color-white)", marginBottom: "8px" }}>Ready to start the diagnostic?</h3>
            <p style={{ fontFamily: "var(--font-body-en)", fontSize: "15px", color: "rgba(255,255,255,0.65)" }}>We typically begin within two weeks of engagement confirmation.</p>
          </div>
          <Link href="/contact" style={{ fontFamily: "var(--font-body-en)", fontSize: "14px", fontWeight: 500, color: "var(--color-forest)", backgroundColor: "var(--color-gold)", padding: "14px 28px", borderRadius: "4px", textDecoration: "none" }}>
            Book a Diagnostic ↗
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 767px) {
          .two-col { grid-template-columns: 1fr !important; gap: 32px !important; }
          .weeks-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
