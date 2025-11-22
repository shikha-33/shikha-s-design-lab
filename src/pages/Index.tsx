import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero/About Section */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="animate-fade-in-up">
            {/* Profile Picture Placeholder */}
            <div className="flex justify-center mb-12">
              <div className="relative">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary via-primary/80 to-[hsl(220_60%_35%)] flex items-center justify-center shadow-xl border-4 border-background">
                  <div className="w-40 h-40 rounded-full bg-background/10 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-6xl text-primary-foreground font-semibold">SR</div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="mb-6 text-foreground text-center">
              Human-Computer Interaction Researcher & Designer
            </h1>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a third-year B.Sc. student in Integrated Sciences (Computer Science + Data Science) at the University of British Columbia, working at the intersection of Human-Computer Interaction, AI-in-education, and curriculum design.
              </p>
              <p>
                My research focus centers on understanding how automation reshapes learning behaviors and designing AI-integrated learning experiences that preserve critical thinking and skill development. I'm particularly interested in creating AI literacy materials, resilient workflows, and clear instructional structures that help students navigate increasingly AI-mediated educational environments.
              </p>
              <p>
                Through coursework in CPSC 344 (Introduction to Human-Computer Interaction), STAT 300/302 (Intermediate Statistics), and upcoming classes in CPSC 444 (Advanced HCI), CPSC 304 (Databases), CPSC 330 (Applied Machine Learning), and DSCI 310 (Reproducible Data Science), I've developed a foundation that blends UX research, qualitative analysis, prototyping, and communication design with technical depth in data science and machine learning.
              </p>
              <p>
                What drives my work is a student perspective on how AI tools impact actual workflows, motivation, and learning patterns. I combine strong communication and documentation skills with cross-functional collaboration experience to explore questions around AI-invariant assessment design, skill-preserving automation, and educational technology that enhances rather than replaces human learning.
              </p>
              <p>
                I'm actively seeking opportunities to contribute to HCI research labs, educational technology projects, and teams working on responsible AI integration in learning environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <a
              href="/projects"
              className="card-interactive group rounded-xl bg-card p-8 text-center"
            >
              <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                View Projects
              </h3>
              <p className="text-sm text-muted-foreground">
                Explore my HCI, UX, and data science work
              </p>
            </a>
            <a
              href="/roles"
              className="card-interactive group rounded-xl bg-card p-8 text-center"
            >
              <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                Roles & Leadership
              </h3>
              <p className="text-sm text-muted-foreground">
                My campus leadership experience
              </p>
            </a>
            <a
              href="#contact"
              className="card-interactive group rounded-xl bg-card p-8 text-center"
            >
              <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                Get in Touch
              </h3>
              <p className="text-sm text-muted-foreground">
                Let's connect and collaborate
              </p>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
