"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Calendar, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const experiences = [
  {
    company: "Lowe's India",
    logo: "/placeholder.svg?height=80&width=80",
    position: "Senior Software Engineer",
    period: "Sept 2024 - Present",
    location: "Bengaluru, India",
    description:
      "Driving the development of a self-service vendor integration platform at Lowe's India, enabling seamless integration for vendors and marketplaces to expand access to Lowe's products and services.",
    achievements: [
      "Leading the technical architecture for a new vendor onboarding system",
      "Implementing cloud-native microservices using Go and AWS",
      "Collaborating with cross-functional teams to define integration standards",
    ],
    technologies: ["Go", "AWS", "Microservices", "Docker", "Kubernetes"],
    products: [
      {
        name: "Vendor Integration Platform",
        description: "A self-service platform that allows vendors to integrate their products with Lowe's marketplace",
        impact: "Reduced vendor onboarding time from weeks to days",
      },
    ],
  },
  {
    company: "Bayer",
    logo: "/placeholder.svg?height=80&width=80",
    position: "Software Engineer 2",
    period: "Oct 2021 - Aug 2024",
    location: "Bengaluru, India",
    description:
      "Spearheaded the development efforts of the Product Platforms Team, focusing on building digital farming solutions aimed towards small holder farmers in APAC region using Bayer's flagship farmer facing application 'Farmrise'.",
    achievements: [
      "Led end-to-end planning, technical design, and implementation for multiple features which contributed to increasing the daily active users (DAU) of the app to 60k+ users and reaching over 1M+ active devices",
      "Spearheaded the technical design and implementation of an anti-counterfeiting solution within the app, integrating QR scanning functionality",
      "Orchestrated the system design and development of an end-to-end flow for the image-based disease recognition feature",
    ],
    technologies: ["Java", "Spring Boot", "MongoDB", "AWS", "RabbitMQ", "Django"],
    products: [
      {
        name: "Farmrise",
        description: "Digital farming solution for small holder farmers in APAC region",
        impact: "Reached 1M+ active devices and 60k+ daily active users",
      },
      {
        name: "Anti-Counterfeiting Solution",
        description: "QR-based verification system for product authenticity",
        impact: "Helped farmers identify genuine Bayer products",
      },
    ],
  },
  {
    company: "Dell Technologies",
    logo: "/placeholder.svg?height=80&width=80",
    position: "Software Engineer",
    period: "Jul 2018 - Oct 2021",
    location: "Bengaluru, India",
    description:
      "Led the development efforts for Business Integration Layer (BIL) team, responsible for managing the end-to-end lifecycle of 1 billion assets and over 5 billion entitlements and provide services for multiple customer-facing applications such as 'dell.com'.",
    achievements: [
      "Spearheaded the redesign of legacy systems into a modern microservices architecture during the Dell-EMC merger, enabling the processing of 14 million Dell-EMC products weekly",
      "Drove technical implementation of business-critical programs by collaborating with product owners, business leads, architects and cross-product engineering teams",
      "Led redesign of code integration and deployment pipelines, reducing Go-Live downtime by 20%",
    ],
    technologies: ["Java", "Spring Boot", "Oracle", "AWS", "Microservices"],
    products: [
      {
        name: "Business Integration Layer",
        description: "Core system managing 1B+ assets and 5B+ entitlements",
        impact: "Supported dell.com and other customer-facing applications",
      },
      {
        name: "Dell-EMC Product Integration",
        description: "System for integrating Dell and EMC product catalogs",
        impact: "Processed 14M Dell-EMC products weekly",
      },
    ],
  },
]

// Product Card component for the popup
const ProductCard = ({ product }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
      <h4 className="text-lg font-semibold text-white mb-2">{product.name}</h4>
      <p className="text-gray-300 text-sm mb-3">{product.description}</p>
      <div className="flex items-center text-sm text-indigo-400">
        <ExternalLink className="h-4 w-4 mr-1" />
        <span>{product.impact}</span>
      </div>
    </div>
  )
}

