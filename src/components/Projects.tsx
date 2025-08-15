import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import ecommerceProject from '@/assets/ecommerce-project.jpg';
import taskManagementProject from '@/assets/task-management-project.jpg';
import weatherDashboardProject from '@/assets/weather-dashboard-project.jpg';
import portfolioProject from '@/assets/portfolio-project.jpg';
import chatAppProject from '@/assets/chat-app-project.jpg';
import expenseTrackerProject from '@/assets/expense-tracker-project.jpg';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A comprehensive full-stack e-commerce solution built with modern technologies. Features secure user authentication, dynamic product catalog with advanced filtering, real-time shopping cart updates, integrated payment processing with Stripe, order management system, and responsive design for seamless shopping across all devices.",
      image: ecommerceProject,
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS", "Express", "JWT"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Full Stack"
    },
    {
      title: "Task Management App",
      description: "A sophisticated collaborative task management platform designed for modern teams. Features drag-and-drop kanban boards, real-time collaboration with Socket.io, advanced filtering and search capabilities, team member assignment, deadline tracking, project analytics, and notification system for enhanced productivity.",
      image: taskManagementProject,
      technologies: ["TypeScript", "React", "Socket.io", "PostgreSQL", "Express", "Redis", "Material-UI"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Web Application"
    },
    {
      title: "Weather Dashboard",
      description: "An intelligent weather forecasting application providing comprehensive meteorological data. Features current weather conditions, 7-day forecasts, interactive weather maps, historical data analysis, weather alerts and notifications, location-based services, and beautiful data visualizations using Chart.js.",
      image: weatherDashboardProject,
      technologies: ["JavaScript", "React", "Weather API", "Chart.js", "CSS3", "Geolocation API"],
      liveUrl: "#",
      githubUrl: "#",
      category: "API Integration"
    },
    {
      title: "Portfolio Website",
      description: "A cutting-edge portfolio website showcasing modern web development practices. Built with React and TypeScript, featuring smooth animations powered by Framer Motion, responsive design, dark/light theme support, contact form integration, SEO optimization, and performance optimization for lightning-fast loading.",
      image: portfolioProject,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite", "React Router"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Frontend"
    },
    {
      title: "Chat Application",
      description: "A feature-rich real-time messaging platform designed for seamless communication. Includes multiple chat rooms, private messaging, file sharing capabilities, emoji reactions, user authentication with JWT, message encryption, typing indicators, online status tracking, and mobile-responsive design.",
      image: chatAppProject,
      technologies: ["React", "Socket.io", "Node.js", "MongoDB", "JWT", "Multer", "Cloudinary"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Real-time App"
    },
    {
      title: "Expense Tracker",
      description: "A comprehensive personal finance management application for tracking expenses and budgets. Features expense categorization, budget goal setting, visual analytics with interactive charts, recurring transaction support, financial insights, export functionality, and secure data storage for financial peace of mind.",
      image: expenseTrackerProject,
      technologies: ["React", "Chart.js", "Local Storage", "Material-UI", "Date-fns", "React Hook Form"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Finance App"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-background via-background to-background/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--primary)_0%,_transparent_50%)] opacity-5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--primary)_0%,_transparent_50%)] opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
              &lt;/Projects&gt;
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore my portfolio of innovative solutions, each crafted with passion and cutting-edge technologies
            </p>
            <div className="mt-6 flex items-center justify-center gap-2">
              <div className="h-1 w-12 bg-primary rounded-full"></div>
              <div className="h-1 w-6 bg-primary/50 rounded-full"></div>
              <div className="h-1 w-3 bg-primary/25 rounded-full"></div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <div key={project.title} className="group relative">
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden h-full hover:shadow-2xl hover:shadow-primary/10">
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />
                    
                    {/* Overlay Effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    
                    {/* Shine Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground leading-relaxed text-sm line-clamp-3">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    
                    {/* Technologies */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="secondary" 
                            className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-300 text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge variant="secondary" className="bg-muted text-muted-foreground text-xs">
                            +{project.technologies.length - 4}
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button 
                        variant="default" 
                        size="sm"
                        className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground group/btn"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3 mr-2 group-hover/btn:scale-110 transition-transform duration-200" />
                          Live Demo
                        </a>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="flex-1 border-primary/30 hover:border-primary hover:bg-primary/10 group/btn"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-3 w-3 mr-2 group-hover/btn:scale-110 transition-transform duration-200" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects;
