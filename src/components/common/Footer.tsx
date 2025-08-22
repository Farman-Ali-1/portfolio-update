import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'Email',
      href: 'mailto:engrfarmanali44@gmail.com',
      icon: Mail,
      color: 'text-red-600 hover:text-red-700'
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/923084401935',
      icon: Phone,
      color: 'text-green-600 hover:text-green-700'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/farman-khan-dev/',
      icon: Linkedin,
      color: 'text-blue-600 hover:text-blue-700'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/Farman-Ali-1',
      icon: Github,
      color: 'text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100'
    }
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-200 ${link.color}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <motion.p
              className="text-gray-600 dark:text-gray-400 flex items-center justify-center space-x-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <span>&copy; 2025 Farman Ali. Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                <Heart className="text-red-500 fill-current" size={16} />
              </motion.span>
              <span>in Pakistan</span>
            </motion.p>
            <motion.p
              className="text-sm text-gray-500 dark:text-gray-500 mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              MERN Stack Developer | Building Digital Solutions
            </motion.p>
          </div>

          {/* Quick Links */}
          <div className="flex items-center space-x-6 text-sm">
            <motion.a
              href="#home"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
            >
              Home
            </motion.a>
            <motion.a
              href="#about"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
            >
              About
            </motion.a>
            <motion.a
              href="#projects"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
            >
              Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
            >
              Contact
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;