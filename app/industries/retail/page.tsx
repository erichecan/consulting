import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retail & Consumer — Meridian Advisory",
  description: "Strategic and operational consulting for retail and consumer businesses navigating SKU complexity, promotional spend, and inventory management.",
};

const challenges = [
  {
    title: "SKU proliferation",
    body: "Range expansion feels like growth but often destroys margin. Most retailers carry 20–30% of SKUs that generate less than 5% of revenue while consuming disproportionate inventory capital and operational complexity.",
  },
  {
    title: "Promotional spend ROI",
    body: "Promotional budgets grow by default rather than by design. Without systematic tracking, discounting becomes the default response to volume pressure — eroding the margin base permanently.",
  },
  {
    title: "Inventory turn stagnation",
    body: "Slow turns inflate working capital requirements and create markdown pressure. The root cause is usually buying decisions disconnected from sell-through data.",
  },
  {
    title: "Store operations inconsistency",
    body: "Performance variance across stores or channels is almost always a process and accountability issue. Benchmarking reveals the gap; structured operations management closes it.",
  },
];

export default function RetailPage() {
  return (
    <>
      <section style={{ backgroundColor: "var(--color-forest)", paddingTop: "140px", paddingBottom: "80px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <Link href="/industries" style={{ fontFamily: "var(--font-body-en)", fontSize: "13px", color: "rgba(255,255,255,0.5)", textDecoration: "none", marginBottom: "32px", display: "inline-block" }}>
            ← Industries
          </Link>
          <p style={{ fontFamily: "var(--font-body-en)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "16px" }}>
            03 / Retail & Consumer · 零售与消费品
          </p>
          <h1 style={{ fontFamily: "var(--font-heading-en)", fontWeight: 300, fontSize: "clamp(36px, 5vw, 64px)", letterSpacing: "-0.03em", color: "var(--color-white)", lineHeight: "1.05", maxWidth: "680px", marginBottom: "24px" }}>
            Sell less, earn more.
          </h1>
          <p style={{ fontFamily: "var(--font-body-en)", fontSize: "17px", lineHeight: "1.7", color: "rgba(255,255,255,0.7)", maxWidth: "540px" }}>
            Retail improvement is often about subtraction rather than addition. Fewer SKUs, better promotional discipline, and tighter inventory management consistently produce more margin than the next product launch or store opening.
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
                The diagnostic phase maps the full product range against sell-through, margin contribution, and inventory turn. That analysis reliably identifies a rationalisation opportunity — typically 20–30% of SKUs that can be cut without materially affecting revenue.
              </p>
              <p style={{ fontFamily: "var(--font-body-en)", fontSize: "16px", lineHeight: "1.8", color: "var(--color-slate)" }}>
                Implementation focuses on range discipline, promotional ROI frameworks, and the buying process changes needed to sustain the improvement.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {[
                { metric: "2–4×", desc: "Inventory turn improvement post-engagement" },
                { metric: "20–30%", desc: "SKU count reduction with minimal revenue impact" },
                { metric: "3–5%", desc: "Gross margin improvement from promotional discipline" },
                { metric: "15–25%", desc: "Reduction in markdown volume in the following season" },
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
            <p style={{ fontFamily: "var(--font-body-en)", fontSize: "15px", color: "rgba(255,255,255,0.65)" }}>30 days. A clear view of which SKUs are earning their place on your shelves.</p>
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
