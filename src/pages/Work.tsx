import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import ProjectCard from "@/components/ProjectCard";
import { projectSections } from "@/data/portfolio";

const Work = () => (
  <div className="min-h-screen bg-background">
    <Seo
      title="Work | Shikha Rajesh"
      description="A complete archive of Shikha Rajesh's HCI, product design, data science, machine learning, strategy, and analytics work."
    />
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <Header />
    <main id="main-content">
      <header className="archive-hero">
        <div className="page-shell archive-hero-grid">
          <div>
            <p className="eyebrow">Complete work archive</p>
            <h1>Projects across research, product, data, and strategy.</h1>
          </div>
          <p>
            A collection of research, prototypes, competitions, models, and team projects from my work across technology and design.
          </p>
        </div>
      </header>

      <nav className="work-jump-nav" aria-label="Work categories">
        <div className="page-shell">
          {projectSections.map((section) => <a href={`#${section.id}`} key={section.id}>{section.eyebrow}</a>)}
        </div>
      </nav>

      {projectSections.map((section, sectionIndex) => (
        <section className={`portfolio-section ${sectionIndex % 2 ? "portfolio-section-tinted" : ""}`} id={section.id} key={section.id} aria-labelledby={`${section.id}-heading`}>
          <div className="page-shell">
            <div className="portfolio-banner">
              <img src={section.image} alt="" loading="lazy" />
              <div className="portfolio-banner-copy">
                <p className="eyebrow">{section.eyebrow}</p>
                <h2 id={`${section.id}-heading`}>{section.title}</h2>
                <p>{section.description}</p>
              </div>
            </div>
            <div className="portfolio-grid">
              {section.projects.map((project, index) => <ProjectCard {...project} index={index} key={project.title} />)}
            </div>
          </div>
        </section>
      ))}
    </main>
    <Footer />
  </div>
);

export default Work;
