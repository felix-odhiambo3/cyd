import type React from 'react';
import { Link } from 'react-router-dom';
import { Play, Star, Quote } from 'lucide-react';

export const Home: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Our wedding video exceeded every expectation we had. The team at Chini Ya Dari captured emotions we didn't even know existed. It's absolutely the BEST GIFT we could have given ourselves!",
      name: "SARAH & JAMES",
      location: "Nairobi Wedding"
    },
    {
      id: 2,
      quote: "Professional, creative, and passionate about their craft. They transformed our corporate event into a cinematic masterpiece that our clients still talk about months later.",
      name: "MARIA WANJIKU",
      location: "Corporate Client"
    },
    {
      id: 3,
      quote: "The attention to detail and artistic vision is unmatched. Every frame tells a story, and our family documentary will be treasured for generations to come.",
      name: "DAVID & GRACE",
      location: "Family Documentary"
    }
  ];

  const featuredVideos = [
    {
      id: 1,
      title: "Elegant Garden Wedding",
      category: "Wedding",
      thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?w=500&q=80",
      duration: "3:45"
    },
    {
      id: 2,
      title: "Corporate Innovation Summit",
      category: "Corporate",
      thumbnail: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=500&q=80",
      duration: "2:30"
    },
    {
      id: 3,
      title: "Traditional Ceremony",
      category: "Cultural",
      thumbnail: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=500&q=80",
      duration: "4:20"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Video/Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1920&q=80"
            alt="Wedding cinematography"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="hero-title mb-6 fade-in">
            FILMS AS <em>EXTRAORDINARY</em> as your STORY
          </h1>
          <p className="hero-subtitle mb-8 fade-in" style={{animationDelay: '0.3s'}}>
            NAIROBI • MOMBASA • KISUMU • KENYA
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in" style={{animationDelay: '0.6s'}}>
            <Link to="/contact" className="elegant-button bg-white text-[#434642] hover:bg-transparent hover:text-white hover:border-white">
              INQUIRE
            </Link>
            <Link to="/portfolio" className="elegant-button border-white text-white hover:bg-white hover:text-[#434642]">
              VIEW FILMS
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="section-title">
            Celebrating Excellence in Kenyan Cinematography
          </h2>

          <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed text-[#434642]">
            <p>
              From our humble beginnings in Nairobi, <em>Chini Ya Dari Limited</em> has grown to become
              one of Kenya's premier videography and photography companies, serving clients across
              the country with award-winning cinematography and unparalleled artistic vision.
            </p>

            <p>
              We are one of the few remaining videographers in Kenya that offer not only{' '}
              <Link to="/portfolio" className="text-[#816e5f] underline hover:text-[#434642]">
                short-form highlight edits
              </Link>, but also include a beautiful full-length documentary edit in each wedding package.
              Our couples love the long-form edit because it allows them to remember the details of their
              special day years later that they may have forgotten—<em>especially</em> memories of friends
              and family members that have passed on.
            </p>

            <p>
              Chini Ya Dari Limited also offers videography services not found elsewhere, such as
              <strong> drone cinematography</strong>, same-day edits, <strong>360° panoramic videos</strong>,
              and even <strong>traditional ceremony documentation</strong> that honors Kenya's rich cultural heritage!
            </p>

            <p>
              If you are looking for budget videography, we can refer you to several good local videographers.
              But if you are interested in a unique and priceless memory of your special day,
              you have come to the right place!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <Link to="/contact" className="elegant-button">
              INQUIRE
            </Link>
            <Link to="/portfolio" className="elegant-button">
              FILMS
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Videos Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title mb-16">Featured Films</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredVideos.map((video) => (
              <div key={video.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Play size={24} className="text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="text-sm text-[#816e5f] uppercase tracking-wide mb-1">
                  {video.category}
                </div>
                <h3 className="text-xl font-serif text-[#434642]">
                  {video.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/portfolio" className="elegant-button">
              VIEW ALL FILMS
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#f9f5f3]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="section-title mb-16">CLIENT REVIEWS</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center justify-center mb-6">
                  <Quote size={32} className="text-[#cac5b0]" />
                </div>

                <p className="text-[#434642] mb-6 italic leading-relaxed">
                  {testimonial.quote}
                </p>

                <div className="flex items-center justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={`star-${testimonial.id}-${i}`} size={16} className="text-[#8b826d] fill-current" />
                  ))}
                </div>

                <div className="text-center">
                  <div className="font-semibold text-[#434642] uppercase tracking-wide">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-[#816e5f]">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-[#434642] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-serif mb-6">
            Ready to Create Something Extraordinary?
          </h2>
          <p className="text-xl mb-8 text-[#c9cac9]">
            Let's discuss your vision and bring your story to life with cinematic excellence.
          </p>
          <Link
            to="/contact"
            className="elegant-button border-white text-white hover:bg-white hover:text-[#434642] text-lg px-8 py-4"
          >
            START YOUR PROJECT
          </Link>
        </div>
      </section>
    </div>
  );
};
