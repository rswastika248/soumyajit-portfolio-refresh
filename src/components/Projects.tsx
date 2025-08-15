import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React frontend and Node.js backend. Features include user authentication, product catalog, shopping cart, and payment integration.",
      image: "🛒",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "📋",
      technologies: ["TypeScript", "React", "Socket.io", "PostgreSQL", "Express"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application that provides current weather data, forecasts, and interactive maps using external weather APIs.",
      image: "🌤️",
      technologies: ["JavaScript", "React", "Weather API", "Chart.js", "CSS3"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and TypeScript, featuring smooth animations and optimized performance.",
      image: "💼",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Chat Application",
      description: "Real-time chat application with multiple rooms, user authentication, and file sharing capabilities.",
      image: "💬",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB", "JWT"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Expense Tracker",
      description: "Personal finance management app with budget tracking, expense categorization, and visual analytics.",
      image: "💰",
      technologies: ["React", "Chart.js", "Local Storage", "Material-UI"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work and the solutions I've built
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Featured Projects */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-center">Featured Projects</h3>
            <div className="grid md:grid-cols-2 gap-8 stagger-children">
              {featuredProjects.map((project, index) => (
                <Card key={project.title} className="card-elegant h-full">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-4xl">{project.image}</div>
                      <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Button>
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <Github className="h-4 w-4" />
                        Source Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Other Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
              {otherProjects.map((project, index) => (
                <Card key={project.title} className="card-elegant h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-2xl">{project.image}</div>
                      <CardTitle className="text-lg text-primary">{project.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex items-center gap-2 text-xs">
                        <ExternalLink className="h-3 w-3" />
                        Demo
                      </Button>
                      <Button variant="outline" size="sm" className="flex items-center gap-2 text-xs">
                        <Github className="h-3 w-3" />
                        Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
