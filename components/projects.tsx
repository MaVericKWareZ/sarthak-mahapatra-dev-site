"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "StaplMoney",
    description:
      "Co-founded StaplMoney, a cross-platform application which allows users to track and manage their personal finances.",
    technologies: ["React Native", "Node.js", "MongoDB", "AWS"],
    link: "#",
    github: "https://github.com/MaVericKWareZ/stapl-money",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Anti-Counterfeiting Solution",
    description:
      "Led the technical design and implementation of an anti-counterfeiting solution with QR scanning functionality for product verification.",
    technologies: ["Spring Boot", "React", "MongoDB", "AWS S3"],
    link: "#",
    github: "#",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Disease Recognition System",
    description:
      "Orchestrated the system design and development of an end-to-end flow for image-based disease recognition, enabling farmers to submit images for crop issue detection.",
    technologies: ["Django", "Python", "AWS", "Computer Vision"],
    link: "#",
    github: "#",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Data Ingestion Pipeline",
    description:
      "Engineered a data ingestion pipeline using event-driven design principles, integrating with various cross-product teams to ingest their data.",
    technologies: ["Java", "RabbitMQ", "S3", "Spring Boot"],
    link: "#",
    github: "#",
    image: "/placeholder.svg?height=300&width=500",
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="projects" className="bg-gray-900 py-20">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Projects</h2>

          <motion.div
            className="grid md:grid-cols-2 gap-8 mt-10"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {projects.map((project, index) => (
              <motion.div key={index} className="card overflow-hidden group" variants={itemVariants}>
                <div className="relative h-48 mb-4 overflow-hidden rounded-md">
                  <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/10 transition-all duration-300 z-10"></div>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-2 text-blue-400">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 text-xs rounded-full bg-gray-700 text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.link && (
                    <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                      <Link href={project.link} className="flex items-center" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1 h-4 w-4" /> Demo
                      </Link>
                    </Button>
                  )}

                  {project.github && (
                    <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                      <Link
                        href={project.github}
                        className="flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-1 h-4 w-4" /> Code
                      </Link>
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
