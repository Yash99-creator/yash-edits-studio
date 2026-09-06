import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";

const instagramUrl = "https://www.instagram.com/yashthumbnails";
const email = "yashverma94621@gmail.com";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yashedits — Video editing and content strategy" },
      {
        name: "description",
        content:
          "Yashedits helps creators and brands grow with high-level video editing and sharp content strategy built for attention.",
      },
      { property: "og:title", content: "Yashedits — Video editing and content strategy" },
      {
        property: "og:description",
        content:
          "High-level video editing and content strategy for creators and brands ready to make their content matter.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const results = [
  ["result-1.jpg", "Reach", "Audience expansion"],
  ["result-2.jpg", "Discovery", "New viewers finding the content"],
  ["result-3.jpg", "Momentum", "Content built to move"],
  ["result-4.jpg", "Breakout", "High-reach short form"],
];

const work = [
  ["work-1", "Hook & retention"],
  ["work-2", "Clean storytelling"],
  ["work-3", "Retention focused"],
  ["work-4", "Personality first"],
  ["work-5", "Clarity & pace"],
  ["work-6", "Premium finish"],
];

const process = [
  ["Find the reason to watch.", "Hooks, angles, structure and positioning are decided before the timeline opens."],
  ["Cut for attention.", "Timing, captions, sound and motion work together to keep the viewer moving forward."],
  ["Make it feel native.", "Every decision is shaped around how people discover, watch and share short form content."],
  ["Keep the standard high.", "A repeatable creative system keeps quality consistent as the content scales. Deliverables and revisions stay clear so the work stays simple."],
];

