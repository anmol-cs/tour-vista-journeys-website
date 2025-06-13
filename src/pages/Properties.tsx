
import React, { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wifi, Coffee, Car, Utensils, Star, MapPin, Users } from 'lucide-react';

const Properties = () => {
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

  const properties = [
    {
      id: 1,
      name: "Mountain View Lodge",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
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
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
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
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
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
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-accent text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-white/5 rounded-full blur-lg animate-bounce-gentle"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">Stay With Us</h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed px-4">
              Choose from our carefully selected accommodations for your overnight package. 
              Each property offers comfort, local charm, and easy access to tour activities.
            </p>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 scroll-reveal">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6">
              Handpicked Accommodations
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From cozy mountain lodges to lakeside retreats, our properties are chosen for their 
              unique character, comfort, and connection to the local experience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {properties.map((property, index) => (
              <Card key={property.id} className="overflow-hidden hover-lift group border-0 shadow-xl bg-card scroll-reveal" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="relative">
                  <div 
                    className="h-64 sm:h-72 lg:h-80 bg-cover bg-center group-hover-scale transition-transform duration-500"
                    style={{ backgroundImage: `url('${property.image}')` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4 flex space-x-2">
                      <span className="bg-primary/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" />
                        <span className="text-white text-sm font-medium">{property.rating}</span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{property.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Image Gallery Preview */}
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    {property.gallery.slice(0, 3).map((img, idx) => (
                      <div key={idx} className="w-12 h-12 rounded-lg overflow-hidden border-2 border-white/50">
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>

                <CardContent className="p-6 sm:p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                        {property.name}
                      </h3>
                      <div className="flex items-center text-sm text-muted-foreground mb-4">
                        <Users className="w-4 h-4 mr-2" />
                        <span>{property.capacity}</span>
                        <span className="mx-2">•</span>
                        <span>{property.reviews} reviews</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl sm:text-3xl font-bold text-primary">
                        ${property.price}
                      </div>
                      <div className="text-sm text-muted-foreground">per night</div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {property.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {property.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground group">
                        <div className="text-primary mr-2 group-hover:scale-110 transition-transform">
                          {amenity.icon}
                        </div>
                        <span className="group-hover:text-foreground transition-colors">
                          {amenity.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                      Book Now
                    </Button>
                    <Button variant="outline" className="flex-1 border-border hover:bg-secondary rounded-full">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 sm:mt-16 scroll-reveal">
            <Card className="bg-card shadow-xl max-w-3xl mx-auto border-0">
              <CardContent className="p-6 sm:p-8 lg:p-10">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4 sm:mb-6">
                  Why Choose Our Properties?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-left">
                  {[
                    "Personally inspected for quality and comfort",
                    "Strategic locations near tour activities",
                    "Local hosts with insider knowledge",
                    "Flexible booking and cancellation",
                    "24/7 support during your stay",
                    "Authentic local experiences included"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start group">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 group-hover:scale-125 transition-transform"></div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors text-sm">
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
