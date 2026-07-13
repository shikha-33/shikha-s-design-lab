import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { CaseStudy } from "@/data/caseStudies";

type CaseStudyCardProps = {
  study: CaseStudy;
  featured?: boolean;
};

const CaseStudyCard = ({ study, featured = false }: CaseStudyCardProps) => (
  <article className={`work-card ${featured ? "work-card-featured" : ""}`}>
    <Link to={`/work/${study.slug}`} className="work-card-image-link" aria-label={`Read ${study.title} case study`}>
      <img
        src={study.hero.previewSrc ?? study.hero.src}
        alt={study.hero.alt}
        width={study.hero.previewWidth ?? study.hero.width}
        height={study.hero.previewHeight ?? study.hero.height}
        loading="lazy"
        decoding="async"
        className="work-card-image"
      />
    </Link>
    <div className="work-card-body">
      <p className="eyebrow">{study.eyebrow}</p>
      <h3>{study.title}</h3>
      <p>{study.summary}</p>
      <div className="tag-list" aria-label="Research methods">
        {study.methods.slice(0, 4).map((method) => (
          <span className="tag" key={method}>{method}</span>
        ))}
      </div>
      <Link to={`/work/${study.slug}`} className="text-link">
        Read case study <ArrowUpRight aria-hidden="true" />
      </Link>
    </div>
  </article>
);

export default CaseStudyCard;
