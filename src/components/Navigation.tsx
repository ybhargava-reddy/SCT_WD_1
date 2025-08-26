import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Gamepad2 } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Games', href: '#games' },
    { label: 'Tournaments', href: '#tournaments' },
    { label: 'Community', href: '#community' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'nav-solid' : 'nav-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Gamepad2 className="h-8 w-8 text-primary" />
              <div className="absolute inset-0 h-8 w-8 text-primary animate-glow-pulse opacity-50" />
            </div>
            <div className="text-xl font-bold">
              <span className="text-primary text-glow">PPI</span>
              <span className="text-foreground ml-1">Gaming</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="relative text-foreground hover:text-primary transition-all duration-300 gaming-hover py-2 px-3 rounded-lg group"
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <Button 
              variant="outline" 
              className="gaming-hover border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Play Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors duration-300"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-card/95 backdrop-blur-lg border-t border-primary/20">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-foreground hover:text-primary transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-primary/10"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                variant="outline" 
                className="w-full mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Play Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;