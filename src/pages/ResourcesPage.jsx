import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiBookOpen, FiVideo, FiFileText, FiDownload, FiExternalLink, FiMail, FiClock, FiUser, FiTag } = FiIcons;

const ResourcesPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [email, setEmail] = useState('');

  const categories = [
    { id: 'all', name: 'All Resources', icon: FiBookOpen },
    { id: 'tutorials', name: 'Tutorials', icon: FiVideo },
    { id: 'case-studies', name: 'Case Studies', icon: FiFileText },
    { id: 'whitepapers', name: 'Whitepapers', icon: FiDownload },
    { id: 'guides', name: 'Guides', icon: FiBookOpen }
  ];

  const resources = [
    {
      id: 1,
      title: 'Getting Started with Machine Learning',
      description: 'A comprehensive guide to understanding the fundamentals of machine learning and its applications.',
      category: 'tutorials',
      type: 'Tutorial',
      readTime: '15 min',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop',
      tags: ['Machine Learning', 'Beginner', 'AI']
    },
    {
      id: 2,
      title: 'Retail Analytics Case Study: 40% Revenue Increase',
      description: 'How a major retailer used predictive analytics to optimize inventory and increase revenue by 40%.',
      category: 'case-studies',
      type: 'Case Study',
      readTime: '8 min',
      author: 'Marcus Rodriguez',
      date: '2024-01-10',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
      tags: ['Retail', 'Analytics', 'ROI']
    },
    {
      id: 3,
      title: 'The Future of AI in Healthcare',
      description: 'An in-depth analysis of artificial intelligence applications in healthcare and their potential impact.',
      category: 'whitepapers',
      type: 'Whitepaper',
      readTime: '25 min',
      author: 'Dr. Aisha Patel',
      date: '2024-01-08',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop',
      tags: ['Healthcare', 'AI', 'Future Tech']
    },
    {
      id: 4,
      title: 'Data Visualization Best Practices',
      description: 'Learn how to create compelling and effective data visualizations that tell a story.',
      category: 'guides',
      type: 'Guide',
      readTime: '12 min',
      author: 'James Thompson',
      date: '2024-01-05',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      tags: ['Visualization', 'Design', 'Analytics']
    },
    {
      id: 5,
      title: 'Building Your First Neural Network',
      description: 'Step-by-step tutorial on creating and training your first neural network from scratch.',
      category: 'tutorials',
      type: 'Tutorial',
      readTime: '30 min',
      author: 'Dr. Sarah Chen',
      date: '2024-01-03',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop',
      tags: ['Neural Networks', 'Deep Learning', 'Python']
    },
    {
      id: 6,
      title: 'Financial Services AI Transformation',
      description: 'How a leading bank reduced fraud by 60% using advanced AI detection algorithms.',
      category: 'case-studies',
      type: 'Case Study',
      readTime: '10 min',
      author: 'Marcus Rodriguez',
      date: '2024-01-01',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop',
      tags: ['Finance', 'Fraud Detection', 'AI']
    }
  ];

  const filteredResources = activeCategory === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === activeCategory);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
    alert('Thank you for subscribing to our newsletter!');
  };

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
            Resources & <span className="text-red-500">Insights</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover tutorials, case studies, and expert insights to accelerate your data science 
            and AI journey. Stay ahead with the latest trends and best practices.
          </p>
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <SafeIcon icon={category.icon} className="h-5 w-5" />
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Resources Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-red-500 transition-colors group"
            >
              <img
                src={resource.image}
                alt={resource.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-red-600 text-white rounded-full text-sm font-medium">
                    {resource.type}
                  </span>
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <SafeIcon icon={FiClock} className="h-4 w-4" />
                    <span>{resource.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                  {resource.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {resource.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {resource.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center space-x-2">
                    <SafeIcon icon={FiUser} className="h-4 w-4" />
                    <span>{resource.author}</span>
                  </div>
                  <span>{resource.date}</span>
                </div>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2">
                  <span>Read More</span>
                  <SafeIcon icon={FiExternalLink} className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-red-500 mb-4">
                <SafeIcon icon={FiMail} className="h-16 w-16 mx-auto" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Stay Updated with Our <span className="text-red-500">Newsletter</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Get the latest insights, tutorials, and industry updates delivered 
                directly to your inbox. Join thousands of data professionals.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-sm text-gray-500 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured <span className="text-red-500">Downloads</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Access our most popular resources and tools to accelerate your data science projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'AI Implementation Checklist',
                description: 'A comprehensive checklist for implementing AI solutions in your organization.',
                downloads: '5,000+',
                type: 'PDF Guide'
              },
              {
                title: 'Data Science Toolkit',
                description: 'Essential tools and libraries for data science projects with setup instructions.',
                downloads: '3,500+',
                type: 'Resource Pack'
              },
              {
                title: 'Machine Learning Templates',
                description: 'Ready-to-use templates for common machine learning algorithms and workflows.',
                downloads: '7,200+',
                type: 'Code Templates'
              }
            ].map((download, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-red-500 transition-colors"
              >
                <div className="text-red-500 mb-4">
                  <SafeIcon icon={FiDownload} className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {download.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {download.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span>{download.type}</span>
                  <span>{download.downloads} downloads</span>
                </div>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2">
                  <SafeIcon icon={FiDownload} className="h-4 w-4" />
                  <span>Download Free</span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;