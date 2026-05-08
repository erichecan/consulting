"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const l = (href: string) => `/${locale}${href}`;

  const cols = [
    {
      heading: t("services"),
      links: [
        { href: l("/services/warehouse"), label: t("diagnostic") },
        { href: l("/services/transportation"), label: t("implementation") },
        { href: l("/services/advisory"), label: t("advisory") },
      ],
    },
    {
      heading: t("company"),
      links: [
        { href: l("/philosophy"), label: t("philosophy") },
        { href: l("/approach"), label: t("approach") },
        { href: l("/about"), label: t("about") },
      ],
    },
    {
      heading: t("explore"),
      links: [
        { href: l("/industries"), label: t("industries") },
        { href: l("/insights"), label: t("insights") },
        { href: l("/contact"), label: t("contact") },
      ],
    },
  ];

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
            <Link href={l("/")} style={{ textDecoration: "none" }}>
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
                fontSize: "14px",
                lineHeight: "1.7",
                color: "rgba(255,255,255,0.65)",
                maxWidth: "280px",
              }}
            >
              {t("description")}
            </p>
            <Link
              href={l("/contact")}
              style={{
                display: "inline-block",
                marginTop: "24px",
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
              {t("contact")} ↗
            </Link>
          </div>

          {/* Nav columns */}
          {cols.map((col) => (
            <div key={col.heading}>
              <p
                style={{
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
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      style={{
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.75)",
                        textDecoration: "none",
                      }}
                    >
                      {link.label}
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
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>
            {t("copyright")}
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            <Link href={l("/privacy")} style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>
              {t("privacy")}
            </Link>
            <Link href={l("/terms")} style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>
              {t("terms")}
            </Link>
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
