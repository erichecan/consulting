import Link from "next/link";

const metrics = [
  { value: "40+", label: "Engagements delivered" },
  { value: "18%", label: "Avg. cost reduction" },
  { value: "90d", label: "First measurable outcome" },
  { value: "94%", label: "Client retention rate" },
];

const services = [
  {
    number: "01",
    title: "Diagnostic Sprint",
    zh: "诊断冲刺",
    desc: "A 30-day structured assessment that maps every friction point across your operations and produces a prioritised action roadmap.",
    href: "/services/diagnostic",
  },
  {
    number: "02",
    title: "Implementation",
    zh: "落地执行",
    desc: "We embed alongside your team for 90–180 days to drive the changes identified in the diagnostic phase from concept to measurable outcome.",
    href: "/services/implementation",
  },
  {
    number: "03",
    title: "Embedded Advisory",
    zh: "嵌入式顾问",
    desc: "Ongoing strategic counsel delivered through a retainer model — keeping your leadership team accountable to decisions that compound over time.",
    href: "/services/advisory",
  },
];

const industries = [
  { title: "Wholesale Distribution", zh: "批发分销", href: "/industries/wholesale" },
  { title: "Precision Manufacturing", zh: "精密制造", href: "/industries/manufacturing" },
  { title: "Specialty Retail", zh: "专业零售", href: "/industries/retail" },
];

