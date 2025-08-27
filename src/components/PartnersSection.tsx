import React from "react";
import { motion } from "framer-motion";

const PartnersSection = () => {
  const partners = [
    { name: "Aquvie", color: "from-green-500 to-green-600", logo: "/logos/Aquvie.png" },
    { name: "Capitan", color: "from-blue-500 to-blue-600", logo: "/logos/Capitan.png" },
    { name: "Fly-540", color: "from-red-500 to-red-600", logo: "/logos/Fly-540.png" },
    { name: "Nice & Lovely", color: "from-orange-500 to-orange-600", logo: "/logos/Nice-Lovely.png" },
    { name: "Ola Energy", color: "from-purple-500 to-purple-600", logo: "/logos/Ola-Energy.png" },
    { name: "Naivas", color: "from-cyan-500 to-cyan-600", logo: "/logos/naivas.png" },
    { name: "KFC Kenya", color: "from-red-600 to-red-700", logo: "/logos/kfc.png" },
    { name: "Safarilink", color: "from-indigo-500 to-indigo-600", logo: "/logos/Safarilink.png" },
    { name: "Total Energies", color: "from-red-400 to-red-500", logo: "/logos/Total-energies.png" },
    { name: "Trade Winds", color: "from-blue-400 to-blue-500", logo: "/logos/Tradewinds.png" },
  ];

  const [currentCubeIndex, setCurrentCubeIndex] = React.useState(0);
  const partnersPerCube = 4;

  // Cube animation
  const cubeVariants = {
    animate: {
      rotateY: [0, 360],
      transition: {
        duration: 6, // one full rotation
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  // Update cube faces only after full rotation
  const handleUpdate = (latest: any) => {
    if (Math.round(latest.rotateY) % 360 === 0) {
      setCurrentCubeIndex(
        (prev) => (prev + partnersPerCube) % partners.length
      );
    }
  };

  // Sliding logos marquee
  const slideVariants = {
    animate: {
      x: ["-100%", "100vw"],
      transition: {
        duration: 15,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
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
              onUpdate={handleUpdate}
            >
              {partners
                .slice(currentCubeIndex, currentCubeIndex + partnersPerCube)
                .map((partner, index) => (
                  <div
                    key={index}
                    className="absolute w-full h-full bg-white rounded-lg shadow-lg flex items-center justify-center border-2 border-gray-200"
                    style={{
                      transform: `rotateY(${index * 90}deg) translateZ(64px)`,
                    }}
                  >
                    <div className="text-center p-4">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${partner.color} rounded-lg mx-auto mb-2 flex items-center justify-center`}
                      >
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="h-10 object-contain"
                        />
                      </div>
                      <p className="text-sm font-semibold text-gray-800">
                        {partner.name}
                      </p>
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
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${partner.color} rounded-lg flex items-center justify-center`}
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-8 object-contain"
                    />
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
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${partner.color} rounded-lg mx-auto mb-3 flex items-center justify-center`}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-10 object-contain"
                  />
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
