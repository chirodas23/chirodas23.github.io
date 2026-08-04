import type { Metadata } from "next";
import { SiteShell } from "../components/SiteShell";

export const metadata: Metadata = { title: "Contact", description: "Contact Chiroshree Das for global beauty and influencer marketing opportunities." };

export default function ContactPage() {
  return (
    <SiteShell>
      <main>
        <section className="contact-hero section-pad">
          <div className="contact-orb orb-one" /><div className="contact-orb orb-two" />
          <p className="eyebrow centered"><span /> Start a conversation</p>
          <h1>Let&apos;s make beauty<br /><em>travel well.</em></h1>
          <p>For influencer marketing, global growth, campaign operations, or cross-market beauty opportunities.</p>
          <a className="email-link" href="mailto:chiroshreedas23@gmail.com">chiroshreedas23@gmail.com <span>↗</span></a>
          <div className="contact-grid">
            <a href="mailto:chiroshreedas23@gmail.com"><span>Email</span><strong>Say hello</strong><i>↗</i></a>
            <a href="https://www.instagram.com/yeoriyeori_global" target="_blank" rel="noreferrer"><span>Instagram</span><strong>View social work</strong><i>↗</i></a>
            <div><span>Based in</span><strong>Seoul, South Korea</strong><i>⌁</i></div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
