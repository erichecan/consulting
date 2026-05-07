import Link from "next/link";

const cols = [
  {
    heading: "Services",
    links: [
      { href: "/services/diagnostic", label: "Diagnostic Sprint" },
      { href: "/services/implementation", label: "Implementation" },
      { href: "/services/advisory", label: "Embedded Advisory" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/philosophy", label: "Philosophy" },
      { href: "/approach", label: "Approach" },
      { href: "/about", label: "About" },
    ],
  },
  {
    heading: "Explore",
    links: [
      { href: "/industries", label: "Industries" },
      { href: "/insights", label: "Insights" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--color-forest)",
        color: "var(--color-white)",
        paddingTop: "64px",
        paddingBottom: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 32px",
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "48px",
            paddingBottom: "48px",
            borderBottom: "1px solid rgba(255,255,255,0.15)",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <Link href="/" style={{ textDecoration: "none" }}>
              <span
                style={{
                  fontFamily: "var(--font-heading-en)",
                  fontWeight: 500,
                  fontSize: "20px",
                  letterSpacing: "-0.02em",
                  color: "var(--color-white)",
                }}
              >
                Meridian<span style={{ color: "var(--color-gold)" }}>.</span>
              </span>
            </Link>
            <p
              style={{
                marginTop: "16px",
                fontFamily: "var(--font-body-en)",
                fontSize: "14px",
                lineHeight: "1.7",
                color: "rgba(255,255,255,0.65)",
                maxWidth: "280px",
              }}
            >
              We help mid-market businesses diagnose structural inefficiencies
              and implement lasting operational change.
            </p>
            <Link
              href="/contact"
              style={{
                display: "inline-block",
                marginTop: "24px",
                fontFamily: "var(--font-body-en)",
                fontSize: "13px",
                fontWeight: 500,
                color: "var(--color-forest)",
                backgroundColor: "var(--color-gold)",
                padding: "10px 20px",
                borderRadius: "4px",
                textDecoration: "none",
                letterSpacing: "0.02em",
              }}
            >
              Book a Diagnostic ↗
            </Link>
          </div>

          {/* Nav columns */}
          {cols.map((col) => (
            <div key={col.heading}>
              <p
                style={{
                  fontFamily: "var(--font-body-en)",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.45)",
                  marginBottom: "16px",
                }}
              >
                {col.heading}
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      style={{
                        fontFamily: "var(--font-body-en)",
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.75)",
                        textDecoration: "none",
                      }}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "24px",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body-en)",
              fontSize: "12px",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            © 2025 Meridian Advisory. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Privacy", "Terms"].map((t) => (
              <Link
                key={t}
                href={`/${t.toLowerCase()}`}
                style={{
                  fontFamily: "var(--font-body-en)",
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.4)",
                  textDecoration: "none",
                }}
              >
                {t}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .footer-grid > div:first-child {
            grid-column: 1 / -1;
          }
        }
      `}</style>
    </footer>
  );
}
