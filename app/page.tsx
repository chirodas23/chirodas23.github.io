import type { Metadata } from "next";
import { Reveal } from "./components/Reveal";
import { SiteShell } from "./components/SiteShell";
import { VideoCard } from "./components/VideoCard";

export const metadata: Metadata = {
  title: "Global Influencer Marketing",
  description:
    "Beauty marketing portfolio of Chiroshree Das — influencer campaigns, global market growth, B2B exhibitions, and cross-cultural strategy.",
};

const youtube =
  "https://www.youtube.com/embed/LIbDVViWu2M?autoplay=1&mute=1&loop=1&playlist=LIbDVViWu2M&controls=0&playsinline=1&rel=0";
const instagram = (id: string) =>
  `https://www.instagram.com/reel/${id}/embed/captioned/?autoplay=1&muted=1`;

export default function Home() {
  return (
    <SiteShell>
      <main>
        <section className="hero section-pad">
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="hero-copy">
            <p className="eyebrow"><span /> Seoul → the world</p>
            <h1>
              Beauty stories,
              <em> grown globally.</em>
            </h1>
            <p className="hero-intro">
              I&apos;m Chiroshree Das — a multilingual influencer marketer connecting skincare brands with
              creators, cultures, and markets that move.
            </p>
            <div className="hero-actions">
              <a className="glass-button primary-button" href="/work">Explore my work <span>↗</span></a>
              <a className="text-link" href="#campaigns">Watch campaigns <span>↓</span></a>
            </div>
          </div>
          <div className="hero-visual" aria-label="Portrait of Chiroshree Das">
            <div className="portrait-halo" />
            <div className="portrait-card">
              <img src="/assets/chiroshree-das.png" alt="Chiroshree Subhash Das" />
            </div>
            <div className="float-card float-card-one">
              <span>Current focus</span>
              <strong>US + India creator growth</strong>
            </div>
            <div className="float-card float-card-two">
              <span className="status-dot" />
              Seoul-based · Global outlook
            </div>
            <div className="beauty-bubble bubble-a">glow</div>
            <div className="beauty-bubble bubble-b">+ care</div>
          </div>
          <a href="#intro" className="scroll-cue" aria-label="Scroll to introduction">
            <span /> Scroll to discover
          </a>
        </section>

        <div className="ticker" aria-label="Core expertise">
          <div className="ticker-track">
            <span>Influencer Strategy ✦ Creator Relations ✦ Global Seeding ✦ Campaign Operations ✦ B2B Sales ✦ Market Research ✦ Influencer Strategy ✦ Creator Relations ✦ Global Seeding ✦ Campaign Operations ✦ B2B Sales ✦ Market Research ✦</span>
          </div>
        </div>

        <section id="intro" className="intro-section section-pad">
          <Reveal className="section-heading split-heading">
            <div>
              <p className="eyebrow"><span /> What I bring</p>
              <h2>Culture-aware strategy.<br /><em>Creator-first execution.</em></h2>
            </div>
            <p>
              From discovery and negotiation to content review and reporting, I manage the influencer
              journey end-to-end — with an eye for brand consistency and a feel for local culture.
            </p>
          </Reveal>
          <div className="value-grid">
            <Reveal className="value-card" delay={0}>
              <span>01</span><h3>Find the right voices</h3>
              <p>Trend research and creator discovery across India, the US, Europe, Japan, and Dubai.</p>
            </Reveal>
            <Reveal className="value-card accent-card" delay={90}>
              <span>02</span><h3>Shape the collaboration</h3>
              <p>Outreach, negotiation, onboarding, briefs, schedules, and thoughtful follow-up.</p>
            </Reveal>
            <Reveal className="value-card" delay={180}>
              <span>03</span><h3>Protect the brand</h3>
              <p>Pre-publish review for consistency, compliance, creativity, and campaign fit.</p>
            </Reveal>
            <Reveal className="value-card soft-card" delay={270}>
              <span>04</span><h3>Learn, report, improve</h3>
              <p>Structured campaign databases, performance reporting, and market-aware insights.</p>
            </Reveal>
          </div>
        </section>

        <section className="work-preview section-pad">
          <Reveal className="section-heading">
            <p className="eyebrow light"><span /> Selected experience</p>
            <h2>From creator feeds<br />to global <em>shelves.</em></h2>
          </Reveal>
          <div className="experience-showcase">
            <Reveal className="featured-experience">
              <div className="experience-topline"><span>01 / Influencer marketing</span><span>2026 — now</span></div>
              <div className="experience-copy">
                <p className="experience-brand">LAGOM · Skinmed International</p>
                <h3>Growing a Korean skincare story across India, Europe, and the US.</h3>
                <p>Creator sourcing, seeding, paid partnerships, campaign operations, content review, and reporting.</p>
                <div className="market-pills"><span>India 70%</span><span>US 20%</span><span>Europe 10%</span></div>
              </div>
            </Reveal>
            <Reveal className="secondary-experience" delay={120}>
              <div className="experience-topline"><span>02 / Global sales</span><span>2025 — 2026</span></div>
              <div>
                <p className="experience-brand">YeoriYeori</p>
                <h3>Turning exhibition conversations into cross-border partnerships.</h3>
                <p>Buyer communication, export operations, product proposals, and contracts across Japan, India, France, and Hungary.</p>
              </div>
              <a className="glass-button dark-glass" href="/work#experience">See the full timeline <span>↗</span></a>
            </Reveal>
          </div>
        </section>

        <section id="campaigns" className="campaign-section section-pad">
          <Reveal className="section-heading split-heading">
            <div>
              <p className="eyebrow"><span /> Campaign reel</p>
              <h2>Content that feels<br /><em>native to the feed.</em></h2>
            </div>
            <p>Selected creator content and market-facing storytelling across YouTube and Instagram.</p>
          </Reveal>
          <div className="video-grid">
            <Reveal><VideoCard label="YouTube Shorts" title="Beauty storytelling in motion" src={youtube} href="https://youtube.com/shorts/LIbDVViWu2M" /></Reveal>
            <Reveal delay={90}><VideoCard label="Instagram Reel" title="#MaskTheDifference" src={instagram("DaVpKz3P7JJ")} href="https://www.instagram.com/reel/DaVpKz3P7JJ/" /></Reveal>
            <Reveal delay={180}><VideoCard label="Instagram Reel" title="Campaign continuation" src={instagram("Da-WJlhtuM3")} href="https://www.instagram.com/reel/Da-WJlhtuM3/" /></Reveal>
          </div>
          <div className="center-action"><a className="glass-button primary-button" href="/work#campaigns">View every campaign <span>↗</span></a></div>
        </section>

        <section className="analytics-section section-pad">
          <Reveal className="analytics-copy">
            <p className="eyebrow light"><span /> Marketing analytics</p>
            <h2>Global reach,<br /><em>grounded execution.</em></h2>
            <p>My current influencer portfolio is centered on India while expanding into the US and Europe — supported by multilingual, cross-cultural communication.</p>
            <a className="text-link light-link" href="/work#analytics">Explore the data <span>↗</span></a>
          </Reveal>
          <Reveal className="analytics-panel" delay={120}>
            <div className="donut-wrap">
              <div className="donut"><div><strong>3</strong><span>focus markets</span></div></div>
              <div className="legend"><span><i className="india" />India <b>70%</b></span><span><i className="us" />US <b>20%</b></span><span><i className="europe" />Europe <b>10%</b></span></div>
            </div>
            <div className="metric-row"><div><strong>5</strong><span>languages</span></div><div><strong>4</strong><span>B2B partner markets</span></div><div><strong>360°</strong><span>campaign support</span></div></div>
          </Reveal>
        </section>

        <section className="fair-section section-pad">
          <Reveal className="section-heading split-heading">
            <div><p className="eyebrow"><span /> In the field</p><h2>Real conversations.<br /><em>Real market access.</em></h2></div>
            <p>Representing YeoriYeori at G-Fair, Mega Show, sourcing markets, and buyer meetings.</p>
          </Reveal>
          <div className="fair-collage">
            <Reveal className="fair-image fair-tall"><img src="/assets/fair-product-demo.jpg" alt="Presenting beauty products to visitors at a B2B exhibition" /></Reveal>
            <Reveal className="fair-image" delay={100}><img src="/assets/fair-buyer-conversation.png" alt="Speaking with a prospective buyer at the YeoriYeori exhibition booth" /></Reveal>
            <Reveal className="fair-image" delay={180}><img src="/assets/fair-consultation.jpg" alt="Buyer consultation at the YeoriYeori booth" /></Reveal>
          </div>
          <div className="center-action"><a className="glass-button" href="/work#exhibitions">See the exhibition story <span>↗</span></a></div>
        </section>

        <section className="closing-cta section-pad">
          <div className="cta-orb" />
          <Reveal>
            <p className="eyebrow centered"><span /> Let&apos;s make it meaningful</p>
            <h2>Ready to grow a beauty brand<br /><em>across borders?</em></h2>
            <a className="glass-button primary-button" href="mailto:chiroshreedas23@gmail.com">Start a conversation <span>↗</span></a>
          </Reveal>
        </section>
      </main>
    </SiteShell>
  );
}
