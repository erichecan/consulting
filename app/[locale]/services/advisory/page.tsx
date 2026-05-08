import Link from "next/link";
import { getTranslations, getLocale } from "next-intl/server";

export default async function AdvisoryPage() {
  const t = await getTranslations("advisory");
  const locale = await getLocale();
  const l = (href: string) => `/${locale}${href}`;

  const includes = t.raw("includes") as string[];

  return (
    <main style={{ paddingTop: "68px" }}>
      {/* Hero */}
      <section style={{ backgroundColor: "var(--color-dark)", color: "#fff", padding: "96px 32px 80px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "28px" }}>
            <Link href={l("/services")} style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>
              {t("breadcrumbParent")}
            </Link>
            <span style={{ color: "rgba(255,255,255,0.25)" }}>→</span>
            <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)" }}>Advisory</span>
          </div>
          <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "24px" }}>
            {t("eyebrow")}
          </div>
          <h1 style={{ fontFamily: "var(--font-heading-en)", fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.1, maxWidth: "720px", marginBottom: "24px" }}>
            {t("headline")}
          </h1>
          <p style={{ fontSize: "19px", color: "rgba(255,255,255,0.68)", maxWidth: "580px", lineHeight: 1.7 }}>
            {t("sub")}
          </p>
        </div>
      </section>

      {/* Main content */}
      <section style={{ padding: "80px 32px 96px", backgroundColor: "var(--color-warm-white)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 400px", gap: "80px", alignItems: "start" }}
          className="content-grid">

          {/* Left: What & Who */}
          <div>
            <h2 style={{ fontFamily: "var(--font-heading-en)", fontSize: "22px", fontWeight: 600, letterSpacing: "-0.02em", color: "var(--color-dark)", marginBottom: "28px" }}>
              {t("whatIncludesTitle")}
            </h2>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "14px", marginBottom: "64px" }}>
              {includes.map((item, i) => (
                <li key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start", paddingBottom: "14px", borderBottom: i < includes.length - 1 ? "1px solid var(--color-border)" : "none" }}>
                  <span style={{ flexShrink: 0, width: "24px", height: "24px", borderRadius: "50%", backgroundColor: "rgba(201,169,97,0.12)", border: "1px solid rgba(201,169,97,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: 700, color: "var(--color-gold)", marginTop: "2px" }}>
                    {i + 1}
                  </span>
                  <span style={{ fontSize: "16px", color: "var(--color-dark)", lineHeight: 1.6 }}>{item}</span>
                </li>
              ))}
            </ul>

            <h2 style={{ fontFamily: "var(--font-heading-en)", fontSize: "22px", fontWeight: 600, letterSpacing: "-0.02em", color: "var(--color-dark)", marginBottom: "20px" }}>
              {t("whoForTitle")}
            </h2>
            <p style={{ fontSize: "16px", color: "var(--color-slate)", lineHeight: 1.75, marginBottom: "16px" }}>
              {t("whoForPara1")}
            </p>
            <p style={{ fontSize: "16px", color: "var(--color-slate)", lineHeight: 1.75, marginBottom: "24px" }}>
              {t("whoForPara2")}
            </p>
            <div style={{ backgroundColor: "rgba(201,169,97,0.08)", borderLeft: "3px solid var(--color-gold)", padding: "20px 24px", borderRadius: "0 6px 6px 0" }}>
              <p style={{ fontSize: "14px", color: "var(--color-dark)", lineHeight: 1.7, fontStyle: "italic" }}>
                {t("whoForNote")}
              </p>
            </div>
          </div>

          {/* Right: CTA card */}
          <div style={{ position: "sticky", top: "88px" }}>
            <div style={{ backgroundColor: "var(--color-forest)", borderRadius: "12px", padding: "40px 36px", color: "#fff" }}>
              <h3 style={{ fontFamily: "var(--font-heading-en)", fontSize: "26px", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: "16px", lineHeight: 1.2 }}>
                {t("ctaHeadline")}
              </h3>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.72)", marginBottom: "28px", lineHeight: 1.65 }}>
                {t("ctaSub")}
              </p>
              <Link href={l("/contact")} style={{ display: "block", backgroundColor: "var(--color-gold)", color: "var(--color-dark)", padding: "14px 24px", borderRadius: "6px", fontWeight: 600, fontSize: "15px", textDecoration: "none", textAlign: "center" }}>
                {t("ctaBtn")}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <style>{`
        @media (max-width: 900px) {
          .content-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
