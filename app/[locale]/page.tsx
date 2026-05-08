import Link from "next/link";
import { getTranslations, getLocale } from "next-intl/server";

const metrics = [
  { value: "40+", labelKey: "statsLabel1" },
  { value: "18%", labelKey: "statsLabel2" },
  { value: "99.4%", labelKey: "statsLabel3" },
  { value: "90d", labelKey: "statsLabel4" },
];

const featuredCases = [
  {
    slug: "ecommerce-wms-peak-readiness",
    industryKey: "ecommerce",
    solution: "Warehouse Management",
    metric: "35%",
    metricLabelKey: "metricLabel1",
    accentColor: "var(--color-forest)",
  },
  {
    slug: "wholesale-tms-freight-savings",
    industryKey: "wholesale",
    solution: "Transportation Management",
    metric: "22%",
    metricLabelKey: "metricLabel2",
    accentColor: "#0369A1",
  },
  {
    slug: "wholesale-distribution-network",
    industryKey: "wholesale",
    solution: "Transportation Management",
    metric: "$1.4M",
    metricLabelKey: "metricLabel3",
    accentColor: "#0369A1",
  },
];

export default async function HomePage() {
  const t = await getTranslations("home");
  const tc = await getTranslations("cases");
  const locale = await getLocale();
  const l = (href: string) => `/${locale}${href}`;

  const services = [
    { number: "01", href: l("/services/warehouse"), titleKey: "warehouse", descKey: "warehouse" },
    { number: "02", href: l("/services/transportation"), titleKey: "transportation", descKey: "transportation" },
    { number: "03", href: l("/services/advisory"), titleKey: "advisory", descKey: "advisory" },
  ];

  const industries = [
    { href: l("/industries/ecommerce"), titleKey: "ecommerce", descKey: "ecommerce" },
    { href: l("/industries/wholesale"), titleKey: "wholesale", descKey: "wholesale" },
    { href: l("/industries/manufacturing"), titleKey: "manufacturing", descKey: "manufacturing" },
  ];

  const caseMetricLabels = [
    tc(`items.ecommerce-wms-peak-readiness.metrics.0.label`),
    tc(`items.wholesale-tms-freight-savings.metrics.0.label`),
    tc(`items.wholesale-distribution-network.metrics.0.label`),
  ];

  const caseHeadlines = [
    tc(`items.ecommerce-wms-peak-readiness.headline`),
    tc(`items.wholesale-tms-freight-savings.headline`),
    tc(`items.wholesale-distribution-network.headline`),
  ];

  return (
    <>
      {/* Hero */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          backgroundColor: "var(--color-forest)",
          paddingTop: "68px",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "80px 32px", width: "100%" }}>
          <p
            style={{
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--color-gold)",
              marginBottom: "32px",
            }}
          >
            {t("heroEyebrow")}
          </p>
          <h1
            style={{
              fontFamily: "var(--font-heading-en)",
              fontWeight: 300,
              fontSize: "clamp(40px, 6vw, 80px)",
              lineHeight: "1.05",
              letterSpacing: "-0.03em",
              color: "var(--color-white)",
              maxWidth: "820px",
              marginBottom: "40px",
            }}
          >
            {t("heroHeadline")}
          </h1>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.7",
              color: "rgba(255,255,255,0.7)",
              maxWidth: "520px",
              marginBottom: "48px",
            }}
          >
            {t("heroSub")}
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link
              href={l("/contact")}
              style={{
                fontSize: "14px",
                fontWeight: 500,
                color: "var(--color-forest)",
                backgroundColor: "var(--color-gold)",
                padding: "14px 28px",
                borderRadius: "4px",
                textDecoration: "none",
                letterSpacing: "0.02em",
              }}
            >
              {t("heroCta")} ↗
            </Link>
            <Link
              href={l("/cases")}
              style={{
                fontSize: "14px",
                fontWeight: 400,
                color: "rgba(255,255,255,0.8)",
                border: "1px solid rgba(255,255,255,0.3)",
                padding: "14px 28px",
                borderRadius: "4px",
                textDecoration: "none",
              }}
            >
              {t("heroSecondary")}
            </Link>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section style={{ backgroundColor: "var(--color-warm-white)", borderBottom: "1px solid var(--color-border)" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 32px",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
          }}
          className="metrics-grid"
        >
          {metrics.map((m, i) => (
            <div
              key={i}
              style={{
                padding: "40px 0",
                borderRight: i < metrics.length - 1 ? "1px solid var(--color-border)" : "none",
                paddingLeft: i > 0 ? "40px" : "0",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-heading-en)",
                  fontWeight: 300,
                  fontSize: "44px",
                  letterSpacing: "-0.03em",
                  color: "var(--color-forest)",
                  lineHeight: "1",
                  marginBottom: "8px",
                }}
              >
                {m.value}
              </p>
              <p style={{ fontSize: "13px", color: "var(--color-slate)", letterSpacing: "0.01em" }}>
                {t(m.labelKey as "statsLabel1")}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section style={{ backgroundColor: "var(--color-warm-white)", padding: "96px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "64px",
              flexWrap: "wrap",
              gap: "24px",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--color-gold)",
                  marginBottom: "12px",
                }}
              >
                {t("whatWeDoEyebrow")}
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-heading-en)",
                  fontWeight: 300,
                  fontSize: "clamp(28px, 3.5vw, 44px)",
                  letterSpacing: "-0.02em",
                  color: "var(--color-dark)",
                  lineHeight: "1.1",
                  maxWidth: "480px",
                }}
              >
                {t("whatWeDoHeadline")}
              </h2>
            </div>
            <Link
              href={l("/services")}
              style={{
                fontSize: "13px",
                color: "var(--color-forest)",
                textDecoration: "none",
                borderBottom: "1px solid var(--color-forest)",
                paddingBottom: "2px",
                whiteSpace: "nowrap",
              }}
            >
              {locale === "zh" ? "所有服務 ↗" : "All services ↗"}
            </Link>
          </div>

          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", backgroundColor: "var(--color-border)" }}
            className="services-grid"
          >
            {services.map((s) => (
              <Link
                key={s.number}
                href={s.href}
                style={{
                  backgroundColor: "var(--color-warm-white)",
                  padding: "48px 40px",
                  textDecoration: "none",
                  display: "block",
                }}
                className="service-card"
              >
                <p
                  style={{
                    fontFamily: "var(--font-heading-en)",
                    fontWeight: 300,
                    fontSize: "13px",
                    letterSpacing: "0.08em",
                    color: "var(--color-gold)",
                    marginBottom: "20px",
                  }}
                >
                  {s.number}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-heading-en)",
                    fontWeight: 400,
                    fontSize: "22px",
                    letterSpacing: "-0.01em",
                    color: "var(--color-dark)",
                    marginBottom: "16px",
                    lineHeight: "1.2",
                  }}
                >
                  {t(`services.${s.titleKey}.title` as "services.warehouse.title")}
                </h3>
                <p style={{ fontSize: "14px", color: "var(--color-slate)", lineHeight: "1.65" }}>
                  {t(`services.${s.descKey}.desc` as "services.warehouse.desc")}
                </p>
                <p style={{ marginTop: "24px", fontSize: "13px", color: "var(--color-forest)" }}>
                  {locale === "zh" ? "了解更多 →" : "Learn more →"}
                </p>
              </Link>
            ))}
          </div>

          <p
            style={{
              marginTop: "48px",
              fontSize: "15px",
              color: "var(--color-slate)",
              lineHeight: "1.7",
              maxWidth: "640px",
            }}
          >
            {t("whatWeDoPara")}
          </p>
        </div>
      </section>

      {/* Industries */}
      <section style={{ backgroundColor: "#fff", padding: "96px 0", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <p
            style={{
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--color-gold)",
              marginBottom: "12px",
            }}
          >
            {t("industriesEyebrow")}
          </p>
          <h2
            style={{
              fontFamily: "var(--font-heading-en)",
              fontWeight: 300,
              fontSize: "clamp(28px, 3.5vw, 44px)",
              letterSpacing: "-0.02em",
              color: "var(--color-dark)",
              lineHeight: "1.1",
              marginBottom: "56px",
            }}
          >
            {t("industriesHeadline")}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }} className="industries-grid">
            {industries.map((ind) => (
              <Link
                key={ind.href}
                href={ind.href}
                style={{
                  display: "block",
                  padding: "40px 32px",
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px",
                  textDecoration: "none",
                  backgroundColor: "var(--color-warm-white)",
                }}
                className="industry-card"
              >
                <h3
                  style={{
                    fontFamily: "var(--font-heading-en)",
                    fontWeight: 400,
                    fontSize: "20px",
                    color: "var(--color-dark)",
                    marginBottom: "12px",
                  }}
                >
                  {t(`industries.${ind.titleKey}.title` as "industries.ecommerce.title")}
                </h3>
                <p style={{ fontSize: "14px", color: "var(--color-slate)", lineHeight: "1.65" }}>
                  {t(`industries.${ind.descKey}.desc` as "industries.ecommerce.desc")}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cases */}
      <section style={{ backgroundColor: "var(--color-warm-white)", padding: "96px 0", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "56px", flexWrap: "wrap", gap: "24px" }}>
            <div>
              <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "12px" }}>
                {t("casesEyebrow")}
              </p>
              <h2 style={{ fontFamily: "var(--font-heading-en)", fontWeight: 300, fontSize: "clamp(28px, 3.5vw, 44px)", letterSpacing: "-0.02em", color: "var(--color-dark)", lineHeight: "1.1" }}>
                {t("casesHeadline")}
              </h2>
            </div>
            <Link href={l("/cases")} style={{ fontSize: "13px", color: "var(--color-forest)", textDecoration: "none", borderBottom: "1px solid var(--color-forest)", paddingBottom: "2px", whiteSpace: "nowrap" }}>
              {t("casesCta")} ↗
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }} className="cases-grid">
            {featuredCases.map((c, i) => (
              <Link
                key={c.slug}
                href={l(`/cases/${c.slug}`)}
                style={{ display: "block", padding: "40px 32px", border: "1px solid var(--color-border)", borderRadius: "8px", textDecoration: "none", backgroundColor: "#fff" }}
                className="case-card"
              >
                <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.9)", backgroundColor: c.accentColor, padding: "3px 10px", borderRadius: "3px" }}>
                    {tc(`items.${c.slug}.metrics.0.label`).split(" ")[0]}
                  </span>
                </div>
                <p style={{ fontFamily: "var(--font-heading-en)", fontSize: "36px", fontWeight: 300, color: c.accentColor, letterSpacing: "-0.02em", lineHeight: "1", marginBottom: "8px" }}>
                  {c.metric}
                </p>
                <p style={{ fontSize: "12px", color: "var(--color-slate)", marginBottom: "20px" }}>
                  {caseMetricLabels[i]}
                </p>
                <h3 style={{ fontFamily: "var(--font-heading-en)", fontSize: "16px", fontWeight: 400, color: "var(--color-dark)", lineHeight: "1.4" }}>
                  {caseHeadlines[i]}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--color-forest)", padding: "96px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "var(--font-heading-en)",
              fontWeight: 300,
              fontSize: "clamp(32px, 4vw, 56px)",
              letterSpacing: "-0.03em",
              color: "var(--color-white)",
              marginBottom: "24px",
            }}
          >
            {t("ctaHeadline")}
          </h2>
          <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.72)", maxWidth: "560px", margin: "0 auto 40px", lineHeight: "1.65" }}>
            {t("ctaSub")}
          </p>
          <Link
            href={l("/contact")}
            style={{
              display: "inline-block",
              fontSize: "14px",
              fontWeight: 500,
              color: "var(--color-forest)",
              backgroundColor: "var(--color-gold)",
              padding: "16px 32px",
              borderRadius: "4px",
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            {t("ctaBtn")} ↗
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 767px) {
          .metrics-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .industries-grid { grid-template-columns: 1fr !important; }
          .cases-grid { grid-template-columns: 1fr !important; }
        }
        .service-card:hover { background-color: #f5f5f0 !important; }
        .industry-card:hover { border-color: var(--color-forest) !important; }
        .case-card:hover { border-color: var(--color-slate) !important; }
      `}</style>
    </>
  );
}
