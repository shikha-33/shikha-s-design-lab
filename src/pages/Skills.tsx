import { BarChart3, Compass, UsersRound } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { skillGroups } from "@/data/portfolio";

const icons = [Compass, BarChart3, UsersRound];

const Skills = () => (
  <div className="min-h-screen bg-background">
    <Seo title="Skills & Expertise | Shikha Rajesh" description="Product and UX research, data analysis, strategy, and leadership capabilities." />
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <Header />
    <main id="main-content">
      <header className="archive-hero compact-archive-hero">
        <div className="page-shell archive-hero-grid">
          <div>
            <p className="eyebrow">Skills & expertise</p>
            <h1>Research depth, analytical range, and practical delivery.</h1>
          </div>
          <p>A comprehensive overview of my technical and strategic capabilities across design, data, communication, and leadership.</p>
        </div>
      </header>
      <section className="skills-page-section">
        <div className="page-shell skills-page-grid">
          {skillGroups.map((group, index) => {
            const Icon = icons[index];
            return (
              <article className={`skill-panel skill-panel-${index + 1} reveal-on-scroll`} key={group.title}>
                <div className="skill-panel-icon"><Icon aria-hidden="true" /></div>
                <p className="eyebrow">Capability {String(index + 1).padStart(2, "0")}</p>
                <h2>{group.title}</h2>
                <p className="skill-panel-description">{group.description}</p>
                <ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
              </article>
            );
          })}
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Skills;
