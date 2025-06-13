
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Clock, Phone } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Expert Local Guides",
      description: "Our passionate guides know every hidden gem and local story"
    },
    {
      icon: <Clock className="h-8 w-8 text-green-600" />,
      title: "Flexible Booking",
      description: "Easy online booking with flexible cancellation policies"
    },
    {
      icon: <Phone className="h-8 w-8 text-purple-600" />,
      title: "24/7 Support",
      description: "We're here to help before, during, and after your tour"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-green-600">
        <div className="absolute inset-0 bg-black/30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-green-900/50"></div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Discover Local
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Adventures
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl mx-auto animate-fade-in">
            Experience unforgettable guided tours with expert local guides, curated activities, 
            and all meals included. Choose from day tours or overnight packages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg px-8 py-3">
              Book Your Tour Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3">
              Contact Us to Customize
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Your Gateway to Authentic Local Experiences
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in creating memorable adventures that showcase the best of our region. 
              From scenic landscapes to cultural treasures, our carefully crafted tours offer 
              something special for every traveler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Packages Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Choose Your Adventure
            </h2>
            <p className="text-xl text-gray-600">
              Two amazing packages designed to give you the perfect local experience
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Day Tour Package */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div 
                className="h-64 bg-cover bg-center relative"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">Day Tour Package</h3>
                </div>
              </div>
              <CardContent className="p-8">
                <ul className="space-y-3 mb-6 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Full-day guided tour with expert local guide
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Planned activities at multiple attractions
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    All meals included (breakfast, lunch, dinner)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Transportation between locations
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-3xl font-bold text-primary">$149</span>
                    <span className="text-gray-500 ml-2">per person</span>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Overnight Package */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow border-2 border-green-200">
              <div className="bg-green-600 text-white text-center py-2 text-sm font-semibold">
                MOST POPULAR
              </div>
              <div 
                className="h-64 bg-cover bg-center relative"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">Overnight Package</h3>
                </div>
              </div>
              <CardContent className="p-8">
                <ul className="space-y-3 mb-6 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Everything from the Day Tour Package
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    One night accommodation at selected property
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Breakfast the next morning
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Evening activities and local entertainment
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-3xl font-bold text-primary">$249</span>
                    <span className="text-gray-500 ml-2">per person</span>
                  </div>
                  <Button className="bg-green-600 hover:bg-green-700">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Explore?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today to book your tour or customize your perfect experience
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center space-x-3">
              <Phone className="h-6 w-6" />
              <span className="text-lg">+1 (555) 123-4567</span>
            </div>
            <div className="text-lg">info@localexplorertours.com</div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              WhatsApp Us
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Email Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
