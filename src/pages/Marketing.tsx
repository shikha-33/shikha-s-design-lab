import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Marketing = () => {
  const categories = [
    {
      title: "Social Media Campaigns",
      description: "Strategic social media content and campaign planning",
      link: "https://drive.google.com/drive/folders/1v_NS54VPbGEFjWzS_Y7HFfgJQipLtha4?usp=sharing",
      gradient: "from-blue-600/20 to-purple-600/20",
    },
    {
      title: "Educational Posts",
      description: "Infographics and educational content design",
      link: "https://drive.google.com/drive/folders/1v_QTB86okMH-i2PWG9x9TMNV4eLL7wQU?usp=sharing",
      gradient: "from-emerald-600/20 to-teal-600/20",
    },
    {
      title: "Graphics & Branding",
      description: "Visual identity and branded materials",
      link: "https://drive.google.com/drive/folders/11WCHF6czOHgrvlgdpLSaAy0tMF56rbe4?usp=sharing",
      gradient: "from-orange-600/20 to-red-600/20",
    },
    {
      title: "Video Content",
      description: "Reels, videos, and multimedia storytelling",
      link: "https://drive.google.com/drive/folders/1pysxFQrFWOWV3Eoygdh3UaM8eoDRUsnD?usp=sharing",
      gradient: "from-pink-600/20 to-rose-600/20",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="section-padding">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-foreground">Marketing Work</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A collection of marketing materials, campaigns, and visual content created for various campus organizations and events.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {categories.map((category, index) => (
              <a
                key={index}
                href={category.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card group rounded-xl p-8 border border-border/50 text-center relative overflow-hidden hover-lift block"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <h3 className="mb-3 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    {category.description}
                  </p>
                  <div className={`flex items-center justify-center h-40 rounded-lg bg-gradient-to-br ${category.gradient} border border-white/5 backdrop-blur-sm group-hover:scale-[1.02] transition-transform duration-500`}>
                    <span className="text-sm font-medium text-white/80 bg-black/20 px-4 py-2 rounded-full backdrop-blur-md">View Collection</span>
                  </div>
                </div>
              </a>
            ))}
          </div>


        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Marketing;
