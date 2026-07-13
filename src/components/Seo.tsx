import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
  image?: string;
};

const upsertMeta = (selector: string, attribute: string, value: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    const [name, key] = selector.includes("property=")
      ? ["property", selector.match(/property="([^"]+)"/)?.[1]]
      : ["name", selector.match(/name="([^"]+)"/)?.[1]];
    if (key) element.setAttribute(name, key);
    document.head.appendChild(element);
  }
  element.setAttribute(attribute, value);
};

const Seo = ({ title, description, image = "/profile.jpg" }: SeoProps) => {
  useEffect(() => {
    document.title = title;
    upsertMeta('meta[name="description"]', "content", description);
    upsertMeta('meta[property="og:title"]', "content", title);
    upsertMeta('meta[property="og:description"]', "content", description);
    upsertMeta('meta[property="og:type"]', "content", "website");
    upsertMeta('meta[property="og:image"]', "content", image);
    upsertMeta('meta[name="twitter:card"]', "content", "summary_large_image");
  }, [description, image, title]);

  return null;
};

export default Seo;
