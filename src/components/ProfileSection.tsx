import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const ProfileSection = () => {
    return (
        <section className="relative min-h-[10vh] flex items-center justify-center overflow-hidden pt-10 md:pt-14 lg:pt-16 pb-20 md:pb-28 lg:pb-32">
            <div className="container relative z-10 px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-8 animate-fade-in-up">
                        <div className="space-y-4">
                            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
                                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                                Available for new projects
                            </div>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
                                Human-Computer <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                                    Interaction Researcher
                                </span>
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                                I'm a third-year B.Sc. student in Combined Majors in Sciences at UBC, working at the intersection of HCI, AI-in-education, and applied data analytics.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Button asChild size="lg" className="rounded-full px-8 text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300">
                                <NavLink to="/projects">
                                    View Projects <ArrowRight className="ml-2 h-4 w-4" />
                                </NavLink>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="rounded-full px-8 text-base border-primary/20 hover:bg-primary/5 backdrop-blur-sm">
                                <NavLink to="/contact">Contact Me</NavLink>
                            </Button>
                        </div>

                        <div className="flex items-center gap-6 pt-4">

                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 duration-200">
                                <Linkedin className="h-6 w-6" />
                            </a>
                            <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 duration-200">
                                <Mail className="h-6 w-6" />
                            </a>
                        </div>
                    </div>

                    {/* Profile Image / Visual */}
                    <div className="relative lg:h-[600px] flex items-center justify-center animate-fade-in delay-200">
                        {/* Decorative circles */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-pulse-soft"></div>

                        <div className="relative w-80 h-80 md:w-96 md:h-96 animate-float-slow">
                            {/* Glass card container */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-[2rem] rotate-6 backdrop-blur-sm border border-white/10"></div>
                            <div className="absolute inset-0 bg-card/30 rounded-[2rem] -rotate-6 backdrop-blur-md border border-white/10 shadow-2xl transition-transform duration-500 hover:rotate-0 hover:scale-105"></div>

                            {/* Image placeholder */}
                            <div className="absolute inset-4 rounded-[1.5rem] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center group shadow-inner">
                                <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors duration-500"></div>

                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <p className="text-white font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Product Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileSection;
