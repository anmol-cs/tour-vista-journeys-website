
import React, { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Clock, Users, MapPin } from 'lucide-react';

const Activities = () => {
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

  const activities = [
    {
      name: "Scenic Mountain Hike",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Explore breathtaking mountain trails with panoramic views and diverse wildlife. Perfect for nature enthusiasts and photography lovers.",
      duration: "6 hours",
      difficulty: "Moderate"
    },
    {
      name: "Local Market Tour",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Immerse yourself in local culture at bustling markets. Taste authentic cuisine and discover handcrafted treasures.",
      duration: "3 hours",
      difficulty: "Easy"
    },
    {
      name: "River Adventure",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Experience thrilling water activities including kayaking and river rafting through stunning natural landscapes.",
      duration: "5 hours",
      difficulty: "Moderate"
    },
    {
      name: "Cultural Heritage Walk",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Discover the rich history and architecture of our region with guided walks through historic districts.",
      duration: "4 hours",
      difficulty: "Easy"
    },
    {
      name: "Wildlife Watching",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Observe native wildlife in their natural habitat with experienced guides and professional equipment.",
      duration: "7 hours",
      difficulty: "Easy"
    },
    {
      name: "Sunset Photography",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Capture stunning sunset views from the best vantage points with tips from professional photographers.",
      duration: "3 hours",
      difficulty: "Easy"
    }
  ];

  const inclusions = [
    "Expert local guide for all activities",
    "All necessary equipment and safety gear", 
    "Transportation between activity locations",
    "Refreshments and meals as scheduled",
    "Small group sizes for personalized experience",
    "Photography assistance and tips"
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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">Adventure Activities</h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed px-4">
              Discover amazing activities included in our guided tours. Each experience is carefully 
              curated to showcase the best of our region's natural beauty, culture, and adventure opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 scroll-reveal">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6">
              What You'll Experience
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our tours feature a diverse range of activities designed to give you an authentic 
              taste of local life, natural wonders, and cultural experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {activities.map((activity, index) => (
              <Card key={index} className="overflow-hidden hover-lift group border-0 shadow-lg bg-card scroll-reveal" style={{animationDelay: `${index * 0.1}s`}}>
                <div 
                  className="h-48 sm:h-56 lg:h-48 bg-cover bg-center relative group-hover-scale transition-transform duration-500"
                  style={{ backgroundImage: `url('${activity.image}')` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                      {activity.difficulty}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center text-sm">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{activity.duration}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 text-foreground">
                    {activity.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {activity.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 sm:mt-16 scroll-reveal">
            <Card className="bg-card shadow-xl max-w-4xl mx-auto border-0">
              <CardContent className="p-6 sm:p-8 lg:p-12">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-6 sm:mb-8">
                  Included in Every Tour
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-left">
                  {inclusions.map((inclusion, index) => (
                    <div key={index} className="flex items-start group">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 group-hover:scale-125 transition-transform"></div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {inclusion}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                  <div className="flex items-center text-muted-foreground">
                    <Users className="w-5 h-5 mr-2 text-primary" />
                    <span className="text-sm">Small groups (max 12 people)</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-5 h-5 mr-2 text-primary" />
                    <span className="text-sm">Multiple stunning locations</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;
