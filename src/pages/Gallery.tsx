
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, Filter, Camera } from 'lucide-react';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const categories = [
    { id: 'all', name: 'All Photos', count: 24 },
    { id: 'scenic', name: 'Epic Views', count: 8 },
    { id: 'food', name: 'Tasty Adventures', count: 6 },
    { id: 'culture', name: 'Culture Vibes', count: 5 },
    { id: 'adventure', name: 'Wild Times', count: 5 }
  ];

  const galleryImages = [
    { id: 1, category: 'scenic', src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Epic mountain sunrise view' },
    { id: 2, category: 'food', src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Amazing local street food' },
    { id: 3, category: 'adventure', src: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Wild river rafting adventure' },
    { id: 4, category: 'culture', src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Beautiful historic architecture' },
    { id: 5, category: 'scenic', src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Stunning coastal landscape' },
    { id: 6, category: 'food', src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Farm to table dining experience' },
    { id: 7, category: 'adventure', src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Epic mountain hiking trail' },
    { id: 8, category: 'culture', src: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Local artisan workshop' },
    { id: 9, category: 'scenic', src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Magical sunset over valley' },
    { id: 10, category: 'food', src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Fun cooking class experience' },
    { id: 11, category: 'adventure', src: 'https://images.unsplash.com/photo-1551524164-6cf29ac42fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Thrilling rock climbing experience' },
    { id: 12, category: 'culture', src: 'https://images.unsplash.com/photo-1495571758719-6ec1e8d52089?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Colorful traditional festival' }
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-muted/20 outdoor-decoration">
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-20 lg:py-32 overflow-hidden">
        <div className="bird-decoration"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-primary-foreground/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-primary-foreground/5 rounded-full blur-lg animate-bounce-gentle"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <Camera className="w-16 h-16 mx-auto mb-6 text-primary-foreground animate-wiggle" />
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-8">Adventure Gallery</h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-primary-foreground/90 max-w-5xl mx-auto leading-relaxed font-medium">
              Check out these epic moments captured during our wild adventures! 
              These shots showcase the incredible experiences waiting for you.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-card/90 backdrop-blur-sm sticky top-16 z-40 border-b-2 border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <Filter className="w-6 h-6 text-primary mr-3" />
            <span className="text-primary font-black text-lg">Filter by vibe</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-3xl transition-all duration-300 font-black ${
                  activeCategory === category.id 
                    ? 'bg-primary text-primary-foreground shadow-2xl scale-110' 
                    : 'border-2 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50'
                }`}
              >
                {category.name}
                <span className="ml-2 text-xs bg-muted/50 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {filteredImages.map((image, index) => (
              <Card 
                key={image.id} 
                className="overflow-hidden hover-lift group cursor-pointer border-0 shadow-2xl bg-card scroll-reveal rounded-3xl wavy-border"
                style={{animationDelay: `${index * 0.08}s`}}
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative aspect-square">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-primary-foreground/20 backdrop-blur-sm rounded-full p-4">
                        <Eye className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-accent/90 backdrop-blur-sm text-accent-foreground px-3 py-1 rounded-2xl text-xs font-black">
                      {categories.find(cat => cat.id === image.category)?.name}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] animate-scale-in">
            <img
              src={selectedImage}
              alt="Gallery image"
              className="w-full h-full object-contain rounded-3xl"
            />
            <Button
              variant="outline"
              size="sm"
              className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 rounded-2xl font-black"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
