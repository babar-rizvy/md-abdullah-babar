import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-subtle relative overflow-hidden">
      {/* Modern background with particles and geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="floating-element absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="floating-element absolute top-40 right-32 w-48 h-48 bg-gradient-to-br from-accent/15 to-primary/15 rounded-full blur-3xl" style={{ animationDelay: '1s' }}></div>
        <div className="floating-element absolute bottom-32 left-32 w-24 h-24 bg-gradient-to-br from-primary/25 to-accent/25 rounded-full blur-xl" style={{ animationDelay: '2s' }}></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-primary/60 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-accent/60 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-primary/40 rounded-full animate-ping" style={{ animationDelay: '2.5s' }}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_1px,hsl(var(--background))_1px)] bg-[length:60px_60px] opacity-20"></div>
      </div>

      {/* Modern glass container */}
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Content */}
          <div className="space-y-10 animate-fadeInUp">
            {/* Modern status badge */}
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-muted-foreground">Available for projects</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-8xl font-bold leading-tight tracking-tight">
                Hello, I'm <br />
                <span className="gradient-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-[gradient_3s_ease-in-out_infinite]">
                  Md. Abdullah Babar
                </span>
              </h1>
              <div className="glass-card p-6 rounded-2xl border border-primary/20">
                <p className="text-xl lg:text-2xl text-foreground font-semibold leading-relaxed">
                  AI/ML Enthusiast | Future AI Engineer
                </p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I am a passionate tech enthusiast with hands-on experience in social media marketing, web development, and a growing focus on artificial intelligence. Currently, I am developing my skills in Python, machine learning, and data-driven problem solving, with the goal of becoming an AI/ML Engineer. I enjoy building creative and practical digital solutions that make everyday life easier. Alongside my technical journey, I actively engage in research and academic projects, continuously exploring new ideas and innovations in the field of AI.
            </p>

            {/* Modern CTA section */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('portfolio')}
                  className="hero-button group relative overflow-hidden"
                  size="lg"
                >
                  <span className="relative z-10">View Portfolio</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Button>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  variant="outline"
                  className="glass-card border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                  size="lg"
                >
                  Contact Me
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  className="glass-card border-accent/30 text-foreground hover:bg-accent/10 hover:border-accent/50 transition-all duration-300"
                  size="lg"
                >
                  <a href="/cv.pdf" download="Md_Abdullah_Babar_CV.pdf">
                    <Download className="mr-2 h-5 w-5" />
                    Download CV
                  </a>
                </Button>
              </div>
              
              {/* Social proof indicators */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full border-2 border-background"></div>
                    <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-full border-2 border-background"></div>
                    <div className="w-8 h-8 bg-gradient-to-br from-primary-dark to-accent rounded-full border-2 border-background"></div>
                  </div>
                  <span className="text-sm text-muted-foreground font-medium">Trusted by clients worldwide</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Profile Image */}
          <div className="relative flex justify-center lg:justify-end animate-scaleIn">
            <div className="relative group">
              {/* Multiple gradient layers for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary-dark rounded-full blur-3xl opacity-60 animate-pulse group-hover:opacity-80 transition-opacity"></div>
              <div className="absolute inset-2 bg-gradient-to-tr from-accent via-primary to-accent-light rounded-full blur-2xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              {/* Main image container with glass morphism */}
              <div className="relative bg-gradient-hero p-3 rounded-full shadow-glow backdrop-blur-sm border border-white/20">
                <div className="relative overflow-hidden rounded-full">
                  <img 
                    src={profilePhoto} 
                    alt="Md. Abdullah Babar - Tech Professional"
                    className="w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-large transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/10 rounded-full"></div>
                </div>
              </div>
              
              {/* Modern tech badges with enhanced styling */}
              <div className="absolute -top-6 -right-6 glass-card px-6 py-3 floating-element border border-primary/30 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold gradient-text">React.js</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card px-6 py-3 floating-element border border-accent/30 backdrop-blur-md" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold gradient-text">ASP.NET</span>
                </div>
              </div>
              <div className="absolute top-1/2 -left-12 glass-card px-6 py-3 floating-element border border-primary/30 backdrop-blur-md" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-dark rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold gradient-text">SQL</span>
                </div>
              </div>
              <div className="absolute top-1/4 -right-8 glass-card px-6 py-3 floating-element border border-accent/30 backdrop-blur-md" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent-light rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold gradient-text">C#</span>
                </div>
              </div>
              
              {/* Orbital rings */}
              <div className="absolute inset-0 border border-primary/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute inset-4 border border-accent/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;