export type PortfolioProject = {
  title: string;
  category: string;
  summary: string;
  image?: string;
  tools: string[];
  contributions: string[];
  href?: string;
  linkLabel?: string;
  featured?: boolean;
};

export type PortfolioSection = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  projects: PortfolioProject[];
};

export const projectSections: PortfolioSection[] = [
  {
    id: "hci-product",
    eyebrow: "HCI, UX & product design",
    title: "Research with a decision at the end",
    description:
      "Research, product strategy, and interaction design projects grounded in user needs, behavioural evidence, and deliberate tradeoffs.",
    image: "/hci-ux-portfolio.png",
    projects: [
      {
        title: "Tenant Town",
        category: "Mixed-method HCI experiment",
        summary:
          "A controlled study of how navigation structure and device context affect people using a community platform for tenant knowledge and support.",
        tools: ["Figma", "Qualtrics", "Mixed-factorial ANOVA", "Thematic analysis"],
        contributions: [
          "Designed and evaluated two cross-device navigation structures",
          "Ran task-based sessions with 10 participants",
          "Measured task time, misclicks, backtracks, and qualitative feedback",
          "Converted converging evidence into information-architecture recommendations",
        ],
        href: "/work/tenant-town",
        linkLabel: "Read case study",
        featured: true,
      },
      {
        title: "Neighbourhood Notebook",
        category: "End-to-end product research",
        summary:
          "A mobile discovery experience for short-term Vancouver residents, developed through research, conceptual modelling, prototyping, and usability evaluation.",
        tools: ["Figma", "FigJam", "Task analysis", "Think-aloud testing"],
        contributions: [
          "Translated newcomer needs into product requirements",
          "Built task flows, conceptual models, and a mid-fidelity prototype",
          "Used three pilots to improve the study before evaluation",
          "Refined filtering, navigation, and review flows from observed behaviour",
        ],
        href: "/work/neighborhood-notebook",
        linkLabel: "Read case study",
        featured: true,
      },
      {
        title: "SyncFlow - TELUS x PMC",
        category: "Winner, 2025 PMC Product Sprint",
        summary:
          "A collaborative productivity concept built during a two-week sprint. The team explored where AI-assisted workflows improve coordination and where automation creates new breakdowns.",
        tools: ["Figma", "Journey mapping", "Workflow modelling", "Product strategy"],
        contributions: [
          "Designed AI-assisted workflow patterns",
          "Created user journeys and interaction models",
          "Developed rapid prototypes and evaluation criteria",
          "Presented the product rationale in a time-constrained team pitch",
        ],
        href: "https://www.canva.com/design/DAGgFNsPYWg/jtmjbaUqVROgonFo_juhsA/edit",
        linkLabel: "View project",
      },
      {
        title: "Subletify",
        category: "Student housing product",
        summary:
          "A student subletting platform shaped around trust, transparent communication, clear onboarding, and discoverable housing information.",
        image: "/subletify-hero.png",
        tools: ["UX design", "User flows", "Information architecture"],
        contributions: [
          "Mapped end-to-end student housing workflows",
          "Designed onboarding and communication pathways",
          "Created trust-building interface patterns",
          "Used engagement and stakeholder feedback to identify friction",
        ],
        href: "https://www.subletify.site/",
        linkLabel: "Visit site",
      },
    ],
  },
  {
    id: "data-science",
    eyebrow: "Data science & machine learning",
    title: "Models made useful through interpretation",
    description:
      "Applied analytics projects spanning feature engineering, statistical modelling, dashboards, model evaluation, and stakeholder storytelling.",
    image: "/data-science-portfolio.png",
    projects: [
      {
        title: "WiDS Case Competition",
        category: "ML & rental analytics",
        summary:
          "Built a data science pipeline analysing rental trends using R, Power BI, Tableau, and scikit-learn, with emphasis on modelling, evaluation, and data storytelling.",
        tools: ["R", "Python", "Power BI", "Tableau", "scikit-learn"],
        contributions: [
          "Feature engineering and data preprocessing",
          "Predictive modelling of rental trends",
          "Interactive data visualisation",
          "Presentation of evidence-based insights to stakeholders",
        ],
        href: "https://www.canva.com/design/DAGXucNEJV0/aANhqGA1eCSVnv6UsPKqEA/edit",
        linkLabel: "View project",
      },
      {
        title: "BC Housing & Environmental Risk Prediction",
        category: "Data analytics",
        summary:
          "Analysed climate-risk factors and housing variables using regression, KNN, VIF, and BI dashboards to explore how data shape decisions and accountability.",
        tools: ["R", "Regression", "KNN", "BI dashboards"],
        contributions: [
          "Statistical modelling of climate-risk factors",
          "Housing-market analysis and prediction",
          "Decision-support dashboard design",
          "Evaluation of model interpretability and accountability",
        ],
      },
      {
        title: "Real Estate Price Prediction",
        category: "Personal machine-learning project",
        summary:
          "Designed an end-to-end ML workflow using exploratory analysis, VIF-based feature selection, KNN models, validation, and pipeline iteration.",
        tools: ["Python", "scikit-learn", "Pandas", "Matplotlib"],
        contributions: [
          "Exploratory data analysis and visualisation",
          "Feature selection using VIF",
          "KNN optimisation and validation",
          "End-to-end ML pipeline development",
        ],
      },
    ],
  },
  {
    id: "strategy-analytics",
    eyebrow: "Strategy & analytics",
    title: "Frameworks for ambiguous decisions",
    description:
      "Case competitions and datathons where behavioural analysis, strategic structure, and quantitative evidence became clear recommendations.",
    image: "/strategy-portfolio.png",
    projects: [
      {
        title: "Ascend SFU Case Competition",
        category: "DEI strategy",
        summary:
          "Developed strategic frameworks, learner-behaviour models, and decision-support structures for a DEI-focused case challenge.",
        tools: ["Strategic planning", "Behavioural analysis", "Framework design"],
        contributions: [
          "Created DEI strategic frameworks",
          "Designed learner-behaviour models",
          "Built decision-support structures",
          "Presented recommendations to stakeholders",
        ],
        href: "https://www.canva.com/design/DAGeMJdPEJA/QSXE9OZ3w1UIz7iUPasyew/edit",
        linkLabel: "View project",
      },
      {
        title: "BOLT First Byte Datathon",
        category: "Financial analytics",
        summary:
          "Built a financial analytics model for detecting outliers and fraud indicators, supported by BI dashboards and a concise stakeholder narrative.",
        tools: ["Python", "Analytics", "BI dashboards", "Fraud detection"],
        contributions: [
          "Developed fraud-detection logic",
          "Created financial analytics dashboards",
          "Investigated outliers and behavioural patterns",
          "Presented findings through data storytelling",
        ],
        href: "https://www.canva.com/design/DAGg0eS0gk8/lZk85plIg3s0kF242oIyHw/edit?utm_content=DAGg0eS0gk8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
        linkLabel: "View project",
      },
    ],
  },
];

