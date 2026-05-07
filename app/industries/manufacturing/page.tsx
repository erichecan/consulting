import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manufacturing — Meridian Advisory",
  description: "Operational and financial consulting for manufacturers navigating capacity, overhead, and supply chain complexity.",
};

const challenges = [
  {
    title: "Capacity vs. overhead mismatch",
    body: "Fixed overhead structures built for peak volumes become a drag during contraction. Most manufacturers don't have a clear view of their true breakeven by product line.",
  },
  {
    title: "Production scheduling inefficiency",
    body: "Suboptimal scheduling creates unnecessary changeovers, inflated WIP, and missed delivery windows — all without appearing in the P&L as a named line item.",
  },
  {
    title: "Supply chain concentration",
    body: "Single-source dependencies create fragility. Many manufacturers have rationalised supplier counts too aggressively, trading resilience for short-term cost savings.",
  },
  {
    title: "Make-vs-buy drift",
    body: "Decisions made at one cost structure remain in place long after the economics have changed. Regular make-vs-buy review is rare but high-value.",
  },
];

export default function ManufacturingPage() {
  return (
    <>
      <section style={{ backgroundColor: "var(--color-forest)", paddingTop: "140px", paddingBottom: "80px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <Link href="/industries" style={{ fontFamily: "var(--font-body-en)", fontSize: "13px", color: "rgba(255,255,255,0.5)", textDecoration: "none", marginBottom: "32px", display: "inline-block" }}>
            ← Industries
          </Link>
          <p style={{ fontFamily: "var(--font-body-en)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "16px" }}>
            02 / Manufacturing · 制造业
          </p>
          <h1 style={{ fontFamily: "var(--font-heading-en)", fontWeight: 300, fontSize: "clamp(36px, 5vw, 64px)", letterSpacing: "-0.03em", color: "var(--color-white)", lineHeight: "1.05", maxWidth: "680px", marginBottom: "24px" }}>
            More throughput from the assets you already own.
          </h1>
          <p style={{ fontFamily: "var(--font-body-en)", fontSize: "17px", lineHeight: "1.7", color: "rgba(255,255,255,0.7)", maxWidth: "540px" }}>
            Manufacturing improvement doesn&apos;t always require capital expenditure. The most durable gains come from aligning your overhead structure, scheduling discipline, and supplier relationships with actual volume realities.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--color-warm-white)", padding: "96px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <h2 style={{ fontFamily: "var(--font-heading-en)", fontWeight: 300, fontSize: "36px", letterSpacing: "-0.02em", color: "var(--color-dark)", marginBottom: "56px" }}>
            The four challenges we see most often
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", backgroundColor: "var(--color-border)" }} className="challenges-grid">
            {challenges.map((c, i) => (
              <div key={i} style={{ backgroundColor: "var(--color-warm-white)", padding: "40px 36px" }}>
                <p style={{ fontFamily: "var(--font-body-en)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "12px" }}>
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 style={{ fontFamily: "var(--font-heading-en)", fontWeight: 400, fontSize: "22px", letterSpacing: "-0.01em", color: "var(--color-dark)", marginBottom: "16px" }}>
                  {c.title}
                </h3>
                <p style={{ fontFamily: "var(--font-body-en)", fontSize: "15px", lineHeight: "1.7", color: "var(--color-slate)" }}>
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--color-muted)", padding: "96px 0", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px" }} className="two-col">
            <div>
              <h2 style={{ fontFamily: "var(--font-heading-en)", fontWeight: 300, fontSize: "32px", letterSpacing: "-0.02em", color: "var(--color-dark)", marginBottom: "24px" }}>
                What a typical engagement delivers
              </h2>
              <p style={{ fontFamily: "var(--font-body-en)", fontSize: "16px", lineHeight: "1.8", color: "var(--color-slate)", marginBottom: "20px" }}>
                Our manufacturing engagements start with a detailed cost model — not the management accounts version, but a true product-level view with overhead properly allocated. That analysis typically surfaces 3–5 underperforming product lines that are consuming disproportionate capacity.
              </p>
              <p style={{ fontFamily: "var(--font-body-en)", fontSize: "16px", lineHeight: "1.8", color: "var(--color-slate)" }}>
                Implementation then focuses on scheduling discipline, supplier consolidation, and — where warranted — rationalising the product range itself.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {[
                { metric: "12–20%", desc: "Throughput improvement without capital expenditure" },
                { metric: "15–25%", desc: "Overhead cost reduction after rationalisation" },
                { metric: "20–35%", desc: "Reduction in changeover time through scheduling" },
                { metric: "8–14%", desc: "EBIT margin improvement (median across engagements)" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px 0", borderBottom: "1px solid var(--color-border)", display: "flex", gap: "24px", alignItems: "center" }}>
                  <p style={{ fontFamily: "var(--font-heading-en)", fontWeight: 300, fontSize: "32px", letterSpacing: "-0.02em", color: "var(--color-forest)", flexShrink: 0, minWidth: "120px" }}>
                    {item.metric}
                  </p>
                  <p style={{ fontFamily: "var(--font-body-en)", fontSize: "14px", color: "var(--color-slate)", lineHeight: "1.5" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--color-forest)", padding: "80px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "32px" }}>
          <div>
            <h3 style={{ fontFamily: "var(--font-heading-en)", fontWeight: 300, fontSize: "28px", letterSpacing: "-0.02em", color: "var(--color-white)", marginBottom: "8px" }}>Start with the Diagnostic Sprint.</h3>
            <p style={{ fontFamily: "var(--font-body-en)", fontSize: "15px", color: "rgba(255,255,255,0.65)" }}>30 days. A product-level view of where you are leaving margin on the floor.</p>
          </div>
          <Link href="/contact" style={{ fontFamily: "var(--font-body-en)", fontSize: "14px", fontWeight: 500, color: "var(--color-forest)", backgroundColor: "var(--color-gold)", padding: "14px 28px", borderRadius: "4px", textDecoration: "none" }}>
            Book a Diagnostic ↗
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 767px) {
          .two-col { grid-template-columns: 1fr !important; gap: 32px !important; }
          .challenges-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
