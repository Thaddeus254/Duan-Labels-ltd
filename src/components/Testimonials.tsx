import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Fresh Foods Kenya",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Duan Labels transformed our product packaging with their exceptional quality labels. The attention to detail and quick turnaround time exceeded our expectations."
    },
    {
      name: "Michael Ochieng",
      company: "Tech Solutions Ltd",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Professional service and outstanding quality. They helped us create a strong brand identity with their custom printing solutions. Highly recommended!"
    },
    {
      name: "Grace Wanjiku",
      company: "Artisan Crafts",
      image: "https://images.pexels.com/photos/3785081/pexels-photo-3785081.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "The team at Duan Labels understood our vision perfectly. Their creative input and technical expertise resulted in beautiful labels that our customers love."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-blue-600">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="mb-6">
                <Quote className="h-8 w-8 text-blue-600 mb-4" />
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
              </div>
              
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;