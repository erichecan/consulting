import Link from "next/link";
import { getTranslations, getLocale } from "next-intl/server";

export default async function PhilosophyPage() {
  const t = await getTranslations("philosophy");
  const locale = await getLocale();
  const l = (href: string) => `/${locale}${href}`;

  const principles = t.raw("principles") as Array<{ number: string; title: string; body: string }>;

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
              fontSize: "clamp(36px, 5vw, 60px)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              maxWidth: "700px",
            }}
          >
            {t("headline")}
          </h1>
        </div>
      </section>

      {/* Opening */}
      <section style={{ padding: "80px 32px", backgroundColor: "var(--color-warm-white)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "80px",
              borderBottom: "1px solid var(--color-border)",
              paddingBottom: "80px",
            }}
            className="two-col"
          >
            <p
              style={{
                fontSize: "20px",
                lineHeight: 1.7,
                color: "var(--color-dark)",
                fontWeight: 400,
              }}
            >
              {t("openingLeft")}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <p style={{ fontSize: "16px", lineHeight: 1.7, color: "var(--color-slate)" }}>
                {t("openingRight1")}
              </p>
              <p style={{ fontSize: "16px", lineHeight: 1.7, color: "var(--color-slate)" }}>
                {t("openingRight2")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section style={{ padding: "0 32px 96px", backgroundColor: "var(--color-warm-white)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "0" }}>
          {principles.map((p, i) => (
            <div
              key={p.number}
              style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr",
                gap: "48px",
                padding: "56px 0",
                borderBottom: i < principles.length - 1 ? "1px solid var(--color-border)" : "none",
                alignItems: "start",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-heading-en)",
                  fontSize: "48px",
                  fontWeight: 700,
                  color: "rgba(0,63,45,0.08)",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                }}
              >
                {p.number}
              </div>
              <div>
                <h2
                  style={{
                    fontFamily: "var(--font-heading-en)",
                    fontSize: "24px",
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    color: "var(--color-dark)",
                    marginBottom: "20px",
                    lineHeight: 1.2,
                  }}
                >
                  {p.title}
                </h2>
                <p
                  style={{
                    fontSize: "17px",
                    color: "var(--color-slate)",
                    lineHeight: 1.7,
                    maxWidth: "680px",
                  }}
                >
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          backgroundColor: "var(--color-dark)",
          padding: "72px 32px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "480px", margin: "0 auto" }}>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.8)", marginBottom: "28px" }}>
            {t("ctaSub")}
          </p>
          <Link
            href={l("/approach")}
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
        @media (max-width: 767px) {
          .two-col { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </main>
  );
}
