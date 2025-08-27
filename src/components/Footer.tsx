import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const handlePhoneClick = () => {
    window.location.href = 'tel:+254700123456';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@duanlabels.co.ke';
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/src/assets/duan logo 1.png" 
                alt="Duan Labels" 
                className="h-8 w-auto"
                onError={(e) => e.currentTarget.style.display = 'none'}
              />
              <span className="text-2xl font-bold">Duan Labels</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of thermal labels, stickers, and printing solutions in Kenya. 
              We deliver quality products that meet the diverse needs of businesses across various industries.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, href: 'https://facebook.com/duanlabels' },
                { Icon: Twitter, href: 'https://twitter.com/duanlabels' },
                { Icon: Instagram, href: 'https://instagram.com/duanlabels' },
                { Icon: Linkedin, href: 'https://linkedin.com/company/duanlabels' }
              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="bg-gray-800 hover:bg-red-600 p-2 rounded-full transition-colors duration-300"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'About', path: '/about' },
                { name: 'Products', path: '/products' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 cursor-pointer hover:text-red-400 transition-colors" onClick={handlePhoneClick}>
                <Phone className="h-5 w-5 text-red-400" />
                <span className="text-gray-300 hover:text-white">+254 700 123 456</span>
              </div>
              <div className="flex items-center space-x-3 cursor-pointer hover:text-red-400 transition-colors" onClick={handleEmailClick}>
                <Mail className="h-5 w-5 text-red-400" />
                <span className="text-gray-300 hover:text-white">info@duanlabels.co.ke</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-red-400" />
                <span className="text-gray-300">Nairobi, Kenya</span>
              </div>
            </div>
            
            {/* Embedded Map */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3">Find Us</h4>
              <div className="w-full h-48 bg-gray-800 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19034296034!2d36.70730744999999!3d-1.2920659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2s!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Duan Labels. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</Link>
              <Link to="/cookie-policy" className="text-gray-400 hover:text-white transition-colors duration-200">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;