const insights = [
  {
    tag: "Operations",
    title: "Why Mid-Market Businesses Plateau at $50M Revenue",
    excerpt: "The structural patterns that appear reliably at the $50M threshold — and what high-performing operators do differently.",
    date: "Apr 2025",
    href: "/insights/why-midmarket-plateaus",
  },
  {
    tag: "Supply Chain",
    title: "The Hidden Cost of Inventory Decisions Made by Intuition",
    excerpt: "Quantifying the financial impact of demand forecasting gaps in wholesale and distribution businesses.",
    date: "Mar 2025",
    href: "/insights/inventory-intuition-cost",
  },
  {
    tag: "Strategy",
    title: "Building the Operating System Behind a Scalable Business",
    excerpt: "The five infrastructure decisions that determine whether a business can double revenue without doubling headcount.",
    date: "Feb 2025",
    href: "/insights/operating-system-scalable",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          backgroundColor: "var(--color-forest)",
          paddingTop: "68px",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "80px 32px",
            width: "100%",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body-en)",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--color-gold)",
              marginBottom: "32px",
            }}
          >
            Strategy & Operations Consulting
          </p>
          <h1
            style={{
              fontFamily: "var(--font-heading-en)",
              fontWeight: 300,
              fontSize: "clamp(40px, 6vw, 80px)",
              lineHeight: "1.05",
              letterSpacing: "-0.03em",
              color: "var(--color-white)",
              maxWidth: "820px",
              marginBottom: "40px",
            }}
          >
            Honest counsel.<br />
            <span style={{ color: "var(--color-gold)" }}>Measurable</span> outcomes.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body-en)",
              fontSize: "18px",
              lineHeight: "1.7",
              color: "rgba(255,255,255,0.7)",
              maxWidth: "520px",
              marginBottom: "48px",
            }}
          >
            We partner with mid-market businesses to diagnose structural
            inefficiencies and implement lasting operational change — without
            the overhead of a big-four firm.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link
              href="/contact"
              style={{
                fontFamily: "var(--font-body-en)",
                fontSize: "14px",
                fontWeight: 500,
                color: "var(--color-forest)",
                backgroundColor: "var(--color-gold)",
                padding: "14px 28px",
                borderRadius: "4px",
                textDecoration: "none",
                letterSpacing: "0.02em",
              }}
            >
              Book a Diagnostic ↗
            </Link>
            <Link
              href="/approach"
              style={{
                fontFamily: "var(--font-body-en)",
                fontSize: "14px",
                fontWeight: 400,
                color: "rgba(255,255,255,0.8)",
                border: "1px solid rgba(255,255,255,0.3)",
                padding: "14px 28px",
                borderRadius: "4px",
                textDecoration: "none",
              }}
            >
              How We Work
            </Link>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section style={{ backgroundColor: "var(--color-warm-white)", borderBottom: "1px solid var(--color-border)" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 32px",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
          }}
          className="metrics-grid"
        >
          {metrics.map((m, i) => (
            <div
              key={i}
              style={{
                padding: "40px 0",
                borderRight: i < metrics.length - 1 ? "1px solid var(--color-border)" : "none",
                paddingLeft: i > 0 ? "40px" : "0",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-heading-en)",
                  fontWeight: 300,
                  fontSize: "44px",
                  letterSpacing: "-0.03em",
                  color: "var(--color-forest)",
                  lineHeight: "1",
                  marginBottom: "8px",
                }}
              >
                {m.value}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body-en)",
                  fontSize: "13px",
                  color: "var(--color-slate)",
                  letterSpacing: "0.01em",
                }}
              >
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section style={{ backgroundColor: "var(--color-warm-white)", padding: "96px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "64px",
              flexWrap: "wrap",
              gap: "24px",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-body-en)",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--color-gold)",
                  marginBottom: "12px",
                }}
              >
                What We Do
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-heading-en)",
                  fontWeight: 300,
                  fontSize: "clamp(28px, 3.5vw, 44px)",
                  letterSpacing: "-0.02em",
                  color: "var(--color-dark)",
                  lineHeight: "1.1",
                }}
              >
                Three engagement models.<br />One through-line.
              </h2>
            </div>
            <Link
              href="/services"
              style={{
                fontFamily: "var(--font-body-en)",
                fontSize: "13px",
                color: "var(--color-forest)",
                textDecoration: "none",
                borderBottom: "1px solid var(--color-forest)",
                paddingBottom: "2px",
                whiteSpace: "nowrap",
              }}
            >
              All services ↗
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", backgroundColor: "var(--color-border)" }} className="services-grid">
            {services.map((s) => (
              <Link
                key={s.number}
                href={s.href}
                style={{
                  backgroundColor: "var(--color-warm-white)",
                  padding: "48px 40px",
                  textDecoration: "none",
                  display: "block",
                }}
                className="service-card"
              >
                <p
                  style={{
                    fontFamily: "var(--font-heading-en)",
                    fontWeight: 300,
                    fontSize: "13px",
                    letterSpacing: "0.08em",
                    color: "var(--color-gold)",
                    marginBottom: "20px",
                  }}
                >
                  {s.number}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-heading-en)",
                    fontWeight: 400,
                    fontSize: "22px",
                    letterSpacing: "-0.01em",
                    color: "var(--color-dark)",
                    marginBottom: "8px",
                    lineHeight: "1.2",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-heading-zh)",
                    fontSize: "13px",
                    color: "var(--color-slate)",
                    marginBottom: "20px",
                  }}
                >
                  {s.zh}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body-en)",
                    fontSize: "14px",
                    lineHeight: "1.7",
                    color: "var(--color-slate)",
                    marginBottom: "32px",
                  }}
                >
                  {s.desc}
                </p>
                <span
                  style={{
                    fontFamily: "var(--font-body-en)",
                    fontSize: "13px",
                    color: "var(--color-forest)",
                    borderBottom: "1px solid var(--color-forest)",
                    paddingBottom: "1px",
                  }}
                >
                  Learn more ↗
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy callout */}
      <section
        style={{
          backgroundColor: "var(--color-muted)",
          padding: "96px 0",
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ maxWidth: "760px" }}>
            <p
              style={{
                fontFamily: "var(--font-heading-zh)",
                fontSize: "13px",
                color: "var(--color-gold)",
                marginBottom: "24px",
                letterSpacing: "0.05em",
              }}
            >
              我们的理念
            </p>
            <blockquote
              style={{
                fontFamily: "var(--font-heading-en)",
                fontWeight: 300,
                fontSize: "clamp(22px, 3vw, 34px)",
                lineHeight: "1.45",
                letterSpacing: "-0.02em",
                color: "var(--color-dark)",
                marginBottom: "32px",
                borderLeft: "3px solid var(--color-gold)",
                paddingLeft: "28px",
              }}
            >
              &ldquo;Every operational problem has a structural cause. We don&apos;t
              fix symptoms — we redesign the system that keeps producing them.&rdquo;
            </blockquote>
            <Link
              href="/philosophy"
              style={{
                fontFamily: "var(--font-body-en)",
                fontSize: "13px",
                color: "var(--color-forest)",
                textDecoration: "none",
                borderBottom: "1px solid var(--color-forest)",
                paddingBottom: "2px",
              }}
            >
              Our philosophy ↗
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section style={{ backgroundColor: "var(--color-warm-white)", padding: "96px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <p
            style={{
              fontFamily: "var(--font-body-en)",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--color-gold)",
              marginBottom: "12px",
            }}
          >
            Where We Work
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "48px",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-heading-en)",
                fontWeight: 300,
                fontSize: "clamp(28px, 3.5vw, 44px)",
                letterSpacing: "-0.02em",
                color: "var(--color-dark)",
                lineHeight: "1.1",
              }}
            >
              Deep expertise in three sectors.
            </h2>
            <Link
              href="/industries"
              style={{
                fontFamily: "var(--font-body-en)",
                fontSize: "13px",
                color: "var(--color-forest)",
                textDecoration: "none",
                borderBottom: "1px solid var(--color-forest)",
                paddingBottom: "2px",
                whiteSpace: "nowrap",
              }}
            >
              View all industries ↗
            </Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {industries.map((ind, i) => (
              <Link
                key={ind.href}
                href={ind.href}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "28px 0",
                  borderTop: "1px solid var(--color-border)",
                  borderBottom: i === industries.length - 1 ? "1px solid var(--color-border)" : "none",
                  textDecoration: "none",
                }}
                className="industry-row"
              >
                <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-body-en)",
                      fontSize: "11px",
                      color: "var(--color-slate)",
                      width: "24px",
                    }}
                  >
                    0{i + 1}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-heading-en)",
                      fontWeight: 400,
                      fontSize: "clamp(18px, 2.5vw, 26px)",
                      color: "var(--color-dark)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {ind.title}
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-heading-zh)",
                      fontSize: "14px",
                      color: "var(--color-slate)",
                    }}
                  >
                    {ind.zh}
                  </span>
                  <span style={{ color: "var(--color-forest)", fontSize: "18px" }}>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Insights */}
      <section
        style={{
          backgroundColor: "var(--color-muted)",
          padding: "96px 0",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "48px",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-body-en)",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--color-gold)",
                  marginBottom: "12px",
                }}
              >
                Insights
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-heading-en)",
                  fontWeight: 300,
                  fontSize: "clamp(28px, 3.5vw, 44px)",
                  letterSpacing: "-0.02em",
                  color: "var(--color-dark)",
                  lineHeight: "1.1",
                }}
              >
                Thinking from the field.
              </h2>
            </div>
            <Link
              href="/insights"
              style={{
                fontFamily: "var(--font-body-en)",
                fontSize: "13px",
                color: "var(--color-forest)",
                textDecoration: "none",
                borderBottom: "1px solid var(--color-forest)",
                paddingBottom: "2px",
                whiteSpace: "nowrap",
              }}
            >
              All insights ↗
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }} className="insights-grid">
            {insights.map((ins) => (
              <Link
                key={ins.href}
                href={ins.href}
                style={{ textDecoration: "none", display: "block" }}
              >
                <article>
                  <p
                    style={{
                      fontFamily: "var(--font-body-en)",
                      fontSize: "11px",
                      fontWeight: 500,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--color-gold)",
                      marginBottom: "12px",
                    }}
                  >
                    {ins.tag}
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading-en)",
                      fontWeight: 400,
                      fontSize: "18px",
                      letterSpacing: "-0.01em",
                      color: "var(--color-dark)",
                      lineHeight: "1.35",
                      marginBottom: "12px",
                    }}
                  >
                    {ins.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body-en)",
                      fontSize: "14px",
                      lineHeight: "1.65",
                      color: "var(--color-slate)",
                      marginBottom: "16px",
                    }}
                  >
                    {ins.excerpt}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body-en)",
                      fontSize: "12px",
                      color: "var(--color-slate)",
                      opacity: 0.7,
                    }}
                  >
                    {ins.date}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ backgroundColor: "var(--color-forest)", padding: "96px 0" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 32px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "40px",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "var(--font-heading-en)",
                fontWeight: 300,
                fontSize: "clamp(28px, 3.5vw, 44px)",
                letterSpacing: "-0.02em",
                color: "var(--color-white)",
                lineHeight: "1.1",
                marginBottom: "16px",
              }}
            >
              Ready to find the structural fault?
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body-en)",
                fontSize: "16px",
                color: "rgba(255,255,255,0.65)",
                maxWidth: "480px",
                lineHeight: "1.6",
              }}
            >
              Start with a no-obligation diagnostic conversation. We&apos;ll tell
              you honestly whether we can help — and what it would take.
            </p>
          </div>
          <Link
            href="/contact"
            style={{
              fontFamily: "var(--font-body-en)",
              fontSize: "15px",
              fontWeight: 500,
              color: "var(--color-forest)",
              backgroundColor: "var(--color-gold)",
              padding: "16px 32px",
              borderRadius: "4px",
              textDecoration: "none",
              letterSpacing: "0.02em",
              whiteSpace: "nowrap",
            }}
          >
            Book a Diagnostic ↗
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 767px) {
          .metrics-grid { grid-template-columns: 1fr 1fr !important; }
          .metrics-grid > div { padding-left: 0 !important; border-right: none !important; border-bottom: 1px solid var(--color-border); }
          .services-grid { grid-template-columns: 1fr !important; }
          .insights-grid { grid-template-columns: 1fr !important; }
        }
        .service-card:hover { background-color: var(--color-muted) !important; }
        .industry-row:hover span:last-child { transform: translateX(4px); transition: transform 0.2s; }
      `}</style>
    </>
  );
}
