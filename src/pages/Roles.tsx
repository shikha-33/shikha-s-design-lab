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
      title: "Science RXN Coordinator",
      organization: "UBC Science Undergraduate Society",
      description:
        "Designed and executed onboarding pathways for 100+ students, ensuring clarity, accessibility, and high-quality experience through organized communication. Built structured processes that helped new students navigate campus resources and academic expectations. Created documentation systems that made orientation information discoverable and actionable.",
    },
    {
      title: "Recreation Operations Staff",
      organization: "UBC Recreation",
      description:
        "Supported front-line interactions, delivering clear instructions and user-friendly processes for diverse student groups. Identified friction points in facility usage and contributed to process improvements. Developed communication approaches that made recreation services accessible to students with varying levels of familiarity and different needs.",
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
              Campus leadership experiences that shaped my approach to communication design, structured workflows, and student-centered thinking—skills I bring to HCI research and educational technology.
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
