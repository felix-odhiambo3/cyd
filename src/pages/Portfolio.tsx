import type React from 'react';
import { useState } from 'react';
import { Play, Filter } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Weddings', 'Corporate', 'Cultural', 'Events'];

  const portfolioItems = [
    {
      id: 1,
      title: "Safari Lodge Wedding",
      category: "Weddings",
      thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
      duration: "4:30",
      description: "An intimate wedding celebration in the heart of Kenya's wildlife reserve."
    },
    {
      id: 2,
      title: "Tech Startup Launch",
      category: "Corporate",
      thumbnail: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80",
      duration: "2:45",
      description: "Dynamic corporate video showcasing innovation and team spirit."
    },
    {
      id: 3,
      title: "Maasai Traditional Ceremony",
      category: "Cultural",
      thumbnail: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80",
      duration: "6:15",
      description: "Respectful documentation of traditional Maasai coming-of-age ceremony."
    },
    {
      id: 4,
      title: "Coastal Garden Wedding",
      category: "Weddings",
      thumbnail: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&q=80",
      duration: "5:20",
      description: "Seaside romance captured with cinematic elegance in Mombasa."
    },
    {
      id: 5,
      title: "Banking Conference 2024",
      category: "Corporate",
      thumbnail: "https://images.unsplash.com/photo-1560472355-536de3962603?w=600&q=80",
      duration: "3:15",
      description: "Professional coverage of Kenya's premier banking industry conference."
    },
    {
      id: 6,
      title: "Kikuyu Traditional Wedding",
      category: "Cultural",
      thumbnail: "https://images.unsplash.com/photo-1594736797933-d0a13e9e5e12?w=600&q=80",
      duration: "7:45",
      description: "Beautiful blend of traditional and modern wedding customs."
    },
    {
      id: 7,
      title: "Mountain Lodge Celebration",
      category: "Events",
      thumbnail: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80",
      duration: "3:30",
      description: "Corporate retreat celebration in the Aberdare Mountains."
    },
    {
      id: 8,
      title: "Nairobi City Wedding",
      category: "Weddings",
      thumbnail: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80",
      duration: "4:50",
      description: "Urban elegance meets romantic storytelling in Kenya's capital."
    },
    {
      id: 9,
      title: "Luo Cultural Festival",
      category: "Cultural",
      thumbnail: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80",
      duration: "5:40",
      description: "Vibrant celebration of Luo heritage and traditional music."
    }
  ];

  const filteredItems = selectedCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="section-title">Our Portfolio</h1>
          <p className="text-xl text-[#816e5f] max-w-3xl mx-auto">
            Discover our collection of cinematic stories, each crafted with passion
            and artistic vision to capture life's most precious moments.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center text-[#434642] mr-4">
            <Filter size={20} className="mr-2" />
            <span className="font-medium">Filter by:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[#434642] text-white'
                  : 'bg-white text-[#434642] border border-[#434642] hover:bg-[#434642] hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4 shadow-lg">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                    <Play size={24} className="text-white ml-1" />
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-[#434642]/80 text-white px-3 py-1 rounded-full text-sm">
                  {item.category}
                </div>
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {item.duration}
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif text-[#434642] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#816e5f] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-[#816e5f]">
              No videos found in this category.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16 bg-[#f9f5f3] p-12 rounded-lg">
          <h2 className="text-3xl font-serif mb-4 text-[#434642]">
            Ready to Create Your Story?
          </h2>
          <p className="text-lg text-[#816e5f] mb-8 max-w-2xl mx-auto">
            Each project in our portfolio represents a unique story and vision.
            Let us help you create something equally extraordinary.
          </p>
          <a
            href="/contact"
            className="elegant-button text-lg px-8 py-4"
          >
            START YOUR PROJECT
          </a>
        </div>
      </div>
    </div>
  );
};
