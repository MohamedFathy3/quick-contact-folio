
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const handleDownloadCV = () => {
    // Create a dummy CV download - replace with actual CV file
    const link = document.createElement('a');
    link.href = '/pro.pdf'; // Replace with actual CV file path
    link.download = 'Your_Name_CV.pdf';
    link.click();
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center pt-16">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-800 leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent animate-pulse">
                  Mohamed Fathy
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-600 font-light">
                Full Stack Developer
              </p>
              <p className="text-lg text-gray-600 max-w-2xl">
                Passionate about creating innovative digital solutions that make a difference. 
                I specialize in modern web technologies and love turning complex problems into 
                simple, beautiful designs.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={handleDownloadCV}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-6 text-lg font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
           
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start">
              <a 
                href="https://github.com/MohamedFathy3" 
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl hover:scale-110 transition-all duration-300 group"
              >
                <Github className="h-6 w-6 text-gray-700 group-hover:text-purple-600" />
              </a>
              <a 
                href="https://www.linkedin.com/in/mohamed-fathy-4653702a4/" 
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl hover:scale-110 transition-all duration-300 group"
              >
                <Linkedin className="h-6 w-6 text-gray-700 group-hover:text-blue-600" />
              </a>
             
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end animate-scale-in animation-delay-500">
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full transform rotate-6 scale-105 opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-blue-600 to-indigo-600 rounded-full transform -rotate-6 scale-105 opacity-20 animation-delay-1000"></div>
              
              {/* Profile Image Container */}
              <div className="relative w-80 h-80 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-2 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
              
                  
                   <img src="/logo.jpeg" alt="Your Name" className="w-full h-full object-content rounded-full" /> 
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-80 animate-bounce animation-delay-2000"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-pink-400 rounded-full opacity-80 animate-bounce animation-delay-4000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
