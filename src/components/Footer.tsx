import { MessageCircle, Twitter, Linkedin, Github } from "lucide-react";

export function Footer() {
  const footerLinks = {
    Community: [
      { label: "Join Discord", href: "#" },
      { label: "Telegram Group", href: "#" },
      { label: "Newsletter", href: "#" },
      { label: "Member Directory", href: "#" }
    ],
    Resources: [
      { label: "Blog", href: "#" },
      { label: "Documentation", href: "#" },
      { label: "Research Papers", href: "#" },
      { label: "Developer Tools", href: "#" }
    ],
    Events: [
      { label: "Upcoming Events", href: "#events" },
      { label: "Past Events", href: "#" },
      { label: "Workshop Series", href: "#" },
      { label: "Annual Conference", href: "#" }
    ],
    About: [
      { label: "Our Mission", href: "#about" },
      { label: "Team", href: "#" },
      { label: "Partners", href: "#" },
      { label: "Contact", href: "#contact" }
    ]
  };

  const socialLinks = [
    { icon: MessageCircle, href: "#", label: "Discord" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" }
  ];

  return (
    <footer className="bg-gradient-hero border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/13baca19-ca5a-4bd0-9477-348dc98bf76f.png" 
                alt="DLT Switzerland Logo" 
                className="w-10 h-10 object-contain rounded-lg"
              />
              <span className="font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">DLT Switzerland</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Switzerland's leading Web3 community connecting innovators, developers, 
              and visionaries building the decentralized future.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 DLT Switzerland. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Code of Conduct
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}