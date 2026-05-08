import Link from "next/link";
import { getTranslations, getLocale } from "next-intl/server";

// Structural data only — translated text comes from messages/*.json via t()
export const cases = [
  {
    slug: "ecommerce-wms-peak-readiness",
    industry: "E-Commerce",
    solution: "Warehouse Management",
    client: "Online Apparel Retailer",
    tags: ["WMS", "E-Commerce", "Peak Operations"],
  },
  {
    slug: "wholesale-tms-freight-savings",
    industry: "Wholesale & Distribution",
    solution: "Transportation Management",
    client: "Regional FMCG Distributor",
    tags: ["TMS", "Wholesale", "Route Optimisation"],
  },
  {
    slug: "omnichannel-inventory-visibility",
    industry: "E-Commerce",
    solution: "Warehouse Management",
    client: "DTC + Marketplace Brand",
    tags: ["Omnichannel", "Inventory", "E-Commerce"],
  },
  {
    slug: "manufacturing-warehouse-optimisation",
    industry: "Manufacturing",
    solution: "Warehouse Management",
    client: "Industrial Components Manufacturer",
    tags: ["Warehouse Optimisation", "Manufacturing", "Layout"],
  },
  {
    slug: "wholesale-distribution-network",
    industry: "Wholesale & Distribution",
    solution: "Transportation Management",
    client: "Building Materials Wholesaler",
    tags: ["Network Design", "Wholesale", "Cost Reduction"],
  },
  {
    slug: "ecommerce-returns-processing",
    industry: "E-Commerce",
    solution: "Warehouse Management",
    client: "Fashion E-Commerce Platform",
    tags: ["Returns Management", "E-Commerce", "Operations"],
  },
];

export default async function CasesPage() {
  const t = await getTranslations("cases");
  const locale = await getLocale();
  const l = (href: string) => `/${locale}${href}`;

  const statsItems = [
    { value: "40+", label: t("stats.engagements") },
    { value: "22%", label: t("stats.freightSavings") },
    { value: "99%+", label: t("stats.orderAccuracy") },
    { value: "90d", label: t("stats.firstOutcome") },
  ];

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
            {t("eyebrow")}
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
              whiteSpace: "pre-line",
            }}
          >
            {t("headline")}
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.75)",
              maxWidth: "560px",
              lineHeight: 1.65,
            }}
          >
            {t("sub")}
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ backgroundColor: "var(--color-dark)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
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
          {statsItems.map((s) => (
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
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "24px",
            }}
          >
            {cases.map((c) => {
              const headline = t(`items.${c.slug}.headline`);
              const summary = t(`items.${c.slug}.summary`);
              const metrics = t.raw(`items.${c.slug}.metrics`) as Array<{ value: string; label: string }>;
              return (
                <Link
                  key={c.slug}
                  href={l(`/cases/${c.slug}`)}
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
                    <div
                      style={{
                        height: "4px",
                        backgroundColor:
                          c.solution === "Transportation Management" ? "#0369A1" : "var(--color-forest)",
                      }}
                    />
                    <div style={{ padding: "28px 28px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
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
                        {headline}
                      </h2>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "var(--color-slate)",
                          lineHeight: 1.6,
                          marginBottom: "24px",
                          flex: 1,
                        }}
                      >
                        {summary}
                      </p>
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
                        {metrics.map((m) => (
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
                      <div
                        style={{
                          fontSize: "13px",
                          fontWeight: 500,
                          color: "var(--color-forest)",
                        }}
                      >
                        {t("readMore")}
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
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
            {t("ctaHeadline")}
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", marginBottom: "36px" }}>
            {t("ctaSub")}
          </p>
          <Link
            href={l("/contact")}
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
            {t("ctaBtn")}
          </Link>
        </div>
      </section>
      <style>{`.case-index-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.08); transform: translateY(-2px); }`}</style>
    </main>
  );
}
