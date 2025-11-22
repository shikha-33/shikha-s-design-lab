import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const hciProjects = [
    {
      title: "Neighborhood Notebook — HCI Design Project",
      summary:
        "A mobile, map-based discovery platform for newcomers and exchange students in Vancouver, created through an HCI design cycle. Conducted interviews, affinity mapping, task analysis, conceptual modeling, and mid-fi prototyping in Figma. Explored how users rely on surface-level recommendations when information structures encourage shortcuts, informing design decisions around transparency, exploration, and skill-preserving workflows.",
      tools: ["Figma", "User Research", "Task Analysis", "Prototyping"],
      contributions: [
        "Conducted user interviews and affinity mapping",
        "Created conceptual models and task flows",
        "Designed mid-fidelity interactive prototype",
        "Analyzed information architecture impacts on user behavior",
      ],
      link: "https://www.figma.com/proto/Ewt68oRb8tzPgGn85Pppo4/Neighborhood-Notebook-Mid-fi-Prototype",
      linkText: "View Prototype",
      category: "HCI & UX Design",
    },
    {
      title: "SyncFlow — Winner at 2025 PMC Product Sprint",
      summary:
        "A collaborative productivity tool built during a 2-week sprint. Designed AI-assisted workflows, journey maps, and interaction models that exposed where automation improves flow and where it creates breakdowns. Experience includes rapid prototyping, communication design, and evaluating task structures in AI-integrated environments.",
      tools: ["Figma", "Journey Mapping", "AI Integration", "Product Design"],
      contributions: [
        "Designed AI-assisted workflow patterns",
        "Created user journey maps and interaction models",
        "Evaluated automation impact on task completion",
        "Rapid prototyping and user testing",
      ],
      category: "Product Design",
    },
    {
      title: "Subletify — Student Housing Platform",
      summary:
        "Designed trusted, transparent, user-centered flows for a student subletting platform. Built onboarding logic, communication pathways, and clarity-driven information structures. Analyzed engagement patterns to understand trust, friction points, and the impact of unclear workflows—insights directly transferable to educational design and AI-literacy content creation.",
      tools: ["UX Design", "User Flows", "Information Architecture"],
      contributions: [
        "Designed onboarding and communication flows",
        "Created trust-building interface patterns",
        "Analyzed user engagement and friction points",
        "Built clarity-focused information structures",
      ],
      link: "https://www.subletify.site/",
      linkText: "Visit Site",
      category: "UX Design",
    },
  ];

  const dataProjects = [
    {
      title: "WiDS Case Competition — ML & Analytics Project",
      summary:
        "Built a data science pipeline analyzing rental trends using R, Power BI, Tableau, and scikit-learn. Performed feature engineering, modeling, error evaluation, and data storytelling. Experience with data visualization assistants and interdisciplinary modeling.",
      tools: ["R", "Python", "Power BI", "Tableau", "scikit-learn"],
      contributions: [
        "Feature engineering and data preprocessing",
        "Built predictive models for rental trends",
        "Created interactive data visualizations",
        "Presented data-driven insights to stakeholders",
      ],
      category: "Data Science",
    },
    {
      title: "BC Housing & Environmental Risk Prediction",
      summary:
        "Analyzed climate-risk factors and housing variables using regression, KNN, VIF, and BI dashboards. Explored how data shape human decision-making and accountability frameworks.",
      tools: ["R", "Regression Analysis", "KNN", "BI Dashboards"],
      contributions: [
        "Statistical modeling of climate risk factors",
        "Housing market analysis and predictions",
        "Built decision-support dashboards",
        "Evaluated model interpretability and accountability",
      ],
      category: "Data Analytics",
    },
    {
      title: "Real Estate Price Prediction — Personal ML Project",
      summary:
        "Designed an ML workflow using KNN models, EDA, VIF, model selection, and pipeline iteration.",
      tools: ["Python", "scikit-learn", "Pandas", "Matplotlib"],
      contributions: [
        "Exploratory data analysis and visualization",
        "Feature selection using VIF",
        "KNN model optimization and validation",
        "End-to-end ML pipeline development",
      ],
      category: "Machine Learning",
    },
  ];

  const devProjects = [
    {
      title: "COVID-19 Tracker Dashboard — React + Flask Website",
      summary:
        "Built a real-time dashboard integrating API data, visualizations, and clear user-facing communication.",
      tools: ["React", "Flask", "APIs", "Data Visualization"],
      contributions: [
        "Built full-stack web application",
        "Integrated real-time COVID-19 data APIs",
        "Created interactive data visualizations",
        "Designed clear user interface",
      ],
      category: "Software Development",
    },
  ];

  const strategyProjects = [
    {
      title: "TELUS x PMC Sprint — Workflow Automation Project",
      summary:
        "Designed automation-enhanced workflows for prioritization and backlog management using JIRA, Sheets API, and UX workflow modeling.",
      tools: ["JIRA", "Sheets API", "Workflow Design", "Automation"],
      contributions: [
        "Designed workflow automation systems",
        "Built prioritization frameworks",
        "Integrated JIRA with custom tools",
        "UX analysis of automated workflows",
      ],
      category: "Strategy & Operations",
    },
    {
      title: "Ascend SFU Case Competition — DEI Strategy",
      summary:
        "Developed strategic frameworks, learner behavior models, and decision-support structures.",
      tools: ["Strategic Planning", "Behavioral Analysis", "Framework Design"],
      contributions: [
        "Created DEI strategic frameworks",
        "Designed learner behavior models",
        "Built decision-support systems",
        "Presented recommendations to stakeholders",
      ],
      category: "Strategy",
    },
    {
      title: "BOLT First Byte Datathon — Financial Analytics",
      summary:
        "Built a data analytics model detecting outliers and fraud indicators, supported by BI dashboards.",
      tools: ["Python", "Analytics", "BI Dashboards", "Fraud Detection"],
      contributions: [
        "Developed fraud detection algorithms",
        "Created financial analytics dashboards",
        "Outlier detection and pattern analysis",
        "Data storytelling and presentation",
      ],
      category: "Data Analytics",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="section-padding">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-foreground">Projects</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A collection of my work in HCI, UX design, data science, and product development—exploring how technology shapes learning, decision-making, and human behavior.
            </p>
          </div>

          {/* HCI & UX Projects */}
          <div className="mb-16">
            <h2 className="mb-8 text-3xl font-semibold text-foreground">
              HCI, UX & Product Design
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              {hciProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>

          {/* Data & ML Projects */}
          <div className="mb-16">
            <h2 className="mb-8 text-3xl font-semibold text-foreground">
              Data Science & Machine Learning
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              {dataProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>

          {/* Software Development */}
          <div className="mb-16">
            <h2 className="mb-8 text-3xl font-semibold text-foreground">
              Software Development
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              {devProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>

          {/* Strategy Projects */}
          <div>
            <h2 className="mb-8 text-3xl font-semibold text-foreground">
              Strategy & Analytics
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              {strategyProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
