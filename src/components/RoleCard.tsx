interface RoleCardProps {
  title: string;
  organization: string;
  description: string;
}

const RoleCard = ({ title, organization, description }: RoleCardProps) => {
  return (
    <div className="card-interactive group rounded-xl bg-card p-8 border border-border">
      <div className="mb-2">
        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-primary font-medium">{organization}</p>
      </div>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export default RoleCard;
