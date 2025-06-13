
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Clock, Heart, Star, MapPin, Camera } from 'lucide-react';
import { useScrollAnimations } from '@/hooks/use-scroll-animations';

const Home = () => {
  useScrollAnimations();

  const features = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Local Experts",
      description: "Passionate guides who know every secret spot and story",
      color: "bg-primary/10"
    },
    {
      icon: <Clock className="h-8 w-8 text-accent" />,
      title: "Easy Booking",
      description: "Book in minutes with flexible cancellation",
      color: "bg-accent/10"
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Curated Experiences",
      description: "Handpicked adventures that create lasting memories",
      color: "bg-primary/10"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center parallax"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50"></div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
            <span className="text-sm font-medium">Rated #1 Local Tours</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Find your next
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-float">
              adventure
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Discover hidden gems with local experts. From sunrise hikes to cultural deep-dives, 
            we create experiences that feel like home.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full hover-lift">
              Start Exploring
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full">
              Plan Custom Trip
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 scroll-reveal">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Why adventurers choose us
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              We're not just tour guides—we're storytellers, culture enthusiasts, and your local friends
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover-lift group overflow-hidden bg-card scroll-reveal" style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className={`inline-flex p-4 rounded-2xl ${feature.color} mb-4 group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 scroll-reveal">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Choose your adventure style
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              From quick escapes to immersive journeys
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Day Adventure */}
            <Card className="overflow-hidden hover-lift group border-0 shadow-xl bg-card scroll-reveal">
              <div 
                className="h-64 sm:h-72 lg:h-80 bg-cover bg-center relative group-hover-scale transition-transform duration-500"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2">Day Adventure</h3>
                  <p className="text-lg text-gray-200">Perfect for explorers</p>
                </div>
              </div>
              <CardContent className="p-6 sm:p-8">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-5 h-5 mr-3 text-primary" />
                    <span>Multiple amazing locations</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="w-5 h-5 mr-3 text-primary" />
                    <span>Full day with expert guide</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Users className="w-5 h-5 mr-3 text-primary" />
                    <span>Small groups, big experiences</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <span className="text-2xl sm:text-3xl font-bold text-primary">$149</span>
                    <span className="text-muted-foreground ml-2">per person</span>
                  </div>
                  <Button className="rounded-full bg-primary hover:bg-primary/90 w-full sm:w-auto">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Overnight Experience */}
            <Card className="overflow-hidden hover-lift group border-0 shadow-xl bg-card scroll-reveal" style={{animationDelay: '0.2s'}}>
              <div 
                className="h-64 sm:h-72 lg:h-80 bg-cover bg-center relative group-hover-scale transition-transform duration-500"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-accent/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    Deep Dive
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2">Overnight Escape</h3>
                  <p className="text-lg text-gray-200">For the adventurous souls</p>
                </div>
              </div>
              <CardContent className="p-6 sm:p-8">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-muted-foreground">
                    <Heart className="w-5 h-5 mr-3 text-accent" />
                    <span>Everything from day trip + more</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-5 h-5 mr-3 text-accent" />
                    <span>Cozy local accommodation</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Camera className="w-5 h-5 mr-3 text-accent" />
                    <span>Sunset & sunrise experiences</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <span className="text-2xl sm:text-3xl font-bold text-accent">$249</span>
                    <span className="text-muted-foreground ml-2">per person</span>
                  </div>
                  <Button className="rounded-full bg-accent hover:bg-accent/90 w-full sm:w-auto">
                    Discover More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary via-accent to-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 scroll-reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Ready for your next story?</h2>
          <p className="text-lg sm:text-xl mb-8 text-white/90">
            Join thousands of travelers who've discovered their favorite places with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-50 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-lg font-semibold">
              Start Planning
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm rounded-full px-6 sm:px-8 py-3 sm:py-4 text-lg">
              Chat with Expert
            </Button>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full animate-bounce-gentle"></div>
      </section>
    </div>
  );
};

export default Home;
