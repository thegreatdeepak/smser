import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+977-9862546765", "9855015491", "9855015492", "9855015493"],
    action: "tel:+9779862546765",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["southasia.materials.lab@gmail.com"],
    action: "mailto:southasia.materials.lab@gmail.com",
  },
  {
    icon: MapPin,
    title: "Location",
    details: ["Sirjana Chowk, Bharatpur-10", "Chitwan, Nepal"],
    action: "#",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["24/7 Support Available", "Testing: 8 AM - 6 PM"],
    action: "#",
  },
];

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting SMSER. We'll respond within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-muted/30 to-background overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-lines opacity-10" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-smser-teal/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-smser-teal/30 bg-smser-teal/10 mb-4">
            <span className="text-xs font-semibold text-smser-teal uppercase tracking-wider">Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Ready to Start Your{" "}
            <span className="text-gradient-primary">Project?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Contact our team for expert consultation and competitive quotes. 
            We're here to support your testing needs 24/7.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((item, index) => (
              <a
                key={item.title}
                href={item.action}
                className="group flex items-start gap-4 p-4 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-smser-teal/50 hover:bg-card/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-smser-teal/10 border border-smser-teal/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <item.icon className="w-5 h-5 text-smser-teal" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground">{detail}</p>
                  ))}
                </div>
              </a>
            ))}

            {/* Map placeholder */}
            <div className="relative h-48 rounded-xl overflow-hidden border border-border/50">
              <div className="absolute inset-0 bg-gradient-to-br from-smser-deep-blue/50 to-smser-teal/30 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-smser-teal mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">Chitwan, Nepal</p>
                  <p className="text-xs text-muted-foreground">Sirjana Chowk, Bharatpur-10</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="p-6 sm:p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-foreground mb-6">Request a Quote</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="+977-98XXXXXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Service Required *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="form-input"
                    >
                      <option value="">Select a service</option>
                      <option value="geotechnical">Geotechnical & Geophysical</option>
                      <option value="foundation">Foundation Testing</option>
                      <option value="ndt">Non-Destructive Testing</option>
                      <option value="pavement">Pavement Investigation</option>
                      <option value="construction">Construction Materials</option>
                      <option value="environmental">Environmental Testing</option>
                      <option value="other">Other / Multiple Services</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="form-input resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button type="submit" variant="hero" size="lg" className="flex-1">
                    Send Message
                    <Send className="w-4 h-4" />
                  </Button>
                  <Button type="button" variant="hero-outline" size="lg">
                    Schedule a Call
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
