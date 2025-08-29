import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const TermsOfService = () => {
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
                Terms of <span className="text-red-600">Service</span>
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
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
                  <p className="text-gray-700 leading-relaxed">
                    By accessing and using Duan Labels services, you accept and agree to be bound by the 
                    terms and provision of this agreement.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Services</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Duan Labels provides thermal rolls, labels, stickers, and related printing services. 
                    We reserve the right to modify or discontinue any service at any time.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Orders and Payment</h2>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>All orders are subject to acceptance and availability</li>
                    <li>Prices are subject to change without notice</li>
                    <li>Payment terms will be specified in your quote or invoice</li>
                    <li>Custom orders may require advance payment</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Quality Guarantee</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We stand behind the quality of our products. If you're not satisfied with your order, 
                    please contact us within 7 days of delivery to discuss resolution options.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Duan Labels shall not be liable for any indirect, incidental, special, or consequential 
                    damages arising from the use of our products or services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-700">
                      For questions about these Terms of Service, contact us at:<br/>
                      Email: info@duanlabels.co.ke<br/>
                      Phone: +254 796 586 862<br />+254 792 561787<br />+254 723 296 716<br/>
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

export default TermsOfService;