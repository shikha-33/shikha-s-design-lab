import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

const ContactSection = () => {
    return (
        <section id="contact" className="section-padding relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"></div>

            <div className="container mx-auto max-w-4xl px-6">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Let's Work Together</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and ideas.
                    </p>
                </div>

                <div className="glass-panel rounded-2xl p-8 md:p-12 animate-fade-in-up delay-100">
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                                <Input id="name" placeholder="John Doe" className="bg-background/50 border-border/50 focus:border-primary/50 transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                                <Input id="email" type="email" placeholder="john@example.com" className="bg-background/50 border-border/50 focus:border-primary/50 transition-all" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                            <Textarea id="message" placeholder="Tell me about your project..." className="min-h-[150px] bg-background/50 border-border/50 focus:border-primary/50 transition-all" />
                        </div>
                        <Button size="lg" className="w-full md:w-auto rounded-full px-8 btn-primary group">
                            Send Message
                            <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
