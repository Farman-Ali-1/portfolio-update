import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github, MessageCircle, Clock, CheckCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactForm>();

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'engrfarmanali44@gmail.com',
      href: 'mailto:engrfarmanali44@gmail.com',
      color: 'text-red-600 hover:text-red-700',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      description: 'Send me an email anytime'
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '+92 308 4401935',
      href: 'https://wa.me/923084401935',
      color: 'text-green-600 hover:text-green-700',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      description: 'Quick chat on WhatsApp'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pakistan',
      href: null,
      color: 'text-blue-600 hover:text-blue-700',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      description: 'Based in Pakistan'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/farman-khan-dev/',
      label: 'LinkedIn',
      color: 'text-blue-600 hover:text-blue-700'
    },
    {
      icon: Github,
      href: 'https://github.com/Farman-Ali-1',
      label: 'GitHub',
      color: 'text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100'
    }
  ];

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    
    try {
      // Simulate email sending (replace with actual email service)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('Message sent successfully! I\'ll get back to you soon.');
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-10 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-pink-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <MessageCircle className="text-blue-600 dark:text-blue-400" size={24} />
            <span className="text-blue-600 dark:text-blue-400 font-semibold">Let's Connect</span>
            <MessageCircle className="text-blue-600 dark:text-blue-400" size={24} />
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? Let's discuss how we can bring your ideas to life and create something amazing together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  const content = (
                    <div className={`flex items-center space-x-6 p-6 rounded-2xl ${info.bgColor} hover:shadow-lg transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50`}>
                      <motion.div 
                        className={`p-4 rounded-2xl bg-white dark:bg-gray-800 shadow-lg ${info.color}`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Icon size={28} />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white text-lg">
                          {info.label}
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">
                          {info.value}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  );

                  return info.href ? (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03, y: -2 }}
                      className="block"
                    >
                      {content}
                    </motion.a>
                  ) : (
                    <motion.div key={info.label} whileHover={{ scale: 1.03, y: -2 }}>
                      {content}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Connect on Social Media
              </h4>
              <div className="flex space-x-6">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 rounded-2xl bg-white dark:bg-gray-800 ${social.color} hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50`}
                      whileHover={{ scale: 1.15, y: -4, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon size={28} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg"
            >
              <div className="flex items-center space-x-3 mb-4">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <CheckCircle className="text-green-500" size={24} />
                </motion.div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                  Available for New Projects
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                I'm currently available for new projects and collaborations. 
                Let's create something amazing together that makes a real impact!
              </p>
              <div className="flex items-center space-x-2 mt-4 text-sm text-gray-500 dark:text-gray-400">
                <Clock size={16} />
                <span>Usually responds within 24 hours</span>
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Send me a message
              </h3>
              
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                    Name
                  </label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    type="text"
                    id="name"
                    className="w-full px-6 py-4 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-lg transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-500"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-600 font-medium">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                    Email
                  </label>
                  <input
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    type="email"
                    id="email"
                    className="w-full px-6 py-4 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-lg transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-500"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600 font-medium">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                  Subject
                </label>
                <input
                  {...register('subject', { required: 'Subject is required' })}
                  type="text"
                  id="subject"
                  className="w-full px-6 py-4 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-lg transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-500"
                  placeholder="What's this about?"
                />
                {errors.subject && (
                  <p className="mt-2 text-sm text-red-600 font-medium">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                  Message
                </label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  id="message"
                  rows={8}
                  className="w-full px-6 py-4 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none text-lg transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-500"
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-600 font-medium">{errors.message.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center px-8 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group text-lg"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="mr-3 group-hover:translate-x-2 transition-transform duration-300" size={24} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;