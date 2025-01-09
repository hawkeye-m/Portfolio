'use client'

import {useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const DreamBackground = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45])

  return (
    <div ref={ref} className="fixed inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-indigo-900 to-purple-700"
        style={{ y: y1, rotate }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-transparent to-pink-500 opacity-30"
        style={{ y: y2, rotate }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-bl from-transparent to-blue-500 opacity-30"
        style={{ y: y3, rotate }}
      />
    </div>
  )
}

export default DreamBackground

