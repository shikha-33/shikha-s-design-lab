import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { PortfolioProject } from "@/data/portfolio";

type ProjectCardProps = PortfolioProject & {
  index?: number;
};

const ProjectCard = ({
  title,
  category,
  summary,
  image,
  tools,
  contributions,
  href,
  linkLabel = "View project",
  featured = false,
  index = 0,
}: ProjectCardProps) => {
  const isInternal = href?.startsWith("/");
  const linkContent = (
    <>
      {linkLabel} <ArrowUpRight aria-hidden="true" />
    </>
  );

  return (
    <article className={`portfolio-card reveal-on-scroll ${featured ? "portfolio-card-featured" : ""}`} style={{ "--reveal-delay": `${Math.min(index, 3) * 80}ms` } as React.CSSProperties}>
      <div className="portfolio-card-topline" />
      {image && <img className="portfolio-card-image" src={image} alt={`${title} project interface`} loading="lazy" />}
      <p className="eyebrow">{category}</p>
      <h3>{title}</h3>
      <p className="portfolio-card-summary">{summary}</p>

      <div className="portfolio-card-section">
        <h4>Tools & technologies</h4>
        <div className="tag-list">
          {tools.map((tool) => <span className="tag" key={tool}>{tool}</span>)}
        </div>
      </div>

      <div className="portfolio-card-section">
        <h4>Key contributions</h4>
        <ul>
          {contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}
        </ul>
      </div>

      {href && (
        isInternal ? (
          <Link className="portfolio-card-link" to={href}>{linkContent}</Link>
        ) : (
          <a className="portfolio-card-link" href={href} target="_blank" rel="noreferrer">{linkContent}</a>
        )
      )}
    </article>
  );
};

export default ProjectCard;
