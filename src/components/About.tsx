import React from 'react';
import { Award, Users, Target, Zap } from 'lucide-react';

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
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">Duan Labels</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Founded with a vision to revolutionize the printing industry in Kenya, Duan Labels has become 
              a trusted partner for businesses seeking premium quality printing solutions.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We specialize in custom labels, stickers, and digital printing services, combining cutting-edge 
              technology with traditional craftsmanship to deliver exceptional results that exceed our clients' expectations.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-blue-600 bg-blue-50 p-2 rounded-lg flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Printing Process"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-8 -right-8 w-full h-full bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl -z-10"></div>
            
            {/* Stats overlay */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 border">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600">99%</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;