const LayeredPortrait = () => (
  <figure className="layered-portrait" aria-label="Shikha Rajesh presenting to an audience">
    <div className="portrait-glow" aria-hidden="true" />
    <div className="portrait-layer portrait-layer-one" aria-hidden="true" />
    <div className="portrait-layer portrait-layer-two" aria-hidden="true" />
    <div className="portrait-image-wrap">
      <img
        src="/profile-optimized.jpg"
        alt="Shikha Rajesh presenting to an audience"
        width="930"
        height="844"
        decoding="async"
      />
      <div className="portrait-image-overlay" aria-hidden="true" />
    </div>
    <div className="portrait-float-card portrait-float-card-top">
      <span>Mixed methods</span>
      <strong>Qual + quant</strong>
    </div>
    <div className="portrait-float-card portrait-float-card-bottom">
      <span>Current focus</span>
      <strong>HCI · Product · Data</strong>
    </div>
  </figure>
);

export default LayeredPortrait;
