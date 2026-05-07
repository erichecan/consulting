import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights — Meridian Advisory",
  description: "Thinking on strategy, operations, and the decisions that compound — written for business leaders who move between the boardroom and the operational front line.",
};

const insights = [
  {
    slug: "why-operational-problems-are-structural",
    tag: "Operations",
    tagZh: "运营",
    title: "Why operational problems are usually structural ones in disguise",
    excerpt: "When leadership teams describe their business as 'too busy but not moving', they are almost always describing a structural design failure — not an effort problem.",
    date: "April 2025",
    readTime: "6 min read",
  },
  {
    slug: "the-diagnostic-before-the-prescription",
    tag: "Strategy",
    tagZh: "战略",
    title: "The diagnostic before the prescription: why we never lead with solutions",
    excerpt: "Most consultants arrive with answers. The honest ones arrive with questions. Understanding why changes everything about the quality of the recommendation that follows.",
    date: "March 2025",
    readTime: "5 min read",
  },
  {
    slug: "margin-compression-wholesale",
    tag: "Wholesale",
    tagZh: "批发",
    title: "Margin compression in wholesale distribution: the three levers that actually move the number",
    excerpt: "Wholesale distributors facing margin pressure typically look at procurement first. That is rarely where the biggest opportunity sits.",
    date: "February 2025",
    readTime: "8 min read",
  },
  {
    slug: "sku-rationalisation",
    tag: "Retail",
    tagZh: "零售",
    title: "The counterintuitive case for selling fewer products",
    excerpt: "Range expansion is the default growth strategy in retail. The data suggests it creates more complexity than revenue — and destroys margin in the process.",
    date: "January 2025",
    readTime: "7 min read",
  },
  {
    slug: "embedded-vs-advisory",
    tag: "Advisory",
    tagZh: "顾问",
    title: "Embedded execution vs. advisory: which model actually changes behaviour",
    excerpt: "The consulting industry has a delivery problem. Recommendations without implementation responsibility produce slide decks, not outcomes.",
    date: "December 2024",
    readTime: "5 min read",
  },
  {
    slug: "manufacturing-throughput-without-capex",
    tag: "Manufacturing",
    tagZh: "制造",
    title: "Improving manufacturing throughput without capital expenditure",
    excerpt: "The instinct to solve capacity problems with new equipment is understandable. It is also frequently unnecessary. The scheduling and process lever is almost always larger.",
    date: "November 2024",
    readTime: "9 min read",
  },
];

export default function Insights() {
  return (
    <>
      <section
        style={{
          backgroundColor: "var(--color-warm-white)",
          paddingTop: "140px",
          paddingBottom: "80px",
          borderBottom: "1px solid var(--color-border)",
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
            洞察 / Insights
          </p>
          <h1
            style={{
              fontFamily: "var(--font-heading-en)",
              fontWeight: 300,
              fontSize: "clamp(36px, 5vw, 64px)",
              letterSpacing: "-0.03em",
              color: "var(--color-dark)",
              lineHeight: "1.05",
              maxWidth: "680px",
            }}
          >
            Thinking that earns the reading.
          </h1>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--color-warm-white)", padding: "80px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", backgroundColor: "var(--color-border)" }} className="insights-grid">
            {insights.map((item) => (
              <Link
                key={item.slug}
                href={`/insights/${item.slug}`}
                style={{ textDecoration: "none", backgroundColor: "var(--color-warm-white)", padding: "36px 32px", display: "flex", flexDirection: "column" }}
                className="insight-card"
              >
                <div style={{ display: "flex", gap: "8px", marginBottom: "20px", alignItems: "center" }}>
                  <span style={{ fontFamily: "var(--font-body-en)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-gold)" }}>
                    {item.tag}
                  </span>
                  <span style={{ fontFamily: "var(--font-heading-zh)", fontSize: "11px", color: "var(--color-slate)" }}>
                    {item.tagZh}
                  </span>
                </div>
                <h2 style={{ fontFamily: "var(--font-heading-en)", fontWeight: 400, fontSize: "20px", letterSpacing: "-0.01em", color: "var(--color-dark)", lineHeight: "1.3", marginBottom: "16px", flex: 1 }}>
                  {item.title}
                </h2>
                <p style={{ fontFamily: "var(--font-body-en)", fontSize: "14px", lineHeight: "1.7", color: "var(--color-slate)", marginBottom: "24px" }}>
                  {item.excerpt}
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: "var(--font-body-en)", fontSize: "12px", color: "var(--color-slate)" }}>{item.date}</span>
                  <span style={{ fontFamily: "var(--font-body-en)", fontSize: "12px", color: "var(--color-slate)" }}>{item.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .insight-card:hover h2 { color: var(--color-forest); }
        @media (max-width: 1023px) { .insights-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 639px) { .insights-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
