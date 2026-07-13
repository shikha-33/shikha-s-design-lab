const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Shikha Rajesh. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="/work" className="footer-link">Work</a>
            <a href="/Shikha_Rajesh_WTAP_Resume.pdf" className="footer-link" download>Résumé</a>
            <a
              href="mailto:shikha2022rajesh@gmail.com"
              className="footer-link"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/shikha-rajesh-/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
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
