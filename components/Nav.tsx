"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/philosophy", label: "Philosophy", zh: "理念" },
  { href: "/approach", label: "Approach", zh: "方法" },
  { href: "/services", label: "Services", zh: "服务" },
  { href: "/industries", label: "Industries", zh: "行业" },
  { href: "/insights", label: "Insights", zh: "洞察" },
  { href: "/about", label: "About", zh: "关于" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

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
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
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
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
          }}
          className="hidden-mobile"
        >
          {links.map((l) => {
            const active = pathname === l.href || pathname.startsWith(l.href + "/");
            return (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontFamily: "var(--font-body-en)",
                  fontSize: "14px",
                  fontWeight: 400,
                  letterSpacing: "0.01em",
                  color: active ? "var(--color-forest)" : "var(--color-slate)",
                  textDecoration: "none",
                  borderBottom: active ? "1px solid var(--color-forest)" : "1px solid transparent",
                  paddingBottom: "1px",
                  transition: "color 0.2s, border-color 0.2s",
                }}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Link
            href="/contact"
            className="hidden-mobile"
            style={{
              fontFamily: "var(--font-body-en)",
              fontSize: "13px",
              fontWeight: 500,
              color: "var(--color-white)",
              backgroundColor: "var(--color-forest)",
              padding: "8px 20px",
              borderRadius: "4px",
              textDecoration: "none",
              letterSpacing: "0.02em",
              transition: "background-color 0.2s",
            }}
          >
            Book a Diagnostic ↗
          </Link>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(!open)}
            className="show-mobile"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--color-dark)",
              padding: "4px",
            }}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          style={{
            backgroundColor: "var(--color-warm-white)",
            borderTop: "1px solid var(--color-border)",
            padding: "24px 32px 32px",
          }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "14px 0",
                borderBottom: "1px solid var(--color-border)",
                textDecoration: "none",
                color: "var(--color-dark)",
                fontFamily: "var(--font-heading-en)",
                fontSize: "18px",
                fontWeight: 400,
              }}
            >
              <span>{l.label}</span>
              <span
                style={{
                  fontFamily: "var(--font-heading-zh)",
                  fontSize: "14px",
                  color: "var(--color-slate)",
                }}
              >
                {l.zh}
              </span>
            </Link>
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
              fontFamily: "var(--font-body-en)",
              fontWeight: 500,
              fontSize: "14px",
            }}
          >
            Book a Diagnostic ↗
          </Link>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </header>
  );
}
