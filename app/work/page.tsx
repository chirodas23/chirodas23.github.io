import type { Metadata } from "next";
import { Reveal } from "../components/Reveal";
import { SiteShell } from "../components/SiteShell";
import { VideoCard } from "../components/VideoCard";

export const metadata: Metadata = { title: "Work", description: "Campaigns, global beauty marketing experience, analytics, and B2B exhibitions by Chiroshree Das." };

const instagram = (id: string) => `https://www.instagram.com/reel/${id}/embed/captioned/?autoplay=1&muted=1`;

const roles = [
  { date: "Apr 2026 — Present", company: "Skinmed International · LAGOM", role: "Global Influencer Marketing", copy: "Leading influencer work across India, the US, and Europe: creator research, outreach, negotiation, onboarding, timelines, content review, seeding, paid collaborations, database management, and campaign reporting.", tags: ["India", "United States", "Europe"] },
  { date: "Sep 2025 — Feb 2026", company: "YeoriYeori", role: "Global Sales Associate", copy: "Developed new B2B opportunities through buyer meetings and exhibitions. Closed partnerships across Japan (Qoo10 and home shopping), India (Maccaron), France (Ppoppo Mart), and Hungary (Koreaiginseng), while managing export documentation and logistics.", tags: ["B2B sales", "Export operations", "Exhibitions"] },
  { date: "Aug 2025", company: "YeoriYeori", role: "Influencer Seeding Intern", copy: "Supported Instagram and YouTube creator campaigns targeting India, Japan, and Dubai.", tags: ["Seeding", "Instagram", "YouTube"] },
  { date: "Oct 2023 — Jun 2025", company: "Courtyard by Marriott Seoul Pangyo", role: "Food & Beverage Intern", copy: "Supported back-of-house operations, guest service, and inquiry management in an international hospitality environment.", tags: ["Service", "Operations", "Hospitality"] },
  { date: "Sep 2022 — Feb 2024", company: "Film Log", role: "Sales Associate", copy: "Worked across customer sales, translation and interpretation, and upcycled analog camera production.", tags: ["Sales", "Translation", "Creative production"] },
  { date: "Feb 2021 — Jan 2022", company: "Laa Kheer Deli", role: "Operations Lead", copy: "Managed back-end operations, customer service, accounting, and inventory control.", tags: ["Operations", "Customer care", "Inventory"] },
];

