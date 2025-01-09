import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const foldVariants = {
  hidden: { rotateX: 90, opacity: 0 },
  visible: { 
    rotateX: 0, 
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut"
    }
  }
}

export default function About() {
  return (
    <motion.div
      className="bg-white dark:bg-gray-900 relative overflow-hidden"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div className="text-center" variants={itemVariants}>
          <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">About Me</h2>
          <motion.p 
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
            variants={foldVariants}
          >
            Let me introduce myself
          </motion.p>
        </motion.div>
        <motion.div className="mt-20" variants={containerVariants}>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div variants={foldVariants}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">My Background</h3>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
                I&apos;m a passionate web developer with X years of experience. I specialize in creating
                responsive, user-friendly websites and web applications using modern technologies
                like React, Next.js, and Tailwind CSS.
              </p>
            </motion.div>
            <motion.div variants={foldVariants}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">My Skills</h3>
              <ul className="mt-4 text-lg text-gray-500 dark:text-gray-300 list-disc list-inside">
                <li>React and Next.js</li>
                <li>JavaScript and TypeScript</li>
                <li>HTML5 and CSS3</li>
                <li>Tailwind CSS</li>
                <li>Node.js and Express</li>
                <li>Git and GitHub</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

