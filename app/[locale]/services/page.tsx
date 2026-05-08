import Link from "next/link";
import { getTranslations, getLocale } from "next-intl/server";

export default async function ServicesIndexPage() {
  const t = await getTranslations("servicesIndex");
  const locale = await getLocale();
  const l = (href: string) => `/${locale}${href}`;

  const services = t.raw("services") as Array<{
    number: string;
    title: string;
    timeline: string;
    ideal: string;
    deliverables: string[];
    href: string;
  }>;

  return (
    <main style={{ paddingTop: "68px" }}>
      {/* Hero */}
      <section
        style={{
          backgroundColor: "var(--color-forest)",
          color: "var(--color-white)",
          padding: "80px 32px 72px",
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
              marginBottom: "20px",
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
              maxWidth: "640px",
            }}
          >
            {t("headline")}
          </h1>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: "80px 32px 96px", backgroundColor: "var(--color-warm-white)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "32px" }}>
          {services.map((svc) => (
            <div
              key={svc.number}
              style={{
                backgroundColor: "#fff",
                border: "1px solid var(--color-border)",
                borderRadius: "12px",
                padding: "48px",
                display: "grid",
                gridTemplateColumns: "80px 1fr 280px",
                gap: "48px",
                alignItems: "start",
              }}
              className="service-card"
            >
              <div
                style={{
                  fontFamily: "var(--font-heading-en)",
                  fontSize: "40px",
                  fontWeight: 700,
                  color: "rgba(0,63,45,0.1)",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                }}
              >
                {svc.number}
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
                  <h2
                    style={{
                      fontFamily: "var(--font-heading-en)",
                      fontSize: "24px",
                      fontWeight: 600,
                      letterSpacing: "-0.02em",
                      color: "var(--color-dark)",
                    }}
                  >
                    {svc.title}
                  </h2>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "var(--color-forest)",
                      backgroundColor: "rgba(0,63,45,0.07)",
                      padding: "4px 10px",
                      borderRadius: "100px",
                    }}
                  >
                    {svc.timeline}
                  </span>
                </div>
                <p style={{ fontSize: "14px", color: "var(--color-slate)", lineHeight: 1.6, marginBottom: "20px" }}>
                  <strong style={{ color: "var(--color-dark)", fontWeight: 500 }}>{t("bestFor")}</strong>{" "}
                  {svc.ideal}
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {svc.deliverables.map((d, i) => (
                    <li key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                      <span style={{ color: "var(--color-gold)", fontWeight: 700, flexShrink: 0, marginTop: "1px" }}>—</span>
                      <span style={{ fontSize: "14px", color: "var(--color-slate)", lineHeight: 1.5 }}>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ paddingTop: "4px" }}>
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--color-slate)",
                    marginBottom: "12px",
                  }}
                >
                  {t("whatYouReceive")}
                </p>
                <Link
                  href={l(svc.href)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "var(--color-forest)",
                    textDecoration: "none",
                  }}
                >
                  {t("learnMore")}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--color-dark)", padding: "72px 32px", textAlign: "center" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
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
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.65)", marginBottom: "32px" }}>
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
        @media (max-width: 900px) {
          .service-card { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
