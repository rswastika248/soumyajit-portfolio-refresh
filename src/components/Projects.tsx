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
      title: "Medicon",
      description: "A smart healthcare solution integrating real-time emergency detection, doctor-patient communication, and health monitoring—bringing care closer, faster, and smarter.",
      image: ecommerceProject,
      technologies: ["React", "Node.js", "MongoDB", "WebRTC", "Socket.io", "Express", "JWT"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Healthcare"
    },
    {
      title: "EchoWrite",
      description: "A dynamic blog-sharing web application built with Node.js, Express.js, EJS, and MongoDB. It enables users to compose, share, and explore blogs in a clean, minimal interface—streamlining content creation with server-side rendering and real-time data management.",
      image: taskManagementProject,
      technologies: ["Node.js", "Express.js", "EJS", "MongoDB", "Bootstrap", "JavaScript"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Blog Platform"
    },
    {
      title: "TaskFlow Pro",
      description: "A sophisticated collaborative task management platform designed for modern teams. Features drag-and-drop kanban boards, real-time collaboration, advanced filtering, team member assignment, deadline tracking, and project analytics.",
      image: weatherDashboardProject,
      technologies: ["TypeScript", "React", "Socket.io", "PostgreSQL", "Express", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Productivity"
    },
    {
      title: "WeatherScope",
      description: "An intelligent weather forecasting application providing comprehensive meteorological data. Features current weather conditions, 7-day forecasts, interactive weather maps, historical data analysis, and beautiful data visualizations.",
      image: portfolioProject,
      technologies: ["JavaScript", "React", "Weather API", "Chart.js", "CSS3", "Geolocation API"],
      liveUrl: "#",
      githubUrl: "#",
      category: "API Integration"
    },
    {
      title: "ChatSphere",
      description: "A feature-rich real-time messaging platform designed for seamless communication. Includes multiple chat rooms, private messaging, file sharing, emoji reactions, user authentication, message encryption, and typing indicators.",
      image: chatAppProject,
      technologies: ["React", "Socket.io", "Node.js", "MongoDB", "JWT", "Multer", "Cloudinary"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Communication"
    },
    {
      title: "FinanceTracker",
      description: "A comprehensive personal finance management application for tracking expenses and budgets. Features expense categorization, budget goal setting, visual analytics with interactive charts, and secure data storage.",
      image: expenseTrackerProject,
      technologies: ["React", "Chart.js", "Local Storage", "Material-UI", "Date-fns", "React Hook Form"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Finance"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--primary)_0%,_transparent_50%)] opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
              &lt;/Projects&gt;
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore my portfolio of innovative solutions, each crafted with passion and cutting-edge technologies
            </p>
          </div>
        </AnimatedSection>

        {/* Projects Grid - One by One on Scroll */}
        <div className="space-y-32 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 0.2}>
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Project Info */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="space-y-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {project.category}
                    </Badge>
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="outline" 
                          className="border-primary/30 text-primary hover:bg-primary/10 transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Button 
                      variant="default" 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground group"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
                        Live Demo
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-primary/30 hover:border-primary hover:bg-primary/10 group"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
                
                {/* Project Image */}
                <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/5 to-primary/10">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-[400px] object-cover transition-all duration-700 group-hover:scale-105"
                    />
                    
                    {/* Overlay Effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Shine Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
                    </div>
                    
                    {/* Border Glow */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/30 transition-all duration-500"></div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
