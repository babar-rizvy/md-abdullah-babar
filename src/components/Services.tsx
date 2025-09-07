import { Globe, Users, Database, CheckSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Building responsive and dynamic websites using ASP.NET Core MVC, React.js, HTML, and CSS.",
      features: [
        "Responsive Design",
        "Dynamic Functionality", 
        "Modern Frameworks",
        "Cross-browser Compatibility"
      ],
      color: "from-primary to-primary-dark"
    },
    {
      icon: Users,
      title: "Social Media Management",
      description: "Creating and optimizing campaigns to grow engagement and online presence.",
      features: [
        "Content Strategy",
        "Engagement Growth",
        "Campaign Optimization",
        "Brand Presence"
      ],
      color: "from-accent to-accent-light"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Managing SQL and MySQL databases, including advanced features like stored procedures and server-side pagination.",
      features: [
        "Database Design",
        "Query Optimization",
        "Stored Procedures",
        "Data Security"
      ],
      color: "from-primary-light to-primary"
    },
    {
      icon: CheckSquare,
      title: "Project Management",
      description: "Efficient workflow management using Trello and Jira for smooth project execution and timely delivery.",
      features: [
        "Workflow Management",
        "Task Tracking",
        "Team Collaboration",
        "Timely Delivery"
      ],
      color: "from-accent-light to-accent"
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive tech solutions tailored to your needs, from web development to digital strategy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title}
                className="glass-card hover:shadow-large transition-all duration-500 group border-0"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className={`p-4 bg-gradient-to-r ${service.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-gradient-hero rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6">
              Let's collaborate to bring your ideas to life with cutting-edge technology and creative solutions.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="hero-button"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;