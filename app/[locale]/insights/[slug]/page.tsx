import Link from "next/link";
import { notFound } from "next/navigation";
import { getTranslations, getLocale } from "next-intl/server";

const articleBodies: Record<string, string[]> = {
  "why-operational-problems-are-structural": [
    "When a leadership team describes their business as 'too busy but not moving', they are almost always describing a structural design failure — not an effort problem. The people are working hard. The systems are running. But the organisation has outgrown the structure that made it successful in its earlier phase.",
    "Structural problems manifest as operational ones. Missed forecasts, margin leaks, broken handoffs — these are symptoms. The root cause lives upstream, in how the organisation was designed: how information flows (or doesn't), how decisions are made (or deferred), how functions are connected (or disconnected).",
    "The most common structural failure we encounter is the informal organisation that grew up alongside the formal one. In fast-growing businesses, decisions get made outside of process because process was never built. The informal network is efficient at first — and then it becomes the bottleneck. Everyone knows who to call, but 'who to call' shouldn't be load-bearing.",
    "The diagnostic question is not 'where is the problem?' but 'what design decision created the conditions for this problem to persist?' That question leads you somewhere you can actually change. The symptoms are downstream. The cause is upstream in how the organisation was structured.",
    "This is why we start every engagement with a structural assessment — not a symptom inventory. We map the decision flows, the information flows, and the accountability structures. The problems usually become obvious. And more importantly, the lever that fixes them becomes obvious too.",
  ],
  "the-diagnostic-before-the-prescription": [
    "Most consultants arrive with answers. The honest ones arrive with questions. The gap between those two approaches is the gap between a slide deck and an actual outcome.",
    "We have a rule at Meridian: no solutions in week one. Not because we're slow. Because every business has a unique combination of constraints, history, and capability — and any solution offered before those are understood is a solution to a different business's problem.",
    "The diagnostic-first model isn't just methodological preference. It's what clients deserve. When you've hired someone to help you, you should expect them to understand your situation before they start improving it. The alternative is pattern-matching dressed up as expertise.",
    "What the diagnostic actually does is separate the presenting problem from the structural problem. The presenting problem is what the client describes in the first conversation. The structural problem is what the diagnostic uncovers. In our experience, they match about 40% of the time. The other 60% of the time, the structural problem is more upstream, more systemic, and more addressable than the presenting complaint suggested.",
    "Understanding why changes everything about the quality of the recommendation that follows. A diagnosis anchored in specifics produces recommendations that are specific. Generic observations produce generic recommendations — and generic recommendations don't get implemented.",
  ],
  "margin-compression-wholesale": [
    "Wholesale distributors facing margin pressure typically look at procurement first. That is rarely where the biggest opportunity sits. In our experience across 40+ distribution businesses, the procurement lever accounts for roughly 20–25% of available margin improvement. The other 75–80% sits in logistics costs, inventory discipline, and working capital management.",
    "The first lever is route economics. Most distributors don't have a clear view of which routes are profitable and which are subsidising volume. When we build the route-level P&L, it almost always surfaces 15–25% of routes that are loss-making at contribution level — routes that are being retained because of customer relationships, habit, or incomplete information.",
    "The second lever is inventory discipline. Distribution businesses tend to accumulate slow-moving stock over time. The accumulation is gradual — one line added here, another there — until the dead stock represents a meaningful proportion of working capital. The carrying cost is real and it shows up in the margin structure even when it's invisible in the management accounts.",
    "The third lever — and the one most often missed — is network structure. Many distributors are operating a warehouse footprint that made sense at a different revenue level, in a different competitive environment, with different customer expectations. The warehouse cost structure is fixed overhead. When it was built for £50M of volume and you're running £35M, the leverage is brutal.",
    "The sequencing matters: fix the route economics first (immediate cash impact), then the inventory discipline (working capital release), then assess whether the network structure needs to change (capital decision). Each lever requires a different type of analysis and a different type of intervention.",
  ],
  "sku-rationalisation": [
    "Range expansion is the default growth strategy in retail and distribution. More products means more revenue opportunities. More revenue means growth. The logic is intuitive — and the data suggests it is frequently wrong.",
    "The problem is that range complexity compounds. Each new SKU requires: a buying decision, a supplier relationship, warehouse space, a picking path, a forecast, a replenishment policy, a returns process, and management attention. The cost of each SKU is distributed across systems and people in ways that never appear as a single line item.",
    "The case for rationalisation is counterintuitive because it asks businesses to voluntarily reduce their addressable revenue. But the margin arithmetic usually shows that the bottom quartile of the range is consuming 30–40% of operational cost while generating 5–8% of gross profit. That's before considering the opportunity cost: the capacity freed by removing those SKUs could be redeployed to the SKUs that actually drive margin.",
    "The rationalisation process is not a single decision. It's a framework: classify each SKU by revenue, margin, and strategic importance; identify the segments where cost exceeds contribution; design a transition path that protects the revenue that matters; and build the ongoing governance that prevents the range from expanding back to its previous complexity.",
    "The hardest part is organisational, not analytical. The buyers who built the range, the salespeople who sold it, the customers who depend on it — they all resist rationalisation. The evidence that the range is destroying value is rarely compelling enough to overcome the specific objection. You have to be prepared to make the decision at the leadership level and hold it.",
  ],
  "embedded-vs-advisory": [
    "The consulting industry has a delivery problem. Recommendations without implementation responsibility produce slide decks, not outcomes. This is not a new observation — it's been made by every thoughtful critic of management consulting for fifty years. What is less often acknowledged is why the pattern persists.",
    "It persists because advisory is easier to sell. It has lower risk (for the consultant), faster delivery, and a compelling output. The client receives a strategy document. The consultant receives a fee. Whether the strategy is implemented — and whether it works — is someone else's problem.",
    "Embedded execution models are different in a specific way: accountability transfers. When the consultant is inside the organisation, making decisions, managing workstreams, and owning outcomes — the incentive structure changes. The quality of the recommendation is tested immediately. Bad advice is visible in days, not months.",
    "We have run both models at Meridian. The difference in outcome is stark. Not because the advisory model produces worse analysis — often the analysis is identical. But because implementation is where the real complexity lives: the stakeholder who won't engage, the system that doesn't behave as specified, the team that needs different training than expected.",
    "The question we ask prospective clients is: who is going to own the implementation? If the answer is 'we'll figure it out after the strategy is done', the risk of non-delivery is high. If the answer is 'that's actually the hard part and we need help with it', we're having the right conversation.",
  ],
  "manufacturing-throughput-without-capex": [
    "The instinct to solve capacity problems with new equipment is understandable. Machines are visible. Their specifications are measurable. The business case is straightforward. The instinct is also frequently unnecessary.",
    "In manufacturing, the scheduling and process lever is almost always larger than the capex lever — and it's available immediately. Most manufacturing operations we assess are running at 60–75% of their theoretical capacity. The gap isn't equipment. It's scheduling discipline, changeover management, and WIP accumulation.",
    "Changeover time is the most underestimated cost in manufacturing. A two-hour changeover on a four-hour run means 33% of that run is non-productive. Applied across a month, across multiple lines, the arithmetic is significant. SMED techniques — the systematic reduction of changeover time — consistently deliver 20–40% improvements without any capital expenditure.",
    "WIP accumulation is the second lever. Work in progress that sits between operations creates queuing delays, obscures the true bottleneck, and generates handling cost. The fix is a pull system — replenishing upstream operations based on downstream consumption rather than pushing based on forecast. This is conceptually simple. The implementation requires changing behaviour that has often been established for years.",
    "The third lever is scheduling discipline itself. Most manufacturers use informal scheduling — a mental model held by the scheduler, updated constantly, never documented. When the scheduler is absent or changes, the model breaks. Formalising scheduling (not necessarily with software — a well-designed whiteboard system can work at many scales) creates predictability, identifies the true constraint, and makes improvement visible.",
    "These three interventions — changeover reduction, WIP control, and scheduling discipline — are almost always worth assessing before any capex decision. In our experience, 70% of perceived capacity constraints can be addressed without new equipment.",
  ],
};

