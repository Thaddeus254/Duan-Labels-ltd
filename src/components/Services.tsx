import React from 'react';
import { Tag, Package, Printer, Palette, Clock, Shield } from 'lucide-react';

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
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive printing and labeling solutions tailored to meet your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-blue-600 mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-6 w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white py-3 px-6 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;