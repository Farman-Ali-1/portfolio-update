import React from 'react';
import { motion } from 'framer-motion';
import { FolderOpen, PenTool, TrendingUp, Users } from 'lucide-react';
import { useFirestore } from '../../hooks/useFirestore';
import { Project, BlogPost } from '../../types';

const Dashboard: React.FC = () => {
  const { data: projects } = useFirestore<Project>('projects');
  const { data: blogs } = useFirestore<BlogPost>('blogs');

  const stats = [
    {
      name: 'Total Projects',
      value: projects.length,
      icon: FolderOpen,
      color: 'text-blue-600',
      bg: 'bg-blue-100 dark:bg-blue-900'
    },
    {
      name: 'Blog Posts',
      value: blogs.length,
      icon: PenTool,
      color: 'text-purple-600',
      bg: 'bg-purple-100 dark:bg-purple-900'
    },
    {
      name: 'Views',
      value: '2.4K',
      icon: TrendingUp,
      color: 'text-green-600',
      bg: 'bg-green-100 dark:bg-green-900'
    },
    {
      name: 'Visitors',
      value: '1.2K',
      icon: Users,
      color: 'text-orange-600',
      bg: 'bg-orange-100 dark:bg-orange-900'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <div>
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Welcome back! Here's an overview of your portfolio.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.name}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <div className="flex items-center">
                <div className={`p-3 rounded-lg ${stat.bg}`}>
                  <Icon className={stat.color} size={24} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {stat.name}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Recent Projects */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Recent Projects
          </h3>
          <div className="space-y-3">
            {projects.slice(0, 5).map((project) => (
              <div key={project.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-12 h-12 object-cover rounded-lg"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                    {project.title}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {project.technologies.slice(0, 2).join(', ')}
                  </p>
                </div>
              </div>
            ))}
            {projects.length === 0 && (
              <p className="text-gray-500 dark:text-gray-400 text-center py-4">
                No projects yet. Create your first project!
              </p>
            )}
          </div>
        </motion.div>

        {/* Recent Blog Posts */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Recent Blog Posts
          </h3>
          <div className="space-y-3">
            {blogs.slice(0, 5).map((post) => (
              <div key={post.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-12 h-12 object-cover rounded-lg"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                    {post.title}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {post.excerpt.slice(0, 50)}...
                  </p>
                </div>
              </div>
            ))}
            {blogs.length === 0 && (
              <p className="text-gray-500 dark:text-gray-400 text-center py-4">
                No blog posts yet. Write your first post!
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;