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
    <section id="services" className="py-20 bg-background relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-muted-foreground">Services Overview</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
            My <span className="gradient-text bg-gradient-to-r from-accent via-primary to-accent bg-[length:200%_100%] animate-[gradient_3s_ease-in-out_infinite]">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Comprehensive tech solutions tailored to your needs, from cutting-edge web development to strategic digital marketing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title}
                className="glass-card hover:shadow-2xl transition-all duration-700 group border border-primary/20 backdrop-blur-lg relative overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <CardHeader className="pb-6 relative z-10">
                  <div className="flex items-center gap-6">
                    <div className={`relative p-5 bg-gradient-to-r ${service.color} rounded-2xl shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                      <IconComponent className="h-10 w-10 text-white" />
                      {/* Glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500`}></div>
                    </div>
                    <div>
                      <CardTitle className="text-3xl font-bold group-hover:text-primary transition-colors duration-300 mb-2">
                        {service.title}
                      </CardTitle>
                      <div className="w-16 h-1 bg-gradient-hero rounded-full group-hover:w-24 transition-all duration-500"></div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-8 relative z-10">
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {service.description}
                  </p>
                  
                  <div className="space-y-4">
                    <h4 className="font-bold text-foreground text-lg">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div 
                          key={feature} 
                          className="flex items-center gap-3 p-3 glass-card hover:bg-primary/5 transition-all duration-300 group-hover:translate-x-2"
                          style={{ transitionDelay: `${featureIndex * 100}ms` }}
                        >
                          <div className="w-2 h-2 bg-gradient-hero rounded-full animate-pulse"></div>
                          <span className="text-muted-foreground font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Progress indicator */}
                  <div className="pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-muted-foreground">Expertise Level</span>
                      <span className="text-sm font-bold text-primary">Advanced</span>
                    </div>
                    <div className="w-full bg-border rounded-full h-2">
                      <div className={`bg-gradient-to-r ${service.color} h-2 rounded-full transition-all duration-1000 group-hover:w-full`} style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-20">
          <div className="glass-card p-10 max-w-3xl mx-auto border border-primary/20 backdrop-blur-lg relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-hero rounded-full"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6 gradient-text">Ready to Start Your Project?</h3>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Let's collaborate to bring your ideas to life with cutting-edge technology and creative solutions. 
                Your vision, powered by expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hero-button group"
                >
                  Get In Touch
                  <div className="ml-2 w-5 h-5 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors duration-300"></div>
                </button>
                <button 
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="accent-button"
                >
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;