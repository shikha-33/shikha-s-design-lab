import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { roles } from "@/data/portfolio";

const Roles = () => (
  <div className="min-h-screen bg-background">
    <Seo title="Roles & Leadership | Shikha Rajesh" description="Campus leadership and operations experience spanning partnerships, communication, onboarding, and community engagement." />
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <Header />
    <main id="main-content">
      <header className="archive-hero compact-archive-hero">
        <div className="page-shell archive-hero-grid">
          <div>
            <p className="eyebrow">Roles & leadership</p>
            <h1>Leadership is another form of systems design.</h1>
          </div>
          <p>
            Campus experiences that shaped my approach to communication, structured workflows, first-time user journeys, and student-centred decision-making.
          </p>
        </div>
      </header>
      <section className="roles-section" aria-label="Leadership roles">
        <div className="page-shell roles-grid">
          {roles.map((role, index) => (
            <article className="role-card reveal-on-scroll" style={{ "--reveal-delay": `${(index % 2) * 90}ms` } as React.CSSProperties} key={`${role.title}-${role.organization}`}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{role.title}</h2>
              <p className="role-org">{role.organization}</p>
              <p>{role.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Roles;
