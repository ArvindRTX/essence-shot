import { Badge } from "@/components/ui/badge";
import { Eye, Heart } from "lucide-react";
import { useState } from "react";

const featuredImages = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
    title: "Elegant Wedding",
    category: "Wedding",
    likes: 124,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop",
    title: "Natural Portrait",
    category: "Portrait",
    likes: 89,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=800&auto=format&fit=crop",
    title: "First Dance",
    category: "Wedding",
    likes: 156,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
    title: "Urban Style",
    category: "Portrait",
    likes: 73,
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop",
    title: "Bridal Beauty",
    category: "Wedding",
    likes: 187,
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=800&auto=format&fit=crop",
    title: "Family Joy",
    category: "Family",
    likes: 108,
  },
];

const FeaturedWork = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
            <Eye className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Our Best Work</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Featured
            <span className="text-gradient block">Work</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A curated selection of our most cherished captures, each telling a unique story 
            through the lens of artistic vision
          </p>
        </div>

        {/* Featured Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredImages.map((item, index) => (
            <div
              key={item.id}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl cursor-pointer elegant-shadow hover:glow-effect smooth-transition"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
              />
              
              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent transition-opacity duration-500 ${
                hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Badge className="mb-3 bg-accent/20 text-accent border-accent/30">
                    {item.category}
                  </Badge>
                  <h3 className="text-white font-serif text-xl font-bold mb-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white/80">
                    <Heart className="w-4 h-4" />
                    <span className="text-sm">{item.likes} likes</span>
                  </div>
                </div>
              </div>
              
              {/* View Icon */}
              <div className={`absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 ${
                hoveredItem === item.id ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}>
                <Eye className="w-5 h-5 text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-slide-up">
          <p className="text-muted-foreground mb-6">
            Ready to create something beautiful together?
          </p>
          <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-full font-medium smooth-transition">
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;