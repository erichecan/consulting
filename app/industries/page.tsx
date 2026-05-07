import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries — Meridian Advisory",
  description: "Deep sector expertise across wholesale distribution, manufacturing, and retail — we understand the operational and financial dynamics specific to each.",
};

const industries = [
  {
    number: "01",
    title: "Wholesale Distribution",
    zh: "批发分销",
    href: "/industries/wholesale",
    challenge: "Margin compression from rising logistics costs and fragmented supplier bases.",
    focus: ["Supplier rationalisation", "Logistics network redesign", "Working capital optimisation", "Category margin analysis"],
    stat: { value: "18–24%", label: "average EBIT margin improvement" },
  },
  {
    number: "02",
    title: "Manufacturing",
    zh: "制造业",
    href: "/industries/manufacturing",
    challenge: "Capacity underutilisation and overhead structures misaligned with volume realities.",
    focus: ["Production scheduling optimisation", "Overhead rationalisation", "Supply chain simplification", "Make-vs-buy analysis"],
    stat: { value: "12–20%", label: "throughput improvement without capital expenditure" },
  },
  {
    number: "03",
    title: "Retail & Consumer",
    zh: "零售与消费品",
    href: "/industries/retail",
    challenge: "SKU proliferation and promotional spend that destroys rather than creates margin.",
    focus: ["SKU rationalisation and ranging", "Promotional ROI analysis", "Store operations benchmarking", "Inventory turn improvement"],
    stat: { value: "2–4×", label: "inventory turn improvement post-engagement" },
  },
];

export default function Industries() {
  return (
    <>
      <section
        style={{
          backgroundColor: "var(--color-forest)",
          paddingTop: "140px",
          paddingBottom: "80px",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <p
            style={{
              fontFamily: "var(--font-heading-zh)",
              fontSize: "13px",
              color: "var(--color-gold)",
              marginBottom: "24px",
              letterSpacing: "0.05em",
            }}
          >
            行业 / Industries
          </p>
          <h1
            style={{
              fontFamily: "var(--font-heading-en)",
              fontWeight: 300,
              fontSize: "clamp(36px, 5vw, 64px)",
              letterSpacing: "-0.03em",
              color: "var(--color-white)",
              lineHeight: "1.05",
              maxWidth: "680px",
              marginBottom: "24px",
            }}
          >
            Sector depth, not sector breadth.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body-en)",
              fontSize: "16px",
              lineHeight: "1.7",
              color: "rgba(255,255,255,0.7)",
              maxWidth: "520px",
            }}
          >
            We work exclusively in three sectors. That focus means we walk into every engagement already knowing the benchmarks, the common failure modes, and the levers that move the numbers.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--color-warm-white)", padding: "96px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          {industries.map((ind) => (
            <div
              key={ind.number}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "80px",
                padding: "64px 0",
                borderTop: "1px solid var(--color-border)",
              }}
              className="industry-row"
            >
              <div>
                <div style={{ display: "flex", gap: "16px", alignItems: "baseline", marginBottom: "20px" }}>
                  <span style={{ fontFamily: "var(--font-body-en)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-gold)" }}>
                    {ind.number}
                  </span>
                </div>
                <h2
                  style={{
                    fontFamily: "var(--font-heading-en)",
                    fontWeight: 400,
                    fontSize: "clamp(28px, 3.5vw, 40px)",
                    letterSpacing: "-0.02em",
                    color: "var(--color-dark)",
                    lineHeight: "1.1",
                    marginBottom: "8px",
                  }}
                >
                  {ind.title}
                </h2>
                <p style={{ fontFamily: "var(--font-heading-zh)", fontSize: "15px", color: "var(--color-slate)", marginBottom: "24px" }}>
                  {ind.zh}
                </p>
                <p style={{ fontFamily: "var(--font-body-en)", fontSize: "15px", lineHeight: "1.7", color: "var(--color-slate)", marginBottom: "32px" }}>
                  <strong style={{ fontWeight: 500, color: "var(--color-dark)" }}>The core challenge: </strong>
                  {ind.challenge}
                </p>
                <div style={{ backgroundColor: "var(--color-muted)", border: "1px solid var(--color-border)", borderRadius: "4px", padding: "20px 24px", marginBottom: "32px" }}>
                  <p style={{ fontFamily: "var(--font-heading-en)", fontWeight: 300, fontSize: "28px", letterSpacing: "-0.02em", color: "var(--color-forest)", marginBottom: "4px" }}>
                    {ind.stat.value}
                  </p>
                  <p style={{ fontFamily: "var(--font-body-en)", fontSize: "13px", color: "var(--color-slate)" }}>
                    {ind.stat.label}
                  </p>
                </div>
                <Link
                  href={ind.href}
                  style={{
                    fontFamily: "var(--font-body-en)",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "var(--color-white)",
                    backgroundColor: "var(--color-forest)",
                    padding: "10px 20px",
                    borderRadius: "4px",
                    textDecoration: "none",
                  }}
                >
                  Explore {ind.title} ↗
                </Link>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-body-en)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-slate)", marginBottom: "20px" }}>
                  Where we focus
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column" }}>
                  {ind.focus.map((f, j) => (
                    <li
                      key={j}
                      style={{
                        display: "flex",
                        gap: "16px",
                        padding: "14px 0",
                        borderBottom: j < ind.focus.length - 1 ? "1px solid var(--color-border)" : "none",
                      }}
                    >
                      <span style={{ fontFamily: "var(--font-body-en)", fontSize: "12px", color: "var(--color-gold)", paddingTop: "2px", flexShrink: 0 }}>
                        {String(j + 1).padStart(2, "0")}
                      </span>
                      <span style={{ fontFamily: "var(--font-body-en)", fontSize: "15px", color: "var(--color-dark)", lineHeight: "1.5" }}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: "var(--color-forest)", padding: "80px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "32px" }}>
          <div>
            <h3 style={{ fontFamily: "var(--font-heading-en)", fontWeight: 300, fontSize: "28px", letterSpacing: "-0.02em", color: "var(--color-white)", marginBottom: "8px" }}>
              Don&apos;t see your sector?
            </h3>
            <p style={{ fontFamily: "var(--font-body-en)", fontSize: "15px", color: "rgba(255,255,255,0.65)" }}>
              We occasionally work outside these verticals for the right client. Reach out and we&apos;ll be direct about fit.
            </p>
          </div>
          <Link href="/contact" style={{ fontFamily: "var(--font-body-en)", fontSize: "14px", fontWeight: 500, color: "var(--color-forest)", backgroundColor: "var(--color-gold)", padding: "14px 28px", borderRadius: "4px", textDecoration: "none" }}>
            Start the conversation ↗
          </Link>
        </div>
      </section>

      <style>{`@media (max-width: 767px) { .industry-row { grid-template-columns: 1fr !important; gap: 32px !important; } }`}</style>
    </>
  );
}
