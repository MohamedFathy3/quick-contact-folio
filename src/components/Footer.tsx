
import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Your Name
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer passionate about creating innovative solutions 
              and bringing ideas to life through code.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-200">Services</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white transition-colors duration-200">Portfolio</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect With Me</h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Feel free to reach out for collaborations or just a friendly hello!
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>&copy; {currentYear} Your Name. Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>and lots of coffee.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
