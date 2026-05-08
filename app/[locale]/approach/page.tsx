import Link from "next/link";
import { getTranslations, getLocale } from "next-intl/server";

export default async function ApproachPage() {
  const t = await getTranslations("approach");
  const locale = await getLocale();
  const l = (href: string) => `/${locale}${href}`;

  const phases = t.raw("phases") as Array<{
    phase: string;
    title: string;
    duration: string;
    steps: string[];
    outcome: string;
  }>;

  const principles = t.raw("principles") as Array<{ label: string; desc: string }>;

  return (
    <main style={{ paddingTop: "68px" }}>
      {/* Hero */}
      <section
        style={{
          backgroundColor: "var(--color-forest)",
          color: "var(--color-white)",
          padding: "96px 32px 80px",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--color-gold)",
              marginBottom: "24px",
            }}
          >
            {t("eyebrow")}
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
            {t("headline")}
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.72)", maxWidth: "580px", lineHeight: 1.65 }}>
            {t("sub")}
          </p>
        </div>
      </section>

      {/* Phases */}
      <section style={{ padding: "80px 32px 96px", backgroundColor: "var(--color-warm-white)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "4px" }}>
          {phases.map((phase, i) => (
            <div
              key={phase.phase}
              style={{
                display: "grid",
                gridTemplateColumns: "240px 1fr 320px",
                gap: "56px",
                padding: "56px 48px",
                backgroundColor: "#fff",
                border: "1px solid var(--color-border)",
                borderRadius: "12px",
                alignItems: "start",
              }}
              className="phase-card"
            >
              {/* Phase label */}
              <div>
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--color-gold)",
                    marginBottom: "8px",
                  }}
                >
                  {phase.phase}
                </div>
                <h2
                  style={{
                    fontFamily: "var(--font-heading-en)",
                    fontSize: "28px",
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    color: "var(--color-dark)",
                    marginBottom: "8px",
                  }}
                >
                  {phase.title}
                </h2>
                <div style={{ fontSize: "13px", color: "var(--color-slate)" }}>{phase.duration}</div>
              </div>

              {/* Steps */}
              <div>
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--color-slate)",
                    marginBottom: "16px",
                  }}
                >
                  {t("whatWeDoLabel")}
                </div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                  {phase.steps.map((step, j) => (
                    <li key={j} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <span
                        style={{
                          flexShrink: 0,
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          backgroundColor: "rgba(201,169,97,0.12)",
                          border: "1px solid rgba(201,169,97,0.3)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "10px",
                          fontWeight: 700,
                          color: "var(--color-gold)",
                          marginTop: "1px",
                        }}
                      >
                        {j + 1}
                      </span>
                      <span style={{ fontSize: "14px", color: "var(--color-slate)", lineHeight: 1.55 }}>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcome */}
              <div
                style={{
                  backgroundColor: "var(--color-muted)",
                  borderRadius: "8px",
                  padding: "24px",
                  borderLeft: "3px solid var(--color-forest)",
                }}
              >
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--color-forest)",
                    marginBottom: "12px",
                  }}
                >
                  {t("outcomeLabel")}
                </div>
                <p style={{ fontSize: "14px", color: "var(--color-dark)", lineHeight: 1.6 }}>
                  {phase.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Principles */}
      <section style={{ padding: "64px 32px 80px", backgroundColor: "var(--color-dark)" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            backgroundColor: "rgba(255,255,255,0.07)",
          }}
          className="principles-grid"
        >
          {principles.map((p) => (
            <div key={p.label} style={{ padding: "40px 48px", backgroundColor: "var(--color-dark)" }}>
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "var(--color-white)",
                  marginBottom: "12px",
                  letterSpacing: "-0.01em",
                }}
              >
                {p.label}
              </div>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--color-forest)", padding: "72px 32px", textAlign: "center" }}>
        <div style={{ maxWidth: "520px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-heading-en)",
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              color: "#fff",
              marginBottom: "16px",
            }}
          >
            {t("ctaHeadline")}
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", marginBottom: "32px" }}>
            {t("ctaSub")}
          </p>
          <Link
            href={l("/contact")}
            style={{
              display: "inline-block",
              backgroundColor: "var(--color-gold)",
              color: "var(--color-dark)",
              padding: "14px 32px",
              borderRadius: "6px",
              fontWeight: 600,
              fontSize: "15px",
              textDecoration: "none",
            }}
          >
            {t("ctaBtn")}
          </Link>
        </div>
      </section>
      <style>{`
        @media (max-width: 1024px) {
          .phase-card { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 767px) {
          .principles-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
