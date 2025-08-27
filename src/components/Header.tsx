import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const getPageColor = () => {
    switch (location.pathname) {
      case '/':
        return { bg: 'bg-gradient-to-r from-red-600/90 to-cyan-600/90', text: 'text-white' };
      case '/services':
        return { bg: 'bg-white/95', text: 'text-gray-900' };
      case '/about':
        return { bg: 'bg-gray-50/95', text: 'text-gray-900' };
      case '/products':
        return { bg: 'bg-white/95', text: 'text-gray-900' };
      case '/contact':
        return { bg: 'bg-gray-50/95', text: 'text-gray-900' };
      default:
        return { bg: 'bg-white/95', text: 'text-gray-900' };
    }
  };

  const pageColor = getPageColor();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? pageColor.bg + ' shadow-lg backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      {/* Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-500 to-cyan-500"
        style={{
          width: `${(window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`
        }}
        initial={{ width: 0 }}
        animate={{ 
          width: `${(window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%` 
        }}
        transition={{ duration: 0.1 }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/Gallery/duan logo 1.png" 
              alt="Duan Labels" 
              className="h-10 w-auto"
              onError={(e) => {
                // Fallback if image doesn't load
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isScrolled ? 'bg-blue-600' : 'bg-white/20'}`}>
                <span className={`text-xl font-bold ${isScrolled ? 'text-white' : 'text-white'}`}>D</span>
              </div>
            </div>
            <span className={`text-xl sm:text-2xl font-bold ${isScrolled ? pageColor.text : 'text-white'}`}>
              Duan Labels
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-all duration-200 relative ${
                  location.pathname === item.path
                    ? isScrolled ? 'text-red-600' : 'text-red-200'
                    : isScrolled ? pageColor.text + ' hover:text-red-600' : 'text-white hover:text-red-200'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                      isScrolled ? 'bg-red-600' : 'bg-red-200'
                    }`}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden ${isScrolled ? pageColor.text : 'text-white'}`}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-white border-t"
        >
          <nav className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 transition-colors ${
                  location.pathname === item.path
                    ? 'text-red-600 bg-red-50'
                    : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;