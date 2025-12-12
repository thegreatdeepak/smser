import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 grid-lines" />
        {/* Animated neon lines */}
        <div className="neon-line-h top-1/4 animate-slide-right" style={{ animationDuration: '15s' }} />
        <div className="neon-line-h top-1/2 animate-slide-left" style={{ animationDuration: '20s' }} />
        <div className="neon-line-h top-3/4 animate-slide-right" style={{ animationDuration: '25s' }} />
        <div className="neon-line-v left-1/4 animate-slide-down" style={{ animationDuration: '18s' }} />
        <div className="neon-line-v left-3/4 animate-slide-down" style={{ animationDuration: '22s', animationDelay: '5s' }} />
      </div>

      {/* Mountain silhouette background */}
      <div className="absolute bottom-0 left-0 right-0 h-96 mountain-bg opacity-50 z-0" />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-10" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-smser-teal/5 to-transparent z-10" />

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-smser-teal/30 bg-smser-teal/10 backdrop-blur-sm animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-smser-gold animate-pulse" />
              <span className="text-sm font-medium text-smser-teal-light">Nepal's Premier Materials Testing Laboratory</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
                <span className="text-foreground">Precision You Can</span>
                <br />
                <span className="text-gradient-primary">Trust</span>
                <span className="text-smser-gold">.</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
                Committed to rigorous precision and inspired by the pursuit of discovery. 
                Your complete analytical testing partner for infrastructure excellence.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" className="group">
                Request Testing Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="hero-outline" size="xl">
                Get a Free Quote
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border/50">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-smser-teal">
                  <Shield className="w-5 h-5" />
                  <span className="text-2xl font-bold text-foreground">ISO</span>
                </div>
                <p className="text-xs text-muted-foreground">Certified Quality</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-smser-teal">
                  <Clock className="w-5 h-5" />
                  <span className="text-2xl font-bold text-foreground">24/7</span>
                </div>
                <p className="text-xs text-muted-foreground">Support Available</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-smser-teal">
                  <Award className="w-5 h-5" />
                  <span className="text-2xl font-bold text-foreground">6+</span>
                </div>
                <p className="text-xs text-muted-foreground">Testing Services</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-square">
              {/* Main image container */}
              <div className="absolute inset-8 rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-smser-teal/10">
                <img 
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Materials testing laboratory"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>

              {/* Floating cards */}
              <div className="absolute top-4 right-4 glass-card rounded-xl p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-smser-teal/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-smser-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Quality Assured</p>
                    <p className="text-xs text-muted-foreground">100% Accuracy</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 glass-card rounded-xl p-4 animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-smser-gold/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-smser-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">One-Stop Solution</p>
                    <p className="text-xs text-muted-foreground">All Testing Services</p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border border-smser-teal/30 rounded-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-smser-gold/20 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
};
