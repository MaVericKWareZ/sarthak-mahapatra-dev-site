"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Database, Code, Cloud, BarChart, Info, X } from "lucide-react"
import { FaJava, FaPython, FaNodeJs, FaDocker, FaAws, FaGithub } from "react-icons/fa"
import {
  SiMongodb,
  SiRedis,
  SiPostgresql,
  SiPrometheus,
  SiGrafana,
  SiDatadog,
  SiRabbitmq,
} from "react-icons/si"

// Skill data with proficiency levels and project examples
const skillCategories = [
  {
    title: "Languages",
    icon: <Code className="h-6 w-6" />,
    skills: [
      {
        name: "Java (Spring Boot)",
        icon: <FaJava className="h-6 w-6" />,
        proficiency: 90,
        color: "text-orange-500",
        bgColor: "bg-orange-500",
        project: "Led development of Business Integration Layer at Dell, managing lifecycle of 1B+ assets",
      },
      {
        name: "Python (Flask, Django)",
        icon: <FaPython className="h-6 w-6" />,
        proficiency: 85,
        color: "text-blue-500",
        bgColor: "bg-blue-500",
        project: "Built image-based disease recognition system at Bayer using Django",
      },
      {
        name: "NodeJS (Express.JS)",
        icon: <FaNodeJs className="h-6 w-6" />,
        proficiency: 80,
        color: "text-green-500",
        bgColor: "bg-green-500",
        project: "Developed StaplMoney personal finance tracking application",
      },
      {
        name: "GoLang (Gin)",
        icon: <FaNodeJs className="h-6 w-6" />,
        proficiency: 75,
        color: "text-cyan-500",
        bgColor: "bg-cyan-500",
        project: "Created high-performance microservices for vendor integration platform at Lowe's",
      },
    ],
  },
  {
    title: "Databases/Queues",
    icon: <Database className="h-6 w-6" />,
    skills: [
      {
        name: "PostgreSQL, Oracle",
        icon: <SiPostgresql className="h-6 w-6" />,
        proficiency: 90,
        color: "text-blue-400",
        bgColor: "bg-blue-400",
        project: "Designed database schema for Dell-EMC product catalog with 14M+ products",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="h-6 w-6" />,
        proficiency: 85,
        color: "text-green-600",
        bgColor: "bg-green-600",
        project: "Implemented geospatial queries for location-based features in Farmrise app",
      },
      {
        name: "Redis",
        icon: <SiRedis className="h-6 w-6" />,
        proficiency: 80,
        color: "text-red-500",
        bgColor: "bg-red-500",
        project: "Built caching layer for high-traffic API endpoints at Dell",
      },
      {
        name: "RabbitMQ",
        icon: <SiRabbitmq className="h-6 w-6" />,
        proficiency: 85,
        color: "text-orange-400",
        bgColor: "bg-orange-400",
        project: "Designed event-driven data ingestion pipeline at Bayer",
      },
    ],
  },
  {
    title: "Observability",
    icon: <BarChart className="h-6 w-6" />,
    skills: [
      {
        name: "Prometheus",
        icon: <SiPrometheus className="h-6 w-6" />,
        proficiency: 85,
        color: "text-orange-600",
        bgColor: "bg-orange-600",
        project: "Set up monitoring for microservices architecture at Lowe's",
      },
      {
        name: "Grafana",
        icon: <SiGrafana className="h-6 w-6" />,
        proficiency: 80,
        color: "text-orange-400",
        bgColor: "bg-orange-400",
        project: "Created dashboards for real-time system performance monitoring",
      },
      {
        name: "Datadog",
        icon: <SiDatadog className="h-6 w-6" />,
        proficiency: 75,
        color: "text-purple-500",
        bgColor: "bg-purple-500",
        project: "Implemented APM for critical services at Bayer",
      },
      {
        name: "Cloudwatch",
        icon: <FaAws className="h-6 w-6" />,
        proficiency: 85,
        color: "text-yellow-500",
        bgColor: "bg-yellow-500",
        project: "Set up alerts and monitoring for AWS-based infrastructure",
      },
    ],
  },
  {
    title: "Deployment",
    icon: <Cloud className="h-6 w-6" />,
    skills: [
      {
        name: "Docker",
        icon: <FaDocker className="h-6 w-6" />,
        proficiency: 90,
        color: "text-blue-500",
        bgColor: "bg-blue-500",
        project: "Containerized legacy applications during Dell-EMC merger",
      },
      {
        name: "Docker-Compose",
        icon: <FaDocker className="h-6 w-6" />,
        proficiency: 85,
        color: "text-blue-400",
        bgColor: "bg-blue-400",
        project: "Created development environments for cross-team collaboration",
      },
      {
        name: "ECS",
        icon: <FaAws className="h-6 w-6" />,
        proficiency: 80,
        color: "text-yellow-500",
        bgColor: "bg-yellow-500",
        project: "Deployed microservices for Farmrise app on AWS ECS",
      },
      {
        name: "Github Actions",
        icon: <FaGithub className="h-6 w-6" />,
        proficiency: 85,
        color: "text-gray-400",
        bgColor: "bg-gray-400",
        project: "Automated CI/CD pipelines for vendor integration platform",
      },
    ],
  },
]

