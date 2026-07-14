import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import EvidenceFigure from "@/components/EvidenceFigure";
import { getCaseStudy } from "@/data/caseStudies";

const CaseStudyPage = () => {
  const { slug = "" } = useParams();
  const study = getCaseStudy(slug);

  if (!study) return <Navigate to="/work" replace />;

  return (
    <div className="min-h-screen bg-background">
      <Seo title={`${study.title} | Shikha Rajesh`} description={study.summary} image={study.hero.src} />
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />
      <main id="main-content">
        <article>
          <header className="case-hero">
            <div className="case-shell">
              <Link to="/work" className="back-link"><ArrowLeft aria-hidden="true" /> All work</Link>
              <p className="eyebrow">{study.eyebrow}</p>
              <h1>{study.title}</h1>
              <p className="case-summary">{study.summary}</p>
              <dl className="case-meta">
                <div><dt>Timeline</dt><dd>{study.timeline}</dd></div>
                <div><dt>Team</dt><dd>{study.team}</dd></div>
                <div><dt>Role</dt><dd>Research · Design · Analysis</dd></div>
              </dl>
              <EvidenceFigure asset={study.hero} wide />
            </div>
          </header>

          <section className="case-section" aria-labelledby="context-heading">
            <div className="case-shell case-two-column">
              <div><p className="eyebrow">Context</p><h2 id="context-heading">Start with the situation, not the interface.</h2></div>
              <div className="case-prose"><p>{study.context}</p><h3>The problem</h3><p>{study.problem}</p></div>
            </div>
          </section>

          <section className="case-section case-section-tinted" aria-labelledby="role-heading">
            <div className="case-shell case-two-column">
              <div><p className="eyebrow">My role</p><h2 id="role-heading">Shared product, explicit contribution.</h2></div>
              <div className="contribution-callout">
                <p>{study.role}</p>
                <div className="tag-list">{study.tools.map((tool) => <span className="tag" key={tool}>{tool}</span>)}</div>
              </div>
            </div>
          </section>

          <section className="case-section" aria-labelledby="questions-heading">
            <div className="case-shell">
              <p className="eyebrow">Research questions</p>
              <h2 id="questions-heading">What we needed to learn</h2>
              <ol className="question-list">
                {study.researchQuestions.map((question, index) => (
                  <li key={question}><span>{String(index + 1).padStart(2, "0")}</span><p>{question}</p></li>
                ))}
              </ol>
            </div>
          </section>

          <section className="case-section case-section-tinted" aria-labelledby="methods-heading">
            <div className="case-shell">
              <p className="eyebrow">Methods</p>
              <h2 id="methods-heading">A process built to reduce uncertainty</h2>
              <div className="process-grid">
                {study.process.map((step, index) => (
                  <article className="process-card" key={step.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span><h3>{step.title}</h3><p>{step.detail}</p>
                  </article>
                ))}
              </div>
              <div className="method-summary" aria-label="Methods used">
                {study.methods.map((method) => <span key={method}>{method}</span>)}
              </div>
            </div>
          </section>

          <section className="case-section" aria-labelledby="evidence-heading">
            <div className="case-shell">
              <p className="eyebrow">Evidence</p>
              <h2 id="evidence-heading">What the study revealed</h2>
              <div className="finding-grid">
                {study.findings.map((finding) => (
                  <article className="finding-card" key={finding.title}>
                    {finding.value && <p className="finding-value">{finding.value}</p>}
                    <h3>{finding.title}</h3><p>{finding.detail}</p>
                  </article>
                ))}
              </div>
              <div className="evidence-grid">
                {study.evidence.map((asset) => <EvidenceFigure asset={asset} key={asset.src} />)}
              </div>
            </div>
          </section>

          <section className="case-section case-section-tinted" aria-labelledby="decisions-heading">
            <div className="case-shell case-two-column">
              <div><p className="eyebrow">Design decisions</p><h2 id="decisions-heading">Evidence became a concrete next move.</h2></div>
              <ol className="decision-list">
                {study.decisions.map((decision, index) => <li key={decision}><span>{index + 1}</span><p>{decision}</p></li>)}
              </ol>
            </div>
          </section>

          <section className="case-section" aria-labelledby="outcome-heading">
            <div className="case-shell case-two-column">
              <div><p className="eyebrow">Outcome</p><h2 id="outcome-heading">A qualified answer and a better next question.</h2></div>
              <div className="case-prose"><p className="outcome-copy">{study.outcome}</p><h3>Limitations</h3><ul>{study.limitations.map((limitation) => <li key={limitation}>{limitation}</li>)}</ul></div>
            </div>
          </section>

          <section className="case-section reflection-section" aria-labelledby="reflection-heading">
            <div className="case-shell reflection-inner">
              <p className="eyebrow">Reflection</p><h2 id="reflection-heading">What I would carry forward</h2><p>{study.reflection}</p>
              {study.links.length > 0 && <div className="case-links">{study.links.map((link) => <a href={link.href} target="_blank" rel="noreferrer" className="button-secondary" key={link.href}>{link.label} <ArrowUpRight aria-hidden="true" /></a>)}</div>}
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudyPage;
