'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import { ThemeProvider } from '../components/ThemeContext'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <ThemeProvider>
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 bg-indigo-900 flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="w-32 h-32"
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1
              }}
            />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Header />
            <main className="flex-grow">
              <Hero />
              <About />
              <Projects />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  )
}

