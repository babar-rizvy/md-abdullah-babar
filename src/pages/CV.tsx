import { Link } from "react-router-dom";
import { ArrowLeft, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const CV = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-48 h-48 bg-gradient-to-br from-accent/15 to-primary/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-32 w-24 h-24 bg-gradient-to-br from-primary/25 to-accent/25 rounded-full blur-xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_1px,hsl(var(--background))_1px)] bg-[length:60px_60px] opacity-20"></div>
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
          <div className="section-container">
            <div className="flex items-center justify-between h-16">
              <Link 
                to="/"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span className="font-medium">Back to Home</span>
              </Link>
              <Button asChild className="hero-button">
                <a href="/cv.pdf" download="Md_Abdullah_Babar_CV.pdf">
                  <Download className="h-4 w-4 mr-2" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </nav>

        {/* Header */}
        <header className="pt-24 pb-8">
          <div className="section-container">
            <div className="glass-card p-8 rounded-2xl border border-primary/20">
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Profile Photo */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary-dark rounded-full blur-xl opacity-60"></div>
                  <div className="relative bg-gradient-hero p-1 rounded-full">
                    <img 
                      src={profilePhoto} 
                      alt="Md. Abdullah Babar"
                      className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Title */}
                <div className="text-center md:text-left">
                  <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    Md. Abdullah Babar
                  </h1>
                  <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground">
                    <FileText className="h-5 w-5 text-primary" />
                    <span className="text-lg font-medium">Curriculum Vitae</span>
                  </div>
                </div>

                {/* Download Button (Desktop) */}
                <div className="hidden md:block ml-auto">
                  <Button asChild size="lg" className="hero-button group">
                    <a href="/cv.pdf" download="Md_Abdullah_Babar_CV.pdf">
                      <Download className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                      Download CV
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* PDF Viewer */}
        <main className="pb-12">
          <div className="section-container">
            <div className="glass-card p-4 md:p-6 rounded-2xl border border-border/50">
              <div className="aspect-[8.5/11] w-full max-w-4xl mx-auto bg-card rounded-lg overflow-hidden shadow-large">
                <iframe
                  src="/cv.pdf"
                  className="w-full h-full"
                  title="Md. Abdullah Babar - CV"
                >
                  <p className="p-8 text-center text-muted-foreground">
                    Your browser doesn't support embedded PDFs.{" "}
                    <a 
                      href="/cv.pdf" 
                      download="Md_Abdullah_Babar_CV.pdf"
                      className="text-primary hover:underline"
                    >
                      Download the CV
                    </a>{" "}
                    to view it.
                  </p>
                </iframe>
              </div>
            </div>

            {/* Mobile Download Button */}
            <div className="mt-6 md:hidden">
              <Button asChild size="lg" className="w-full hero-button">
                <a href="/cv.pdf" download="Md_Abdullah_Babar_CV.pdf">
                  <Download className="h-5 w-5 mr-2" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CV;