// Component for the radial progress bar
const RadialProgress = ({ percentage, color }) => {
  const circumference = 2 * Math.PI * 40
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className="relative w-20 h-20 flex items-center justify-center">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {/* Background circle */}
        <circle
          className="text-gray-700"
          strokeWidth="8"
          stroke="currentColor"
          fill="transparent"
          r="40"
          cx="50"
          cy="50"
        />
        {/* Progress circle */}
        <motion.circle
          className={color}
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="40"
          cx="50"
          cy="50"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white font-bold text-lg">{percentage}%</span>
      </div>
    </div>
  )
}

// Tooltip component for project information
const ProjectTooltip = ({ project, isVisible, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 10,
        scale: isVisible ? 1 : 0.95,
      }}
      transition={{ duration: 0.2 }}
      className={`absolute z-50 bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 p-3 rounded-xl bg-gray-800 border border-gray-700 shadow-xl ${
        isVisible ? "block" : "hidden"
      }`}
    >
      <div className="flex justify-between items-start mb-1">
        <div className="flex items-center text-blue-400">
          <Info className="h-4 w-4 mr-1" />
          <span className="text-sm font-medium">Project Example</span>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          <X className="h-4 w-4" />
        </button>
      </div>
      <p className="text-sm text-gray-300">{project}</p>
      <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-gray-800 border-r border-b border-gray-700"></div>
    </motion.div>
  )
}

// Skill card component
const SkillCard = ({ skill }) => {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <motion.div
      className="relative rounded-2xl bg-gray-800 p-5 hover:bg-gray-750 transition-all duration-300"
      whileHover={{
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      layout
    >
      {skill.project && (
        <ProjectTooltip project={skill.project} isVisible={showTooltip} onClose={() => setShowTooltip(false)} />
      )}

      <div className="flex flex-col items-center">
        <div className={`p-3 rounded-xl ${skill.color} bg-opacity-20 mb-4`}>{skill.icon}</div>

        <h3 className="text-lg font-medium text-white mb-4 text-center">{skill.name}</h3>

        <RadialProgress percentage={skill.proficiency} color={skill.color} />

        {skill.project && (
          <button
            onClick={() => setShowTooltip(!showTooltip)}
            className="mt-4 text-sm text-blue-400 hover:text-blue-300 flex items-center"
            aria-label={`Show project example for ${skill.name}`}
          >
            <Info className="h-4 w-4 mr-1" /> Project Example
          </button>
        )}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section id="skills" className="bg-gray-900 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Specialized expertise in backend development, cloud infrastructure, and system architecture with hands-on
            experience across multiple industries.
          </p>
        </motion.div>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <motion.div
                className="flex items-center mb-8"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.2 * categoryIndex, duration: 0.5 }}
              >
                <div className="p-2 rounded-lg bg-indigo-900/30 text-indigo-400 mr-3">{category.icon}</div>
                <h3 className="text-2xl font-semibold text-white">{category.title}</h3>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard key={skillIndex} skill={skill} />
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
