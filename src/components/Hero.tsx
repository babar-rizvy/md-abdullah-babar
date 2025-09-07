import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-subtle relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-element absolute top-20 left-20 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
        <div className="floating-element absolute top-40 right-32 w-32 h-32 bg-accent/10 rounded-full blur-xl" style={{ animationDelay: '1s' }}></div>
        <div className="floating-element absolute bottom-32 left-32 w-16 h-16 bg-primary/20 rounded-full blur-lg" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fadeInUp">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Hello, I'm <span className="gradient-text">Md. Abdullah Babar</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-medium">
                Tech Enthusiast | Web Developer | Social Media & Database Specialist
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I am a tech enthusiast with hands-on experience in social media marketing, web development, and artificial intelligence. 
              I am passionate about building creative digital solutions and exploring how technology can make life easier. 
              Alongside my technical journey, I actively engage in research and academic projects to broaden my knowledge and share innovative ideas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('portfolio')}
                className="hero-button group"
                size="lg"
              >
                View Portfolio
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="accent-button"
                size="lg"
              >
                Contact Me
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex justify-center lg:justify-end animate-scaleIn">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero rounded-full blur-2xl opacity-60 animate-pulse"></div>
              <div className="relative bg-gradient-hero p-2 rounded-full shadow-glow">
                <img 
                  src={profilePhoto} 
                  alt="Md. Abdullah Babar - Tech Professional"
                  className="w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-large"
                />
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 glass-card px-4 py-2 floating-element">
                <span className="text-sm font-semibold gradient-text">React.js</span>
              </div>
              <div className="absolute -bottom-4 -left-4 glass-card px-4 py-2 floating-element" style={{ animationDelay: '1s' }}>
                <span className="text-sm font-semibold gradient-text">ASP.NET</span>
              </div>
              <div className="absolute top-1/2 -left-8 glass-card px-4 py-2 floating-element" style={{ animationDelay: '2s' }}>
                <span className="text-sm font-semibold gradient-text">SQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;