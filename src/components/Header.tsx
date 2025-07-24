import type React from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHome
          ? 'bg-white/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
              isScrolled || !isHome
                ? 'border-[#434642] bg-[#cac5b0]'
                : 'border-white bg-white/20'
            }`}>
              <span className={`font-serif text-xl font-bold ${
                isScrolled || !isHome ? 'text-[#434642]' : 'text-white'
              }`}>
                CYD
              </span>
            </div>
            <div className="ml-3 hidden sm:block">
              <div className={`text-sm font-medium ${
                isScrolled || !isHome ? 'text-[#434642]' : 'text-white'
              }`}>
                CHINI YA DARI
              </div>
              <div className={`text-xs ${
                isScrolled || !isHome ? 'text-[#816e5f]' : 'text-white/80'
              }`}>
                LIMITED
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`nav-link ${
                isScrolled || !isHome ? 'text-[#434642] hover:text-[#816e5f]' : ''
              }`}
            >
              HOME
            </Link>
            <Link
              to="/about"
              className={`nav-link ${
                isScrolled || !isHome ? 'text-[#434642] hover:text-[#816e5f]' : ''
              }`}
            >
              ABOUT
            </Link>
            <Link
              to="/portfolio"
              className={`nav-link ${
                isScrolled || !isHome ? 'text-[#434642] hover:text-[#816e5f]' : ''
              }`}
            >
              PORTFOLIO
            </Link>
            <Link
              to="/contact"
              className={`nav-link ${
                isScrolled || !isHome ? 'text-[#434642] hover:text-[#816e5f]' : ''
              }`}
            >
              CONTACT
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 ${
              isScrolled || !isHome ? 'text-[#434642]' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm rounded-lg mt-2 p-4 shadow-lg">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-[#434642] hover:text-[#816e5f] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                HOME
              </Link>
              <Link
                to="/about"
                className="text-[#434642] hover:text-[#816e5f] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ABOUT
              </Link>
              <Link
                to="/portfolio"
                className="text-[#434642] hover:text-[#816e5f] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                PORTFOLIO
              </Link>
              <Link
                to="/contact"
                className="text-[#434642] hover:text-[#816e5f] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CONTACT
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
