import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const productParam = searchParams.get('product');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: productParam ? `I'm interested in learning more about ${productParam}. Please provide more details about pricing, customization options, and delivery times.` : ''
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Inquiry from ${formData.name} - ${formData.service || 'General Inquiry'}`;
    const body = `Hello Duan Labels Ltd,%0A%0A`
      + `My name is ${formData.name}.%0A`
      + `Email: ${formData.email}%0A`
      + `Phone: ${formData.phone}%0A`
      + `Service: ${formData.service || 'N/A'}%0A%0A`
      + `Message:%0A${formData.message}`;

    const whatsappNumber = "254796586862"; // ✅ updated to your real WhatsApp number
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${body}`;
    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=info@duanlabels.co.ke&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

window.open(gmailURL, "_blank");


    if (isMobile) {
      const newWindow = window.open(whatsappURL, "_blank");
      setTimeout(() => {
        if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
          window.location.href = mailtoURL;
        }
      }, 2000);
    } else {
      window.location.href = mailtoURL;
    }
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+254796586862';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@duanlabels.co.ke';
  };

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
                Get In <span className="text-red-600">Touch</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to start your project? Contact us today for a free consultation and quote
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-8">Let's Start a Conversation</h3>
                <p className="text-lg text-gray-600 mb-8">
                  We're here to help bring your vision to life. Reach out to us through any of the following channels.
                </p>

                <div className="space-y-6">
                  {[
                    { icon: Phone, title: 'Phone', info: '+254 796 586 862, +254 792 561787, +254 723 296 716', onClick: handlePhoneClick },
                    { icon: Mail, title: 'Email', info: 'info@duanlabels.co.ke', onClick: handleEmailClick },
                    { icon: MapPin, title: 'Location', info: 'Nairobi, Kenya' },
                    { icon: Clock, title: 'Business Hours', info: 'Mon - Fri: 8:00 AM - 6:00 PM' }
                  ].map((contact, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className={`flex items-center space-x-4 p-4 rounded-lg hover:bg-white transition-all duration-300 ${contact.onClick ? 'cursor-pointer' : ''}`}
                      onClick={contact.onClick}
                    >
                      <div className="bg-blue-100 p-3 rounded-full">
                        <contact.icon className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{contact.title}</h4>
                        <p className={`text-gray-600 ${contact.onClick ? 'hover:text-red-600' : ''}`}>{contact.info}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Map */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="mt-8"
                >
                  <h4 className="font-semibold text-gray-900 mb-4">Find Us</h4>
                  <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.682000395979!2d36.92105277408127!3d-1.3674822357183845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0d28d0677853%3A0x611cef8f3e61ad87!2sDuan%20Labels%20LTD!5e0!3m2!1sen!2ske!4v1756287748445!5m2!1sen!2ske"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                        placeholder="+254 700 000 000"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Needed
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select a service</option>
                        <option value="thermal-rolls">Thermal Rolls</option>
                        <option value="food-labels">Food Labels</option>
                        <option value="kebs-labels">UCR KEBS Labels</option>
                        <option value="luggage-tags">Boarding & Luggage Tags</option>
                        <option value="wine-labels">Alcohol & Wine Labels</option>
                        <option value="price-tags">Price Tag Labels</option>
                        <option value="parking-tickets">Parking Tickets</option>
                        <option value="custom-labels">Custom Labels</option>
                        <option value="cleaning-labels">Cleaning Labels</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>

                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 to-cyan-600 hover:from-red-700 hover:to-cyan-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
                  >
                    {isMobile ? "Send via WhatsApp" : "Send via Email"}
                    <Send className="ml-2 h-5 w-5" />
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Contact;
