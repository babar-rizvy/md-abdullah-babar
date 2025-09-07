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
    <section id="about" className="py-20 bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about technology and dedicated to creating innovative solutions that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Education & Experience */}
          <div className="space-y-8">
            <Card className="glass-card p-6 hover:shadow-medium transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-hero rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Education</h3>
                    <p className="text-lg font-medium text-foreground">B.Sc in Computer Science & Engineering</p>
                    <p className="text-muted-foreground">International Islamic University Of Chittagong</p>
                    <p className="text-sm text-accent font-medium">Expected Graduation: 2026</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card p-6 hover:shadow-medium transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-accent rounded-lg">
                    <Briefcase className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Experience</h3>
                    <p className="text-lg font-medium text-foreground">Social Media Manager</p>
                    <p className="text-muted-foreground">Sukoon Baby - Facebook & Instagram</p>
                    <p className="text-sm text-primary font-medium">Managing business pages and digital presence</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Areas of Expertise */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Areas of Expertise</h3>
            <div className="space-y-4">
              {[
                "Social Media Marketing",
                "Web Development",
                "Database Management"
              ].map((expertise, index) => (
                <div 
                  key={expertise}
                  className="flex items-center gap-3 p-4 glass-card hover:shadow-soft transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-2 h-2 bg-gradient-hero rounded-full"></div>
                  <span className="text-lg font-medium">{expertise}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <Card 
                  key={skill.category}
                  className="glass-card hover:shadow-medium transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className={`inline-flex p-3 bg-gradient-to-r ${skill.color} rounded-lg mb-3 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-lg mb-3">{skill.category}</h4>
                    </div>
                    <div className="space-y-2">
                      {skill.items.map((item) => (
                        <div key={item} className="flex items-center justify-center">
                          <span className="text-sm text-muted-foreground text-center">{item}</span>
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