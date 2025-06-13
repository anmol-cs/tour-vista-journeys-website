
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'scenic', name: 'Scenic Spots' },
    { id: 'food', name: 'Local Food' },
    { id: 'tours', name: 'Group Tours' },
    { id: 'activities', name: 'Activities' }
  ];

  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Mountain landscape with misty peaks",
      category: 'scenic',
      title: "Misty Mountain Vista"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "River flowing through mountains",
      category: 'scenic',
      title: "River Valley Adventure"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Group of tourists at scenic viewpoint",
      category: 'tours',
      title: "Happy Travelers"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Ocean waves at sunset",
      category: 'scenic',
      title: "Coastal Sunset"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Local traditional market scene",
      category: 'food',
      title: "Local Market Experience"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Hiking group on mountain trail",
      category: 'activities',
      title: "Mountain Hiking Adventure"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Traditional local cuisine",
      category: 'food',
      title: "Authentic Local Dishes"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Wildlife spotting during tour",
      category: 'activities',
      title: "Wildlife Encounter"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Tour group at local restaurant",
      category: 'tours',
      title: "Dining Together"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Fresh local ingredients",
      category: 'food',
      title: "Farm Fresh Ingredients"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "River rafting activity",
      category: 'activities',
      title: "River Rafting Fun"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Group photo at scenic location",
      category: 'tours',
      title: "Memorable Moments"
    }
  ];

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(image => image.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Gallery</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Explore stunning photos and videos from our tours. See the beautiful landscapes, 
            delicious food, and happy moments that await you on your adventure.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 ${
                  activeCategory === category.id 
                    ? 'bg-gradient-to-r from-blue-600 to-green-600' 
                    : ''
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <Card key={image.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
                <div className="relative">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-semibold text-lg">{image.title}</h3>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-semibold">
                      View Full Size
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No images found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Create Your Own Memories?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join us for an unforgettable adventure and capture your own amazing moments
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Book Your Tour Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
