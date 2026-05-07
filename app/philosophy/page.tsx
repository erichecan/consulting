import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Philosophy — Meridian Advisory",
  description: "Our guiding principles: structural thinking, honest counsel, and outcomes that outlast the engagement.",
};

const principles = [
  {
    number: "01",
    title: "Problems have structural causes",
    zh: "问题源于结构",
    body: "Every operational failure — a missed forecast, a margin leak, a broken handoff — is a symptom. The cause lives upstream in how the organisation is designed. We don't fix the symptom. We redesign the system that keeps producing it.",
  },
  {
    number: "02",
    title: "Rigour over reassurance",
    zh: "严谨胜于安慰",
    body: "Most consultants tell clients what they want to hear. We tell clients what the data says. That means some engagements begin with uncomfortable findings. We believe discomfort at the diagnosis stage is far cheaper than comfort that delays the cure.",
  },
  {
    number: "03",
    title: "Ownership transfers with delivery",
    zh: "交付即转移所有权",
    body: "We measure success not by the quality of our slide decks but by whether the organisation can sustain the improvement after we leave. Every engagement ends with codified processes, trained teams, and measurable baselines — not a dependency.",
  },
  {
    number: "04",
    title: "Depth over breadth",
    zh: "深度胜于广度",
    body: "We work in three industries. We could work in more. We choose not to because deep expertise — knowing the specific cost structures, compliance landscapes, and buyer behaviours of your sector — produces better outcomes than generalist pattern-matching.",
  },
];

export default function Philosophy() {
  return (
    <>
      {/* Hero */}
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
            理念 / Philosophy
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
            The beliefs that shape how we work.
          </h1>
        </div>
      </section>

      {/* Opening */}
      <section style={{ backgroundColor: "var(--color-warm-white)", padding: "96px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }} className="two-col">
            <p
              style={{
                fontFamily: "var(--font-heading-en)",
                fontWeight: 300,
                fontSize: "clamp(20px, 2.5vw, 28px)",
                lineHeight: "1.5",
                letterSpacing: "-0.01em",
                color: "var(--color-dark)",
              }}
            >
              Consulting has a reputation problem. Too many engagements produce reports that gather dust. We built Meridian because we believe there is a better model.
            </p>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-body-en)",
                  fontSize: "16px",
                  lineHeight: "1.8",
                  color: "var(--color-slate)",
                  marginBottom: "24px",
                }}
              >
                The better model starts with a different set of beliefs. About what causes operational problems. About what clients deserve to hear. About what &ldquo;done&rdquo; actually means.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body-en)",
                  fontSize: "16px",
                  lineHeight: "1.8",
                  color: "var(--color-slate)",
                }}
              >
                These are the four beliefs we return to, in every engagement, when things get complicated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section
        style={{
          backgroundColor: "var(--color-muted)",
          padding: "96px 0",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {principles.map((p, i) => (
              <div
                key={p.number}
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr 1fr",
                  gap: "40px",
                  padding: "56px 0",
                  borderTop: i === 0 ? "1px solid var(--color-border)" : "1px solid var(--color-border)",
                  alignItems: "start",
                }}
                className="principle-row"
              >
                <p
                  style={{
                    fontFamily: "var(--font-heading-en)",
                    fontWeight: 300,
                    fontSize: "13px",
                    letterSpacing: "0.08em",
                    color: "var(--color-gold)",
                    paddingTop: "4px",
                  }}
                >
                  {p.number}
                </p>
                <div>
                  <h2
                    style={{
                      fontFamily: "var(--font-heading-en)",
                      fontWeight: 400,
                      fontSize: "clamp(20px, 2.5vw, 28px)",
                      letterSpacing: "-0.01em",
                      color: "var(--color-dark)",
                      lineHeight: "1.2",
                      marginBottom: "8px",
                    }}
                  >
                    {p.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: "var(--font-heading-zh)",
                      fontSize: "14px",
                      color: "var(--color-slate)",
                    }}
                  >
                    {p.zh}
                  </p>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-body-en)",
                    fontSize: "15px",
                    lineHeight: "1.8",
                    color: "var(--color-slate)",
                  }}
                >
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--color-warm-white)", padding: "80px 0", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", display: "flex", gap: "24px", alignItems: "center", flexWrap: "wrap" }}>
          <p style={{ fontFamily: "var(--font-body-en)", fontSize: "16px", color: "var(--color-slate)", flex: 1, minWidth: "240px" }}>
            Curious whether our approach fits your situation?
          </p>
          <Link
            href="/approach"
            style={{
              fontFamily: "var(--font-body-en)",
              fontSize: "14px",
              fontWeight: 500,
              color: "var(--color-white)",
              backgroundColor: "var(--color-forest)",
              padding: "12px 24px",
              borderRadius: "4px",
              textDecoration: "none",
            }}
          >
            See our approach ↗
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 767px) {
          .two-col { grid-template-columns: 1fr !important; gap: 32px !important; }
          .principle-row { grid-template-columns: 40px 1fr !important; }
          .principle-row > p:last-child { grid-column: 2 !important; }
        }
      `}</style>
    </>
  );
}
