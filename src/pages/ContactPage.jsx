import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMail, FiPhone, FiMapPin, FiSend, FiLinkedin, FiTwitter, FiGithub, FiClock } = FiIcons;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email Us',
      content: 'hello@datatheon.com',
      subtitle: 'We typically respond within 24 hours'
    },
    {
      icon: FiPhone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      subtitle: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: FiMapPin,
      title: 'Visit Us',
      content: '123 Innovation Drive, Tech City, TC 12345',
      subtitle: 'San Francisco, CA'
    }
  ];

  const socialLinks = [
    { icon: FiLinkedin, name: 'LinkedIn', url: '#' },
    { icon: FiTwitter, name: 'Twitter', url: '#' },
    { icon: FiGithub, name: 'GitHub', url: '#' }
  ];

  const offices = [
    {
      city: 'San Francisco',
      address: '123 Innovation Drive, Tech City, TC 12345',
      phone: '+1 (555) 123-4567',
      email: 'sf@datatheon.com'
    },
    {
      city: 'New York',
      address: '456 Data Avenue, NYC, NY 10001',
      phone: '+1 (555) 987-6543',
      email: 'ny@datatheon.com'
    },
    {
      city: 'London',
      address: '789 AI Street, London, UK EC1A 1BB',
      phone: '+44 20 7123 4567',
      email: 'london@datatheon.com'
    }
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
            Get in <span className="text-red-500">Touch</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to transform your business with data and AI? We'd love to hear from you. 
            Let's discuss how we can help you achieve your goals.
          </p>
        </motion.div>
      </section>

      {/* Contact Form and Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800 p-8 rounded-xl border border-gray-700"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
                    placeholder="john@company.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
                  placeholder="Your Company"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-red-500"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="consultation">Free Consultation</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
                  placeholder="Tell us about your project or how we can help you..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
              >
                <SafeIcon icon={FiSend} className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Contact Information
              </h2>
              <p className="text-gray-400 mb-8">
                We're here to help and answer any questions you might have. 
                We look forward to hearing from you.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-red-600 p-3 rounded-lg">
                    <SafeIcon icon={info.icon} className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {info.title}
                    </h3>
                    <p className="text-gray-300 mb-1">{info.content}</p>
                    <p className="text-sm text-gray-400">{info.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="bg-gray-700 hover:bg-red-600 p-3 rounded-lg transition-colors"
                  >
                    <SafeIcon icon={social.icon} className="h-6 w-6 text-white" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <div className="flex items-center space-x-2 mb-4">
                <SafeIcon icon={FiClock} className="h-5 w-5 text-red-500" />
                <h3 className="text-lg font-semibold text-white">
                  Business Hours
                </h3>
              </div>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="text-red-500">Global</span> Offices
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We have offices around the world to serve you better
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-red-500 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white mb-4">
                  {office.city}
                </h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-start space-x-3">
                    <SafeIcon icon={FiMapPin} className="h-5 w-5 text-red-500 mt-0.5" />
                    <span className="text-sm">{office.address}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <SafeIcon icon={FiPhone} className="h-5 w-5 text-red-500" />
                    <span className="text-sm">{office.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <SafeIcon icon={FiMail} className="h-5 w-5 text-red-500" />
                    <span className="text-sm">{office.email}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked <span className="text-red-500">Questions</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Quick answers to common questions about our services and approach
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How long does a typical AI implementation take?",
                answer: "The timeline varies depending on project complexity, but most implementations take 3-6 months from initial consultation to deployment."
              },
              {
                question: "Do you provide ongoing support after implementation?",
                answer: "Yes, we offer comprehensive support packages including monitoring, maintenance, and continuous optimization of your AI solutions."
              },
              {
                question: "What industries do you specialize in?",
                answer: "We work across various industries including healthcare, finance, retail, manufacturing, and technology, with tailored solutions for each sector."
              },
              {
                question: "How do you ensure data security and privacy?",
                answer: "We implement enterprise-grade security measures, comply with industry standards like GDPR and HIPAA, and use encrypted data processing throughout."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700"
              >
                <h3 className="text-lg font-semibold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-400">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;