import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, ChevronDown, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import PartnersSection from '../components/PartnersSection';

const Home = () => {
  const backgroundImages = [
    "/Gallery/Factory 1.jpg",
    "/Galler/Factory 2.jpg",
    "/Gallery/Factory 3.jpg",
    "/Gallery/Factory 4.jpg",
    "/Gallery/Factory 5.jpg",
    "/Gallery/Factory 6.jpg"
  ];

  const [currentBgIndex, setCurrentBgIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToPartners = () => {
    const partnersSection = document.getElementById('partners');
    if (partnersSection) {
      partnersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <PageTransition>
      <div>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${backgroundImages[currentBgIndex]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-cyan-800/70"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center mb-6 space-y-2 sm:space-y-0"
            >
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                >
                  <Star className="h-6 w-6 text-yellow-400 fill-current" />
                </motion.div>
                ))}
                <span className="ml-3 text-base sm:text-lg font-medium">Trusted by 500+ Businesses</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Premium
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="block bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent"
              >
                Label Solutions
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed px-4"
            >
              Thermal rolls, labels, and stickers are widely accessible in Kenya. These products are frequently used for printing barcodes, product information, shipping labels, and receipts.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-red-600 to-cyan-600 hover:from-red-700 hover:to-cyan-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 flex items-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/products"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 border border-white/20 hover:border-white/30"
              >
                View Our Work
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto px-4"
            >
              {[
                { number: '10+', label: 'Years Experience' },
                { number: '500+', label: 'Happy Clients' },
                { number: '24/7', label: 'Support Available' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-400 mb-2">{stat.number}</div>
                  <div className="text-sm sm:text-base md:text-lg text-gray-200">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Scroll Down Arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-20 sm:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
            onClick={scrollToPartners}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-white/80 hover:text-white transition-colors"
            >
              <span className="text-xs sm:text-sm mb-2">Scroll Down</span>
              <ChevronDown className="h-6 w-6" />
            </motion.div>
          </motion.div>
        </section>

        {/* Partners Section */}
        <div id="partners">
          <PartnersSection />
        </div>

        {/* Quick Services Preview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What We <span className="text-red-600">Offer</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Comprehensive printing and labeling solutions for your business needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Thermal Rolls', desc: 'Premium thermal rolls for various printing needs' },
                { title: 'Food Labels', desc: 'Waterproof labels for kitchen conditions' },
                { title: 'KEBS Labels', desc: 'Compliance labels with customization' },
                { title: 'Custom Stickers', desc: 'Personalized stickers for all applications' }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-cyan-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{service.title.charAt(0)}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-12"
            >
              <Link
                to="/services"
                className="inline-flex items-center bg-gradient-to-r from-red-600 to-cyan-600 hover:from-red-700 hover:to-cyan-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;