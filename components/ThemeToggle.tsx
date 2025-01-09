'use client'

import { useTheme } from '../components/ThemeContext'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 180 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'light' ? (
          <Sun className="w-6 h-6 text-yellow-500" />
        ) : (
          <Moon className="w-6 h-6 text-blue-300" />
        )}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle

