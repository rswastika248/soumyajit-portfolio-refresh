import { Card, CardContent } from '@/components/ui/card';
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
                <div className="relative">
                  <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    <img 
                      src={profileImage} 
                      alt="Soumyajit Banerjee - Software Developer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 hero-gradient rounded-full opacity-20 blur-xl"></div>
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/20 rounded-full blur-lg"></div>
                </div>
              </div>
            </AnimatedSection>
            
            {/* About Content */}
            <AnimatedSection delay={0.4}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Software Developer</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    I'm a passionate Software Developer currently working at <strong>Chetu, Inc.</strong> with over 
                    6 years of experience in building robust, scalable applications. My journey in technology 
                    started with a curiosity about how things work behind the scenes, which led me to pursue 
                    software development.
                  </p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Based in Hyderabad, I specialize in full-stack development and have a strong background 
                    in modern web technologies. I believe in writing clean, maintainable code and staying 
                    updated with the latest industry trends and best practices.
                  </p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    When I'm not coding, you'll find me exploring new technologies, contributing to open source 
                    projects, or sharing knowledge with the developer community. I'm always eager to take on 
                    new challenges and collaborate on exciting projects.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <Card className="card-elegant">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-primary mb-2">6+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </CardContent>
                  </Card>
                  
                  <Card className="card-elegant">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-primary mb-2">50+</div>
                      <div className="text-sm text-muted-foreground">Projects Completed</div>
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