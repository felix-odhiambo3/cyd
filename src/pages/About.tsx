import type React from 'react';

export const About: React.FC = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="section-title">About Chini Ya Dari Limited</h1>
          <p className="text-xl text-[#816e5f] max-w-3xl mx-auto">
            Excellence in Kenyan cinematography, capturing extraordinary stories
            across the beautiful landscapes of Kenya.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <img
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&q=80"
            alt="Chini Ya Dari team"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-serif mb-6 text-[#434642]">Our Story</h2>
            <div className="space-y-4 text-lg leading-relaxed text-[#434642]">
              <p>
                Founded in the heart of Nairobi, Chini Ya Dari Limited began with a simple vision:
                to capture and preserve the most precious moments of Kenyan families and businesses
                through the art of cinematography.
              </p>
              <p>
                Our name, "Chini Ya Dari" (Under the Bridge), represents our commitment to being
                the foundation that supports and elevates every story we tell. We believe that
                every moment, whether it's a wedding in the Maasai Mara or a corporate event
                in downtown Nairobi, deserves to be captured with artistic excellence.
              </p>
              <p>
                Today, we're proud to serve clients across Kenya, from the coastal beauty of
                Mombasa to the highland elegance of Nakuru, bringing world-class cinematography
                to every corner of our beautiful country.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-serif mb-6 text-[#434642]">Our Mission</h2>
            <div className="space-y-4 text-lg leading-relaxed text-[#434642]">
              <p>
                We are dedicated to preserving the rich cultural heritage and modern celebrations
                of Kenya through cinematography that transcends ordinary videography.
              </p>
              <p>
                Our team combines traditional storytelling techniques with cutting-edge technology
                to create films that not only document events but elevate them to works of art.
              </p>
              <p>
                Every project we undertake is approached with the understanding that we're not
                just creating a video—we're crafting a legacy that will be treasured for generations.
              </p>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-serif text-center mb-8 text-[#434642]">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-serif mb-4 text-[#434642]">Wedding Cinematography</h3>
              <p className="text-[#816e5f]">
                Capturing your special day with artistic vision and emotional depth,
                creating timeless films that tell your unique love story.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-serif mb-4 text-[#434642]">Corporate Videos</h3>
              <p className="text-[#816e5f]">
                Professional corporate filmmaking that showcases your brand story,
                company culture, and business achievements with cinematic quality.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-serif mb-4 text-[#434642]">Cultural Documentation</h3>
              <p className="text-[#816e5f]">
                Preserving Kenya's rich cultural traditions and ceremonies with
                respectful, authentic documentation that honors our heritage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
