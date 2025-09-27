import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Services from "../components/Services";
import FeaturedWork from "../components/FeaturedWork";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedWork />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
