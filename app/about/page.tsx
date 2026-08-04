import type { Metadata } from "next";
import { Reveal } from "../components/Reveal";
import { SiteShell } from "../components/SiteShell";

export const metadata: Metadata = { title: "About", description: "About Chiroshree Das — multilingual global marketer based in Seoul." };

export default function AboutPage() {
  return (
    <SiteShell>
      <main>
        <section className="about-hero section-pad">
          <div className="about-portrait"><div className="portrait-halo" /><img src="/assets/chiroshree-das.png" alt="Chiroshree Subhash Das" /></div>
          <div className="about-lead"><p className="eyebrow"><span /> About me</p><h1>Curious by nature.<br /><em>Global by practice.</em></h1><p>I&apos;m Chiroshree Subhash Das, an India-born, Seoul-based marketer building bridges between Korean beauty brands and international audiences.</p></div>
        </section>

        <section className="story-section section-pad">
          <Reveal className="story-lead"><p>My story</p><h2>Prepared, proactive,<br />and always <em>learning.</em></h2></Reveal>
          <Reveal className="story-copy" delay={100}><p>Four years of working in Korea taught me how to communicate across cultures, adapt quickly, and approach new environments with care. I believe strong work begins with preparation — anticipating what could go wrong, making the next step easier for the team, and earning trust through consistency.</p><p>My experience spans creator marketing, global sales, hospitality, retail, translation, and operations. That mix helps me see both the brand story and the system behind it.</p><blockquote>“I want to be the person who steps forward first — and comes prepared.”</blockquote></Reveal>
        </section>

        <section className="language-band section-pad">
          <Reveal><p className="eyebrow light"><span /> Language is market access</p><h2>Five languages.<br /><em>More ways to listen.</em></h2></Reveal>
          <div className="language-list"><span>Korean <i>TOPIK 4</i></span><span>English</span><span>Hindi</span><span>Marathi</span><span>Bengali</span></div>
        </section>

        <section className="education-section section-pad">
          <Reveal className="section-heading"><p className="eyebrow"><span /> Education</p><h2>Business perspective,<br /><em>analytical roots.</em></h2></Reveal>
          <div className="education-grid">
            <Reveal className="education-card"><span>2023 — 2025</span><h3>Seokyeong University</h3><p>MBA / Business Administration · Seoul, South Korea</p><strong>GPA 4.3 / 4.5</strong></Reveal>
            <Reveal className="education-card" delay={80}><span>2017 — 2020</span><h3>Fergusson College</h3><p>Electronic Science · Pune, India</p><strong>GPA 8.01 / 10</strong></Reveal>
            <Reveal className="education-card" delay={160}><span>2015 — 2017</span><h3>Spicer Higher Secondary School</h3><p>Science · Pune, India</p><strong>88.8 / 100</strong></Reveal>
          </div>
        </section>

        <section className="skills-section section-pad">
          <Reveal className="section-heading split-heading"><div><p className="eyebrow"><span /> Toolkit</p><h2>Soft skills meet<br /><em>hard delivery.</em></h2></div><p>A practical mix of relationship, commercial, creative, and technical capabilities.</p></Reveal>
          <div className="skills-columns">
            <Reveal><span>Marketing & commercial</span><ul><li>Influencer lifecycle management</li><li>Creator outreach and negotiation</li><li>Global seeding and paid campaigns</li><li>B2B sales and buyer communication</li><li>Export documentation and logistics</li><li>Market research and reporting</li></ul></Reveal>
            <Reveal delay={80}><span>People & communication</span><ul><li>Cross-cultural communication</li><li>Public speaking</li><li>Customer service</li><li>Team coordination</li><li>Translation and interpretation</li><li>Proactive problem solving</li></ul></Reveal>
            <Reveal delay={160}><span>Creative & technical</span><ul><li>CapCut video editing</li><li>Adobe Lightroom</li><li>Upcycled analog camera development</li><li>C / C++ / Java</li><li>MATLAB</li><li>Street photography</li></ul></Reveal>
          </div>
        </section>

        <section className="recognition-section section-pad"><Reveal><p className="eyebrow light"><span /> Beyond work</p><h2>Recognition &<br /><em>community.</em></h2></Reveal><div className="recognition-list"><Reveal><span>2023</span><h3>Gwangju Dong-gu Ambassador</h3></Reveal><Reveal delay={80}><span>2022</span><h3>AIESEC × UNICEF · IVY Program</h3></Reveal></div></section>
      </main>
    </SiteShell>
  );
}
