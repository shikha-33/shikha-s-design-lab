import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Skills = () => {
    const skillSections = [
        {
            title: "Product & UX Skills",
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
            gradient: "from-blue-600/20 to-purple-600/20",
            iconGradient: "from-blue-500 to-purple-500",
        },
        {
            title: "Data & Analytics Skills",
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
            gradient: "from-emerald-600/20 to-teal-600/20",
            iconGradient: "from-emerald-500 to-teal-500",
        },
        {
            title: "Strategy & Leadership Skills",
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
            gradient: "from-orange-600/20 to-red-600/20",
            iconGradient: "from-orange-500 to-red-500",
        },
    ];

    return (
        <div className="min-h-screen bg-background overflow-hidden">
            <Header />

            <section className="section-padding relative">
                {/* Floating Background Elements */}
                <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-[80px] animate-float-slow pointer-events-none"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] animate-float-slow pointer-events-none" style={{ animationDelay: "2s" }}></div>

                <div className="container mx-auto max-w-6xl px-6 relative z-10">
                    <div className="mb-16 text-center">
                        <h1 className="mb-4 text-foreground animate-fade-in-up">Skills & Expertise</h1>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                            A comprehensive overview of my technical and strategic capabilities across design, data, and leadership.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {skillSections.map((section, index) => (
                            <div
                                key={index}
                                className="glass-card rounded-2xl p-8 border border-border/50 relative overflow-hidden group hover-lift animate-fade-in-up"
                                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                            >
                                {/* Hover Gradient Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                <div className="relative z-10">
                                    {/* Abstract Icon Placeholder */}
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${section.iconGradient} mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                                        <div className="w-8 h-8 bg-white/20 rounded-full backdrop-blur-md"></div>
                                    </div>

                                    <h3 className="mb-6 text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                                        {section.title}
                                    </h3>

                                    <ul className="space-y-3">
                                        {section.skills.map((skill, skillIndex) => (
                                            <li key={skillIndex} className="flex items-start text-muted-foreground group-hover:text-foreground/90 transition-colors">
                                                <span className={`mt-1.5 mr-3 h-1.5 w-1.5 rounded-full bg-gradient-to-r ${section.iconGradient} flex-shrink-0`}></span>
                                                <span className="text-sm leading-relaxed">{skill}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Skills;
