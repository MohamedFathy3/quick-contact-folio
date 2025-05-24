
import { Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const handleDownloadCV = () => {
    // You can replace this with your actual CV file path
    const cvUrl = "/path-to-your-cv.pdf";
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = "Programmer_CV.pdf";
    link.click();
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 relative">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-blue-500 p-1 animate-scale-in">
              <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center text-6xl font-bold text-gray-600 overflow-hidden">
                {/* Replace this with your actual image */}
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                  alt="Profile" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            {/* Floating animation rings */}
            <div className="absolute inset-0 rounded-full border-2 border-purple-400 animate-ping opacity-20"></div>
            <div className="absolute inset-4 rounded-full border-2 border-blue-400 animate-ping opacity-30 animation-delay-1000"></div>
          </div>

          {/* Name with typing animation effect */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Your Name
            </span>
          </h1>

          {/* Subtitle with animation */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in animation-delay-500">
            Full Stack Developer & Problem Solver
          </p>

          {/* Animated description */}
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in animation-delay-1000">
            Crafting digital experiences with modern technologies. 
            Passionate about clean code, innovative solutions, and bringing ideas to life.
          </p>

          {/* Download CV Button */}
          <Button 
            onClick={handleDownloadCV}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-fade-in animation-delay-1500"
          >
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white opacity-60" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