export const roles = [
  {
    title: "Corporate Relations Chair",
    organization: "UBC Science Undergraduate Society",
    description:
      "Designed communication systems, documentation processes, and partnership workflows across 30+ organizations. Built clarity-driven materials and cross-team coordination structures for 15+ campus-wide events. Developed stakeholder-engagement frameworks that balanced organizational goals with accessible, student-facing communication.",
  },
  {
    title: "Marketing Director",
    organization: "UBC Undergraduate Statistics Society",
    description:
      "Created educational and data-visualization content, analytics-informed messaging, and student-facing materials supporting statistical literacy. Developed strategies that translated complex statistical concepts into engaging, accessible content and strengthened engagement with data-driven thinking.",
  },
  {
    title: "VP External",
    organization: "Brock Commons Residence Association",
    description:
      "Designed communication flows for more than 900 residents, improving clarity, accessibility, and community engagement through structured content and collaborative programming. Built feedback systems that captured resident needs and translated them into actionable improvements.",
  },
  {
    title: "Public Relations Head",
    organization: "UBC Quantum Club",
    description:
      "Simplified technical topics for student audiences, crafted scripts and visuals, and managed research-focused communication. Created engagement pathways that made quantum-computing concepts approachable while maintaining technical accuracy.",
  },
  {
    title: "Marketing Director",
    organization: "UBC Science Undergraduate Society",
    description:
      "Led end-to-end marketing strategy for 40+ student events, combining audience insights with data-informed experimentation. Refined content timing, messaging, segmentation, and A/B testing workflows to support consistent campaign decisions.",
  },
  {
    title: "Recreation Operations Staff",
    organization: "UBC Recreation",
    description:
      "Supported front-line interactions and delivered clear processes for diverse student groups. Identified friction in facility use and adapted communication to students with different levels of familiarity and different needs.",
  },
  {
    title: "Science RXN Coordinator",
    organization: "UBC Science Undergraduate Society",
    description:
      "Designed and executed onboarding pathways for more than 100 students. Built structured communication and documentation that helped new students navigate campus resources and academic expectations.",
  },
  {
    title: "Imagine Day Orientation Leader",
    organization: "University of British Columbia",
    description:
      "Guided more than 30 incoming students through their transition to university. Facilitated inclusive group experiences and communicated complex information clearly, strengthening my approach to first-time user journeys and welcoming environments.",
  },
];

