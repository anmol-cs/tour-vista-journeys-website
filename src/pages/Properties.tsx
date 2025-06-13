
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Properties = () => {
  const properties = [
    {
      id: 1,
      name: "Mountain View Lodge",
      images: [
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      amenities: ["Free Wi-Fi", "Mountain View", "Breakfast Included", "Private Bathroom", "Heating", "Parking"],
      pricePerNight: 89,
      description: "Cozy mountain lodge with breathtaking views of the surrounding peaks. Perfect for nature lovers seeking tranquility and comfort.",
      rating: 4.8
    },
    {
      id: 2,
      name: "Riverside Retreat",
      images: [
        "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      amenities: ["River Access", "Free Wi-Fi", "Continental Breakfast", "Air Conditioning", "Garden View", "Restaurant"],
      pricePerNight: 95,
      description: "Peaceful retreat located alongside a pristine river. Enjoy the soothing sounds of flowing water and abundant wildlife.",
      rating: 4.7
    },
    {
      id: 3,
      name: "Coastal Haven B&B",
      images: [
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      amenities: ["Ocean View", "Beach Access", "Free Wi-Fi", "Breakfast Included", "Balcony", "Bicycle Rental"],
      pricePerNight: 120,
      description: "Charming bed & breakfast just steps from the ocean. Wake up to stunning sunrise views and the sound of gentle waves.",
      rating: 4.9
    },
    {
      id: 4,
      name: "Forest Edge Inn",
      images: [
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      amenities: ["Forest View", "Free Wi-Fi", "Complimentary Breakfast", "Fireplace", "Hiking Trails", "Pet Friendly"],
      pricePerNight: 75,
      description: "Rustic inn nestled at the edge of an ancient forest. Perfect for wildlife enthusiasts and hiking adventures.",
      rating: 4.6
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Accommodation Properties</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Choose from our carefully selected accommodation partners for your overnight package. 
            Each property offers unique charm, comfort, and the perfect base for your adventure.
          </p>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Where You'll Stay
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All properties are personally inspected by our team to ensure quality, 
              comfort, and authentic local experiences for our guests.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {properties.map((property) => (
              <Card key={property.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                {/* Image Gallery */}
                <div className="relative h-64 bg-gray-200">
                  <img 
                    src={property.images[0]}
                    alt={property.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white text-gray-900">
                      ⭐ {property.rating}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex space-x-2">
                      {property.images.slice(1, 3).map((img, idx) => (
                        <div key={idx} className="w-12 h-12 rounded border-2 border-white overflow-hidden">
                          <img src={img} alt="" className="w-full h-full object-cover" />
                        </div>
                      ))}
                      {property.images.length > 3 && (
                        <div className="w-12 h-12 rounded border-2 border-white bg-black/50 flex items-center justify-center text-xs">
                          +{property.images.length - 3}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {property.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {property.description}
                  </p>

                  {/* Amenities */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Amenities</h4>
                    <div className="flex flex-wrap gap-2">
                      {property.amenities.map((amenity, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Price and Actions */}
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-3xl font-bold text-primary">
                        ${property.pricePerNight}
                      </span>
                      <span className="text-gray-500 ml-2">per night</span>
                    </div>
                    <div className="flex space-x-3">
                      <Button variant="outline">
                        View More
                      </Button>
                      <Button className="bg-gradient-to-r from-blue-600 to-green-600">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              What's Included with Your Overnight Package
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Property Features</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Comfortable private rooms
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Clean, modern bathrooms
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Complimentary breakfast
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Free Wi-Fi access
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Additional Services</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Luggage handling assistance
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Local area information
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    24/7 tour support hotline
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Transportation coordination
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Book Your Overnight Adventure?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us to reserve your preferred accommodation and create your perfect getaway
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Book Overnight Package
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Contact for Custom Stay
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Properties;
