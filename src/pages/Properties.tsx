
import React, { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Wifi, Coffee, Car, Utensils, Star, MapPin, Users } from 'lucide-react';
import { useScrollAnimations } from '@/hooks/use-scroll-animations';

const Properties = () => {
  useScrollAnimations();

  const properties = [
    {
      id: 1,
      name: "Mountain View Lodge",
      gallery: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      location: "Mountain Ridge",
      rating: 4.8,
      reviews: 124,
      price: 120,
      capacity: "2-4 guests",
      amenities: [
        { icon: <Wifi className="w-4 h-4" />, name: "Free Wi-Fi" },
        { icon: <Coffee className="w-4 h-4" />, name: "Breakfast included" },
        { icon: <Car className="w-4 h-4" />, name: "Free parking" },
        { icon: <Utensils className="w-4 h-4" />, name: "Kitchenette" }
      ],
      description: "Cozy lodge with stunning mountain views, perfect for nature lovers seeking tranquility and comfort."
    },
    {
      id: 2,
      name: "Riverside Cabin",
      gallery: [
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      location: "Crystal River",
      rating: 4.9,
      reviews: 89,
      price: 95,
      capacity: "2-3 guests",
      amenities: [
        { icon: <Wifi className="w-4 h-4" />, name: "Free Wi-Fi" },
        { icon: <Coffee className="w-4 h-4" />, name: "Coffee & tea" },
        { icon: <Car className="w-4 h-4" />, name: "Parking available" },
        { icon: <Utensils className="w-4 h-4" />, name: "BBQ facilities" }
      ],
      description: "Charming cabin by the river offering peaceful sounds of flowing water and excellent fishing opportunities."
    },
    {
      id: 3,
      name: "Heritage House",
      gallery: [
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      location: "Historic District",
      rating: 4.7,
      reviews: 156,
      price: 140,
      capacity: "4-6 guests",
      amenities: [
        { icon: <Wifi className="w-4 h-4" />, name: "High-speed Wi-Fi" },
        { icon: <Coffee className="w-4 h-4" />, name: "Full breakfast" },
        { icon: <Car className="w-4 h-4" />, name: "Valet parking" },
        { icon: <Utensils className="w-4 h-4" />, name: "Full kitchen" }
      ],
      description: "Beautifully restored historic home in the heart of the old town, walking distance to all cultural attractions."
    },
    {
      id: 4,
      name: "Lakeside Retreat",
      gallery: [
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      location: "Serenity Lake",
      rating: 4.9,
      reviews: 203,
      price: 180,
      capacity: "2-4 guests",
      amenities: [
        { icon: <Wifi className="w-4 h-4" />, name: "Starlink Wi-Fi" },
        { icon: <Coffee className="w-4 h-4" />, name: "Gourmet breakfast" },
        { icon: <Car className="w-4 h-4" />, name: "Private parking" },
        { icon: <Utensils className="w-4 h-4" />, name: "Chef's kitchen" }
      ],
      description: "Luxury lakefront property with private dock, offering the ultimate in relaxation and water activities."
    }
  ];

  const handleBookNow = (propertyName: string) => {
    const element = document.getElementById('contact-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      
      // Store property for contact methods
      sessionStorage.setItem('selectedProperty', propertyName);
    } else {
      // Navigate to home page contact section if not on home page
      window.location.href = '/#contact-section';
      sessionStorage.setItem('selectedProperty', propertyName);
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
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-8">Stay With Us</h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-primary-foreground/90 max-w-5xl mx-auto leading-relaxed font-medium">
              Choose from our carefully selected accommodations for your overnight package. 
              Each property offers comfort, local charm, and easy access to tour activities.
            </p>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 scroll-reveal">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-primary mb-8">
              Handpicked Accommodations
            </h2>
            <p className="text-xl sm:text-2xl text-foreground/70 max-w-4xl mx-auto leading-relaxed font-medium">
              From cozy mountain lodges to lakeside retreats, our properties are chosen for their 
              unique character, comfort, and connection to the local experience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {properties.map((property, index) => (
              <Card key={property.id} className="overflow-hidden hover-lift group border-0 shadow-2xl bg-card rounded-3xl wavy-border scroll-reveal" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="relative">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {property.gallery.map((image, idx) => (
                        <CarouselItem key={idx}>
                          <div 
                            className="h-64 sm:h-72 lg:h-80 bg-cover bg-center group-hover-scale transition-transform duration-500"
                            style={{ backgroundImage: `url('${image}')` }}
                          >
                            <div className="absolute inset-0 bg-primary/20"></div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                  </Carousel>
                  
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <span className="bg-accent/90 backdrop-blur-sm text-accent-foreground px-3 py-2 rounded-2xl text-sm font-black">
                      Featured
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-primary/20 backdrop-blur-sm rounded-2xl px-3 py-2 flex items-center">
                      <Star className="w-4 h-4 text-accent mr-1" fill="currentColor" />
                      <span className="text-white text-sm font-bold">{property.rating}</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center text-sm font-bold">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{property.location}</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-8 lg:p-10">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-black text-primary mb-3">
                        {property.name}
                      </h3>
                      <div className="flex items-center text-sm text-foreground/70 mb-4 font-medium">
                        <Users className="w-4 h-4 mr-2 text-primary" />
                        <span>{property.capacity}</span>
                        <span className="mx-2">•</span>
                        <span>{property.reviews} reviews</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl lg:text-4xl font-black text-primary">
                        ${property.price}
                      </div>
                      <div className="text-sm text-foreground/70 font-medium">per night</div>
                    </div>
                  </div>

                  <p className="text-foreground/70 mb-8 leading-relaxed font-medium text-lg">
                    {property.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {property.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-center text-sm text-foreground/70 group">
                        <div className="text-primary mr-3 group-hover:scale-125 transition-transform">
                          {amenity.icon}
                        </div>
                        <span className="group-hover:text-foreground transition-colors font-medium">
                          {amenity.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    onClick={() => handleBookNow(property.name)}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-3xl py-4 text-lg font-black fun-button"
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-20 scroll-reveal">
            <Card className="bg-card shadow-2xl max-w-5xl mx-auto border-0 rounded-3xl wavy-border">
              <CardContent className="p-10 lg:p-16">
                <h3 className="text-2xl sm:text-3xl lg:text-5xl font-black text-primary mb-10">
                  Why Choose Our Properties?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 text-left">
                  {[
                    "Personally inspected for quality and comfort",
                    "Strategic locations near tour activities",
                    "Local hosts with insider knowledge",
                    "Flexible booking and cancellation",
                    "24/7 support during your stay",
                    "Authentic local experiences included"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start group">
                      <div className="w-3 h-3 bg-primary rounded-full mr-4 mt-2 group-hover:scale-150 transition-transform"></div>
                      <span className="text-foreground/70 group-hover:text-foreground transition-colors font-medium text-lg">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Properties;
