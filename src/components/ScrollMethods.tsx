import { useEffect, useRef } from "react";
import { researchMethods } from "@/data/portfolio";

const ScrollMethods = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const items = root.querySelectorAll<HTMLElement>("[data-method]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.35, rootMargin: "0px 0px -8%" },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="methods-section" aria-labelledby="methods-heading" ref={rootRef}>
      <div className="page-shell methods-scroll-grid">
        <div className="methods-sticky-copy">
          <p className="eyebrow">Research toolkit</p>
          <h2 id="methods-heading">Methods selected for the question, not for the checklist.</h2>
          <p>Scroll through the toolkit to see how each method changes what a team can learn.</p>
        </div>
        <div className="method-story-list">
          {researchMethods.map((method, index) => (
            <article className="method-story" data-method key={method.title}>
              <span className="method-number">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{method.title}</h3>
                <p>{method.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollMethods;
