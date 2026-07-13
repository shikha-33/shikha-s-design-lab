import { Download, Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();
  const navItems = [
    { name: "Work", path: "/work" },
    { name: "About", path: "/#about" },
    { name: "Experience", path: "/#experience" },
    { name: "Contact", path: "/#contact" },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="site-name" onClick={closeMenu}>
          Shikha Rajesh
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className={location.pathname === item.path ? "nav-link nav-link-active" : "nav-link"}
            >
              {item.name}
            </a>
          ))}
          <a className="resume-link" href="/Shikha_Rajesh_WTAP_Resume.pdf" download>
            Résumé <Download aria-hidden="true" />
          </a>
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-menu md:hidden">
          <nav className="container mx-auto flex flex-col gap-1 px-6 py-4" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="mobile-nav-link"
                onClick={closeMenu}
              >
                {item.name}
              </a>
            ))}
            <a className="mobile-nav-link" href="/Shikha_Rajesh_WTAP_Resume.pdf" download onClick={closeMenu}>
              Download résumé
            </a>
            <div className="pt-3">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
