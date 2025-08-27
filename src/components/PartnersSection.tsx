import React from 'react';
import { motion } from 'framer-motion';

const PartnersSection = () => {
  const partners = [
    { name: 'Safaricom', color: 'from-green-500 to-green-600' },
    { name: 'KCB Bank', color: 'from-blue-500 to-blue-600' },
    { name: 'Equity Bank', color: 'from-red-500 to-red-600' },
    { name: 'Nakumatt', color: 'from-orange-500 to-orange-600' },
    { name: 'Tuskys', color: 'from-purple-500 to-purple-600' },
    { name: 'Naivas', color: 'from-cyan-500 to-cyan-600' },
    { name: 'Java House', color: 'from-yellow-500 to-yellow-600' },
    { name: 'KFC Kenya', color: 'from-red-600 to-red-700' },
  ];

  const [currentCubeIndex, setCurrentCubeIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCubeIndex((prev) => (prev + 1) % partners.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const cubeVariants = {
    animate: {
      rotateY: [0, 90, 180, 270, 360],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const slideVariants = {
    animate: {
      x: ['-100%', '100vw'],
      transition: {
        duration: 15,
        repeat: Infinity,
        ease: ["linear"]
      }
    }
  };

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by <span className="text-red-600">Leading Brands</span>
          </h2>
          <p className="text-lg text-gray-600">
            We're proud to work with amazing companies across various industries
          </p>
        </motion.div>

        {/* Cube Animation */}
        <div className="mb-16 flex justify-center">
          <div className="relative w-32 h-32 perspective-1000">
            <motion.div
              variants={cubeVariants}
              animate="animate"
              className="relative w-full h-full transform-style-preserve-3d"
            >
              {partners.slice(currentCubeIndex, currentCubeIndex + 4).map((partner, index) => (
                <div
                  key={index}
                  className={`absolute w-full h-full bg-white rounded-lg shadow-lg flex items-center justify-center border-2 border-gray-200 ${
                    index === 0 ? 'transform rotateY-0 translateZ-16' :
                    index === 1 ? 'transform rotateY-90 translateZ-16' :
                    index === 2 ? 'transform rotateY-180 translateZ-16' :
                    'transform rotateY-270 translateZ-16'
                  }`}
                  style={{
                    transform: `rotateY(${index * 90}deg) translateZ(64px)`
                  }}
                >
                  <div className="text-center p-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${partner.color} rounded-lg mx-auto mb-2 flex items-center justify-center`}>
                      <span className="text-white font-bold text-lg">
                        {partner.name.charAt(0)}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-gray-800">{partner.name}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Sliding Partners */}
        <div className="relative h-24 overflow-hidden">
          <motion.div
            variants={slideVariants}
            animate="animate"
            className="flex items-center space-x-16 absolute whitespace-nowrap"
          >
            {[...partners, ...partners].map((partner, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="flex-shrink-0 bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${partner.color} rounded-lg flex items-center justify-center`}>
                    <span className="text-white font-bold">
                      {partner.name.charAt(0)}
                    </span>
                  </div>
                  <span className="font-semibold text-gray-800 text-lg">
                    {partner.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating Partners Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
                rotateX: 5,
              }}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${partner.color} rounded-lg mx-auto mb-3 flex items-center justify-center`}>
                  <span className="text-white font-bold text-xl">
                    {partner.name.charAt(0)}
                  </span>
                </div>
                <p className="font-semibold text-gray-800">{partner.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;