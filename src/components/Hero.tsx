import { Button } from "@/components/ui/button";
import { Camera, Play, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 hero-gradient">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?q=80&w=2000&auto=format&fit=crop')"
          }}
        />
      </div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-20 w-20 h-20 border border-accent/30 rounded-full animate-float hidden lg:block" />
      <div className="absolute bottom-32 right-32 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-glow hidden lg:block" />
      
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 mb-8 animate-scale-in">
            <Camera className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Professional Photography</span>
          </div>
          
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight">
            Signature
            <span className="block text-gradient">Photography</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto font-light">
            Capturing life's most precious moments with artistic vision and 
            <span className="text-accent font-medium"> timeless elegance</span>
          </p>
          
          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button 
              size="lg" 
              className="group bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-8 py-4 h-auto elegant-shadow smooth-transition"
            >
              View Portfolio
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 smooth-transition" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="group border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 font-medium px-8 py-4 h-auto smooth-transition"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 smooth-transition" />
              Watch Reel
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-1">500+</div>
              <div className="text-sm text-white/60 uppercase tracking-wider">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-1">5</div>
              <div className="text-sm text-white/60 uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-1">50+</div>
              <div className="text-sm text-white/60 uppercase tracking-wider">Awards Won</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;