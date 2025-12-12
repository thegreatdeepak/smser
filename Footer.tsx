import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Geotechnical Testing", href: "#geotechnical" },
    { label: "Foundation Testing", href: "#foundation" },
    { label: "Non-Destructive Testing", href: "#ndt" },
    { label: "Pavement Investigation", href: "#pavement" },
    { label: "Construction Materials", href: "#construction" },
    { label: "Environmental Testing", href: "#environmental" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Team", href: "#about" },
    { label: "Industries", href: "#industries" },
    { label: "Careers", href: "#contact" },
    { label: "News & Blog", href: "#blog" },
  ],
  resources: [
    { label: "Testing Standards", href: "#blog" },
    { label: "Technical Guides", href: "#blog" },
    { label: "Case Studies", href: "#blog" },
    { label: "FAQs", href: "#contact" },
    { label: "Service Brochure", href: "#contact" },
  ],
};

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-background to-smser-charcoal border-t border-border/50">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-smser-teal to-smser-deep-blue flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">S</span>
              </div>
              <div>
                <span className="text-xl font-bold text-foreground">SMSER</span>
                <p className="text-xs text-muted-foreground">Materials Science & Engineering Research</p>
              </div>
            </a>
            
            <p className="text-muted-foreground text-sm mb-6 max-w-sm">
              Committed to rigorous precision and inspired by the pursuit of discovery. 
              Nepal's premier materials testing laboratory delivering unrivaled accuracy.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:+9779862546765" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-smser-teal transition-colors">
                <Phone className="w-4 h-4" />
                <span>+977-9862546765</span>
              </a>
              <a href="mailto:southasia.materials.lab@gmail.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-smser-teal transition-colors">
                <Mail className="w-4 h-4" />
                <span>southasia.materials.lab@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Sirjana Chowk, Bharatpur-10, Chitwan</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-10 h-10 rounded-lg border border-border hover:border-smser-teal hover:bg-smser-teal/10 flex items-center justify-center transition-all">
                <Facebook className="w-4 h-4 text-muted-foreground" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg border border-border hover:border-smser-teal hover:bg-smser-teal/10 flex items-center justify-center transition-all">
                <Linkedin className="w-4 h-4 text-muted-foreground" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg border border-border hover:border-smser-teal hover:bg-smser-teal/10 flex items-center justify-center transition-all">
                <Twitter className="w-4 h-4 text-muted-foreground" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-smser-teal transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-smser-teal transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-smser-teal transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
              <span>© 2025 SMSER. All rights reserved.</span>
              <span className="hidden md:inline">|</span>
              <span>Reg. No: 367842/081/082</span>
              <span className="hidden md:inline">|</span>
              <span>PAN: 622371582</span>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
