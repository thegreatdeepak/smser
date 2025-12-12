import { Target, Eye, Heart, Lightbulb, Shield } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Scientific Integrity",
    description: "Trust built on transparent, accurate testing methodologies",
  },
  {
    icon: Target,
    title: "Uncompromised Quality",
    description: "Excellence in every test, every time, without exception",
  },
  {
    icon: Heart,
    title: "24/7 Client Support",
    description: "Round-the-clock assistance for all your testing needs",
  },
  {
    icon: Lightbulb,
    title: "Continuous Innovation",
    description: "Advancing capabilities through research and development",
  },
];

export const About = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-lines opacity-20" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-smser-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-smser-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image & Stats */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/50">
              <img 
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="SMSER Laboratory facility"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
            </div>

            {/* Stats overlay */}
            <div className="absolute -bottom-8 -right-8 md:right-8 glass-card rounded-xl p-6 max-w-xs">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 rounded-lg bg-smser-teal/10">
                  <p className="text-3xl font-bold text-smser-teal">6+</p>
                  <p className="text-xs text-muted-foreground mt-1">Core Services</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-smser-gold/10">
                  <p className="text-3xl font-bold text-smser-gold">24/7</p>
                  <p className="text-xs text-muted-foreground mt-1">Support</p>
                </div>
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-smser-teal/30 rounded-xl" />
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-smser-gold/30 bg-smser-gold/10">
                <span className="text-xs font-semibold text-smser-gold uppercase tracking-wider">About SMSER</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Nepal's Trusted Partner in{" "}
                <span className="text-gradient-primary">Materials Excellence</span>
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Southasia Materials Science and Engineering Research (SMSER), strategically located in Chitwan, Nepal, 
              is committed to advancing materials science and engineering across South Asia. We deliver a holistic 
              quality assurance ecosystem through our integrated testing facilities, offering streamlined, 
              comprehensive solutions for all your analytical needs.
            </p>

            {/* Vision */}
            <div className="p-6 rounded-xl border border-smser-teal/30 bg-gradient-to-br from-smser-teal/5 to-transparent">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-smser-teal/20 flex items-center justify-center shrink-0">
                  <Eye className="w-6 h-6 text-smser-teal" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Our Vision</h3>
                  <p className="text-muted-foreground text-sm italic">
                    "To be the most trusted and reputed analytical testing partner, delivering unrivaled 
                    precision and speed across the nation."
                  </p>
                </div>
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div 
                  key={value.title}
                  className="p-4 rounded-xl border border-border/50 bg-card/50 hover:border-smser-teal/30 transition-all duration-300 group"
                >
                  <value.icon className="w-6 h-6 text-smser-teal mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-foreground text-sm mb-1">{value.title}</h4>
                  <p className="text-xs text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>

            {/* Registration Info */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground pt-4 border-t border-border/50">
              <span>📍 Chitwan, Nepal</span>
              <span>🏢 Registered: June 2025</span>
              <span>📋 PAN: 622371582</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
