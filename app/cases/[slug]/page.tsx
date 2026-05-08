import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { cases } from "../page";

export async function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = cases.find((x) => x.slug === slug);
  if (!c) return {};
  return {
    title: `${c.headline} — Meridian Advisory`,
    description: c.summary,
  };
}

const challenges: Record<string, string[]> = {
  "ecommerce-wms-peak-readiness": [
    "Three fulfilment centres operating on disconnected spreadsheet-based systems with no real-time inventory visibility.",
    "Picking error rate of 4.2% was generating significant customer complaints and costly re-shipments.",
    "Approaching peak season with 4× projected volume surge and no scalable operational infrastructure in place.",
  ],
  "wholesale-tms-freight-savings": [
    "200+ daily routes managed through carrier phone calls and manual route sheets with no digital audit trail.",
    "No carrier performance benchmarking—poor performers renewed contracts at the same rates as top performers.",
    "Freight spend growing at 18% YoY despite flat volume, with no visibility into the root cause.",
  ],
  "omnichannel-inventory-visibility": [
    "Inventory managed in five separate systems—own website, two marketplaces, and two wholesale portals—with no synchronisation.",
    "Overselling events occurring weekly, resulting in order cancellations and marketplace penalty scores.",
    "Excess safety stock held across all channels to compensate, inflating working capital by an estimated 30%.",
  ],
  "manufacturing-warehouse-optimisation": [
    "Off-site storage facility leased at $12,400/month for components that 'wouldn't fit' in the main warehouse.",
    "No formal slotting strategy—fast movers and slow movers interleaved, adding unnecessary travel time per pick.",
    "Warehouse layout unchanged since facility opened 11 years prior despite significant product range evolution.",
  ],
  "wholesale-distribution-network": [
    "Six regional warehouses with overlapping delivery zones resulting in the same postcodes served from two locations.",
    "Inventory duplicated across sites—$2.1M in redundant stock held as each site managed its own safety stock.",
    "Rising lease costs across three sites approaching renewal, creating urgency for a network rationalisation decision.",
  ],
  "ecommerce-returns-processing": [
    "28% return rate with a grading process averaging 9 days from receipt to restocking decision.",
    "No defined grading criteria—individual staff made inconsistent sellable/unsellable calls on the same SKU type.",
    "Returns processed in the same area as inbound receipts, creating congestion and cross-contamination of inventory.",
  ],
};

const solutions: Record<string, string[]> = {
  "ecommerce-wms-peak-readiness": [
    "Conducted a 2-week current-state assessment across all three sites to establish baseline metrics and system requirements.",
    "Selected and configured a cloud-based WMS matched to the retailer's fulfilment model, with staged rollout across sites.",
    "Designed directed-put-away rules and pick wave logic to handle volume surges without proportional headcount increases.",
    "Trained warehouse supervisors as internal system champions to sustain performance post-engagement.",
  ],
  "wholesale-tms-freight-savings": [
    "Mapped the full carrier network and established a performance scorecard (on-time, damage rate, cost per km).",
    "Implemented a TMS with route optimisation engine integrated to the existing ERP order feed.",
    "Ran a carrier renegotiation process using performance data—bottom-quartile carriers placed on 90-day improvement plans.",
    "Created a dynamic routing rulebook that automatically selects the optimal carrier-route combination per delivery zone.",
  ],
  "omnichannel-inventory-visibility": [
    "Designed a single inventory master layer sitting above all five channel systems, updated on every transaction.",
    "Implemented channel-level ATP (available-to-promise) logic with configurable buffers per channel priority.",
    "Retired three of the five channel-specific safety stock calculations, replacing them with a single demand-weighted model.",
    "Deployed a daily inventory reconciliation process to catch any sync failures within 24 hours.",
  ],
  "manufacturing-warehouse-optimisation": [
    "Conducted full SKU velocity analysis across 12 months of pick data to classify fast, medium, and slow movers.",
    "Redesigned slotting using velocity-based zone allocation—top 15% of SKUs placed in a dedicated golden zone.",
    "Reconfigured racking layout to create a continuous pick flow path, eliminating cross-aisle dead zones.",
    "Moved 340 slow-moving SKUs to vertical storage, freeing floor space equivalent to the off-site lease footprint.",
  ],
  "wholesale-distribution-network": [
    "Built a network model using 24 months of order data to simulate delivery SLAs under 2-, 3-, and 4-warehouse scenarios.",
    "Identified a 3-warehouse configuration covering 98% of existing delivery SLAs with lower total inventory holding.",
    "Developed a transition plan sequencing site closures to avoid service disruption during the 9-month consolidation.",
    "Negotiated early lease exits on two sites, recovering 7 months of lease cost to fund the transition.",
  ],
  "ecommerce-returns-processing": [
    "Designed a dedicated returns processing cell with defined flow stations: receive → grade → sort → restock/liquidate.",
    "Created a grading decision matrix with 12 product categories and explicit sellable/unsellable criteria per condition code.",
    "Implemented a 48-hour processing SLA with daily throughput tracking visible to the operations manager.",
    "Established a liquidation channel for Grade B stock, converting previously written-off inventory into recovery revenue.",
  ],
};

