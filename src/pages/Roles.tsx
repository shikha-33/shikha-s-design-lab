import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RoleCard from "@/components/RoleCard";

const Roles = () => {
  const roles = [
    {
      title: "Corporate Relations Chair",
      organization: "UBC Science Undergraduate Society",
      description:
        "Designed communication systems, documentation processes, and partnership workflows across 30+ organizations. Built clarity-driven materials and cross-team coordination structures for 15+ campus-wide events. Developed frameworks for stakeholder engagement that balanced organizational goals with accessible, student-facing communication.",
    },
    {
      title: "Marketing Director",
      organization: "UBC Undergraduate Statistics Society",
      description:
        "Created educational and data visualization content, analytics-informed messaging, and student-facing materials supporting statistical literacy. Developed content strategies that translated complex statistical concepts into engaging, accessible formats. Built communication workflows that increased student engagement with statistical thinking and data-driven decision-making.",
    },
    {
      title: "VP External",
      organization: "Brock Commons Residence Association",
      description:
        "Designed communication flows for over 900 residents, improving clarity, accessibility, and community engagement through structured content and collaborative programming. Created information architectures that made residence resources discoverable and usable. Built feedback systems that captured resident needs and translated them into actionable improvements.",
    },
    {
      title: "Public Relations Head",
      organization: "UBC Quantum Club",
      description:
        "Simplified technical topics for student audiences, crafted scripts and visuals, and managed research-focused communication pieces. Developed content that made quantum computing concepts approachable while maintaining technical accuracy. Created engagement pathways that helped students explore complex scientific ideas through clear, well-structured materials.",
    },
    {
      title: "Marketing Director",
      organization: "UBC Science Undergraduate Society",
      description:
        "As Marketing Director, I led end-to-end marketing strategy for 40+ high-impact student events, combining audience insights with data-driven experimentation. I increased social media engagement by 50% by optimizing content timing, refining messaging, and applying targeted segmentation. I also implemented A/B testing workflows that strengthened campaign performance and supported decision-making across the society. This role reflects my ability to design user-centric communication systems, scale outreach, and deliver consistent, measurable results.",
    },
    {
      title: "Recreation Operations Staff",
      organization: "UBC Recreation",
      description:
        "Supported front-line interactions, delivering clear instructions and user-friendly processes for diverse student groups. Identified friction points in facility usage and contributed to process improvements. Developed communication approaches that made recreation services accessible to students with varying levels of familiarity and different needs.",
    },
    {
      title: "Science RXN Coordinator",
      organization: "UBC Science Undergraduate Society",
      description:
        "Designed and executed onboarding pathways for 100+ students, ensuring clarity, accessibility, and high-quality experience through organized communication. Built structured processes that helped new students navigate campus resources and academic expectations. Created documentation systems that made orientation information discoverable and actionable.",
    },
    {
      title: "Imagine Day Orientation Leader",
      organization: "University of British Columbia",
      description:
        "As an Orientation Leader, I guided and supported over 30 incoming students through their transition into university life. I facilitated community-building activities, designed inclusive group experiences, and communicated complex information clearly to diverse student backgrounds. This experience strengthened my ability to understand user needs, support first-time user journeys, and design environments where people feel welcomed, informed, and engaged - key principles I carry into UX, HCI, and product-focused work.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="section-padding">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-foreground">Roles & Leadership</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Campus leadership experiences that shaped my approach to communication design, structured workflows, and student-centered thinking - skills I bring to HCI research and educational technology.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {roles.map((role, index) => (
              <RoleCard key={index} {...role} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Roles;
