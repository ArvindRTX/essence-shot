import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Signature Photography captured our wedding day with such artistry and emotion. Every photo tells our story perfectly, and we couldn't be happier with the results.",
    name: "Sarah & Michael Johnson",
    event: "Wedding Photography",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 2,
    quote: "The team's professionalism and creative vision exceeded all our expectations. Our family portraits are now treasured heirlooms that we'll cherish forever.",
    name: "Emily Rodriguez",
    event: "Family Portrait Session",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 3,
    quote: "From the initial consultation to the final delivery, everything was seamless. The attention to detail and artistic approach made our corporate event photography outstanding.",
    name: "David Chen",
    event: "Corporate Event",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
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
            <Card 
              key={testimonial.id}
              className="group relative overflow-hidden border-0 elegant-shadow hover:glow-effect smooth-transition"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
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
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.event}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-slide-up">
          <p className="text-muted-foreground mb-6">
            Ready to create your own story with us?
          </p>
          <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-full font-medium smooth-transition">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;