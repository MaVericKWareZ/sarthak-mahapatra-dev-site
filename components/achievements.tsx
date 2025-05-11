"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Star } from "lucide-react"

const achievements = [
  {
    title: "Excellence Award @ Lowe's",
    description:
      "Recognized as the key contributor across the Enterprise Platform Architechture team at Lowe's (FY24-25).",
  },
  {
    title: "TPA @ Bayer",
    description: "Recognized as the top contributor across the Products and Platform team at Bayer (FY23-24).",
  },
  {
    title: "Inspire Recognition Program @ Dell",
    description: "3x Bravo, 3x Applause, 4x ShoutOut awards in 2 years as part of a company wide recognition program.",
  },
  {
    title: "Hackathon Winner @ Dell",
    description:
      "Patented a framework enabling developers to capture errors and view solutions to these issues on Stack Overflow. (USPTO Patent No: 10649836).",
  },
]

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="achievements" className="bg-gray-900 py-20">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Achievements</h2>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {achievements.map((achievement, index) => (
              <motion.div key={index} className="card relative overflow-hidden" variants={itemVariants}>
                <div className="absolute top-0 right-0 p-2">
                  <Star className="h-5 w-5 text-yellow-500" fill="currentColor" />
                </div>

                <div className="flex items-start mb-4">
                  <div className="p-2 rounded-md bg-blue-900/30 text-blue-400 mr-3">
                    <Award className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{achievement.title}</h3>
                </div>

                <p className="text-gray-300">{achievement.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
