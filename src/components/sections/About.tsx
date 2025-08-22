import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Award, Users, Coffee, Zap } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { 
      name: 'Frontend Development', 
      icon: Globe, 
      description: 'React, Next.js, TypeScript, Tailwind CSS',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    { 
      name: 'Backend Development', 
      icon: Database, 
      description: 'Node.js, Express, MongoDB, PostgreSQL',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    { 
      name: 'Mobile Development', 
      icon: Smartphone, 
      description: 'React Native, Flutter',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    { 
      name: 'Full Stack Development', 
      icon: Code, 
      description: 'MERN, MEAN, JAMstack',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20'
    }
  ];

  const achievements = [
    { icon: Award, label: 'Projects Completed', value: '50+', color: 'text-blue-600' },
    { icon: Users, label: 'Happy Clients', value: '30+', color: 'text-green-600' },
    { icon: Coffee, label: 'Cups of Coffee', value: '1000+', color: 'text-orange-600' },
    { icon: Zap, label: 'Years Experience', value: '3+', color: 'text-purple-600' }
  ];

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
    <section id="about" className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
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
            className="inline-flex items-center space-x-2 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
            <span className="text-blue-600 dark:text-blue-400 font-semibold">About Me</span>
            <div className="w-12 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full" />
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Passionate developer with expertise in modern web technologies, creating digital experiences that matter
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <motion.h3 
                className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white"
                whileHover={{ scale: 1.02 }}
              >
                MERN Stack Developer & Digital Solutions Expert
              </motion.h3>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                With over 3 years of experience in web development, I specialize in creating 
                high-performance, scalable applications using the MERN stack. I'm passionate 
                about clean code, user experience, and bringing innovative ideas to life.
              </p>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                I enjoy working on challenging projects that push the boundaries of what's 
                possible on the web. From concept to deployment, I ensure every project 
                meets the highest standards of quality and performance.
              </p>
            </div>

            {/* Achievement Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={achievement.label}
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
                    whileHover={{ scale: 1.05, y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className={achievement.color} size={24} />
                      <div>
                        <div className={`text-2xl font-bold ${achievement.color}`}>
                          {achievement.value}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {achievement.label}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  className={`relative ${skill.bgColor} p-6 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 group overflow-hidden`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="flex items-start space-x-4">
                    <motion.div 
                      className={`bg-gradient-to-r ${skill.color} p-3 rounded-xl shadow-lg`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <Icon className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">
                        {skill.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        
        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-1 rounded-3xl inline-block">
            <div className="bg-white dark:bg-gray-900 px-8 py-6 rounded-3xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to work together?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Let's create something amazing that will make a difference
              </p>
              <motion.button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Talk
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;