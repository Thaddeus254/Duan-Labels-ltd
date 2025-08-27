import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, Zap } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const About = () => {
  const features = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Industry Expertise",
      description: "Over 10 years of experience in the printing and labeling industry"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Dedicated Team",
      description: "Professional team of designers and printing specialists"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Quality Focus",
      description: "Commitment to delivering exceptional quality in every project"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Fast Turnaround",
      description: "Quick and efficient service without compromising on quality"
    }
  ];

  return (
    <PageTransition>
      <div className="pt-24">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                About <span className="text-blue-600">Duan Labels</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your trusted partner in premium printing and labeling solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Our <span className="text-red-600">Story</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Thermal rolls, labels, and stickers are widely accessible in Kenya. These products are frequently used for printing barcodes, product information, shipping labels, and receipts, among other things.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Receipt printers frequently employ thermal rolls, and labels and stickers are used in retail, logistics, and other sectors that need reliable and easily adjustable identifying solutions.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                    >
                      <div className="text-red-600 bg-red-50 p-2 rounded-lg flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div className="relative z-10">
                  <motion.img
                    whileHover={{ scale: 1.02 }}
                    src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Printing Process"
                    className="rounded-2xl shadow-2xl transition-transform duration-300"
                  />
                </div>
                <div className="absolute -top-8 -right-8 w-full h-full bg-gradient-to-br from-red-600 to-cyan-600 rounded-2xl -z-10"></div>
              </motion.div>
            </div>

            {/* Stats overlay - moved below the image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 bg-white rounded-2xl shadow-xl p-6 border max-w-md mx-auto lg:mx-0"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="text-3xl font-bold text-red-600"
                  >
                    500+
                  </motion.div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                    className="text-3xl font-bold text-cyan-600"
                  >
                    99%
                  </motion.div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide exceptional printing and labeling solutions that help businesses 
                  enhance their brand presence and achieve their marketing goals through 
                  innovative design and superior quality craftsmanship.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the leading printing and labeling company in Kenya, recognized for 
                  our commitment to quality, innovation, and customer satisfaction while 
                  contributing to the growth of local businesses.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default About;