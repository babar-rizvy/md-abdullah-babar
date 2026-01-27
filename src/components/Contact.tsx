import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, Linkedin, Github, Send, MapPin, ExternalLink, Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const EMAILJS_SERVICE_ID = "service_d0xmtcr";
const EMAILJS_TEMPLATE_ID = "template_73zix4l";
const EMAILJS_PUBLIC_KEY = "QvgME_v9hbvlzubJB";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mdabdullahbabar@gmail.com",
      href: "mailto:mdabdullahbabar@gmail.com",
      color: "from-primary to-primary-dark"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "01759612250",
      href: "tel:01759612250",
      color: "from-accent to-accent-light"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "md-abdullah-babar",
      href: "https://linkedin.com/in/md-abdullah-babar-31a484366",
      color: "from-primary-light to-primary"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "babar-rizvy",
      href: "https://github.com/babar-rizvy",
      color: "from-accent-light to-accent"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-48 h-48 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/3 to-accent/3 rounded-full blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-muted-foreground">Contact Information</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
            Get In <span className="gradient-text bg-gradient-to-r from-accent via-primary to-accent bg-[length:200%_100%] animate-[gradient_3s_ease-in-out_infinite]">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Ready to start your next project? Let's discuss how we can work together to create something amazing and impactful.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Enhanced Contact Information */}
          <div className="space-y-10">
            <div className="glass-card p-8 border border-primary/20 backdrop-blur-lg">
              <h3 className="text-3xl font-bold mb-6 gradient-text">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                I'm always excited to collaborate on new projects and explore innovative solutions. 
                Whether you need web development, database management, or social media strategy, 
                I'm here to help bring your ideas to life with cutting-edge technology.
              </p>
              
              {/* Response time indicator */}
              <div className="flex items-center gap-3 p-4 glass-card border border-green-500/20 bg-green-500/5">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-600 dark:text-green-400">Usually responds within 24 hours</span>
              </div>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card 
                    key={info.label}
                    className="glass-card hover:shadow-large transition-all duration-500 group cursor-pointer border border-primary/20 backdrop-blur-lg relative overflow-hidden"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => window.open(info.href, '_blank')}
                  >
                    {/* Background gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${info.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    <CardContent className="p-6 relative z-10">
                      <div className="flex items-center gap-6">
                        <div className={`relative p-4 bg-gradient-to-r ${info.color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                          <IconComponent className="h-6 w-6 text-white" />
                          {/* Glow effect */}
                          <div className={`absolute inset-0 bg-gradient-to-r ${info.color} rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500`}></div>
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-foreground text-lg">{info.label}</p>
                          <p className="text-muted-foreground font-medium">{info.value}</p>
                          <div className="w-12 h-1 bg-gradient-hero rounded-full mt-2 group-hover:w-20 transition-all duration-500"></div>
                        </div>
                        <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ExternalLink className="h-4 w-4" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Enhanced Location */}
            <Card className="glass-card border border-accent/20 backdrop-blur-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-gradient-hero rounded-2xl shadow-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-lg">Location</p>
                    <p className="text-muted-foreground font-medium">Chittagong, Bangladesh</p>
                    <p className="text-sm text-accent font-medium">GMT+6 Timezone</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Contact Form */}
          <Card className="glass-card border border-primary/20 backdrop-blur-lg relative overflow-hidden">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
            
            <CardHeader className="relative z-10">
              <CardTitle className="text-3xl font-bold gradient-text">Send a Message</CardTitle>
              <p className="text-muted-foreground">I'd love to hear about your project</p>
            </CardHeader>
            <CardContent className="relative z-10">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-6">
                  <div>
                    <Input 
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="glass-card bg-background/50 border-border/50 focus:border-primary transition-all duration-300 h-12 text-lg"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="glass-card bg-background/50 border-border/50 focus:border-primary transition-all duration-300 h-12 text-lg"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                      rows={6}
                      className="glass-card bg-background/50 border-border/50 focus:border-primary transition-all duration-300 resize-none text-lg"
                    />
                  </div>
                </div>
                
                {/* Form features */}
                <div className="grid md:grid-cols-2 gap-4 p-4 glass-card">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-muted-foreground">Secure & Encrypted</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-sm text-muted-foreground">Quick Response</span>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full hero-button group h-14 text-lg relative overflow-hidden"
                  size="lg"
                  disabled={isSubmitting}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Additional CTA */}
        <div className="text-center mt-20">
          <div className="glass-card p-10 max-w-3xl mx-auto border border-accent/20 backdrop-blur-lg relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-accent rounded-full"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6 gradient-text">Ready to Start Your Project?</h3>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Let's schedule a call to discuss your requirements and explore how we can work together 
                to create something extraordinary.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  className="accent-button group"
                  onClick={() => window.open('mailto:mdabdullahbabar@gmail.com?subject=Project Inquiry', '_blank')}
                >
                  <Mail className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Schedule a Call
                </Button>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span>Free consultation available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;