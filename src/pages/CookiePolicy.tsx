import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const CookiePolicy = () => {
  return (
    <PageTransition>
      <div className="pt-24">
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Cookie <span className="text-red-600">Policy</span>
              </h1>
              <p className="text-xl text-gray-600">
                Last updated: January 2025
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Cookies are small text files that are stored on your computer or mobile device when you 
                    visit our website. They help us provide you with a better experience by remembering your 
                    preferences and improving our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Cookies</h2>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>To remember your preferences and settings</li>
                    <li>To analyze website traffic and usage patterns</li>
                    <li>To improve our website functionality</li>
                    <li>To provide personalized content and recommendations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Essential Cookies</h3>
                      <p className="text-gray-700">These cookies are necessary for the website to function properly.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Analytics Cookies</h3>
                      <p className="text-gray-700">These help us understand how visitors interact with our website.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Functional Cookies</h3>
                      <p className="text-gray-700">These enable enhanced functionality and personalization.</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Cookies</h2>
                  <p className="text-gray-700 leading-relaxed">
                    You can control and manage cookies through your browser settings. Please note that 
                    disabling certain cookies may affect the functionality of our website.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                  <p className="text-gray-700 leading-relaxed">
                    If you have any questions about our Cookie Policy, please contact us:
                  </p>
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-700">
                      Email: info@duanlabels.co.ke<br/>
                      Phone: +254 700 123 456<br/>
                      Address: Nairobi, Kenya
                    </p>
                  </div>
                </section>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default CookiePolicy;