import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js", "Angular"]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: ["Node.js", "Java", "Spring Boot", "Python", "REST APIs", "GraphQL", "Microservices"]
    },
    {
      title: "Database & Cloud",
      icon: "☁️",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "AWS", "Azure", "Docker", "Kubernetes"]
    },
    {
      title: "Tools & Others",
      icon: "🛠️",
      skills: ["Git", "Jenkins", "JIRA", "Postman", "Figma", "Linux", "Agile/Scrum"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 stagger-children">
            {skillCategories.map((category, index) => (
              <Card key={category.title} className="card-elegant h-full">
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <CardTitle className="text-xl font-semibold text-primary">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;