const slugs = Object.keys(articleBodies);

export async function generateStaticParams() {
  const locales = ["en", "zh"];
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
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

  const item = items.find((i) => i.slug === slug);
  if (!item || !articleBodies[slug]) notFound();

  const body = articleBodies[slug];
  const related = items.filter((i) => i.slug !== slug).slice(0, 3);

  return (
    <main style={{ paddingTop: "68px" }}>
      {/* Hero */}
      <section style={{ backgroundColor: "var(--color-dark)", color: "#fff", padding: "72px 32px 64px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <Link href={l("/insights")} style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "32px" }}>
            ← All Insights
          </Link>
          <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "20px" }}>
            <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-gold)" }}>
              {item.tag}
            </span>
            <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)" }}>·</span>
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>{item.date}</span>
            <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)" }}>·</span>
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>{item.readTime}</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-heading-en)", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.15, maxWidth: "800px" }}>
            {item.title}
          </h1>
        </div>
      </section>

      {/* Article body */}
      <section style={{ padding: "72px 32px 80px", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 320px", gap: "80px", alignItems: "start" }} className="article-grid">
          <article>
            <p style={{ fontSize: "18px", lineHeight: 1.75, fontWeight: 400, marginBottom: "28px", fontStyle: "italic", color: "var(--color-slate)" }}>
              {item.excerpt}
            </p>
            <hr style={{ border: "none", borderTop: "1px solid var(--color-border)", margin: "32px 0" }} />
            {body.map((para, i) => (
              <p key={i} style={{ fontSize: "16px", color: "var(--color-dark)", lineHeight: 1.8, marginBottom: "24px" }}>
                {para}
              </p>
            ))}
          </article>

          {/* Sidebar */}
          <div style={{ position: "sticky", top: "88px", display: "flex", flexDirection: "column", gap: "24px" }}>
            <div style={{ backgroundColor: "var(--color-forest)", borderRadius: "10px", padding: "32px 28px", color: "#fff" }}>
              <h3 style={{ fontFamily: "var(--font-heading-en)", fontSize: "18px", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: "12px", lineHeight: 1.3 }}>
                Start with a diagnostic
              </h3>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", marginBottom: "20px", lineHeight: 1.6 }}>
                30 days. A clear picture of where your operation is losing money.
              </p>
              <Link href={l("/contact")} style={{ display: "block", backgroundColor: "var(--color-gold)", color: "var(--color-dark)", padding: "12px 20px", borderRadius: "6px", fontWeight: 600, fontSize: "14px", textDecoration: "none", textAlign: "center" }}>
                Book a Diagnostic →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section style={{ padding: "64px 32px 80px", backgroundColor: "var(--color-warm-white)", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-heading-en)", fontSize: "20px", fontWeight: 600, letterSpacing: "-0.02em", color: "var(--color-dark)", marginBottom: "32px" }}>
            More insights
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
            {related.map((r) => (
              <Link key={r.slug} href={l(`/insights/${r.slug}`)} style={{ textDecoration: "none" }}>
                <article className="related-card" style={{ backgroundColor: "#fff", border: "1px solid var(--color-border)", borderRadius: "10px", padding: "24px", transition: "box-shadow 0.2s" }}>
                  <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "10px" }}>
                    {r.tag}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-heading-en)", fontSize: "15px", fontWeight: 600, color: "var(--color-dark)", lineHeight: 1.4, marginBottom: "10px", letterSpacing: "-0.01em" }}>
                    {r.title}
                  </h3>
                  <div style={{ fontSize: "12px", color: "var(--color-slate)" }}>{r.date} · {r.readTime}</div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <style>{`
        .related-card:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.06); }
        @media (max-width: 900px) {
          .article-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
