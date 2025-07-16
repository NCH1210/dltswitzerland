import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MessageCircle, 
  Github, 
  Linkedin, 
  Twitter, 
  Coffee,
  Handshake,
  BookOpen,
  Rocket
} from "lucide-react";

export function Community() {
  const benefits = [
    {
      icon: Coffee,
      title: "Networking Events",
      description: "Regular meetups, workshops, and social gatherings to connect with like-minded professionals."
    },
    {
      icon: BookOpen,
      title: "Educational Resources",
      description: "Access to exclusive content, tutorials, and insights from industry experts and thought leaders."
    },
    {
      icon: Handshake,
      title: "Partnership Opportunities", 
      description: "Connect with potential co-founders, partners, and collaborators for your next Web3 venture."
    },
    {
      icon: Rocket,
      title: "Project Launchpad",
      description: "Get support and feedback for your blockchain projects from a community of experienced builders."
    }
  ];

  const socialLinks = [
    { icon: MessageCircle, label: "Discord", href: "#", color: "text-[#5865F2]" },
    { icon: Twitter, label: "Twitter", href: "#", color: "text-[#1DA1F2]" },
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "text-[#0077B5]" },
    { icon: Github, label: "GitHub", href: "#", color: "text-foreground" }
  ];

  return (
    <section id="community" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our <span className="bg-gradient-primary bg-clip-text text-transparent">Community</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Become part of Switzerland's most active Web3 community and unlock opportunities 
            for growth, collaboration, and innovation.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-gradient-card border-none shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-8">
            Join hundreds of Web3 enthusiasts, developers, and innovators building the future 
            of decentralized technology in Switzerland.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Join Discord Community
            </Button>
            <Button variant="outline" size="lg">
              Apply for Membership
            </Button>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="w-12 h-12 bg-gradient-card rounded-full flex items-center justify-center shadow-card hover:shadow-glow transition-all duration-300 hover:scale-110 group"
            >
              <social.icon className={`w-6 h-6 ${social.color} group-hover:scale-110 transition-transform`} />
            </a>
          ))}
        </div>

        {/* Community Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Discord Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Monthly Meetups</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-glow mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Partner Companies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-glow mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Open Source</div>
          </div>
        </div>
      </div>
    </section>
  );
}