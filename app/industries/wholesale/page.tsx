import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wholesale Distribution — Meridian Advisory",
  description: "Strategic and operational consulting for wholesale distributors navigating margin compression, logistics complexity, and working capital challenges.",
};

const challenges = [
  {
    title: "Supplier fragmentation",
    body: "Too many suppliers, too little negotiating leverage. As SKU counts climb, purchasing power per supplier declines and administrative overhead rises disproportionately.",
  },
  {
    title: "Logistics cost creep",
    body: "Rising freight, fuel, and labour costs eat into distribution margins that were thin to begin with. Route inefficiencies compound over time without structured analysis.",
  },
  {
    title: "Working capital trap",
    body: "Slow-moving inventory ties up capital that could fund growth. Most distributors don't know which SKUs are actually profitable when carrying costs are included.",
  },
  {
    title: "Customer concentration risk",
    body: "Revenue is often concentrated in a handful of accounts. Losing one large customer can trigger a structural crisis rather than a recoverable shortfall.",
  },
];

export default function WholesalePage() {
  return (
    <>
      <section style={{ backgroundColor: "var(--color-forest)", paddingTop: "140px", paddingBottom: "80px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <Link href="/industries" style={{ fontFamily: "var(--font-body-en)", fontSize: "13px", color: "rgba(255,255,255,0.5)", textDecoration: "none", marginBottom: "32px", display: "inline-block" }}>
            ← Industries
          </Link>
          <p style={{ fontFamily: "var(--font-body-en)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "16px" }}>
            01 / Wholesale Distribution · 批发分销
          </p>
          <h1 style={{ fontFamily: "var(--font-heading-en)", fontWeight: 300, fontSize: "clamp(36px, 5vw, 64px)", letterSpacing: "-0.03em", color: "var(--color-white)", lineHeight: "1.05", maxWidth: "680px", marginBottom: "24px" }}>
            Defending margin in a distribution business.
          </h1>
          <p style={{ fontFamily: "var(--font-body-en)", fontSize: "17px", lineHeight: "1.7", color: "rgba(255,255,255,0.7)", maxWidth: "540px" }}>
            Wholesale distribution is a margin management business disguised as a logistics business. Our work in this sector focuses on the structural levers that protect and expand distribution margins.
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
                Most wholesale distributors we work with have grown by adding volume without scrutinising whether that volume is actually profitable. Our diagnostic phase typically uncovers 2–4 percentage points of hidden margin within the existing business.
              </p>
              <p style={{ fontFamily: "var(--font-body-en)", fontSize: "16px", lineHeight: "1.8", color: "var(--color-slate)" }}>
                Implementation work then focuses on locking those gains in — through supplier consolidation, route optimisation, SKU discipline, and working capital management.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {[
                { metric: "18–24%", desc: "EBIT margin improvement (median across engagements)" },
                { metric: "30–40%", desc: "Reduction in active supplier count" },
                { metric: "15–25%", desc: "Improvement in inventory turn" },
                { metric: "2–3×", desc: "Return on engagement fee within 12 months" },
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
            <p style={{ fontFamily: "var(--font-body-en)", fontSize: "15px", color: "rgba(255,255,255,0.65)" }}>30 days. A clear picture of where you are losing margin.</p>
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
