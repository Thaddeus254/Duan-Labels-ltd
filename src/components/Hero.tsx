import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: '/Gallery/Factory 1.jpg',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-teal-800/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="flex items-center justify-center mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
          ))}
          <span className="ml-3 text-lg font-medium">Trusted by 500+ Businesses</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Premium
          <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Label Solutions
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Transform your brand with high-quality custom labels, stickers, and printing solutions. 
          Professional design meets exceptional craftsmanship.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToContact}
            className="group bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Get Free Quote
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 border border-white/20 hover:border-white/30"
          >
            View Our Work
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          {[
            { number: '10+', label: 'Years Experience' },
            { number: '500+', label: 'Happy Clients' },
            { number: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">{stat.number}</div>
              <div className="text-lg text-gray-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;