import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Smartphone, Globe, Award, Coffee } from 'lucide-react';
import profileImage from '@/assets/profile-image.jpg';
import AnimatedSection from '@/components/AnimatedSection';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey, skills, and passion for development
          </p>
        </AnimatedSection>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <AnimatedSection delay={0.2}>
              <div className="flex justify-center lg:justify-start">
                <div className="relative group">
                  <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-2 group-hover:shadow-3xl">
                    <img 
                      src={profileImage} 
                      alt="Swastika Roy - Software Developer"
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-110"
                    />
                    {/* Overlay effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Glowing border effect */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/50 transition-all duration-500"></div>
                  </div>
                  
                  {/* Animated background elements */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 hero-gradient rounded-full opacity-20 blur-xl group-hover:opacity-40 group-hover:scale-125 transition-all duration-500"></div>
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/20 rounded-full blur-lg group-hover:bg-primary/40 group-hover:scale-150 transition-all duration-500"></div>
                  
                  {/* Floating particles effect */}
                  <div className="absolute top-10 right-10 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500" style={{ animationDelay: '0.1s' }}></div>
                  <div className="absolute bottom-16 left-8 w-1.5 h-1.5 bg-primary/70 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500" style={{ animationDelay: '0.3s' }}></div>
                  <div className="absolute top-20 left-12 w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500" style={{ animationDelay: '0.5s' }}></div>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            {/* About Content */}
            <AnimatedSection delay={0.4}>
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-3xl font-bold text-primary">Software Developer</h3>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      Available for Projects
                    </Badge>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    I'm a passionate Software Developer currently working at <strong className="text-foreground">Chetu, Inc.</strong> with over 
                    6 years of experience in building robust, scalable applications. My journey in technology 
                    started with a curiosity about how things work behind the scenes, which led me to pursue 
                    software development.
                  </p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Based in <strong className="text-foreground">Hyderabad</strong>, I specialize in full-stack development and have a strong background 
                    in modern web technologies. I believe in writing clean, maintainable code and staying 
                    updated with the latest industry trends and best practices.
                  </p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    When I'm not coding, you'll find me exploring new technologies, contributing to open source 
                    projects, or sharing knowledge with the developer community. I'm always eager to take on 
                    new challenges and collaborate on exciting projects.
                  </p>
                </div>

                {/* Specializations */}
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-foreground">What I Do Best</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border hover:border-primary/30 transition-colors duration-200">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Code className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Full-Stack Development</div>
                        <div className="text-sm text-muted-foreground">End-to-end solutions</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border hover:border-primary/30 transition-colors duration-200">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Globe className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Web Applications</div>
                        <div className="text-sm text-muted-foreground">Modern & responsive</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border hover:border-primary/30 transition-colors duration-200">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Database className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Database Design</div>
                        <div className="text-sm text-muted-foreground">Scalable architecture</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border hover:border-primary/30 transition-colors duration-200">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Smartphone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Mobile-First Design</div>
                        <div className="text-sm text-muted-foreground">Cross-platform apps</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Stats Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Card className="card-elegant group hover:scale-105 transition-transform duration-200">
                    <CardContent className="p-6 text-center">
                      <Award className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
                      <div className="text-3xl font-bold text-primary mb-2">6+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </CardContent>
                  </Card>
                  
                  <Card className="card-elegant group hover:scale-105 transition-transform duration-200">
                    <CardContent className="p-6 text-center">
                      <Code className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
                      <div className="text-3xl font-bold text-primary mb-2">50+</div>
                      <div className="text-sm text-muted-foreground">Projects Done</div>
                    </CardContent>
                  </Card>
                  
                  <Card className="card-elegant group hover:scale-105 transition-transform duration-200">
                    <CardContent className="p-6 text-center">
                      <Globe className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
                      <div className="text-3xl font-bold text-primary mb-2">15+</div>
                      <div className="text-sm text-muted-foreground">Technologies</div>
                    </CardContent>
                  </Card>
                  
                  <Card className="card-elegant group hover:scale-105 transition-transform duration-200">
                    <CardContent className="p-6 text-center">
                      <Coffee className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
                      <div className="text-3xl font-bold text-primary mb-2">∞</div>
                      <div className="text-sm text-muted-foreground">Coffee Cups</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;