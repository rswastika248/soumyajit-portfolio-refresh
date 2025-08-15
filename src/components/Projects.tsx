import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
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
      description: "A comprehensive full-stack e-commerce solution built with modern technologies. Features include secure user authentication, dynamic product catalog with advanced filtering, real-time shopping cart updates, integrated payment processing with Stripe, order management system, and responsive design for seamless shopping across all devices.",
      image: ecommerceProject,
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS", "Express", "JWT"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Full Stack",
      duration: "3 months",
      highlights: ["Secure Payment Integration", "Real-time Cart Updates", "Admin Dashboard", "Mobile Responsive"]
    },
    {
      title: "Task Management App",
      description: "A sophisticated collaborative task management platform designed for modern teams. Features drag-and-drop kanban boards, real-time collaboration with Socket.io, advanced filtering and search capabilities, team member assignment, deadline tracking, project analytics, and notification system for enhanced productivity.",
      image: taskManagementProject,
      technologies: ["TypeScript", "React", "Socket.io", "PostgreSQL", "Express", "Redis", "Material-UI"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Web Application",
      duration: "4 months",
      highlights: ["Real-time Collaboration", "Drag & Drop Interface", "Team Analytics", "Custom Workflows"]
    },
    {
      title: "Weather Dashboard",
      description: "An intelligent weather forecasting application providing comprehensive meteorological data. Features current weather conditions, 7-day forecasts, interactive weather maps, historical data analysis, weather alerts and notifications, location-based services, and beautiful data visualizations using Chart.js.",
      image: weatherDashboardProject,
      technologies: ["JavaScript", "React", "Weather API", "Chart.js", "CSS3", "Geolocation API"],
      liveUrl: "#",
      githubUrl: "#",
      category: "API Integration",
      duration: "2 months",
      highlights: ["Interactive Maps", "Real-time Data", "Weather Alerts", "Historical Analysis"]
    },
    {
      title: "Portfolio Website",
      description: "A cutting-edge portfolio website showcasing modern web development practices. Built with React and TypeScript, featuring smooth animations powered by Framer Motion, responsive design, dark/light theme support, contact form integration, SEO optimization, and performance optimization for lightning-fast loading.",
      image: portfolioProject,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite", "React Router"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Frontend",
      duration: "1 month",
      highlights: ["Smooth Animations", "Theme Support", "SEO Optimized", "Performance Focused"]
    },
    {
      title: "Chat Application",
      description: "A feature-rich real-time messaging platform designed for seamless communication. Includes multiple chat rooms, private messaging, file sharing capabilities, emoji reactions, user authentication with JWT, message encryption, typing indicators, online status tracking, and mobile-responsive design.",
      image: chatAppProject,
      technologies: ["React", "Socket.io", "Node.js", "MongoDB", "JWT", "Multer", "Cloudinary"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Real-time App",
      duration: "3 months",
      highlights: ["Real-time Messaging", "File Sharing", "Private Rooms", "Message Encryption"]
    },
    {
      title: "Expense Tracker",
      description: "A comprehensive personal finance management application for tracking expenses and budgets. Features expense categorization, budget goal setting, visual analytics with interactive charts, recurring transaction support, financial insights, export functionality, and secure data storage for financial peace of mind.",
      image: expenseTrackerProject,
      technologies: ["React", "Chart.js", "Local Storage", "Material-UI", "Date-fns", "React Hook Form"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Finance App",
      duration: "2 months",
      highlights: ["Budget Tracking", "Visual Analytics", "Category Management", "Export Features"]
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
              Featured Projects
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
          <div className="max-w-7xl mx-auto">
            <Carousel className="w-full" opts={{ align: "start", loop: true }}>
              <CarouselContent className="-ml-4">
                {projects.map((project, index) => (
                  <CarouselItem key={project.title} className="pl-4 md:basis-1/1 lg:basis-1/1">
                    <div className="group relative">
                      <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden h-full">
                        <div className="relative">
                          {/* Project Image with Effects */}
                          <div className="relative h-80 overflow-hidden">
                            <img 
                              src={project.image} 
                              alt={project.title}
                              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                            />
                            {/* Overlay Effects */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            {/* Floating Elements */}
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                              <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                                {project.category}
                              </Badge>
                            </div>
                            
                            {/* Shine Effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
                            </div>
                            
                            {/* Project Duration */}
                            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                              <div className="bg-background/80 backdrop-blur-sm rounded-full px-3 py-1 text-sm text-muted-foreground">
                                {project.duration}
                              </div>
                            </div>
                          </div>
                          
                          <CardContent className="p-8">
                            <CardHeader className="p-0 mb-6">
                              <CardTitle className="text-2xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors duration-300">
                                {project.title}
                              </CardTitle>
                              <p className="text-muted-foreground leading-relaxed text-base">
                                {project.description}
                              </p>
                            </CardHeader>
                            
                            {/* Highlights */}
                            <div className="mb-6">
                              <h4 className="text-sm font-semibold text-foreground mb-3">Key Features</h4>
                              <div className="grid grid-cols-2 gap-2">
                                {project.highlights.map((highlight, idx) => (
                                  <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <ArrowRight className="h-3 w-3 text-primary" />
                                    {highlight}
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            {/* Technologies */}
                            <div className="mb-8">
                              <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                  <Badge 
                                    key={tech} 
                                    variant="secondary" 
                                    className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                                  >
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            
                            {/* Action Buttons */}
                            <div className="flex gap-4">
                              <Button 
                                variant="default" 
                                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground group/btn"
                              >
                                <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform duration-200" />
                                Live Demo
                              </Button>
                              <Button 
                                variant="outline" 
                                className="flex-1 border-primary/30 hover:border-primary hover:bg-primary/10 group/btn"
                              >
                                <Github className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform duration-200" />
                                Source Code
                              </Button>
                            </div>
                          </CardContent>
                        </div>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <CarouselPrevious className="static translate-y-0 bg-primary/10 border-primary/20 hover:bg-primary hover:text-primary-foreground" />
                <div className="text-sm text-muted-foreground">
                  Scroll to explore more projects
                </div>
                <CarouselNext className="static translate-y-0 bg-primary/10 border-primary/20 hover:bg-primary hover:text-primary-foreground" />
              </div>
            </Carousel>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects;
