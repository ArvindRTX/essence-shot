import { useState } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Signature Photography captured our wedding day with such artistry and emotion. Every photo tells our story perfectly, and we couldn't be happier with the results.",
    name: "Velladurai & Susila",
    event: "Wedding Photography",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 2,
    quote: "The team's professionalism and creative vision exceeded all our expectations. Our family portraits are now treasured heirlooms that we'll cherish forever.",
    name: "Vijay Vaithiyanathan",
    event: "Family Portrait Session",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 3,
    quote: "From the initial consultation to the final delivery, everything was seamless. The attention to detail and artistic approach made our corporate event photography outstanding.",
    name: "Solomon Raja",
    event: "Corporate Event",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3"
  }
];

const Testimonials = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: number) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    card.style.setProperty('--mouse-x', `${x}%`);
    card.style.setProperty('--mouse-y', `${y}%`);
    
    const rotateX = ((y - 50) / 50) * -5;
    const rotateY = ((x - 50) / 50) * 5;
    card.style.setProperty('--rotate-x', `${rotateX}deg`);
    card.style.setProperty('--rotate-y', `${rotateY}deg`);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.setProperty('--rotate-x', '0deg');
    card.style.setProperty('--rotate-y', '0deg');
  };

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Floating glass particles */}
      <div className="absolute top-20 left-10 w-32 h-32 glass-card rounded-full animate-float opacity-20" />
      <div className="absolute bottom-40 right-20 w-24 h-24 glass-card rounded-full animate-float opacity-30" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 glass-card rounded-full animate-glow opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 glass-card-light rounded-full px-4 py-2 mb-6 hover:glass-glow smooth-transition">
            <Quote className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Client Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            What Our Clients
            <span className="text-gradient block">Say</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about 
            their experience working with us
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="glass-card glass-interactive tilt-card group relative overflow-hidden border-0 rounded-xl p-8 elegant-shadow hover:glow-effect smooth-transition"
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseMove={(e) => handleMouseMove(e, testimonial.id)}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={() => setHoveredCard(testimonial.id)}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center mb-4 group-hover:scale-110 smooth-transition">
                    <Quote className="w-6 h-6 text-accent" />
                  </div>
                  
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-accent/30 group-hover:ring-accent/60 smooth-transition"
                    />
                    <div className="absolute inset-0 rounded-full bg-accent/20 opacity-0 group-hover:opacity-100 smooth-transition" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-accent smooth-transition">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.event}
                    </p>
                  </div>
                </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-slide-up">
          <p className="text-muted-foreground mb-6">
            Ready to create your own story with us?
          </p>
          <button className="glass-card border-accent/40 text-foreground hover:glass-glow hover:scale-105 px-8 py-3 rounded-full font-medium smooth-transition">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;