import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react';

export const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Computer Science Engineer';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden cyber-grid"
    >
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal-style intro */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-glow-success animate-pulse" />
            <span className="font-mono text-sm text-muted-foreground">Available for opportunities</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-gradient">Sayali Gurav</span>
          </h1>

          {/* Typing effect subtitle */}
          <div className="h-12 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="font-mono text-xl sm:text-2xl text-muted-foreground">
              {'> '}
              <span className="text-primary">{typedText}</span>
              <span className="animate-pulse">|</span>
            </p>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            B.Tech student passionate about building innovative solutions, 
            exploring cutting-edge technologies, and creating impactful software.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button variant="glow" size="xl" asChild>
              <a
                href="/Sayali_Gurav_Resume.pdf"
                download="/Sayali_Gurav_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="w-5 h-5" />
                Download Resume
              </a>
            </Button>


            <Button variant="outline" size="xl" asChild>
              <a href="#projects">View My Work</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            {[
              { icon: Github, href: 'https://github.com/sayaligurav7789', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/sayali-gurav-9a3a302a5', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:sayligurab7789@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="group p-3 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                aria-label={label}
              >
                <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-10 flex justify-center animate-bounce">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm font-mono">Scroll</span>
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
};