export const skillGroups = [
  {
    title: "Product & UX Skills",
    description: "Understand the problem, model the journey, test the interaction, and communicate the decision.",
    skills: [
      "User Research (Interviews, Surveys, Usability Testing)",
      "Wireframing & Prototyping (Figma)",
      "Information Architecture",
      "Interaction Design",
      "Visual Design Systems",
      "Journey Mapping & Persona Creation",
      "A/B Testing & Experiment Design",
      "Design Critique & Heuristics",
    ],
  },
  {
    title: "Data & Analytics Skills",
    description: "Move from messy evidence to interpretable patterns, evaluated models, and useful narratives.",
    skills: [
      "Python (Pandas, NumPy)",
      "R (ggplot2, tidymodels)",
      "SQL (Introductory Querying)",
      "Data Cleaning & Preprocessing",
      "Exploratory Data Analysis",
      "Visualization (Dashboards, Plots)",
      "Statistical Modeling (Regression, Hypothesis Testing)",
      "Insights & Storytelling",
    ],
  },
  {
    title: "Strategy & Leadership Skills",
    description: "Align people, requirements, timelines, and communication around a shared outcome.",
    skills: [
      "Stakeholder Management",
      "Cross-Functional Collaboration",
      "Strategic Communication",
      "Project Planning & Roadmapping",
      "Requirements Gathering",
      "Branding & Content Strategy",
      "Event & Campaign Execution",
      "Partnership Development",
    ],
  },
];

export const marketingCollections = [
  {
    title: "Social Media Campaigns",
    description: "Strategic social media content and campaign planning.",
    href: "https://drive.google.com/drive/folders/1v_NS54VPbGEFjWzS_Y7HFfgJQipLtha4?usp=sharing",
    accent: "blue",
  },
  {
    title: "Educational Posts",
    description: "Infographics and educational content design.",
    href: "https://drive.google.com/drive/folders/1v_QTB86okMH-i2PWG9x9TMNV4eLL7wQU?usp=sharing",
    accent: "teal",
  },
  {
    title: "Graphics & Branding",
    description: "Visual identity systems and branded materials.",
    href: "https://drive.google.com/drive/folders/11WCHF6czOHgrvlgdpLSaAy0tMF56rbe4?usp=sharing",
    accent: "violet",
  },
  {
    title: "Video Content",
    description: "Reels, videos, and multimedia storytelling.",
    href: "https://drive.google.com/drive/folders/1pysxFQrFWOWV3Eoygdh3UaM8eoDRUsnD?usp=sharing",
    accent: "rose",
  },
];

export const researchMethods = [
  {
    title: "Semi-structured interviews",
    detail: "Use open questions and targeted probes to uncover needs, language, workarounds, and context before committing to a solution.",
  },
  {
    title: "Usability testing",
    detail: "Observe task behaviour, hesitation, errors, and expectations through think-aloud sessions and post-task reflection.",
  },
  {
    title: "Task analysis",
    detail: "Break complex goals into steps, decisions, information needs, and failure points that a design must support.",
  },
  {
    title: "Thematic analysis",
    detail: "Code qualitative evidence, cluster recurring patterns, and preserve contradictory or minority signals during synthesis.",
  },
  {
    title: "Experimental design",
    detail: "Structure comparisons, variables, tasks, and measures so a design question can be tested with appropriate caution.",
  },
  {
    title: "Quantitative analysis",
    detail: "Use task time, errors, descriptive statistics, ANOVA, and correlation to examine behavioural patterns and uncertainty.",
  },
  {
    title: "Information architecture",
    detail: "Organize content, labels, and pathways around users' mental models so important actions remain discoverable.",
  },
  {
    title: "Interactive prototyping",
    detail: "Build only enough fidelity to answer the next question, then iterate from observed evidence rather than visual preference.",
  },
];
