
import { Code, Coffee, Lightbulb, Target } from "lucide-react";

const AboutSection = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", "Vue.js", "Angular", "Node.js",
    "Python", "Java", "PHP", "MySQL", "MongoDB", "PostgreSQL",
    "AWS", "Docker", "Git", "REST APIs", "GraphQL", "Microservices"
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "4+", label: "Years Experience" },
    { number: "25+", label: "Happy Clients" },
    { number: "1000+", label: "Cups of Coffee" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Passionate developer with a love for creating innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - About content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <Lightbulb className="h-6 w-6 mr-2 text-yellow-400" />
                My Story
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a passionate full-stack developer with over 4 years of experience creating 
                digital solutions that make a difference. My journey began with curiosity about 
                how websites work, and it has evolved into a deep love for crafting elegant, 
                efficient code.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I specialize in modern web technologies and enjoy working on challenging projects 
                that push the boundaries of what's possible. Whether it's building scalable web 
                applications or creating intuitive user interfaces, I'm always eager to learn 
                and grow.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <Target className="h-6 w-6 mr-2 text-green-400" />
                What I Do
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Code className="h-5 w-5 text-purple-400" />
                  <span>Full-Stack Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Coffee className="h-5 w-5 text-brown-400" />
                  <span>Problem Solving</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Lightbulb className="h-5 w-5 text-yellow-400" />
                  <span>Innovation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="h-5 w-5 text-green-400" />
                  <span>Goal Achievement</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Skills and stats */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">By the Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                    <div className="text-3xl font-bold text-purple-400 mb-2">{stat.number}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
