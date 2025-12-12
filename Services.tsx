import { Button } from "@/components/ui/button";
import { ArrowRight, Mountain, Building2, Search, Car, HardHat, Leaf } from "lucide-react";

const services = [
  {
    id: "geotechnical",
    icon: Mountain,
    title: "Geotechnical & Geophysical Investigations",
    description: "Comprehensive soil and rock analysis for safe foundation design and construction planning.",
    features: [
      "Drilling & Boring",
      "SPT, CPT, Vane Shear Tests",
      "Seismic Surveys",
      "Resistivity Testing",
      "Laboratory Soil Analysis",
    ],
    color: "smser-teal",
  },
  {
    id: "foundation",
    icon: Building2,
    title: "Foundation Testing",
    description: "Ensure structural integrity with comprehensive pile and foundation load testing services.",
    features: [
      "Static Pile Load Tests",
      "Dynamic Pile Load Tests",
      "Pile Integrity Testing (PIT)",
      "Pull-out Tests",
      "Lateral Load Tests",
    ],
    color: "smser-gold",
  },
  {
    id: "ndt",
    icon: Search,
    title: "Non-Destructive Testing (NDT)",
    description: "Advanced structural health assessment without compromising material integrity.",
    features: [
      "Ultrasonic Testing",
      "Rebound Hammer Test",
      "Corrosion Detection",
      "Rebar Scanning",
      "Structural Assessment",
    ],
    color: "smser-teal",
  },
  {
    id: "pavement",
    icon: Car,
    title: "Pavement Investigation",
    description: "Evaluate road conditions and performance for optimal maintenance and design decisions.",
    features: [
      "Falling Weight Deflectometer",
      "Roughness Index Surveys",
      "Core Testing",
      "CBR Testing",
      "Traffic Surveys",
    ],
    color: "smser-gold",
  },
  {
    id: "construction",
    icon: HardHat,
    title: "Construction Material Testing",
    description: "Quality assurance for all construction materials ensuring compliance with standards.",
    features: [
      "Concrete Testing",
      "Cement Analysis",
      "Aggregate Testing",
      "Steel Testing",
      "Mix Design Services",
    ],
    color: "smser-teal",
  },
  {
    id: "environmental",
    icon: Leaf,
    title: "Environmental Testing",
    description: "Comprehensive environmental analysis for regulatory compliance and sustainability.",
    features: [
      "Water Quality Testing",
      "Air Quality Analysis",
      "Stack Emissions",
      "Soil Testing",
      "Waste Characterization",
    ],
    color: "smser-gold",
  },
];

export const Services = () => {
  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-background via-muted/30 to-background">
      {/* Background */}
      <div className="absolute inset-0 grid-lines opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-smser-teal/30 bg-smser-teal/10 mb-4">
            <span className="text-xs font-semibold text-smser-teal uppercase tracking-wider">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Comprehensive{" "}
            <span className="text-gradient-primary">Testing Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            One facility, complete testing services. We provide integrated quality assurance 
            solutions tailored to your project needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="group relative p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 overflow-hidden"
            >
              {/* Glow effect */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 bg-${service.color}/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className={`relative w-14 h-14 rounded-xl bg-${service.color}/10 border border-${service.color}/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-7 h-7 text-${service.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className={`w-1.5 h-1.5 rounded-full bg-${service.color}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg">
              Request Testing Services
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-outline" size="lg">
              Download Service Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
