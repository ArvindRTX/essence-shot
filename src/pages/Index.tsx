import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import { useMouseGradient } from "@/hooks/useMouseGradient";

const Index = () => {
  useMouseGradient();
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Gallery />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
