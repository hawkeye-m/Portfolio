import { motion } from 'framer-motion'
import DreamBackground from './DreamBackground'

const floatingAnimation = {
  y: [0, -20, 0],
  rotate: [0, 5, -5, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut"
  }
}

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden" id="home">
      <DreamBackground />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center relative z-10">
        <motion.h1
          className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.span
            className="block"
            animate={floatingAnimation}
          >
            Hi, I&apos;m Your Name
          </motion.span>
          <motion.span
            className="block text-indigo-200"
            animate={floatingAnimation}
          >
            I&apos;m a Web Developer
          </motion.span>
        </motion.h1>
        <motion.p
          className="mt-3 max-w-md mx-auto text-base text-indigo-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          I create beautiful, responsive websites using modern web technologies.
        </motion.p>
        <motion.div
          className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="rounded-md shadow">
            <motion.a
              href="#projects"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 md:py-4 md:text-lg md:px-10"
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(255,255,255)" }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </div>
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <motion.a
              href="#contact"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(79,70,229)" }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

