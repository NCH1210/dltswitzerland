import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";

export function Events() {
  const upcomingEvents = [
    {
      title: "DeFi Innovation Summit",
      date: "March 15, 2024",
      location: "Zurich Tech Park",
      attendees: 120,
      description: "Explore the latest developments in decentralized finance with industry leaders and innovative startups.",
      type: "Summit"
    },
    {
      title: "Web3 Developer Workshop",
      date: "March 28, 2024", 
      location: "EPFL Innovation Park",
      attendees: 45,
      description: "Hands-on workshop covering smart contract development, dApp architecture, and security best practices.",
      type: "Workshop"
    },
    {
      title: "Blockchain & Sustainability",
      date: "April 10, 2024",
      location: "University of St. Gallen",
      attendees: 200,
      description: "Discussing how blockchain technology can drive sustainable development and environmental solutions.",
      type: "Conference"
    }
  ];

  const pastEvents = [
    "NFT & Digital Assets Symposium",
    "Central Bank Digital Currencies Forum",
    "Crypto Valley Annual Gathering",
    "Smart Contract Security Bootcamp"
  ];

  return (
    <section id="events" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Upcoming <span className="bg-gradient-primary bg-clip-text text-transparent">Events</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our exclusive events to network, learn, and shape the future of Web3 technology 
            alongside Switzerland's most innovative minds.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {upcomingEvents.map((event, index) => (
            <Card key={index} className="bg-gradient-card border-none shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium px-3 py-1 bg-primary/20 text-primary rounded-full">
                    {event.type}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center">
                    <Users className="w-3 h-3 mr-1" />
                    {event.attendees}
                  </span>
                </div>
                <CardTitle className="text-xl">{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2 text-primary" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2 text-accent" />
                    {event.location}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {event.description}
                </p>
                <Button variant="outline" className="w-full group">
                  Register Now
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Past Events */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Past Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pastEvents.map((event, index) => (
              <div key={index} className="flex items-center p-4 bg-muted/50 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span className="text-sm">{event}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}