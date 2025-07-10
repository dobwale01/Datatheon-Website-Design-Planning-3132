import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowRight, FiDatabase, FiCpu, FiTrendingUp, FiUsers } = FiIcons;

const HomePage = () => {
  const features = [
    {
      icon: FiDatabase,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with our advanced analytics platform.',
    },
    {
      icon: FiCpu,
      title: 'AI Solutions',
      description: 'Harness the power of artificial intelligence to drive innovation and growth.',
    },
    {
      icon: FiTrendingUp,
      title: 'Business Intelligence',
      description: 'Make data-driven decisions with our comprehensive BI tools and dashboards.',
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <img 
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1752187754719-blob" 
                alt="Datatheon Logo" 
                className="h-16 w-auto mx-auto mb-8"
              />
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Empower Your Business with
                <span className="text-red-600 block mt-2">Data & AI</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                Transform your organization with cutting-edge data analytics 
                and artificial intelligence solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 text-lg"
                >
                  <span>Get Started</span>
                  <SafeIcon icon={FiArrowRight} className="h-5 w-5" />
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-gray-800 text-gray-800 px-8 py-4 rounded-lg font-medium hover:bg-gray-800 hover:text-white transition-colors text-lg"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-red-600">Datatheon</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive solutions that transform how you work with data
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-green-50 p-8 rounded-xl border border-green-100 hover:border-red-500 transition-colors"
              >
                <div className="text-red-600 mb-4">
                  <SafeIcon icon={feature.icon} className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Clients Served' },
              { value: '50+', label: 'AI Models' },
              { value: '95%', label: 'Client Satisfaction' },
              { value: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-red-100 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that have already revolutionized their operations 
              with our data and AI solutions.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-medium transition-colors text-lg"
            >
              Schedule a Demo
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;