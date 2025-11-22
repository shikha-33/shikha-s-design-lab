interface RoleCardProps {
  title: string;
  organization: string;
  description: string;
}

const RoleCard = ({ title, organization, description }: RoleCardProps) => {
  return (
    <div className="glass-card group rounded-xl p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10">
        <div className="mb-2">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-primary font-medium">{organization}</p>
        </div>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default RoleCard;
