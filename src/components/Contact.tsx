import { useState } from "react";
import { Mail, Phone, Linkedin, Github, Send, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
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
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together to create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to collaborate on new projects and explore innovative solutions. 
                Whether you need web development, database management, or social media strategy, 
                I'm here to help bring your ideas to life.
              </p>
            </div>

            <div className="grid gap-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card 
                    key={info.label}
                    className="glass-card hover:shadow-medium transition-all duration-300 group cursor-pointer border-0"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => window.open(info.href, '_blank')}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 bg-gradient-to-r ${info.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{info.label}</p>
                          <p className="text-muted-foreground text-sm">{info.value}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Location */}
            <Card className="glass-card border-0">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-hero rounded-lg">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Location</p>
                    <p className="text-muted-foreground text-sm">Chittagong, Bangladesh</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="glass-card border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input 
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <Input 
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    rows={6}
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full hero-button group"
                  size="lg"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6">
              Let's schedule a call to discuss your requirements and explore how we can work together.
            </p>
            <Button 
              className="accent-button"
              onClick={() => window.open('mailto:mdabdullahbabar@gmail.com?subject=Project Inquiry', '_blank')}
            >
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;