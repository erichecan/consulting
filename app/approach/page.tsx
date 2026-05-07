import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Approach — Meridian Advisory",
  description: "How we structure engagements: diagnostic-first, embedded execution, and a clear handover.",
};

const phases = [
  {
    phase: "Phase 01",
    title: "Diagnostic",
    duration: "Weeks 1–4",
    zh: "诊断",
    steps: [
      "Stakeholder interviews across all functions",
      "Financial and operational data review",
      "Process mapping and bottleneck identification",
      "Competitive context and benchmarking",
      "Prioritised findings and roadmap delivery",
    ],
    outcome: "A 30–50 page findings document and a ranked action roadmap, delivered in a structured readout with your leadership team.",
  },
  {
    phase: "Phase 02",
    title: "Implementation",
    duration: "Months 2–6",
    zh: "执行",
    steps: [
      "Workstream launch with internal owners",
      "Weekly cadence and milestone tracking",
      "Process redesign and SOP documentation",
      "Technology configuration and integration",
      "Progress reporting with financial impact tracking",
    ],
    outcome: "Measurable improvements across targeted metrics, with all changes embedded in your operating rhythm — not dependent on our continued presence.",
  },
  {
    phase: "Phase 03",
    title: "Handover",
    duration: "Week 20–24",
    zh: "交接",
    steps: [
      "Documentation of all process changes",
      "Internal team training and knowledge transfer",
      "Baseline vs. outcome performance review",
      "30-day support window post-exit",
      "Optional retainer structure for ongoing counsel",
    ],
    outcome: "Your team runs the improved system independently. We leave a capability, not a dependency.",
  },
];

export default function Approach() {
  return (
    <>
      {/* Hero */}
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
            方法 / Approach
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
            A structured process designed to deliver, not just advise.
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
            Three phases. Fixed timelines. Measurable outcomes at each stage. No open-ended retainers disguised as transformation programmes.
          </p>
        </div>
      </section>

      {/* Phases */}
      <section style={{ backgroundColor: "var(--color-warm-white)", padding: "96px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {phases.map((p, i) => (
              <div
                key={p.phase}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "80px",
                  padding: "64px 0",
                  borderTop: "1px solid var(--color-border)",
                }}
                className="phase-row"
              >
                <div>
                  <div style={{ display: "flex", gap: "16px", alignItems: "baseline", marginBottom: "20px" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-body-en)",
                        fontSize: "11px",
                        fontWeight: 500,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--color-gold)",
                      }}
                    >
                      {p.phase}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-body-en)",
                        fontSize: "12px",
                        color: "var(--color-slate)",
                      }}
                    >
                      {p.duration}
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
                    {p.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: "var(--font-heading-zh)",
                      fontSize: "15px",
                      color: "var(--color-slate)",
                      marginBottom: "32px",
                    }}
                  >
                    {p.zh}
                  </p>
                  <div
                    style={{
                      backgroundColor: "var(--color-muted)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "4px",
                      padding: "24px",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-body-en)",
                        fontSize: "11px",
                        fontWeight: 500,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "var(--color-slate)",
                        marginBottom: "12px",
                      }}
                    >
                      Outcome
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-body-en)",
                        fontSize: "14px",
                        lineHeight: "1.7",
                        color: "var(--color-dark)",
                      }}
                    >
                      {p.outcome}
                    </p>
                  </div>
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-body-en)",
                      fontSize: "11px",
                      fontWeight: 500,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--color-slate)",
                      marginBottom: "20px",
                    }}
                  >
                    What we do
                  </p>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0" }}>
                    {p.steps.map((step, j) => (
                      <li
                        key={j}
                        style={{
                          display: "flex",
                          gap: "16px",
                          padding: "14px 0",
                          borderBottom: j < p.steps.length - 1 ? "1px solid var(--color-border)" : "none",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--font-body-en)",
                            fontSize: "12px",
                            color: "var(--color-gold)",
                            paddingTop: "2px",
                            flexShrink: 0,
                          }}
                        >
                          {String(j + 1).padStart(2, "0")}
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--font-body-en)",
                            fontSize: "15px",
                            color: "var(--color-dark)",
                            lineHeight: "1.5",
                          }}
                        >
                          {step}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles strip */}
      <section
        style={{
          backgroundColor: "var(--color-muted)",
          padding: "64px 0",
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "48px" }} className="three-col">
            {[
              { label: "Fixed-fee engagements", desc: "No surprise billings. Scope, timeline, and price are agreed at the start." },
              { label: "Diagnostic before prescription", desc: "We never recommend a solution before completing a structured assessment." },
              { label: "No offshore delivery", desc: "The team you meet is the team that does the work. No hand-offs to junior associates." },
            ].map((item) => (
              <div key={item.label}>
                <p
                  style={{
                    fontFamily: "var(--font-body-en)",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "var(--color-forest)",
                    marginBottom: "8px",
                    letterSpacing: "0.01em",
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body-en)",
                    fontSize: "14px",
                    lineHeight: "1.65",
                    color: "var(--color-slate)",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--color-warm-white)", padding: "80px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "32px" }}>
          <div>
            <h3
              style={{
                fontFamily: "var(--font-heading-en)",
                fontWeight: 300,
                fontSize: "28px",
                letterSpacing: "-0.02em",
                color: "var(--color-dark)",
                marginBottom: "8px",
              }}
            >
              Start with the diagnostic.
            </h3>
            <p style={{ fontFamily: "var(--font-body-en)", fontSize: "15px", color: "var(--color-slate)" }}>
              30 days. A clear picture of where you are losing value.
            </p>
          </div>
          <Link
            href="/contact"
            style={{
              fontFamily: "var(--font-body-en)",
              fontSize: "14px",
              fontWeight: 500,
              color: "var(--color-white)",
              backgroundColor: "var(--color-forest)",
              padding: "14px 28px",
              borderRadius: "4px",
              textDecoration: "none",
            }}
          >
            Book a Diagnostic ↗
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 767px) {
          .phase-row { grid-template-columns: 1fr !important; gap: 32px !important; }
          .three-col { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </>
  );
}