// Company Logo component with popup
const CompanyLogo = ({ company, logo, products }) => {
  const [showProducts, setShowProducts] = useState(false)

  return (
    <div className="relative">
      <motion.div
        className="w-16 h-16 rounded-xl bg-gray-800 p-2 flex items-center justify-center cursor-pointer border-2 border-transparent hover:border-indigo-500 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        onClick={() => setShowProducts(!showProducts)}
      >
        <img src={logo || "/placeholder.svg"} alt={`${company} logo`} className="max-w-full max-h-full" />
      </motion.div>

      {/* Products popup */}
      {products && products.length > 0 && (
        <motion.div
          className={`absolute z-30 left-20 top-0 w-72 bg-gray-900 rounded-xl shadow-xl border border-gray-700 p-4 ${
            showProducts ? "block" : "hidden"
          }`}
          initial={{ opacity: 0, x: -10 }}
          animate={{
            opacity: showProducts ? 1 : 0,
            x: showProducts ? 0 : -10,
          }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-white font-semibold">Products at {company}</h3>
            <button onClick={() => setShowProducts(false)} className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div className="space-y-3">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>

          {/* Arrow pointing to the logo */}
          <div className="absolute top-4 left-0 transform -translate-x-1/2 rotate-45 w-3 h-3 bg-gray-900 border-l border-b border-gray-700"></div>
        </motion.div>
      )}
    </div>
  )
}

// Horizontal Timeline Experience Card
const ExperienceCard = ({ experience, index, isActive, onClick }) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={cardRef}
      className={`rounded-2xl p-6 transition-all duration-300 ${
        isActive
          ? "bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-indigo-500/30"
          : "bg-gray-800 hover:bg-gray-750"
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-start">
        <CompanyLogo company={experience.company} logo={experience.logo} products={experience.products} />

        <div className="ml-4">
          <h3 className="text-xl font-semibold text-white">{experience.position}</h3>
          <div className="flex items-center text-indigo-400 font-medium mt-1">{experience.company}</div>

          <div className="flex items-center text-gray-400 text-sm mt-2">
            <Calendar className="h-3 w-3 mr-1" />
            {experience.period}
            <span className="mx-2">•</span>
            <span>{experience.location}</span>
          </div>
        </div>
      </div>

      {isActive && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
          className="mt-6"
        >
          <p className="text-gray-300 mb-4">{experience.description}</p>

          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-200 mb-2">Key Achievements:</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
              {experience.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2 py-1 text-xs rounded-full bg-indigo-900/30 text-indigo-300 border border-indigo-800/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}

// Carousel controls
const CarouselControls = ({ currentIndex, setCurrentIndex, total }) => {
  return (
    <div className="flex justify-center items-center mt-8 space-x-4">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
        disabled={currentIndex === 0}
        className="rounded-full border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800 disabled:opacity-50"
      >
        <ChevronLeft className="h-5 w-5" />
        <span className="sr-only">Previous</span>
      </Button>

      <div className="flex space-x-2">
        {Array.from({ length: total }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-indigo-500 w-6" : "bg-gray-600 hover:bg-gray-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        onClick={() => setCurrentIndex(Math.min(total - 1, currentIndex + 1))}
        disabled={currentIndex === total - 1}
        className="rounded-full border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800 disabled:opacity-50"
      >
        <ChevronRight className="h-5 w-5" />
        <span className="sr-only">Next</span>
      </Button>
    </div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeIndex, setActiveIndex] = useState(0)

  // For parallax effect on scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section id="experience" className="bg-gray-900 py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -right-64 -top-64 w-96 h-96 rounded-full bg-indigo-900/20 blur-3xl"
            style={{ y }}
          />
          <motion.div
            className="absolute -left-64 -bottom-64 w-96 h-96 rounded-full bg-purple-900/20 blur-3xl"
            style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
          />
        </div>

        <motion.div
          ref={ref}
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16 relative z-10"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Building scalable systems and leading engineering teams across various domains
          </p>
        </motion.div>

        {/* Desktop Timeline (hidden on mobile) */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 gap-8">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={index}
                experience={exp}
                index={index}
                isActive={activeIndex === index}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Mobile Carousel (visible only on mobile) */}
        <div className="md:hidden">
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="flex"
            >
              {experiences.map((exp, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <ExperienceCard experience={exp} index={index} isActive={true} onClick={() => {}} />
                </div>
              ))}
            </motion.div>
          </div>

          <CarouselControls currentIndex={activeIndex} setCurrentIndex={setActiveIndex} total={experiences.length} />
        </div>
      </div>
    </section>
  )
}
