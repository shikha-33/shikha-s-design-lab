import { ArrowUpRight, BookOpenText, Clapperboard, Palette, PanelsTopLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { marketingCollections } from "@/data/portfolio";

const icons = [PanelsTopLeft, BookOpenText, Palette, Clapperboard];

const Marketing = () => (
  <div className="min-h-screen bg-background">
    <Seo title="Marketing Work | Shikha Rajesh" description="Campaigns, educational content, graphics, branding, and video work by Shikha Rajesh." />
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <Header />
    <main id="main-content">
      <header className="marketing-hero">
        <div className="page-shell marketing-hero-inner">
          <p className="eyebrow">Marketing work</p>
          <h1>Communication designed to move people.</h1>
          <p>A collection of campaigns, educational materials, brand systems, and multimedia storytelling created for campus organizations and events.</p>
        </div>
      </header>
      <section className="marketing-section" aria-label="Marketing collections">
        <div className="page-shell marketing-grid">
          {marketingCollections.map((collection, index) => {
            const Icon = icons[index];
            return (
              <a className={`marketing-card marketing-card-${collection.accent} reveal-on-scroll`} href={collection.href} target="_blank" rel="noreferrer" key={collection.title}>
                <div className="marketing-card-icon"><Icon aria-hidden="true" /></div>
                <p className="eyebrow">Collection {String(index + 1).padStart(2, "0")}</p>
                <h2>{collection.title}</h2>
                <p>{collection.description}</p>
                <span>View collection <ArrowUpRight aria-hidden="true" /></span>
              </a>
            );
          })}
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Marketing;
