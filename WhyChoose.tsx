import { Clock, Award, Users, Beaker, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock technical assistance and project support",
    stat: "24/7",
  },
  {
    icon: Beaker,
    title: "State-of-the-Art Equipment",
    description: "Latest testing instruments for accurate results",
    stat: "Modern",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Qualified engineers and scientists with deep expertise",
    stat: "Expert",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "ISO-compliant processes ensuring reliable outcomes",
    stat: "ISO",
  },
  {
    icon: Award,
    title: "One-Stop Solution",
    description: "All testing services under one roof for convenience",
    stat: "6+",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Quick delivery without compromising on precision",
    stat: "Fast",
  },
];

export const WhyChoose = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-muted/50 to-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-lines opacity-10" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-smser-teal/20 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-smser-gold/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-smser-teal/30 bg-smser-teal/10 mb-4">
            <span className="text-xs font-semibold text-smser-teal uppercase tracking-wider">Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            The SMSER{" "}
            <span className="text-gradient-primary">Advantage</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Experience unparalleled precision and service excellence with Nepal's 
            most trusted materials testing laboratory.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/60 hover:border-primary/30 transition-all duration-500"
            >
              {/* Stat Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-smser-teal/10 border border-smser-teal/20">
                <span className="text-xs font-bold text-smser-teal">{feature.stat}</span>
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-smser-teal/20 to-smser-deep-blue/20 border border-smser-teal/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-smser-teal" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-smser-deep-blue/50 to-smser-teal/30 border border-smser-teal/30 backdrop-blur-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl lg:text-5xl font-bold text-foreground mb-1">6+</p>
              <p className="text-sm text-muted-foreground">Testing Services</p>
            </div>
            <div className="text-center">
              <p className="text-4xl lg:text-5xl font-bold text-smser-teal mb-1">24/7</p>
              <p className="text-sm text-muted-foreground">Support Available</p>
            </div>
            <div className="text-center">
              <p className="text-4xl lg:text-5xl font-bold text-smser-gold mb-1">100%</p>
              <p className="text-sm text-muted-foreground">Quality Focused</p>
            </div>
            <div className="text-center">
              <p className="text-4xl lg:text-5xl font-bold text-foreground mb-1">1</p>
              <p className="text-sm text-muted-foreground">Complete Facility</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
