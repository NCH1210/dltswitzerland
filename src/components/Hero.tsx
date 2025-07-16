import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Calendar, Zap } from "lucide-react";
import heroImage from "@/assets/hero-blockchain.jpg";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            DLT Switzerland
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Switzerland's leading Web3 community connecting innovators, developers, 
            and visionaries building the decentralized future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="group">
              Join Community
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Explore Events
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-gradient-card rounded-full flex items-center justify-center shadow-card">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm text-muted-foreground">Community Members</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-gradient-card rounded-full flex items-center justify-center shadow-card">
                <Calendar className="w-6 h-6 text-accent" />
              </div>
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm text-muted-foreground">Events Hosted</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-gradient-card rounded-full flex items-center justify-center shadow-card">
                <Zap className="w-6 h-6 text-primary-glow" />
              </div>
              <div className="text-2xl font-bold">3+</div>
              <div className="text-sm text-muted-foreground">Years Active</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float" />
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-primary-glow/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
}