function Index() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -4% 0px" },
    );

    revealItems.forEach((item) => {
      if (reduceMotion) item.classList.add("is-visible");
      else observer.observe(item);
    });

    const timeline = document.querySelector<HTMLElement>(".approach-timeline");
    const updateTimeline = () => {
      if (!timeline || reduceMotion) return;
      const rect = timeline.getBoundingClientRect();
      const start = window.innerHeight * 0.62;
      const end = window.innerHeight * 0.18;
      const raw = (start - rect.top) / Math.max(1, rect.height - (start - end));
      timeline.style.setProperty("--timeline-progress", `${Math.max(0, Math.min(1, raw)) * 100}%`);
    };

    if (reduceMotion) timeline?.style.setProperty("--timeline-progress", "100%");
    else {
      window.addEventListener("scroll", updateTimeline, { passive: true });
      window.addEventListener("resize", updateTimeline);
      updateTimeline();
    }

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateTimeline);
      window.removeEventListener("resize", updateTimeline);
    };
  }, []);

  return (
    <div className="site-shell">
      <div className="ambient" aria-hidden="true" />
      <header className="nav" id="nav">
        <a className="brand" href="#top" aria-label="Yashedits home">
          Yashedits<span>.</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#results">Results</a>
          <a href="#work">Work</a>
          <a href="#approach">Approach</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <a className="nav-cta" href="#contact">Let’s talk</a>
      </header>

      <main>
        <section id="top" className="hero shell">
          <div className="hero-copy reveal is-visible">
            <p className="hero-role">Video editing + content strategy</p>
            <h1>Scale your <span>content.</span></h1>
            <p className="hero-lead">I combine high level video editing with sharp content strategy to turn ideas into content people actually stop to watch. Every cut has a reason. Every piece is built to strengthen the brand behind it.</p>
            <div className="hero-actions">
              <a className="text-action" href="#contact">Start a project</a>
              <a className="text-action" href={instagramUrl} target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
        </section>

        <section className="statement shell reveal">
          <p className="kicker">The difference</p>
          <div>
            <h2>Great editing gets attention.<br /><span>Great strategy scales it.</span></h2>
            <p>Every piece starts with the same question: why would someone stop, watch and care? The edit is only one part of the answer.</p>
          </div>
        </section>

        <section id="results" className="section shell">
          <div className="section-intro reveal">
            <div><p className="kicker">Proof</p><h2>Content that moves.</h2></div>
            <p>A look at the kind of reach and discovery strong content can create.</p>
          </div>
          <div className="results-grid">
            {results.map(([image, label, title], index) => (
              <article className={`result-card reveal delay-${index}`} key={image}>
                <div className="result-image"><img src={`/assets/${image}`} alt="Content performance screenshot" loading="lazy" /></div>
                <div className="result-label"><span>{label}</span><strong>{title}</strong></div>
              </article>
            ))}
          </div>
        </section>

        <section className="proof shell reveal">
          <div className="proof-image"><img src="/assets/proof-59985.jpg" alt="Instagram analytics showing content performance" loading="lazy" /></div>
          <div className="proof-copy">
            <p className="kicker">Performance</p>
            <h2>Make the first view count.</h2>
            <p>The goal is not more effects. It is stronger ideas, sharper storytelling and an edit that keeps attention moving.</p>
            <div className="stat-row">
              <div><strong>90.2%</strong><span>from non followers</span></div>
              <div><strong>25,873</strong><span>viewers reached</span></div>
              <div><strong>+312.3%</strong><span>viewer growth</span></div>
            </div>
          </div>
        </section>

        <section id="work" className="work shell">
          <div className="section-intro reveal">
            <div><p className="kicker">Selected work</p><h2>Built to be watched.</h2></div>
            <p>Six examples of our editing style. They play silently so you can judge the visual storytelling without the distraction of audio.</p>
          </div>
          <div className="work-grid">
            {work.map(([name, title], index) => (
              <article className={`work-card reveal delay-${index % 3}`} key={name}>
                <div className="work-video"><video autoPlay muted loop playsInline preload="auto" poster={`/assets/${name}.jpg`}><source src={`/assets/${name}.mp4`} type="video/mp4" /></video></div>
                <div className="work-meta"><strong>{title}</strong><small>Short form edit</small></div>
              </article>
            ))}
          </div>
        </section>

        <section id="approach" className="approach shell">
          <div className="section-intro reveal">
            <div><p className="kicker">How we work</p><h2>Built before the first cut.</h2></div>
            <p>The strategy, edit and creative direction move together. You get a clear process, direct communication and secure payment options from start to finish.</p>
          </div>
          <div className="approach-timeline" aria-label="Our process">
            <div className="timeline-rail" aria-hidden="true"><div className="timeline-progress" /><div className="timeline-dot" /></div>
            <div className="approach-items">
              {process.map(([title, description], index) => (
                <article className="approach-item reveal" data-step={index + 1} key={title}>
                  <div className="step-marker">0{index + 1}</div>
                  <div className="approach-card"><h3>{title}</h3><p>{description}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonial shell reveal">
          <div className="testimonial-heading">
            <p className="kicker">Trust + client feedback</p>
            <h2>Good work is felt.</h2>
            <p className="testimonial-copy">Real feedback from someone who has experienced the work and the process first hand.</p>
            <div className="trust-points" aria-label="Project standards"><span>Strategy included</span><span>Clear revisions</span><span>Secure payment options</span></div>
          </div>
          <div className="testimonial-videos">
            <div className="testimonial-video video-shell"><video playsInline preload="metadata" poster="/assets/testimonial.jpg" controls><source src="/assets/testimonial.mp4" type="video/mp4" /></video></div>
            <div className="testimonial-video video-shell"><video playsInline preload="metadata" poster="/assets/testimonial-2.jpg" controls><source src="/assets/testimonial-2.mp4" type="video/mp4" /></video></div>
          </div>
        </section>

        <section id="pricing" className="pricing shell reveal">
          <div className="section-intro pricing-intro">
            <div><p className="kicker">Pricing</p><h2>Simple plans.<br />Clear scope.</h2></div>
            <p>Choose the level of support that fits your content volume, from full strategy + editing to editing only.</p>
          </div>
          <div className="pricing-grid">
            <PricingCard title="Content Strategy + Video Editing" note="For creators and brands looking for a complete content system." rows={[["Basic", "10+ videos per month", "$800", "/month"], ["Standard", "20+ videos per month", "$1,200", "/month"], ["Premium", "30+ videos per month", "$1,500", "/month"]]} includes="hook and script writing, content calendar and posting strategy, and monthly performance feedback." />
            <PricingCard title="Video Editing Only" note="For clients who already have their content strategy and need the edit." rows={[["Single edit", "One video", "$40", ""], ["Basic", "10+ edits per month", "$350", "/month"], ["Standard", "20+ edits per month", "$650", "/month"], ["Premium", "30+ edits per month", "$850", "/month"]]} includes="3 revisions per video" />
          </div>
          <div className="pricing-shared"><strong>Included in every package</strong><div className="pricing-feature-list"><span>Revisions, 3 per video</span><span>Basic cutting and pacing</span><span>Captions and subtitles</span><span>Sound design</span><span>Motion graphics</span><span>Color correction</span><span>Smooth transitions</span><span>Priority delivery</span></div></div>
          <div className="pricing-disclaimer">Final pricing may vary based on video length and scope, confirmed after a quick conversation.</div>
        </section>

        <section id="contact" className="contact shell reveal">
          <p className="kicker">Start something worth watching</p>
          <h2>Make your content<br /><span>matter.</span></h2>
          <p>Tell me what you are building, what is not working and where you want the content to go.</p>
          <div className="contact-links">
            <a href={`mailto:${email}?subject=Project%20inquiry`}><span>Start a conversation</span><small>email</small></a>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer"><span>Message on Instagram</span><small>DM</small></a>
          </div>
          <a className="email-link" href={`mailto:${email}`}>{email}</a>
        </section>
      </main>

      <footer className="footer shell"><strong>Yashedits.</strong><span>Content strategy + video editing</span><a href="#top">Back to top ↑</a><small>© 2026</small></footer>
    </div>
  );
}

function PricingCard({ title, note, rows, includes }: { title: string; note: string; rows: string[][]; includes: string }) {
  return (
    <article className="pricing-card">
      <div className="pricing-card-head"><p className="pricing-kicker">{title}</p><p className="pricing-note">{note}</p></div>
      <div className="price-list">{rows.map(([name, detail, amount, suffix]) => <div className="price-row" key={name}><div><strong>{name}</strong><span>{detail}</span></div><b>{amount}<span>{suffix}</span></b></div>)}</div>
      <p className="pricing-includes"><strong>{title === "Video Editing Only" ? "" : "Includes "}</strong>{includes}</p>
    </article>
  );
}