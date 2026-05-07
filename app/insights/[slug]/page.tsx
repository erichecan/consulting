import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const articles: Record<string, {
  tag: string;
  tagZh: string;
  title: string;
  date: string;
  readTime: string;
  body: { type: "p" | "h2" | "blockquote"; text: string }[];
}> = {
  "why-operational-problems-are-structural": {
    tag: "Operations",
    tagZh: "运营",
    title: "Why operational problems are usually structural ones in disguise",
    date: "April 2025",
    readTime: "6 min read",
    body: [
      { type: "p", text: "When leadership teams describe their business as 'too busy but not moving', they are almost always describing a structural design failure — not an effort problem. The organisation is working hard. The processes are consuming resources. The management team is in back-to-back meetings. And yet the key metrics aren't improving." },
      { type: "p", text: "This pattern is so common in mid-market businesses that we consider it a diagnostic signal rather than a description. When a business is busy but not moving, the problem is almost never insufficient effort. It is structural misalignment between how the business is organised and what it is trying to achieve." },
      { type: "h2", text: "The structural vs. operational distinction" },
      { type: "p", text: "Operational problems respond to operational interventions. A production scheduling issue can be fixed by improving the scheduling process. A customer service backlog can be addressed by adjusting staffing levels. These are real problems, but they have identifiable causes and proportionate solutions." },
      { type: "p", text: "Structural problems look like operational ones from the inside. The symptoms — slow throughput, margin compression, revenue plateau — are real and measurable. But the cause sits above the process level. It sits in how the business is designed: which decisions get made where, how accountability flows through the organisation, which activities are resourced and which are not." },
      { type: "blockquote", text: "A structural problem solved at the operational level will return. You can optimise a process that sits inside a broken structure indefinitely, and the business will keep producing the same outcome." },
      { type: "h2", text: "The diagnostic approach" },
      { type: "p", text: "The first question in any engagement is not 'what needs to improve?' It is 'why is this happening?'. The answer to the first question is almost always visible in the management accounts. The answer to the second is almost never there." },
      { type: "p", text: "Finding the structural root cause requires a different kind of investigation: interviews across functions, process observation, financial data reconstruction that goes below the reported lines. It takes time — usually 30 days for a business of any meaningful complexity — and it requires the kind of access that most external advisors don't achieve." },
      { type: "p", text: "The investment is worth it. A correct structural diagnosis almost always surfaces 2–4 percentage points of recoverable margin within the existing business. No additional revenue required. No capital expenditure. Just a clearer understanding of where value is being consumed by the structure rather than created by it." },
    ],
  },
  "the-diagnostic-before-the-prescription": {
    tag: "Strategy",
    tagZh: "战略",
    title: "The diagnostic before the prescription: why we never lead with solutions",
    date: "March 2025",
    readTime: "5 min read",
    body: [
      { type: "p", text: "Most consultants arrive with answers. The pattern is predictable: a brief intake call, a few days reviewing documents, and then a presentation of recommendations that were largely formed before the engagement began. The client pays for specificity but receives a generic framework applied to their specific numbers." },
      { type: "p", text: "The honest answer is that this model is commercially rational. Clients want to feel that the advisor is decisive and expert. Decisiveness reads as confidence. And the engagement moves faster when recommendations are formed early." },
      { type: "h2", text: "What gets missed" },
      { type: "p", text: "The problem is that businesses are not generic. The same symptoms — margin compression, revenue plateau, operational overload — can have entirely different root causes in different businesses. The right intervention for one is frequently the wrong intervention for another." },
      { type: "p", text: "When we begin a diagnostic engagement, we treat every hypothesis as provisional. The financial data suggests something. The interviews confirm some of it and contradict other parts. The process observation reveals things that don't appear in either. By week three, we usually have a picture that is materially different from the one we would have formed in week one." },
      { type: "blockquote", text: "The quality of the recommendation is downstream of the quality of the diagnosis. There is no shortcut that doesn't compromise the outcome." },
      { type: "h2", text: "Why it changes the intervention" },
      { type: "p", text: "A correct diagnosis changes not just what you recommend, but what you prioritise. In a recent wholesale distribution engagement, the presenting problem was logistics cost. The actual problem was supplier fragmentation — which was creating the logistics complexity. Fixing the logistics without addressing the supplier base would have been a temporary and expensive solution to a symptom." },
      { type: "p", text: "The four weeks of diagnostic work paid for themselves in the first year of implementation. That is not unusual. What is unusual is the willingness to spend the time getting the diagnosis right before committing to an intervention." },
    ],
  },
  "margin-compression-wholesale": {
    tag: "Wholesale",
    tagZh: "批发",
    title: "Margin compression in wholesale distribution: the three levers that actually move the number",
    date: "February 2025",
    readTime: "8 min read",
    body: [
      { type: "p", text: "Wholesale distributors facing margin pressure typically look at procurement first. That is rarely where the biggest opportunity sits. The instinct is understandable — buying prices are visible, negotiable, and feel within control. But in most distribution businesses, the procurement lever has already been optimised to near its limit. The suppliers who remain are the ones with leverage." },
      { type: "p", text: "The three levers that consistently move the margin number in distribution businesses are supplier consolidation, logistics network design, and working capital management. All three are structural rather than transactional — which is why they don't get addressed in the annual budget process." },
      { type: "h2", text: "Lever one: supplier consolidation" },
      { type: "p", text: "Most distributors have supplier counts that have grown by accretion rather than design. Each new product category brings new suppliers. Over time, the supplier base fragments — and with it, the purchasing leverage per supplier declines." },
      { type: "p", text: "Supplier consolidation is not about reducing choice for customers. It is about concentrating spend to improve terms, reduce administrative overhead, and simplify the supply chain. A 30–40% reduction in active supplier count is achievable in most distribution businesses without materially affecting the product range." },
      { type: "h2", text: "Lever two: logistics network design" },
      { type: "p", text: "Route efficiency is rarely measured with the precision that procurement efficiency is. Most distributors know their freight cost as a percentage of revenue. Few know their cost per delivery by route, by day, by customer density. That granularity is where the opportunity sits." },
      { type: "blockquote", text: "Route optimisation is not a technology problem. It is a data discipline problem. The technology is available. The willingness to change delivery patterns is the constraint." },
      { type: "h2", text: "Lever three: working capital" },
      { type: "p", text: "Slow-moving inventory is a margin problem disguised as an inventory problem. The carrying cost of stock that turns once rather than three times is substantial — and it compounds. The intervention is not a write-down. It is a buying discipline change and a SKU rationalisation programme that prevents the problem from recurring." },
    ],
  },
  "sku-rationalisation": {
    tag: "Retail",
    tagZh: "零售",
    title: "The counterintuitive case for selling fewer products",
    date: "January 2025",
    readTime: "7 min read",
    body: [
      { type: "p", text: "Range expansion is the default growth strategy in retail. Add more products, reach more customers, generate more revenue. The logic is intuitive. The data is less supportive." },
      { type: "p", text: "In most retail businesses we work with, the bottom 20–30% of the SKU range generates less than 5% of revenue while consuming a disproportionate share of inventory capital, buying time, store space, and operational complexity. Removing those SKUs would not meaningfully reduce revenue. It would meaningfully reduce costs." },
      { type: "h2", text: "Why ranges keep growing" },
      { type: "p", text: "The forces that expand ranges are structural. Buyers are evaluated on newness and range breadth. Suppliers push for placement. The cost of adding a SKU looks small in isolation. The cost of a fragmented range — spread across buying, inventory, stores, and markdown — is diffuse and invisible in the management accounts." },
      { type: "blockquote", text: "Range proliferation is a classic case of visible individual decisions creating invisible collective costs. No single SKU addition looks wrong. The aggregate always does." },
      { type: "h2", text: "The rationalisation process" },
      { type: "p", text: "A productive SKU rationalisation starts with contribution analysis — revenue minus direct cost minus an allocation of inventory carrying cost. Most retailers can identify the lowest-performing quartile of their range within a week of analysis." },
      { type: "p", text: "The discipline is in the implementation. Range decisions are politically loaded in most retail businesses. The analytical case is straightforward. The change management is not. That is where external facilitation consistently adds value." },
    ],
  },
  "embedded-vs-advisory": {
    tag: "Advisory",
    tagZh: "顾问",
    title: "Embedded execution vs. advisory: which model actually changes behaviour",
    date: "December 2024",
    readTime: "5 min read",
    body: [
      { type: "p", text: "The consulting industry has a delivery problem. The traditional model — external team analyses, external team recommends, client team implements — produces outcomes that are systematically worse than the quality of the analysis that preceded them." },
      { type: "p", text: "The gap between recommendation and implementation is not a client capability problem. It is a model problem. Recommendations made without implementation responsibility optimise for comprehensiveness rather than executability. They are designed to be defensible in a readout, not achievable in a quarter." },
      { type: "h2", text: "What embedded execution changes" },
      { type: "p", text: "When the team that identifies the problem is also the team responsible for fixing it, the entire incentive structure changes. The recommendation is only as good as the implementation plan behind it. Scope is constrained not by what would be interesting to analyse, but by what can actually be delivered." },
      { type: "blockquote", text: "Advisory without accountability produces interesting thinking. Embedding with accountability produces change." },
      { type: "p", text: "The embedded model also changes what gets discovered. Being present in weekly operating meetings, joining the reporting cadence, doing the work alongside the internal team — this surfaces information that external analysis never reaches. The implementation is better because the diagnosis was deeper." },
      { type: "h2", text: "The right model for the right stage" },
      { type: "p", text: "Not every engagement requires embedding. A business that has a correct diagnosis and a capable execution team may need strategic counsel rather than implementation bandwidth. The choice of model should follow from a clear-eyed assessment of where the constraint actually sits — not from a preference for one engagement type over another." },
    ],
  },
  "manufacturing-throughput-without-capex": {
    tag: "Manufacturing",
    tagZh: "制造",
    title: "Improving manufacturing throughput without capital expenditure",
    date: "November 2024",
    readTime: "9 min read",
    body: [
      { type: "p", text: "The instinct to solve capacity problems with new equipment is understandable. It is also frequently unnecessary. In most manufacturing businesses we work with, the available throughput improvement from scheduling, process discipline, and overhead alignment is substantially larger than the improvement achievable from additional capital." },
      { type: "p", text: "This is not a universal claim. Some capacity constraints are genuinely physical — the line cannot run faster, the building cannot hold more equipment, the process chemistry has a fixed cycle time. But these cases are less common than they appear from inside a business that is experiencing capacity pressure." },
      { type: "h2", text: "The scheduling lever" },
      { type: "p", text: "Production scheduling in mid-market manufacturers is rarely optimised. The planning function has typically grown organically, with schedulers developing personal systems that work within their individual knowledge but don't transfer, scale, or adapt well to volume changes." },
      { type: "p", text: "A structured scheduling review consistently identifies 10–15% of available capacity that is consumed by suboptimal sequencing — unnecessary changeovers, preventable downtime windows, batching decisions that optimise for one function at the cost of another." },
      { type: "h2", text: "The overhead alignment lever" },
      { type: "p", text: "Most manufacturers have overhead structures built for a volume level that no longer matches current production. The fixed cost base was appropriate when the business was larger — or was growing toward a size that was never reached." },
      { type: "blockquote", text: "Overhead that was rational at one volume level becomes a drag at another. The problem is that overhead rationalisation requires decisions that are difficult to make internally — because they involve people, not just processes." },
      { type: "h2", text: "The make-vs-buy lever" },
      { type: "p", text: "Decisions about what to manufacture internally versus purchase externally were made at a particular cost structure and competitive context. Both change. A quarterly make-vs-buy review is uncommon in mid-market manufacturers, which means decisions that made sense five years ago remain in place long after the economics have changed." },
      { type: "p", text: "In several recent engagements, a systematic make-vs-buy analysis has identified 2–3 process steps where outsourcing would free capacity for higher-value activities — at a lower total cost. The analysis takes weeks. The decision takes months. The benefit compounds for years." },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return { title: "Not Found" };
  return {
    title: `${article.title} — Meridian Advisory`,
    description: article.body.find((b) => b.type === "p")?.text.slice(0, 160),
  };
}

export default async function InsightArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) notFound();

  return (
    <>
      <section style={{ backgroundColor: "var(--color-warm-white)", paddingTop: "140px", paddingBottom: "64px", borderBottom: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 32px" }}>
          <Link href="/insights" style={{ fontFamily: "var(--font-body-en)", fontSize: "13px", color: "var(--color-slate)", textDecoration: "none", marginBottom: "40px", display: "inline-block" }}>
            ← Insights
          </Link>
          <div style={{ display: "flex", gap: "8px", marginBottom: "24px", alignItems: "center" }}>
            <span style={{ fontFamily: "var(--font-body-en)", fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-gold)" }}>
              {article.tag}
            </span>
            <span style={{ fontFamily: "var(--font-heading-zh)", fontSize: "11px", color: "var(--color-slate)" }}>
              {article.tagZh}
            </span>
          </div>
          <h1 style={{ fontFamily: "var(--font-heading-en)", fontWeight: 300, fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.02em", color: "var(--color-dark)", lineHeight: "1.15", marginBottom: "24px" }}>
            {article.title}
          </h1>
          <div style={{ display: "flex", gap: "24px" }}>
            <span style={{ fontFamily: "var(--font-body-en)", fontSize: "13px", color: "var(--color-slate)" }}>{article.date}</span>
            <span style={{ fontFamily: "var(--font-body-en)", fontSize: "13px", color: "var(--color-slate)" }}>{article.readTime}</span>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--color-warm-white)", padding: "64px 0 96px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 32px" }}>
          {article.body.map((block, i) => {
            if (block.type === "h2") {
              return (
                <h2 key={i} style={{ fontFamily: "var(--font-heading-en)", fontWeight: 400, fontSize: "24px", letterSpacing: "-0.01em", color: "var(--color-dark)", marginTop: "48px", marginBottom: "16px" }}>
                  {block.text}
                </h2>
              );
            }
            if (block.type === "blockquote") {
              return (
                <blockquote key={i} style={{ borderLeft: "3px solid var(--color-gold)", paddingLeft: "24px", margin: "40px 0", fontFamily: "var(--font-heading-en)", fontWeight: 300, fontSize: "20px", letterSpacing: "-0.01em", color: "var(--color-dark)", lineHeight: "1.5" }}>
                  {block.text}
                </blockquote>
              );
            }
            return (
              <p key={i} style={{ fontFamily: "var(--font-body-en)", fontSize: "17px", lineHeight: "1.8", color: "var(--color-slate)", marginBottom: "24px" }}>
                {block.text}
              </p>
            );
          })}

          <div style={{ marginTop: "64px", paddingTop: "40px", borderTop: "1px solid var(--color-border)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "24px" }}>
            <Link href="/insights" style={{ fontFamily: "var(--font-body-en)", fontSize: "14px", color: "var(--color-forest)", textDecoration: "none", fontWeight: 500 }}>
              ← Back to Insights
            </Link>
            <Link href="/contact" style={{ fontFamily: "var(--font-body-en)", fontSize: "14px", fontWeight: 500, color: "var(--color-white)", backgroundColor: "var(--color-forest)", padding: "12px 24px", borderRadius: "4px", textDecoration: "none" }}>
              Discuss this with us ↗
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
