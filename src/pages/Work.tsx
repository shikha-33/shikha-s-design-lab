import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudies } from "@/data/caseStudies";

const additionalWork = [
  {
    title: "SyncFlow",
    label: "Product sprint winner",
    detail: "A two-week concept for AI-assisted team workflows, developed through journey mapping, interaction modelling, rapid prototyping, and presentation.",
    href: "https://www.canva.com/design/DAGgFNsPYWg/jtmjbaUqVROgonFo_juhsA/edit",
  },
  {
    title: "WiDS Rental Analytics",
    label: "Data science",
    detail: "A rental-market modelling project spanning feature engineering, model evaluation, visual analysis, and evidence-driven storytelling.",
    href: "https://www.canva.com/design/DAGXucNEJV0/aANhqGA1eCSVnv6UsPKqEA/edit",
  },
  {
    title: "BOLT Financial Analytics",
    label: "Analytics finalist",
    detail: "A financial-risk analysis using data cleaning, outlier investigation, dashboards, and a concise stakeholder narrative.",
    href: "https://www.canva.com/design/DAGg0eS0gk8/lZk85plIg3s0kF242oIyHw/edit",
  },
];

const Work = () => (
  <div className="min-h-screen bg-background">
    <Seo title="Work | Shikha Rajesh" description="HCI, product research, UX design, and applied analytics case studies by Shikha Rajesh." />
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <Header />
    <main id="main-content">
      <header className="page-intro">
        <div className="page-shell page-intro-inner">
          <p className="eyebrow">Work</p>
          <h1>Research stories built around evidence, tradeoffs, and decisions.</h1>
          <p>Two full HCI case studies, followed by selected product and analytics work.</p>
        </div>
      </header>
      <section className="section-block" aria-label="HCI case studies">
        <div className="page-shell selected-work-grid">
          {caseStudies.map((study) => <CaseStudyCard study={study} featured key={study.slug} />)}
        </div>
      </section>
      <section className="section-block section-tinted" aria-labelledby="additional-work-heading">
        <div className="page-shell">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Additional work</p>
              <h2 id="additional-work-heading">Product thinking strengthened by data and communication</h2>
            </div>
          </div>
          <div className="additional-grid">
            {additionalWork.map((project) => (
              <a className="additional-card" href={project.href} target="_blank" rel="noreferrer" key={project.title}>
                <p className="eyebrow">{project.label}</p>
                <h3>{project.title}</h3>
                <p>{project.detail}</p>
                <span>Open project ↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Work;
