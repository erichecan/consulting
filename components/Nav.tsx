"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("nav");
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Strip locale prefix for active state matching
  const pathWithoutLocale = pathname.replace(/^\/(en|zh)/, "") || "/";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const openDropdown = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(label);
  };

  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  const isActive = (href: string) =>
    pathWithoutLocale === href || pathWithoutLocale.startsWith(href + "/");

  // locale-prefixed href helper
  const l = (href: string) => `/${locale}${href}`;

  const toggleLocale = () => {
    const newLocale = locale === "en" ? "zh" : "en";
    // Replace current locale prefix with new one
    const newPath = pathname.replace(/^\/(en|zh)/, `/${newLocale}`);
    router.push(newPath);
  };

  const navItems = [
    {
      href: "/industries",
      label: t("industries"),
      children: [
        { href: "/industries/ecommerce", label: t("industriesItems.ecommerce"), desc: t("industriesItems.ecommerceDesc") },
        { href: "/industries/wholesale", label: t("industriesItems.wholesale"), desc: t("industriesItems.wholesaleDesc") },
        { href: "/industries/manufacturing", label: t("industriesItems.manufacturing"), desc: t("industriesItems.manufacturingDesc") },
      ],
    },
    {
      href: "/services",
      label: t("solutions"),
      children: [
        { href: "/services/warehouse", label: t("solutionsItems.warehouse"), desc: t("solutionsItems.warehouseDesc") },
        { href: "/services/transportation", label: t("solutionsItems.transportation"), desc: t("solutionsItems.transportationDesc") },
        { href: "/services/advisory", label: t("solutionsItems.advisory"), desc: t("solutionsItems.advisoryDesc") },
      ],
    },
    { href: "/cases", label: t("cases") },
    { href: "/insights", label: t("insights") },
    { href: "/about", label: t("about") },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: scrolled ? "rgba(250,250,247,0.97)" : "transparent",
        borderBottom: scrolled ? "1px solid #E5E5E0" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 32px",
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        {/* Logo */}
        <Link href={l("/")} style={{ textDecoration: "none", flexShrink: 0 }}>
          <span
            style={{
              fontFamily: "var(--font-heading-en)",
              fontWeight: 500,
              fontSize: "18px",
              letterSpacing: "-0.02em",
              color: "var(--color-forest)",
            }}
          >
            Meridian<span style={{ color: "var(--color-gold)" }}>.</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          style={{ display: "flex", alignItems: "center", gap: "4px" }}
          className="nav-desktop"
        >
          {navItems.map((item) => {
            const active = isActive(item.href);
            const open = activeDropdown === item.label;

            return (
              <div
                key={item.href}
                style={{ position: "relative" }}
                onMouseEnter={() => item.children && openDropdown(item.label)}
                onMouseLeave={() => item.children && closeDropdown()}
              >
                <Link
                  href={l(item.href)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "3px",
                    padding: "6px 14px",
                    fontSize: "14px",
                    fontWeight: active ? 500 : 400,
                    letterSpacing: "0.01em",
                    color: active ? "var(--color-forest)" : "var(--color-slate)",
                    textDecoration: "none",
                    borderRadius: "4px",
                    transition: "color 0.2s",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      size={13}
                      style={{
                        transition: "transform 0.2s",
                        transform: open ? "rotate(180deg)" : "none",
                        opacity: 0.55,
                        marginTop: "1px",
                      }}
                    />
                  )}
                </Link>

                {/* Active underline */}
                {active && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-1px",
                      left: "14px",
                      right: "14px",
                      height: "2px",
                      backgroundColor: "var(--color-forest)",
                      borderRadius: "1px",
                    }}
                  />
                )}

                {/* Mega dropdown */}
                {item.children && open && (
                  <div
                    style={{
                      position: "absolute",
                      top: "calc(100% + 10px)",
                      left: "50%",
                      transform: "translateX(-50%)",
                      backgroundColor: "#fff",
                      border: "1px solid var(--color-border)",
                      borderRadius: "10px",
                      boxShadow: "0 12px 40px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
                      padding: "8px",
                      minWidth: "272px",
                      zIndex: 200,
                    }}
                    onMouseEnter={() => openDropdown(item.label)}
                    onMouseLeave={() => closeDropdown()}
                  >
                    {item.children.map((child) => {
                      const childActive = pathWithoutLocale === child.href || pathWithoutLocale.startsWith(child.href + "/");
                      return (
                        <Link
                          key={child.href}
                          href={l(child.href)}
                          style={{
                            display: "block",
                            padding: "10px 14px",
                            borderRadius: "6px",
                            textDecoration: "none",
                            backgroundColor: childActive ? "var(--color-muted)" : "transparent",
                            transition: "background 0.15s",
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--color-muted)";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = childActive ? "var(--color-muted)" : "transparent";
                          }}
                        >
                          <div style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-dark)", marginBottom: "2px" }}>
                            {child.label}
                          </div>
                          <div style={{ fontSize: "12px", color: "var(--color-slate)", lineHeight: 1.4 }}>
                            {child.desc}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* CTA + locale toggle + mobile burger */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
          {/* Language toggle */}
          <button
            onClick={toggleLocale}
            className="nav-desktop"
            style={{
              fontSize: "12px",
              fontWeight: 500,
              color: "var(--color-slate)",
              backgroundColor: "transparent",
              border: "1px solid var(--color-border)",
              padding: "5px 12px",
              borderRadius: "4px",
              cursor: "pointer",
              letterSpacing: "0.03em",
              transition: "border-color 0.2s, color 0.2s",
              whiteSpace: "nowrap",
            }}
          >
            {locale === "en" ? "中文" : "EN"}
          </button>

          <Link
            href={l("/contact")}
            className="nav-desktop"
            style={{
              fontSize: "13px",
              fontWeight: 500,
              color: "var(--color-white)",
              backgroundColor: "var(--color-forest)",
              padding: "8px 18px",
              borderRadius: "4px",
              textDecoration: "none",
              letterSpacing: "0.02em",
              transition: "background-color 0.2s",
              whiteSpace: "nowrap",
            }}
          >
            {t("contact")} ↗
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="nav-mobile"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--color-dark)",
              padding: "4px",
              display: "flex",
              alignItems: "center",
            }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          style={{
            backgroundColor: "var(--color-warm-white)",
            borderTop: "1px solid var(--color-border)",
            padding: "16px 24px 32px",
            maxHeight: "80vh",
            overflowY: "auto",
          }}
        >
          {navItems.map((item) => (
            <div key={item.href}>
              <Link
                href={l(item.href)}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "14px 0",
                  borderBottom: "1px solid var(--color-border)",
                  textDecoration: "none",
                  color: "var(--color-dark)",
                  fontFamily: "var(--font-heading-en)",
                  fontSize: "17px",
                  fontWeight: 400,
                }}
              >
                {item.label}
              </Link>
              {item.children && (
                <div style={{ paddingLeft: "16px" }}>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={l(child.href)}
                      style={{
                        display: "block",
                        padding: "10px 0",
                        borderBottom: "1px solid #f0f0ec",
                        textDecoration: "none",
                        color: "var(--color-slate)",
                        fontSize: "14px",
                      }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile language toggle */}
          <button
            onClick={toggleLocale}
            style={{
              display: "block",
              width: "100%",
              marginTop: "16px",
              padding: "12px",
              backgroundColor: "transparent",
              border: "1px solid var(--color-border)",
              borderRadius: "4px",
              color: "var(--color-slate)",
              fontSize: "14px",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            {locale === "en" ? "切換至中文" : "Switch to English"}
          </button>

          <Link
            href={l("/contact")}
            style={{
              display: "block",
              marginTop: "12px",
              textAlign: "center",
              padding: "14px",
              backgroundColor: "var(--color-forest)",
              color: "var(--color-white)",
              borderRadius: "4px",
              textDecoration: "none",
              fontWeight: 500,
              fontSize: "14px",
            }}
          >
            {t("contact")} ↗
          </Link>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .nav-desktop { display: flex !important; }
          .nav-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .nav-desktop { display: none !important; }
          .nav-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
