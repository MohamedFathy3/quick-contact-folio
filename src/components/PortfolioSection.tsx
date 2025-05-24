
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PortfolioSection = () => {
  const projects = [
    {
title: "Motivational Platform for Students",
description: "An inspiring platform designed to help Fa3el students achieve academic excellence through daily motivation, study plans, and personal growth tracking.",      image: "/auto.png",
      tags: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
    
    },
    {
title: "Collaborative Productivity & Task Management Tool",
description: "A powerful and intuitive task management app designed for seamless team collaboration. Features include real-time updates, drag-and-drop task organization, and smart project tracking."
,      image: "/a2z.png",
      tags: ["bootstrap ", "DJANGO", "mysql", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
   {
title: "Smart WhatsApp Automation & Chat Management Tool",

description: "An intuitive WhatsApp management platform that allows you to create and control bots, handle customer conversations, and automate workflows in real time."
,      image: "/ath.png",
      tags: ["laravel ", "bootstrap", "mysql", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    
   },
    {
title: "On-Demand Delivery and Transportation App",

description: "An intuitive delivery and ride-hailing app that connects users with nearby drivers. Includes real-time tracking, route optimization, and seamless payment integration."
,      image: "/darp.png",
      tags: ["php ",'CodeIgniter', "bootstrap", "mysql", "Stripe"],
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

               
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
