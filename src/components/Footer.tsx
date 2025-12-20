import { Heart, Code2 } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="font-mono font-bold text-primary-foreground text-sm">SG</span>
            </div>
            <span className="font-display font-semibold">
              <span className="text-foreground">Sayali</span>
              <span className="text-gradient"> Gurav</span>
            </span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} Sayali Gurav - Building ideas into reality.
          </p>

          {/* Back to top */}
          <a
            href="#home"
            className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
          >
            ↑ Back to top
          </a>
        </div>
      </div>
    </footer>
  );
};
