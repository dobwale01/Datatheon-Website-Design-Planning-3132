import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiTarget, FiEye, FiHeart, FiUsers, FiTrendingUp, FiGlobe } = FiIcons;

const AboutPage = () => {
  const values = [
    {
      icon: FiTarget,
      title: 'Mission-Driven',
      description: 'We are committed to democratizing access to data and AI technologies for businesses of all sizes.',
    },
    {
      icon: FiHeart,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with data science and artificial intelligence.',
    },
    {
      icon: FiUsers,
      title: 'Community Focused',
      description: 'We believe in building a strong community of data professionals and AI enthusiasts.',
    },
    {
      icon: FiTrendingUp,
      title: 'Results Oriented',
      description: 'Every solution we create is designed to deliver measurable business impact.',
    },
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Founder',
      bio: 'Former Google AI researcher with 10+ years in machine learning and data science.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO',
      bio: 'Ex-Microsoft engineer specializing in scalable AI systems and cloud architecture.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    },
    {
      name: 'Dr. Aisha Patel',
      role: 'Head of Data Science',
      bio: 'PhD in Statistics from Stanford, expert in predictive analytics and machine learning.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    },
    {
      name: 'James Thompson',
      role: 'VP of Innovation',
      bio: 'Serial entrepreneur with expertise in AI startups and emerging technologies.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    },
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
            About <span className="text-red-500">Datatheon</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We are a team of passionate data scientists, AI engineers, and innovation experts 
            dedicated to transforming how businesses leverage data and artificial intelligence.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-900 p-8 rounded-xl border border-gray-700"
            >
              <div className="text-red-500 mb-4">
                <SafeIcon icon={FiTarget} className="h-12 w-12" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-400 text-lg">
                To democratize access to advanced data analytics and AI technologies, 
                empowering businesses to make data-driven decisions that drive growth, 
                innovation, and positive impact in their industries.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-900 p-8 rounded-xl border border-gray-700"
            >
              <div className="text-red-500 mb-4">
                <SafeIcon icon={FiEye} className="h-12 w-12" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-gray-400 text-lg">
                To be the global leader in data and AI innovation, creating a world where 
                every organization can harness the power of intelligent data to solve 
                complex challenges and create meaningful value.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Our Slogan Means */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What <span className="text-red-500">"Empowering Data | AI | Innovation"</span> Means
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our slogan represents our commitment to three fundamental pillars that drive everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <SafeIcon icon={FiTrendingUp} className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Empowering Data</h3>
              <p className="text-gray-400">
                We transform raw data into actionable insights, helping organizations 
                make informed decisions that drive business success and competitive advantage.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <SafeIcon icon={FiTarget} className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Empowering AI</h3>
              <p className="text-gray-400">
                We harness the power of artificial intelligence to automate processes, 
                enhance decision-making, and unlock new possibilities for innovation and growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <SafeIcon icon={FiGlobe} className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Empowering Innovation</h3>
              <p className="text-gray-400">
                We foster a culture of innovation, pushing boundaries and exploring new 
                frontiers in technology to create solutions that shape the future.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="text-red-500">Values</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The principles that guide our work and define who we are as a team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900 p-6 rounded-xl border border-gray-700 flex items-start space-x-4"
              >
                <div className="text-red-500 mt-1">
                  <SafeIcon icon={value.icon} className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-400">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our <span className="text-red-500">Team</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experienced professionals passionate about data, AI, and innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-red-500 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-400 text-sm">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;