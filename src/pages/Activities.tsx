
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { CheckCircle, Clock, Users, MapPin, TreePine } from 'lucide-react';
import { useScrollAnimations } from '@/hooks/use-scroll-animations';

const Activities = () => {
  useScrollAnimations();

  const activities = [
    {
      name: "Epic Mountain Trek",
      images: [
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1464822759844-d150baec0494?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      description: "Conquer breathtaking peaks with panoramic views and spot amazing wildlife. Perfect for nature lovers and thrill seekers!",
      duration: "6 hours",
      difficulty: "Moderate"
    },
    {
      name: "Foodie Market Adventure",
      images: [
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1567306301408-9b74779a11af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      description: "Dive into local culture at vibrant markets. Taste incredible street food and discover amazing handmade treasures!",
      duration: "3 hours",
      difficulty: "Easy"
    },
    {
      name: "Wild Water Rush",
      images: [
        "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      description: "Get your adrenaline pumping with kayaking and rafting through stunning natural waterways and rapids!",
      duration: "5 hours",
      difficulty: "Moderate"
    },
    {
      name: "Culture & History Hunt",
      images: [
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1520637836862-4d197d17c35a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1539650116574-75c0c6d73a0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      description: "Uncover amazing stories and stunning architecture on guided walks through historic neighborhoods and landmarks.",
      duration: "4 hours",
      difficulty: "Easy"
    },
    {
      name: "Wildlife Safari Experience",
      images: [
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1549366021-9f761d040a94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1535406208535-1429839cfd13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      description: "Get up close with native animals in their natural habitat with expert guides and pro photography equipment!",
      duration: "7 hours",
      difficulty: "Easy"
    },
    {
      name: "Sunset Photo Adventure",
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1464822759844-d150baec0494?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      description: "Capture Instagram-worthy sunset shots from secret spots with tips from professional photographers!",
      duration: "3 hours",
      difficulty: "Easy"
    }
  ];

  const inclusions = [
    "Expert adventure guide for all activities",
    "All gear and safety equipment included", 
    "Transportation between epic locations",
    "Delicious snacks and meals provided",
    "Small groups for personalized fun",
    "Photography tips and assistance"
  ];

  const handleBookNow = () => {
    const element = document.getElementById('contact-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact-section';
    }
  };

  return (
    <div className="min-h-screen bg-muted/20 outdoor-decoration">
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-20 lg:py-32 overflow-hidden">
        <div className="bird-decoration"></div>
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary-foreground/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-primary-foreground/5 rounded-full blur-lg animate-bounce-gentle"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <TreePine className="w-16 h-16 mx-auto mb-6 text-primary-foreground animate-wiggle" />
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-8">Epic Activities</h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-primary-foreground/90 max-w-5xl mx-auto leading-relaxed font-medium">
              Get ready for heart-pumping adventures! Each experience is handpicked to showcase 
              the wildest, most beautiful, and most exciting spots in our region.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Before Activities */}
      {/*<section className="py-12 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4">
            Ready for Epic Adventures?
          </h2>
          <p className="text-lg sm:text-xl mb-6 text-accent-foreground/80 font-medium">
            Book your adventure today and create memories that last a lifetime!
          </p>
          <Button 
            onClick={handleBookNow}
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-3xl px-8 py-4 text-lg font-black fun-button"
          >
            Book Your Adventure Now!
          </Button>
        </div>
      </section>
        */}

        
      {/* Activities Grid */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 scroll-reveal">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-primary mb-8">
              What Adventures Await You?
            </h2>
            <p className="text-xl sm:text-2xl text-foreground/70 max-w-4xl mx-auto leading-relaxed font-medium">
              Our tours pack in diverse activities designed to give you the ultimate 
              taste of local life, natural wonders, and cultural thrills!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {activities.map((activity, index) => (
              <Card key={index} className="overflow-hidden hover-lift group border-0 shadow-2xl bg-card rounded-3xl scroll-reveal wavy-border" style={{animationDelay: `${index * 0.15}s`}}>
                <div className="relative">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {activity.images.map((image, idx) => (
                        <CarouselItem key={idx}>
                          <div 
                            className="h-56 lg:h-64 bg-cover bg-center group-hover-scale transition-transform duration-700"
                            style={{ backgroundImage: `url('${image}')` }}
                          >
                            <div className="absolute inset-0 bg-primary/20"></div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </Carousel>
                  
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent/90 backdrop-blur-sm text-accent-foreground px-3 py-2 rounded-2xl text-sm font-black">
                      {activity.difficulty}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center text-sm font-bold">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{activity.duration}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 lg:p-8">
                  <h3 className="text-xl lg:text-2xl font-black mb-4 text-primary">
                    {activity.name}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed font-medium">
                    {activity.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Included Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center scroll-reveal">
            <Card className="bg-card shadow-2xl max-w-5xl mx-auto border-0 rounded-3xl wavy-border">
              <CardContent className="p-10 lg:p-16">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-3xl flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-5xl font-black text-primary mb-10">
                  Included in Every Adventure
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 text-left">
                  {inclusions.map((inclusion, index) => (
                    <div key={index} className="flex items-start group">
                      <div className="w-3 h-3 bg-primary rounded-full mr-4 mt-2 group-hover:scale-150 transition-transform"></div>
                      <span className="text-foreground/70 group-hover:text-foreground transition-colors font-medium text-lg">
                        {inclusion}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
                  <div className="flex items-center text-foreground/70">
                    <Users className="w-6 h-6 mr-3 text-primary" />
                    <span className="font-bold">Small groups (max 12 adventurers)</span>
                  </div>
                  <div className="flex items-center text-foreground/70">
                    <MapPin className="w-6 h-6 mr-3 text-primary" />
                    <span className="font-bold">Multiple stunning locations</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4">
            Don't Wait - Adventure is Calling!
          </h2>
          <p className="text-lg sm:text-xl mb-6 text-primary-foreground/80 font-medium">
            Secure your spot on these amazing adventures. Limited group sizes mean limited availability!
          </p>
          <Button 
            onClick={handleBookNow}
            className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-3xl px-8 py-4 text-lg font-black fun-button"
          >
            Contact Us to Book Now!
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Activities;
