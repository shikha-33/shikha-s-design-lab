import { ArrowRight, ArrowUpRight, Download, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import CaseStudyCard from "@/components/CaseStudyCard";
import LayeredPortrait from "@/components/LayeredPortrait";
import ScrollMethods from "@/components/ScrollMethods";
import { caseStudies } from "@/data/caseStudies";

const archiveLinks = [
  { label: "Data science & ML", detail: "Three modelling and analytics projects", href: "/work#data-science" },
  { label: "Strategy & analytics", detail: "Case competitions and datathons", href: "/work#strategy-analytics" },
  { label: "Roles & leadership", detail: "Eight campus and operations roles", href: "/roles" },
  { label: "Marketing work", detail: "Campaign, education, brand, and video collections", href: "/marketing" },
];

const experiences = [
  {
    period: "2026 - Present",
    title: "VP External & Marketing",
    organization: "Residence Hall Association, UBC",
      detail: "Coordinate stakeholder communication across a network of 14,000 students while mentoring student leaders and turning varied needs into clear plans.",
  },
  {
    period: "2025 - Present",
    title: "Marketing Director",
    organization: "UBC Undergraduate Statistics Society",
    detail: "Translate statistical ideas into accessible content and use engagement evidence to refine communication and outreach.",
  },
  {
    period: "2023 - 2024",
    title: "Corporate Relations Chair",
    organization: "UBC Science Undergraduate Society",
    detail: "Built partner-facing materials and workflows across more than 30 relationships, securing over $7,000 in sponsorship support.",
  },
];

const Index = () => (
  <div className="min-h-screen bg-background">
    <Seo
      title="Shikha Rajesh | Product, UX & Data"
      description="A multidisciplinary portfolio spanning HCI research, product design, data science, strategy, leadership, and marketing."
    />
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <Header />
    <main id="main-content">
      <section className="hero-section compact-hero">
        <div className="hero-gradient-orb" aria-hidden="true" />
        <div className="page-shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Product & UX Research · HCI + Data</p>
            <h1>I turn human behaviour into <span>clearer product decisions.</span></h1>
            <p className="hero-lede">
              I’m Shikha, a fourth-year Integrated Sciences student at UBC combining Computer Science and Data Science. I connect qualitative research, experimentation, prototyping, and communication to make complex systems easier to understand and use.
            </p>
            <div className="hero-actions">
              <Link to="/work" className="button-primary">Explore my work <ArrowRight aria-hidden="true" /></Link>
              <a href="/Shikha_Rajesh_WTAP_Resume.pdf" className="button-secondary" download="Shikha's_Resume.pdf">Resume <Download aria-hidden="true" /></a>
            </div>
            <div className="hero-links" aria-label="Contact links">
              <a href="mailto:shikha2022rajesh@gmail.com"><Mail aria-hidden="true" /> Email</a>
              <a href="https://www.linkedin.com/in/shikha-rajesh-/" target="_blank" rel="noreferrer"><Linkedin aria-hidden="true" /> LinkedIn</a>
            </div>
          </div>
          <LayeredPortrait />
        </div>
      </section>

      <section className="section-block selected-work-section" aria-labelledby="selected-work-heading">
        <div className="page-shell">
          <div className="section-heading-row compact-heading-row">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 id="selected-work-heading">Research with a decision at the end</h2>
            </div>
            <Link to="/work" className="text-link">View complete archive <ArrowRight aria-hidden="true" /></Link>
          </div>
          <div className="featured-work-grid">
            {caseStudies.map((study) => <CaseStudyCard study={study} featured key={study.slug} />)}
            <article className="subletify-feature-card reveal-on-scroll">
              <img className="subletify-feature-image" src="/subletify-hero.png" alt="Subletify student housing search interface" loading="lazy" />
              <div>
                <p className="eyebrow">UX design · Personal product</p>
                <h3>Subletify</h3>
                <p>A student housing platform shaped around transparent onboarding, trust-building interface patterns, and clear communication pathways.</p>
              </div>
              <div className="subletify-decision">
                <span>Design decision</span>
                <p>Make trust and listing clarity part of the core flow, not an afterthought added after matching.</p>
              </div>
              <div className="tag-list"><span className="tag">User flows</span><span className="tag">Information architecture</span><span className="tag">UX design</span></div>
              <a className="text-link" href="https://www.subletify.site/" target="_blank" rel="noreferrer">Visit Subletify <ArrowUpRight aria-hidden="true" /></a>
            </article>
          </div>
        </div>
      </section>

      <section className="section-block section-tinted" id="about" aria-labelledby="about-heading">
        <div className="page-shell about-grid">
          <div>
            <p className="eyebrow">About</p>
            <h2 id="about-heading">A mixed-method researcher with a builder’s range.</h2>
          </div>
          <div className="prose-large">
            <p>My work sits between product research, interaction design, applied analysis, and communication. I’m most engaged when a team has an ambiguous behaviour to understand or a design choice that needs evidence.</p>
            <p>This site is also an archive: alongside the featured HCI work, it includes machine-learning projects, case competitions, campus leadership, marketing systems, and the smaller experiments that shaped my practice.</p>
          </div>
        </div>
      </section>

      <ScrollMethods />

      <section className="archive-preview-section" aria-labelledby="archive-preview-heading">
        <div className="page-shell">
          <div className="archive-preview-heading">
            <p className="eyebrow">Beyond the case studies</p>
            <h2 id="archive-preview-heading">A broader record of making, analysing, and leading.</h2>
          </div>
          <div className="archive-preview-grid">
            {archiveLinks.map((item, index) => (
              <Link className="archive-preview-card reveal-on-scroll" to={item.href} key={item.label}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.label}</h3>
                <p>{item.detail}</p>
                <ArrowUpRight aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block section-tinted" id="experience" aria-labelledby="experience-heading">
        <div className="page-shell">
          <div className="section-heading-row compact-heading-row">
            <div>
              <p className="eyebrow">Experience</p>
              <h2 id="experience-heading">Leadership grounded in listening and follow-through</h2>
            </div>
            <Link to="/roles" className="text-link">Explore all roles <ArrowRight aria-hidden="true" /></Link>
          </div>
          <div className="experience-list">
            {experiences.map((experience) => (
              <article className="experience-item" key={`${experience.title}-${experience.organization}`}>
                <p className="experience-period">{experience.period}</p>
                <div><h3>{experience.title}</h3><p className="experience-org">{experience.organization}</p></div>
                <p>{experience.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-heading">
        <div className="page-shell contact-inner">
          <div><p className="eyebrow">Contact</p><h2 id="contact-heading">Let’s make the next decision clearer.</h2></div>
          <div className="contact-actions">
            <a href="mailto:shikha2022rajesh@gmail.com" className="button-primary">Email Shikha <Mail aria-hidden="true" /></a>
            <a href="https://www.linkedin.com/in/shikha-rajesh-/" target="_blank" rel="noreferrer" className="button-secondary">LinkedIn <Linkedin aria-hidden="true" /></a>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Index;
