import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiTrophy, FiUsers, FiCalendar, FiGlobe, FiAward, FiTarget, FiClock, FiMapPin } = FiIcons;

const CommunityPage = () => {
  const competitions = [
    {
      title: 'AI Innovation Challenge 2024',
      description: 'Develop innovative AI solutions for real-world problems across various industries.',
      prize: '$50,000',
      deadline: 'March 15, 2024',
      participants: '500+',
      status: 'Active',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=300&fit=crop'
    },
    {
      title: 'Data Science Hackathon',
      description: 'Build predictive models using our curated datasets to solve business challenges.',
      prize: '$25,000',
      deadline: 'February 28, 2024',
      participants: '300+',
      status: 'Registration Open',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=300&fit=crop'
    },
    {
      title: 'Student Innovation Contest',
      description: 'Exclusively for students to showcase their data science and AI projects.',
      prize: '$10,000',
      deadline: 'April 30, 2024',
      participants: '200+',
      status: 'Coming Soon',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=300&fit=crop'
    }
  ];

  const events = [
    {
      title: 'Monthly AI Meetup',
      date: 'Every 2nd Thursday',
      time: '7:00 PM - 9:00 PM',
      location: 'Virtual & In-Person',
      description: 'Network with AI professionals and learn about the latest trends in artificial intelligence.',
      type: 'Recurring'
    },
    {
      title: 'Data Science Workshop Series',
      date: 'March 10, 2024',
      time: '2:00 PM - 5:00 PM',
      location: 'Online',
      description: 'Hands-on workshops covering machine learning, data visualization, and analytics.',
      type: 'Workshop'
    },
    {
      title: 'Industry Panel: Future of AI',
      date: 'March 25, 2024',
      time: '6:00 PM - 8:00 PM',
      location: 'New York, NY',
      description: 'Leading experts discuss the future of AI and its impact on various industries.',
      type: 'Panel'
    },
    {
      title: 'Datatheon Annual Conference',
      date: 'June 15-17, 2024',
      time: 'Full Day',
      location: 'San Francisco, CA',
      description: 'Our flagship event featuring keynotes, workshops, and networking opportunities.',
      type: 'Conference'
    }
  ];

  const partnerships = [
    {
      name: 'Tech Universities Alliance',
      description: 'Collaborating with leading universities to advance AI education and research.',
      logo: '🎓',
      impact: '50+ Universities'
    },
    {
      name: 'Startup Accelerator Program',
      description: 'Supporting AI startups with mentorship, resources, and funding opportunities.',
      logo: '🚀',
      impact: '100+ Startups'
    },
    {
      name: 'Industry Coalition',
      description: 'Working with Fortune 500 companies to develop AI standards and best practices.',
      logo: '🏢',
      impact: '25+ Companies'
    },
    {
      name: 'Open Source Initiative',
      description: 'Contributing to and maintaining open-source AI and data science tools.',
      logo: '💻',
      impact: '1M+ Downloads'
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
            Join Our <span className="text-red-500">Community</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Connect with data scientists, AI researchers, and innovation leaders from around the world. 
            Participate in challenges, attend events, and shape the future of data and AI.
          </p>
        </motion.div>
      </section>

      {/* Active Competitions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Active <span className="text-red-500">Competitions</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Showcase your skills and compete for prizes in our data science and AI challenges
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {competitions.map((competition, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-red-500 transition-colors"
            >
              <img
                src={competition.image}
                alt={competition.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    competition.status === 'Active' 
                      ? 'bg-green-600 text-white' 
                      : competition.status === 'Registration Open'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-600 text-white'
                  }`}>
                    {competition.status}
                  </span>
                  <div className="text-red-500 font-bold text-lg">
                    {competition.prize}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {competition.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {competition.description}
                </p>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <SafeIcon icon={FiClock} className="h-4 w-4" />
                    <span>Deadline: {competition.deadline}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <SafeIcon icon={FiUsers} className="h-4 w-4" />
                    <span>{competition.participants} participants</span>
                  </div>
                </div>
                <button className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium transition-colors">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Upcoming <span className="text-red-500">Events</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Join our community events to learn, network, and collaborate with fellow data enthusiasts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-red-500 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-red-600 text-white rounded-full text-sm font-medium">
                    {event.type}
                  </span>
                  <SafeIcon icon={FiCalendar} className="h-5 w-5 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {event.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {event.description}
                </p>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <SafeIcon icon={FiCalendar} className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <SafeIcon icon={FiClock} className="h-4 w-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <SafeIcon icon={FiMapPin} className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <button className="w-full mt-6 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white py-2 rounded-lg font-medium transition-colors">
                  Register Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Partnerships */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Community <span className="text-red-500">Partnerships</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Building strong partnerships to advance the data science and AI ecosystem
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerships.map((partnership, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 text-center hover:border-red-500 transition-colors"
              >
                <div className="text-4xl mb-4">{partnership.logo}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {partnership.name}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  {partnership.description}
                </p>
                <div className="text-red-500 font-bold">
                  {partnership.impact}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Growing <span className="text-red-500">Community</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Join thousands of data professionals and AI enthusiasts worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">
                10K+
              </div>
              <div className="text-gray-400 font-medium">
                Community Members
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">
                50+
              </div>
              <div className="text-gray-400 font-medium">
                Countries
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">
                100+
              </div>
              <div className="text-gray-400 font-medium">
                Events Hosted
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">
                $500K+
              </div>
              <div className="text-gray-400 font-medium">
                Prize Money Awarded
              </div>
            </motion.div>
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
              Ready to Join the Community?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Connect with like-minded professionals, participate in challenges, and advance your career in data and AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Join Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-red-600 transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;