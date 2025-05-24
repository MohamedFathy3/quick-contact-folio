
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PortfolioSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      tags: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "AI-Powered Dashboard",
      description: "An analytics dashboard with AI-driven insights, interactive charts, and real-time data visualization for business intelligence.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      tags: ["Python", "React", "TensorFlow", "D3.js"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication, transaction history, and budget tracking features.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
      tags: ["React Native", "Firebase", "Redux", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Learning Management System",
      description: "Comprehensive LMS with course creation, student progress tracking, and interactive learning modules.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=300&fit=crop",
      tags: ["Angular", "Spring Boot", "MySQL", "AWS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Real Estate Platform",
      description: "Property listing platform with advanced search, virtual tours, and agent management system.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
      tags: ["Next.js", "GraphQL", "Prisma", "Cloudinary"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            My <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of projects that demonstrate my skills and passion for development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-purple-100 text-purple-600 text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 group-hover:border-purple-600 group-hover:text-purple-600 transition-colors duration-300"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 group-hover:border-purple-600 group-hover:text-purple-600 transition-colors duration-300"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
