import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Meridian Advisory",
  description: "Meridian Advisory is a specialist consulting firm working with mid-market businesses on operational improvement and strategic execution.",
};

const values = [
  {
    number: "01",
    title: "Diagnosis before prescription",
    body: "We never arrive with answers. Every engagement begins with a structured diagnostic phase — because the quality of the recommendation is entirely downstream of the quality of the analysis.",
  },
  {
    number: "02",
    title: "Embedded, not advisory",
    body: "We work inside the business alongside the internal team. Implementation responsibility changes what gets recommended and how it gets done.",
  },
  {
    number: "03",
    title: "Structural, not symptomatic",
    body: "Operational problems that return are structural problems in disguise. We look for the root cause at the design level, not the process level.",
  },
  {
    number: "04",
    title: "Measurable outcomes only",
    body: "Every engagement has defined financial metrics — margin improvement, working capital release, throughput gain. We don't work in frameworks that can't be measured.",
  },
];

const team = [
  {
    name: "James Whitfield",
    role: "Founding Partner",
    zh: "创始合伙人",
    bio: "Twenty years in operational consulting across wholesale distribution, manufacturing, and retail. Previously a principal at a global strategy firm and operating partner at two mid-market private equity funds.",
    focus: ["Wholesale Distribution", "Private Equity Operating Partnerships", "Structural Diagnosis"],
  },
  {
    name: "Sarah Chen",
    role: "Partner",
    zh: "合伙人",
    bio: "Fourteen years focused on manufacturing and supply chain. Former operations director in the food and beverage sector before moving to consulting. Fluent in Mandarin; extensive experience in cross-border supply chain work.",
    focus: ["Manufacturing", "Supply Chain", "Cross-Border Operations"],
  },
  {
    name: "Marcus Delacroix",
    role: "Partner",
    zh: "合伙人",
    bio: "Specialist in retail and consumer. Background includes senior buying and category management roles at major retailers before transitioning to advisory. Particular focus on SKU rationalisation and promotional efficiency.",
    focus: ["Retail & Consumer", "Category Management", "Margin Improvement"],
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "var(--color-forest)", paddingTop: "140px", paddingBottom: "80px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <p style={{ fontFamily: "var(--font-heading-zh)", fontSize: "13px", color: "var(--color-gold)", marginBottom: "24px", letterSpacing: "0.05em" }}>
            关于我们 / About
          </p>
          <h1 style={{ fontFamily: "var(--font-heading-en)", fontWeight: 300, fontSize: "clamp(36px, 5vw, 64px)", letterSpacing: "-0.03em", color: "var(--color-white)", lineHeight: "1.05", maxWidth: "700px", marginBottom: "32px" }}>
            A different kind of consulting firm.
          </h1>
          <p style={{ fontFamily: "var(--font-body-en)", fontSize: "18px", lineHeight: "1.7", color: "rgba(255,255,255,0.75)", maxWidth: "580px" }}>
            Meridian Advisory works exclusively with mid-market businesses on operational improvement and strategic execution. We are a small firm by design — built around experienced practitioners, not pyramids of analysts.
          </p>
        </div>
      </section>

      {/* Founding philosophy */}
      <section style={{ backgroundColor: "var(--color-warm-white)", padding: "96px 0", borderBottom: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px" }} className="two-col">
            <div>
              <p style={{ fontFamily: "var(--font-body-en)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "24px" }}>
                Our founding
              </p>
              <h2 style={{ fontFamily: "var(--font-heading-en)", fontWeight: 300, fontSize: "36px", letterSpacing: "-0.02em", color: "var(--color-dark)", marginBottom: "32px", lineHeight: "1.15" }}>
                Built from frustration with the advisory model.
              </h2>
              <p style={{ fontFamily: "var(--font-body-en)", fontSize: "16px", lineHeight: "1.8", color: "var(--color-slate)", marginBottom: "20px" }}>
                Meridian was founded in 2019 by consulting practitioners who had spent careers watching good analysis fail to produce change. The pattern was consistent: an external team identifies the problem, presents the recommendations, and leaves. The client team, unequipped to execute the strategy they didn't design, produces a partial and diluted version of what was proposed.
              </p>
              <p style={{ fontFamily: "var(--font-body-en)", fontSize: "16px", lineHeight: "1.8", color: "var(--color-slate)", marginBottom: "20px" }}>
                The consulting industry's response to this has been to blame clients for poor implementation. Our response was to change the model: the team that diagnoses the problem stays through implementation, with accountability for the outcome, not just the slide deck.
              </p>
              <p style={{ fontFamily: "var(--font-body-en)", fontSize: "16px", lineHeight: "1.8", color: "var(--color-slate)" }}>
                We work with a small number of businesses at any one time. That is a deliberate constraint. The embedded model requires presence and attention — neither of which scales in the way advisory work does.
              </p>
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-body-en)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "24px" }}>
                By the numbers
              </p>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {[
                  { value: "2019", label: "Year founded" },
                  { value: "40+", label: "Engagements completed" },
                  { value: "3", label: "Industry specialisations" },
                  { value: "2–4×", label: "Average return on engagement fee" },
                ].map((item, i) => (
                  <div key={i} style={{ padding: "28px 0", borderBottom: "1px solid var(--color-border)", display: "flex", gap: "32px", alignItems: "center" }}>
                    <p style={{ fontFamily: "var(--font-heading-en)", fontWeight: 300, fontSize: "40px", letterSpacing: "-0.02em", color: "var(--color-forest)", flexShrink: 0, minWidth: "120px" }}>
                      {item.value}
                    </p>
                    <p style={{ fontFamily: "var(--font-body-en)", fontSize: "15px", color: "var(--color-slate)", lineHeight: "1.5" }}>
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ backgroundColor: "var(--color-muted)", padding: "96px 0", borderBottom: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <p style={{ fontFamily: "var(--font-body-en)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "16px" }}>
            How we work
          </p>
          <h2 style={{ fontFamily: "var(--font-heading-en)", fontWeight: 300, fontSize: "clamp(28px, 3vw, 40px)", letterSpacing: "-0.02em", color: "var(--color-dark)", marginBottom: "64px", maxWidth: "500px", lineHeight: "1.15" }}>
            Four principles that govern every engagement.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1px", backgroundColor: "var(--color-border)" }} className="values-grid">
            {values.map((v) => (
              <div key={v.number} style={{ backgroundColor: "var(--color-muted)", padding: "40px 36px" }}>
                <p style={{ fontFamily: "var(--font-body-en)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "16px" }}>
                  {v.number}
                </p>
                <h3 style={{ fontFamily: "var(--font-heading-en)", fontWeight: 400, fontSize: "22px", letterSpacing: "-0.01em", color: "var(--color-dark)", marginBottom: "16px", lineHeight: "1.3" }}>
                  {v.title}
                </h3>
                <p style={{ fontFamily: "var(--font-body-en)", fontSize: "15px", lineHeight: "1.7", color: "var(--color-slate)" }}>
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ backgroundColor: "var(--color-warm-white)", padding: "96px 0", borderBottom: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <p style={{ fontFamily: "var(--font-body-en)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "16px" }}>
            The team
          </p>
          <h2 style={{ fontFamily: "var(--font-heading-en)", fontWeight: 300, fontSize: "clamp(28px, 3vw, 40px)", letterSpacing: "-0.02em", color: "var(--color-dark)", marginBottom: "64px", lineHeight: "1.15" }}>
            Practitioners, not presenters.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {team.map((member, i) => (
              <div key={i} style={{ padding: "48px 0", borderTop: "1px solid var(--color-border)", display: "grid", gridTemplateColumns: "280px 1fr 1fr", gap: "48px", alignItems: "start" }} className="team-row">
                <div>
                  <h3 style={{ fontFamily: "var(--font-heading-en)", fontWeight: 400, fontSize: "22px", letterSpacing: "-0.01em", color: "var(--color-dark)", marginBottom: "4px" }}>
                    {member.name}
                  </h3>
                  <p style={{ fontFamily: "var(--font-body-en)", fontSize: "13px", color: "var(--color-gold)", fontWeight: 500, letterSpacing: "0.05em", marginBottom: "4px" }}>
                    {member.role}
                  </p>
                  <p style={{ fontFamily: "var(--font-heading-zh)", fontSize: "12px", color: "var(--color-slate)" }}>
                    {member.zh}
                  </p>
                </div>
                <p style={{ fontFamily: "var(--font-body-en)", fontSize: "15px", lineHeight: "1.8", color: "var(--color-slate)" }}>
                  {member.bio}
                </p>
                <div>
                  {member.focus.map((area, j) => (
                    <div key={j} style={{ paddingBottom: "10px", marginBottom: "10px", borderBottom: j < member.focus.length - 1 ? "1px solid var(--color-border)" : "none" }}>
                      <p style={{ fontFamily: "var(--font-body-en)", fontSize: "13px", color: "var(--color-slate)" }}>
                        {area}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capacity note */}
      <section style={{ backgroundColor: "var(--color-muted)", padding: "64px 0", borderBottom: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ maxWidth: "640px" }}>
            <p style={{ fontFamily: "var(--font-body-en)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "16px" }}>
              Our capacity model
            </p>
            <p style={{ fontFamily: "var(--font-body-en)", fontSize: "17px", lineHeight: "1.8", color: "var(--color-slate)", marginBottom: "20px" }}>
              We run a maximum of three active engagements at any point. That constraint is intentional. The embedded model we practice requires full partner presence — not delegated junior teams working from a templated playbook.
            </p>
            <p style={{ fontFamily: "var(--font-body-en)", fontSize: "17px", lineHeight: "1.8", color: "var(--color-slate)" }}>
              If we are at capacity when you reach out, we will tell you honestly and give you an accurate view of when we might be available. We don&apos;t sell engagements we can&apos;t resource properly.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--color-forest)", padding: "80px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "32px" }}>
          <div>
            <h3 style={{ fontFamily: "var(--font-heading-en)", fontWeight: 300, fontSize: "28px", letterSpacing: "-0.02em", color: "var(--color-white)", marginBottom: "8px" }}>
              Ready to talk?
            </h3>
            <p style={{ fontFamily: "var(--font-body-en)", fontSize: "15px", color: "rgba(255,255,255,0.65)" }}>
              First conversation is always a candid assessment — no commitment required.
            </p>
          </div>
          <Link href="/contact" style={{ fontFamily: "var(--font-body-en)", fontSize: "14px", fontWeight: 500, color: "var(--color-forest)", backgroundColor: "var(--color-gold)", padding: "14px 28px", borderRadius: "4px", textDecoration: "none" }}>
            Get in touch ↗
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 1023px) {
          .team-row { grid-template-columns: 1fr 1fr !important; }
          .team-row > div:last-child { grid-column: 1 / -1; }
        }
        @media (max-width: 767px) {
          .two-col { grid-template-columns: 1fr !important; gap: 48px !important; }
          .values-grid { grid-template-columns: 1fr !important; }
          .team-row { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </>
  );
}
