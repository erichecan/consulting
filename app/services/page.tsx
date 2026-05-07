import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Meridian Advisory",
  description: "Three engagement models designed to meet you where you are: Diagnostic Sprint, Implementation, and Embedded Advisory.",
};

const services = [
  {
    number: "01",
    title: "Diagnostic Sprint",
    zh: "诊断冲刺",
    timeline: "30 days",
    ideal: "Businesses that sense something is wrong but can't locate the root cause.",
    deliverables: [
      "Full operational mapping across all functions",
      "Financial leak analysis and margin reconstruction",
      "Priority-ranked findings document (30–50 pages)",
      "90-day action roadmap with owner assignments",
      "Leadership readout and Q&A session",
    ],
    href: "/services/diagnostic",
  },
  {
    number: "02",
    title: "Implementation",
    zh: "落地执行",
    timeline: "90–180 days",
    ideal: "Businesses with a clear diagnosis that need hands-on help executing the changes.",
    deliverables: [
      "Dedicated workstream management",
      "Process redesign and SOP documentation",
      "Technology and systems configuration",
      "Weekly executive reporting",
      "Measurable outcome tracking against baseline",
    ],
    href: "/services/implementation",
  },
  {
    number: "03",
    title: "Embedded Advisory",
    zh: "嵌入式顾问",
    timeline: "Ongoing retainer",
    ideal: "Leadership teams that want a senior strategic thinking partner without adding headcount.",
    deliverables: [
      "Monthly strategy sessions with senior partner",
      "Decision review and stress-testing",
      "Priority initiatives oversight",
      "Unlimited async counsel",
      "Quarterly performance review",
    ],
    href: "/services/advisory",
  },
];

export default function Services() {
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
            服务 / Services
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
            Three ways to work together.
          </h1>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--color-warm-white)", padding: "96px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {services.map((s, i) => (
              <div
                key={s.number}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "80px",
                  padding: "64px 0",
                  borderTop: "1px solid var(--color-border)",
                }}
                className="service-row"
              >
                <div>
                  <div style={{ display: "flex", gap: "16px", alignItems: "baseline", marginBottom: "16px" }}>
                    <span style={{ fontFamily: "var(--font-body-en)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-gold)" }}>
                      {s.number}
                    </span>
                    <span style={{ fontFamily: "var(--font-body-en)", fontSize: "12px", color: "var(--color-slate)" }}>
                      {s.timeline}
                    </span>
                  </div>
                  <h2
                    style={{
                      fontFamily: "var(--font-heading-en)",
                      fontWeight: 400,
                      fontSize: "clamp(26px, 3vw, 36px)",
                      letterSpacing: "-0.02em",
                      color: "var(--color-dark)",
                      lineHeight: "1.1",
                      marginBottom: "8px",
                    }}
                  >
                    {s.title}
                  </h2>
                  <p style={{ fontFamily: "var(--font-heading-zh)", fontSize: "14px", color: "var(--color-slate)", marginBottom: "24px" }}>
                    {s.zh}
                  </p>
                  <p style={{ fontFamily: "var(--font-body-en)", fontSize: "15px", lineHeight: "1.7", color: "var(--color-slate)", marginBottom: "32px" }}>
                    <strong style={{ fontWeight: 500, color: "var(--color-dark)" }}>Best for: </strong>
                    {s.ideal}
                  </p>
                  <Link
                    href={s.href}
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
                    Learn more ↗
                  </Link>
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-body-en)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-slate)", marginBottom: "16px" }}>
                    What you receive
                  </p>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column" }}>
                    {s.deliverables.map((d, j) => (
                      <li
                        key={j}
                        style={{
                          display: "flex",
                          gap: "12px",
                          padding: "12px 0",
                          borderBottom: j < s.deliverables.length - 1 ? "1px solid var(--color-border)" : "none",
                        }}
                      >
                        <span style={{ color: "var(--color-gold)", flexShrink: 0, paddingTop: "3px", fontSize: "14px" }}>✓</span>
                        <span style={{ fontFamily: "var(--font-body-en)", fontSize: "15px", color: "var(--color-dark)", lineHeight: "1.5" }}>
                          {d}
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

      <section style={{ backgroundColor: "var(--color-forest)", padding: "80px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "32px" }}>
          <div>
            <h3 style={{ fontFamily: "var(--font-heading-en)", fontWeight: 300, fontSize: "28px", letterSpacing: "-0.02em", color: "var(--color-white)", marginBottom: "8px" }}>
              Not sure which is right for you?
            </h3>
            <p style={{ fontFamily: "var(--font-body-en)", fontSize: "15px", color: "rgba(255,255,255,0.65)" }}>
              A 30-minute call is usually enough to know.
            </p>
          </div>
          <Link href="/contact" style={{ fontFamily: "var(--font-body-en)", fontSize: "14px", fontWeight: 500, color: "var(--color-forest)", backgroundColor: "var(--color-gold)", padding: "14px 28px", borderRadius: "4px", textDecoration: "none" }}>
            Book a conversation ↗
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 767px) {
          .service-row { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </>
  );
}
