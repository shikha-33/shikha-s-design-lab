import type { EvidenceAsset } from "@/data/caseStudies";

type EvidenceFigureProps = {
  asset: EvidenceAsset;
  wide?: boolean;
};

const EvidenceFigure = ({ asset, wide = false }: EvidenceFigureProps) => (
  <figure className={`evidence-figure ${wide ? "evidence-figure-wide" : ""}`}>
    <div className="evidence-image-frame">
      <img
        src={asset.src}
        alt={asset.alt}
        width={asset.width}
        height={asset.height}
        loading="lazy"
      />
    </div>
    <figcaption>{asset.caption}</figcaption>
  </figure>
);

export default EvidenceFigure;