export default function WorkPage() {
  return (
    <SiteShell>
      <main>
        <section className="page-hero section-pad">
          <p className="eyebrow"><span /> Selected work</p>
          <h1>Strategy with a<br /><em>human pulse.</em></h1>
          <p>I build the systems behind creator campaigns — and the relationships that make them feel natural.</p>
          <div className="page-hero-stats"><span><strong>5</strong> languages</span><span><strong>3</strong> influencer regions</span><span><strong>4</strong> B2B partner markets</span></div>
        </section>

        <section id="experience" className="timeline-section section-pad">
          <Reveal className="section-heading"><p className="eyebrow"><span /> Experience</p><h2>A career built<br />across <em>cultures.</em></h2></Reveal>
          <div className="timeline">
            {roles.map((item, index) => (
              <Reveal className="timeline-row" key={item.company + item.date} delay={Math.min(index * 45, 180)}>
                <div className="timeline-index">0{index + 1}</div>
                <div className="timeline-date">{item.date}</div>
                <div className="timeline-body"><p>{item.company}</p><h3>{item.role}</h3><span>{item.copy}</span><div className="tag-list">{item.tags.map((tag) => <i key={tag}>{tag}</i>)}</div></div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="analytics" className="analytics-detail section-pad">
          <Reveal className="section-heading split-heading"><div><p className="eyebrow light"><span /> Portfolio mix</p><h2>Focused where<br /><em>culture converts.</em></h2></div><p>The documented regional mix for my current influencer marketing portfolio.</p></Reveal>
          <div className="analytics-detail-grid">
            <Reveal className="big-donut-card"><div className="donut large"><div><strong>100%</strong><span>global focus</span></div></div><div className="legend big"><span><i className="india" />India <b>70%</b></span><span><i className="us" />United States <b>20%</b></span><span><i className="europe" />Europe <b>10%</b></span></div></Reveal>
            <Reveal className="capability-map" delay={120}><p>End-to-end campaign cycle</p><ol><li><span>01</span> Market & trend research</li><li><span>02</span> Creator discovery</li><li><span>03</span> Outreach & negotiation</li><li><span>04</span> Onboarding & scheduling</li><li><span>05</span> Content review</li><li><span>06</span> Reporting & learning</li></ol></Reveal>
          </div>
          <div className="proof-grid">
            <Reveal className="proof-card"><strong>5</strong><h3>Languages</h3><p>Korean (TOPIK 4), English, Hindi, Marathi, and Bengali.</p></Reveal>
            <Reveal className="proof-card" delay={80}><strong>4</strong><h3>B2B partner markets</h3><p>Japan, India, France, and Hungary.</p></Reveal>
            <Reveal className="proof-card" delay={160}><strong>3</strong><h3>Creator focus regions</h3><p>India, the United States, and Europe.</p></Reveal>
          </div>
        </section>

        <section id="campaigns" className="campaign-section section-pad">
          <Reveal className="section-heading split-heading"><div><p className="eyebrow"><span /> Campaign library</p><h2>Stories made<br />to be <em>shared.</em></h2></div><p>Muted autoplay is requested where supported by the platform; every card includes a direct source link.</p></Reveal>
          <div className="video-grid all-videos">
            <Reveal><VideoCard label="YouTube Shorts" title="Beauty storytelling in motion" src="https://www.youtube.com/embed/LIbDVViWu2M?autoplay=1&mute=1&loop=1&playlist=LIbDVViWu2M&controls=0&playsinline=1&rel=0" href="https://youtube.com/shorts/LIbDVViWu2M" /></Reveal>
            <Reveal delay={60}><VideoCard label="Instagram Reel" title="#MaskTheDifference" src={instagram("DaVpKz3P7JJ")} href="https://www.instagram.com/reel/DaVpKz3P7JJ/" /></Reveal>
            <Reveal delay={120}><VideoCard label="Instagram Reel" title="Campaign continuation" src={instagram("Da-WJlhtuM3")} href="https://www.instagram.com/reel/Da-WJlhtuM3/" /></Reveal>
            <Reveal delay={60}><VideoCard label="Instagram · Other markets" title="Global creator feature" src={instagram("DbUiAkKMMhk")} href="https://www.instagram.com/reel/DbUiAkKMMhk/" /></Reveal>
            <Reveal delay={120}><VideoCard label="Instagram · Other markets" title="Cross-market storytelling" src={instagram("DYo_TM_tGCD")} href="https://www.instagram.com/reel/DYo_TM_tGCD/" /></Reveal>
            <Reveal delay={180} className="social-profile-card"><div><span>Ongoing social portfolio</span><h3>@yeoriyeori_global</h3><p>Explore more market-facing content and creator collaborations.</p><a className="glass-button primary-button" href="https://www.instagram.com/yeoriyeori_global" target="_blank" rel="noreferrer">Open Instagram <span>↗</span></a></div></Reveal>
          </div>
        </section>

        <section id="exhibitions" className="exhibition-story section-pad">
          <Reveal className="section-heading split-heading"><div><p className="eyebrow light"><span /> B2B exhibitions</p><h2>Where digital fluency<br />meets <em>the room.</em></h2></div><p>G-Fair, Mega Show, sourcing markets, product introductions, and buyer consultations for YeoriYeori.</p></Reveal>
          <div className="exhibition-grid">
            <Reveal className="exhibit exhibit-one"><img src="/assets/fair-booth.png" alt="YeoriYeori B2B exhibition booth" /><span>Brand presence</span></Reveal>
            <Reveal className="exhibit exhibit-two" delay={70}><img src="/assets/fair-product-demo.jpg" alt="Product introduction during a B2B exhibition" /><span>Product storytelling</span></Reveal>
            <Reveal className="exhibit exhibit-three" delay={140}><img src="/assets/fair-consultation.jpg" alt="Buyer meeting at a B2B beauty fair" /><span>Buyer consultation</span></Reveal>
            <Reveal className="exhibit exhibit-four" delay={70}><img src="/assets/fair-buyer-conversation.png" alt="Conversation with a potential buyer" /><span>Relationship building</span></Reveal>
            <Reveal className="exhibit exhibit-five" delay={140}><img src="/assets/fair-pop-up.jpg" alt="YeoriYeori pop-up booth" /><span>Consumer activation</span></Reveal>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
