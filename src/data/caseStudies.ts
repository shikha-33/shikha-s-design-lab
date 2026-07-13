export type EvidenceAsset = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  previewSrc?: string;
  previewWidth?: number;
  previewHeight?: number;
};

export type CaseStudy = {
  slug: "neighborhood-notebook" | "tenant-town";
  title: string;
  eyebrow: string;
  summary: string;
  context: string;
  problem: string;
  role: string;
  timeline: string;
  team: string;
  methods: string[];
  tools: string[];
  researchQuestions: string[];
  process: { title: string; detail: string }[];
  findings: { value?: string; title: string; detail: string }[];
  decisions: string[];
  outcome: string;
  limitations: string[];
  reflection: string;
  hero: EvidenceAsset;
  evidence: EvidenceAsset[];
  links: { label: string; href: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "neighborhood-notebook",
    title: "Neighbourhood Notebook",
    eyebrow: "End-to-end product research",
    summary:
      "A mobile discovery experience that helps short-term Vancouver residents find local places through familiar, trustworthy recommendations.",
    context:
      "Short-term residents often have little local knowledge and limited time to build it. Our team explored how a mobile product could make discovery feel personal without overwhelming people with generic recommendations.",
    problem:
      "People needed a fast way to find relevant local experiences, understand why a recommendation was credible, and contribute their own reflections without exposing more identity than necessary.",
    role:
      "I contributed across the full research and design cycle: user research, affinity mapping, task analysis, conceptual modelling, Figma prototyping, pilot sessions, usability evaluation, analysis, and design recommendations.",
    timeline: "September - December 2025",
    team: "Five-person CPSC 344 team project",
    methods: [
      "Reference-design review",
      "Affinity mapping",
      "Task analysis",
      "Cognitive walkthrough",
      "Think-aloud usability testing",
      "Post-task questionnaire",
    ],
    tools: ["Figma", "FigJam", "Qualtrics", "Thematic synthesis"],
    researchQuestions: [
      "How efficiently can people filter and sort recommendations to find personally relevant places?",
      "How intuitive is it to share a reflection, add a rating or photo, and save a recommendation?",
    ],
    process: [
      {
        title: "Frame the need",
        detail:
          "We translated early research into requirements for personalised discovery, contextual trust signals, protected anonymity, mobile access, and useful filtering.",
      },
      {
        title: "Model the journey",
        detail:
          "We used a travel-journal metaphor, mapped central tasks, and narrowed scope to the flows needed to filter recommendations and write a review.",
      },
      {
        title: "Pilot before evaluating",
        detail:
          "Three pilots exposed script-prototype mismatches, an unclear navigation icon, and hesitation in the review flow. We corrected these issues before the main evaluation.",
      },
      {
        title: "Triangulate behaviour and perception",
        detail:
          "Think-aloud observations captured hesitation and expectation mismatches; a post-task questionnaire captured perceived clarity, workload, and satisfaction.",
      },
    ],
    findings: [
      {
        title: "Filtering was discoverable",
        detail:
          "Responses were consistently positive about finding and applying filters, while open comments asked for clearer options and neighbourhood selection inside the filter flow.",
      },
      {
        title: "Contribution felt familiar",
        detail:
          "Most participants understood the review and save patterns through transfer from products they already used, but icon contrast and rating placement caused occasional friction.",
      },
      {
        title: "The metaphor held up",
        detail:
          "The notebook framing and feeling-based discovery resonated, giving the team confidence to refine the interaction model rather than replace it.",
      },
    ],
    decisions: [
      "Replaced an ambiguous bottom-navigation icon with a labelled Wander Feed destination.",
      "Moved feeling-based controls into the existing Sort & Filter flow to reduce navigation friction.",
      "Clarified the sequence for rating and writing a review after pilot hesitation.",
      "Recommended a price-range control and clearer ownership of system-generated versus user-created tags.",
    ],
    outcome:
      "The evaluation supported the core discovery and contribution flows while identifying focused improvements to navigation, filter clarity, icon visibility, and tag management. The prototype progressed from early sketches to a testable mid-fidelity mobile experience.",
    limitations: [
      "The course report contains inconsistent participant denominators across sections, so this case study intentionally reports patterns rather than disputed counts.",
      "Some sessions used laptops for a mobile-oriented prototype, limiting conclusions about touch ergonomics and natural phone use.",
      "The medium-fidelity prototype was not fully functional, so isolated friction may reflect prototype constraints rather than the intended product.",
    ],
    reflection:
      "The biggest lesson was to prototype less and learn sooner. A narrower vertical slice would have given us more time to refine the highest-risk interactions and collect cleaner evidence on mobile use.",
    hero: {
      src: "/work/neighborhood-notebook/concept-iteration.jpg",
      width: 849,
      height: 1100,
      previewSrc: "/work/neighborhood-notebook/concept-iteration-thumb.jpg",
      previewWidth: 386,
      previewHeight: 500,
      alt: "Neighbourhood Notebook concept evolution from reference designs and early sketches to three mobile prototype screens",
      caption:
        "The concept evolved from reference patterns and Shark Tank sketches into a focused mobile notebook experience.",
    },
    evidence: [
      {
        src: "/work/neighborhood-notebook/filtering-feedback.png",
        width: 720,
        height: 312,
        alt: "Bar chart summarizing questionnaire responses about filtering and sorting",
        caption:
          "Questionnaire results showed positive perceptions of filter discoverability and clarity; qualitative comments identified the next refinements.",
      },
      {
        src: "/work/neighborhood-notebook/review-findings.png",
        width: 826,
        height: 424,
        alt: "Table grouping review and saving feedback into themes with representative participant responses",
        caption:
          "Open-ended feedback was grouped into submission experience, visibility, navigation, and feature-request themes.",
      },
    ],
    links: [
      {
        label: "Open Figma prototype",
        href: "https://www.figma.com/proto/Ewt68oRb8tzPgGn85Pppo4/Neighborhood-Notebook-Mid-fi-Prototype?node-id=15-1489&t=Uc3F0lKNuIxisSzu-1",
      },
      {
        label: "View FigJam process",
        href: "https://www.figma.com/board/A4s6z9bAtC32kaMazsFcft/Notebook-Brainstorm?node-id=0-1&t=u7ahuUML4OH3VFyZ-1",
      },
    ],
  },
  {
    slug: "tenant-town",
    title: "Tenant Town",
    eyebrow: "Mixed-method HCI experiment",
    summary:
      "A controlled study of how navigation structure and device context affect people using a community platform for tenant knowledge and support.",
    context:
      "Preliminary interviews surfaced unclear tenant rights, fragmented information, delayed maintenance, and fear of retaliation. Our team designed a community platform where tenants could share issues, review documents, and learn from one another.",
    problem:
      "A cognitive walkthrough exposed inconsistent paths, terminology confusion, and back-navigation mismatches. We needed evidence about whether a broad menu or a more explicit menu better supported navigation on mobile and desktop.",
    role:
      "I contributed to research framing, prototype design, participant sessions, structured observation, quantitative analysis, thematic analysis, interpretation, and the final research report.",
    timeline: "January - April 2026",
    team: "Five-person CPSC 444 team project",
    methods: [
      "Semi-structured interviews",
      "Cognitive walkthrough",
      "2 x 2 mixed-factorial experiment",
      "Task-based usability testing",
      "Mixed-factorial ANOVA",
      "Affinity-based thematic analysis",
    ],
    tools: ["Figma", "R", "Zoom", "FigJam"],
    researchQuestions: [
      "How does menu design affect performance and navigation efficiency?",
      "How does device type influence usability?",
      "Is there an interaction between menu design and device type?",
    ],
    process: [
      {
        title: "Turn field evidence into a testable decision",
        detail:
          "Early interviews and a walkthrough narrowed the experiment to one unresolved architectural choice: broad categories versus explicit task-oriented navigation.",
      },
      {
        title: "Control the comparison",
        detail:
          "Ten participants were assigned to Menu A or Menu B and completed the same six tasks on mobile and desktop. Device order was counterbalanced.",
      },
      {
        title: "Measure behaviour",
        detail:
          "We recorded completion time, misclicks, and backtracks, then verified counts against recordings and analysed each measure with a mixed-factorial ANOVA.",
      },
      {
        title: "Explain the numbers",
        detail:
          "Post-task discussion and transcripts were affinity-mapped into themes, helping us distinguish navigation performance from task-context preferences.",
      },
    ],
    findings: [
      {
        value: "4x",
        title: "Fewer mobile misclicks with Menu B",
        detail:
          "Menu B averaged 0.8 mobile misclicks versus 3.4 for Menu A. The directional pattern was useful, but not statistically significant with five participants per menu condition.",
      },
      {
        value: "r = .875",
        title: "Misclicks tracked task duration",
        detail:
          "Misclicks and completion time were strongly correlated (p < .001), pointing to discoverability and affordance issues as a major source of delay.",
      },
      {
        value: "9/10",
        title: "Document terminology caused friction",
        detail:
          "Participants struggled to distinguish personal documents from community-shared documents, revealing an architectural problem that labels alone did not solve.",
      },
      {
        value: "8/10",
        title: "People started from Home",
        detail:
          "Home-page bias contributed to errors when content lived in Community or Issue Forum, showing that the landing page shaped navigation expectations.",
      },
    ],
    decisions: [
      "Use Menu B as the stronger baseline across devices while treating the result as directional rather than conclusive.",
      "Redesign the boundary between personal and community documents instead of relying on a label change alone.",
      "Revisit the home page so its content and pathways match where people naturally begin.",
      "Run a larger follow-up with a between-subjects device design to separate device effects from learning effects.",
    ],
    outcome:
      "No main or interaction effect reached statistical significance, but converging behavioural and qualitative evidence supported Menu B as the better next iteration. The study also identified document architecture—not device type—as the clearest design risk.",
    limitations: [
      "N=10 left the experiment underpowered and limited generalizability.",
      "Repeating the same tasks produced a strong second-device learning effect.",
      "Mobile sessions were in person while desktop sessions were remote, adding environmental inconsistency.",
      "A student-aged convenience sample did not represent older renters or people with lower digital literacy.",
      "Manual counts across researchers introduced possible measurement inconsistency.",
    ],
    reflection:
      "This project changed how I interpret non-significant results. The right response was not to claim that the menus were equivalent; it was to qualify the evidence, triangulate it with participant behaviour, and design a follow-up that addresses the confounds.",
    hero: {
      src: "/work/tenant-town/menu-b-home.png",
      width: 514,
      height: 321,
      alt: "Tenant Town Menu B desktop home page with five explicit navigation destinations",
      caption:
        "Menu B surfaced explicit destinations for personal documents, community review, issue discussion, and resources.",
    },
    evidence: [
      {
        src: "/work/tenant-town/menu-a-home.png",
        width: 626,
        height: 391,
        alt: "Tenant Town Menu A desktop home page with four broad navigation categories",
        caption:
          "Menu A grouped content under four broad categories and relied more heavily on indirect paths.",
      },
      {
        src: "/work/tenant-town/duration-interaction.png",
        width: 499,
        height: 350,
        alt: "Interaction plot of average task duration by menu and device",
        caption:
          "Directional duration trends favoured Menu B, particularly on mobile, but confidence intervals were wide.",
      },
      {
        src: "/work/tenant-town/duration-boxplot.png",
        width: 790,
        height: 555,
        alt: "Box plots comparing task duration for Menu A and Menu B on mobile and desktop",
        caption:
          "The distributions show the high variance that limited statistical power, especially in Menu A conditions.",
      },
    ],
    links: [
      {
        label: "View thematic analysis board",
        href: "https://www.figma.com/board/yQ3iWyCezc0pSmtarLy0vL/CPSC-444-Thematic-Analysis?node-id=113-299&p=f&t=7HMAVxWVmzZ4xL8a-0",
      },
    ],
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((study) => study.slug === slug);
