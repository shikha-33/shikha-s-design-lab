import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Marketing = () => {
  const categories = [
    {
      title: "Social Media Campaigns",
      description: "Strategic social media content and campaign planning",
    },
    {
      title: "Educational Posts",
      description: "Infographics and educational content design",
    },
    {
      title: "Analytics Dashboards",
      description: "Performance tracking and data visualization",
    },
    {
      title: "Graphics & Branding",
      description: "Visual identity and branded materials",
    },
    {
      title: "Video Content",
      description: "Reels, videos, and multimedia storytelling",
    },
    {
      title: "Event Marketing",
      description: "Promotional materials for campus events",
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

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <div
                key={index}
                className="card-interactive rounded-xl bg-card p-8 border border-border text-center"
              >
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
                <div className="mt-6 flex items-center justify-center h-32 rounded-lg bg-muted/30">
                  <p className="text-xs text-muted-foreground">Coming Soon</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground">
              Marketing portfolio materials will be added here soon. Check back for updates!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Marketing;
