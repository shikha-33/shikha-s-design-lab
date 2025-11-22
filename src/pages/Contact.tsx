import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Contact Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="text-center animate-fade-in-up">
            <div className="inline-block mb-6 px-6 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-primary">Get in Touch</span>
            </div>
            <h1 className="mb-6 text-foreground">Let's Connect</h1>
            <p className="mb-12 text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in discussing HCI research, AI in education, and collaboration opportunities. Feel free to reach out!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="btn-primary min-w-[200px]"
              >
                <a href="mailto:shikha2022rajesh@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Me
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground min-w-[200px]"
              >
                <a
                  href="https://www.linkedin.com/in/shikha-rajesh-/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <a
              href="mailto:shikha2022rajesh@gmail.com"
              className="card-interactive group rounded-xl bg-card p-8 text-center border border-border"
            >
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                Email
              </h3>
              <p className="text-sm text-muted-foreground">
                shikha2022rajesh@gmail.com
              </p>
            </a>
            
            <a
              href="https://www.linkedin.com/in/shikha-rajesh-/"
              target="_blank"
              rel="noopener noreferrer"
              className="card-interactive group rounded-xl bg-card p-8 text-center border border-border"
            >
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Linkedin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                LinkedIn
              </h3>
              <p className="text-sm text-muted-foreground">
                Connect with me professionally
              </p>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