export default async function CaseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = cases.find((x) => x.slug === slug);
  if (!c) notFound();

  const related = cases.filter(
    (x) => x.slug !== slug && (x.industry === c.industry || x.solution === c.solution)
  ).slice(0, 2);

  const accentColor = c.solution === "Transportation Management" ? "#0369A1" : "var(--color-forest)";

  return (
    <main style={{ paddingTop: "68px" }}>
      {/* Breadcrumb + hero */}
      <section
        style={{
          backgroundColor: "var(--color-forest)",
          color: "#fff",
          padding: "64px 32px 72px",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          {/* Breadcrumb */}
          <div style={{ marginBottom: "32px", display: "flex", gap: "8px", alignItems: "center" }}>
            <Link
              href="/cases"
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.55)",
                textDecoration: "none",
                letterSpacing: "0.02em",
              }}
            >
              Case Studies
            </Link>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "13px" }}>→</span>
            <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.8)", letterSpacing: "0.02em" }}>
              {c.client}
            </span>
          </div>

          {/* Tags */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "24px" }}>
            <span
              style={{
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--color-gold)",
                padding: "4px 10px",
                border: "1px solid rgba(201,169,97,0.35)",
                borderRadius: "4px",
              }}
            >
              {c.industry}
            </span>
            <span
              style={{
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.6)",
                padding: "4px 10px",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: "4px",
              }}
            >
              {c.solution}
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-heading-en)",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              maxWidth: "780px",
              marginBottom: "20px",
            }}
          >
            {c.headline}
          </h1>
          <p
            style={{
              fontSize: "17px",
              color: "rgba(255,255,255,0.72)",
              maxWidth: "620px",
              lineHeight: 1.65,
            }}
          >
            {c.summary}
          </p>
        </div>
      </section>

      {/* Metrics bar */}
      <section style={{ backgroundColor: "var(--color-dark)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 32px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            backgroundColor: "rgba(255,255,255,0.07)",
          }}
        >
          {c.metrics.map((m) => (
            <div key={m.label} style={{ padding: "32px 40px", backgroundColor: "var(--color-dark)" }}>
              <div
                style={{
                  fontFamily: "var(--font-heading-en)",
                  fontSize: "36px",
                  fontWeight: 700,
                  color: "var(--color-gold)",
                  letterSpacing: "-0.02em",
                  marginBottom: "6px",
                }}
              >
                {m.value}
              </div>
              <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.4 }}>
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Body */}
      <section style={{ padding: "80px 32px 96px", backgroundColor: "var(--color-warm-white)" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 320px",
            gap: "64px",
            alignItems: "start",
          }}
        >
          {/* Main content */}
          <div>
            {/* Challenge */}
            <div style={{ marginBottom: "56px" }}>
              <div
                style={{
                  display: "inline-block",
                  width: "3px",
                  height: "20px",
                  backgroundColor: accentColor,
                  marginRight: "12px",
                  verticalAlign: "middle",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-heading-en)",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--color-slate)",
                  verticalAlign: "middle",
                }}
              >
                The Challenge
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-heading-en)",
                  fontSize: "24px",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  color: "var(--color-dark)",
                  marginTop: "20px",
                  marginBottom: "24px",
                  lineHeight: 1.3,
                }}
              >
                What the client was facing
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {(challenges[c.slug] ?? [c.summary]).map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <div
                      style={{
                        flexShrink: 0,
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(201,169,97,0.12)",
                        border: "1px solid rgba(201,169,97,0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "var(--color-gold)",
                        marginTop: "2px",
                      }}
                    >
                      {i + 1}
                    </div>
                    <p style={{ fontSize: "16px", color: "var(--color-slate)", lineHeight: 1.65, margin: 0 }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Solution */}
            <div style={{ marginBottom: "56px" }}>
              <div
                style={{
                  display: "inline-block",
                  width: "3px",
                  height: "20px",
                  backgroundColor: accentColor,
                  marginRight: "12px",
                  verticalAlign: "middle",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-heading-en)",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--color-slate)",
                  verticalAlign: "middle",
                }}
              >
                Our Approach
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-heading-en)",
                  fontSize: "24px",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  color: "var(--color-dark)",
                  marginTop: "20px",
                  marginBottom: "24px",
                  lineHeight: 1.3,
                }}
              >
                How we solved it
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {(solutions[c.slug] ?? []).map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <div
                      style={{
                        flexShrink: 0,
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: accentColor,
                        marginTop: "8px",
                      }}
                    />
                    <p style={{ fontSize: "16px", color: "var(--color-slate)", lineHeight: 1.65, margin: 0 }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Results */}
            <div>
              <div
                style={{
                  display: "inline-block",
                  width: "3px",
                  height: "20px",
                  backgroundColor: accentColor,
                  marginRight: "12px",
                  verticalAlign: "middle",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-heading-en)",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--color-slate)",
                  verticalAlign: "middle",
                }}
              >
                Results
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-heading-en)",
                  fontSize: "24px",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  color: "var(--color-dark)",
                  marginTop: "20px",
                  marginBottom: "28px",
                  lineHeight: 1.3,
                }}
              >
                Measured outcomes
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "16px",
                }}
              >
                {c.metrics.map((m) => (
                  <div
                    key={m.label}
                    style={{
                      padding: "28px 24px",
                      backgroundColor: "#fff",
                      border: "1px solid var(--color-border)",
                      borderRadius: "10px",
                      borderTop: `3px solid ${accentColor}`,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-heading-en)",
                        fontSize: "32px",
                        fontWeight: 700,
                        color: accentColor,
                        letterSpacing: "-0.02em",
                        marginBottom: "8px",
                      }}
                    >
                      {m.value}
                    </div>
                    <div style={{ fontSize: "13px", color: "var(--color-slate)", lineHeight: 1.4 }}>
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside>
            {/* Client details */}
            <div
              style={{
                backgroundColor: "#fff",
                border: "1px solid var(--color-border)",
                borderRadius: "10px",
                padding: "28px",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--color-slate)",
                  marginBottom: "20px",
                }}
              >
                Engagement Details
              </div>
              {[
                { label: "Client", value: c.client },
                { label: "Industry", value: c.industry },
                { label: "Solution", value: c.solution },
              ].map((row) => (
                <div
                  key={row.label}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                    paddingBottom: "14px",
                    marginBottom: "14px",
                    borderBottom: "1px solid var(--color-border)",
                  }}
                >
                  <span style={{ fontSize: "11px", color: "var(--color-slate)", letterSpacing: "0.05em" }}>
                    {row.label}
                  </span>
                  <span style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-dark)" }}>
                    {row.value}
                  </span>
                </div>
              ))}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "4px" }}>
                {c.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "11px",
                      fontWeight: 500,
                      color: "var(--color-forest)",
                      backgroundColor: "rgba(0,63,45,0.07)",
                      padding: "4px 10px",
                      borderRadius: "100px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div
              style={{
                backgroundColor: "var(--color-forest)",
                borderRadius: "10px",
                padding: "28px",
                color: "#fff",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-heading-en)",
                  fontSize: "18px",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  marginBottom: "12px",
                  lineHeight: 1.3,
                }}
              >
                Facing a similar challenge?
              </h3>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginBottom: "20px" }}>
                Start with a 30-day diagnostic. We map your operation and identify the highest-value changes.
              </p>
              <Link
                href="/contact"
                style={{
                  display: "block",
                  textAlign: "center",
                  backgroundColor: "var(--color-gold)",
                  color: "var(--color-dark)",
                  padding: "12px 20px",
                  borderRadius: "6px",
                  fontWeight: 600,
                  fontSize: "13px",
                  textDecoration: "none",
                  letterSpacing: "0.01em",
                }}
              >
                Book a Diagnostic →
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Related cases */}
      {related.length > 0 && (
        <section style={{ padding: "64px 32px 80px", backgroundColor: "#fff", borderTop: "1px solid var(--color-border)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <h2
              style={{
                fontFamily: "var(--font-heading-en)",
                fontSize: "22px",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                color: "var(--color-dark)",
                marginBottom: "32px",
              }}
            >
              Related engagements
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: "20px",
              }}
            >
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/cases/${r.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  <article
                    className="related-card"
                    style={{
                      backgroundColor: "var(--color-warm-white)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "10px",
                      padding: "24px",
                      cursor: "pointer",
                      transition: "box-shadow 0.2s",
                    }}
                  >
                    <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-forest)", marginBottom: "8px" }}>
                      {r.industry}
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-heading-en)",
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "var(--color-dark)",
                        lineHeight: 1.35,
                        marginBottom: "12px",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {r.headline}
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
      )}
      <style>{`.related-card:hover { box-shadow: 0 4px 20px rgba(0,0,0,0.07); }`}</style>
    </main>
  );
}
