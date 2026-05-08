import Link from "next/link";
import { getTranslations, getLocale } from "next-intl/server";

export default async function EcommercePage() {
  const t = await getTranslations("ecommerce");
  const locale = await getLocale();
  const l = (href: string) => `/${locale}${href}`;

  const stats = t.raw("stats") as Array<{ value: string; label: string }>;
  const challenges = t.raw("challenges") as Array<{ title: string; desc: string }>;
  const solutions = t.raw("solutions") as Array<{ icon: string; title: string; desc: string; href: string }>;
  const featuredCases = t.raw("featuredCases") as Array<{ slug: string; metric: string; headline: string }>;

  const accent = "#0F766E"; // teal / e-commerce

  return (
    <main style={{ paddingTop: "68px" }}>
      {/* Hero */}
      <section style={{ backgroundColor: "var(--color-dark)", color: "#fff", padding: "80px 32px 72px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
            <Link href={l("/industries")} style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
              {t("breadcrumbParent")}
            </Link>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>→</span>
            <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.8)" }}>{t("breadcrumb")}</span>
          </div>
          <div style={{ display: "inline-block", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "20px" }}>
            E-Commerce Operations
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
      <section style={{ backgroundColor: "var(--color-forest)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "1px", backgroundColor: "rgba(255,255,255,0.07)" }}>
          {stats.map((s) => (
            <div key={s.label} style={{ padding: "28px 32px", backgroundColor: "var(--color-forest)" }}>
              <div style={{ fontFamily: "var(--font-heading-en)", fontSize: "28px", fontWeight: 600, color: "var(--color-gold)", letterSpacing: "-0.02em", marginBottom: "4px" }}>
                {s.value}
              </div>
              <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Challenges */}
      <section style={{ padding: "80px 32px", backgroundColor: "var(--color-warm-white)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ marginBottom: "48px", display: "grid", gridTemplateColumns: "1fr 480px", gap: "64px", alignItems: "end" }} className="challenges-header">
            <div>
              <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: accent, marginBottom: "14px" }}>
                {t("challengesEyebrow")}
              </div>
              <h2 style={{ fontFamily: "var(--font-heading-en)", fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 600, letterSpacing: "-0.03em", color: "var(--color-dark)", lineHeight: 1.2 }}>
                {t("challengesHeadline")}
              </h2>
            </div>
            <div>
              <p style={{ fontSize: "15px", color: "var(--color-slate)", lineHeight: 1.7, marginBottom: "16px" }}>
                {t("challengesPara")}
              </p>
              <Link href={l("/cases")} style={{ fontSize: "13px", fontWeight: 500, color: accent, textDecoration: "none" }}>
                {t("challengesLink")}
              </Link>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }} className="challenges-grid">
            {challenges.map((ch, i) => (
              <div key={i} style={{ backgroundColor: "#fff", border: "1px solid var(--color-border)", borderRadius: "10px", padding: "32px 28px", borderTop: `3px solid ${accent}` }}>
                <h3 style={{ fontFamily: "var(--font-heading-en)", fontSize: "18px", fontWeight: 600, color: "var(--color-dark)", marginBottom: "12px", letterSpacing: "-0.01em" }}>
                  {ch.title}
                </h3>
                <p style={{ fontSize: "15px", color: "var(--color-slate)", lineHeight: 1.65 }}>{ch.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section style={{ padding: "80px 32px", backgroundColor: "#fff", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ marginBottom: "48px" }}>
            <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: accent, marginBottom: "14px" }}>
              {t("solutionsEyebrow")}
            </div>
            <h2 style={{ fontFamily: "var(--font-heading-en)", fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 600, letterSpacing: "-0.03em", color: "var(--color-dark)", lineHeight: 1.2 }}>
              {t("solutionsHeadline")}
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }} className="solutions-grid">
            {solutions.map((sol, i) => (
              <div key={i} style={{ backgroundColor: "var(--color-warm-white)", borderRadius: "10px", padding: "32px 28px", border: "1px solid var(--color-border)" }}>
                <div style={{ fontSize: "22px", marginBottom: "16px", color: accent }}>{sol.icon}</div>
                <h3 style={{ fontFamily: "var(--font-heading-en)", fontSize: "18px", fontWeight: 600, color: "var(--color-dark)", marginBottom: "12px", letterSpacing: "-0.01em" }}>
                  {sol.title}
                </h3>
                <p style={{ fontSize: "14px", color: "var(--color-slate)", lineHeight: 1.65, marginBottom: "16px" }}>{sol.desc}</p>
                <Link href={l(sol.href)} style={{ fontSize: "13px", fontWeight: 500, color: accent, textDecoration: "none" }}>
                  {t("learnMore")}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured cases */}
      <section style={{ padding: "72px 32px", backgroundColor: "var(--color-warm-white)", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "36px" }}>
            <h2 style={{ fontFamily: "var(--font-heading-en)", fontSize: "22px", fontWeight: 600, letterSpacing: "-0.02em", color: "var(--color-dark)" }}>
              {t("featuredCasesHeadline")}
            </h2>
            <Link href={l("/cases")} style={{ fontSize: "13px", fontWeight: 500, color: accent, textDecoration: "none" }}>
              {t("featuredCasesViewAll")}
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
            {featuredCases.map((fc) => (
              <Link key={fc.slug} href={l(`/cases/${fc.slug}`)} style={{ textDecoration: "none" }}>
                <article className="case-card" style={{ backgroundColor: "#fff", border: "1px solid var(--color-border)", borderRadius: "10px", padding: "28px", borderTop: `3px solid ${accent}`, cursor: "pointer", transition: "box-shadow 0.2s" }}>
                  <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "10px" }}>
                    {fc.metric}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-heading-en)", fontSize: "16px", fontWeight: 600, color: "var(--color-dark)", lineHeight: 1.4, marginBottom: "16px", letterSpacing: "-0.01em" }}>
                    {fc.headline}
                  </h3>
                  <span style={{ fontSize: "13px", fontWeight: 500, color: accent }}>{t("readCase")}</span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--color-dark)", padding: "80px 32px", textAlign: "center" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading-en)", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 600, letterSpacing: "-0.03em", color: "#fff", marginBottom: "16px" }}>
            {t("ctaHeadline")}
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.72)", marginBottom: "36px" }}>
            {t("ctaSub")}
          </p>
          <Link href={l("/contact")} style={{ display: "inline-block", backgroundColor: "var(--color-gold)", color: "var(--color-dark)", padding: "14px 36px", borderRadius: "6px", fontWeight: 600, fontSize: "15px", textDecoration: "none" }}>
            {t("ctaBtn")}
          </Link>
        </div>
      </section>
      <style>{`
        .case-card:hover { box-shadow: 0 6px 20px rgba(0,0,0,0.07); }
        @media (max-width: 900px) {
          .challenges-header { grid-template-columns: 1fr !important; gap: 24px !important; }
          .challenges-grid { grid-template-columns: 1fr !important; }
          .solutions-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
