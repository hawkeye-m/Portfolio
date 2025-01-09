import { ExternalLink, Github } from 'lucide-react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Project 1',
    description: 'A brief description of Project 1',
    image: '/placeholder.svg?height=300&width=400',
    github: 'https://github.com/yourusername/project1',
    live: 'https://project1.com',
  },
  {
    title: 'Project 2',
    description: 'A brief description of Project 2',
    image: '/placeholder.svg?height=300&width=400',
    github: 'https://github.com/yourusername/project2',
    live: 'https://project2.com',
  },
  // Add more projects as needed
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg perspective-1000"
      variants={itemVariants}
      whileHover={{
        rotateY: 15,
        rotateX: -15,
        scale: 1.05,
        transition: { duration: 0.5 }
      }}
    >
      <div className="p-5">
        <div className="flex-shrink-0">
          <img className="h-48 w-full object-cover" src={project.image} alt={project.title} />
        </div>
        <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">{project.title}</h3>
        <p className="mt-2 text-base text-gray-500 dark:text-gray-300">{project.description}</p>
        <div className="mt-4 flex space-x-3">
          <motion.a
            href={project.github}
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="h-4 w-4 mr-2" />
            GitHub
          </motion.a>
          <motion.a
            href={project.live}
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-indigo-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Live Demo
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <motion.div
      className="bg-gray-100 dark:bg-gray-800 relative overflow-hidden"
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">Projects</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            My Recent Work
          </p>
        </div>
        <motion.div className="mt-20" variants={containerVariants}>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

