import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiGithub, FiInstagram } = FiIcons;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
      { name: 'News & Press', href: '#' }
    ],
    Solutions: [
      { name: 'Data Analytics', href: '/solutions' },
      { name: 'AI Innovation', href: '/solutions' },
      { name: 'Consulting', href: '/solutions' },
      { name: 'Training', href: '/solutions' }
    ],
    Community: [
      { name: 'Events', href: '/community' },
      { name: 'Competitions', href: '/community' },
      { name: 'Partnerships', href: '/community' },
      { name: 'Open Source', href: '#' }
    ],
    Resources: [
      { name: 'Blog', href: '/resources' },
      { name: 'Documentation', href: '/resources' },
      { name: 'Tutorials', href: '/resources' },
      { name: 'Case Studies', href: '/resources' }
    ]
  };

  const socialLinks = [
    { icon: FiLinkedin, href: '#', name: 'LinkedIn' },
    { icon: FiTwitter, href: '#', name: 'Twitter' },
    { icon: FiGithub, href: '#', name: 'GitHub' },
    { icon: FiInstagram, href: '#', name: 'Instagram' }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img 
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1752185850475-blob" 
                alt="Datatheon Logo" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-white">Datatheon</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering Data | AI | Innovation. Transform your business with cutting-edge 
              data analytics and artificial intelligence solutions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-gray-400">
                <SafeIcon icon={FiMail} className="h-4 w-4" />
                <span>hello@datatheon.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <SafeIcon icon={FiPhone} className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <SafeIcon icon={FiMapPin} className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Datatheon. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6">
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <SafeIcon icon={social.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>
            
            {/* Legal Links */}
            <div className="flex space-x-4 text-sm">
              <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;