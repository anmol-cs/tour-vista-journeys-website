
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Clock, Heart, Star, MapPin, Camera, Compass, TreePine, Phone, Mail, MessageCircle } from 'lucide-react';
import { useScrollAnimations } from '@/hooks/use-scroll-animations';

const Home = () => {
  useScrollAnimations();

  const features = [
    {
      icon: <TreePine className="h-10 w-10 text-primary" />,
      title: "Nature Experts",
      description: "Passionate guides who know every trail and secret",
      color: "bg-primary/10"
    },
    {
      icon: <Compass className="h-10 w-10 text-accent" />,
      title: "Easy Adventures",
      description: "Book in minutes with flexible planning",
      color: "bg-accent/10"
    },
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: "Wild Experiences",
      description: "Handpicked adventures in stunning locations",
      color: "bg-primary/10"
    }
  ];

  const handleWhatsApp = () => {
    const selectedProperty = sessionStorage.getItem('selectedProperty');
    let message = "Hi! I'm interested in booking an adventure with you.";
    
    if (selectedProperty) {
      message = `Hi! I'm interested in booking ${selectedProperty}. Could you please provide more details about availability and pricing?`;
      sessionStorage.removeItem('selectedProperty');
    }
    
    const whatsappURL = `https://wa.me/15551234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  const handlePhone = () => {
    window.location.href = 'tel:+15551234567';
  };

  const handleEmail = () => {
    const selectedProperty = sessionStorage.getItem('selectedProperty');
    let subject = "Adventure Booking Inquiry";
    let body = "Hi,\n\nI'm interested in booking an adventure with you. Could you please provide more information?\n\nThank you!";
    
    if (selectedProperty) {
      subject = `Booking Inquiry for ${selectedProperty}`;
      body = `Hi,\n\nI'm interested in booking ${selectedProperty}. Could you please provide more details about availability and pricing?\n\nThank you!`;
      sessionStorage.removeItem('selectedProperty');
    }
    
    const emailURL = `mailto:hello@adventurevibes.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = emailURL;
  };

  return (
    <div className="min-h-screen outdoor-decoration">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-muted/20">
        <div className="bird-decoration"></div>
        <div className="mountain-decoration"></div>
        
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center parallax opacity-60"
            style={{
              backgroundImage: 'url("/IMG/IMG_9780.jpg")'
            }}
          ></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto animate-fade-in">
          <div className="inline-flex items-center space-x-3 bg-primary/10 backdrop-blur-md rounded-full px-6 py-3 mb-8 wavy-border">
            <Star className="w-5 h-5 text-accent animate-pulse-slow" fill="currentColor" />
            <span className="text-lg font-bold text-primary">Top Rated Adventures</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight text-primary">
            Wild
            <span className="block text-accent animate-wiggle inline-block">
              Adventures
            </span>
            <span className="block text-primary/80">
              Await!
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl mb-12 text-foreground/80 max-w-4xl mx-auto leading-relaxed font-medium">
            Escape the ordinary! Join us for epic outdoor experiences, 
            secret spots, and unforgettable moments in Kamshet - Mumbai's Backyard.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/activities">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-xl px-10 py-6 rounded-3xl font-black text-primary-foreground hover-lift fun-button shadow-2xl"
              >
                Let's Explore!
              </Button>
            </Link>
            <Link to="/properties">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-3 border-accent text-accent hover:bg-accent hover:text-accent-foreground text-xl px-10 py-6 rounded-3xl font-black backdrop-blur-sm"
              >
                Plan My Stay
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 scroll-reveal">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary mb-8">
              Why Adventure With Us?
            </h2>
            <p className="text-xl sm:text-2xl text-foreground/70 max-w-4xl mx-auto font-medium">
              We're not just guides—we're adventure buddies, nature nerds, and your local friends!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-2xl hover-lift group overflow-hidden bg-card rounded-3xl wavy-border scroll-reveal" 
                style={{animationDelay: `${index * 0.3}s`}}
              >
                <CardContent className="p-8 lg:p-12 text-center">
                  <div className={`inline-flex p-6 rounded-3xl ${feature.color} mb-6 group-hover:scale-125 transition-transform duration-500 animate-float`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-black mb-4 text-primary">{feature.title}</h3>
                  <p className="text-foreground/70 text-lg leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-20 lg:py-32 outdoor-decoration">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 scroll-reveal">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary mb-8">
              Pick Your Adventure Style
            </h2>
            <p className="text-xl sm:text-2xl text-foreground/70 font-medium">
              From quick thrills to epic journeys
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Day Adventure */}
            <Card className="overflow-hidden hover-lift group border-0 shadow-2xl bg-card rounded-3xl scroll-reveal">
              <div 
                className="h-80 lg:h-96 bg-cover bg-center relative group-hover-scale transition-transform duration-700"
                style={{
                  backgroundImage: `url('/IMG/img1.jpg')`
                }}
              >
                <div className="absolute inset-0 bg-primary/20"></div>
                <div className="absolute top-6 left-6">
                  <span className="bg-accent/90 backdrop-blur-sm text-accent-foreground px-4 py-2 rounded-2xl text-sm font-black">
                    Most Popular!
                  </span>
                </div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-3xl lg:text-4xl font-black mb-3">Day Adventure</h3>
                  <p className="text-xl text-white/90 font-medium">Perfect for thrill seekers</p>
                </div>
              </div>
              <CardContent className="p-8 lg:p-10">
                <div className="space-y-6 mb-8">
                  <div className="flex items-center text-foreground/70">
                    <MapPin className="w-6 h-6 mr-4 text-primary" />
                    <span className="text-lg font-medium">Epic outdoor locations</span>
                  </div>
                  <div className="flex items-center text-foreground/70">
                    <Clock className="w-6 h-6 mr-4 text-primary" />
                    <span className="text-lg font-medium">Full day with adventure guide</span>
                  </div>
                  <div className="flex items-center text-foreground/70">
                    <Users className="w-6 h-6 mr-4 text-primary" />
                    <span className="text-lg font-medium">Small groups, big fun</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                  <div>
                    <span className="text-3xl lg:text-4xl font-black text-primary">₹1000</span>
                    <span className="text-foreground/70 ml-3 text-lg">per person</span>
                  </div>
                  <Link to="/activities">
                    <Button className="rounded-3xl bg-primary hover:bg-primary/90 text-primary-foreground font-black px-8 py-4 fun-button w-full sm:w-auto">
                      Explore More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Overnight Experience */}
            <Card className="overflow-hidden hover-lift group border-0 shadow-2xl bg-card rounded-3xl scroll-reveal" style={{animationDelay: '0.3s'}}>
              <div 
                className="h-80 lg:h-96 bg-cover bg-center relative group-hover-scale transition-transform duration-700"
                style={{
                  backgroundImage: `url('/IMG/OHPOverview.png')`
                }}
              >
                <div className="absolute inset-0 bg-accent/20"></div>
                <div className="absolute top-6 left-6">
                  <span className="bg-primary/90 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-2xl text-sm font-black">
                    Wild & Free
                  </span>
                </div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-3xl lg:text-4xl font-black mb-3">Overnight Escape</h3>
                  <p className="text-xl text-white/90 font-medium">For the wild at heart</p>
                </div>
              </div>
              <CardContent className="p-8 lg:p-10">
                <div className="space-y-6 mb-8">
                  <div className="flex items-center text-foreground/70">
                    <Heart className="w-6 h-6 mr-4 text-accent" />
                    <span className="text-lg font-medium">Everything from day trip + stay</span>
                  </div>
                  <div className="flex items-center text-foreground/70">
                    <MapPin className="w-6 h-6 mr-4 text-accent" />
                    <span className="text-lg font-medium">Cozy accommodation</span>
                  </div>
                  <div className="flex items-center text-foreground/70">
                    <Camera className="w-6 h-6 mr-4 text-accent" />
                    <span className="text-lg font-medium">Sunset & sunrise magic</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                  <div>
                    <span className="text-3xl lg:text-4xl font-black text-accent">₹2500 - ₹3500</span>
                    <span className="text-foreground/70 ml-3 text-lg">per person</span>
                  </div>
                  <Link to="/properties">
                    <Button className="rounded-3xl bg-accent hover:bg-accent/90 text-accent-foreground font-black px-8 py-4 fun-button w-full sm:w-auto">
                      Let's Go!
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-20 lg:py-32 bg-primary text-primary-foreground overflow-hidden relative outdoor-decoration">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 scroll-reveal">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-8">Ready for Your Next Story?</h2>
          <p className="text-xl sm:text-2xl mb-12 text-primary-foreground/90 font-medium">
            Join thousands of adventurers who've found their happy place with us!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              onClick={handleWhatsApp}
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white rounded-3xl px-10 py-6 text-xl font-black fun-button shadow-2xl flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp Us
            </Button>
            <Button 
              onClick={handlePhone}
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-3xl px-10 py-6 text-xl font-black fun-button shadow-2xl flex items-center justify-center gap-3"
            >
              <Phone className="w-6 h-6" />
              Call Now
            </Button>
            <Button 
              onClick={handleEmail}
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white rounded-3xl px-10 py-6 text-xl font-black fun-button shadow-2xl flex items-center justify-center gap-3"
            >
              <Mail className="w-6 h-6" />
              Email Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
