import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import TypingEffect from '@/components/TypingEffect';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 rounded-full hero-gradient opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 rounded-full hero-gradient opacity-20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="block text-foreground">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Swastika Roy
              </span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <div className="mb-8 max-w-2xl mx-auto h-16 flex items-center justify-center">
              <TypingEffect />
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.4}>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Passionate about creating efficient, scalable applications and exploring the latest in web development.
              With expertise in full-stack development, I turn ideas into reality.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('#contact')}
                className="hero-gradient text-white hover:scale-105 transition-transform duration-200"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="hover:scale-105 transition-transform duration-200"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.8}>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://github.com/soumyajit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/soumyajit-banerjee-220289115" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:soumyajit@example.com"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
              >
                <Mail size={24} />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;