import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transportation Management (TMS) — Meridian Advisory",
  description: "TMS implementation, carrier management, and route optimisation for wholesalers, distributors, and e-commerce operators.",
};

export default function TransportationPage() {
  const accent = "#0369A1";

  return (
    <main style={{ paddingTop: "68px" }}>
      {/* Hero */}
      <section
        style={{
          backgroundColor: accent,
          color: "#fff",
          padding: "80px 32px 72px",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
            <Link href="/services" style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>
              Solutions
            </Link>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>→</span>
            <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.8)" }}>Transportation Management</span>
          </div>
          <div
            style={{
              display: "inline-block",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.75)",
              border: "1px solid rgba(255,255,255,0.25)",
              padding: "4px 10px",
              borderRadius: "4px",
              marginBottom: "20px",
            }}
          >
            TMS Solutions
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
            Cut freight spend and restore delivery visibility
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.75)",
              maxWidth: "580px",
              lineHeight: 1.65,
              marginBottom: "36px",
            }}
          >
            We implement transportation management systems that give you carrier performance data, dynamic route optimisation, and the leverage to renegotiate freight contracts from a position of evidence.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link
              href="/contact"
              style={{
                display: "inline-block",
                backgroundColor: "#fff",
                color: accent,
                padding: "13px 28px",
                borderRadius: "6px",
                fontWeight: 600,
                fontSize: "14px",
                textDecoration: "none",
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
                border: "1px solid rgba(255,255,255,0.35)",
              }}
            >
              View TMS Case Studies
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
            { value: "22%", label: "Avg freight cost reduction" },
            { value: "15%", label: "Faster average delivery" },
            { value: "$1.4M", label: "Annual savings (network case)" },
            { value: "98%", label: "Delivery SLA maintained" },
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

      {/* Services */}
      <section style={{ padding: "80px 32px", backgroundColor: "var(--color-warm-white)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ marginBottom: "52px" }}>
            <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: accent, marginBottom: "14px" }}>
              What We Deliver
            </div>
            <h2 style={{ fontFamily: "var(--font-heading-en)", fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 600, letterSpacing: "-0.03em", color: "var(--color-dark)", lineHeight: 1.2, maxWidth: "540px" }}>
              Four core TMS service areas
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}>
            {[
              {
                number: "01",
                title: "Carrier Network Audit",
                points: [
                  "Full carrier performance scorecard: on-time, damage rate, cost per km",
                  "Rate benchmarking against current market rates by lane and mode",
                  "Bottom-quartile carrier improvement plan or replacement strategy",
                  "Contract review and renegotiation support with data-backed leverage",
                ],
              },
              {
                number: "02",
                title: "TMS Selection & Implementation",
                points: [
                  "Requirements mapping from current-state route and carrier data",
                  "TMS vendor evaluation with weighted scoring across fit and cost",
                  "ERP and order management system integration architecture",
                  "Carrier portal onboarding and EDI/API connection setup",
                ],
              },
              {
                number: "03",
                title: "Route Optimisation",
                points: [
                  "Dynamic routing rulebook by delivery zone, carrier, and time window",
                  "Multi-stop route consolidation to reduce cost per delivery",
                  "SLA vs cost trade-off modelling per customer segment",
                  "Fleet and third-party carrier mode selection logic",
                ],
              },
              {
                number: "04",
                title: "Network Design",
                points: [
                  "Distribution network modelling using order history and customer geography",
                  "Scenario analysis: 2-, 3-, 4-warehouse configurations vs SLA and cost",
                  "Facility footprint rationalisation and transition planning",
                  "Inventory positioning strategy across network nodes",
                ],
              },
            ].map((service) => (
              <div
                key={service.number}
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid var(--color-border)",
                  borderRadius: "10px",
                  padding: "32px 28px",
                  borderTop: `3px solid ${accent}`,
                }}
              >
                <div style={{ fontFamily: "var(--font-heading-en)", fontSize: "13px", fontWeight: 700, letterSpacing: "0.1em", color: accent, marginBottom: "12px" }}>
                  {service.number}
                </div>
                <h3 style={{ fontFamily: "var(--font-heading-en)", fontSize: "20px", fontWeight: 600, color: "var(--color-dark)", marginBottom: "20px", letterSpacing: "-0.02em", lineHeight: 1.3 }}>
                  {service.title}
                </h3>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                  {service.points.map((pt, i) => (
                    <li key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                      <span style={{ color: accent, fontSize: "14px", flexShrink: 0, marginTop: "2px" }}>✓</span>
                      <span style={{ fontSize: "14px", color: "var(--color-slate)", lineHeight: 1.6 }}>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section style={{ padding: "80px 32px", backgroundColor: "#fff", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: accent, marginBottom: "16px" }}>
                Why It Works
              </div>
              <h2 style={{ fontFamily: "var(--font-heading-en)", fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 600, letterSpacing: "-0.03em", color: "var(--color-dark)", lineHeight: 1.2, marginBottom: "24px" }}>
                Evidence-based freight management
              </h2>
              <p style={{ fontSize: "16px", color: "var(--color-slate)", lineHeight: 1.7, marginBottom: "16px" }}>
                Most TMS implementations fail because they install software without fixing the underlying data and process problems. We address both—starting with a carrier audit that creates the benchmarks the system needs to make good decisions.
              </p>
              <p style={{ fontSize: "16px", color: "var(--color-slate)", lineHeight: 1.7 }}>
                The result is a system that continuously generates better routing decisions as your carrier network data matures—not a one-time optimisation that drifts over time.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { label: "Data before software", desc: "Carrier performance data and lane benchmarking established before any TMS vendor is selected." },
                { label: "Route logic you own", desc: "Routing rules documented in plain language—not locked in vendor black-box algorithms." },
                { label: "Contract leverage", desc: "Performance scorecards give you factual leverage in carrier contract negotiations, typically yielding 8–15% rate reductions." },
                { label: "Operational continuity", desc: "Phased implementation with parallel-run periods ensures no delivery disruption during the transition." },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div
                    style={{
                      flexShrink: 0,
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: accent,
                      marginTop: "9px",
                    }}
                  />
                  <div>
                    <div style={{ fontFamily: "var(--font-heading-en)", fontSize: "15px", fontWeight: 600, color: "var(--color-dark)", marginBottom: "4px" }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: "14px", color: "var(--color-slate)", lineHeight: 1.6 }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section style={{ padding: "72px 32px", backgroundColor: "var(--color-warm-white)", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "36px" }}>
            <h2 style={{ fontFamily: "var(--font-heading-en)", fontSize: "22px", fontWeight: 600, letterSpacing: "-0.02em", color: "var(--color-dark)" }}>
              TMS case studies
            </h2>
            <Link href="/cases" style={{ fontSize: "13px", fontWeight: 500, color: accent, textDecoration: "none" }}>
              View all →
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
            {[
              { slug: "wholesale-tms-freight-savings", metric: "22% freight cost reduction", headline: "TMS Rollout Reduces Freight Spend by 22% Across 200+ Daily Routes" },
              { slug: "wholesale-distribution-network", metric: "$1.4M annual savings", headline: "Distribution Network Consolidation Delivers $1.4M Annual Savings" },
            ].map((c) => (
              <Link key={c.slug} href={`/cases/${c.slug}`} style={{ textDecoration: "none" }}>
                <article
                  className="case-card"
                  style={{
                    backgroundColor: "#fff",
                    border: "1px solid var(--color-border)",
                    borderRadius: "10px",
                    padding: "24px",
                    borderTop: `3px solid ${accent}`,
                    cursor: "pointer",
                    transition: "box-shadow 0.2s",
                  }}
                >
                  <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "10px" }}>
                    {c.metric}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-heading-en)", fontSize: "16px", fontWeight: 600, color: "var(--color-dark)", lineHeight: 1.35, marginBottom: "14px", letterSpacing: "-0.01em" }}>
                    {c.headline}
                  </h3>
                  <div style={{ fontSize: "13px", fontWeight: 500, color: accent }}>Read case study →</div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <style>{`.case-card:hover { box-shadow: 0 6px 20px rgba(0,0,0,0.07); }`}</style>
      <section style={{ backgroundColor: accent, padding: "80px 32px", textAlign: "center" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading-en)", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 600, letterSpacing: "-0.03em", color: "#fff", marginBottom: "16px" }}>
            Start with a carrier audit
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.75)", marginBottom: "36px" }}>
            In 30 days we benchmark your carrier network, quantify the savings opportunity, and give you the data you need to negotiate better rates—before any TMS project begins.
          </p>
          <Link
            href="/contact"
            style={{
              display: "inline-block",
              backgroundColor: "#fff",
              color: accent,
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
