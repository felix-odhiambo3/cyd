import type React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#434642] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-[#cac5b0] flex items-center justify-center border-2 border-white">
                <span className="font-serif text-2xl font-bold text-[#434642]">CYD</span>
              </div>
              <div className="ml-4">
                <div className="text-lg font-medium">CHINI YA DARI LIMITED</div>
                <div className="text-sm text-[#c9cac9]">KENYAN VIDEOGRAPHY & PHOTOGRAPHY</div>
              </div>
            </div>

            <p className="text-[#c9cac9] mb-6 max-w-md">
              Capturing extraordinary stories across Kenya with award-winning cinematography.
              From Nairobi to Mombasa, we bring your vision to life with unparalleled artistry
              and technical excellence.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#cac5b0] hover:text-[#434642] transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#cac5b0] hover:text-[#434642] transition-all duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#cac5b0] hover:text-[#434642] transition-all duration-300"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-medium mb-6 font-serif">Navigation</h3>
            <div className="space-y-3">
              <Link
                to="/about"
                className="block text-[#c9cac9] hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                to="/portfolio"
                className="block text-[#c9cac9] hover:text-white transition-colors"
              >
                Portfolio
              </Link>
              <Link
                to="/contact"
                className="block text-[#c9cac9] hover:text-white transition-colors"
              >
                Contact
              </Link>
              <Link
                to="/admin"
                className="block text-[#c9cac9] hover:text-white transition-colors"
              >
                Admin
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-medium mb-6 font-serif">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center text-[#c9cac9]">
                <Phone size={16} className="mr-3" />
                <span>+254 700 123 456</span>
              </div>
              <div className="flex items-center text-[#c9cac9]">
                <Mail size={16} className="mr-3" />
                <span>info@chiniyadarilimited.co.ke</span>
              </div>
              <div className="flex items-start text-[#c9cac9]">
                <MapPin size={16} className="mr-3 mt-1" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-[#c9cac9] text-sm mb-4 md:mb-0">
              © 2024 Chini Ya Dari Limited. All rights reserved.<br />
              Powered by <a className="text-white hover:text-yellow-400 hover:underline px-3 py-2 text-sm font-medium transition-all duration-200" href="#">Fel@frika Technologies</a>
            </div>
            <div className="text-[#c9cac9] text-sm">
              Nairobi • Mombasa • Kisumu • Kenya
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
