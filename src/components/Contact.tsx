import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "hello@dltswitzerland.ch",
      link: "mailto:hello@dltswitzerland.ch"
    },
    {
      icon: MapPin,
      title: "Location",
      info: "Zurich, Switzerland",
      link: "#"
    },
    {
      icon: Phone,
      title: "Community",
      info: "Join our Discord",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about DLT Switzerland? Want to propose a partnership or speaking opportunity? 
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-gradient-card border-none shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">First Name</label>
                  <Input placeholder="Your first name" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Last Name</label>
                  <Input placeholder="Your last name" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input type="email" placeholder="your.email@example.com" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Company (Optional)</label>
                <Input placeholder="Your company name" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea 
                  placeholder="Tell us about your interest in DLT Switzerland, partnership ideas, or any questions you have..."
                  rows={5}
                />
              </div>
              <Button variant="hero" className="w-full group">
                Send Message
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We're always looking to connect with passionate individuals and organizations 
                who share our vision for a decentralized future. Whether you're a developer, 
                entrepreneur, investor, or simply curious about Web3, we welcome you to join our community.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <a 
                      href={item.link}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.info}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-hero p-6 rounded-lg">
              <h4 className="font-semibold mb-3">Partnership Opportunities</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Interested in sponsoring events, hosting workshops, or collaborating on initiatives? 
                We're always open to meaningful partnerships that benefit our community.
              </p>
              <Button variant="outline" size="sm">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}