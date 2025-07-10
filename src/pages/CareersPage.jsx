import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMapPin, FiClock, FiDollarSign, FiUsers, FiTrendingUp, FiHeart, FiCoffee, FiAward, FiGlobe } = FiIcons;

const CareersPage = () => {
  const jobOpenings = [
    {
      title: 'Senior Data Scientist',
      department: 'Data Science',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120,000 - $180,000',
      description: 'Lead data science initiatives and develop machine learning models to solve complex business problems.',
      requirements: ['PhD/MS in Data Science or related field', '5+ years of experience', 'Python, R, SQL proficiency', 'Machine learning expertise'],
      posted: '2 days ago'
    },
    {
      title: 'AI Engineer',
      department: 'Engineering',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$100,000 - $150,000',
      description: 'Design and implement AI solutions, focusing on deep learning and neural network architectures.',
      requirements: ['BS/MS in Computer Science or AI', '3+ years of experience', 'TensorFlow, PyTorch knowledge', 'MLOps experience'],
      posted: '1 week ago'
    },
    {
      title: 'Product Manager - AI',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      salary: '$130,000 - $170,000',
      description: 'Drive product strategy for AI solutions and collaborate with cross-functional teams.',
      requirements: ['MBA or equivalent experience', '5+ years in product management', 'AI/ML product experience', 'Strong analytical skills'],
      posted: '3 days ago'
    },
    {
      title: 'Data Analytics Intern',
      department: 'Analytics',
      location: 'San Francisco, CA',
      type: 'Internship',
      salary: '$25 - $35/hour',
      description: 'Support data analysis projects and gain hands-on experience with real-world datasets.',
      requirements: ['Currently pursuing BS/MS in related field', 'Python or R knowledge', 'Statistical analysis skills', 'Strong communication'],
      posted: '5 days ago'
    },
    {
      title: 'Machine Learning Researcher',
      department: 'Research',
      location: 'London, UK',
      type: 'Full-time',
      salary: '£80,000 - £120,000',
      description: 'Conduct cutting-edge research in machine learning and publish findings in top-tier conferences.',
      requirements: ['PhD in Machine Learning or related field', 'Publication record', 'Research experience', 'Strong mathematical background'],
      posted: '1 week ago'
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '$90,000 - $130,000',
      description: 'Build and maintain infrastructure for AI/ML model deployment and scaling.',
      requirements: ['BS in Computer Science or related field', '3+ years DevOps experience', 'Kubernetes, Docker expertise', 'Cloud platforms knowledge'],
      posted: '4 days ago'
    }
  ];

  const benefits = [
    {
      icon: FiDollarSign,
      title: 'Competitive Salary',
      description: 'Industry-leading compensation packages with equity options'
    },
    {
      icon: FiHeart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs'
    },
    {
      icon: FiCoffee,
      title: 'Work-Life Balance',
      description: 'Flexible hours, remote work options, and unlimited PTO'
    },
    {
      icon: FiTrendingUp,
      title: 'Professional Growth',
      description: 'Learning budget, conference attendance, and career development'
    },
    {
      icon: FiUsers,
      title: 'Team Culture',
      description: 'Collaborative environment with brilliant minds and team events'
    },
    {
      icon: FiAward,
      title: 'Recognition',
      description: 'Performance bonuses and employee recognition programs'
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with data and AI',
      icon: '🚀'
    },
    {
      title: 'Continuous Learning',
      description: 'We invest in our team\'s growth and encourage experimentation',
      icon: '📚'
    },
    {
      title: 'Diversity & Inclusion',
      description: 'We believe diverse perspectives drive better solutions',
      icon: '🌍'
    },
    {
      title: 'Impact Driven',
      description: 'We work on projects that make a real difference in the world',
      icon: '💡'
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
            Join Our <span className="text-red-500">Team</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Be part of a revolutionary team that's shaping the future of data science and AI. 
            Work with cutting-edge technology and brilliant minds to solve complex challenges.
          </p>
        </motion.div>
      </section>

      {/* Company Values */}
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
              The principles that guide our work and define our culture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900 p-6 rounded-xl border border-gray-700 text-center hover:border-red-500 transition-colors"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Work With <span className="text-red-500">Us</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We offer competitive benefits and a supportive environment for your career growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-red-500 transition-colors"
              >
                <div className="text-red-500 mb-4">
                  <SafeIcon icon={benefit.icon} className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-400">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Open <span className="text-red-500">Positions</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Find your next career opportunity and join our growing team
            </p>
          </motion.div>

          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-red-500 transition-colors"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-3">
                      <h3 className="text-xl font-semibold text-white">
                        {job.title}
                      </h3>
                      <span className="px-3 py-1 bg-red-600 text-white rounded-full text-sm font-medium">
                        {job.department}
                      </span>
                    </div>
                    <p className="text-gray-400 mb-4">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-4">
                      <div className="flex items-center space-x-2">
                        <SafeIcon icon={FiMapPin} className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <SafeIcon icon={FiClock} className="h-4 w-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <SafeIcon icon={FiDollarSign} className="h-4 w-4" />
                        <span>{job.salary}</span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-300 mb-2">Key Requirements:</h4>
                      <ul className="text-sm text-gray-400 space-y-1">
                        {job.requirements.slice(0, 2).map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-3">
                    <span className="text-sm text-gray-400">Posted {job.posted}</span>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Application <span className="text-red-500">Process</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our streamlined process ensures a smooth experience for all candidates
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Apply Online',
                description: 'Submit your application through our careers page with your resume and cover letter.'
              },
              {
                step: '02',
                title: 'Initial Review',
                description: 'Our team reviews your application and reaches out within 1-2 weeks if there\'s a match.'
              },
              {
                step: '03',
                title: 'Interview Process',
                description: 'Participate in 2-3 rounds of interviews including technical and cultural fit assessments.'
              },
              {
                step: '04',
                title: 'Welcome Aboard',
                description: 'Receive an offer and join our team with a comprehensive onboarding program.'
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-400">
                  {process.description}
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
              Don't See the Perfect Role?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team. 
              Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Send Your Resume
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-red-600 transition-colors">
                Join Our Talent Pool
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;