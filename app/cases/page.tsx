import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies — Meridian Advisory",
  description: "Real results from warehouse management, transportation, and supply chain engagements across e-commerce, wholesale, and manufacturing.",
};

export const cases = [
  {
    slug: "ecommerce-wms-peak-readiness",
    industry: "E-Commerce",
    solution: "Warehouse Management",
    client: "Online Apparel Retailer",
    headline: "WMS Implementation Cuts Picking Errors 35% Before Peak Season",
    summary:
      "A fast-growing online retailer with three fulfilment centres needed to handle a 4× volume surge during peak. We designed and deployed a WMS solution that delivered operational control in 90 days.",
    metrics: [
      { value: "35%", label: "Reduction in picking errors" },
      { value: "28%", label: "Throughput increase" },
      { value: "99.4%", label: "Order accuracy rate" },
    ],
    tags: ["WMS", "E-Commerce", "Peak Operations"],
  },
  {
    slug: "wholesale-tms-freight-savings",
    industry: "Wholesale & Distribution",
    solution: "Transportation Management",
    client: "Regional FMCG Distributor",
    headline: "TMS Rollout Reduces Freight Spend by 22% Across 200+ Daily Routes",
    summary:
      "A regional distributor running 200+ daily routes had no visibility into carrier performance or route costs. Our TMS implementation unified their carrier base and introduced dynamic route optimisation.",
    metrics: [
      { value: "22%", label: "Freight cost reduction" },
      { value: "15%", label: "Faster average delivery" },
      { value: "4.8/5", label: "Driver satisfaction score" },
    ],
    tags: ["TMS", "Wholesale", "Route Optimisation"],
  },
  {
    slug: "omnichannel-inventory-visibility",
    industry: "E-Commerce",
    solution: "Warehouse Management",
    client: "DTC + Marketplace Brand",
    headline: "Real-Time Inventory Visibility Eliminates Stockouts Across 5 Sales Channels",
    summary:
      "A consumer brand selling across its own website, two marketplaces, and two retail partners had chronic overselling and stockout problems. A unified inventory layer solved both in one engagement.",
    metrics: [
      { value: "40%", label: "Reduction in stockout events" },
      { value: "30%", label: "Lower overstock holding cost" },
      { value: "2.1×", label: "Inventory turn improvement" },
    ],
    tags: ["Omnichannel", "Inventory", "E-Commerce"],
  },
  {
    slug: "manufacturing-warehouse-optimisation",
    industry: "Manufacturing",
    solution: "Warehouse Management",
    client: "Industrial Components Manufacturer",
    headline: "Warehouse Redesign Recovers 32% Floor Space Without Capital Expenditure",
    summary:
      "A mid-size manufacturer was paying for off-site storage due to perceived space constraints. A systematic warehouse analysis revealed significant recoverable capacity through slotting and flow redesign.",
    metrics: [
      { value: "32%", label: "Floor space recovered" },
      { value: "0", label: "Capital expenditure required" },
      { value: "18%", label: "Pick path distance reduction" },
    ],
    tags: ["Warehouse Optimisation", "Manufacturing", "Layout"],
  },
  {
    slug: "wholesale-distribution-network",
    industry: "Wholesale & Distribution",
    solution: "Transportation Management",
    client: "Building Materials Wholesaler",
    headline: "Distribution Network Consolidation Delivers $1.4M Annual Savings",
    summary:
      "Operating six regional warehouses with overlapping coverage zones, a building materials wholesaler was duplicating inventory and freight costs. A network rationalisation study identified a 3-warehouse model with better reach.",
    metrics: [
      { value: "$1.4M", label: "Annual cost savings" },
      { value: "3", label: "Warehouses (down from 6)" },
      { value: "98%", label: "Delivery SLA maintained" },
    ],
    tags: ["Network Design", "Wholesale", "Cost Reduction"],
  },
  {
    slug: "ecommerce-returns-processing",
    industry: "E-Commerce",
    solution: "Warehouse Management",
    client: "Fashion E-Commerce Platform",
    headline: "Returns Processing Time Halved, Recovery Rate Reaches 87%",
    summary:
      "A fashion platform with a 28% return rate was losing margin on every return due to slow grading and restocking. A dedicated returns cell with defined grading logic transformed returns from a cost centre into a recovery engine.",
    metrics: [
      { value: "50%", label: "Faster returns processing" },
      { value: "87%", label: "Sellable recovery rate" },
      { value: "28%→18%", label: "Effective return cost rate" },
    ],
    tags: ["Returns Management", "E-Commerce", "Operations"],
  },
  {
    slug: "wholesale-erp-misfit-rescue",
    industry: "Wholesale & Distribution",
    solution: "ERP & Systems Advisory",
    client: "Great Lakes Specialty Foods Ltd.",
    headline: "Enterprise ERP Misfit Identified and Replaced, Eliminating 400+ Monthly Order Errors",
    summary:
      "A Mississauga food wholesaler with 1,200+ SKUs was sold an enterprise retail ERP built for chains ten times their size. After six months of cascading failures, we diagnosed the root cause and delivered a right-sized replacement in 11 weeks.",
    metrics: [
      { value: "400+", label: "Order errors eliminated monthly" },
      { value: "92%", label: "B2B pricing accuracy restored" },
      { value: "11wks", label: "Replacement system live" },
    ],
    tags: ["ERP Advisory", "Wholesale", "Systems Rescue"],
  },
  {
    slug: "wholesale-b2b-pricing-recovery",
    industry: "Wholesale & Distribution",
    solution: "ERP & Systems Advisory",
    client: "Pacific Gateway Food Distributors Inc.",
    headline: "B2B Pricing Engine Rebuilt After System Migration — Invoice Disputes Down 94%",
    summary:
      "After a platform migration, a Burnaby specialty food distributor's customer portal was showing incorrect prices across 650+ restaurant accounts. Staff were manually correcting 80+ invoices daily. We rebuilt the pricing configuration without a system replacement.",
    metrics: [
      { value: "94%", label: "Invoice dispute reduction" },
      { value: "80+", label: "Daily manual corrections eliminated" },
      { value: "6wks", label: "Full pricing accuracy restored" },
    ],
    tags: ["ERP Advisory", "Wholesale", "Pricing Recovery"],
  },
  {
    slug: "wholesale-systems-integration",
    industry: "Wholesale & Distribution",
    solution: "ERP & Systems Advisory",
    client: "Trident Import & Distribution Ltd.",
    headline: "Disconnected Shopify, ERP, and Accounting Systems Unified — Manual Re-Entry Eliminated",
    summary:
      "A Richmond Hill Asian food importer was re-entering every B2B order manually across three disconnected systems. We designed and built the integration layer that connected Shopify B2B, their ERP, and Xero — cutting order processing time by 71%.",
    metrics: [
      { value: "71%", label: "Order processing time reduction" },
      { value: "0", label: "Manual re-entry steps remaining" },
      { value: "3", label: "Systems connected in one layer" },
    ],
    tags: ["Systems Integration", "Wholesale", "ERP Advisory"],
  },
  {
    slug: "wholesale-erp-upgrade-failure-rescue",
    industry: "Wholesale & Distribution",
    solution: "ERP & Systems Advisory",
    client: "Lakeshore Food Group Inc.",
    headline: "ERP Upgrade Go-Live Collapsed, Rescued and Completed — Operations Restored Within 18 Days",
    summary:
      "A Hamilton food wholesaler's long-planned ERP upgrade collapsed on go-live day: an incomplete data migration left 2,800 customer records unreadable, order processing halted for 72 hours, and the implementation partner withdrew. We stabilised operations, recovered the data, and completed the upgrade the original team could not.",
    metrics: [
      { value: "72hrs", label: "Order processing restored" },
      { value: "2,800+", label: "Customer records recovered" },
      { value: "18d", label: "Full system stable post-rescue" },
    ],
    tags: ["ERP Advisory", "Wholesale", "Upgrade Recovery"],
  },
];

