import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function FullScreenLoading() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer)
          return 100
        }
        return prevProgress + 1
      })
    }, 30)

    return () => clearInterval(timer)
  }, [])

  const circleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: "easeInOut",
        delay: 0.2
      }
    }
  }

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut",
        delay: 0.5
      }
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="text-center">
        <motion.div
          className="relative w-32 h-32 mb-8 mx-auto"
          initial="hidden"
          animate="visible"
          variants={circleVariants}
        >
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              className="text-blue-200 stroke-current"
              strokeWidth="10"
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
            />
            <motion.circle
              className="text-white stroke-current"
              strokeWidth="10"
              strokeLinecap="round"
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: progress / 100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-white">{`${Math.round(progress)}%`}</span>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Loading your experience</h2>
          <p className="text-blue-100">Please wait while we prepare something amazing for you.</p>
        </motion.div>
      </div>
    </div>
  )
}