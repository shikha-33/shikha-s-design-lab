import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  summary: string;
  tools: string[];
  contributions: string[];
  link?: string;
  linkText?: string;
  category: string;
}

const ProjectCard = ({
  title,
  summary,
  tools,
  contributions,
  link,
  linkText = "View Project",
  category,
}: ProjectCardProps) => {
  return (
    <div className="glass-card group rounded-xl p-8 relative overflow-hidden hover-lift">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10">
        <div className="mb-3">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {category}
          </span>
        </div>
        <h3 className="mb-4 text-2xl font-semibold text-foreground">{title}</h3>
        <p className="mb-6 text-muted-foreground leading-relaxed">{summary}</p>

        <div className="mb-6">
          <h4 className="mb-2 text-sm font-semibold text-foreground">Tools & Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="rounded-md bg-muted px-3 py-1 text-xs text-muted-foreground"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="mb-2 text-sm font-semibold text-foreground">Key Contributions:</h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
            {contributions.map((contribution, index) => (
              <li key={index}>{contribution}</li>
            ))}
          </ul>
        </div>

        {link && (
          <Button
            asChild
            className="btn-primary w-full"
          >
            <a href={link} target="_blank" rel="noopener noreferrer">
              {linkText}
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
