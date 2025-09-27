import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Camera, 
  Heart, 
  Users, 
  Baby, 
  Briefcase, 
  Sparkles,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Wedding Photography",
    description: "Capturing your special day with artistic elegance and emotional depth",
    features: ["Full day coverage", "Engagement session", "Online gallery", "Print package"],
    price: "Starting at $2,500",
    popular: true,
  },
  {
    icon: Users,
    title: "Family Portraits",
    description: "Beautiful family memories that will be treasured for generations",
    features: ["Studio or location", "Multiple outfit changes", "Edited gallery", "Print release"],
    price: "Starting at $450",
    popular: false,
  },
  {
    icon: Baby,
    title: "Newborn Sessions",
    description: "Gentle and safe photography for your precious little one",
    features: ["Props included", "Parent shots", "Sibling photos", "Same week editing"],
    price: "Starting at $650",
    popular: false,
  },
  {
    icon: Briefcase,
    title: "Corporate Events",
    description: "Professional event documentation and corporate headshots",
    features: ["Event coverage", "Team photos", "Brand consistency", "Quick delivery"],
    price: "Starting at $800",
    popular: false,
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Our Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Capturing Life's
            <span className="text-gradient block">Beautiful Moments</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each service is tailored to tell your unique story with 
            artistic vision and professional excellence
          </p>
        </div>
        
        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className={`group relative overflow-hidden border-0 elegant-shadow hover:glow-effect smooth-transition cursor-pointer ${
                service.popular ? 'ring-2 ring-accent/20' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.popular && (
                <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                  Most Popular
                </Badge>
              )}
              
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 smooth-transition">
                    <service.icon className="w-8 h-8 text-accent" />
                  </div>
                  
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="pt-6 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-accent">{service.price}</span>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 smooth-transition" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center animate-slide-up">
          <p className="text-muted-foreground mb-6">
            Need something custom? We'd love to create a personalized package for you.
          </p>
          <div className="inline-flex items-center gap-2 text-accent font-medium hover:gap-4 smooth-transition cursor-pointer">
            <span>Let's discuss your vision</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;