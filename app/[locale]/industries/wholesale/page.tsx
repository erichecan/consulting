import Link from "next/link";
import { getTranslations, getLocale } from "next-intl/server";

export default async function WholesalePage() {
  const t = await getTranslations("wholesale");
  const locale = await getLocale();
  const l = (href: string) => `/${locale}${href}`;

  const challenges = t.raw("challenges") as Array<{ title: string; body: string }>;
  const metrics = t.raw("metrics") as Array<{ metric: string; desc: string }>;

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
            <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)" }}>Wholesale & Distribution</span>
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
              Book a Diagnostic →
            </Link>
            <Link href={l("/cases")} style={{ display: "inline-block", backgroundColor: "transparent", color: "#fff", padding: "13px 28px", borderRadius: "6px", fontWeight: 500, fontSize: "14px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.3)" }}>
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section style={{ padding: "80px 32px", backgroundColor: "var(--color-warm-white)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading-en)", fontSize: "clamp(26px, 3.5vw, 36px)", fontWeight: 600, letterSpacing: "-0.03em", color: "var(--color-dark)", lineHeight: 1.2, maxWidth: "560px", marginBottom: "48px" }}>
            {t("challengesHeadline")}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }} className="challenges-grid">
            {challenges.map((ch, i) => (
              <div key={i} style={{ backgroundColor: "#fff", border: "1px solid var(--color-border)", borderRadius: "10px", padding: "36px 32px" }}>
                <div style={{ fontFamily: "var(--font-heading-en)", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "12px" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 style={{ fontFamily: "var(--font-heading-en)", fontSize: "19px", fontWeight: 600, color: "var(--color-dark)", marginBottom: "14px", letterSpacing: "-0.01em", lineHeight: 1.3 }}>
                  {ch.title}
                </h3>
                <p style={{ fontSize: "15px", color: "var(--color-slate)", lineHeight: 1.7 }}>{ch.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section style={{ padding: "80px 32px", backgroundColor: "#fff", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }} className="results-grid">
          <div>
            <h2 style={{ fontFamily: "var(--font-heading-en)", fontSize: "clamp(26px, 3.5vw, 36px)", fontWeight: 600, letterSpacing: "-0.03em", color: "var(--color-dark)", lineHeight: 1.2, marginBottom: "28px" }}>
              {t("resultsHeadline")}
            </h2>
            <p style={{ fontSize: "16px", color: "var(--color-slate)", lineHeight: 1.75, marginBottom: "20px" }}>
              {t("resultsPara1")}
            </p>
            <p style={{ fontSize: "16px", color: "var(--color-slate)", lineHeight: 1.75 }}>
              {t("resultsPara2")}
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            {metrics.map((m, i) => (
              <div key={i} style={{ backgroundColor: "var(--color-warm-white)", borderRadius: "10px", padding: "28px 24px", border: "1px solid var(--color-border)" }}>
                <div style={{ fontFamily: "var(--font-heading-en)", fontSize: "26px", fontWeight: 700, color: "var(--color-forest)", letterSpacing: "-0.02em", marginBottom: "8px" }}>
                  {m.metric}
                </div>
                <p style={{ fontSize: "13px", color: "var(--color-slate)", lineHeight: 1.5 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--color-dark)", padding: "80px 32px", textAlign: "center" }}>
        <div style={{ maxWidth: "520px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading-en)", fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 600, letterSpacing: "-0.03em", color: "#fff", marginBottom: "16px" }}>
            {t("ctaHeadline")}
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", marginBottom: "32px" }}>
            {t("ctaSub")}
          </p>
          <Link href={l("/contact")} style={{ display: "inline-block", backgroundColor: "var(--color-gold)", color: "var(--color-dark)", padding: "14px 32px", borderRadius: "6px", fontWeight: 600, fontSize: "15px", textDecoration: "none" }}>
            {t("ctaBtn")}
          </Link>
        </div>
      </section>
      <style>{`
        @media (max-width: 900px) {
          .challenges-grid { grid-template-columns: 1fr !important; }
          .results-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </main>
  );
}
