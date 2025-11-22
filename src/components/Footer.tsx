const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Shikha Rajesh. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="mailto:shikha2022rajesh@gmail.com"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/shikha-rajesh-/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
