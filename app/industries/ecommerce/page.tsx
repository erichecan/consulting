import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Commerce Logistics — Meridian Advisory",
  description: "WMS and TMS solutions for e-commerce operators — fulfilment, omnichannel inventory, returns, and carrier management.",
};

export default function EcommercePage() {
  return (
    <main style={{ paddingTop: "68px" }}>
      {/* Hero */}
      <section
        style={{
          backgroundColor: "var(--color-forest)",
          color: "#fff",
          padding: "80px 32px 72px",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "24px",
            }}
          >
            <Link
              href="/industries"
              style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}
            >
              Industries
            </Link>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>→</span>
            <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)" }}>E-Commerce</span>
          </div>
          <h1
            style={{
              fontFamily: "var(--font-heading-en)",
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              maxWidth: "720px",
              marginBottom: "24px",
            }}
          >
            Operational infrastructure for e-commerce at scale
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.72)",
              maxWidth: "580px",
              lineHeight: 1.65,
              marginBottom: "36px",
            }}
          >
            From single-warehouse DTC brands to multi-channel platforms, we design and implement the WMS and TMS systems that keep fulfilment accurate and freight costs under control.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link
              href="/contact"
              style={{
                display: "inline-block",
                backgroundColor: "var(--color-gold)",
                color: "var(--color-dark)",
                padding: "13px 28px",
                borderRadius: "6px",
                fontWeight: 600,
                fontSize: "14px",
                textDecoration: "none",
                letterSpacing: "0.01em",
              }}
            >
              Book a Diagnostic →
            </Link>
            <Link
              href="/cases"
              style={{
                display: "inline-block",
                backgroundColor: "transparent",
                color: "#fff",
                padding: "13px 28px",
                borderRadius: "6px",
                fontWeight: 500,
                fontSize: "14px",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.3)",
              }}
            >
              See Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: "var(--color-dark)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 32px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "1px",
            backgroundColor: "rgba(255,255,255,0.07)",
          }}
        >
          {[
            { value: "35%", label: "Avg picking error reduction" },
            { value: "99.4%", label: "Order accuracy achieved" },
            { value: "40%", label: "Avg stockout reduction" },
            { value: "87%", label: "Returns recovery rate" },
          ].map((s) => (
            <div key={s.label} style={{ padding: "28px 32px", backgroundColor: "var(--color-dark)" }}>
              <div
                style={{
                  fontFamily: "var(--font-heading-en)",
                  fontSize: "28px",
                  fontWeight: 600,
                  color: "var(--color-gold)",
                  letterSpacing: "-0.02em",
                  marginBottom: "4px",
                }}
              >
                {s.value}
              </div>
              <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Challenges section */}
      <section style={{ padding: "80px 32px", backgroundColor: "var(--color-warm-white)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "80px",
              alignItems: "start",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--color-forest)",
                  marginBottom: "16px",
                }}
              >
                E-Commerce Challenges
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-heading-en)",
                  fontSize: "clamp(26px, 3.5vw, 38px)",
                  fontWeight: 600,
                  letterSpacing: "-0.03em",
                  color: "var(--color-dark)",
                  lineHeight: 1.2,
                  marginBottom: "24px",
                }}
              >
                The operational gaps that cost e-commerce operators margin
              </h2>
              <p style={{ fontSize: "16px", color: "var(--color-slate)", lineHeight: 1.7, marginBottom: "32px" }}>
                E-commerce logistics combines the complexity of retail velocity with the precision demands of individual order fulfilment. The gaps between channels, systems, and physical operations compound quickly—especially at scale.
              </p>
              <Link
                href="/cases"
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "var(--color-forest)",
                  textDecoration: "none",
                }}
              >
                View e-commerce case studies →
              </Link>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                {
                  title: "Peak volume without infrastructure",
                  desc: "4× volume surges during peak season with WMS systems that weren't designed for it—leading to errors, overtime, and backorders.",
                },
                {
                  title: "Multi-channel inventory desynchronisation",
                  desc: "Inventory counts that live in 5 different systems, updated on different schedules, leading to overselling and excess safety stock.",
                },
                {
                  title: "Returns destroying margin",
                  desc: "28%+ return rates with no defined grading process—slow restocking, inconsistent decisions, and written-off sellable stock.",
                },
                {
                  title: "Carrier cost and SLA opacity",
                  desc: "No visibility into which carriers are underperforming, and no leverage to renegotiate—freight spend growing faster than revenue.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: "#fff",
                    border: "1px solid var(--color-border)",
                    borderRadius: "8px",
                    padding: "20px 24px",
                    borderLeft: "3px solid var(--color-forest)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-heading-en)",
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "var(--color-dark)",
                      marginBottom: "6px",
                    }}
                  >
                    {item.title}
                  </div>
                  <div style={{ fontSize: "14px", color: "var(--color-slate)", lineHeight: 1.6 }}>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section style={{ padding: "80px 32px", backgroundColor: "#fff", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ marginBottom: "48px", textAlign: "center" }}>
            <div
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--color-forest)",
                marginBottom: "14px",
              }}
            >
              What We Deliver
            </div>
            <h2
              style={{
                fontFamily: "var(--font-heading-en)",
                fontSize: "clamp(28px, 3.5vw, 40px)",
                fontWeight: 600,
                letterSpacing: "-0.03em",
                color: "var(--color-dark)",
                lineHeight: 1.2,
                maxWidth: "560px",
                margin: "0 auto",
              }}
            >
              Solutions built for e-commerce operations
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {[
              {
                icon: "▦",
                title: "WMS Implementation",
                desc: "End-to-end warehouse management system design, selection, and deployment—including directed put-away, pick wave logic, and labour productivity tracking.",
                href: "/services/warehouse",
              },
              {
                icon: "◈",
                title: "Omnichannel Inventory",
                desc: "Unified inventory master layer across all sales channels with channel-level ATP buffers and automated daily reconciliation.",
                href: "/services/warehouse",
              },
              {
                icon: "↩",
                title: "Returns Processing",
                desc: "Dedicated returns cell design with grading decision matrices, 48-hour processing SLAs, and Grade B liquidation channel setup.",
                href: "/services/warehouse",
              },
              {
                icon: "◎",
                title: "Carrier & TMS Strategy",
                desc: "Carrier network audit, performance benchmarking, TMS implementation with dynamic route optimisation for last-mile delivery.",
                href: "/services/transportation",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  backgroundColor: "var(--color-warm-white)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "10px",
                  padding: "28px 24px",
                }}
              >
                <div
                  style={{
                    fontSize: "20px",
                    marginBottom: "16px",
                    color: "var(--color-forest)",
                    fontWeight: 300,
                  }}
                >
                  {item.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-heading-en)",
                    fontSize: "17px",
                    fontWeight: 600,
                    color: "var(--color-dark)",
                    marginBottom: "10px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: "14px", color: "var(--color-slate)", lineHeight: 1.65, marginBottom: "16px" }}>
                  {item.desc}
                </p>
                <Link
                  href={item.href}
                  style={{ fontSize: "13px", fontWeight: 500, color: "var(--color-forest)", textDecoration: "none" }}
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured cases */}
      <section style={{ padding: "80px 32px", backgroundColor: "var(--color-warm-white)", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
            <h2
              style={{
                fontFamily: "var(--font-heading-en)",
                fontSize: "22px",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                color: "var(--color-dark)",
              }}
            >
              E-Commerce case studies
            </h2>
            <Link
              href="/cases"
              style={{ fontSize: "13px", fontWeight: 500, color: "var(--color-forest)", textDecoration: "none" }}
            >
              View all cases →
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "20px" }}>
            {[
              {
                slug: "ecommerce-wms-peak-readiness",
                headline: "WMS Implementation Cuts Picking Errors 35% Before Peak Season",
                metric: "35% error reduction",
              },
              {
                slug: "omnichannel-inventory-visibility",
                headline: "Real-Time Inventory Visibility Eliminates Stockouts Across 5 Sales Channels",
                metric: "40% fewer stockouts",
              },
              {
                slug: "ecommerce-returns-processing",
                headline: "Returns Processing Time Halved, Recovery Rate Reaches 87%",
                metric: "87% recovery rate",
              },
            ].map((item) => (
              <Link
                key={item.slug}
                href={`/cases/${item.slug}`}
                style={{ textDecoration: "none" }}
              >
                <article
                  style={{
                    backgroundColor: "#fff",
                    border: "1px solid var(--color-border)",
                    borderRadius: "10px",
                    padding: "24px",
                    cursor: "pointer",
                    transition: "box-shadow 0.2s",
                    borderTop: "3px solid var(--color-forest)",
                  }}
                  className="case-card"
                >
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--color-gold)",
                      marginBottom: "10px",
                    }}
                  >
                    {item.metric}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading-en)",
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "var(--color-dark)",
                      lineHeight: 1.35,
                      marginBottom: "16px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.headline}
                  </h3>
                  <div style={{ fontSize: "13px", fontWeight: 500, color: "var(--color-forest)" }}>
                    Read case study →
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style>{`.case-card:hover { box-shadow: 0 6px 20px rgba(0,0,0,0.07); }`}</style>
      {/* CTA */}
      <section style={{ backgroundColor: "var(--color-forest)", padding: "80px 32px", textAlign: "center" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-heading-en)",
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              color: "#fff",
              marginBottom: "16px",
            }}
          >
            Ready to fix your e-commerce operations?
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", marginBottom: "36px" }}>
            Start with a 30-day operational diagnostic. We identify the highest-leverage changes across your fulfilment and freight network.
          </p>
          <Link
            href="/contact"
            style={{
              display: "inline-block",
              backgroundColor: "var(--color-gold)",
              color: "var(--color-dark)",
              padding: "14px 36px",
              borderRadius: "6px",
              fontWeight: 600,
              fontSize: "15px",
              textDecoration: "none",
            }}
          >
            Book a Diagnostic →
          </Link>
        </div>
      </section>
    </main>
  );
}
