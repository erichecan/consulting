import Link from "next/link";
import { getTranslations, getLocale } from "next-intl/server";

export default async function WarehousePage() {
  const t = await getTranslations("warehouse");
  const locale = await getLocale();
  const l = (href: string) => `/${locale}${href}`;

  const stats = t.raw("stats") as Array<{ value: string; label: string }>;
  const services = t.raw("services") as Array<{ number: string; title: string; points: string[] }>;
  const steps = t.raw("steps") as Array<{ step: string; label: string; desc: string }>;

  const featuredCases = [
    { slug: "ecommerce-wms-peak-readiness", metric: "35%", metricLabel: "picking error reduction" },
    { slug: "omnichannel-inventory-visibility", metric: "40%", metricLabel: "fewer stockouts" },
    { slug: "manufacturing-warehouse-optimisation", metric: "32%", metricLabel: "floor space recovered" },
  ];

  return (
    <main style={{ paddingTop: "68px" }}>
      {/* Hero */}
      <section style={{ backgroundColor: "var(--color-forest)", color: "#fff", padding: "80px 32px 72px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
            <Link href={l("/services")} style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
              {t("breadcrumbParent")}
            </Link>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>→</span>
            <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)" }}>Warehouse Management</span>
          </div>
          <div style={{ display: "inline-block", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "20px" }}>
            {t("eyebrow")}
          </div>
          <h1 style={{ fontFamily: "var(--font-heading-en)", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.1, maxWidth: "720px", marginBottom: "24px" }}>
            {t("headline")}
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.72)", maxWidth: "580px", lineHeight: 1.65, marginBottom: "36px" }}>
            {t("sub")}
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link href={l("/contact")} style={{ display: "inline-block", backgroundColor: "var(--color-gold)", color: "var(--color-dark)", padding: "13px 28px", borderRadius: "6px", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}>
              {t("ctaBook")}
            </Link>
            <Link href={l("/cases")} style={{ display: "inline-block", backgroundColor: "transparent", color: "#fff", padding: "13px 28px", borderRadius: "6px", fontWeight: 500, fontSize: "14px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.3)" }}>
              {t("ctaCases")}
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: "var(--color-dark)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "1px", backgroundColor: "rgba(255,255,255,0.07)" }}>
          {stats.map((s) => (
            <div key={s.label} style={{ padding: "28px 32px", backgroundColor: "var(--color-dark)" }}>
              <div style={{ fontFamily: "var(--font-heading-en)", fontSize: "28px", fontWeight: 600, color: "var(--color-gold)", letterSpacing: "-0.02em", marginBottom: "4px" }}>
                {s.value}
              </div>
              <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: "80px 32px", backgroundColor: "var(--color-warm-white)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ marginBottom: "56px" }}>
            <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-forest)", marginBottom: "14px" }}>
              {t("servicesEyebrow")}
            </div>
            <h2 style={{ fontFamily: "var(--font-heading-en)", fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 600, letterSpacing: "-0.03em", color: "var(--color-dark)", lineHeight: 1.2, maxWidth: "560px" }}>
              {t("servicesHeadline")}
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }} className="services-grid">
            {services.map((svc) => (
              <div key={svc.number} style={{ backgroundColor: "#fff", border: "1px solid var(--color-border)", borderRadius: "10px", padding: "32px 28px" }}>
                <div style={{ fontFamily: "var(--font-heading-en)", fontSize: "13px", fontWeight: 700, letterSpacing: "0.1em", color: "var(--color-gold)", marginBottom: "12px" }}>
                  {svc.number}
                </div>
                <h3 style={{ fontFamily: "var(--font-heading-en)", fontSize: "20px", fontWeight: 600, color: "var(--color-dark)", marginBottom: "20px", letterSpacing: "-0.02em", lineHeight: 1.3 }}>
                  {svc.title}
                </h3>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                  {svc.points.map((pt, i) => (
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
            <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-forest)", marginBottom: "14px" }}>
              {t("processEyebrow")}
            </div>
            <h2 style={{ fontFamily: "var(--font-heading-en)", fontSize: "clamp(26px, 3.5vw, 36px)", fontWeight: 600, letterSpacing: "-0.03em", color: "var(--color-dark)", lineHeight: 1.2, maxWidth: "480px" }}>
              {t("processHeadline")}
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0" }} className="steps-grid">
            {steps.map((step, i) => (
              <div key={i} style={{ padding: "32px 28px", borderRight: i < steps.length - 1 ? "1px solid var(--color-border)" : "none" }}>
                <div style={{ fontFamily: "var(--font-heading-en)", fontSize: "48px", fontWeight: 700, color: "rgba(0,63,45,0.06)", lineHeight: 1, marginBottom: "16px", letterSpacing: "-0.04em" }}>
                  {step.step}
                </div>
                <h3 style={{ fontFamily: "var(--font-heading-en)", fontSize: "16px", fontWeight: 600, color: "var(--color-dark)", marginBottom: "10px", letterSpacing: "-0.01em" }}>
                  {step.label}
                </h3>
                <p style={{ fontSize: "14px", color: "var(--color-slate)", lineHeight: 1.65 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section style={{ padding: "72px 32px", backgroundColor: "var(--color-warm-white)", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "36px" }}>
            <h2 style={{ fontFamily: "var(--font-heading-en)", fontSize: "22px", fontWeight: 600, letterSpacing: "-0.02em", color: "var(--color-dark)" }}>
              {t("casesHeadline")}
            </h2>
            <Link href={l("/cases")} style={{ fontSize: "13px", fontWeight: 500, color: "var(--color-forest)", textDecoration: "none" }}>
              {t("casesViewAll")}
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
            {featuredCases.map((fc) => (
              <Link key={fc.slug} href={l(`/cases/${fc.slug}`)} style={{ textDecoration: "none" }}>
                <article className="case-card" style={{ backgroundColor: "#fff", border: "1px solid var(--color-border)", borderRadius: "10px", padding: "24px", borderTop: "3px solid var(--color-forest)", cursor: "pointer", transition: "box-shadow 0.2s" }}>
                  <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "10px" }}>
                    {fc.metric} {fc.metricLabel}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--color-forest)", padding: "80px 32px", textAlign: "center" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading-en)", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 600, letterSpacing: "-0.03em", color: "#fff", marginBottom: "16px" }}>
            {t("ctaHeadline")}
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", marginBottom: "36px" }}>
            {t("ctaSub")}
          </p>
          <Link href={l("/contact")} style={{ display: "inline-block", backgroundColor: "var(--color-gold)", color: "var(--color-dark)", padding: "14px 36px", borderRadius: "6px", fontWeight: 600, fontSize: "15px", textDecoration: "none" }}>
            {t("ctaBtn")}
          </Link>
        </div>
      </section>
      <style>{`
        .case-card:hover { box-shadow: 0 6px 20px rgba(0,0,0,0.07); }
        @media (max-width: 768px) {
          .services-grid { grid-template-columns: 1fr !important; }
          .steps-grid { grid-template-columns: 1fr !important; }
          .steps-grid > div { border-right: none !important; border-bottom: 1px solid var(--color-border); }
        }
      `}</style>
    </main>
  );
}
