import type React from 'react';
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    location: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        location: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-title">Get In Touch</h1>
          <p className="text-xl text-[#816e5f] max-w-3xl mx-auto">
            Ready to create something extraordinary? Let's discuss your vision and
            bring your story to life with cinematic excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-serif mb-6 text-[#434642]">Project Inquiry</h2>

            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-serif text-[#434642] mb-2">Thank You!</h3>
                <p className="text-[#816e5f]">
                  Your inquiry has been submitted successfully. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#434642] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-[#c9cac9] rounded-lg focus:ring-2 focus:ring-[#8b826d] focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#434642] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-[#c9cac9] rounded-lg focus:ring-2 focus:ring-[#8b826d] focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#434642] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-[#c9cac9] rounded-lg focus:ring-2 focus:ring-[#8b826d] focus:border-transparent transition-all"
                      placeholder="+254 700 000 000"
                    />
                  </div>
                  <div>
                    <label htmlFor="eventType" className="block text-sm font-medium text-[#434642] mb-2">
                      Event Type *
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      required
                      value={formData.eventType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-[#c9cac9] rounded-lg focus:ring-2 focus:ring-[#8b826d] focus:border-transparent transition-all"
                    >
                      <option value="">Select event type</option>
                      <option value="wedding">Wedding</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="cultural">Cultural Ceremony</option>
                      <option value="private">Private Event</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="eventDate" className="block text-sm font-medium text-[#434642] mb-2">
                      Event Date
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-[#c9cac9] rounded-lg focus:ring-2 focus:ring-[#8b826d] focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-[#434642] mb-2">
                      Event Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-[#c9cac9] rounded-lg focus:ring-2 focus:ring-[#8b826d] focus:border-transparent transition-all"
                      placeholder="City, venue, or general area"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#434642] mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-[#c9cac9] rounded-lg focus:ring-2 focus:ring-[#8b826d] focus:border-transparent transition-all resize-vertical"
                    placeholder="Tell us about your vision, style preferences, special requirements, or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#434642] text-white py-3 px-6 rounded-lg hover:bg-[#816e5f] transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Inquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-serif mb-6 text-[#434642]">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="text-[#8b826d] mt-1" size={20} />
                  <div>
                    <h3 className="font-medium text-[#434642] mb-1">Phone</h3>
                    <p className="text-[#816e5f]">+254 700 123 456</p>
                    <p className="text-[#816e5f]">+254 722 987 654</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="text-[#8b826d] mt-1" size={20} />
                  <div>
                    <h3 className="font-medium text-[#434642] mb-1">Email</h3>
                    <p className="text-[#816e5f]">info@chiniyadarilimited.co.ke</p>
                    <p className="text-[#816e5f]">projects@chiniyadarilimited.co.ke</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="text-[#8b826d] mt-1" size={20} />
                  <div>
                    <h3 className="font-medium text-[#434642] mb-1">Locations</h3>
                    <p className="text-[#816e5f]">Nairobi, Kenya (Headquarters)</p>
                    <p className="text-[#816e5f]">Serving all of Kenya</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="text-[#8b826d] mt-1" size={20} />
                  <div>
                    <h3 className="font-medium text-[#434642] mb-1">Business Hours</h3>
                    <p className="text-[#816e5f]">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-[#816e5f]">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-[#816e5f]">Sunday: By appointment only</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-[#f9f5f3] p-8 rounded-lg">
              <h2 className="text-2xl font-serif mb-6 text-[#434642]">Service Areas</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Nairobi', 'Mombasa', 'Kisumu', 'Nakuru',
                  'Eldoret', 'Thika', 'Meru', 'Nyeri'
                ].map((city) => (
                  <div key={city} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#8b826d] rounded-full" />
                    <span className="text-[#434642]">{city}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#816e5f] mt-4">
                * Travel to other locations in Kenya available upon request
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
