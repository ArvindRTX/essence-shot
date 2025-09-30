import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Heart, Instagram } from "lucide-react";

const categories = ["All", "Weddings", "Portraits", "Events", "Lifestyle"];

const galleryItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
    category: "Weddings",
    title: "Garden Ceremony",
    likes: 124,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop",
    category: "Portraits",
    title: "Natural Light Portrait",
    likes: 89,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=800&auto=format&fit=crop",
    category: "Weddings",
    title: "First Dance",
    likes: 156,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
    category: "Portraits",
    title: "Urban Portrait",
    likes: 73,
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?q=80&w=800&auto=format&fit=crop",
    category: "Events",
    title: "Corporate Event",
    likes: 92,
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=800&auto=format&fit=crop",
    category: "Lifestyle",
    title: "Family Moments",
    likes: 108,
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop",
    category: "Weddings",
    title: "Bridal Portrait",
    likes: 187,
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    category: "Portraits",
    title: "Professional Headshot",
    likes: 64,
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
            <Eye className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Featured Work</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Portfolio
            <span className="text-gradient block">Highlights</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            A curated selection of our finest work, showcasing the artistry 
            and emotion we bring to every session
          </p>
          
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-6 smooth-transition ${
                  activeCategory === category 
                    ? "bg-accent text-accent-foreground shadow-lg" 
                    : "border-border hover:border-accent/50 hover:bg-accent/5"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Gallery grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer elegant-shadow hover:glow-effect smooth-transition"
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
              <div className={`absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent transition-opacity duration-500 ${
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
              
              {/* View icon */}
              <div className={`absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 ${
                hoveredItem === item.id ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}>
                <Eye className="w-5 h-5 text-white" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center animate-slide-up">
          <p className="text-muted-foreground mb-6">
            Want to see more of our work?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              asChild
            >
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Instagram className="w-4 h-4 mr-2" />
                Follow on Instagram
              </a>
            </Button>
            <Button 
              variant="outline" 
              className="border-border hover:border-accent/50 hover:bg-accent/5"
              onClick={() => scrollToSection('services')}
            >
              View Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;