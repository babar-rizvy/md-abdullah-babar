import { Heart, Mail, Phone, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:mdabdullahbabar@gmail.com",
      label: "Email"
    },
    {
      icon: Phone,
      href: "tel:01759612250",
      label: "Phone"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/md-abdullah-babar-31a484366",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com/babar-rizvy",
      label: "GitHub"
    }
  ];

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Abdullah Babar</h3>
            <p className="text-muted-foreground leading-relaxed">
              Tech enthusiast passionate about creating innovative digital solutions and exploring the endless possibilities of technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-left text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect With Me</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="p-3 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300 hover:scale-110 group"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
            <p className="text-sm text-muted-foreground">
              Always open to discussing new opportunities and innovative projects.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © {currentYear} Md. Abdullah Babar. All rights reserved.
            </p>
            <p className="flex items-center gap-2 text-muted-foreground text-sm">
              Made with <Heart className="h-4 w-4 text-red-500 animate-pulse" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;