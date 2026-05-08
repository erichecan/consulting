"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  {
    href: "/industries",
    label: "Industries",
    children: [
      { href: "/industries/ecommerce", label: "E-Commerce", desc: "Fulfillment, returns, omnichannel" },
      { href: "/industries/wholesale", label: "Wholesale & Distribution", desc: "Multi-warehouse, B2B logistics" },
      { href: "/industries/manufacturing", label: "Manufacturing", desc: "MES integration, materials flow" },
    ],
  },
  {
    href: "/services",
    label: "Solutions",
    children: [
      { href: "/services/warehouse", label: "Warehouse Management", desc: "WMS strategy, implementation & optimisation" },
      { href: "/services/transportation", label: "Transportation Management", desc: "TMS, carrier management & route optimisation" },
      { href: "/services/advisory", label: "Strategic Advisory", desc: "Retainer-based operational counsel" },
    ],
  },
  { href: "/cases", label: "Cases" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

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
    pathname === href || pathname.startsWith(href + "/");

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
        <Link href="/" style={{ textDecoration: "none", flexShrink: 0 }}>
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
                  href={item.href}
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
                      const childActive = pathname === child.href || pathname.startsWith(child.href + "/");
                      return (
                        <Link
                          key={child.href}
                          href={child.href}
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

        {/* CTA + mobile burger */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}>
          <Link
            href="/contact"
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
            Contact Us ↗
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
                href={item.href}
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
                      href={child.href}
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
          <Link
            href="/contact"
            style={{
              display: "block",
              marginTop: "24px",
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
            Contact Us ↗
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
