import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'thermal', name: 'Thermal Rolls' },
    { id: 'labels', name: 'Labels' },
    { id: 'stickers', name: 'Stickers' },
    { id: 'tags', name: 'Tags' }
  ];

  const products = [
    {
      id: 1,
      title: "Thermal Rolls",
      category: "thermal",
      image: "/Gallery/Thermal rolls.jpg",
      description: "Premium thermal rolls made to print well in various settings, including retail and hospitality."
    },
    {
      id: 2,
      title: "Food Labels",
      category: "labels",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Waterproof labels made of premium materials, designed to endure kitchen conditions."
    },
    {
      id: 3,
      title: "UCR KEBS Labels",
      category: "labels",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Compliance stickers customizable with compliance details for manufacturers."
    },
    {
      id: 4,
      title: "Boarding & Luggage Tags",
      category: "tags",
      image: "/assets/Luggage-Tag.jpg",
      description: "Customizable tags with names & eye-catching artwork, built to survive travel rigors."
    },
    {
      id: 5,
      title: "Alcohol & Wine Labels",
      category: "labels",
      image: "https://images.pexels.com/photos/4226721/pexels-photo-4226721.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Premium labels for wineries and breweries, emphasizing quality and originality."
    },
    {
      id: 6,
      title: "Price Tag Labels",
      category: "stickers",
      image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Customizable price tags in various sizes and designs for retail establishments."
    },
    {
      id: 7,
      title: "Parking Tickets",
      category: "tags",
      image: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Customizable parking tickets with vivid patterns, logos, and serial numbers."
    },
    {
      id: 8,
      title: "Custom Labels",
      category: "labels",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Labels that provide important information and enhance product appearance."
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

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
                Our <span className="text-red-600">Products</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                Thermal rolls, labels, and stickers widely accessible in Kenya for various business needs
              </p>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                  <motion.button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-red-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    {category.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Products Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative overflow-hidden">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        src={product.image}
                        alt={product.title}
                        className="w-full h-64 object-cover"
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                      >
                        <div className="absolute bottom-4 left-4 right-4">
                          <Link
                            to={`/contact?product=${encodeURIComponent(product.title)}`}
                            className="flex items-center justify-center w-full bg-white text-gray-900 py-2 px-4 rounded-full font-semibold transition-all duration-300 hover:bg-gray-100"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            More Info
                          </Link>
                        </div>
                      </motion.div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
                      <p className="text-gray-600">{product.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Products;