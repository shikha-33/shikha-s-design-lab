import { ArrowRight, Download, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudies } from "@/data/caseStudies";

const methods = [
  "Semi-structured interviews",
  "Usability testing",
  "Task analysis",
  "Thematic analysis",
  "Experimental design",
  "Quantitative analysis",
  "Information architecture",
  "Interactive prototyping",
];

const experiences = [
  {
    period: "2026 - Present",
    title: "VP External & Marketing",
    organization: "Residence Hall Association, UBC",
    detail:
      "Coordinate stakeholder communication and cross-campus initiatives across residence councils, mentoring student leaders and translating varied needs into clear plans.",
  },
  {
    period: "2025 - Present",
    title: "Marketing Director",
    organization: "UBC Undergraduate Statistics Society",
    detail:
      "Translate statistical ideas into accessible student-facing content and use campaign evidence to refine communication and outreach.",
  },
  {
    period: "2023 - 2024",
    title: "Corporate Relations Chair",
    organization: "UBC Science Undergraduate Society",
    detail:
      "Synthesized partner needs into actionable materials and workflows for more than 30 relationships, securing over $7,000 in sponsorship support.",
  },
];

const Index = () => (
  <div className="min-h-screen bg-background">
    <Seo
      title="Shikha Rajesh | Product & UX Researcher"
      description="Product and UX researcher combining qualitative research, usability evaluation, experimentation, prototyping, and data analysis."
    />
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <Header />
    <main id="main-content">
      <section className="hero-section">
        <div className="page-shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Product & UX Research · HCI + Data</p>
            <h1>I turn human behaviour into clearer product decisions.</h1>
            <p className="hero-lede">
              I’m Shikha, a fourth-year Integrated Sciences student at UBC combining Computer Science and Data Science. I study how people navigate complex systems, then use qualitative and quantitative evidence to improve them.
            </p>
            <div className="hero-actions">
              <Link to="/work" className="button-primary">
                Explore my work <ArrowRight aria-hidden="true" />
              </Link>
              <a href="/Shikha_Rajesh_WTAP_Resume.pdf" className="button-secondary" download>
                Résumé <Download aria-hidden="true" />
              </a>
            </div>
            <div className="hero-links" aria-label="Contact links">
              <a href="mailto:shikha2022rajesh@gmail.com"><Mail aria-hidden="true" /> Email</a>
              <a href="https://www.linkedin.com/in/shikha-rajesh-/" target="_blank" rel="noreferrer"><Linkedin aria-hidden="true" /> LinkedIn</a>
            </div>
          </div>
          <figure className="hero-portrait">
            <img
              src="/profile-optimized.jpg"
              alt="Shikha Rajesh presenting to an audience"
              width="930"
              height="844"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Researcher · Designer · Communicator</figcaption>
          </figure>
        </div>
      </section>

      <section className="section-block" aria-labelledby="selected-work-heading">
        <div className="page-shell">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 id="selected-work-heading">Research with a decision at the end</h2>
            </div>
            <Link to="/work" className="text-link">View all work <ArrowRight aria-hidden="true" /></Link>
          </div>
          <div className="selected-work-grid">
            {caseStudies.map((study) => <CaseStudyCard study={study} featured key={study.slug} />)}
          </div>
        </div>
      </section>

      <section className="section-block section-tinted" id="about" aria-labelledby="about-heading">
        <div className="page-shell about-grid">
          <div>
            <p className="eyebrow">About</p>
            <h2 id="about-heading">A mixed-method researcher with a builder’s mindset.</h2>
          </div>
          <div className="prose-large">
            <p>
              My work sits between product research, interaction design, and applied analysis. I’m most engaged when a team has an ambiguous behaviour to understand, a design choice to test, or evidence that needs careful interpretation.
            </p>
            <p>
              Across my HCI projects, I have moved from field interviews and affinity mapping to interactive prototypes, controlled experiments, thematic synthesis, and recommendations. I care about transparent reasoning: what the evidence supports, what it does not, and what the next study should resolve.
            </p>
          </div>
        </div>
      </section>

      <section className="section-block" aria-labelledby="methods-heading">
        <div className="page-shell methods-grid">
          <div>
            <p className="eyebrow">Research toolkit</p>
            <h2 id="methods-heading">Methods selected for the question—not for the checklist.</h2>
          </div>
          <div className="method-list">
            {methods.map((method, index) => (
              <div className="method-item" key={method}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{method}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block section-tinted" id="experience" aria-labelledby="experience-heading">
        <div className="page-shell">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Experience</p>
              <h2 id="experience-heading">Leadership grounded in listening and follow-through</h2>
            </div>
          </div>
          <div className="experience-list">
            {experiences.map((experience) => (
              <article className="experience-item" key={`${experience.title}-${experience.organization}`}>
                <p className="experience-period">{experience.period}</p>
                <div>
                  <h3>{experience.title}</h3>
                  <p className="experience-org">{experience.organization}</p>
                </div>
                <p>{experience.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-heading">
        <div className="page-shell contact-inner">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 id="contact-heading">Let’s make the next product decision clearer.</h2>
          </div>
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
