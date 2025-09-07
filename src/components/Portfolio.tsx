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
    <section id="portfolio" className="py-20 bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing my latest projects and technical achievements across different domains.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="glass-card hover:shadow-large transition-all duration-500 group border-0 overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <div className={`h-32 bg-gradient-to-r ${project.color} rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                  <div className="text-white text-center">
                    <div className="text-lg font-bold">{project.category}</div>
                    <div className="text-sm opacity-90">Project Showcase</div>
                  </div>
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-sm mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-sm mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-gradient-hero rounded-full"></div>
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    size="sm" 
                    className="flex-1 hero-button text-sm"
                    onClick={() => {
                      // In a real implementation, this would link to the project
                      alert(`View ${project.title} details`);
                    }}
                  >
                    <ExternalLink className="h-3 w-3 mr-2" />
                    View Details
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="accent-button text-sm"
                    onClick={() => {
                      // In a real implementation, this would link to the GitHub repo
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

        {/* More Projects CTA */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Want to See More?</h3>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub for more projects and contributions to the open-source community.
            </p>
            <Button 
              className="hero-button"
              onClick={() => window.open('https://github.com/babar-rizvy', '_blank')}
            >
              <Github className="h-5 w-5 mr-2" />
              Visit GitHub Profile
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;