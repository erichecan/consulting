import Link from "next/link";
import { getTranslations, getLocale } from "next-intl/server";

const team = [
  {
    name: "James Hartley",
    title: "Founder & Managing Partner",
    bio: "James spent 14 years as an operations director in wholesale distribution before founding Meridian. He has led warehouse management and TMS implementations across 40+ mid-market businesses.",
    initials: "JH",
  },
  {
    name: "Sarah Chen",
    title: "Partner, Supply Chain",
    bio: "Sarah brings deep expertise in omnichannel inventory strategy and e-commerce fulfilment operations. Previously VP Operations at a $200M DTC brand.",
    initials: "SC",
  },
  {
    name: "David Okafor",
    title: "Senior Consultant, Transportation",
    bio: "David specialises in TMS selection and carrier network optimisation. His work with regional distributors has delivered an average 20% reduction in freight spend across 15 engagements.",
    initials: "DO",
  },
];

const values = [
  { label: "Practitioner-led", desc: "Every partner has run operations. We don't advise from the outside." },
  { label: "Small client list", desc: "We limit engagements per partner to ensure senior attention on every account." },
  { label: "No dependency model", desc: "We measure success by whether you no longer need us." },
  { label: "Honest findings", desc: "We tell clients what the data says, not what they want to hear." },
];

export default async function AboutPage() {
  const t = await getTranslations("about");
  const locale = await getLocale();
  const l = (href: string) => `/${locale}${href}`;

  return (
    <main style={{ paddingTop: "68px" }}>
      {/* Hero */}
      <section style={{ backgroundColor: "var(--color-dark)", color: "#fff", padding: "96px 32px 80px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 480px", gap: "80px", alignItems: "center" }} className="hero-grid">
          <div>
            <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "24px" }}>
              {t("eyebrow")}
            </div>
            <h1 style={{ fontFamily: "var(--font-heading-en)", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "28px" }}>
              {t("headline")}
            </h1>
            <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.72)", lineHeight: 1.7 }}>
              {t("sub")}
            </p>
          </div>
          {/* Values */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", backgroundColor: "rgba(255,255,255,0.07)", borderRadius: "10px", overflow: "hidden" }}>
            {values.map((v) => (
              <div key={v.label} style={{ padding: "24px 28px", backgroundColor: "rgba(255,255,255,0.04)" }}>
                <div style={{ fontSize: "14px", fontWeight: 600, color: "var(--color-gold)", marginBottom: "6px" }}>{v.label}</div>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: "80px 32px 96px", backgroundColor: "var(--color-warm-white)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading-en)", fontSize: "22px", fontWeight: 600, letterSpacing: "-0.02em", color: "var(--color-dark)", marginBottom: "48px" }}>
            {t("teamHeadline")}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }} className="team-grid">
            {team.map((member) => (
              <div key={member.name} style={{ backgroundColor: "#fff", border: "1px solid var(--color-border)", borderRadius: "12px", padding: "36px 32px" }}>
                <div style={{ width: "52px", height: "52px", borderRadius: "50%", backgroundColor: "var(--color-forest)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-heading-en)", fontSize: "18px", fontWeight: 700, color: "#fff", marginBottom: "20px" }}>
                  {member.initials}
                </div>
                <h3 style={{ fontFamily: "var(--font-heading-en)", fontSize: "18px", fontWeight: 600, color: "var(--color-dark)", marginBottom: "4px", letterSpacing: "-0.01em" }}>
                  {member.name}
                </h3>
                <div style={{ fontSize: "13px", color: "var(--color-gold)", fontWeight: 500, marginBottom: "16px" }}>
                  {member.title}
                </div>
                <p style={{ fontSize: "14px", color: "var(--color-slate)", lineHeight: 1.65 }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--color-forest)", padding: "72px 32px", textAlign: "center" }}>
        <div style={{ maxWidth: "480px", margin: "0 auto" }}>
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
          .hero-grid { grid-template-columns: 1fr !important; }
          .team-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 640px) and (max-width: 1024px) {
          .team-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </main>
  );
}
