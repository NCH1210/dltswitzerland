import { Card, CardContent } from "@/components/ui/card";
import { Shield, Globe, Users, Lightbulb } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Globe,
      title: "Global Network",
      description: "Connect with Web3 professionals across Switzerland and beyond, building lasting relationships in the decentralized ecosystem."
    },
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description: "Stay at the forefront of blockchain technology with exclusive insights, workshops, and access to cutting-edge projects."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Join a vibrant community of developers, entrepreneurs, investors, and enthusiasts shaping the future of Web3."
    },
    {
      icon: Shield,
      title: "Trusted Platform",
      description: "Benefit from Switzerland's crypto-friendly regulatory environment and establish credible connections in Crypto Valley."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">DLT Switzerland</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are Switzerland's premier distributed ledger technology community, fostering innovation 
            and collaboration in the heart of Europe's blockchain ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-card border-none shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Founded in the heart of Switzerland's Crypto Valley, DLT Switzerland has been at the forefront 
            of blockchain innovation since 2021. We bring together the brightest minds in distributed ledger 
            technology to share knowledge, collaborate on groundbreaking projects, and build the 
            infrastructure for tomorrow's decentralized world.
          </p>
        </div>
      </div>
    </section>
  );
}