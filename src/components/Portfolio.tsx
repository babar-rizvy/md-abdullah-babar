import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "Warehouse Management System",
      description: "A comprehensive warehouse management solution developed using C++. Features inventory tracking, order management, and automated reporting systems.",
      technologies: ["C++", "Data Structures", "Algorithms"],
      category: "Desktop Application",
      color: "from-primary to-primary-dark",
      features: [
        "Inventory Management",
        "Order Tracking", 
        "Automated Reports",
        "Data Optimization"
      ]
    },
    {
      title: "Travel and Tourism Website",
      description: "A modern, responsive travel website showcasing destinations, tour packages, and booking capabilities. Built with modern web technologies for optimal user experience.",
      technologies: ["HTML", "CSS", "JavaScript", "React.js"],
      category: "Web Development",
      color: "from-accent to-accent-light",
      features: [
        "Responsive Design",
        "Interactive UI",
        "Booking System",
        "Tour Packages"
      ]
    },
    {
      title: "Hotel Management System",
      description: "A full-stack hotel management application with room booking, customer management, and administrative features. Built using enterprise-level technologies.",
      technologies: ["ASP.NET Core MVC", "C#", "SQL Server"],
      category: "Full-Stack Application",
      color: "from-primary-light to-primary",
      features: [
        "Room Management",
        "Customer Portal",
        "Admin Dashboard",
        "Booking System"
      ]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-subtle relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-primary/3 to-accent/3 rounded-full blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-muted-foreground">Portfolio Showcase</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
            My <span className="gradient-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-[gradient_3s_ease-in-out_infinite]">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Showcasing my latest projects and technical achievements across different domains and technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="glass-card hover:shadow-2xl transition-all duration-700 group border border-primary/20 backdrop-blur-lg overflow-hidden relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <CardHeader className="pb-6 relative z-10">
                <div className={`h-40 bg-gradient-to-r ${project.color} rounded-2xl mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-500 relative overflow-hidden shadow-lg`}>
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px] opacity-30"></div>
                  <div className="text-white text-center relative z-10">
                    <div className="text-xl font-bold mb-2">{project.category}</div>
                    <div className="text-sm opacity-90 font-medium">Project Showcase</div>
                    <div className="mt-3 w-12 h-1 bg-white/30 rounded-full mx-auto"></div>
                  </div>
                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-white/20 rounded-full animate-ping"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
                <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors duration-300 leading-tight">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-8 relative z-10">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Enhanced Technologies */}
                <div>
                  <h4 className="font-bold text-sm mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-gradient-hero rounded-full"></div>
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={tech}
                        className="px-3 py-2 bg-primary/10 text-primary text-xs rounded-full font-semibold border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                        style={{ animationDelay: `${techIndex * 100}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Enhanced Features */}
                <div>
                  <h4 className="font-bold text-sm mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-gradient-accent rounded-full"></div>
                    Key Features:
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {project.features.map((feature, featureIndex) => (
                      <div 
                        key={feature} 
                        className="flex items-center gap-3 p-2 glass-card hover:bg-primary/5 transition-all duration-300 group-hover:translate-x-1"
                        style={{ transitionDelay: `${featureIndex * 50}ms` }}
                      >
                        <div className="w-1.5 h-1.5 bg-gradient-hero rounded-full animate-pulse"></div>
                        <span className="text-xs text-muted-foreground font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enhanced Action Buttons */}
                <div className="flex gap-3 pt-6">
                  <Button 
                    size="sm" 
                    className="flex-1 hero-button text-sm group relative overflow-hidden"
                    onClick={() => {
                      alert(`View ${project.title} details`);
                    }}
                  >
                    <span className="relative z-10">
                      <ExternalLink className="h-3 w-3 mr-2" />
                      View Details
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex-1 glass-card border-accent/30 text-accent hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 text-sm"
                    onClick={() => {
                      window.open('https://github.com/babar-rizvy', '_blank');
                    }}
                  >
                    <Github className="h-3 w-3 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced More Projects CTA */}
        <div className="text-center mt-20">
          <div className="glass-card p-10 max-w-3xl mx-auto border border-primary/20 backdrop-blur-lg relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-accent rounded-full"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6 gradient-text">Want to See More?</h3>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Check out my GitHub for more projects and contributions to the open-source community. 
                Discover the code behind the solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  className="hero-button group"
                  onClick={() => window.open('https://github.com/babar-rizvy', '_blank')}
                >
                  <Github className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Visit GitHub Profile
                </Button>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Actively maintaining repositories</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;