const industries = ["All", "E-Commerce", "Wholesale & Distribution", "Manufacturing"];
const solutions = ["All Solutions", "Warehouse Management", "Transportation Management", "ERP & Systems Advisory"];

export default function CasesPage() {
  return (
    <main style={{ paddingTop: "68px" }}>
      {/* Hero */}
      <section
        style={{
          backgroundColor: "var(--color-forest)",
          color: "var(--color-white)",
          padding: "80px 32px 64px",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              display: "inline-block",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--color-gold)",
              marginBottom: "20px",
            }}
          >
            Client Results
          </div>
          <h1
            style={{
              fontFamily: "var(--font-heading-en)",
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              maxWidth: "680px",
              marginBottom: "24px",
            }}
          >
            Real outcomes.<br />Measurable results.
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.75)",
              maxWidth: "560px",
              lineHeight: 1.65,
            }}
          >
            Every engagement is built around a specific operational problem. Here is what our clients achieved.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section
        style={{
          backgroundColor: "var(--color-dark)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 32px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "1px",
            backgroundColor: "rgba(255,255,255,0.06)",
          }}
        >
          {[
            { value: "40+", label: "Engagements" },
            { value: "22%", label: "Avg freight savings" },
            { value: "99%+", label: "Order accuracy achieved" },
            { value: "90d", label: "First measurable outcome" },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                padding: "28px 32px",
                backgroundColor: "var(--color-dark)",
              }}
            >
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
              <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", letterSpacing: "0.02em" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cases grid */}
      <section style={{ padding: "72px 32px 96px", backgroundColor: "var(--color-warm-white)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          {/* Filter pills (visual only — static) */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              marginBottom: "48px",
            }}
          >
            {industries.map((ind, i) => (
              <span
                key={ind}
                style={{
                  padding: "6px 16px",
                  borderRadius: "100px",
                  fontSize: "13px",
                  fontWeight: 500,
                  backgroundColor: i === 0 ? "var(--color-forest)" : "transparent",
                  color: i === 0 ? "#fff" : "var(--color-slate)",
                  border: i === 0 ? "1px solid var(--color-forest)" : "1px solid var(--color-border)",
                  cursor: "pointer",
                  transition: "all 0.15s",
                }}
              >
                {ind}
              </span>
            ))}
            <span style={{ width: "1px", backgroundColor: "var(--color-border)", margin: "0 4px" }} />
            {solutions.slice(1).map((sol) => (
              <span
                key={sol}
                style={{
                  padding: "6px 16px",
                  borderRadius: "100px",
                  fontSize: "13px",
                  fontWeight: 500,
                  backgroundColor: "transparent",
                  color: "var(--color-slate)",
                  border: "1px solid var(--color-border)",
                  cursor: "pointer",
                  transition: "all 0.15s",
                }}
              >
                {sol}
              </span>
            ))}
          </div>

          {/* Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "24px",
            }}
          >
            {cases.map((c) => (
              <Link
                key={c.slug}
                href={`/cases/${c.slug}`}
                style={{ textDecoration: "none", display: "block" }}
              >
                <article
                  style={{
                    backgroundColor: "#fff",
                    border: "1px solid var(--color-border)",
                    borderRadius: "12px",
                    overflow: "hidden",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "box-shadow 0.2s, transform 0.2s",
                    cursor: "pointer",
                  }}
                  className="case-index-card"
                >
                  {/* Top colour bar */}
                  <div
                    style={{
                      height: "4px",
                      backgroundColor:
                        c.solution === "Transportation Management"
                          ? "#0369A1"
                          : "var(--color-forest)",
                    }}
                  />

                  <div style={{ padding: "28px 28px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
                    {/* Meta */}
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: 600,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "var(--color-forest)",
                        }}
                      >
                        {c.industry}
                      </span>
                      <span style={{ width: "3px", height: "3px", borderRadius: "50%", backgroundColor: "var(--color-border)" }} />
                      <span style={{ fontSize: "11px", color: "var(--color-slate)", letterSpacing: "0.05em" }}>
                        {c.solution}
                      </span>
                    </div>

                    {/* Headline */}
                    <h2
                      style={{
                        fontFamily: "var(--font-heading-en)",
                        fontSize: "18px",
                        fontWeight: 600,
                        letterSpacing: "-0.02em",
                        lineHeight: 1.35,
                        color: "var(--color-dark)",
                        marginBottom: "12px",
                      }}
                    >
                      {c.headline}
                    </h2>

                    {/* Summary */}
                    <p
                      style={{
                        fontSize: "14px",
                        color: "var(--color-slate)",
                        lineHeight: 1.6,
                        marginBottom: "24px",
                        flex: 1,
                      }}
                    >
                      {c.summary}
                    </p>

                    {/* Metrics */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "12px",
                        padding: "16px",
                        backgroundColor: "var(--color-muted)",
                        borderRadius: "8px",
                        marginBottom: "20px",
                      }}
                    >
                      {c.metrics.map((m) => (
                        <div key={m.label}>
                          <div
                            style={{
                              fontFamily: "var(--font-heading-en)",
                              fontSize: "20px",
                              fontWeight: 700,
                              color: "var(--color-forest)",
                              letterSpacing: "-0.02em",
                              marginBottom: "2px",
                            }}
                          >
                            {m.value}
                          </div>
                          <div style={{ fontSize: "11px", color: "var(--color-slate)", lineHeight: 1.3 }}>
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Read more */}
                    <div
                      style={{
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "var(--color-forest)",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      Read case study →
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          backgroundColor: "var(--color-forest)",
          padding: "80px 32px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
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
            Ready to see similar results?
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", marginBottom: "36px" }}>
            Start with a 30-day diagnostic. We map your operation and identify the highest-value changes.
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
              letterSpacing: "0.01em",
            }}
          >
            Book a Diagnostic →
          </Link>
        </div>
      </section>
      <style>{`.case-index-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.08); transform: translateY(-2px); }`}</style>
    </main>
  );
}
