import { GraduationCap, Briefcase, Code, Database, Globe, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    {
      category: "Programming Languages",
      items: ["C", "C++", "C#", "HTML", "CSS"],
      icon: Code,
      color: "from-primary to-primary-dark"
    },
    {
      category: "Frameworks",
      items: ["ASP.NET Core MVC", "React.js"],
      icon: Zap,
      color: "from-accent to-accent-light"
    },
    {
      category: "Database",
      items: ["SQL", "MySQL"],
      icon: Database,
      color: "from-primary-light to-primary"
    },
    {
      category: "Tools & Others",
      items: ["GitHub", "Trello", "Jira", "Tabulator", "Server-Side Pagination", "Stored Procedures"],
      icon: Globe,
      color: "from-accent-light to-accent"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-muted-foreground">About Section</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
            About <span className="gradient-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-[gradient_3s_ease-in-out_infinite]">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Passionate about technology and dedicated to creating innovative solutions that make a difference in the digital world.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Education & Experience */}
          <div className="space-y-8">
            <Card className="glass-card p-8 hover:shadow-large transition-all duration-500 border border-primary/20 backdrop-blur-md group">
              <CardContent className="p-0">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-gradient-hero rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold">Education</h3>
                    <div className="space-y-2">
                      <p className="text-lg font-semibold text-foreground">B.Sc in Computer Science & Engineering</p>
                      <p className="text-muted-foreground font-medium">International Islamic University Of Chittagong</p>
                      <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1 rounded-full">
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                        <p className="text-sm font-bold">Expected Graduation: 2026</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card p-8 hover:shadow-large transition-all duration-500 border border-accent/20 backdrop-blur-md group">
              <CardContent className="p-0">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-gradient-accent rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold">Experience</h3>
                    <div className="space-y-2">
                      <p className="text-lg font-semibold text-foreground">Social Media Manager</p>
                      <p className="text-muted-foreground font-medium">Sukoon Baby - Facebook & Instagram</p>
                      <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                        <p className="text-sm font-bold">Managing business pages and digital presence</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Areas of Expertise */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-8 gradient-text">Areas of Expertise</h3>
              <div className="space-y-4">
                {[
                  { name: "Social Media Marketing", icon: "📱" },
                  { name: "Web Development", icon: "💻" },
                  { name: "Database Management", icon: "🗄️" }
                ].map((expertise, index) => (
                  <div 
                    key={expertise.name}
                    className="group flex items-center gap-4 p-6 glass-card hover:shadow-medium transition-all duration-300 border border-primary/20 backdrop-blur-sm hover:border-primary/40"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-2xl group-hover:scale-125 transition-transform duration-300">
                      {expertise.icon}
                    </div>
                    <div className="flex-1">
                      <span className="text-lg font-semibold">{expertise.name}</span>
                    </div>
                    <div className="w-8 h-8 bg-gradient-hero rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Stats */}
            <div className="glass-card p-6 border border-accent/20">
              <h4 className="text-xl font-bold mb-4">Quick Stats</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">3+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">2026</div>
                  <div className="text-sm text-muted-foreground">Graduation</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Skills Grid */}
        <div className="relative">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold gradient-text mb-4">Technical Skills</h3>
            <p className="text-muted-foreground">Technologies and tools I work with</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <Card 
                  key={skill.category}
                  className="glass-card hover:shadow-large transition-all duration-500 group border border-primary/20 backdrop-blur-md relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Background gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <CardContent className="p-8 relative z-10">
                    <div className="text-center mb-6">
                      <div className={`inline-flex p-4 bg-gradient-to-r ${skill.color} rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <h4 className="font-bold text-lg mb-4 group-hover:text-primary transition-colors duration-300">{skill.category}</h4>
                    </div>
                    <div className="space-y-3">
                      {skill.items.map((item, itemIndex) => (
                        <div 
                          key={item} 
                          className="flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300"
                          style={{ transitionDelay: `${itemIndex * 50}ms` }}
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-gradient-hero rounded-full"></div>
                            <span className="text-sm text-muted-foreground text-center font-medium">{item}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;