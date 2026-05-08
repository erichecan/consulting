import Link from "next/link";
import { getTranslations, getLocale } from "next-intl/server";

export default async function InsightsPage() {
  const t = await getTranslations("insights");
  const locale = await getLocale();
  const l = (href: string) => `/${locale}${href}`;

  const items = t.raw("items") as Array<{
    slug: string;
    tag: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
  }>;

  return (
    <main style={{ paddingTop: "68px" }}>
      {/* Hero */}
      <section style={{ backgroundColor: "var(--color-dark)", color: "#fff", padding: "96px 32px 80px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "24px" }}>
            {t("eyebrow")}
          </div>
          <h1 style={{ fontFamily: "var(--font-heading-en)", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.1, maxWidth: "600px" }}>
            {t("headline")}
          </h1>
        </div>
      </section>

      {/* Articles grid */}
      <section style={{ padding: "80px 32px 96px", backgroundColor: "var(--color-warm-white)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          {/* Featured */}
          <Link href={l(`/insights/${items[0].slug}`)} style={{ textDecoration: "none", display: "block", marginBottom: "40px" }}>
            <article className="featured-card" style={{ backgroundColor: "#fff", border: "1px solid var(--color-border)", borderRadius: "12px", padding: "48px", borderTop: "3px solid var(--color-gold)", transition: "box-shadow 0.2s" }}>
              <div style={{ display: "flex", gap: "12px", marginBottom: "20px", alignItems: "center" }}>
                <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-gold)" }}>
                  {items[0].tag}
                </span>
                <span style={{ fontSize: "11px", color: "var(--color-slate)" }}>·</span>
                <span style={{ fontSize: "12px", color: "var(--color-slate)" }}>{items[0].date}</span>
                <span style={{ fontSize: "11px", color: "var(--color-slate)" }}>·</span>
                <span style={{ fontSize: "12px", color: "var(--color-slate)" }}>{items[0].readTime}</span>
              </div>
              <h2 style={{ fontFamily: "var(--font-heading-en)", fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 600, letterSpacing: "-0.02em", color: "var(--color-dark)", marginBottom: "16px", lineHeight: 1.3, maxWidth: "760px" }}>
                {items[0].title}
              </h2>
              <p style={{ fontSize: "16px", color: "var(--color-slate)", lineHeight: 1.7, maxWidth: "680px" }}>
                {items[0].excerpt}
              </p>
            </article>
          </Link>

          {/* Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "20px" }}>
            {items.slice(1).map((item) => (
              <Link key={item.slug} href={l(`/insights/${item.slug}`)} style={{ textDecoration: "none" }}>
                <article className="insight-card" style={{ backgroundColor: "#fff", border: "1px solid var(--color-border)", borderRadius: "10px", padding: "32px 28px", height: "100%", display: "flex", flexDirection: "column", transition: "box-shadow 0.2s" }}>
                  <div style={{ display: "flex", gap: "8px", marginBottom: "16px", alignItems: "center" }}>
                    <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-gold)", border: "1px solid rgba(201,169,97,0.3)", padding: "3px 8px", borderRadius: "3px" }}>
                      {item.tag}
                    </span>
                    <span style={{ fontSize: "11px", color: "var(--color-slate)" }}>{item.readTime}</span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-heading-en)", fontSize: "18px", fontWeight: 600, letterSpacing: "-0.01em", color: "var(--color-dark)", marginBottom: "12px", lineHeight: 1.4, flexGrow: 1 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: "var(--color-slate)", lineHeight: 1.65, marginBottom: "20px" }}>
                    {item.excerpt}
                  </p>
                  <div style={{ fontSize: "12px", color: "var(--color-slate)", marginTop: "auto" }}>{item.date}</div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <style>{`
        .featured-card:hover { box-shadow: 0 8px 28px rgba(0,0,0,0.07); }
        .insight-card:hover { box-shadow: 0 6px 20px rgba(0,0,0,0.07); }
      `}</style>
    </main>
  );
}
