import React from 'react';
import { motion } from 'framer-motion';
import { Tag, Package, Printer, Palette, Clock, Shield } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Services = () => {
  const services = [
    {
      icon: <Tag className="h-12 w-12" />,
      title: "Custom Labels",
      description: "High-quality custom labels for products, packaging, and branding with various materials and finishes.",
      features: ["Waterproof options", "Various sizes", "Premium materials", "Quick turnaround"]
    },
    {
      icon: <Package className="h-12 w-12" />,
      title: "Product Stickers",
      description: "Durable product stickers and decals perfect for marketing, branding, and promotional campaigns.",
      features: ["Weather resistant", "Custom shapes", "Bulk orders", "Competitive pricing"]
    },
    {
      icon: <Printer className="h-12 w-12" />,
      title: "Digital Printing",
      description: "State-of-the-art digital printing services for banners, posters, and large format materials.",
      features: ["High resolution", "Fast delivery", "Large format", "Color accuracy"]
    },
    {
      icon: <Palette className="h-12 w-12" />,
      title: "Design Services",
      description: "Professional graphic design services to create stunning visuals that represent your brand.",
      features: ["Logo design", "Brand identity", "Creative concepts", "Unlimited revisions"]
    },
    {
      icon: <Clock className="h-12 w-12" />,
      title: "Express Service",
      description: "Rush orders and express delivery options for urgent projects and tight deadlines.",
      features: ["Same day service", "Priority handling", "Express shipping", "24/7 support"]
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee with premium materials and rigorous quality control processes.",
      features: ["Money back guarantee", "Quality testing", "Premium materials", "Expert craftsmanship"]
    }
  ];

  return (
    <PageTransition>
      <div className="pt-24">
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Our <span className="text-blue-600">Services</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive printing and labeling solutions tailored to meet your business needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="text-blue-600 mb-6"
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: (index * 0.1) + (featureIndex * 0.05) }}
                        className="flex items-center text-gray-700"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white py-3 px-6 rounded-full font-semibold transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Services;