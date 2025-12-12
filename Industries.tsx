import { Truck, Factory, Droplets, Building } from "lucide-react";

const industries = [
  {
    icon: Truck,
    title: "Infrastructure & Transportation",
    description: "Highways, bridges, airports, tunnels, and major transport networks.",
    applications: [
      "Road pavement analysis",
      "Bridge foundation testing",
      "Airport runway assessment",
      "Tunnel structural evaluation",
    ],
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: Factory,
    title: "Energy & Industrial",
    description: "Power plants, refineries, renewable energy, and mining operations.",
    applications: [
      "Power plant foundations",
      "Refinery structural analysis",
      "Wind/Solar farm testing",
      "Mining site evaluation",
    ],
    image: "https://images.unsplash.com/photo-1518173946687-a4c036bc1e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: Droplets,
    title: "Water & Environment",
    description: "Dams, reservoirs, water treatment, and environmental projects.",
    applications: [
      "Dam safety assessment",
      "Reservoir foundation analysis",
      "Water quality testing",
      "Environmental compliance",
    ],
    image: "https://images.unsplash.com/photo-1474291103079-b12dc993a971?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: Building,
    title: "Urban Development",
    description: "Real estate, institutions, commercial buildings, and urban infrastructure.",
    applications: [
      "High-rise foundation testing",
      "Commercial building analysis",
      "Institutional structure evaluation",
      "Urban infrastructure assessment",
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
];

export const Industries = () => {
  return (
    <section id="industries" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-lines opacity-10" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-smser-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-smser-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-smser-gold/30 bg-smser-gold/10 mb-4">
            <span className="text-xs font-semibold text-smser-gold uppercase tracking-wider">Industries Served</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Powering Nepal's{" "}
            <span className="text-gradient-gold">Growth Sectors</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From mega infrastructure projects to sustainable urban development, 
            SMSER supports diverse sectors with precision testing services.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <div
              key={industry.title}
              className="group relative rounded-2xl border border-border/50 overflow-hidden bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                {/* Icon badge */}
                <div className="absolute bottom-4 left-6 w-12 h-12 rounded-xl bg-smser-teal/20 backdrop-blur-sm border border-smser-teal/30 flex items-center justify-center">
                  <industry.icon className="w-6 h-6 text-smser-teal" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {industry.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {industry.description}
                </p>

                {/* Applications */}
                <div className="grid grid-cols-2 gap-2">
                  {industry.applications.map((app, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-2 text-xs text-muted-foreground"
                    >
                      <span className="w-1 h-1 rounded-full bg-smser-gold" />
                      {app}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
