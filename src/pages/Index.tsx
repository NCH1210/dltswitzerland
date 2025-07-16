import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Events } from "@/components/Events";
import { Community } from "@/components/Community";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Events />
      <Community />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
