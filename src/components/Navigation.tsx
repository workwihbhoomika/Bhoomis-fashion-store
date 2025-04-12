
import { useState, useEffect } from "react";
import { Menu, X, Instagram, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="text-2xl font-serif font-medium tracking-tight">
          STYLE SAGA
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="#collections">Collections</NavLink>
          <NavLink href="#reels">Reels</NavLink>
          <NavLink href="#about">About</NavLink>
          <div className="flex items-center space-x-4 ml-4">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-fashion-dark hover:text-fashion-accent transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-fashion-dark hover:text-fashion-accent transition-colors"
            >
              <Youtube size={20} />
            </a>
          </div>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-fashion-dark" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white pt-20 px-6 z-40 transform transition-transform duration-300 md:hidden",
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="flex flex-col space-y-6 text-center">
          <MobileNavLink href="#collections" onClick={() => setIsMenuOpen(false)}>
            Collections
          </MobileNavLink>
          <MobileNavLink href="#reels" onClick={() => setIsMenuOpen(false)}>
            Reels
          </MobileNavLink>
          <MobileNavLink href="#about" onClick={() => setIsMenuOpen(false)}>
            About
          </MobileNavLink>
          <div className="flex items-center justify-center space-x-6 pt-4">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-fashion-dark hover:text-fashion-accent transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-fashion-dark hover:text-fashion-accent transition-colors"
            >
              <Youtube size={24} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href}
    className="text-sm font-medium text-fashion-dark hover:text-fashion-accent animated-link"
  >
    {children}
  </a>
);

const MobileNavLink = ({ 
  href, 
  onClick, 
  children 
}: { 
  href: string; 
  onClick: () => void;
  children: React.ReactNode 
}) => (
  <a 
    href={href}
    onClick={onClick}
    className="text-xl font-medium text-fashion-dark hover:text-fashion-accent py-2"
  >
    {children}
  </a>
);

export default Navigation;
