
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Activities = () => {
  const activities = [
    {
      name: "Scenic Mountain Hike",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Explore breathtaking mountain trails with panoramic views and diverse wildlife. Perfect for nature enthusiasts and photography lovers."
    },
    {
      name: "Local Market Tour",
      image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Immerse yourself in local culture at bustling markets. Taste authentic cuisine and discover handcrafted treasures."
    },
    {
      name: "River Adventure",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Experience thrilling water activities including kayaking and river rafting through stunning natural landscapes."
    },
    {
      name: "Cultural Heritage Walk",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Discover the rich history and architecture of our region with guided walks through historic districts."
    },
    {
      name: "Wildlife Watching",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Observe native wildlife in their natural habitat with experienced guides and professional equipment."
    },
    {
      name: "Sunset Photography",
      image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Capture stunning sunset views from the best vantage points with tips from professional photographers."
    },
    {
      name: "Traditional Cooking Class",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Learn to prepare authentic local dishes using traditional techniques and fresh regional ingredients."
    },
    {
      name: "Beach Exploration",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Explore pristine beaches, hidden coves, and coastal ecosystems with marine life spotting opportunities."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Tour Activities</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover the amazing activities included in our guided tours. Each experience is carefully 
            curated to showcase the best of our region's natural beauty, culture, and adventure opportunities.
          </p>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What You'll Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our tours feature a diverse range of activities designed to give you an authentic 
              taste of local life, natural wonders, and cultural experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {activities.map((activity, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div 
                  className="h-48 bg-cover bg-center relative group"
                  style={{ backgroundImage: `url('${activity.image}')` }}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-semibold">
                      View Details
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {activity.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {activity.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Included in Every Tour
              </h3>
              <ul className="text-left space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Expert local guide for all activities
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  All necessary equipment and safety gear
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Transportation between activity locations
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Refreshments and meals as scheduled
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Small group sizes for personalized experience
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;
