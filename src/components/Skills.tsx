import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';

const Skills = () => {
  const technologies = [
    { name: "HTML5", icon: "🌐", color: "from-orange-500 to-red-500" },
    { name: "CSS3", icon: "🎨", color: "from-blue-500 to-blue-600" },
    { name: "JavaScript", icon: "⚡", color: "from-yellow-400 to-yellow-500" },
    { name: "React", icon: "⚛️", color: "from-cyan-400 to-blue-500" },
    { name: "TypeScript", icon: "🔷", color: "from-blue-600 to-blue-700" },
    { name: "Node.js", icon: "🟢", color: "from-green-500 to-green-600" },
    { name: "Python", icon: "🐍", color: "from-yellow-500 to-blue-500" },
    { name: "Java", icon: "☕", color: "from-orange-600 to-red-600" },
    { name: "MongoDB", icon: "🍃", color: "from-green-600 to-green-700" },
    { name: "PostgreSQL", icon: "🐘", color: "from-blue-700 to-indigo-700" },
    { name: "AWS", icon: "☁️", color: "from-orange-400 to-yellow-400" },
    { name: "Docker", icon: "🐳", color: "from-blue-500 to-cyan-500" },
    { name: "Git", icon: "📝", color: "from-orange-500 to-red-500" },
    { name: "Kubernetes", icon: "⚙️", color: "from-blue-600 to-purple-600" },
    { name: "GraphQL", icon: "🔗", color: "from-pink-500 to-purple-500" },
    { name: "Next.js", icon: "▲", color: "from-gray-800 to-gray-900" },
    { name: "Tailwind", icon: "🎯", color: "from-cyan-500 to-blue-500" },
    { name: "Spring Boot", icon: "🌱", color: "from-green-500 to-green-600" },
    { name: "Redis", icon: "🔴", color: "from-red-500 to-red-600" },
    { name: "Linux", icon: "🐧", color: "from-yellow-500 to-orange-500" },
    { name: "Figma", icon: "🎭", color: "from-purple-500 to-pink-500" }
  ];

  return (
    <section id="skills" className="h-screen flex items-center bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </AnimatedSection>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {technologies.map((tech, index) => (
              <AnimatedSection key={tech.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 10,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group"
                >
                  <Card className="bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 h-24 flex flex-col items-center justify-center relative overflow-hidden">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />
                    <div className="text-2xl mb-1 group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <p className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-center px-1">
                      {tech.name}
                    </p>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;