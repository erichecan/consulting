import Link from "next/link";
import { getTranslations, getLocale } from "next-intl/server";

export default async function IndustriesPage() {
  const t = await getTranslations("industriesIndex");
  const locale = await getLocale();
  const l = (href: string) => `/${locale}${href}`;

  const industries = t.raw("industries") as Array<{
    number: string;
    title: string;
    challenge: string;
    stat: { value: string; label: string };
    focus: string[];
    href: string;
  }>;

  return (
    <main style={{ paddingTop: "68px" }}>
      {/* Hero */}
      <section style={{ backgroundColor: "var(--color-dark)", color: "#fff", padding: "96px 32px 80px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
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

      {/* Industries */}
      <section style={{ padding: "80px 32px 96px", backgroundColor: "var(--color-warm-white)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "4px" }}>
          {industries.map((ind) => (
            <div
              key={ind.number}
              style={{ backgroundColor: "#fff", border: "1px solid var(--color-border)", borderRadius: "12px", padding: "48px", display: "grid", gridTemplateColumns: "200px 1fr 280px", gap: "56px", alignItems: "start" }}
              className="industry-card"
            >
              {/* Left: label + stat */}
              <div>
                <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "8px" }}>
                  {ind.number}
                </div>
                <h2 style={{ fontFamily: "var(--font-heading-en)", fontSize: "26px", fontWeight: 600, letterSpacing: "-0.02em", color: "var(--color-dark)", marginBottom: "24px" }}>
                  {ind.title}
                </h2>
                <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "20px" }}>
                  <div style={{ fontFamily: "var(--font-heading-en)", fontSize: "28px", fontWeight: 600, color: "var(--color-forest)", letterSpacing: "-0.02em", marginBottom: "4px" }}>
                    {ind.stat.value}
                  </div>
                  <div style={{ fontSize: "12px", color: "var(--color-slate)" }}>{ind.stat.label}</div>
                </div>
              </div>

              {/* Middle: challenge + focus */}
              <div>
                <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-slate)", marginBottom: "10px" }}>
                  {t("coreChallenge")}
                </div>
                <p style={{ fontSize: "16px", color: "var(--color-dark)", lineHeight: 1.65, marginBottom: "28px" }}>
                  {ind.challenge}
                </p>
                <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-slate)", marginBottom: "14px" }}>
                  {t("whereFocus")}
                </div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {ind.focus.map((f, i) => (
                    <li key={i} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "var(--color-gold)", flexShrink: 0 }} />
                      <span style={{ fontSize: "14px", color: "var(--color-slate)", lineHeight: 1.5 }}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: CTA */}
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                <div />
                <Link
                  href={l(ind.href)}
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "var(--color-dark)", color: "#fff", padding: "13px 24px", borderRadius: "6px", fontWeight: 600, fontSize: "14px", textDecoration: "none", marginTop: "auto" }}
                >
                  {t("explore")} {ind.title} <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--color-forest)", padding: "80px 32px", textAlign: "center" }}>
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
        @media (max-width: 1024px) {
          .industry-card { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
