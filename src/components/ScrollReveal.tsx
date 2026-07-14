import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollReveal = () => {
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -5%" },
    );

    const observeNewElements = () => {
      document.querySelectorAll<HTMLElement>(".reveal-on-scroll:not([data-reveal-observed])").forEach((element) => {
        element.dataset.revealObserved = "true";
        observer.observe(element);
      });
    };

    observeNewElements();
    const mutationObserver = new MutationObserver(observeNewElements);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, [location.pathname]);

  return null;
};

export default ScrollReveal;
