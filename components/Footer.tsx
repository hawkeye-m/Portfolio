import { Github, Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      className="bg-white dark:bg-gray-900"
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/yourusername" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
            <span className="sr-only">GitHub</span>
            <Github className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com/in/yourusername" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
            <span className="sr-only">Email</span>
            <Mail className="h-6 w-6" />
          </a>
        </div>
        <div className="mt-8 text-center text-base text-gray-400 dark:text-gray-500">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </div>
    </motion.footer>
  )
}

