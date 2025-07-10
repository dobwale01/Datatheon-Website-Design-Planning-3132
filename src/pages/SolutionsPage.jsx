import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiDatabase, FiCpu, FiBarChart3, FiUsers, FiSettings, FiTrendingUp, FiZap, FiShield } = FiIcons;

const SolutionsPage = () => {
  const solutions = [
    {
      icon: FiDatabase,
      title: 'Data Analytics Solutions',
      description: 'Transform your raw data into actionable insights with our comprehensive analytics platform.',
      features: [
        'Real-time data processing and visualization',
        'Advanced statistical analysis and reporting',
        'Custom dashboard creation and management',
        'Predictive analytics and forecasting',
        'Data quality assessment and cleansing'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
    },
    {
      icon: FiCpu,
      title: 'AI Innovation Labs',
      description: 'Develop cutting-edge AI solutions tailored to your specific business challenges.',
      features: [
        'Machine learning model development',
        'Natural language processing solutions',
        'Computer vision and image recognition',
        'Automated decision-making systems',
        'AI model deployment and monitoring'
      ],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop'
    },
    {
      icon: FiUsers,
      title: 'Strategic Partnerships',
      description: 'Collaborate with our experts to build long-term data and AI strategies.',
      features: [
        'Data strategy consulting and planning',
        'AI readiness assessment and roadmap',
        'Technology stack evaluation and selection',
        'Team training and capability building',
        'Ongoing support and optimization'
      ],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop'
    }
  ];

  const services = [
    {
      icon: FiBarChart3,
      title: 'Business Intelligence',
      description: 'Comprehensive BI solutions for data-driven decision making.'
    },
    {
      icon: FiZap,
      title: 'Process Automation',
      description: 'Automate repetitive tasks and streamline operations with AI.'
    },
    {
      icon: FiShield,
      title: 'Data Security',
      description: 'Protect your data assets with advanced security measures.'
    },
    {
      icon: FiSettings,
      title: 'Custom Integration',
      description: 'Seamlessly integrate AI solutions with your existing systems.'
    }
  ];

  const industries = [
    { name: 'Healthcare', icon: '🏥', description: 'AI-powered diagnostics and patient care optimization' },
    { name: 'Finance', icon: '💰', description: 'Risk assessment and fraud detection solutions' },
    { name: 'Retail', icon: '🛒', description: 'Customer behavior analysis and inventory optimization' },
    { name: 'Manufacturing', icon: '🏭', description: 'Predictive maintenance and quality control' },
    { name: 'Technology', icon: '💻', description: 'Software optimization and user experience enhancement' },
    { name: 'Education', icon: '🎓', description: 'Personalized learning and performance analytics' }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-red-500">Solutions</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive data and AI solutions designed to transform your business 
            and drive measurable results across all industries.
          </p>
        </motion.div>
      </section>

      {/* Main Solutions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="space-y-20">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="text-red-500 mb-4">
                  <SafeIcon icon={solution.icon} className="h-12 w-12" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {solution.title}
                </h2>
                <p className="text-xl text-gray-400 mb-6">
                  {solution.description}
                </p>
                <ul className="space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className="text-red-500 mt-1">
                        <SafeIcon icon={FiTrendingUp} className="h-5 w-5" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Additional <span className="text-red-500">Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Complementary services to support your data and AI journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900 p-6 rounded-xl border border-gray-700 text-center hover:border-red-500 transition-colors"
              >
                <div className="text-red-500 mb-4">
                  <SafeIcon icon={service.icon} className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industries We <span className="text-red-500">Serve</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Tailored solutions for diverse industries and business sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-red-500 transition-colors"
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {industry.name}
                </h3>
                <p className="text-gray-400">
                  {industry.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our solutions can transform your business and drive growth.
            </p>
            <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Schedule a Consultation
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;