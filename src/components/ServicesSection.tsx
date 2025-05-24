
import { Code, Globe, Smartphone, Database, Zap, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Creating responsive and modern web applications using the latest technologies and frameworks."
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Building cross-platform mobile applications that provide seamless user experiences."
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Developing robust server-side applications with secure APIs and efficient database management."
    },
    {
      icon: Code,
      title: "Custom Software",
      description: "Tailored software solutions designed to meet your specific business requirements."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Enhancing application speed and efficiency for better user experience and SEO."
    },
    {
      icon: Shield,
      title: "Security Solutions",
      description: "Implementing comprehensive security measures to protect your digital assets."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            My <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive development services to bring your digital vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
