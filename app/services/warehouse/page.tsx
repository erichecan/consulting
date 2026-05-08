import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Warehouse Management (WMS) — Meridian Advisory",
  description: "WMS strategy, selection, and implementation for e-commerce, wholesale, and manufacturing operations. 90-day first-outcome guarantee.",
};

export default function WarehousePage() {
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
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
            <Link href="/services" style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
              Solutions
            </Link>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>→</span>
            <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)" }}>Warehouse Management</span>
          </div>
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
            WMS Solutions
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
            Warehouse management that delivers measurable results in 90 days
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
            We design, select, and implement warehouse management systems matched to your operation—not the vendor's default configuration. Every engagement is anchored to a measurable first outcome within 90 days.
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
              View WMS Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
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
            { value: "32%", label: "Floor space recovered" },
            { value: "90d", label: "First measurable outcome" },
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

      {/* Services detail */}
      <section style={{ padding: "80px 32px", backgroundColor: "var(--color-warm-white)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ marginBottom: "56px" }}>
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
              }}
            >
              Four core WMS service areas
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}>
            {[
              {
                number: "01",
                title: "WMS Assessment & Selection",
                points: [
                  "Current-state warehouse assessment across people, process, and technology",
                  "Requirements definition based on operational realities, not vendor checklists",
                  "Vendor evaluation and selection using a weighted scoring model",
                  "Business case development with ROI modelling",
                ],
              },
              {
                number: "02",
                title: "WMS Implementation & Go-Live",
                points: [
                  "Configuration scoping and vendor project governance",
                  "Directed put-away rules and pick wave logic design",
                  "Integration architecture with ERP, e-commerce platforms, and carrier systems",
                  "Staged go-live planning to protect operational continuity",
                ],
              },
              {
                number: "03",
                title: "Inventory Optimisation",
                points: [
                  "SKU velocity analysis and slotting redesign",
                  "Omnichannel inventory master layer with ATP buffers",
                  "Safety stock recalculation using demand-weighted models",
                  "Cycle count programme design replacing full physical counts",
                ],
              },
              {
                number: "04",
                title: "Returns & Special Operations",
                points: [
                  "Dedicated returns processing cell design with defined flow stations",
                  "Grading decision matrices per product category",
                  "Grade B liquidation channel setup",
                  "Inbound receiving and quality control process redesign",
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
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-heading-en)",
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    color: "var(--color-gold)",
                    marginBottom: "12px",
                  }}
                >
                  {service.number}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-heading-en)",
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "var(--color-dark)",
                    marginBottom: "20px",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.3,
                  }}
                >
                  {service.title}
                </h3>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                  {service.points.map((pt, i) => (
                    <li key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                      <span style={{ color: "var(--color-forest)", fontSize: "14px", flexShrink: 0, marginTop: "2px" }}>✓</span>
                      <span style={{ fontSize: "14px", color: "var(--color-slate)", lineHeight: 1.6 }}>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: "80px 32px", backgroundColor: "#fff", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ marginBottom: "48px" }}>
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
              Our Process
            </div>
            <h2
              style={{
                fontFamily: "var(--font-heading-en)",
                fontSize: "clamp(26px, 3.5vw, 36px)",
                fontWeight: 600,
                letterSpacing: "-0.03em",
                color: "var(--color-dark)",
                lineHeight: 1.2,
                maxWidth: "480px",
              }}
            >
              How a WMS engagement works
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0" }}>
            {[
              { step: "1", label: "30-Day Diagnostic", desc: "On-site assessment of your warehouse operations, systems, and team. Output: prioritised improvement roadmap." },
              { step: "2", label: "Design & Selection", desc: "Requirements defined, WMS vendor evaluated, integration architecture mapped, business case built." },
              { step: "3", label: "Implementation", desc: "Phased rollout with go-live protection. Configuration, testing, training, and first-wave go-live." },
              { step: "4", label: "Stabilisation", desc: "30-day hypercare post go-live. KPI measurement against baseline, issue resolution, team handover." },
            ].map((step, i) => (
              <div
                key={i}
                style={{
                  padding: "32px 28px",
                  borderRight: i < 3 ? "1px solid var(--color-border)" : "none",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-heading-en)",
                    fontSize: "48px",
                    fontWeight: 700,
                    color: "rgba(0,63,45,0.06)",
                    lineHeight: 1,
                    marginBottom: "16px",
                    letterSpacing: "-0.04em",
                  }}
                >
                  {step.step}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-heading-en)",
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "var(--color-dark)",
                    marginBottom: "10px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {step.label}
                </h3>
                <p style={{ fontSize: "14px", color: "var(--color-slate)", lineHeight: 1.65 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section style={{ padding: "72px 32px", backgroundColor: "var(--color-warm-white)", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "36px" }}>
            <h2
              style={{
                fontFamily: "var(--font-heading-en)",
                fontSize: "22px",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                color: "var(--color-dark)",
              }}
            >
              WMS case studies
            </h2>
            <Link href="/cases" style={{ fontSize: "13px", fontWeight: 500, color: "var(--color-forest)", textDecoration: "none" }}>
              View all →
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
            {[
              { slug: "ecommerce-wms-peak-readiness", metric: "35% picking error reduction", headline: "WMS Implementation Cuts Picking Errors 35% Before Peak Season" },
              { slug: "omnichannel-inventory-visibility", metric: "40% fewer stockouts", headline: "Real-Time Inventory Visibility Eliminates Stockouts Across 5 Sales Channels" },
              { slug: "manufacturing-warehouse-optimisation", metric: "32% floor space recovered", headline: "Warehouse Redesign Recovers 32% Floor Space Without Capital Expenditure" },
            ].map((c) => (
              <Link key={c.slug} href={`/cases/${c.slug}`} style={{ textDecoration: "none" }}>
                <article
                  className="case-card"
                  style={{
                    backgroundColor: "#fff",
                    border: "1px solid var(--color-border)",
                    borderRadius: "10px",
                    padding: "24px",
                    borderTop: "3px solid var(--color-forest)",
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
                  <div style={{ fontSize: "13px", fontWeight: 500, color: "var(--color-forest)" }}>Read case study →</div>
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
          <h2 style={{ fontFamily: "var(--font-heading-en)", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 600, letterSpacing: "-0.03em", color: "#fff", marginBottom: "16px" }}>
            Start with a 30-day diagnostic
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", marginBottom: "36px" }}>
            We map your warehouse operations, benchmark against your industry, and identify the highest-value changes before any system selection begins.
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
