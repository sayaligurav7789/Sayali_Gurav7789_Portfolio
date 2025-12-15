import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX, Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { useSound } from '@/hooks/useSound';
import myPhoto from "@/assets/myself.jpg";


const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { isMuted, toggleMute } = useSound();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass-strong py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center glow-primary transition-all duration-300 group-hover:scale-110 overflow-hidden border-2 border-primary/50">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary/50 glow-primary">
              <img
                src={myPhoto}
                alt="Logo"
                className="w-full h-full object-cover scale-125"
              />
            </div>
          </div>
          <span className="font-display font-bold text-xl hidden sm:block">
            <span className="text-foreground">Sayali</span>
            <span className="text-gradient"> Gurav</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <Button
            variant="icon"
            size="icon"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="icon"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 glass-strong transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 rounded-lg transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
